import React from 'react';
import Link from 'next/link';

export const HomeFeatures: React.FC = () => {
    return (
        <div className="py-32 px-4 relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="glow-orb w-[600px] h-[600px] bg-blue-500/30 -top-60 -left-60"></div>
                <div className="glow-orb w-[500px] h-[500px] bg-purple-500/20 top-1/2 -right-40" style={{ animationDelay: '2s' }}></div>
                <div className="glow-orb w-[400px] h-[400px] bg-emerald-500/20 -bottom-40 left-1/3" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                        Core Analysis Modules
                    </div>
                    <h2 className="text-4xl md:text-6xl heading-display">
                        Decode the <span className="gradient-text">DNA of Sound</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
                        Your name isn't just a label. It's an audio signal that triggers specific
                        psychological and biological responses in everyone who hears it.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Acoustic Fluidity */}
                    <div className="group relative animate-fade-in-up delay-100">
                        {/* Gradient Border on Hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                        <div className="relative p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full transition-all duration-500 group-hover:border-transparent">
                            {/* Animated Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-blue-500/30 group-hover:scale-150"></div>

                            <div className="relative z-10">
                                {/* Icon with Glow */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-full scale-150 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        🌊
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Acoustic Fluidity
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Is your name a fluid stream (like "Leila") or a rhythmic percussive beat (like "Jack")? We measure the <strong className="text-blue-600 dark:text-blue-400">Sonority Curve</strong> of every syllable.
                                </p>

                                {/* Metric Preview */}
                                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">7.5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Synesthesia - Featured/Elevated */}
                    <div className="group relative md:-mt-8 animate-fade-in-up delay-200">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                        <div className="relative p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full transition-all duration-500 group-hover:border-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-purple-500/30 group-hover:scale-150"></div>

                            {/* Featured Badge */}
                            <div className="absolute top-6 right-6">
                                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Popular
                                </span>
                            </div>

                            <div className="relative z-10">
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-purple-500 opacity-20 blur-2xl rounded-full scale-150 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        🎨
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Sound-Color Synesthesia
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    ~4% of people naturally see colors when they hear sounds (Simner et al., 2006). We simulate this neural pathway to reveal your name's <strong className="text-purple-600 dark:text-purple-400">Hidden Palette</strong>.
                                </p>

                                {/* Color Preview */}
                                <div className="flex gap-2">
                                    {['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-lg shadow-md transition-transform group-hover:scale-110"
                                            style={{
                                                backgroundColor: color,
                                                transitionDelay: `${i * 50}ms`,
                                                boxShadow: `0 4px 15px ${color}40`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Implicit Psychology */}
                    <div className="group relative animate-fade-in-up delay-300">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                        <div className="relative p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full transition-all duration-500 group-hover:border-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-emerald-500/30 group-hover:scale-150"></div>

                            <div className="relative z-10">
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-emerald-500 opacity-20 blur-2xl rounded-full scale-150 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        🧠
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    Implicit Psychology
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    The "Bouba/Kiki" effect (Köhler, 1929) proves sounds carry meaning. We analyse if your name projects <strong className="text-emerald-600 dark:text-emerald-400">Warmth</strong> or <strong className="text-emerald-600 dark:text-emerald-400">Competence</strong>.
                                </p>

                                {/* Warmth/Competence Meter */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-rose-500">Warm</span>
                                    <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500"></div>
                                        <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-slate-900 shadow-lg"></div>
                                    </div>
                                    <span className="text-xs font-bold text-blue-500">Sharp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center animate-fade-in-up delay-400">
                    <Link href="/science" className="btn-premium inline-flex items-center gap-3">
                        Explore the Science
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};
