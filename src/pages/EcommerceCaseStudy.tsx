import React from 'react';
import { Shield, Database, CreditCard, Cloud } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProjectHeader } from '../components/project/ProjectHeader';
import { ProjectNav } from '../components/project/ProjectNav';
import { EcommerceArchitecture } from '../components/visuals/ArchitectureFlow';
import { PROJECTS } from '../data/projects';

export const EcommerceCaseStudy: React.FC = () => {
  const project = PROJECTS[0];
  const prevProject = PROJECTS[2]; // Saraha
  const nextProject = PROJECTS[1]; // Social Media

  return (
    <>
      <SEO
        title="E-Commerce Backend API Case Study — NestJS & MongoDB Transactions"
        description="Engineering case study of a modular e-commerce backend built with NestJS v11, TypeScript, MongoDB transactional sessions, dual-prefix JWT authorization, and PayMob payment webhooks."
        canonicalPath="/projects/ecommerce-backend"
      />

      <main className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <ProjectHeader project={project} />

          {/* Section: Overview & Problem Statement */}
          <section className="py-16 border-b border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                  01 / PROBLEM CONTEXT
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  High-Integrity E-Commerce Operations
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-zinc-300 leading-relaxed">
                <p>
                  Modern e-commerce platforms cannot rely on naïve multi-step database mutations. When simultaneous shoppers check out the final units of high-demand items, unchecked race conditions lead to overselling, corrupted inventory records, and payment disputes.
                </p>
                <p>
                  This project was built to implement a modular, production-ready backend engine using <strong className="text-white">NestJS (v11)</strong> and <strong className="text-white">TypeScript</strong>. The architecture enforces strict separation of concerns via the <strong className="text-white">Repository Pattern</strong>, and guarantees database consistency through <strong className="text-white">MongoDB transactional sessions</strong> during concurrent order creation.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Architecture Visual & Flow */}
          <section className="py-16 border-b border-zinc-800">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                02 / ARCHITECTURAL BLUEPRINT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Order Execution & Webhook Pipeline
              </h2>
            </div>

            <EcommerceArchitecture />
          </section>

          {/* Section: Detailed Engineering Decisions */}
          <section className="py-16 border-b border-zinc-800 space-y-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                03 / SYSTEM ENGINEERING DECISIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
                In-Depth Technical Implementations
              </h2>
            </div>

            {/* Decision 1: Auth & Dual-Prefix JWT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Shield className="w-4 h-4" />
                  <span>AUTHENTICATION & AUTHORIZATION</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Dual-Prefix JWT & Dynamic Signature Keys
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  To eliminate privilege escalation risks between standard consumers and backend system administrators, a <strong className="text-white">dual-prefix JWT system</strong> was established. Tokens are issued under distinct prefix boundaries (e.g., standard consumer tokens vs. administrative session keys), preventing an authenticated user token from being accepted on administrative endpoints even if maliciously injected.
                </p>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs space-y-2">
                  <div className="text-zinc-200 font-semibold">// AUTHORIZATION ENFORCEMENT SPEC</div>
                  <div className="text-zinc-400">› Dynamically resolved public/private signature keys per token issuer scope</div>
                  <div className="text-zinc-400">› Custom NestJS execution context parameter decorator: @CurrentUser()</div>
                  <div className="text-zinc-400">› Role-based route guards enforcing fine-grained endpoint privileges</div>
                </div>
              </div>
            </div>

            {/* Decision 2: MongoDB Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Database className="w-4 h-4" />
                  <span>CONCURRENCY & DATA CONSISTENCY</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Atomic Checkout via MongoDB Transactional Sessions
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  In high-concurrency checkouts, multiple shoppers may attempt to purchase remaining stock simultaneously. If stock verification and deduction are decoupled, stock goes negative.
                </p>
                <p>
                  To solve this, order creation executes within a <strong className="text-white">MongoDB replica-set transactional session</strong> (`startSession()`). Inventory counts are atomically verified and decremented in tandem with order document creation. If any inventory condition fails or validation errors arise, the entire transaction is rolled back cleanly, maintaining zero inventory discrepancy.
                </p>
                <div className="p-4 rounded-xl border border-crimson-500/30 bg-crimson-950/20 font-mono text-xs shadow-glow-red">
                  <div className="text-crimson-400 font-semibold">TRANSACTION BOUNDARY GUARANTEE:</div>
                  <div className="text-zinc-300 mt-1">
                    Atomic multi-document commit across orders, product stock counts, and coupon usage records.
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3: Payments & PayMob HMAC */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <CreditCard className="w-4 h-4" />
                  <span>PAYMENT INTEGRATION</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  PayMob Intentions & HMAC-SHA512 Webhook Verification
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Payment processing was implemented using the <strong className="text-white">PayMob</strong> payment gateway. The order workflow creates a server-side payment intention, returning secure transaction tokens for frontend client completion.
                </p>
                <p>
                  Upon payment execution, PayMob transmits an asynchronous webhook notification. To prevent spoofing and man-in-the-middle exploits, incoming webhook payloads are validated against an <strong className="text-white">HMAC-SHA512 checksum</strong> computed using pre-shared merchant secret keys. If the computed hash does not match byte-for-byte, the callback is rejected with HTTP 400. Once verified, the order status transitions to paid, and automated refund routines are available for canceled orders.
                </p>
              </div>
            </div>

            {/* Decision 4: Media & Coupons */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-zinc-800 pt-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson-400 font-bold">
                  <Cloud className="w-4 h-4" />
                  <span>MEDIA & BUSINESS RULES</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  AWS S3 SDK v3 Uploads & Coupon Reuse Guard
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Product images are handled using <strong className="text-white">Multer</strong> for memory-efficient multipart parsing, coupled directly with the modern <strong className="text-white">AWS S3 SDK v3</strong> (`@aws-sdk/client-s3`) to stream assets into Amazon S3 buckets.
                </p>
                <p>
                  In addition, a dedicated coupon engine validates discount criteria: verifying activation time windows, minimum order valuations, and customer reuse prevention to eliminate exploit patterns during sales campaigns.
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
