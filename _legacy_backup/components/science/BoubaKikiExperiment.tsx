import React, { useState } from 'react';

export const BoubaKikiExperiment: React.FC = () => {
    const [selection, setSelection] = useState<'kiki' | 'bouba' | null>(null);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex flex-col items-center">
                <div className="flex gap-12 mb-8">
                    {/* Shape A (Spiky) */}
                    <button
                        onClick={() => setSelection('kiki')}
                        className={`group relative p-4 rounded-2xl transition-all duration-300 ${selection === 'kiki' ? 'bg-pink-50 ring-2 ring-pink-500 scale-105' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                        <svg width="140" height="140" viewBox="0 0 100 100" className="drop-shadow-lg text-slate-800 dark:text-white">
                            <path d="M50 5 L60 35 L90 40 L65 60 L75 90 L50 75 L25 90 L35 60 L10 40 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-pink-500 transition-colors" />
                        </svg>
                        <span className="block text-center mt-4 font-bold text-slate-400 group-hover:text-pink-500 uppercase tracking-widest text-xs">Fig A</span>
                    </button>

                    {/* Shape B (Round) */}
                    <button
                        onClick={() => setSelection('bouba')}
                        className={`group relative p-4 rounded-2xl transition-all duration-300 ${selection === 'bouba' ? 'bg-blue-50 ring-2 ring-blue-500 scale-105' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                        <svg width="140" height="140" viewBox="0 0 100 100" className="drop-shadow-lg text-slate-800 dark:text-white">
                            <path d="M50 10 C80 10, 90 30, 90 50 C90 80, 70 90, 50 90 C30 90, 10 90, 10 50 C10 10, 30 10, 50 10 Z" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-blue-500 transition-colors" />
                        </svg>
                        <span className="block text-center mt-4 font-bold text-slate-400 group-hover:text-blue-500 uppercase tracking-widest text-xs">Fig B</span>
                    </button>
                </div>

                {!selection ? (
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Pop Quiz</h3>
                        <p className="text-slate-500">Which shape is named <strong>"Kiki"</strong>?</p>
                    </div>
                ) : (
                    <div className="text-center animate-fade-in-up">
                        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm mb-4">
                            {selection === 'kiki' ? '✅ Correct!' : '🤔 Interesting Choice'}
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-2">Global Consensus</h3>
                        <div className="w-full max-w-xs mx-auto bg-slate-100 rounded-full h-4 overflow-hidden mb-2 relative">
                            <div className="absolute left-0 top-0 bottom-0 bg-pink-500 w-[95%]"></div>
                            <span className="absolute left-2 top-0 bottom-0 flex items-center text-[9px] font-bold text-white uppercase tracking-wider">Kiki (Spiky)</span>
                            <span className="absolute right-2 top-0 bottom-0 flex items-center text-[9px] font-bold text-slate-500 uppercase tracking-wider">Bouba (Round)</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                            <strong>98%</strong> of humans across all cultures correlate the sharp sounds of 'K', 'I' with sharp shapes.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
