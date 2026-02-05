import React from 'react';

export const SonorityHierarchy: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-center font-bold font-serif text-xl mb-6 text-slate-900 dark:text-white">The Sonority Hierarchy</h3>

            <div className="relative flex flex-col items-center space-y-2">
                {/* Level 1: Vowels */}
                <div className="w-full bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 p-4 rounded-xl text-center relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-pink-600 dark:text-pink-400 text-2xl">High</div>
                    <span className="text-sm font-bold uppercase tracking-widest text-pink-700 dark:text-pink-300">Vowels (A, E, O)</span>
                    <p className="text-xs text-slate-500 mt-1">Open airflow. Maximum resonance. <span className="font-bold text-pink-600">Feminine Coded</span></p>
                </div>

                {/* Arrow */}
                <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-700"></div>

                {/* Level 2: Glides & Liquids */}
                <div className="w-[85%] bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 p-3 rounded-xl text-center relative">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300">Glides & Liquids (L, R, Y, W)</span>
                </div>

                {/* Arrow */}
                <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-700"></div>

                {/* Level 3: Nasals */}
                <div className="w-[70%] bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 p-3 rounded-xl text-center relative">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">Nasals (M, N)</span>
                </div>

                {/* Arrow */}
                <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-700"></div>

                {/* Level 4: Stops */}
                <div className="w-[50%] bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-xl text-center relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-blue-600 dark:text-blue-400 text-2xl">Low</div>
                    <span className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">Plosive Stops (P, T, K)</span>
                    <p className="text-xs text-slate-500 mt-1">Airflow blocked. Hard sound. <span className="font-bold text-blue-600">Masculine Coded</span></p>
                </div>
            </div>

            <div className="mt-8 text-center bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
                "Sonority" is the measure of how 'singable' a sound is. Higher sonority = More 'Soft Power'."
            </div>
        </div>
    );
};
