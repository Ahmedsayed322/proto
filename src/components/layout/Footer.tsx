import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-dark-950 border-t border-zinc-800/80 text-zinc-300 pt-16 pb-12 mt-24 relative overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-crimson-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          {/* Identity */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-crimson-500" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  AHMED SAYED ABDELNABY
                </span>
              </div>
              <p className="font-mono text-xs text-crimson-400 uppercase tracking-wider mb-4">
                BACKEND ENGINEER · NODE.JS · NESTJS (V11) · TYPESCRIPT
              </p>
              <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                Focused on distributed transactions, atomic concurrency boundaries, real-time messaging, and high-assurance security perimeters.
              </p>
            </div>

            <div className="mt-8 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
              <span>AIN SHAMS UNIVERSITY · B.SC. COMPUTER SCIENCE (2020–2024)</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              SITE MAP
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
                  00 / HOME & PLAYGROUND
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  01 / SYSTEMS & ARCHITECTURE
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                  02 / ABOUT & SPECIFICATION
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  03 / DIRECT CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              CONNECT
            </span>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a
                  href="mailto:ahmedsayed0575@gmail.com"
                  className="group flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-1 border-b border-zinc-800"
                >
                  <span>EMAIL</span>
                  <span className="text-zinc-500 group-hover:text-crimson-400">ahmedsayed0575@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ahmedsayed322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-1 border-b border-zinc-800"
                >
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-crimson-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ahmed-sayed-589477327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-1 border-b border-zinc-800"
                >
                  <span className="flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LINKEDIN</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-crimson-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} AHMED SAYED ABDELNABY</span>
            <span className="text-zinc-700">/</span>
            <span>BACKEND SYSTEMS</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => window.dispatchEvent(new Event('replay-loader'))}
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-crimson-400 transition-colors"
            >
              [ REPLAY INTRO ]
            </button>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 hover:text-crimson-400 transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-crimson-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
