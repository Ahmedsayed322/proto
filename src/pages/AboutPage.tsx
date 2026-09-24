import React from 'react';
import { ArrowUpRight, Mail, GraduationCap, ShieldCheck, Languages, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { SEO } from '../components/common/SEO';
import { RevealOnScroll } from '../components/common/RevealOnScroll';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About & Engineering Background"
        description="Professional background, computer science education, and backend engineering philosophy of Ahmed Sayed Abdelnaby — Ain Shams University graduate specializing in NestJS, Node.js, and TypeScript."
        canonicalPath="/about"
      />

      <main className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <RevealOnScroll direction="up">
            <div className="border-b border-zinc-800 pb-12 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-3">
                PROFILE & BACKGROUND // ENGINEER PERSPECTIVE
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
                Engineering Profile
              </h1>
              <p className="text-base md:text-lg font-sans text-zinc-300 max-w-2xl leading-relaxed">
                Junior Backend Engineer with a strong foundational degree in Computer Science, focused on architecting dependable distributed APIs and real-time backend software.
              </p>
            </div>
          </RevealOnScroll>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 text-base font-sans text-zinc-300 leading-relaxed">
              <RevealOnScroll direction="up" delay={100}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-display text-white tracking-tight">
                    Focus: Systems That Don't Fail Silently
                  </h2>
                  <p>
                    I approach backend software as the foundational bedrock of any digital product. Where frontend user interfaces adapt dynamically, backend services must remain uncompromisingly consistent: handling concurrent checkout requests without inventory corruption, delivering WebSocket frames without packet loss, and verifying payment transactions against cryptographic checksums.
                  </p>
                  <p>
                    My core technical stack centers around <strong className="text-white">Node.js</strong>, <strong className="text-white">NestJS (v11)</strong>, and <strong className="text-white">TypeScript</strong>. I work extensively with document databases (<strong className="text-white">MongoDB with Mongoose ODM</strong>) employing the <strong className="text-white">Repository Pattern</strong> to keep database storage mechanics decoupled from domain business logic.
                  </p>
                  <p>
                    In high-throughput and multi-user environments, I integrate <strong className="text-white">Redis</strong> for distributed caching and pub/sub message brokering, <strong className="text-white">Socket.IO</strong> for low-latency full-duplex communication, and <strong className="text-white">GraphQL</strong> alongside REST for flexible entity graph queries.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Engineering Principles */}
              <RevealOnScroll direction="up" delay={200}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/80 p-6 md:p-8 space-y-6 shadow-card-dark">
                  <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-crimson-400" />
                    <span>Core Engineering Principles</span>
                  </h3>
                  <ul className="space-y-4 text-sm font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-crimson-400 font-mono font-bold mt-0.5">01</span>
                      <div>
                        <strong className="text-white">Atomic Transactions Over Optimistic Assumptions:</strong>
                        <span className="text-zinc-400 block mt-0.5">
                          Multi-document mutations (such as checkout and stock decrements) are wrapped in MongoDB transactional sessions to ensure all-or-nothing execution boundaries.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-crimson-400 font-mono font-bold mt-0.5">02</span>
                      <div>
                        <strong className="text-white">Strict Perimeter Security:</strong>
                        <span className="text-zinc-400 block mt-0.5">
                          Defensive API hygiene: dual-prefix JWT tokens, Argon2/bcrypt password hashing, asymmetric payload protection, Helmet header sanitization, and IP rate limits.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-crimson-400 font-mono font-bold mt-0.5">03</span>
                      <div>
                        <strong className="text-white">Decoupled Architecture:</strong>
                        <span className="text-zinc-400 block mt-0.5">
                          Employing the Repository Pattern to insulate domain rules from direct database queries, ensuring unit-testable and modular codebases.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Credentials & Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Card */}
              <RevealOnScroll direction="left" delay={150}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/80 p-6 md:p-8 shadow-card-dark">
                  <div className="flex items-center gap-2 mb-4 font-mono text-xs text-crimson-400 font-bold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>FORMAL EDUCATION</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    Bachelor of Science in Computer Science
                  </h3>
                  <div className="text-sm font-semibold text-zinc-200 mb-2">
                    Ain Shams University
                  </div>
                  <div className="font-mono text-xs text-zinc-400 mb-4">
                    2020 — 2024 · Cairo, Egypt
                  </div>
                  <p className="text-xs font-sans text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                    Comprehensive academic foundation covering Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, and Distributed Computing.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Status & Languages */}
              <RevealOnScroll direction="left" delay={250}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/80 p-6 md:p-8 space-y-6 shadow-card-dark">
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>MILITARY STATUS</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Completed
                    </div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      Available immediately for full-time on-site, hybrid, and remote engagements.
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-6">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold uppercase tracking-wider">
                      <Languages className="w-4 h-4" />
                      <span>LANGUAGES</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex justify-between py-1 border-b border-zinc-800">
                        <span className="text-zinc-200 font-semibold">Arabic</span>
                        <span className="text-crimson-400 font-bold">Native</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-zinc-200 font-semibold">English</span>
                        <span className="text-zinc-400">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Profiles */}
              <RevealOnScroll direction="left" delay={350}>
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950 space-y-3 font-mono text-xs">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                    PROFILES & CONNECT
                  </span>
                  <a
                    href="https://github.com/Ahmedsayed322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-2 border-b border-zinc-800"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Profile</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://linkedin.com/in/ahmed-sayed-589477327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-2 border-b border-zinc-800"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="mailto:ahmedsayed0575@gmail.com"
                    className="flex items-center justify-between text-zinc-300 hover:text-crimson-400 transition-colors py-2"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
