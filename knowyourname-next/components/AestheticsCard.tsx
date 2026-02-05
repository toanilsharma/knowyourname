import React from 'react';
import { NameAnalysis } from '@/lib/types';

interface Props {
    analysis: NameAnalysis;
}

export const AestheticsCard: React.FC<Props> = ({ analysis }) => {
    const { synesthesia, prosody, globalPronounceability, name } = analysis;

    // Create the Simner Gradient - handle potentially undefined colors
    const colors = synesthesia?.colors ?? ['#6366f1', '#8b5cf6', '#a855f7'];
    const gradientString = `linear-gradient(to right, ${colors.join(', ')})`;

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>🎨</span>
                Advanced Aesthetics
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                The hidden sensory colors and rhythms encoded in your name.
            </p>

            <div className="space-y-10">
                {/* 1. The Spectral Palette */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">The Spectral Palette</label>
                        <span className="text-xs text-slate-400 font-mono">(Simner et al., 2005)</span>
                    </div>

                    <div
                        className="h-24 w-full rounded-2xl shadow-inner mb-4 flex items-center justify-center relative overflow-hidden"
                        style={{ background: gradientString }}
                    >
                        <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl border border-white/20">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-widest uppercase">
                                {name}
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="font-bold text-purple-600 dark:text-purple-400">Rare Sunset Gradient.</span> Most names are muddy brown. Yours possesses a distinct distinct {colors[0] === '#ef4444' ? 'Red' : 'Blue'} dominant hue based on scientifically mapped letter-color synesthesia.
                    </p>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. The Rhythm Engine */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Rhythm Engine</label>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{prosody.meter}</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl flex items-center justify-between mb-2">
                        <div className="font-serif text-3xl text-slate-900 dark:text-white">
                            {prosody.musicalNotation}
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Musical Meter</div>
                            <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                                {prosody.meter === 'Dactyl' ? 'Like a Waltz (3/4 Time)' : prosody.meter === 'Iamb' ? 'Rising Beat (Sophisticated)' : 'Standard Beat (Grounded)'}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        Your name is a <span className="font-bold">{prosody.meter}</span>.
                        {prosody.meter === 'Dactyl' && " It shares the same musical triplet rhythm as a Waltz. Highly musical and flowing."}
                        {prosody.meter === 'Iamb' && " It has a 'weak-STRONG' beat pattern, often found in French names. It sounds sophisticated."}
                        {prosody.meter === 'Trochee' && " It has a 'STRONG-weak' beat pattern. This is the grounded, standard rhythm of English."}
                    </p>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Global Pronounceability */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Travel Suitability</label>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${globalPronounceability.class === 'International' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                            {globalPronounceability.class} Class
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl border-4 border-white dark:border-slate-700 shadow-sm">
                            {globalPronounceability.score}%
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white">
                                {globalPronounceability.class === 'International' ? 'Universal Passport' : 'Regional Specialist'}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">
                                {globalPronounceability.explanation}
                            </p>
                        </div>
                    </div>

                    {globalPronounceability.difficulties.length > 0 && (
                        <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1">Friction Points</span>
                            <div className="flex flex-wrap gap-2">
                                {globalPronounceability.difficulties.map(d => (
                                    <span key={d} className="px-2 py-0.5 bg-white dark:bg-black/20 text-red-600 dark:text-red-400 text-[10px] rounded font-mono border border-red-100 dark:border-red-900/30">
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
