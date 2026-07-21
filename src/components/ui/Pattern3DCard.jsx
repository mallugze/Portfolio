import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Pattern3DCard({
  number = '01',
  category = 'AI',
  title,
  description,
  tags = [],
  githubUrl = 'https://github.com/mallugze',
  boxBg = '#3b82f6',
  textColor = '#ffffff',
  accentBorder = '#60a5fa',
}) {
  return (
    <div className="pattern-3d-parent select-none">
      <div className="pattern-3d-card">
        {/* Floating 3D Date/Category Box at top right */}
        <div className="pattern-3d-date-box" style={{ border: `1px solid ${accentBorder}` }}>
          <span className="month" style={{ color: accentBorder }}>{category}</span>
          <span className="date" style={{ color: accentBorder }}>{number}</span>
        </div>

        {/* Content Box */}
        <div className="pattern-3d-content-box" style={{ background: boxBg }}>
          <span className="card-title font-display" style={{ color: textColor }}>
            {title}
          </span>
          <p className="card-content" style={{ color: textColor === '#ffffff' ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)' }}>
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4 transform translate-z-[35px]" style={{ transform: 'translate3d(0, 0, 35px)' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                style={{
                  background: 'rgba(20, 20, 20, 0.4)',
                  color: textColor,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button: ONLY GitHub */}
          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="see-more group"
              style={{ color: accentBorder }}
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
