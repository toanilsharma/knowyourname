'use client';

import React, { useState } from 'react';
import { ViralSummary } from '@/lib/types';

interface Props {
    summary: ViralSummary;
    name: string;
    primaryColor?: string;
}

export const ViralResultCard: React.FC<Props> = ({ summary, name, primaryColor = '#6366f1' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(summary.shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group w-full max-w-3xl mx-auto mb-16 transform hover:scale-[1.005] transition-all duration-500">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-70 transition duration-700 animate-gradient-x"></div>

            <div className="relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 p-10 md:p-12 rounded-[2rem] shadow-2xl text-center overflow-hidden backdrop-blur-sm">

                {/* Floating Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10"></div>

                {/* Emoji with Animation */}
                <div className="mb-6 text-8xl md:text-9xl select-none animate-float">
                    {summary.emoji}
                </div>

                {/* Vibe Check Badge */}
                <div className="flex justify-center items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-rose-500/30">
                        ✨ Name Analysis
                    </span>
                </div>

                {/* THE NAME - Big, Bold, Beautiful */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 animate-fade-in-up"
                    style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, #8b5cf6 50%, #ec4899 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                    {name}
                </h1>

                {/* Headline under name */}
                <h2 className="text-2xl md:text-3xl font-serif font-medium text-slate-700 dark:text-slate-200 mb-6 tracking-tight">
                    is <span className="font-bold text-slate-900 dark:text-white">{summary.headline}</span>
                </h2>

                {/* Social Vibe Description */}
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                    {summary.socialVibe}
                </p>

                {/* Trait Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {summary.adjectives.map((adj, i) => (
                        <span
                            key={i}
                            className="px-5 py-2.5 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm hover:scale-105 transition-transform duration-200"
                        >
                            {adj}
                        </span>
                    ))}
                </div>

                {/* Share Button */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <button
                        onClick={handleCopy}
                        className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-sm hover:shadow-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                    >
                        {copied ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                                <span>Copy Link</span>
                            </>
                        )}
                    </button>

                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(summary.shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-black/20 hover:scale-105 transition-transform active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                        <span>Share on X</span>
                    </a>

                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(summary.shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                        </svg>
                        <span>WhatsApp</span>
                    </a>
                </div>

                <p className="mt-6 text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                    100% Scientific Phonetic Analysis • KnowYourName.co.in
                </p>

            </div>
        </div>
    );
};
