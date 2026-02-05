import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
      <SEO title="404 Not Found" description="Page not found" noIndex={true} />
      <div className="relative mb-8">
        <div className="text-9xl font-serif font-bold text-slate-200 dark:text-slate-800 select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">∅</span>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Undefined Variable
      </h1>

      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        The route you are looking for does not exist in our linguistic corpus. It may be a phonetic outlier or a ghost in the machine.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
      >
        Return to Analysis Lab
      </Link>
    </div>
  );
};