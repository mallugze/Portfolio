import React from 'react';
import BubbleMenu from '@/components/ui/BubbleMenu';

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-black backdrop-blur-md border-b border-white/5 select-none">
        {/* Top Left Text Logo */}
        <a href="#about" className="font-display font-black text-sm md:text-base text-white tracking-[0.25em] uppercase hover:text-neonPurple transition-colors">
          PORTFOLIO
        </a>

        {/* Nav Link Container */}
        <div className="flex gap-2 sm:gap-4 items-center relative mr-16">
          {/* "Click on this" Link */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const toggleBtn = document.querySelector('.toggle-bubble');
              if (toggleBtn) {
                toggleBtn.click();
              }
            }}
            className="silvery-glow font-mono text-xs uppercase tracking-wider font-bold mr-2 cursor-pointer"
          >
            Click on this
          </a>
        </div>
      </nav>

      {/* Bubble Menu Component */}
      <BubbleMenu
        logo={null}
        menuBg="#a855f7" /* neonPurple theme */
        menuContentColor="#ffffff"
        useFixedPosition={true}
        className="navbar-bubble-menu"
      />
    </>
  );
}
