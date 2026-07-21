"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ============================================
// SVG Icon Components
// ============================================

const FolderBackIcon = ({ className }) => (
    <svg viewBox="0 0 20 16" className={cn("w-full h-full fill-current", className)}>
        <path d="M7.5,0C7.4,0,2,0,2,0C0.9,0,0,0.9,0,2l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2c0,0-7.5,0-8,0C9,2,9.9,0,7.5,0z" />
    </svg>
);

const FolderCoverIcon = ({ className }) => (
    <svg viewBox="0 0 20 16" className={cn("w-full h-full fill-current", className)}>
        <path d="M2,2h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V4C0,2.9,0.9,2,2,2z" />
    </svg>
);

const UsersIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full fill-current", className)}>
        <path
            opacity="0.3"
            d="M22.2,17.7l-4-2c-0.5-0.3-0.8-0.8-0.8-1.3v-1.6c0.1-0.1,0.2-0.3,0.4-0.5c0.5-0.8,0.9-1.6,1.2-2.5c0.5-0.2,0.9-0.6,0.9-1.2V7c0-0.4-0.2-0.7-0.4-0.9V3.7c0,0,0.5-3.7-4.6-3.7c-5,0-4.6,3.7-4.6,3.7v2.4C10.1,6.3,9.9,6.7,9.9,7v1.7c0,0.4,0.2,0.8,0.6,1c0.4,1.8,1.5,3.1,1.5,3.1v1.5c0,0.6-0.3,1.1-0.8,1.3l-3.7,2c-1.1,0.6-1.7,1.7-1.7,2.9v1.3H24v-1.3C24,19.4,23.3,18.3,22.2,17.7z"
        />
        <path
            opacity="0.5"
            d="M7.5,17.7l2.5-1.3c0,0,0,0,0,0l1.2-0.7c0.5-0.3,0.8-0.8,0.8-1.3v-1.5c0,0-0.4-0.5-0.9-1.4l0,0c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.4c0,0,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c-0.3-0.2-0.6-0.6-0.6-1V7c0-0.4,0.2-0.7,0.4-0.9V3.8C9.8,3.3,8.9,2.9,7.4,2.9c-4,0-4.1,3.3-4.1,3.3v2.1C3.1,8.5,2.9,8.8,2.9,9.1v1.4c0,0.4,0.2,0.7,0.5,0.9c0.4,1.6,1.6,2.7,1.6,2.7v1.3c0,0.5-0.3,0.9-0.7,1.1l-2.8,1.7C0.6,18.8,0,19.7,0,20.8v1.2h5.8v-1.3C5.8,19.4,6.5,18.3,7.5,17.7z"
        />
    </svg>
);

const GlobeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={cn("w-full h-full fill-current", className)}>
        <circle cx="12" cy="12" r="10" opacity="0.3" />
        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z" />
    </svg>
);

const PadlockIcon = ({ className }) => (
    <svg viewBox="0 0 24 33.6" className={cn("w-full h-full fill-current", className)}>
        <path d="M23,13.5h-1.7V9.4C21.4,4.2,17.2,0,12,0C6.8,0,2.6,4.2,2.6,9.4v4.1H1c-0.5,0-1,0.4-1,1v18.2c0,0.5,0.4,1,1,1H23c0.5,0,1-0.4,1-1V14.4C24,13.9,23.6,13.5,23,13.5z M13.5,24.5v3.9c0,0.3-0.3,0.6-0.6,0.6h-1.8c-0.3,0-0.6-0.3-0.6-0.6v-3.9c-0.7-0.5-1.1-1.3-1.1-2.1c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6C14.6,23.3,14.2,24.1,13.5,24.5z M16.9,13.5H7.1V9.4c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9V13.5z" />
    </svg>
);

const CloudIcon = ({ className }) => (
    <svg viewBox="0 0 24 22.2" className={cn("w-full h-full fill-current", className)}>
        <path d="M19.5,5.8c-0.3-1.5-1-2.9-2.2-4c-1.3-1.2-3-1.8-4.7-1.8C11.3,0,10,0.4,8.9,1.1C8,1.7,7.2,2.5,6.6,3.5c-0.2,0-0.5-0.1-0.7-0.1c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.5,0.1,0.8C0.8,9,0,10.6,0,12.3C0,13.6,0.5,15,1.4,16c1,1.1,2.2,1.7,3.6,1.8c0,0,0,0,0,0h4.2c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H5c-2-0.1-3.7-2-3.7-4.2c0-1.4,0.8-2.7,2-3.4c0.3-0.2,0.4-0.5,0.3-0.8C3.5,7.8,3.4,7.5,3.4,7.2c0-1.4,1.1-2.5,2.5-2.5c0.3,0,0.6,0,0.8,0.1c0.3,0.1,0.7,0,0.8-0.3c0.9-2,2.9-3.2,5.1-3.2c2.9,0,5.3,2.2,5.6,5.1c0,0.3,0.3,0.5,0.6,0.6c2.2,0.4,3.9,2.4,3.9,4.7c0,2.5-1.9,4.6-4.3,4.8h-3.6c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h3.7c0,0,0,0,0,0c1.5-0.1,2.9-0.8,4-2c1-1.1,1.6-2.6,1.6-4.1C24,8.9,22.1,6.5,19.5,5.8z M16,12.9c0.3-0.3,0.3-0.7,0-0.9l-3.5-3.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0.1-0.5,0.2L8,12c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l2.4-2.4v11c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-11l2.4,2.4C15.3,13.2,15.7,13.2,16,12.9z" />
    </svg>
);

