import React from 'react';
import { ResultCard } from './results/ResultCard';
import { KeyboardHeatmap } from '@/components/KeyboardHeatmap';
import { Keyboard } from 'lucide-react';
import { NameAnalysis } from '@/lib/types';
import { Interpolator } from '@/lib/interpretations';

interface Props {
    analysis: NameAnalysis;
}

export const TypingCard: React.FC<Props> = ({ analysis }) => {
    const data = analysis.keyboard;
    const name = analysis.sanitizedName;
  return (
    <ResultCard
        title="Typing Ergonomics"
        description="How your name feels to type."
        icon={<Keyboard className="w-6 h-6" />}
        gradient="from-sky-500 to-blue-600"
        delay={0.7}
        interpretation={Interpolator.ergonomics(analysis)}
    >
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
             <KeyboardHeatmap data={data} name={name} />
        </div>
    </ResultCard>
  );
};
