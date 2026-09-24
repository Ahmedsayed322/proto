import React from 'react';
import { Shield, Zap, Cloud, Key } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProjectHeader } from '../components/project/ProjectHeader';
import { ProjectNav } from '../components/project/ProjectNav';
import { SarahaArchitecture } from '../components/visuals/ArchitectureFlow';
import { PROJECTS } from '../data/projects';

export const SarahaCaseStudy: React.FC = () => {
  const project = PROJECTS[2];
  const prevProject = PROJECTS[1]; // Social Media
  const nextProject = PROJECTS[0]; // E-Commerce

  return (
    <>
      <SEO
        title="Saraha Anonymous Messaging Platform Case Study — Security & Redis Caching"
        description="Engineering case study of Saraha anonymous messaging REST API featuring asymmetric payload encryption, Argon2 hashing, Helmet, multi-tier rate limiting, and an approximate 30% reduction in average API response time via Redis caching."
        canonicalPath="/projects/saraha"
      />

      <main className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <ProjectHeader project={project} />

          {/* Section: Overview & Core Objective */}
          <section className="py-16 border-b border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                  01 / SYSTEM MANDATE
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  High-Assurance Anonymity & Defensive Architecture
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-zinc-300 leading-relaxed">
                <p>
                  Anonymous messaging platforms present unique engineering challenges: user privacy must be uncompromisingly guaranteed, while malicious spam, credential stuffing, and message bombardment must be systematically mitigated at the network boundary.
                </p>
                <p>
                  The Saraha platform backend was engineered as a high-security REST API structured across <strong className="text-white">5+ core domain modules</strong>. It implements defense-in-depth: combining <strong className="text-white">asymmetric encryption</strong> for message confidentiality with an aggressive <strong className="text-white">Redis caching</strong> tier that demonstrated an <strong className="text-crimson-400 font-bold">approximate 30% reduction in average API response time</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Architecture Visual & Flow */}
          <section className="py-16 border-b border-zinc-800">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                02 / SECURITY & ACCELERATION PIPELINE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Hardened API Perimeter & Cache Invalidation
              </h2>
            </div>

            <SarahaArchitecture />
          </section>

          {/* Section: Detailed Engineering Decisions */}
          <section className="py-16 border-b border-zinc-800 space-y-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                03 / SECURITY & PERFORMANCE SUBSYSTEMS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
                Defensive Design Details
              </h2>
            </div>

            {/* Subsystem 1: Cryptography & Authentication */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Key className="w-4 h-4" />
                  <span>PAYLOAD CONFIDENTIALITY</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Asymmetric Encryption & Argon2 Password Hashing
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  To protect recipient privacy even in the event of an infrastructure compromise, message bodies undergo <strong className="text-white">asymmetric encryption</strong> before insertion into MongoDB collections. Only the authenticated recipient holds the corresponding decryption capability.
                </p>
                <p>
                  User authentication incorporates both standard email/password flows and <strong className="text-white">Google OAuth 2.0</strong> federated login. Passwords are protected using state-of-the-art <strong className="text-white">Argon2</strong> and <strong className="text-white">bcrypt</strong> memory-hard hashing algorithms to resist GPU-accelerated dictionary attacks.
                </p>
              </div>
            </div>

            {/* Subsystem 2: Defensive Perimeter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Shield className="w-4 h-4" />
                  <span>NETWORK PERIMETER</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Helmet, CORS Allowlists & Multi-Tier Rate Limiting
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  The API perimeter is shielded with <strong className="text-white">Helmet</strong> to strip revealing technology headers and configure strict HTTP policies (X-Content-Type-Options, Strict-Transport-Security, and frameguard protections).
                </p>
                <p>
                  To thwart volumetric spam on anonymous submission routes, tiered rate limiting is configured via <strong className="text-white">express-rate-limit</strong>:
                </p>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-2">
                  <div className="text-zinc-300">› Sensitive Auth Routes: Strictest burst windows preventing brute-force password attempts</div>
                  <div className="text-zinc-300">› Message Dispatch Routes: IP-quota buckets curbing automated bot spamming</div>
                  <div className="text-zinc-300">› Strict CORS allowlist ensuring only authorized frontend origins can execute requests</div>
                </div>
              </div>
            </div>

            {/* Subsystem 3: Redis Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Zap className="w-4 h-4" />
                  <span>LATENCY OPTIMIZATION</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Redis Caching (~30% Average Latency Reduction)
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Anonymous messaging services experience high read-to-write ratios on public profile links and user metadata lookups. Repeatedly querying MongoDB for recipient existence and public keys created unnecessary database I/O bottlenecks.
                </p>
                <p>
                  By deploying a high-throughput <strong className="text-white">Redis caching layer</strong> for active user identity resolution, repeated database round-trips were eliminated for recurring profile visits, resulting in an <strong className="text-crimson-400 font-bold">approximate 30% reduction in average API response time</strong>. Cache keys are strictly managed with TTLs and proactive invalidation triggers upon profile edits.
                </p>
              </div>
            </div>

            {/* Subsystem 4: AWS Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Cloud className="w-4 h-4" />
                  <span>CLOUD INFRASTRUCTURE</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  AWS EC2 & Elastic Beanstalk Deployment
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  The platform was deployed to production on <strong className="text-white">Amazon Web Services (AWS)</strong> using <strong className="text-white">Elastic Beanstalk</strong> provisioning <strong className="text-white">EC2</strong> compute nodes. This provided hands-free deployment packaging, automatic environment variable isolation, and automated service health recovery. User avatar media assets are processed and delivered via <strong className="text-white">Cloudinary</strong> CDN.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Technology Specification */}
          <section className="py-16 border-b border-zinc-800">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-4">
              04 / VERIFIED TECH SPECIFICATION
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-xl border border-zinc-800 bg-dark-900/60 flex items-center gap-2 font-mono text-xs text-zinc-300"
                >
                  <span className="w-2 h-2 rounded-full bg-crimson-500" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Project Navigation */}
          <ProjectNav prevProject={prevProject} nextProject={nextProject} />
        </div>
      </main>
    </>
  );
};
