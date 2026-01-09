import React from 'react';

export const HomeFeatures: React.FC = () => {
    return (
        <div className="py-24 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white">
                        Decode the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">DNA of Sound</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Your name isn't just a label. It's an audio signal that triggers specific psychological and biological responses in everyone who hears it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Acoustics */}
                    <div className="group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-500">
                                🌊
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Acoustic Fluidity</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Is your name a fluid stream (like "Leila") or a rhythmic percussive beat (like "Jack")? We measure the <strong className="text-blue-600 dark:text-blue-400">Sonority Curve</strong> of every syllable.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Synesthesia */}
                    <div className="group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden md:-mt-8">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-500">
                                🎨
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sound-Color Synesthesia</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                4% of people naturally see colors when they hear names. Our algorithm simulates this neural pathway, revealing the <strong className="text-purple-600 dark:text-purple-400">Hidden Palette</strong> of your name's vowels.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Psychology */}
                    <div className="group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-500">
                                🧠
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Implicit Psychology</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                The "Bouba/Kiki" effect proves sounds carry meaning. We analyse if your name projects <strong className="text-emerald-600 dark:text-emerald-400">Warmth</strong> (soft sounds) or <strong className="text-emerald-600 dark:text-emerald-400">Competence</strong> (hard sounds).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
