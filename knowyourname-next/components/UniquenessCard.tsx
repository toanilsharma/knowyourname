import React from 'react';
import { NameAnalysis } from '@/lib/types';
import { ResultCard } from './results/ResultCard';
import { Gem, Fingerprint } from 'lucide-react';
import { Interpolator } from '@/lib/interpretations';

interface Props {
  analysis: NameAnalysis;
}

export const UniquenessCard: React.FC<Props> = ({ analysis }) => {
  const data = analysis.informationDynamics;
  return (
    <ResultCard
        title="Uniqueness Score"
        description="How rare is your name?"
        icon={<Gem className="w-6 h-6" />}
        gradient="from-purple-500 to-violet-500"
        score={data.rarityScore}
        scoreLabel="Rarity"
        delay={0.5}
        interpretation={Interpolator.uniqueness(analysis)}
    >
        <div className="space-y-6">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2">
                        <Fingerprint className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Information Entropy</span>
                    </div>
                    <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                        {data.shannonEntropy} <span className="text-sm font-normal text-slate-400">bits</span>
                    </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${Math.min(100, (data.shannonEntropy || 0) * 20)}%` }}
                    ></div>
                </div>
                 <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic text-right">
                    {data.entropyLabel}
                </p>
            </div>
        </div>
    </ResultCard>
  );
};
