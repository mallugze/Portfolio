import React from 'react';
import { motion } from 'framer-motion';
import Pattern3DCard from '@/components/ui/Pattern3DCard';

const FEATURED_PROJECTS = [
  {
    id: 1,
    number: '01',
    category: 'AI',
    title: 'Myra Conversational AI',
    description: 'An advanced real-time conversational AI system with ultra-low latency. Built using an asynchronous ASGI architecture for concurrent speech-to-text, LLM generation, and text-to-speech pipelines.',
    tags: ['FastAPI', 'LLMs', 'STT/TTS', 'ASGI'],
    githubUrl: 'https://github.com/mallugze/myra-ai-assistant',
    boxBg: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    textColor: '#ffffff',
    accentBorder: '#60a5fa',
  },
  {
    id: 2,
    number: '02',
    category: 'SEC',
    title: 'Distributed SIEM Pipeline',
    description: 'High-throughput security information and event management pipeline. Leverages Kafka message broker for log streaming and log aggregation indexed into Elasticsearch for real-time threat monitoring.',
    tags: ['ELK Stack', 'Kafka', 'Docker', 'SIEM'],
    githubUrl: 'https://github.com/mallugze/SIEM',
    boxBg: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)',
    textColor: '#ffffff',
    accentBorder: '#c084fc',
  },
  {
    id: 3,
    number: '03',
    category: 'ML',
    title: 'AeroCore Telemetry System',
    description: 'A predictive maintenance dashboard that processes real-time telemetry. Uses custom Machine Learning classifiers to predict remaining useful life (RUL) of aircraft components.',
    tags: ['Django', 'ML', 'Predictive RUL', 'Pandas'],
    githubUrl: 'https://github.com/mallugze/aero-core-dashboard',
    boxBg: 'linear-gradient(135deg, #831843 0%, #db2777 100%)',
    textColor: '#ffffff',
    accentBorder: '#f472b6',
  },
  {
    id: 4,
    number: '04',
    category: 'DATA',
    title: 'Time Series Forecasting',
    description: 'Scalable demand prediction engine designed for high-cardinality retail metrics. Incorporates XGBoost gradient boosting and optimized feature engineering to model future demand cycles.',
    tags: ['XGBoost', 'Pandas', 'Demand Pred', 'Forecasting'],
    githubUrl: 'https://github.com/mallugze/Time-Series-Demand-Forecasting-System-using-ARIMA-SARIMA-with-Statistical-Validation',
    boxBg: 'linear-gradient(135deg, #115e59 0%, #0d9488 100%)',
    textColor: '#ffffff',
    accentBorder: '#22d3ee',
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
            Hover over any project card to see the animated diagonal grid pattern shift & 3D title pop-out!
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
              <Pattern3DCard
                number={project.number}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                boxBg={project.boxBg}
                textColor={project.textColor}
                accentBorder={project.accentBorder}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
