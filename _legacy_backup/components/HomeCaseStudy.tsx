import React, { useState } from 'react';

export const HomeCaseStudy: React.FC = () => {
    const [active, setActive] = useState<'tesla' | 'ford'>('tesla');

    return (
        <div className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
                            Case Study
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white">
                            Why does <span className="italic">"Tesla"</span> sound faster than <span className="italic">"Ford"</span>?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                            It's not just marketing. It's <strong>Phonosemantics</strong>. High-frequency sounds (like 'S' and 'T') mimic the physics of speed and electricity. Low-frequency sounds (like 'O' and 'R') mimic weight and durability.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => setActive('tesla')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${active === 'tesla' ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 ring-2 ring-red-600 ring-offset-2 dark:ring-offset-slate-900' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100'}`}
                            >
                                Tesla
                            </button>
                            <button
                                onClick={() => setActive('ford')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${active === 'ford' ? 'bg-blue-700 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-700 ring-offset-2 dark:ring-offset-slate-900' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100'}`}
                            >
                                Ford
                            </button>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative h-[400px] w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-8 transition-colors duration-500">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        {active === 'tesla' ? (
                            <div className="text-center animate-fade-in-up">
                                <div className="text-8xl mb-6">⚡</div>
                                <h3 className="text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tighter uppercase italic">TESLA</h3>
                                <div className="mt-8 flex justify-center gap-2">
                                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-bold uppercase">High Frequency</span>
                                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-bold uppercase">Fricative 'S'</span>
                                </div>
                                <p className="mt-6 text-sm text-slate-500 italic">"Sharp, Electrical, Cutting edge"</p>
                            </div>
                        ) : (
                            <div className="text-center animate-fade-in-up">
                                <div className="text-8xl mb-6">🛡️</div>
                                <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-widest uppercase">FORD</h3>
                                <div className="mt-8 flex justify-center gap-2">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">Low Pitch</span>
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">Back Vowel 'O'</span>
                                </div>
                                <p className="mt-6 text-sm text-slate-500 italic">"Reliable, Heavy, Sturdy"</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
