import React, { useState } from 'react';
import { Shield, Database, Server, CreditCard, RefreshCw, Lock, Radio, Zap } from 'lucide-react';

// 1. E-Commerce Backend Architecture Diagram
export const EcommerceArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      name: 'CLIENT REQUEST',
      sub: 'Bearer JWT / Checkout Payload',
      icon: Server,
      desc: 'Inbound POST /orders/checkout with item list, coupon token, and billing details.',
    },
    {
      id: 2,
      name: 'AUTH & GUARDS',
      sub: 'Dual-Prefix JWT + Role Guard',
      icon: Shield,
      desc: 'Validates signature with dynamic public keys. Injects @CurrentUser() into NestJS execution context.',
    },
    {
      id: 3,
      name: 'TRANSACTION SESSION',
      sub: 'MongoDB startSession()',
      icon: Database,
      desc: 'Atomic multi-document transaction begins. Validates coupon reuse and locks product inventory counts.',
    },
    {
      id: 4,
      name: 'INVENTORY DEDUCTION',
      sub: 'Concurrent Stock Guard',
      icon: RefreshCw,
      desc: 'Decrements product stock atomically. Aborts and rolls back immediately if any SKU stock is insufficient.',
    },
    {
      id: 5,
      name: 'PAYMOB INTENTION',
      sub: 'Payment Order & Intention',
      icon: CreditCard,
      desc: 'Dispatches intention to PayMob gateway. Awaits customer card processing on secure checkout.',
    },
    {
      id: 6,
      name: 'WEBHOOK & HMAC-SHA512',
      sub: 'Tamper-Proof Verification',
      icon: Lock,
      desc: 'Inbound PayMob webhook verified against HMAC-SHA512 checksum. Marks order paid or triggers automated refund.',
    },
  ];

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-dark-900/90 backdrop-blur-md p-6 md:p-8 shadow-card-dark">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-1">
            ARCHITECTURE FLOW 01 // NESTJS V11
          </span>
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">
            Atomic Checkout & Payment Verification Pipeline
          </h4>
        </div>
        <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded bg-zinc-800/80 border border-zinc-700/60">
          REPOSITORY PATTERN · MONGODB SESSIONS · PAYMOB
        </span>
      </div>

      {/* Pipeline Diagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 my-8">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.id;
          return (
            <div
              key={s.id}
              onMouseEnter={() => setActiveStep(s.id)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(activeStep === s.id ? null : s.id)}
              className={`cursor-pointer rounded-lg border transition-all duration-200 p-4 flex flex-col justify-between h-40 ${
                isSelected
                  ? 'border-crimson-500 bg-crimson-950/30 shadow-glow-red scale-[1.02]'
                  : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400 font-bold">
                    0{idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-md ${isSelected ? 'bg-crimson-500 text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-bold font-mono text-white tracking-tight leading-snug">
                  {s.name}
                </div>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 leading-tight">
                {s.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Inspector */}
      <div className="border-t border-zinc-800 pt-4 min-h-[48px] flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
          <span className="text-zinc-400">INSPECTOR:</span>
          <span className="font-sans text-sm text-zinc-200">
            {activeStep !== null
              ? steps.find((s) => s.id === activeStep)?.desc
              : 'Hover or tap any step to inspect the underlying backend architectural decision.'}
          </span>
        </div>
      </div>
    </div>
  );
};

// 2. Social Media Real-Time Architecture Diagram
export const SocialMediaArchitecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'socket' | 'graphql'>('socket');

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-dark-900/90 backdrop-blur-md p-6 md:p-8 shadow-card-dark">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800 gap-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-1">
            ARCHITECTURE FLOW 02 // DISTRIBUTED WEBSOCKETS
          </span>
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">
            Real-Time Socket.IO & Hybrid Query Distribution
          </h4>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('socket')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              activeTab === 'socket'
                ? 'border-crimson-500 bg-crimson-600 text-white font-bold shadow-glow-red'
                : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300'
            }`}
          >
            REAL-TIME PIPELINE
          </button>
          <button
            onClick={() => setActiveTab('graphql')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              activeTab === 'graphql'
                ? 'border-crimson-500 bg-crimson-600 text-white font-bold shadow-glow-red'
                : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300'
            }`}
          >
            HYBRID API & S3
          </button>
        </div>
      </div>

      {activeTab === 'socket' ? (
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60 hover:border-zinc-700 transition-colors">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">STAGE 1 · INGRESS</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-crimson-400" />
                <span>CLIENT WEBSOCKET</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Persistent duplex connection initialized via Socket.IO with token authentication on handshake.
              </p>
            </div>

            <div className="rounded-lg border border-crimson-500/40 p-4 bg-crimson-950/20 shadow-glow-red transition-colors">
              <div className="text-[10px] font-mono text-crimson-400 mb-1 font-bold">STAGE 2 · DISPATCH</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-crimson-400" />
                <span>REDIS PUB / SUB</span>
              </div>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Broadcasting layer routes messages across scaled Node.js processes to target rooms and private channels.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60 hover:border-zinc-700 transition-colors">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">STAGE 3 · PERSISTENCE</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <Database className="w-4 h-4 text-zinc-400" />
                <span>MONGODB CHAT LOG</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Message documents are indexed with compound room-timestamp keys for instantaneous pagination.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60 hover:border-zinc-700 transition-colors">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">STAGE 4 · FALLBACK</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                <Server className="w-4 h-4 text-zinc-400" />
                <span>FIREBASE PUSH (FCM)</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                If the recipient socket status is offline, an asynchronous FCM push dispatch triggers background device alert.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">GRAPHQL QUERY ENGINE</div>
              <div className="text-sm font-bold text-white font-mono">SOCIAL GRAPH & STORIES</div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Prevents over-fetching by letting clients query posts, threaded comments, and user friend lists in a single round-trip.
              </p>
            </div>

            <div className="rounded-lg border border-crimson-500/40 p-4 bg-crimson-950/20 shadow-glow-red">
              <div className="text-[10px] font-mono text-crimson-400 mb-1 font-bold">AWS S3 PRESIGNED URLS</div>
              <div className="text-sm font-bold text-white font-mono">DIRECT MEDIA UPLOADS</div>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Server generates ephemeral signed PUT URLs. Heavy media payloads stream directly from client to S3, bypassing server memory limits.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">REST COMMAND LAYER</div>
              <div className="text-sm font-bold text-white font-mono">STATE MUTATIONS & AUTH</div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Deterministic HTTP POST/PUT/DELETE routes handling credential rotation, friend acceptance, and privacy settings.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-zinc-800 pt-3 text-xs font-mono text-zinc-400 flex items-center justify-between">
        <span>REDIS PUB/SUB · SOCKET.IO ROOMS · GRAPHQL SCHEMA</span>
        <span className="text-emerald-400 font-bold">ZERO CLIENT-POLLING LATENCY</span>
      </div>
    </div>
  );
};

