import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Activity, Terminal } from 'lucide-react';
import Glass3DCard from '@/components/ui/Glass3DCard';

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Myra Conversational AI',
    description: 'An advanced real-time conversational AI system with ultra-low latency. Built using an asynchronous ASGI architecture for concurrent speech-to-text, LLM generation, and text-to-speech pipelines.',
    tags: ['FastAPI', 'LLMs', 'STT/TTS', 'ASGI'],
    githubUrl: 'https://github.com/mallugze',
    cardGradient: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 100%)',
    circleBg: 'rgba(59, 130, 246, 0.25)',
    titleColor: '#60a5fa',
    accentColor: '#3b82f6',
    icon: Cpu,
  },
  {
    id: 2,
    title: 'Distributed SIEM Pipeline',
    description: 'High-throughput security information and event management pipeline. Leverages Kafka message broker for log streaming and log aggregation indexed into Elasticsearch for real-time threat monitoring.',
    tags: ['ELK Stack', 'Kafka', 'Docker', 'SIEM'],
    githubUrl: 'https://github.com/mallugze',
    cardGradient: 'linear-gradient(135deg, rgba(24, 0, 46, 0.95) 0%, rgba(76, 29, 149, 0.95) 100%)',
    circleBg: 'rgba(168, 85, 247, 0.25)',
    titleColor: '#c084fc',
    accentColor: '#a855f7',
    icon: Shield,
  },
  {
    id: 3,
    title: 'AeroCore Telemetry System',
    description: 'A predictive maintenance dashboard that processes real-time telemetry. Uses custom Machine Learning classifiers to predict remaining useful life (RUL) of aircraft components.',
    tags: ['Django', 'ML', 'Predictive RUL', 'Pandas'],
    githubUrl: 'https://github.com/mallugze',
    cardGradient: 'linear-gradient(135deg, rgba(42, 8, 29, 0.95) 0%, rgba(131, 24, 67, 0.95) 100%)',
    circleBg: 'rgba(236, 72, 153, 0.25)',
    titleColor: '#f472b6',
    accentColor: '#ec4899',
    icon: Activity,
  },
  {
    id: 4,
    title: 'Time Series Forecasting',
    description: 'Scalable demand prediction engine designed for high-cardinality retail metrics. Incorporates XGBoost gradient boosting and optimized feature engineering to model future demand cycles.',
    tags: ['XGBoost', 'Pandas', 'Demand Pred', 'Forecasting'],
    githubUrl: 'https://github.com/mallugze',
    cardGradient: 'linear-gradient(135deg, rgba(4, 47, 46, 0.95) 0%, rgba(14, 116, 144, 0.95) 100%)',
    circleBg: 'rgba(34, 211, 238, 0.25)',
    titleColor: '#22d3ee',
    accentColor: '#06b6d4',
    icon: Terminal,
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
            Hover over any card to experience the interactive 3D glass tilt & floating concentric circles!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Glass3DCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                cardGradient={project.cardGradient}
                circleBg={project.circleBg}
                titleColor={project.titleColor}
                accentColor={project.accentColor}
                icon={project.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
