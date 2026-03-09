import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Bibliography } from '@/components/Bibliography';

export const metadata: Metadata = {
    title: 'Scientific Bibliography | Know Your Name',
    description: "The peer-reviewed linguistic and psychological research forming the foundation of the Know Your Name analysis engine.",
    keywords: 'linguistics, phonetics, sound symbolism, research methodology, bibliography',
};

export default function BibliographyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-20 pb-32">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8">
                        ← Back to Analyzer
                    </Link>
                    <div className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Academic Foundation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                        Scientific Bibliography
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        The Know Your Name engine is built strictly on published, peer-reviewed research in phonosemantics, articulatory phonetics, and cognitive psychology. Below are the foundational papers powering our algorithms.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
                    <Bibliography />
                </div>
            </div>
        </div>
    );
}
