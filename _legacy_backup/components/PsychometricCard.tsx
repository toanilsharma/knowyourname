import React from 'react';
import { NameAnalysis } from '../types';

interface Props {
    analysis: NameAnalysis;
}

export const PsychometricCard: React.FC<Props> = ({ analysis }) => {
    const { trustworthiness, smileIndex, dominanceScale, genderBias } = analysis;

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>🧠</span>
                Advanced Psychometrics
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                How the brain subconsciously processes your name based on evolutionary biology.
            </p>

            <div className="space-y-8">
                {/* 1. Trustworthiness (Cognitive Fluency) */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Trustworthiness Score</label>
                        <span className={`text-sm font-bold ${trustworthiness.score >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>
                            {trustworthiness.score}%
                        </span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ${trustworthiness.score >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
                                }`}
                            style={{ width: `${trustworthiness.score}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {trustworthiness.description} <span className="text-xs text-slate-400 block mt-1">(Ref: Song & Schwarz, 2009)</span>
                    </p>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Smile Index (Facial Feedback) */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Smile Index</label>
                        <span className="text-sm font-bold text-pink-500">
                            {smileIndex.muscleAction.split(' ')[0]}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl opacity-50">😐</span>
                        <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                            {/* Center Marker */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-300 dark:bg-slate-600 z-10"></div>

                            <div
                                className="absolute top-0 bottom-0 bg-pink-500 transition-all duration-1000 rounded-full opacity-80"
                                style={{
                                    left: smileIndex.score > 50 ? '50%' : `${smileIndex.score}%`,
                                    right: smileIndex.score > 50 ? `${100 - smileIndex.score}%` : '50%'
                                }}
                            ></div>
                        </div>
                        <span className="text-2xl">😄</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {smileIndex.description} <span className="text-xs text-slate-400 block mt-1">(Ref: Strack et al., 1988)</span>
                    </p>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Dominance Scale (Frequency Code) */}
                <div className="relative group">
                    <div className="flex justify-between items-end mb-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Frequency Profile</label>
                        <span className="text-sm font-bold text-blue-500">
                            {dominanceScale.label}
                        </span>
                    </div>

                    {/* Visual Scale */}
                    <div className="h-12 w-full bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden mb-2 flex">
                        <div className="flex-1 bg-gradient-to-r from-sky-200/50 to-transparent flex items-center justify-start px-2 text-[10px] text-sky-700 dark:text-sky-400 font-bold">
                            AGILE / FAST
                        </div>
                        <div className="flex-1 bg-gradient-to-l from-indigo-200/50 to-transparent flex items-center justify-end px-2 text-[10px] text-indigo-700 dark:text-indigo-400 font-bold">
                            DOMINANT / LARGE
                        </div>

                        {/* Marker */}
                        <div
                            className="absolute top-1 bottom-1 w-1 bg-slate-900 dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-1000"
                            style={{
                                left: `${((dominanceScale.frequencyWeight - 1) / 4) * 100}%`
                            }}
                        >
                            <div className="absolute -top-1 -left-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-white border-2 border-white dark:border-slate-900"></div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {dominanceScale.description} <span className="text-xs text-slate-400 block mt-1">(Ref: Ohala, 1994)</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
