import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/projects') {
      return location.pathname === '/projects' || location.pathname.startsWith('/projects/');
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-dark-950/80 border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-crimson-500/50 group-hover:shadow-glow-red transition-all">
            <Terminal className="w-4 h-4 text-crimson-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base md:text-lg tracking-tight text-white group-hover:text-crimson-400 transition-colors">
              AHMED SAYED
            </span>
            <span className="text-[10px] md:text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
              BACKEND ENGINEER
            </span>
          </div>
        </Link>

        {/* Live Availability Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>OPEN FOR BACKEND ROLES</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative text-xs uppercase tracking-wider font-mono transition-colors py-1 ${
                      active
                        ? 'text-crimson-400 font-bold'
                        : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-crimson-500 shadow-glow-red" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Replay Intro Trigger */}
          <button
            onClick={() => window.dispatchEvent(new Event('replay-loader'))}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-800 hover:border-crimson-500/50 bg-zinc-900/60 text-[11px] font-mono text-zinc-400 hover:text-white transition-all group"
            title="Replay intro animation"
          >
            <Sparkles className="w-3 h-3 text-crimson-500 group-hover:rotate-12 transition-transform" />
            <span>INTRO</span>
          </button>

          <div className="h-4 w-[1px] bg-zinc-800" />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ahmedsayed322"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-sayed-589477327"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-dark-900/95 backdrop-blur-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN FOR BACKEND ROLES</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono uppercase tracking-wider flex items-center justify-between py-2 border-b border-zinc-800 ${
                  isActive(link.href) ? 'text-crimson-400 font-bold' : 'text-zinc-300'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-500">0{navLinks.indexOf(link) + 1}</span>
              </Link>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">CONNECT</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Ahmedsayed322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-300 hover:text-crimson-400 flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-crimson-500" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-sayed-589477327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-300 hover:text-crimson-400 flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-crimson-500" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
