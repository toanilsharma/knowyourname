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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
           <div className="glass-panel p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 dark:text-white mb-2">General Inquiries</h3>
             <p className="text-sm mb-4">For general questions regarding the tool or partnerships.</p>
             <a href="mailto:info.onesharma@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-mono">info.onesharma@gmail.com</a>
           </div>

           <div className="glass-panel p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 dark:text-white mb-2">Privacy & Data</h3>
             <p className="text-sm mb-4">For concerns regarding cookies, data privacy, or removal requests.</p>
             <a href="mailto:info.onesharma@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-mono">info.onesharma@gmail.com</a>
           </div>

           <div className="text-xs text-slate-500">
             <p>Know Your Name Labs</p>
             <p>Created by A Sharma</p>
           </div>
        </div>

        {/* Mock Form (Visual Only for Trust) */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Name</label>
            <input type="text" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Email</label>
            <input type="email" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Message</label>
            <textarea rows={4} className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="How does the phonetic algorithm work?" />
          </div>
          <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};