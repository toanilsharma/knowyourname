import React, { useState } from 'react';
import { ViralSummary } from '../types';

export const ViralResultCard: React.FC<{ summary: ViralSummary }> = ({ summary }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(summary.shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group w-full max-w-2xl mx-auto mb-16 transform hover:scale-[1.01] transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl text-center overflow-hidden">

                {/* BACKGROUND GLOW */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>

                {/* EMOJI & HEADLINE */}
                <div className="mb-4 animate-bounce-slow text-7xl md:text-8xl select-none">
                    {summary.emoji}
                </div>

                <div className="flex justify-center items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Vibe Check
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    {summary.headline}
                </h2>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light max-w-md mx-auto mb-8 leading-relaxed">
                    {summary.socialVibe}
                </p>

                {/* ADJECTIVES */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {summary.adjectives.map((adj, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300">
                            {adj}
                        </span>
                    ))}
                </div>

                {/* SHARE BUTTON */}
                <button
                    onClick={handleCopy}
                    className="group/btn relative inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold uppercase tracking-wider text-xs hover:shadow-lg transition-all active:scale-95"
                >
                    {copied ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Copied to Clipboard!</span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                            <span>Share My Vibe</span>
                        </>
                    )}
                </button>

                <p className="mt-4 text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                    100% Scientific Phonetic Analysis
                </p>

            </div>
        </div>
    );
};
