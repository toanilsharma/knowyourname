import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
    {
        slug: 'sound-symbolism',
        title: 'Sound Symbolism in Names',
        subtitle: 'A Meta-Analysis',
        description: 'From Sapir (1929) to modern replications: how speech sounds carry inherent meaning across cultures and languages.',
        icon: '🔊',
        className: 'md:col-span-2 md:row-span-2',
        gradient: 'from-blue-500 via-blue-600 to-indigo-600',
        bgGlow: 'bg-blue-500',
        readTime: '12 min',
        citations: ['Sapir 1929', 'Köhler 1929', 'Ramachandran 2001']
    },
    {
        slug: 'bouba-kiki',
        title: 'The Bouba-Kiki Effect',
        subtitle: 'Across Languages',
        description: 'Cross-cultural and infant studies revealing the universal neural link between sounds and visual shapes.',
        icon: '🫧',
        className: 'md:col-span-1',
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        bgGlow: 'bg-purple-500',
        readTime: '10 min',
        citations: ['Bremner 2013', 'Ozturk 2013']
    },
    {
        slug: 'phonotactics',
        title: 'Phonotactics & Branding',
        subtitle: 'Consumer Perception',
        description: 'How consonant clusters and syllable structures shape consumer expectations and brand personality.',
        icon: '💎',
        className: 'md:col-span-1',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        bgGlow: 'bg-emerald-500',
        readTime: '8 min',
        citations: ['Klink 2000', 'Lowrey & Shrum 2007']
    },
    {
        slug: 'acoustic-frequency',
        title: 'Acoustic Frequency',
        subtitle: 'Emotional Valence',
        description: "Ohala's Frequency Code explains why deep voices sound dominant and high voices sound friendly.",
        icon: '📊',
        className: 'md:col-span-1',
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        bgGlow: 'bg-amber-500',
        readTime: '9 min',
        citations: ['Ohala 1984', 'Gussenhoven 2004']
    },
    {
        slug: 'typing-effort',
        title: 'Typing Effort Models',
        subtitle: 'Human-Computer Interaction',
        description: "Fitts' Law applied to names: how keyboard geography affects the digital experience of your identity.",
        icon: '⌨️',
        className: 'md:col-span-1',
        gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
        bgGlow: 'bg-rose-500',
        readTime: '7 min',
        citations: ['Fitts 1954', 'MacKenzie 2002']
    }
];

export const metadata: Metadata = {
    title: 'Research Library | Peer-Reviewed Literature Reviews',
    description: 'Academic literature reviews on phonetics, sound symbolism, and naming science. Peer-reviewed sources with DOI citations.',
    keywords: 'linguistics research, sound symbolism literature review, bouba kiki research, phonetics papers',
};

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24 relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="glow-orb w-[600px] h-[600px] bg-blue-500/10 -top-40 -left-40"></div>
                <div className="glow-orb w-[500px] h-[500px] bg-purple-500/10 top-1/2 -right-40" style={{ animationDelay: '2s' }}></div>
                <div className="glow-orb w-[400px] h-[400px] bg-emerald-500/10 -bottom-40 left-1/3" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header */}
                <header className="mb-20 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-6 border border-slate-200 dark:border-slate-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Academic Library
                    </div>
                    <h1 className="text-5xl md:text-7xl heading-display mb-6">
                        <span className="gradient-text">Research</span> Library
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Deep-dive literature reviews synthesizing decades of peer-reviewed research.
                        Every claim is traceable to published sources with DOI links.
                    </p>
                </header>

                <BentoGrid className="max-w-7xl mx-auto">
                    {ARTICLES.map((article, i) => (
                        <Link key={article.slug} href={`/research/${article.slug}`} className={cn("contents")}>
                             <BentoGridItem
                                title={<span className="text-xl font-serif font-bold group-hover/bento:text-blue-600 dark:group-hover/bento:text-blue-400 transition-colors">{article.title}</span>}
                                description={
                                    <div className="mt-2">
                                        <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                            {article.description}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {article.citations.map((cite) => (
                                                <span key={cite} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] text-slate-500 dark:text-slate-400">
                                                    {cite}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                            Read Article <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                }
                                header={
                                    <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br p-6 relative overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-200", article.gradient)}>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                                        <div className="relative z-10 flex flex-col justify-between h-full text-white">
                                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">{article.subtitle}</div>
                                            <div className="text-sm font-medium opacity-80">{article.readTime} read</div>
                                        </div>
                                        {/* Abstract glow */}
                                        <div className={cn("absolute -bottom-10 -right-10 w-40 h-40 blur-3xl opacity-50 bg-white mix-blend-overlay")} />
                                    </div>
                                }
                                icon={<div className="text-4xl mb-4">{article.icon}</div>}
                                className={cn(i === 0 || i === 3 ? "md:col-span-2" : "", "cursor-pointer")}
                            />
                        </Link>
                    ))}
                </BentoGrid>

                {/* Bottom CTA */}
                <div className="mt-20 text-center animate-fade-in-up">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-slate-500 dark:text-slate-400">Want to understand how we apply this research?</p>
                        <Link href="/methods" className="btn-premium">
                            View Engine Methodology →
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
