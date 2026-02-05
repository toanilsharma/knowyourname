'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CitationExport } from '@/components/CitationExport';

export const BoubaKikiClient: React.FC = () => {
    const [selected, setSelected] = useState<'bouba' | 'kiki' | null>(null);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24 relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="glow-orb w-[500px] h-[500px] bg-purple-500/20 -top-40 -left-40"></div>
                <div className="glow-orb w-[400px] h-[400px] bg-pink-500/20 top-1/2 -right-40" style={{ animationDelay: '3s' }}></div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Breadcrumb */}
                <nav className="mb-8 text-sm animate-fade-in-up">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/research" className="hover:text-blue-600 transition-colors">Research</Link>
                        <span>/</span>
                        <span className="text-slate-900 dark:text-white">Bouba-Kiki Effect</span>
                    </div>
                </nav>

                {/* Hero Header */}
                <header className="mb-16 animate-fade-in-up">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-purple-500/30">
                            Literature Review
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400">
                            ~10 min read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl heading-display mb-6 leading-tight">
                        The <span className="gradient-text">Bouba-Kiki</span> Effect Across Languages
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl">
                        Cross-cultural and infant studies revealing the universal neural link between sounds and visual shapes—and what it means for name perception.
                    </p>
                </header>

                {/* Interactive Demo */}
                <div className="mb-16 p-8 glass-card rounded-3xl animate-fade-in-up delay-100">
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
                        🧪 Interactive Experiment
                    </h3>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
                        Which shape is "Bouba" and which is "Kiki"?
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* Kiki Shape */}
                        <button
                            onClick={() => setSelected('kiki')}
                            className={`group relative p-2 rounded-3xl transition-all duration-500 ${selected === 'kiki' ? 'ring-4 ring-purple-500 scale-105' : 'hover:scale-105'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg">
                                <polygon
                                    points="50,5 61,39 98,39 68,60 79,95 50,73 21,95 32,60 2,39 39,39"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-slate-400 dark:text-slate-500"
                                />
                            </svg>
                            {selected && (
                                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white ${selected === 'kiki' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                    {selected === 'kiki' ? '✓ Correct! (Kiki)' : '✗ This is Kiki'}
                                </div>
                            )}
                        </button>

                        <div className="text-slate-400 font-bold text-2xl">vs</div>

                        {/* Bouba Shape */}
                        <button
                            onClick={() => setSelected('bouba')}
                            className={`group relative p-2 rounded-3xl transition-all duration-500 ${selected === 'bouba' ? 'ring-4 ring-purple-500 scale-105' : 'hover:scale-105'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg">
                                <ellipse
                                    cx="50" cy="50" rx="45" ry="40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-slate-400 dark:text-slate-500"
                                />
                            </svg>
                            {selected && (
                                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white ${selected === 'bouba' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                    {selected === 'bouba' ? '✓ Correct! (Bouba)' : '✗ This is Bouba'}
                                </div>
                            )}
                        </button>
                    </div>
                    {selected && (
                        <p className="text-center mt-8 text-sm text-slate-600 dark:text-slate-400 animate-fade-in">
                            <strong>95-98% of people</strong> make the same choice across all languages studied.
                        </p>
                    )}
                </div>

                {/* Content Sections */}
                <div className="prose dark:prose-invert prose-slate lg:prose-lg max-w-none">

                    {/* Abstract */}
                    <section className="mb-12 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-lg font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mt-0 mb-4">Abstract</h2>
                        <p className="text-lg leading-relaxed m-0">
                            The Bouba-Kiki effect demonstrates that humans make consistent, non-arbitrary associations between speech sounds and visual shapes. First documented by Wolfgang Köhler (1929) and refined by Ramachandran & Hubbard (2001), this phenomenon has been replicated across diverse cultures, languages, and even in pre-verbal infants. This review examines the robustness of the effect and its implications for understanding name perception.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">1</div>
                            <h2 className="m-0">Historical Background</h2>
                        </div>
                        <p>
                            In 1929, Gestalt psychologist <strong>Wolfgang Köhler</strong> presented participants with two abstract shapes—one spiky, one rounded—and asked which was "takete" and which was "baluma." The overwhelming majority (over 95%) mapped the spiky shape to "takete" and the rounded shape to "baluma."
                        </p>
                        <blockquote className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-xl">
                            "The sharp, angular sound of 'takete' seems inherently appropriate to the jagged shape, while the soft, rounded sound of 'baluma' fits the curved form."
                            <cite>— Köhler, W. (1947). Gestalt Psychology. Liveright.</cite>
                        </blockquote>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">2</div>
                            <h2 className="m-0">Cross-Cultural Evidence</h2>
                        </div>
                        <p>
                            The effect has been replicated in remarkably diverse populations:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                            {[
                                { culture: 'Himba of Namibia', study: 'Bremner et al., 2013', result: '95% agreement' },
                                { culture: 'Tamil speakers (India)', study: 'Ozturk et al., 2013', result: '96% agreement' },
                                { culture: 'Pre-verbal infants (4 mo)', study: 'Ozturk et al., 2013', result: 'Significant preference' },
                                { culture: 'Synaesthetes', study: 'Simner et al., 2006', result: 'Enhanced effect' }
                            ].map((item) => (
                                <div key={item.culture} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">{item.culture}</div>
                                    <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">{item.study}</div>
                                    <div className="text-xs text-slate-500">{item.result}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500">
                            DOI: <a href="https://doi.org/10.1177/0956797612457804" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">10.1177/0956797612457804</a>
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">3</div>
                            <h2 className="m-0">Application to Names</h2>
                        </div>
                        <p>
                            Our engine calculates a <strong>"Bouba-Kiki Score"</strong> (0-100) for each name:
                        </p>
                        <div className="not-prose my-6 p-6 glass-card rounded-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3">Bouba Features (→ 100)</div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Sonorants (M, N, L, R)</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Rounded vowels (O, U)</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Labial consonants (B, M, P)</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-3">Kiki Features (→ 0)</div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-pink-500 rounded-full"></span>Plosives (K, T, P, D)</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-pink-500 rounded-full"></span>Fricatives (S, Z, F)</li>
                                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-pink-500 rounded-full"></span>Front vowels (I, E)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Limitations */}
                    <section className="mb-12 p-6 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-2xl">
                        <h2 className="text-amber-800 dark:text-amber-200 mt-0">Limitations</h2>
                        <p className="text-amber-700 dark:text-amber-300 m-0">
                            While robust, the effect is not deterministic. Personal associations, cultural familiarity with a name, and context can override these default sound-shape mappings. Our scores represent <strong>population-level tendencies</strong>, not individual perceptions.
                        </p>
                    </section>

                    {/* References */}
                    <section className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">References</h3>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="font-medium text-slate-900 dark:text-white">Bremner et al. (2013)</span>
                                <p className="mt-1">"Bouba" and "Kiki" in Namibia? <em>Cognition</em>, 126(2). <a href="https://doi.org/10.1016/j.cognition.2012.09.007" className="text-blue-600 hover:underline">DOI</a></p>
                            </li>
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="font-medium text-slate-900 dark:text-white">Köhler, W. (1947)</span>
                                <p className="mt-1"><em>Gestalt Psychology</em>. Liveright.</p>
                            </li>
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="font-medium text-slate-900 dark:text-white">Ozturk et al. (2013)</span>
                                <p className="mt-1">Sound symbolism in infancy. <em>Dev Sci</em>. <a href="https://doi.org/10.1111/desc.12077" className="text-blue-600 hover:underline">DOI</a></p>
                            </li>
                            <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <span className="font-medium text-slate-900 dark:text-white">Ramachandran & Hubbard (2001)</span>
                                <p className="mt-1">Synaesthesia—A window into perception. <em>J. Consciousness Studies</em>, 8(12).</p>
                            </li>
                        </ul>
                    </section>

                    {/* Citation Export */}
                    <CitationExport
                        title="The Bouba-Kiki Effect Across Languages"
                        authors={["A Sharma"]}
                        year="2026"
                        journal="Know Your Name Research Library"
                        url="https://knowyourname.co.in/research/bouba-kiki"
                        abstract="Cross-cultural and infant studies on the universal link between sounds and shapes."
                    />
                </div>

                {/* Navigation */}
                <div className="mt-16 flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
                    <Link href="/research/sound-symbolism" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                        ← Sound Symbolism
                    </Link>
                    <Link href="/research/phonotactics" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                        Phonotactics →
                    </Link>
                </div>
            </article>
        </div>
    );
};
