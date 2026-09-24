import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import { SEO } from '../components/common/SEO';
import { PROJECTS } from '../data/projects';
import { RevealOnScroll } from '../components/common/RevealOnScroll';

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Engineering Systems & Projects"
        description="Detailed index of backend systems, APIs, and real-time architectures engineered by Ahmed Sayed Abdelnaby using NestJS, Node.js, TypeScript, MongoDB, and Redis."
        canonicalPath="/projects"
      />

      <main className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <RevealOnScroll direction="up">
            <div className="border-b border-zinc-800 pb-12 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-3">
                SYSTEM ARCHIVES // PRODUCTION PORTFOLIO
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
                Engineering Systems
              </h1>
              <p className="text-base md:text-lg font-sans text-zinc-300 max-w-2xl leading-relaxed">
                Three production-grade backend projects demonstrating transactional boundaries, dual-prefix authorization, real-time event distribution, and defensive security.
              </p>
            </div>
          </RevealOnScroll>

          {/* Large Project Rows */}
          <div className="space-y-12">
            {PROJECTS.map((project, idx) => (
              <RevealOnScroll key={project.id} direction="up" delay={idx * 150}>
                <article
                  className="rounded-2xl border border-zinc-800 bg-dark-900/80 p-8 md:p-12 hover:border-crimson-500/40 hover:shadow-glow-red transition-all duration-300 shadow-card-dark"
                >
                {/* Top Meta Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl md:text-3xl font-bold font-mono text-crimson-400">
                      {project.number}
                    </span>
                    <span className="h-4 w-[1px] bg-zinc-800" />
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                      <ArrowUpRight className="w-3 h-3 text-crimson-400" />
                    </a>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-glow-red transition-all"
                    >
                      <span>OPEN SPEC</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight mb-2">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="hover:text-crimson-400 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <div className="text-xs font-mono text-crimson-400 uppercase tracking-wider mb-6">
                      {project.subtitle}
                    </div>

                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metric callout if any */}
                    {project.metrics && (
                      <div className="p-4 rounded-xl border border-crimson-500/30 bg-crimson-950/20 mb-6 font-mono">
                        <div className="text-2xl font-bold text-crimson-400">
                          {project.metrics.value}
                        </div>
                        <div className="text-xs text-zinc-300 mt-1">
                          {project.metrics.context}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-3 pt-4 border-t border-zinc-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        ARCHITECTURAL HIGHLIGHTS:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((hl, i) => (
                          <li
                            key={i}
                            className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-crimson-400 font-mono font-bold">›</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Architectural Themes & Applied Stack */}
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
                        SYSTEM DOMAINS
                      </span>
                      <div className="space-y-3">
                        {project.architecturalThemes.slice(0, 2).map((theme) => (
                          <div
                            key={theme.title}
                            className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60"
                          >
                            <div className="text-xs font-bold font-mono text-white mb-1">
                              {theme.title}
                            </div>
                            <div className="text-xs text-zinc-400 leading-relaxed">
                              {theme.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                        TECHNOLOGIES APPLIED
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-[11px] font-mono border border-zinc-800 bg-zinc-900 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
          </div>
        </div>
      </main>
    </>
  );
};
