import React, { useEffect, useState } from 'react';

interface SectionItem {
  id: string;
  num: string;
  name: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'hero-section', num: '00', name: 'INGRESS' },
  { id: 'featured-work', num: '01', name: 'E-COMMERCE' },
  { id: 'social-media', num: '02', name: 'REAL-TIME' },
  { id: 'saraha-defense', num: '03', name: 'SECURITY' },
  { id: 'tech-stack', num: '04', name: 'STACK' },
  { id: 'about-section', num: '05', name: 'PROFILE' },
  { id: 'contact-section', num: '06', name: 'CONTACT' },
];

export const SectionRadar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero-section');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Detect which section is currently centered/in viewport
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation Radar"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* Scroll percentage mini badge */}
      <div className="text-[10px] font-mono text-zinc-500 mb-1 tracking-wider bg-dark-900/80 px-2 py-0.5 rounded border border-zinc-800 backdrop-blur-sm">
        <span className="text-crimson-400 font-bold">{Math.round(scrollProgress)}%</span> DEPTH
      </div>

      <nav className="flex flex-col items-end gap-2.5 relative">
        {/* Continuous vertical guide line */}
        <div className="absolute right-[5px] top-1 bottom-1 w-[1px] bg-zinc-800 -z-10" />

        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center gap-2.5 text-right focus:outline-none focus-visible:ring-1 focus-visible:ring-crimson-500 rounded py-0.5"
              aria-label={`Jump to section ${sec.num}: ${sec.name}`}
            >
              {/* Tooltip on hover or when active */}
              <span
                className={`text-[10px] font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold opacity-100 translate-x-0'
                    : 'text-zinc-500 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0'
                }`}
              >
                <span className="text-crimson-400 font-semibold mr-1">{sec.num}</span>
                {sec.name}
              </span>

              {/* Pip node */}
              <div
                className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-crimson-500/20 border-2 border-crimson-500 scale-110 shadow-glow-red'
                    : 'bg-zinc-900 border border-zinc-700 group-hover:border-zinc-500 group-hover:scale-105'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-crimson-500 animate-pulse" />
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
