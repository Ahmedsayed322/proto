import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { SEO } from '../components/common/SEO';
import { RevealOnScroll } from '../components/common/RevealOnScroll';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const email = 'ahmedsayed0575@gmail.com';
  const phone = '+20 010 036 19642';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject || 'Backend Engineering Opportunity')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <SEO
        title="Direct Contact & Channels"
        description="Connect with Ahmed Sayed Abdelnaby for backend engineering opportunities, Node.js/NestJS architecture consultations, or direct technical discussions."
        canonicalPath="/contact"
      />

      <main className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <RevealOnScroll direction="up">
            <div className="border-b border-zinc-800 pb-12 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson-400 font-bold block mb-3">
                COMMUNICATION CHANNELS // INBOX & DISPATCH
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
                Let's Talk Architecture.
              </h1>
              <p className="text-base md:text-lg font-sans text-zinc-300 max-w-2xl leading-relaxed">
                Whether you need backend API engineering, transactional consistency for payment workflows, or real-time distributed systems, you can reach out directly below.
              </p>
            </div>
          </RevealOnScroll>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Interactive Mail Composer */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="up" delay={100}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/90 p-8 md:p-10 shadow-card-dark">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-crimson-400 font-bold uppercase tracking-wider">
                      <Mail className="w-4 h-4" />
                      <span>DIRECT INBOX COMPOSER</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      REAL MAILTO DISPATCH
                    </span>
                  </div>

                  <div className="text-xl md:text-2xl font-extrabold text-white font-mono tracking-tight break-all mb-2">
                    {email}
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 font-mono">
                    Compose your message below. Submitting directly opens your native email client pre-addressed to Ahmed.
                  </p>

                  <form onSubmit={handleComposeMail} className="space-y-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block mb-1.5">
                        SUBJECT / OPPORTUNITY
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Backend Engineer Role / API Architecture Discussion"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-crimson-500 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block mb-1.5">
                        MESSAGE CONTENT
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Provide context regarding your tech stack, system requirements, or project timeline..."
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-crimson-500 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-glow-red transition-all inline-flex items-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>LAUNCH EMAIL CLIENT</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(email, 'email')}
                        className="px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300 text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">COPIED TO CLIPBOARD</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY EMAIL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Phone & Verified Profiles */}
            <div className="lg:col-span-5 space-y-6">
              {/* Phone Channel */}
              <RevealOnScroll direction="left" delay={150}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/90 p-6 md:p-8 shadow-card-dark">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-crimson-400 font-bold uppercase tracking-wider">
                      <Phone className="w-4 h-4" />
                      <span>PHONE & WHATSAPP</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">EGYPT (GMT+2)</span>
                  </div>

                  <div className="text-xl font-bold font-mono text-white mb-4">
                    {phone}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono uppercase tracking-wider text-zinc-200 transition-colors"
                    >
                      CALL DIRECTLY
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      {copiedPhone ? 'COPIED!' : 'COPY NUMBER'}
                    </button>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Verified Profiles */}
              <RevealOnScroll direction="left" delay={250}>
                <div className="rounded-2xl border border-zinc-800 bg-dark-900/90 p-6 md:p-8 space-y-4 shadow-card-dark">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                    NETWORK PROFILES
                  </span>

                  <a
                    href="https://linkedin.com/in/ahmed-sayed-589477327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 hover:border-crimson-500/40 hover:shadow-glow-red transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4 text-zinc-300 group-hover:text-crimson-400 transition-colors" />
                      <div>
                        <div className="text-sm font-bold text-white">LinkedIn</div>
                        <div className="text-xs font-mono text-zinc-400">linkedin.com/in/ahmed-sayed-589477327</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-crimson-400 transition-colors" />
                  </a>

                  <a
                    href="https://github.com/Ahmedsayed322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 hover:border-crimson-500/40 hover:shadow-glow-red transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-zinc-300 group-hover:text-crimson-400 transition-colors" />
                      <div>
                        <div className="text-sm font-bold text-white">GitHub</div>
                        <div className="text-xs font-mono text-zinc-400">github.com/Ahmedsayed322</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-crimson-400 transition-colors" />
                  </a>
                </div>
              </RevealOnScroll>

              {/* Geographic availability */}
              <RevealOnScroll direction="left" delay={350}>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <MapPin className="w-4 h-4 text-crimson-500 flex-shrink-0" />
                  <span>LOCATION: CAIRO, EGYPT · AVAILABLE FOR REMOTE ENGAGEMENTS</span>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
