'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CitationExport } from '@/components/CitationExport';
import { ArticleHero } from '@/components/research/ArticleHero';
import { ArticleProse } from '@/components/research/ArticleProse';
import { KeyTakeaway } from '@/components/research/KeyTakeaway';

export const BoubaKikiClient: React.FC = () => {
    const [selected, setSelected] = useState<'bouba' | 'kiki' | null>(null);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pb-24 relative">
            
            <ArticleHero 
                title="The Bouba-Kiki Effect"
                subtitle="Across Languages"
                description="Cross-cultural and infant studies revealing the universal neural link between sounds and visual shapes."
                readTime="10 min read"
                gradient="from-pink-500 via-purple-500 to-indigo-500"
            />

            <ArticleProse>
                {/* Abstract / Key Takeaway */}
                <KeyTakeaway title="The Core Discovery" gradient="from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                    The Bouba-Kiki effect demonstrates that the relationship between speech sounds and visual shapes is <strong>not arbitrary</strong>. Over 95% of people across diverse cultures—and even pre-verbal infants—consistently map rounded sounds (like "Bouba") to rounded shapes and sharp sounds (like "Kiki") to angular shapes.
                </KeyTakeaway>

                 {/* Interactive Demo */}
                 <div className="not-prose my-16 p-8 glass-card rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
                    
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
                        🧪 Interactive Experiment
                    </h3>
                    
                    <p className="text-center text-xl text-slate-900 dark:text-white font-serif mb-10">
                        Which shape is "Bouba" and which is "Kiki"?
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        {/* Kiki Shape */}
                        <button
                            onClick={() => setSelected('kiki')}
                            className={`group relative p-6 rounded-3xl transition-all duration-500 ${selected === 'kiki' ? 'ring-4 ring-purple-500 scale-105 bg-white dark:bg-slate-800 shadow-2xl' : 'hover:scale-105 hover:bg-white dark:hover:bg-slate-800'}`}
                        >
                            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-lg text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                <polygon
                                    points="50,5 61,39 98,39 68,60 79,95 50,73 21,95 32,60 2,39 39,39"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            {selected && (
                                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${selected === 'kiki' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                    {selected === 'kiki' ? '✓ Correct! (Kiki)' : '✗ This is Kiki'}
                                </div>
                            )}
                        </button>

                        <div className="text-slate-300 dark:text-slate-700 font-serif italic text-2xl">vs</div>

                        {/* Bouba Shape */}
                        <button
                            onClick={() => setSelected('bouba')}
                            className={`group relative p-6 rounded-3xl transition-all duration-500 ${selected === 'bouba' ? 'ring-4 ring-purple-500 scale-105 bg-white dark:bg-slate-800 shadow-2xl' : 'hover:scale-105 hover:bg-white dark:hover:bg-slate-800'}`}
                        >
                            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-lg text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                <ellipse
                                    cx="50" cy="50" rx="45" ry="40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            {selected && (
                                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${selected === 'bouba' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                                    {selected === 'bouba' ? '✓ Correct! (Bouba)' : '✗ This is Bouba'}
                                </div>
                            )}
                        </button>
                    </div>

                    {selected && (
                        <div className="mt-12 text-center animate-fade-in">
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                You just agreed with <strong>95-98% of humanity</strong>.
                            </p>
                        </div>
                    )}
                </div>

                <h2>Historical Background</h2>
                <p>
                    In 1929, Gestalt psychologist <strong>Wolfgang Köhler</strong> presented participants with two abstract shapes—one spiky, one rounded—and asked which was "takete" and which was "baluma." The overwhelming majority (over 95%) mapped the spiky shape to "takete" and the rounded shape to "baluma."
                </p>
                <blockquote>
                    "The sharp, angular sound of 'takete' seems inherently appropriate to the jagged shape, while the soft, rounded sound of 'baluma' fits the curved form."
                    <br/>
                    <cite className="block mt-2 text-sm not-italic opacity-70">— Köhler, W. (1947). Gestalt Psychology. Liveright.</cite>
                </blockquote>

                <h2>Cross-Cultural Evidence</h2>
                <p>
                    The effect has been replicated in remarkably diverse populations, suggesting it is not a cultural artifact but a fundamental property of human cognition.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                    {[
                        { culture: 'Himba of Namibia', study: 'Bremner et al., 2013', result: '95% agreement', icon: '🌍' },
                        { culture: 'Tamil speakers', study: 'Ozturk et al., 2013', result: '96% agreement', icon: '🇮🇳' },
                        { culture: 'Pre-verbal infants', study: 'Ozturk et al., 2013', result: 'Significant preference', icon: '👶' },
                        { culture: 'Synaesthetes', study: 'Simner et al., 2006', result: 'Enhanced sensitivity', icon: '🧠' }
                    ].map((item) => (
                        <div key={item.culture} className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-start gap-4">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">{item.culture}</div>
                                <div className="text-xs text-purple-600 dark:text-purple-400 font-mono mt-1 mb-1">{item.study}</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400 leading-tight">{item.result}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Application to Names</h2>
                <p>
                    Our engine calculates a <strong>"Bouba-Kiki Score"</strong> for every name. This isn't just trivia; it predicts the "personality" people effectively hear in a name before they meet the person.
                </p>

                <div className="my-8 not-prose p-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500">
                    <div className="bg-white dark:bg-slate-950 rounded-xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 gap-6">
                            <div className="text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-4">Kiki-Like Names</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Sharp, energetic, precise.</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {['Kiki', 'Tiki', 'Kate', 'Takete', 'Picchu'].map(name => (
                                        <span key={name} className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-lg text-sm font-medium">{name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center pt-6 md:pt-0">
                                <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Bouba-Like Names</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Round, friendly, soft.</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {['Bouba', 'Lola', 'Momo', 'Maluma', 'Baluma'].map(name => (
                                        <span key={name} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">{name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* References */}
                <div className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">References</h3>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">Bremner et al. (2013)</span>
                            <p className="mt-1">"Bouba" and "Kiki" in Namibia? <em>Cognition</em>, 126(2). <a href="https://doi.org/10.1016/j.cognition.2012.09.007" className="text-blue-600 hover:underline">DOI</a></p>
                        </li>
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">Ozturk et al. (2013)</span>
                            <p className="mt-1">Sound symbolism in infancy. <em>Dev Sci</em>. <a href="https://doi.org/10.1111/desc.12077" className="text-blue-600 hover:underline">DOI</a></p>
                        </li>
                    </ul>
                </div>

                <div className="not-prose mt-12">
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
                <div className="not-prose mt-16 flex justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
                    <Link href="/research/sound-symbolism" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                        ← Sound Symbolism
                    </Link>
                    <Link href="/research/phonotactics" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                        Phonotactics →
                    </Link>
                </div>

            </ArticleProse>
        </div>
    );
};