// Color Schemes
const variantColors = {
    devi: {
        back: "text-gray-500",
        cover: "text-gray-400",
        deco: "text-gray-400 brightness-125",
        caption: "text-gray-200",
        bg: "bg-gray-900",
    },
    rudras: {
        back: "text-purple-700",
        cover: "text-purple-500",
        deco: "text-purple-300",
        caption: "text-purple-300",
        bg: "bg-slate-900",
    },
    ardra: {
        back: "text-blue-800",
        cover: "text-blue-600",
        deco: "text-blue-400",
        caption: "text-blue-400",
        bg: "bg-gray-950",
    },
    shakti: {
        back: "text-pink-800",
        cover: "text-pink-600",
        deco: "text-pink-400",
        caption: "text-pink-400",
        bg: "bg-blue-900",
    },
};

const sizeConfig = {
    sm: { folder: "w-16", deco: "w-4 h-4", caption: "text-xs" },
    md: { folder: "w-24", deco: "w-6 h-6", caption: "text-sm" },
    lg: { folder: "w-32", deco: "w-8 h-8", caption: "text-base" },
};

const createCircularPositions = (count, radius = 95) => {
    return Array.from({ length: count }, (_, i) => {
        const startAngle = Math.PI;
        const angle = (startAngle / (count - 1 || 1)) * i;
        return {
            x: Math.round(radius * Math.cos(angle)),
            y: Math.round(-radius * Math.sin(angle)),
        };
    });
};

