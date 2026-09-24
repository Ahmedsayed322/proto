import React, { useEffect, useState } from 'react';
import { Terminal, Shield, Database, Cpu, CheckCircle2, Zap } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

interface LogEntry {
  id: number;
  time: string;
  tag: string;
  message: string;
  icon: typeof Terminal;
}

const SYSTEM_LOGS: LogEntry[] = [
  { id: 1, time: '0.12s', tag: 'KERNEL', message: 'Booting Node.js v24 & NestJS v11 architecture', icon: Cpu },
  { id: 2, time: '0.38s', tag: 'AUTH', message: 'Mounting dual-prefix JWT & role guards', icon: Shield },
  { id: 3, time: '0.65s', tag: 'DATABASE', message: 'Initializing MongoDB atomic transactional pool', icon: Database },
  { id: 4, time: '0.92s', tag: 'REALTIME', message: 'Binding Redis pub/sub broker & Socket.IO rooms', icon: Zap },
  { id: 5, time: '1.20s', tag: 'SECURITY', message: 'Arming Helmet, CORS allowlists & rate limiters', icon: Shield },
  { id: 6, time: '1.45s', tag: 'READY', message: 'All backend systems healthy. Launching UI.', icon: CheckCircle2 },
];

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [visibleLogCount, setVisibleLogCount] = useState<number>(1);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerates towards completion
        const increment = prev < 50 ? Math.floor(Math.random() * 5) + 3 : Math.floor(Math.random() * 8) + 5;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Staggered logs display
    const logInterval = setInterval(() => {
      setVisibleLogCount((prev) => {
        if (prev >= SYSTEM_LOGS.length) {
          clearInterval(logInterval);
          return SYSTEM_LOGS.length;
        }
        return prev + 1;
      });
    }, 240);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 350);

      const unmountTimer = setTimeout(() => {
        onComplete();
      }, 750);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, onComplete]);

  // Allow pressing Escape or Space to skip immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setIsExiting(true);
        setTimeout(onComplete, 200);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-dark-950 text-white overflow-hidden transition-all duration-500 ease-out select-none ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none filter blur-sm'
          : 'opacity-100 scale-100'
      }`}
      aria-label="System Initializing"
    >
      {/* Background Organic Grain & Atmospheric Depth */}
      <div className="absolute inset-0 bg-grain-texture opacity-60 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-crimson-600/10 blur-[140px] pointer-events-none" />

      {/* Top Header Information Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-10 flex items-center justify-between border-b border-zinc-800/80 bg-dark-950/60 backdrop-blur-md text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-crimson-500 animate-ping" />
          <span className="text-zinc-200 font-bold tracking-wider">
            AHMED SAYED ABDELNABY // ARCHITECTURE ENGINE
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-800 hover:border-crimson-500/50 bg-zinc-900/60 text-zinc-400 hover:text-white transition-all text-[11px]"
        >
          <span>SKIP INTRO</span>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 group-hover:text-crimson-400 font-mono">
            ESC
          </kbd>
        </button>
      </div>

      {/* Central Interactive Hero Block */}
      <div className="relative z-10 max-w-2xl w-full mx-6 p-6 sm:p-10 rounded-2xl border border-zinc-800/90 bg-dark-900/90 backdrop-blur-xl shadow-glow-red-lg">
        {/* Animated Rotating Core Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-zinc-800">
          <div className="relative flex items-center justify-center w-24 h-24 flex-shrink-0">
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-crimson-500/50 animate-spin" style={{ animationDuration: '10s' }} />
            {/* Inner Counter-Rotating Ring */}
            <div className="absolute inset-2 rounded-full border border-crimson-500/30 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
            {/* Core Box */}
            <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-crimson-500/60 shadow-glow-red flex items-center justify-center font-mono font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-crimson-500">
              AS
            </div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-crimson-500/30 bg-crimson-950/20 text-crimson-400 font-mono text-[11px] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
              <span>SYSTEM BOOT SEQUENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
              Ahmed Sayed Abdelnaby
            </h2>
            <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Backend Engineer · NestJS (v11) · Node.js · TypeScript · MongoDB
            </p>
          </div>
        </div>

        {/* Live Sequenced Terminal Logs */}
        <div className="space-y-2 mb-8 bg-zinc-950/80 p-4 rounded-xl border border-zinc-800/80 font-mono text-xs min-h-[160px] overflow-hidden flex flex-col justify-end">
          {SYSTEM_LOGS.slice(0, visibleLogCount).map((log) => {
            const Icon = log.icon;
            return (
              <div
                key={log.id}
                className="flex items-center justify-between text-zinc-300 animate-fadeIn"
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-zinc-600 text-[10px] w-10 flex-shrink-0">
                    [{log.time}]
                  </span>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0 text-crimson-500" />
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold flex-shrink-0 bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {log.tag}
                  </span>
                  <span className="truncate text-zinc-300">{log.message}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold flex-shrink-0">
                  OK
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress Bar & Percentage Counter */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
              <span>HYDRATING RUNTIME CONTEXT</span>
            </span>
            <span className="text-crimson-400 font-bold text-sm tracking-wider">
              {progress}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-zinc-950 border border-zinc-800 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-crimson-600 via-rose-600 to-crimson-500 transition-all duration-100 ease-out shadow-glow-red"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Technical Tag */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between border-t border-zinc-800/80 bg-dark-950/60 backdrop-blur-md text-xs font-mono text-zinc-500">
        <div>AIN SHAMS UNIVERSITY · B.SC. COMPUTER SCIENCE</div>
        <div className="text-crimson-500 font-semibold tracking-wider">
          ATOMIC CONCURRENCY READY
        </div>
      </div>
    </div>
  );
};
