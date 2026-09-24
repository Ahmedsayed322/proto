import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Copy, GraduationCap, ShieldCheck, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { SEO } from '../components/common/SEO';
import { PROJECTS } from '../data/projects';
import { SKILL_CATEGORIES } from '../data/skills';
import { EcommerceArchitecture, SocialMediaArchitecture, SarahaArchitecture } from '../components/visuals/ArchitectureFlow';
import { SectionConnector } from '../components/common/SectionConnector';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { SectionRadar } from '../components/common/SectionRadar';

export const HomePage: React.FC = () => {
  const ecommerce = PROJECTS[0];
  const social = PROJECTS[1];
  const saraha = PROJECTS[2];
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [copiedSummary, setCopiedSummary] = useState(false);

  const filteredCategories = activeCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category.toUpperCase().includes(activeCategory));

  const copyRecruiterSummary = () => {
    const summaryText = `Candidate: Ahmed Sayed Abdelnaby — Backend Engineer
Target Roles: Backend Engineer / Node.js & NestJS Developer
Email: ahmedsayed0575@gmail.com
Phone / WhatsApp: +20 010 036 19642
Location: Cairo, Egypt (Available Immediately · Remote / Hybrid / On-site)
Education: B.Sc. in Computer Science, Ain Shams University (2020–2024)
Military Status: Completed
Languages: Arabic (Native), English (Intermediate / Professional)
Core Stack: NestJS (v11), Node.js, TypeScript, MongoDB, Redis, Socket.IO, GraphQL, REST APIs, AWS (EC2, S3, Beanstalk), PayMob
Key Highlights:
- E-Commerce: NestJS v11, MongoDB atomic transactional sessions, PayMob HMAC-SHA512 verification, Repository Pattern.
- Social Media: Real-time Socket.IO chat, Redis pub/sub broker, hybrid GraphQL & REST, direct AWS S3 presigned uploads.
- Saraha: Multi-tier Redis caching cutting latency by ~30%, asymmetric payload encryption, AWS EC2 & Elastic Beanstalk.
GitHub: https://github.com/Ahmedsayed322
LinkedIn: https://linkedin.com/in/ahmed-sayed-589477327`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <>
      <SEO
        title="Ahmed Sayed — Backend Engineer"
        description="Portfolio of Ahmed Sayed Abdelnaby — Backend Engineer specializing in Node.js, NestJS v11, TypeScript, MongoDB transactions, Redis caching, and real-time architectures."
        canonicalPath="/"
      />

      {/* Floating Section Radar on Desktop */}
      <SectionRadar />

      <main className="w-full relative">
        {/* HERO SECTION */}
        <section id="hero-section" className="relative pt-10 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Core Positioning for Recruiters */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <RevealOnScroll direction="up" delay={0}>
                  {/* Status Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>AVAILABLE IMMEDIATELY · FULL-TIME</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono text-zinc-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-crimson-500" />
                      <span>MILITARY COMPLETED</span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-5">
                    AHMED SAYED. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-rose-500 to-white">
                      BACKEND ENGINEER.
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-sans font-normal leading-relaxed mb-6">
                    B.Sc. in Computer Science from <strong className="text-white">Ain Shams University (2024)</strong>. I specialize in building reliable, high-integrity APIs and distributed backend systems using <strong className="text-white">NestJS (v11)</strong>, <strong className="text-white">Node.js</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">MongoDB</strong>, and <strong className="text-white">Redis</strong>.
                  </p>
                </RevealOnScroll>

                {/* Direct Action Bar for Recruiters */}
                <RevealOnScroll direction="up" delay={150}>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:ahmedsayed0575@gmail.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs uppercase font-mono font-bold tracking-wider shadow-glow-red transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>EMAIL DIRECTLY</span>
                    </a>

                    <button
                      onClick={copyRecruiterSummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-xs uppercase font-mono tracking-wider transition-all"
                      title="Copy candidate details to clipboard for your ATS, Notion, or Slack"
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-crimson-400" />
                          <span>COPY RECRUITER SUMMARY</span>
                        </>
                      )}
                    </button>

                    <a
                      href="#featured-work"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>VIEW 3 PROJECTS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </RevealOnScroll>

                {/* Fast Metric Badges for Fast Scanning */}
                <RevealOnScroll direction="up" delay={300}>
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white">~30%</div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">Latency Cut via Redis</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white">Atomic</div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">MongoDB Sessions</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white">Ain Shams</div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">B.Sc. CS Graduate</div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right Column: Candidate Snapshot Card (What HRs Care About) */}
              <div className="lg:col-span-5">
                <RevealOnScroll direction="left" delay={200}>
                  <div className="rounded-xl border border-zinc-800 bg-dark-900/95 p-6 md:p-7 shadow-card-dark relative">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-5 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-crimson-500" />
                        <span className="text-zinc-200 font-bold uppercase tracking-wider">CANDIDATE SNAPSHOT</span>
                      </div>
                      <span className="text-zinc-400 text-[10px]">VERIFIED CV DATA</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-start justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                        <span className="text-zinc-400 font-bold">TARGET ROLE</span>
                        <span className="text-white font-semibold text-right">Backend Engineer (Node/Nest)</span>
                      </div>

                      <div className="flex items-start justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                        <span className="text-zinc-400 font-bold">EDUCATION</span>
                        <div className="text-right">
                          <span className="text-white font-semibold block">B.Sc. Computer Science</span>
                          <span className="text-zinc-400 text-[11px]">Ain Shams Univ. (2020–2024)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                        <span className="text-zinc-400 font-bold">MILITARY STATUS</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Completed
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                        <span className="text-zinc-400 font-bold">WORK LOCATION</span>
                        <span className="text-zinc-200">Cairo, Egypt (Remote / Hybrid / On-site)</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                        <span className="text-zinc-400 font-bold">LANGUAGES</span>
                        <span className="text-zinc-200">Arabic (Native) · English (Intermediate)</span>
                      </div>

                      <div className="p-2.5 rounded-lg border border-crimson-500/30 bg-crimson-950/20 shadow-glow-red">
                        <span className="text-crimson-400 font-bold text-[10px] uppercase block mb-1">
                          PRIMARY CORE TECHNOLOGIES
                        </span>
                        <span className="text-zinc-200 text-[11px] leading-relaxed block">
                          NestJS (v11) · Node.js · TypeScript · MongoDB · Redis · Socket.IO · GraphQL · AWS · PayMob
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                      <a
                        href="tel:+2001003619642"
                        className="text-zinc-300 hover:text-crimson-400 transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-crimson-500" />
                        <span>+20 010 036 19642</span>
                      </a>

                      <div className="flex items-center gap-3">
                        <a
                          href="https://linkedin.com/in/ahmed-sayed-589477327"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                        <a
                          href="https://github.com/Ahmedsayed322"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 00 ➔ 01 */}
        <SectionConnector
          step="00 ➔ 01"
          label="PRODUCTION WORK"
          sublabel="NESTJS REPOSITORY ARCHITECTURE"
        />

        {/* FEATURED WORK: PROJECT 01 — E-COMMERCE */}
        <section id="featured-work" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 mb-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-crimson-500 inline-block" />
                    <span className="uppercase tracking-wider">PROJECT 01 // TRANSACTIONAL SYSTEM</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                    {ecommerce.title}
                  </h2>
                  <p className="font-mono text-sm md:text-base text-zinc-400 mt-1">
                    {ecommerce.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={ecommerce.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3 h-3 text-crimson-400" />
                  </a>

                  <Link
                    to={`/projects/${ecommerce.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold transition-all shadow-glow-red"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Architecture Visual */}
            <RevealOnScroll direction="up" delay={150}>
              <div className="mb-10">
                <EcommerceArchitecture />
              </div>
            </RevealOnScroll>

            {/* High-Signal Bullet Cards for HRs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
              <RevealOnScroll direction="up" delay={100}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 hover:border-zinc-700 transition-colors h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    RELIABILITY · ZERO OVERSELLING
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2">MongoDB Transactional Sessions</h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                    Guarantees atomic multi-document boundaries across order creation and stock decrements. Prevents race conditions during high-volume concurrent checkouts.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 hover:border-zinc-700 transition-colors h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    FINANCIAL SECURITY
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2">PayMob & HMAC-SHA512 Webhooks</h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                    Integrated card checkout and automated refunds. Validates all inbound payment webhooks against cryptographic hash sequences to prevent counterfeit requests.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={300}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 hover:border-zinc-700 transition-colors h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    CLEAN CODE · MAINTAINABILITY
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2">Repository Pattern & NestJS v11</h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                    Strict separation between Mongoose queries and domain business routines, keeping code modular, highly testable, and prepared for enterprise scale.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 01 ➔ 02 */}
        <SectionConnector
          step="01 ➔ 02"
          label="REAL-TIME SYSTEMS"
          sublabel="SOCKET.IO CLUSTER & REDIS PUB/SUB"
        />

        {/* PROJECT 02 — SOCIAL MEDIA BACKEND */}
        <section id="social-media" className="py-16 md:py-24 bg-zinc-950/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 mb-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-crimson-500 inline-block" />
                    <span className="uppercase tracking-wider">PROJECT 02 // REAL-TIME & MEDIA</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                    {social.title}
                  </h2>
                  <p className="font-mono text-sm md:text-base text-zinc-400 mt-1">
                    {social.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={social.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3 h-3 text-crimson-400" />
                  </a>

                  <Link
                    to={`/projects/${social.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold transition-all shadow-glow-red"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150}>
              <div className="mb-10">
                <SocialMediaArchitecture />
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
              <RevealOnScroll direction="up" delay={100}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    LOW LATENCY · HORIZONTAL SCALING
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2">Socket.IO & Redis Pub/Sub</h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed mb-3">
                    Full-duplex chat engine backed by Redis pub/sub for instantaneous message delivery across multiple server instances. MongoDB persists history with compound indexing.
                  </p>
                  <div className="font-mono text-[11px] text-zinc-400">
                    OFFLINE FALLBACK: Firebase Cloud Messaging (FCM).
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    ZERO MEMORY EXHAUSTION
                  </span>
                  <h3 className="text-base font-bold font-display text-white mb-2">AWS S3 Presigned URLs & GraphQL</h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed mb-3">
                    Direct-to-S3 media streaming with presigned PUT URLs bypasses Node.js server buffers. GraphQL eliminates over-fetching for nested posts, comments, and friend graphs.
                  </p>
                  <div className="font-mono text-[11px] text-zinc-400">
                    PERFORMANCE: Node.js server handles zero raw video/image buffers.
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 02 ➔ 03 */}
        <SectionConnector
          step="02 ➔ 03"
          label="PERFORMANCE & CACHING"
          sublabel="REDIS ACCELERATION & ASYMMETRIC SECURITY"
        />

        {/* PROJECT 03 — SARAHA */}
        <section id="saraha-defense" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 mb-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-crimson-500 inline-block" />
                    <span className="uppercase tracking-wider">PROJECT 03 // OPTIMIZATION & DEFENSE</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                    {saraha.title}
                  </h2>
                  <p className="font-mono text-sm md:text-base text-zinc-400 mt-1">
                    {saraha.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={saraha.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3 h-3 text-crimson-400" />
                  </a>

                  <Link
                    to={`/projects/${saraha.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold transition-all shadow-glow-red"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150}>
              <div className="mb-10">
                <SarahaArchitecture />
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
              <RevealOnScroll direction="up" delay={100}>
                <div className="p-6 rounded-xl border border-crimson-500/40 bg-crimson-950/20 shadow-glow-red h-full">
                  <span className="text-3xl font-extrabold font-mono text-white block mb-1">
                    ~30%
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-crimson-400 font-bold block mb-2">
                    LATENCY REDUCTION VIA REDIS
                  </span>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                    Cut average API response times by ~30% through multi-tier Redis caching across 5+ core modules, eliminating repetitive MongoDB read operations.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 h-full">
                  <span className="text-2xl font-bold font-mono text-white block mb-1">
                    ASYMMETRIC
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    PAYLOAD ENCRYPTION
                  </span>
                  <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                    End-to-end protection for anonymous message payloads, paired with Argon2 & bcrypt cryptographic password hashing and Helmet header hardening.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={300}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 h-full">
                  <span className="text-2xl font-bold font-mono text-white block mb-1">
                    AWS CLOUD
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    EC2 & ELASTIC BEANSTALK
                  </span>
                  <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                    Production deployment hosted on Amazon Web Services using EC2 compute instances managed through AWS Elastic Beanstalk for auto-scaling and zero-downtime rolling updates.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 03 ➔ 04 */}
        <SectionConnector
          step="03 ➔ 04"
          label="SKILLS CHECKLIST"
          sublabel="BACKEND TECHNOLOGY MATRIX"
        />

        {/* TECHNICAL STACK CHECKLIST FOR RECRUITERS */}
        <section id="tech-stack" className="py-16 md:py-24 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    SKILLS & COMPETENCIES
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
                    Technical Stack Matrix
                  </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  {['ALL', 'CORE', 'DATA', 'API', 'AUTH', 'CLOUD'].map((tab) => {
                    const isActive = activeCategory === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveCategory(tab)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          isActive
                            ? 'bg-crimson-600 text-white font-bold shadow-glow-red'
                            : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category, idx) => (
                <RevealOnScroll key={category.number} direction="up" delay={idx * 75}>
                  <div className="p-6 rounded-xl border border-zinc-800 bg-dark-900/60 hover:border-crimson-500/40 hover:shadow-glow-red transition-all h-full">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                      <span className="font-mono text-xs font-bold text-crimson-400">
                        {category.number}
                      </span>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">
                        {category.category}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs font-mono text-zinc-300 flex items-center justify-between py-1 px-2 rounded hover:bg-zinc-800/60 transition-colors"
                        >
                          <span>{skill}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 04 ➔ 05 */}
        <SectionConnector
          step="04 ➔ 05"
          label="ACADEMIC CREDENTIALS"
          sublabel="AIN SHAMS UNIVERSITY · CS GRADUATE"
        />

        {/* ABOUT & EDUCATION */}
        <section id="about-section" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <RevealOnScroll direction="right">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    ACADEMIC & LEGAL VERIFICATION
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-5">
                    Ahmed Sayed Abdelnaby
                  </h2>
                  
                  <div className="font-mono text-xs text-zinc-300 space-y-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/60">
                    <div className="text-white font-semibold flex items-center gap-2 pb-2 border-b border-zinc-800">
                      <GraduationCap className="w-4 h-4 text-crimson-500" />
                      <span>AIN SHAMS UNIVERSITY (2020–2024)</span>
                    </div>
                    <p className="flex justify-between">
                      <span className="text-zinc-400">Degree:</span>
                      <span className="font-semibold text-white">B.Sc. Computer Science</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-400">Military Service:</span>
                      <span className="font-semibold text-emerald-400">Completed (Exempt/Fulfilled)</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-400">Availability:</span>
                      <span className="font-semibold text-white">Immediate (Zero Notice Period)</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-400">Languages:</span>
                      <span className="font-semibold text-white">Arabic (Native), English (Intermediate)</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-400">Location:</span>
                      <span className="font-semibold text-white">Cairo, Egypt (Open Globally)</span>
                    </p>
                  </div>
                </RevealOnScroll>
              </div>

              <div className="lg:col-span-7 space-y-5 text-sm md:text-base font-sans text-zinc-300 leading-relaxed">
                <RevealOnScroll direction="up" delay={100}>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Why Hire Ahmed for Your Backend Team?
                  </h3>
                  <p>
                    I design and implement backend services with a strict focus on predictability, data integrity, and error prevention. My Computer Science curriculum at Ain Shams University provided rigorous training in algorithms, database design, operating systems, and distributed networks.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={200}>
                  <p>
                    In production work, I avoid fragile shortcuts: order transactions are protected with MongoDB atomic session boundaries to eliminate stock overselling, domain routines are decoupled using the Repository Pattern in NestJS v11, inbound webhooks are verified against cryptographic HMAC-SHA512 checksums, and WebSocket distribution is scaled with Redis pub/sub.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={300}>
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-crimson-400 hover:text-crimson-300 transition-colors"
                    >
                      <span>Read full engineering profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={copyRecruiterSummary}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5 text-crimson-500" />
                      <span>{copiedSummary ? 'Copied summary!' : 'Copy candidate summary'}</span>
                    </button>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONNECTOR: 05 ➔ 06 */}
        <SectionConnector
          step="05 ➔ 06"
          label="DIRECT CONTACT"
          sublabel="HIRE AHMED SAYED"
        />

        {/* CONTACT CTA */}
        <section id="contact-section" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealOnScroll direction="up">
              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-dark-900 via-dark-900 to-crimson-950/20 p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-card-dark relative overflow-hidden">
                <div className="max-w-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-2">
                    START THE CONVERSATION
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-3">
                    Ready to Strengthen Your Backend Team?
                  </h2>
                  <p className="text-sm md:text-base font-sans text-zinc-300 font-normal leading-relaxed">
                    Available immediately for full-time backend engineering roles, API architecture, and real-time systems.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="mailto:ahmedsayed0575@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-glow-red transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>EMAIL AHMED</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 text-zinc-200 text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    <span>ALL CHANNELS</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
    </>
  );
};
