import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import type { Project } from '../../types';

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="w-full border-b border-zinc-800 pb-12 pt-8">
      {/* Eyebrow & Number */}
      <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-glow-red inline-block" />
          <span className="text-crimson-400 font-bold uppercase tracking-wider">
            CASE STUDY · {project.number}
          </span>
        </div>
        <span className="tracking-widest uppercase">PRODUCTION BACKEND SPECIFICATION</span>
      </div>

      {/* Main Title & Subtitle */}
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
          {project.title}
        </h1>
        <p className="font-mono text-base md:text-lg text-crimson-400 uppercase tracking-wider mb-6">
          {project.subtitle}
        </p>
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Metadata Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-800">
        <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            ENGINEERING ROLE
          </span>
          <span className="font-mono text-xs md:text-sm font-semibold text-zinc-200">
            {project.role}
          </span>
        </div>

        <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            CORE STACK
          </span>
          <span className="font-mono text-xs md:text-sm font-semibold text-zinc-200">
            {project.techStack.slice(0, 3).join(', ')}
          </span>
        </div>

        <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            ARCHITECTURE
          </span>
          <span className="font-mono text-xs md:text-sm font-semibold text-zinc-200">
            Modular / Distributed
          </span>
        </div>

        <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            SOURCE REPO
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs md:text-sm font-semibold text-crimson-400 hover:underline"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
