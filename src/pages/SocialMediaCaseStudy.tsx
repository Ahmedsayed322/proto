import React from 'react';
import { Radio, Layers, Cloud } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProjectHeader } from '../components/project/ProjectHeader';
import { ProjectNav } from '../components/project/ProjectNav';
import { SocialMediaArchitecture } from '../components/visuals/ArchitectureFlow';
import { PROJECTS } from '../data/projects';

export const SocialMediaCaseStudy: React.FC = () => {
  const project = PROJECTS[1];
  const prevProject = PROJECTS[0]; // E-Commerce
  const nextProject = PROJECTS[2]; // Saraha

  return (
    <>
      <SEO
        title="Social Media App Backend Case Study — Socket.IO, Redis & GraphQL"
        description="Engineering case study of a real-time social networking backend built with Node.js, TypeScript, Socket.IO, Redis pub/sub, GraphQL, MongoDB, and AWS S3 presigned URLs."
        canonicalPath="/projects/social-media-backend"
      />

      <main className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <ProjectHeader project={project} />

          {/* Section: Overview */}
          <section className="py-16 border-b border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                  01 / PROBLEM & SCOPE
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  High-Throughput Real-Time Interaction
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-zinc-300 leading-relaxed">
                <p>
                  Social applications demand two fundamentally opposing backend characteristics: highly responsive real-time event dissemination for live messaging, and flexible querying capabilities across deeply interconnected social graph data (users, friends, feeds, comments, stories).
                </p>
                <p>
                  This project delivers a comprehensive backend engineered in <strong className="text-white">TypeScript</strong> on <strong className="text-white">Node.js</strong> and <strong className="text-white">Express.js</strong>. It fuses <strong className="text-white">Socket.IO</strong> and <strong className="text-white">Redis</strong> for distributed event broadcasting with a hybrid API layer that balances <strong className="text-white">REST</strong> mutations and <strong className="text-white">GraphQL</strong> entity queries.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Architecture Visual & Flow */}
          <section className="py-16 border-b border-zinc-800">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                02 / REAL-TIME ARCHITECTURE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Distributed Messaging & Event Routing
              </h2>
            </div>

            <SocialMediaArchitecture />
          </section>

          {/* Section: Detailed Engineering Decisions */}
          <section className="py-16 border-b border-zinc-800 space-y-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                03 / CORE SUBSYSTEMS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
                Architectural Breakdown
              </h2>
            </div>

            {/* Subsystem 1: Socket.IO & Redis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Radio className="w-4 h-4" />
                  <span>DISTRIBUTED WEBSOCKETS</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  One-to-One & Group Real-Time Chat Engine
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Real-time communication is powered by <strong className="text-white">Socket.IO</strong>. The chat architecture handles both private direct messages and multi-member group channels, complete with live presence tracking, read receipts, and instantaneous delivery confirmation.
                </p>
                <p>
                  To enable horizontal scaling without dropping active socket connections, <strong className="text-white">Redis</strong> acts as the central pub/sub communication bus. Socket messages are routed across application instances, ensuring users in the same group receive packets regardless of which worker node holds their persistent TCP socket.
                </p>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-2">
                  <div className="text-zinc-200 font-semibold">// MESSAGING PERSISTENCE SPEC</div>
                  <div className="text-zinc-400">› MongoDB indexing on {`{ roomId: 1, createdAt: -1 }`} for rapid paginated history</div>
                  <div className="text-zinc-400">› Memory cache in Redis for online user presence and temporary socket bindings</div>
                </div>
              </div>
            </div>

            {/* Subsystem 2: REST + GraphQL Hybrid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Layers className="w-4 h-4" />
                  <span>QUERY ARCHITECTURE</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Hybrid REST & GraphQL API Surfaces
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  A purely RESTful approach to social networks often suffers from severe over-fetching or N+1 query cascades when populating user timelines, post threads, comments, and author avatars.
                </p>
                <p>
                  This backend applies a hybrid paradigm:
                </p>
                <ul className="space-y-2 font-mono text-xs border-l-2 border-crimson-500 pl-4 py-2 bg-zinc-950/60 rounded-r-xl">
                  <li><strong className="text-white">GraphQL API:</strong> Optimized for reads across user profiles, posts, comments, stories, and friends graphs—clients specify exactly the fields needed for UI components.</li>
                  <li><strong className="text-white">REST API:</strong> Dedicated to state mutations, session lifecycle, authentication, and file upload pre-signing where deterministic HTTP status codes and caching rules shine.</li>
                </ul>
              </div>
            </div>

            {/* Subsystem 3: Presigned URLs & Firebase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Cloud className="w-4 h-4" />
                  <span>OFFLOADING & NOTIFICATIONS</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  AWS S3 Presigned URLs & Firebase Push Notifications
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Routing large multimedia assets (images, story clips) through the Node.js application process can block the event loop and degrade socket performance. Instead, the backend generates short-lived <strong className="text-white">AWS S3 presigned upload URLs</strong>, permitting mobile and web clients to upload assets directly to S3 buckets securely.
                </p>
                <p>
                  For offline message delivery, <strong className="text-white">Firebase Cloud Messaging (FCM)</strong> is invoked asynchronously whenever a recipient's WebSocket connection is inactive, alerting mobile users without requiring continuous background socket polling.
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
