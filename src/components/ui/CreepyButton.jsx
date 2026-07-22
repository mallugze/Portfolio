import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CreepyButton = ({
  children,
  className,
  coverClassName,
  onClick,
  ...props
}) => {
  const eyesRef = useRef(null);
  const [eyeCoords, setEyeCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const updateEyes = (e) => {
    const userEvent = "touches" in e ? e.touches[0] : e;
    if (!eyesRef.current) return;

    // get the center of the eyes container
    const eyesRect = eyesRef.current.getBoundingClientRect();
    const eyesCenter = {
      x: eyesRect.left + eyesRect.width / 2,
      y: eyesRect.top + eyesRect.height / 2,
    };

    // cursor position
    const cursor = {
      x: userEvent.clientX,
      y: userEvent.clientY,
    };

    // calculate the eye angle
    const dx = cursor.x - eyesCenter.x;
    const dy = cursor.y - eyesCenter.y;
    const angle = Math.atan2(-dy, dx) + Math.PI / 2;

    // pupil distance from the eye center
    const visionRangeX = 180; // Max distance to look horizontally
    const visionRangeY = 75; // Max distance to look vertically
    const distance = Math.hypot(dx, dy);

    // Limit the movement so pupils don't go too far
    const x = (Math.sin(angle) * Math.min(distance, visionRangeX)) / visionRangeX;
    const y = (Math.cos(angle) * Math.min(distance, visionRangeY)) / visionRangeY;

    setEyeCoords({ x, y });
  };

  // Reset eyes when mouse leaves
  const resetEyes = () => {
    setEyeCoords({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const pupilStyle = {
    transform: `translate(calc(-50% + ${eyeCoords.x * 50}%), calc(-50% + ${eyeCoords.y * 50}%))`,
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg bg-black cursor-pointer outline-none select-none group tap-highlight-transparent overflow-visible",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400",
        className
      )}
      onClick={onClick}
      onMouseMove={(e) => {
        updateEyes(e);
        setIsHovered(true);
      }}
      onTouchMove={updateEyes}
      onMouseLeave={resetEyes}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      {...props}
    >
      {/* Eyes Container */}
      <span
        ref={eyesRef}
        className="absolute flex items-center gap-[0.375em] right-[1.25em] bottom-[0.6em] h-[0.75em] z-0 pointer-events-none"
      >
        {/* Left Eye */}
        <motion.span
          className="relative w-[0.75em] bg-white rounded-full overflow-hidden"
          animate={{ height: ["0.75em", "0.75em", "0em", "0.75em"] }}
          transition={{
            duration: 3,
            times: [0, 0.92, 0.96, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="absolute top-1/2 left-1/2 w-[0.375em] h-[0.375em] bg-black rounded-full transition-transform duration-75 ease-out"
            style={pupilStyle}
          />
        </motion.span>
        {/* Right Eye */}
        <motion.span
          className="relative w-[0.75em] bg-white rounded-full overflow-hidden"
          animate={{ height: ["0.75em", "0.75em", "0em", "0.75em"] }}
          transition={{
            duration: 3,
            times: [0, 0.92, 0.96, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="absolute top-1/2 left-1/2 w-[0.375em] h-[0.375em] bg-black rounded-full transition-transform duration-75 ease-out"
            style={pupilStyle}
          />
        </motion.span>
      </span>

      {/* Button Cover (Preserving original dark color & styling) */}
      <motion.span
        className={cn(
          "absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[#18181b] border border-white/10 text-gray-300 font-medium text-sm px-6 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] whitespace-nowrap",
          "origin-[1.25em_50%]",
          coverClassName
        )}
        animate={{
          rotate: isHovered ? -12 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      >
        {children}
      </motion.span>

      {/* Invisible placeholder to maintain size since cover is absolute */}
      <span className="inline-flex items-center justify-center px-6 py-3 font-medium text-sm opacity-0 pointer-events-none whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default CreepyButton;
