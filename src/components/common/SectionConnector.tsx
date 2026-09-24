import React from 'react';
import { ArrowDown } from 'lucide-react';

interface SectionConnectorProps {
  label: string;
  sublabel?: string;
  step?: string;
}

export const SectionConnector: React.FC<SectionConnectorProps> = ({
  label,
  sublabel,
  step,
}) => {
  return (
    <div className="relative w-full py-8 md:py-12 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Ambient background glow flare */}
      <div 
        className="absolute w-96 h-24 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Horizontal Laser Line */}
      <div className="section-laser-line w-full" />

      {/* Center Capsule Bridge */}
      <div className="relative -mt-3.5 z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full border border-zinc-700/80 bg-dark-900/90 backdrop-blur-md shadow-card-dark text-[11px] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500" />
          </span>

          {step && (
            <span className="font-bold text-crimson-400 tracking-wider">
              {step}
            </span>
          )}

          <span className="text-zinc-300 font-semibold tracking-wider uppercase">
            {label}
          </span>

          {sublabel && (
            <span className="text-zinc-500 hidden sm:inline-block">
              // {sublabel}
            </span>
          )}

          <ArrowDown className="w-3 h-3 text-crimson-500 animate-bounce ml-0.5" />
        </div>

        {/* Vertical laser conduit stem */}
        <div className="h-8 w-[1px] conduit-laser-v mt-1" />
      </div>
    </div>
  );
};