const DeviFolder = ({ tags = [], isHovered, colors, sizes, label }) => {
    const positions = createCircularPositions(tags.length, 90);

    return (
        <div className="relative">
            {/* Tech Stack Floating Badges on Hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                {tags.map((tag, i) => (
                    <motion.div
                        key={i}
                        className="absolute px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-black/90 text-neonBlue border border-neonBlue/40 shadow-[0_0_12px_rgba(59,130,246,0.5)] backdrop-blur-md whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                        animate={
                            isHovered
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: positions[i]?.x || 0,
                                    y: positions[i]?.y || 0,
                                }
                                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
                        }
                        transition={{
                            duration: 0.5,
                            delay: i * 0.06,
                            type: "spring",
                            stiffness: 220,
                            damping: 16,
                        }}
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>

            {/* Folder */}
            <div className="relative cursor-pointer aspect-[20/16]" style={{ perspective: "800px" }}>
                <div className={cn("absolute inset-0 transition-colors duration-150", colors.back)}>
                    <FolderBackIcon />
                </div>
                <motion.div
                    className={cn("relative transition-colors duration-150", colors.cover)}
                    style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
                    animate={isHovered ? { rotateX: -30 } : { rotateX: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <FolderCoverIcon />
                    <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", sizes.deco, colors.deco)}>
                        <UsersIcon />
                    </div>
                </motion.div>
            </div>

            {label && (
                <h3 className={cn("mt-3 font-semibold text-center", sizes.caption, colors.caption)}>
                    {label}
                </h3>
            )}
        </div>
    );
};

const RudrasFolder = ({ tags = [], isHovered, colors, sizes, label }) => {
    const positions = createCircularPositions(tags.length, 90);

    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                {tags.map((tag, i) => (
                    <motion.div
                        key={i}
                        className="absolute px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-black/90 text-neonPurple border border-neonPurple/40 shadow-[0_0_12px_rgba(168,85,247,0.5)] backdrop-blur-md whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                        animate={
                            isHovered
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: positions[i]?.x || 0,
                                    y: positions[i]?.y || 0,
                                }
                                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
                        }
                        transition={{
                            duration: 0.5,
                            delay: i * 0.06,
                            type: "spring",
                            stiffness: 220,
                            damping: 16,
                        }}
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>

            <div className="relative cursor-pointer aspect-[20/16]" style={{ perspective: "800px" }}>
                <div className={cn("absolute inset-0", colors.back)}>
                    <FolderBackIcon />
                </div>
                <div className="absolute bottom-0.5 left-0.5 right-0.5 h-3/4 bg-white/10 rounded-lg backdrop-blur-sm" />
                <motion.div
                    className={cn("relative", colors.cover)}
                    style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
                    animate={isHovered ? { rotateX: -35 } : { rotateX: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <FolderCoverIcon />
                    <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", sizes.deco, colors.deco)}>
                        <GlobeIcon />
                    </div>
                </motion.div>
            </div>

            {label && (
                <h3 className={cn("mt-3 font-semibold text-center", sizes.caption, colors.caption)}>
                    {label}
                </h3>
            )}
        </div>
    );
};

const ArdraFolder = ({ tags = [], isHovered, colors, sizes, label }) => {
    const positions = createCircularPositions(tags.length, 90);

    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                {tags.map((tag, i) => (
                    <motion.div
                        key={i}
                        className="absolute px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-black/90 text-neonPink border border-neonPink/40 shadow-[0_0_12px_rgba(236,72,153,0.5)] backdrop-blur-md whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                        animate={
                            isHovered
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: positions[i]?.x || 0,
                                    y: positions[i]?.y || 0,
                                }
                                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
                        }
                        transition={{
                            duration: 0.5,
                            delay: i * 0.06,
                            type: "spring",
                            stiffness: 220,
                            damping: 16,
                        }}
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="relative cursor-pointer aspect-[20/16]"
                animate={isHovered ? { scale: 0.92 } : { scale: 1 }}
                transition={{ duration: 0.3, ease: [0.1, 1, 0.3, 1] }}
            >
                <div className={cn("absolute inset-0", colors.back)}>
                    <FolderBackIcon />
                </div>
                <div className={cn("relative", colors.cover)}>
                    <FolderCoverIcon />
                    <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", sizes.deco, colors.deco)}>
                        <PadlockIcon />
                    </div>
                </div>
            </motion.div>

            {label && (
                <h3 className={cn("mt-3 font-semibold text-center", sizes.caption, colors.caption)}>
                    {label}
                </h3>
            )}
        </div>
    );
};

const ShaktiFolder = ({ tags = [], isHovered, colors, sizes, label }) => {
    const positions = createCircularPositions(tags.length, 90);

    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                {tags.map((tag, i) => (
                    <motion.div
                        key={i}
                        className="absolute px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-black/90 text-cyan-400 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.5)] backdrop-blur-md whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                        animate={
                            isHovered
                                ? {
                                    opacity: 1,
                                    scale: 1,
                                    x: positions[i]?.x || 0,
                                    y: positions[i]?.y || 0,
                                }
                                : { opacity: 0, scale: 0.4, x: 0, y: 0 }
                        }
                        transition={{
                            duration: 0.5,
                            delay: i * 0.06,
                            type: "spring",
                            stiffness: 220,
                            damping: 16,
                        }}
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>

            <div className="relative cursor-pointer aspect-[20/16]" style={{ perspective: "800px" }}>
                <div className={cn("absolute inset-0", colors.back)}>
                    <FolderBackIcon />
                </div>
                <motion.div
                    className={cn("relative", colors.cover)}
                    style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
                    animate={isHovered ? { rotateX: -35 } : { rotateX: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <FolderCoverIcon />
                    <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", sizes.deco, colors.deco)}>
                        <CloudIcon />
                    </div>
                </motion.div>
            </div>

            {label && (
                <h3 className={cn("mt-3 font-semibold text-center", sizes.caption, colors.caption)}>
                    {label}
                </h3>
            )}
        </div>
    );
};

export const FolderPreview = React.forwardRef(
    (
        {
            variant = "devi",
            tags = [],
            label,
            size = "md",
            className,
            onClick,
        },
        ref
    ) => {
        const [isHovered, setIsHovered] = React.useState(false);
        const colors = variantColors[variant] || variantColors.devi;
        const sizes = sizeConfig[size] || sizeConfig.md;

        const renderFolder = () => {
            const props = { tags, isHovered, colors, sizes, label };

            switch (variant) {
                case "devi":
                    return <DeviFolder {...props} />;
                case "rudras":
                    return <RudrasFolder {...props} />;
                case "ardra":
                    return <ArdraFolder {...props} />;
                case "shakti":
                    return <ShaktiFolder {...props} />;
                default:
                    return <DeviFolder {...props} />;
            }
        };

        return (
            <div
                ref={ref}
                className={cn("inline-flex flex-col items-center overflow-visible select-none", sizes.folder, className)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >
                {renderFolder()}
            </div>
        );
    }
);

FolderPreview.displayName = "FolderPreview";

export default FolderPreview;
