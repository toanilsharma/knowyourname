'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { analyzeName } from '@/lib/nameAnalysisEngine';
import { NameAnalysis } from '@/lib/types';

// MetricRow component defined at module level to avoid re-creation during render
const MetricRow: React.FC<{ 
    label: string; 
    val1: number; 
    val2: number; 
    unit?: string;
    higherIsBetter?: boolean;
}> = ({ label, val1, val2, unit = '%', higherIsBetter = true }) => {
    const winner1 = higherIsBetter ? val1 > val2 : val1 < val2;
    const winner2 = higherIsBetter ? val2 > val1 : val2 < val1;
    
    return (
        <div className="grid grid-cols-3 gap-4 py-3 border-b border-slate-200 dark:border-slate-700/50">
            <div className={`text-right font-bold ${winner1 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
                {val1}{unit}
                {winner1 && <span className="ml-1">✓</span>}
            </div>
            <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
                {label}
            </div>
            <div className={`text-left font-bold ${winner2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
                {winner2 && <span className="mr-1">✓</span>}
                {val2}{unit}
            </div>
        </div>
    );
};

export const BattleClient: React.FC = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [analysis1, setAnalysis1] = useState<NameAnalysis | null>(null);
    const [analysis2, setAnalysis2] = useState<NameAnalysis | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleBattle = () => {
        if (!name1.trim() || !name2.trim()) return;
        
        setIsAnalyzing(true);
        
        // Simulate loading for effect
        setTimeout(() => {
            const result1 = analyzeName(name1.trim());
            const result2 = analyzeName(name2.trim());
            setAnalysis1(result1);
            setAnalysis2(result2);
            setIsAnalyzing(false);
        }, 800);
    };

    const calculateScore = (analysis: NameAnalysis): number => {
        // Weighted scoring system
        let score = 0;
        score += analysis.soundSymbolism.boubaScore * 0.15; // Bouba/Soft score
        score += analysis.socialImpression.warmthScore * 0.2; // Warmth
        score += (analysis.radioAnalysis?.clarityScore || 50) * 0.15; // Radio clarity
        score += (100 - analysis.keyboard.alternationScore) * 0.1; // Typing ease
        score += analysis.acousticProfile.maxSignal * 10 * 0.1; // Acoustic presence
        score += analysis.psycholinguistics.familiarityScore * 0.15; // Familiarity
        score += analysis.socialImpression.competenceScore * 0.15; // Competence
        return Math.round(score);
    };

    const getWinner = (): 'name1' | 'name2' | 'tie' | null => {
        if (!analysis1 || !analysis2) return null;
        
        const score1 = calculateScore(analysis1);
        const score2 = calculateScore(analysis2);
        
        if (Math.abs(score1 - score2) < 3) return 'tie';
        return score1 > score2 ? 'name1' : 'name2';
    };

    const winner = getWinner();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative">
            {/* Epic Battle Background */}
            <div className="absolute top-0 left-0 right-0 h-[500px] z-0 overflow-hidden">
                <img 
                    src="/images/battle-versus.png" 
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-30 dark:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:via-slate-950/80 dark:to-slate-950"></div>
            </div>

            {/* Header */}
            <div className="pt-32 pb-16 px-4 text-center relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8">
                    ← Back to Analyzer
                </Link>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                    Name <span className="text-red-500">Battle</span> ⚔️
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Put two names head-to-head in a scientific showdown. Compare acoustics, typing ergonomics, and psychological impact.
                </p>
            </div>

            {/* Input Section */}
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="relative">
                        <input
                            type="text"
                            value={name1}
                            onChange={(e) => setName1(e.target.value)}
                            placeholder="First Name"
                            className="w-full px-6 py-4 text-xl font-bold text-center bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                            onKeyDown={(e) => e.key === 'Enter' && handleBattle()}
                        />
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                            CHALLENGER 1
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <button
                            onClick={handleBattle}
                            disabled={isAnalyzing || !name1.trim() || !name2.trim()}
                            className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-red-500/30 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isAnalyzing ? '⚔️ Fighting...' : '⚔️ BATTLE!'}
                        </button>
                    </div>
                    
                    <div className="relative">
                        <input
                            type="text"
                            value={name2}
                            onChange={(e) => setName2(e.target.value)}
                            placeholder="Second Name"
                            className="w-full px-6 py-4 text-xl font-bold text-center bg-white dark:bg-slate-800 border-2 border-purple-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                            onKeyDown={(e) => e.key === 'Enter' && handleBattle()}
                        />
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                            CHALLENGER 2
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            {analysis1 && analysis2 && (
                <div className="max-w-5xl mx-auto px-6 pb-24 animate-fade-in-up">
                    {/* Winner Banner */}
                    {winner && (
                        <div className="mb-12 text-center">
                            {winner === 'tie' ? (
                                <div className="inline-block px-8 py-4 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-2xl">
                                    <span className="text-4xl mb-2 block">🤝</span>
                                    <span className="text-xl font-bold">It's a TIE!</span>
                                </div>
                            ) : (
                                <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-2xl shadow-lg shadow-amber-500/30">
                                    <span className="text-4xl mb-2 block">👑</span>
                                    <span className="text-xl font-bold">
                                        {winner === 'name1' ? analysis1.name : analysis2.name} WINS!
                                    </span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* NAME 1 Card */}
                        <div className={`relative p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border-2 ${winner === 'name1' ? 'border-amber-400 ring-4 ring-amber-400/20' : 'border-blue-500'}`}>
                            {winner === 'name1' && (
                                <div className="absolute -top-4 -right-4 text-4xl">👑</div>
                            )}
                            <div className="text-6xl mb-4 text-center">{analysis1.archetype.icon}</div>
                            <h2 className="text-3xl font-serif font-bold text-center text-slate-900 dark:text-white mb-2">{analysis1.name}</h2>
                            <p className="text-center text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">{analysis1.archetype.name}</p>
                            <div className="text-center">
                                <span className="text-5xl font-bold text-slate-900 dark:text-white">{calculateScore(analysis1)}</span>
                                <span className="text-slate-500 ml-2">points</span>
                            </div>
                        </div>

                        {/* NAME 2 Card */}
                        <div className={`relative p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border-2 ${winner === 'name2' ? 'border-amber-400 ring-4 ring-amber-400/20' : 'border-purple-500'}`}>
                            {winner === 'name2' && (
                                <div className="absolute -top-4 -right-4 text-4xl">👑</div>
                            )}
                            <div className="text-6xl mb-4 text-center">{analysis2.archetype.icon}</div>
                            <h2 className="text-3xl font-serif font-bold text-center text-slate-900 dark:text-white mb-2">{analysis2.name}</h2>
                            <p className="text-center text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">{analysis2.archetype.name}</p>
                            <div className="text-center">
                                <span className="text-5xl font-bold text-slate-900 dark:text-white">{calculateScore(analysis2)}</span>
                                <span className="text-slate-500 ml-2">points</span>
                            </div>
                        </div>
                    </div>

                    {/* Metric-by-Metric Comparison */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">
                        <h3 className="text-center font-bold text-slate-900 dark:text-white text-lg mb-6">Metric Breakdown</h3>
                        <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-slate-300 dark:border-slate-600 mb-2">
                            <div className="text-right font-bold text-blue-600">{analysis1.name}</div>
                            <div className="text-center text-xs text-slate-500">METRIC</div>
                            <div className="text-left font-bold text-purple-600">{analysis2.name}</div>
                        </div>
                        
                        <MetricRow label="Softness (Bouba)" val1={analysis1.soundSymbolism.boubaScore} val2={analysis2.soundSymbolism.boubaScore} />
                        <MetricRow label="Warmth" val1={analysis1.socialImpression.warmthScore} val2={analysis2.socialImpression.warmthScore} />
                        <MetricRow label="Competence" val1={analysis1.socialImpression.competenceScore} val2={analysis2.socialImpression.competenceScore} />
                        <MetricRow label="Radio Clarity" val1={analysis1.radioAnalysis?.clarityScore || 50} val2={analysis2.radioAnalysis?.clarityScore || 50} />
                        <MetricRow label="Familiarity" val1={analysis1.psycholinguistics.familiarityScore} val2={analysis2.psycholinguistics.familiarityScore} />
                        <MetricRow label="Hand Alternation" val1={analysis1.keyboard.alternationScore} val2={analysis2.keyboard.alternationScore} />
                        <MetricRow label="Syllables" val1={analysis1.prosody.syllableEstimate} val2={analysis2.prosody.syllableEstimate} unit="" higherIsBetter={false} />
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 mb-4">Share your battle results!</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`⚔️ Name Battle: ${analysis1.name} vs ${analysis2.name}\n\n${winner === 'tie' ? "It's a TIE!" : `👑 ${winner === 'name1' ? analysis1.name : analysis2.name} WINS!`}\n\nTest your name at KnowYourName.co.in/battle`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg hover:scale-105 transition-transform"
                            >
                                Share on X
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(`⚔️ Name Battle: ${analysis1.name} vs ${analysis2.name}\n\n${winner === 'tie' ? "It's a TIE!" : `👑 ${winner === 'name1' ? analysis1.name : analysis2.name} WINS!`}\n\nTest your name: knowyourname.co.in/battle`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg hover:scale-105 transition-transform"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Suggestions */}
            {!analysis1 && (
                <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Try these popular matchups:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            ['Elon', 'Mark'],
                            ['Taylor', 'Beyonce'],
                            ['Tesla', 'Ford'],
                            ['Emma', 'Olivia'],
                            ['James', 'Michael'],
                        ].map(([n1, n2]) => (
                            <button
                                key={n1 + n2}
                                onClick={() => { setName1(n1); setName2(n2); }}
                                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {n1} vs {n2}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
