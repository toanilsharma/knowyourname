import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { CompatibilityAnalysis } from '@/lib/types';

const ExplanationBlock: React.FC<{ text: string; linkTo?: string; linkLabel?: string }> = ({ text, linkTo, linkLabel }) => (
    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm leading-relaxed no-print">
        <p>
            <span className="font-bold text-slate-900 dark:text-white mr-1">In Simple Language:</span>
            <span className="text-slate-700 dark:text-slate-300">{text}</span>
        </p>
        {linkTo && (
            <div className="mt-2 text-right">
                <Link href={linkTo} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-end gap-1">
                    {linkLabel || "Learn the Science"} →
                </Link>
            </div>
        )}
    </div>
);

interface CompatibilityResultsProps {
    compatibility: CompatibilityAnalysis;
    onReset: () => void;
}

export const CompatibilityResults: React.FC<CompatibilityResultsProps> = ({
    compatibility,
    onReset
}) => {
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resultsRef.current) {
            setTimeout(() => {
                resultsRef.current?.focus();
                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }, [compatibility]);

    return (
        <div className="animate-fade-in-up outline-none max-w-4xl mx-auto pt-10 px-4" ref={resultsRef} tabIndex={-1}>
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900 dark:text-white">
                    <span style={{ color: compatibility.name1.synesthesia.primaryColor }}>{compatibility.name1.name}</span>
                    <span className="mx-4 text-slate-300 dark:text-slate-600">&</span>
                    <span style={{ color: compatibility.name2.synesthesia.primaryColor }}>{compatibility.name2.name}</span>
                </h2>
                <div className="inline-block px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Phonetic Distance: {compatibility.phoneticSimilarity}%
                    </span>
                </div>
            </div>

            {/* Compatibility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-200 dark:bg-slate-700"></div>
                    <h3 className="text-lg font-bold mb-2">Articulatory Match</h3>
                    <p className="text-2xl font-serif text-slate-800 dark:text-slate-200 mb-2">{compatibility.placeOfArticulationMatch}</p>
                    <ExplanationBlock text="Do your mouths move in the same way? This checks if you both produce sounds in the same part of the mouth (Lips, Teeth, or Throat). Similar mechanics can create a sense of familiarity." />
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-200 dark:bg-slate-700"></div>
                    <h3 className="text-lg font-bold mb-2">Rhythmic Structure</h3>
                    <p className="text-2xl font-serif text-slate-800 dark:text-slate-200 mb-2">{compatibility.rhythmicSync}</p>
                    <ExplanationBlock text="Compares the 'beat' of your names. Isorhythmic names share the same syllable count and stress pattern, creating a poetic 'match'." />
                </div>
            </div>


            <div className="text-center no-print">
                <button
                    onClick={onReset}
                    className="mt-6 text-sm text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4"
                >
                    Start New Analysis
                </button>
            </div>
        </div>
    );
};
