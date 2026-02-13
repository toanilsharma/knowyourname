'use client';

import React from 'react';
import { ResultCard } from './results/ResultCard';
import { Signal, Radio, Ear, AlertTriangle, CheckCircle2 } from 'lucide-react';

import { NameAnalysis } from '@/lib/types';
import { Interpolator } from '@/lib/interpretations';

interface Props {
  analysis: NameAnalysis;
}

export const ClarityCard: React.FC<Props> = ({ analysis }) => {
  const clarityScore = analysis.radioAnalysis?.clarityScore ?? 0;
  const natoString = analysis.radioAnalysis?.natoString || [];
  const confusablePairs = analysis.radioAnalysis?.confusablePairs || [];
  
  return (
    <ResultCard
        title="Communication Clarity"
        description="Can people hear your name over the phone?"
        icon={<Signal className="w-6 h-6" />}
        gradient="from-emerald-500 to-green-600"
        score={clarityScore}
        scoreLabel="Clarity"
        delay={0.8}
        interpretation={Interpolator.clarity(analysis)}
    >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Gauge */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 flex flex-col items-center justify-center text-center">
                <Radio className="w-12 h-12 text-emerald-500 mb-4 animate-pulse-slow opacity-80" />
                
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Signal Strength</div>
                
                <div className="w-full max-w-[200px] h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4">
                    <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-600 rounded-full transition-all duration-1000"
                        style={{ width: `${clarityScore}%` }}
                    ></div>
                </div>

                <p className={`text-lg font-bold ${clarityScore > 80 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                    {clarityScore > 80 ? "Crystal Clear Signal" : clarityScore > 50 ? "Average Clarity" : "Hard to Distinguish"}
                </p>
            </div>

            {/* Right: Technical Data */}
            <div className="space-y-4">
                 <div className="bg-slate-900 rounded-2xl p-5 shadow-md border border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                        <Ear className="w-4 h-4 text-slate-400" />
                        <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">NATO Phonetic Translation</span>
                    </div>
                    <div className="text-emerald-400 font-mono text-sm md:text-base leading-relaxed break-words">
                        {`> ${natoString.join(' - ')}`}
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/50">
                    {confusablePairs.length > 0 ? (
                        <div className="flex items-start gap-3 text-amber-600 dark:text-amber-400 text-sm">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>
                                <strong>Risk:</strong> {confusablePairs.join(', ')} might be confused over poor audio.
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-start gap-3 text-emerald-600 dark:text-emerald-400 text-sm">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>
                                <strong>Strong Signal:</strong> High distinctive phonetic contrast.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </ResultCard>
  );
};
