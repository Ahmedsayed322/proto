import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Route Not Found"
        description="The requested route does not exist in this backend engineering portfolio."
        canonicalPath="/404"
      />

      <main className="w-full min-h-[60vh] flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-crimson-500/30 bg-crimson-950/20 text-xs font-mono text-crimson-400 mb-6 shadow-glow-red">
            <span className="w-2 h-2 rounded-full bg-crimson-500 inline-block" />
            <span>HTTP STATUS 404 · ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-white mb-4 font-mono">
            404
          </h1>

          <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-zinc-200 mb-4">
            THIS ENDPOINT DOESN'T EXIST.
          </p>

          <p className="text-sm md:text-base text-zinc-400 max-w-md mx-auto mb-8 font-mono">
            The endpoint or resource path you requested is not bound to any route handler in this application.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-glow-red transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO RUNTIME HOME</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
