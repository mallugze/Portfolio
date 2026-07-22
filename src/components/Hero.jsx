import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import GlassDock from '@/components/ui/glass-dock';
import CreepyButton from '@/components/ui/CreepyButton';

export default function Hero() {
  const dockItems = [
    {
      title: 'LinkedIn',
      icon: () => null,
      onClick: () => {
        window.open('https://www.linkedin.com/in/mallikarjun-842509326', '_blank');
      }
    },
    {
      title: 'GitHub',
      icon: () => null,
      onClick: () => {
        window.open('https://github.com/mallugze', '_blank');
      }
    },
    {
      title: 'Email',
      icon: () => null,
      onClick: () => {
        window.location.href = 'mailto:mallikarjunpx@gmail.com';
      }
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 lg:py-0 overflow-hidden dots-bg">
      {/* 3D Robot Background */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[150vw] h-full z-0 pointer-events-auto mix-blend-screen">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          fallback={
            <div className="absolute inset-0 bg-darkBg flex items-center justify-center">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-neonPurple/20 blur-3xl filter animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-neonBlue/20 blur-3xl filter animate-pulse" />
              <img
                src="/hero_ai_graphic.png"
                alt="AI Circuit Graphic"
                className="max-w-2xl w-full h-auto opacity-45 filter brightness-95 contrast-105 border border-white/5 rounded-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          }
        />
      </div>

      {/* Main Content Overlay */}
      <div className="w-full max-w-7xl mx-auto z-10 relative pointer-events-none">
        {/* Left Side: Details */}
        <div className="flex flex-col justify-center text-left w-full lg:w-1/2 pointer-events-none">
          {/* Huge Name: MALLIKARJUN */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 w-full"
          >
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-550 uppercase break-words leading-none">
              MALLIKARJUN
            </h1>
          </motion.div>

          {/* Subtitle Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-550 mb-6"
          >
            AI & ML Engineer
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-4"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Intelligent</span> Systems
          </motion.h1>

          {/* Updated Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
          >
            I am an AIML undergraduate passionate about building intelligent and scalable software solutions. My interests include Machine Learning, Large Language Models, backend development, and data-driven applications. I enjoy transforming complex problems into practical AI solutions through hands-on projects and continuously expanding my technical expertise.
          </motion.p>

          {/* Button Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center pointer-events-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-neonBlue to-neonPurple hover:brightness-110 shadow-neonBlue transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Mallikarjun_Resume.pdf"
              className="inline-block"
            >
              <CreepyButton
                coverClassName="bg-[#18181b] border border-white/10 text-gray-300 hover:text-white"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <FileText className="w-4 h-4 text-neonPurple" />
                  <span className="whitespace-nowrap">Download Resume</span>
                </div>
              </CreepyButton>
            </a>
          </motion.div>

          {/* Floating Glass Dock (integrated under Hero details) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pointer-events-auto"
          >
            <GlassDock items={dockItems} />
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none opacity-45">
        <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