// 3. Saraha Security & Caching Architecture
export const SarahaArchitecture: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-dark-900/90 backdrop-blur-md p-6 md:p-8 shadow-card-dark">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-1">
            ARCHITECTURE FLOW 03 // DEFENSE & LATENCY
          </span>
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">
            Security Perimeter & Redis Acceleration
          </h4>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded bg-crimson-500/20 text-crimson-400 font-bold border border-crimson-500/30">
            ~30% LATENCY CUT
          </span>
          <span className="text-zinc-400">REDIS CACHE HIT ACCELERATION</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 my-6">
        <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
          <div className="text-[10px] font-mono text-zinc-400 mb-1">01 · PERIMETER</div>
          <div className="text-xs font-bold font-mono text-white">HELMET & CORS</div>
          <p className="text-xs text-zinc-400 mt-2 leading-normal">
            Strips dangerous headers, enforces Content Security Policy, and validates origins against strict allowlists.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
          <div className="text-[10px] font-mono text-zinc-400 mb-1">02 · DEFENSE</div>
          <div className="text-xs font-bold font-mono text-white">TIERED RATE LIMIT</div>
          <p className="text-xs text-zinc-400 mt-2 leading-normal">
            express-rate-limit enforces strict bucket quotas across message endpoints to curb spam and brute force.
          </p>
        </div>

        <div className="rounded-lg border border-crimson-500/50 bg-crimson-950/30 p-4 shadow-glow-red">
          <div className="text-[10px] font-mono text-crimson-400 mb-1 font-bold">03 · ACCELERATION</div>
          <div className="text-xs font-bold font-mono text-white">REDIS CACHE LAYER</div>
          <p className="text-xs text-zinc-300 mt-2 leading-normal">
            Caches recipient profile resolution and metadata, slashing database round trips and cutting latency by ~30%.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
          <div className="text-[10px] font-mono text-zinc-400 mb-1">04 · ENCRYPTION</div>
          <div className="text-xs font-bold font-mono text-white">ASYMMETRIC & ARGON2</div>
          <p className="text-xs text-zinc-400 mt-2 leading-normal">
            Protects anonymous message payloads with asymmetric keys; secures credentials with Argon2 & bcrypt hashing.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-4 bg-zinc-950/60">
          <div className="text-[10px] font-mono text-zinc-400 mb-1">05 · INFRASTRUCTURE</div>
          <div className="text-xs font-bold font-mono text-white">AWS EC2 / BEANSTALK</div>
          <p className="text-xs text-zinc-400 mt-2 leading-normal">
            Production deployment managed through AWS Elastic Beanstalk for zero-downtime rolling deploys and health checks.
          </p>
        </div>
      </div>

      {/* Latency Comparison */}
      <div className="border-t border-zinc-800 pt-4">
        <div className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
          BENCHMARK: DIRECT DATABASE QUERY VS. REDIS CACHED HIT
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div>
            <div className="flex justify-between text-zinc-400 mb-1">
              <span>UNCACHED DIRECT DATABASE RESOLUTION</span>
              <span>100% BASELINE</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-600 rounded-full w-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-zinc-200 font-semibold mb-1">
              <span>WITH MULTI-TIER REDIS CACHING IMPLEMENTED</span>
              <span className="text-crimson-400 font-bold">~30% REDUCTION IN RESPONSE TIME (~70% OF BASELINE)</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-crimson-600 to-rose-500 rounded-full w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
