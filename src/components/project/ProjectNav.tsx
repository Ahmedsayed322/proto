import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectNavProps {
  prevProject: Project;
  nextProject: Project;
}

export const ProjectNav: React.FC<ProjectNavProps> = ({ prevProject, nextProject }) => {
  return (
    <div className="w-full border-t border-b border-zinc-800 my-20 py-8">
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6">
        {/* Prev */}
        <Link
          to={`/projects/${prevProject.slug}`}
          className="group flex-1 p-6 rounded-xl border border-zinc-800 hover:border-crimson-500/50 bg-zinc-900/60 hover:shadow-glow-red transition-all flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-crimson-400 transition-colors mb-3">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>PREVIOUS SYSTEM [{prevProject.number}]</span>
          </div>
          <div>
            <div className="text-lg font-bold text-white tracking-tight font-sans">
              {prevProject.title}
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-1">
              {prevProject.subtitle}
            </div>
          </div>
        </Link>

        {/* Next */}
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group flex-1 p-6 rounded-xl border border-zinc-800 hover:border-crimson-500/50 bg-zinc-900/60 hover:shadow-glow-red transition-all flex flex-col justify-between sm:text-right"
        >
          <div className="flex items-center sm:justify-end gap-2 text-xs font-mono text-zinc-400 group-hover:text-crimson-400 transition-colors mb-3">
            <span>NEXT SYSTEM [{nextProject.number}]</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
          <div>
            <div className="text-lg font-bold text-white tracking-tight font-sans">
              {nextProject.title}
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-1">
              {nextProject.subtitle}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
