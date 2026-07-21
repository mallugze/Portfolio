import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Glass3DCard({
  title,
  description,
  tags = [],
  githubUrl = 'https://github.com/mallugze',
  cardGradient = 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 100%)',
  circleBg = 'rgba(59, 130, 246, 0.25)',
  titleColor = '#60a5fa',
  accentColor = '#3b82f6',
  icon: Icon,
}) {
  return (
    <div className="glass-3d-parent">
      <div
        className="glass-3d-card border border-white/10"
        style={{ background: cardGradient }}
      >
        {/* Concentric Floating 3D Logo Circles */}
        <div className="glass-3d-logo">
          <span className="circle circle1" style={{ background: circleBg }} />
          <span className="circle circle2" style={{ background: circleBg }} />
          <span className="circle circle3" style={{ background: circleBg }} />
          <span className="circle circle4" style={{ background: circleBg }} />
          <span
            className="circle circle5 border border-white/20"
            style={{ background: accentColor }}
          >
            {Icon ? (
              <Icon className="w-5 h-5 text-white" />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )}
          </span>
        </div>

        {/* 3D Glass Layer */}
        <div className="glass-3d-glass" />

        {/* Card Content */}
        <div className="glass-3d-content">
          <h3 className="font-display font-extrabold text-2xl tracking-tight mb-2.5 max-w-[70%]" style={{ color: titleColor }}>
            {title}
          </h3>
          <p className="text-gray-200/90 text-sm leading-relaxed mb-5 max-w-[75%] font-sans line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Badges - Placed with clean bottom padding so no overlap occurs */}
          <div className="flex flex-wrap gap-2 pb-16">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium text-white/95 bg-white/10 border border-white/20 backdrop-blur-md shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Bottom Area: Dedicated Lifted GitHub Button */}
        <div className="glass-3d-bottom">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-3d-github-btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-mono text-xs font-bold shadow-xl group border border-white/30"
            title="View on GitHub"
          >
            <FaGithub className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
