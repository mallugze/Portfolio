import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import FolderPreview from '@/components/ui/FolderPreview';

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Myra Conversational AI',
    description: 'An advanced real-time conversational AI system with ultra-low latency. Built using an asynchronous ASGI architecture for concurrent speech-to-text, LLM generation, and text-to-speech pipelines.',
    tags: ['FastAPI', 'LLMs', 'STT/TTS', 'ASGI'],
    variant: 'devi',
    glowColor: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:border-blue-500/40',
    github: 'https://github.com/mallugze',
    demo: '#',
  },
  {
    id: 2,
    title: 'Distributed SIEM Pipeline',
    description: 'High-throughput security information and event management pipeline. Leverages Kafka message broker for log streaming and log aggregation indexed into Elasticsearch for real-time threat monitoring.',
    tags: ['ELK Stack', 'Kafka', 'Docker', 'SIEM'],
    variant: 'rudras',
    glowColor: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-purple-500/40',
    github: 'https://github.com/mallugze',
    demo: '#',
  },
  {
    id: 3,
    title: 'AeroCore Telemetry System',
    description: 'A predictive maintenance dashboard that processes real-time telemetry. Uses custom Machine Learning classifiers to predict remaining useful life (RUL) of aircraft components.',
    tags: ['Django', 'ML', 'Predictive RUL', 'Pandas'],
    variant: 'ardra',
    glowColor: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:border-pink-500/40',
    github: 'https://github.com/mallugze',
    demo: '#',
  },
  {
    id: 4,
    title: 'Time Series Forecasting',
    description: 'Scalable demand prediction engine designed for high-cardinality retail metrics. Incorporates XGBoost gradient boosting and optimized feature engineering to model future demand cycles.',
    tags: ['XGBoost', 'Pandas', 'Demand Pred', 'Forecasting'],
    variant: 'shakti',
    glowColor: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:border-cyan-500/40',
    github: 'https://github.com/mallugze',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 bg-black dots-bg">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-neonBlue uppercase">// Crafted Works</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-4">
            Hover over any project folder to reveal its technical stack & architecture!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className={`glass group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-[#121212]/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${project.glowColor}`}
            >
              {/* Folder Display Area */}
              <div className="w-full flex items-center justify-center py-6 mb-4 relative min-h-[160px] bg-white/[0.02] rounded-xl border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                <FolderPreview
                  variant={project.variant}
                  tags={project.tags}
                  size="lg"
                />
              </div>

              {/* Project Title & Description */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-neonBlue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-gray-400 ml-4 pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neonBlue transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="hover:text-neonPurple transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Static Tech Stack Badges at Bottom */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-gray-300 bg-white/5 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
