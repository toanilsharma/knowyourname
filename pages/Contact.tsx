import React from 'react';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 animate-fade-in-up">
      <SEO title="Contact Us" description="Get in touch with Know Your Name Labs. Support, methodology questions, and privacy inquiries." />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Questions about our methodology? Media inquiries? We're here to help.
        </p>
      </header>

      <div className="flex flex-col items-center gap-12">
        {/* Contact Info */}
        <div className="w-full max-w-xl space-y-8">
          <div className="glass-panel p-8 rounded-xl text-center border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2">Email Us</h3>
            <p className="text-slate-500 mb-6">For collaborations, methodology questions, or data privacy requests.</p>
            <a href="mailto:info.onesharma@gmail.com" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-blue-500/20 shadow-lg">
              info.onesharma@gmail.com
            </a>
          </div>

          <div className="text-center text-sm text-slate-400 mt-8">
            <p>Know Your Name Labs • Research Division</p>
            <p className="mt-2">Response time: Usually within 48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};