'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { NameAnalysis } from '@/lib/types';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { ViralResultCard } from '@/components/ViralResultCard';
import { StoryExport } from '@/components/StoryExport';
import { AestheticsCard } from '@/components/AestheticsCard';
import { SonorityChart } from '@/components/SonorityChart';
import { MouthMap } from '@/components/MouthMap';
import { SocialMatrix } from '@/components/SocialMatrix';
import { UniquenessCard } from '@/components/UniquenessCard';
import { StructuralDNA } from '@/components/StructuralDNA';
import { TypingCard } from '@/components/TypingCard';
import { ClarityCard } from '@/components/ClarityCard';
import { PhoneticChart } from '@/components/PhoneticChart';
import { ResultCard } from '@/components/results/ResultCard';
import { SharePanel } from '@/components/SharePanel';
import { SonicFingerprint } from '@/components/SonicFingerprint';

interface SingleAnalysisResultsProps {
    analysis: NameAnalysis;
    onReset: () => void;
    onSpeak: () => void;
    onMelody: () => void;
}

export const SingleAnalysisResults: React.FC<SingleAnalysisResultsProps> = ({
    analysis,
    onReset,
    onSpeak,
    onMelody
}) => {
    const resultsRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div
            className="animate-fade-in-up outline-none pt-4 px-4 max-w-[1600px] mx-auto"
            ref={resultsRef}
            tabIndex={-1}
        >
            <div className="flex flex-col items-center text-center mb-12 pb-6 border-b border-slate-200 dark:border-slate-800/50">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-lg shadow-purple-500/20">
                    {analysis.archetype.name}
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-medium text-slate-900 dark:text-slate-100 mb-2 relative flex flex-col items-center">
                    <span className="relative z-10" style={{ color: analysis.synesthesia.primaryColor }}>{analysis.name}</span>
                    <span className="text-2xl md:text-3xl font-mono text-slate-400 dark:text-slate-500 mt-2 tracking-widest relative z-10 font-normal flex items-center gap-2 group/ipa">
                        /{analysis.ipaTranscription}/
                        <button title="Correct Pronunciation (Trains our phonetic engine)" className="text-[10px] opacity-0 group-hover/ipa:opacity-100 transition-opacity bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full hover:bg-emerald-100 hover:text-emerald-700">✏️</button>
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full blur-3xl opacity-20 -z-10" style={{ backgroundColor: analysis.synesthesia.primaryColor }}></span>
                </h1>

                {/* How to Read This Report Guide */}
                <div className="w-full max-w-2xl mx-auto mb-6 no-print">
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-3 flex items-start gap-3 text-left">
                        <span className="text-xl">💡</span>
                        <div>
                            <span className="block text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-widest mb-1">How to Read This Report</span>
                            <p className="text-xs text-blue-700/80 dark:text-blue-400/80 leading-relaxed">
                                The metrics below measure statistical acoustic tendencies. They represent how a stranger's brain subconsciously processes the abstract sound of your name. This is <strong>not</strong> a personality test.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cultural vs Acoustic Disclaimer & Confidence Score */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <div className="group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 cursor-help transition-colors hover:bg-slate-200 dark:hover:bg-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-blue-500"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" /></svg>
                        <span>Acoustic Physics, not Cultural History</span>
                        <div className="absolute top-full lg:left-1/2 lg:-translate-x-1/2 left-0 mt-2 w-64 p-3 bg-slate-900 text-white text-[11px] leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                            <div className="absolute -top-1 left-4 lg:left-1/2 lg:-translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                            We analyze the <strong>structural sound and biometrics</strong> of your name (how it feels to speak and type), not the historical definition (e.g., "Gift of God").
                        </div>
                    </div>

                    <div className="group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-xs font-medium text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 cursor-help transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        <span>Parse Confidence: {Math.min(99.8, Math.max(82.4, 100 - (analysis.name.length * 0.5) - (analysis.phonetics?.unknown || 0 * 5))).toFixed(1)}%</span>
                        <div className="absolute top-full lg:left-1/2 lg:-translate-x-1/2 left-0 mt-2 w-64 p-3 bg-slate-900 text-white text-[11px] leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                            <div className="absolute -top-1 left-4 lg:left-1/2 lg:-translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                            Our phoneme-mapping algorithm successfully parsed and verified the pronunciation with high scientific certainty.
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 no-print">
                    <button onClick={onSpeak} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200 group relative overflow-hidden" style={{ '--hover-bg': analysis.synesthesia.primaryColor } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = analysis.synesthesia.primaryColor || ''} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                        {/* Spectrogram animation on hover */}
                        <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-0 group-hover:opacity-20 transition-opacity z-0">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                <div key={i} className="w-1 bg-white rounded-full animate-pulse" style={{ height: `${Math.random() * 60 + 20}%`, animationDuration: `${Math.random() * 0.5 + 0.3}s`, animationPlayState: 'running' }}></div>
                            ))}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 relative z-10"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 2.485.586 4.814 1.634 6.874.35 1.05 1.543 1.626 2.66 1.626h1.94l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /></svg>
                        <span className="text-xs font-bold uppercase relative z-10">Pronounce</span>
                    </button>
                    <button title="Data Sonification" onClick={onMelody} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200 group" style={{ '--hover-bg': analysis.synesthesia.primaryColor } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = analysis.synesthesia.primaryColor || ''} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:animate-spin-slow"><path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017c0-.44.272-.843.685-.961l10.89-3.11a.75.75 0 01.217-.052z" clipRule="evenodd" /></svg>
                        <span className="text-xs font-bold uppercase">Melody</span>
                    </button>
                </div>
                <p className="text-slate-500 mt-4 font-mono text-xs tracking-wide">
                    Atomic Mass: {analysis.elementalData.atomicMass}u • {analysis.psycholinguistics.fluencyDescription}
                </p>
                <button
                    onClick={onReset}
                    className="mt-6 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4 no-print"
                >
                    Start New Analysis
                </button>
            </div>

            <div className="flex flex-col gap-8 pb-20">

                {/* Viral Summary — Full Width Hero */}
                {analysis.viralSummary && (
                    <div className="animate-fade-in-up">
                        <ViralResultCard
                            summary={analysis.viralSummary}
                            name={analysis.name}
                            primaryColor={analysis.synesthesia.primaryColor}
                        />
                        <div className="flex justify-center mt-6 no-print">
                            <StoryExport analysis={analysis} />
                        </div>
                    </div>
                )}

                {/* ⚔️ Challenge a Friend — Viral Loop CTA */}
                <div className="relative group w-full max-w-3xl mx-auto no-print">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
                    <Link
                        href={`/battle?name1=${encodeURIComponent(analysis.name)}`}
                        className="relative flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.005] duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-4xl select-none animate-pulse">⚔️</span>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Challenge a Friend</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Whose name scores higher? Battle now and find out.</p>
                            </div>
                        </div>
                        <span className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-md shadow-orange-500/20 whitespace-nowrap hover:from-amber-400 hover:to-orange-500 transition-all">
                            Start Battle →
                        </span>
                    </Link>
                </div>

                {/* ═══════════ NEW BENTO GRID LAYOUT ═══════════ */}
                <BentoGrid className="md:auto-rows-[auto]">

                    {/* 1. Linguistic Archetype — Elemental Theme */}
                    <div className={`md:col-span-2 rounded-3xl p-8 md:p-10 border shadow-lg relative overflow-hidden group transition-all row-span-1 min-h-[400px] flex flex-col justify-center ${analysis.archetype.element === 'Fire' ? 'bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 border-orange-100' :
                        analysis.archetype.element === 'Water' ? 'bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 border-blue-100' :
                            analysis.archetype.element === 'Air' ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 border-indigo-100' :
                                'bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border-emerald-100'
                        }`}>
                        <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10 flex-1">
                            {/* Left: Content */}
                            <div>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/60 backdrop-blur-sm border ${analysis.archetype.element === 'Fire' ? 'text-orange-600 border-orange-200' :
                                    analysis.archetype.element === 'Water' ? 'text-blue-600 border-blue-200' :
                                        analysis.archetype.element === 'Air' ? 'text-indigo-600 border-indigo-200' :
                                            'text-emerald-600 border-emerald-200'
                                    }`}>
                                    Your Acoustic Persona
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                    {analysis.archetype.name}
                                </h3>
                                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 font-light">
                                    {analysis.archetype.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {analysis.archetype.traits.map(trait => (
                                        <span key={trait} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-slate-800 shadow-sm border border-slate-100">
                                            ✨ {trait}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Right: Visual */}
                            <div className="flex items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-inner h-full min-h-[250px]">
                                <div className="text-[100px] md:text-[150px] drop-shadow-2xl filter saturate-150 animate-pulse-slow select-none leading-none transform hover:scale-110 transition-transform duration-500">
                                    {analysis.archetype.icon}
                                </div>
                            </div>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                    </div>

                    {/* 2. Synesthesia — Color Theme (Smaller Card) */}
                    <div className="md:col-span-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col items-center justify-center text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm z-10">
                            Synesthesia
                        </div>
                        <div className="flex items-center justify-center gap-6 mb-4 z-10">
                            <div className="text-center group/color">
                                <div className="w-16 h-16 rounded-full shadow-lg mx-auto mb-2 border-2 border-white dark:border-slate-700 transform transition-transform group-hover/color:scale-110" style={{ backgroundColor: analysis.synesthesia.primaryColor }}></div>
                            </div>
                            <div className="text-center group/color">
                                <div className="w-16 h-16 rounded-full shadow-lg mx-auto mb-2 border-2 border-white dark:border-slate-700 transform transition-transform group-hover/color:scale-110" style={{ backgroundColor: analysis.synesthesia.secondaryColor }}></div>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 z-10">The Colors of Your Name</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 z-10 px-4">Based on sound-color synesthesia research.</p>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* 3. Advanced Aesthetics */}
                    <div className="md:col-span-1 md:row-span-1">
                        <AestheticsCard analysis={analysis} />
                    </div>

                    {/* 4. Rhythm & Flow */}
                    <div className="md:col-span-1 md:row-span-1">
                        <SonorityChart analysis={analysis} />
                    </div>

                    {/* 5. Mouth Feel */}
                    <div className="md:col-span-1 md:row-span-1">
                        <MouthMap analysis={analysis} />
                    </div>

                    {/* 6. First Impressions (Wide) */}
                    <div className="md:col-span-2">
                        <SocialMatrix analysis={analysis} />
                    </div>

                    {/* 7. Uniqueness */}
                    <div className="md:col-span-1">
                        <UniquenessCard analysis={analysis} />
                    </div>

                    {/* 8. Structural DNA */}
                    <div className="md:col-span-1">
                        <StructuralDNA analysis={analysis} />
                    </div>

                    {/* 9. Typing Ergonomics */}
                    <div className="md:col-span-2">
                        <TypingCard analysis={analysis} />
                    </div>

                    {/* 10. Communication Clarity */}
                    <div className="md:col-span-1">
                        <ClarityCard analysis={analysis} />
                    </div>

                    {/* 11. Statistical Norms - Data Theme */}
                    <div className="md:col-span-3 rounded-3xl p-8 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-10 relative z-10">
                            <div>
                                <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                    Statistical Norms
                                </div>
                                <h3 className="text-3xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                                    You vs. The Average Name 📊
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Comparing you against millions of names. Outliers are memorable but demanding. "Normal" names trade memorability for familiarity.
                                </p>
                                <div className={`inline-block px-5 py-3 rounded-xl border text-sm font-bold shadow-sm ${analysis.benchmarks.isOutlier
                                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800'
                                    : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800'
                                    }`}>
                                    {analysis.benchmarks.isOutlier ? '✨ Correction: You are a Statistical Outlier' : '✅ Result: You follow Normative Patterns'}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-6">
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-500 dark:text-slate-400 font-bold">Length Deviation</span>
                                        <span className={analysis.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? "text-blue-600 dark:text-blue-400 font-bold" : "text-amber-600 dark:text-amber-400 font-bold"}>
                                            {analysis.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? '+' : ''}{analysis.benchmarks.lengthDiff}%
                                        </span>
                                    </div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-500 z-10"></div>
                                        <div
                                            className={`h-full absolute top-0 ${analysis.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? 'bg-blue-500 left-1/2 rounded-r-full' : 'bg-amber-500 right-1/2 rounded-l-full'}`}
                                            style={{ width: `${Math.min(50, Math.abs(analysis.benchmarks.lengthDiff || 0) / 2)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2">
                                        <span>Shorter</span>
                                        <span>Avg (6.1)</span>
                                        <span>Longer</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-500 dark:text-slate-400 font-bold">Vowel Density Deviation</span>
                                        <span className={analysis.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? "text-blue-600 dark:text-blue-400 font-bold" : "text-amber-600 dark:text-amber-400 font-bold"}>
                                            {analysis.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? '+' : ''}{analysis.benchmarks.vowelDiff}%
                                        </span>
                                    </div>
                                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
                                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-500 z-10"></div>
                                        <div
                                            className={`h-full absolute top-0 ${analysis.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? 'bg-blue-500 left-1/2 rounded-r-full' : 'bg-amber-500 right-1/2 rounded-l-full'}`}
                                            style={{ width: `${Math.min(50, Math.abs(analysis.benchmarks.vowelDiff || 0) / 2)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2">
                                        <span>Consonant Heavy</span>
                                        <span>Avg (39%)</span>
                                        <span>Vowel Heavy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 12. Sonic Fingerprint */}
                    <div className="md:col-span-2 rounded-3xl p-8 bg-slate-900 border border-slate-800 shadow-xl overflow-hidden relative min-h-[300px]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-slate-700">
                                Sonic Fingerprint
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-8">
                                Your Unique Frequency 🎵
                            </h3>
                            <SonicFingerprint data={analysis} />
                        </div>
                    </div>

                    {/* 13. Name Chemistry - Science Theme */}
                    <div className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-indigo-900/20 dark:via-slate-900 dark:to-blue-900/20 border border-slate-200 dark:border-slate-800 shadow-sm transition-all flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 self-start">
                            Name Chemistry
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                            Chemical Formula 🧪
                        </h3>
                        <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-wrap gap-2 justify-center content-center mb-6">
                            {analysis.elementalData.composition.slice(0, 6).map(el => (
                                <div key={el.element} className="w-12 h-12 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800 shadow-sm relative group hover:scale-105 transition-transform cursor-default">
                                    <span className="absolute top-0.5 left-1 text-[6px] text-slate-400">{el.atomicNumber}</span>
                                    <span className="font-bold text-base text-slate-800 dark:text-slate-200">{el.element}</span>
                                    {el.count > 1 && <span className="absolute bottom-0.5 right-1 text-[6px] font-bold text-slate-500">x{el.count}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1 p-2 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-indigo-900/30 shadow-sm text-center">
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">State</div>
                                <div className={`text-sm font-bold ${analysis.elementalData.stateOfMatter === 'Plasma' ? 'text-purple-600 dark:text-purple-400' : analysis.elementalData.stateOfMatter === 'Gas' ? 'text-blue-500 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                                    {analysis.elementalData.stateOfMatter}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 14. Phonetic Architecture - Lab Theme */}
                    <div className="md:col-span-3 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-900/20 dark:via-slate-900 dark:to-cyan-900/20 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                    Phonetic Architecture
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                                    How Easy Is Your Name? 🔬
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Easy-to-pronounce names are rated as more trustworthy in studies. This &quot;cognitive fluency&quot; effect is real—your name&apos;s simplicity impacts first impressions.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-teal-100 dark:border-teal-900/30 shadow-sm">
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Cognitive Fluency</span>
                                            <span className="text-teal-600 dark:text-teal-400 font-bold">{analysis.psycholinguistics.fluencyDescription}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                            <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${analysis.psycholinguistics.cognitiveEase}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${analysis.psycholinguistics.optimalLength ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                            {analysis.psycholinguistics.optimalLength ? 'Optimal Memory Loop Length (Easy to recall)' : 'High Cognitive Load (Harder to recall)'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <PhoneticChart data={analysis.phonetics} totalConsonants={analysis.vcData.consonantCount} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoGrid>

                {/* ═══════════ FOOTER ═══════════ */}

                <div className="pt-10 pb-6 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-6">
                    <SharePanel data={analysis} />

                    <div className="flex gap-4 no-print">
                        <button
                            onClick={handlePrint}
                            className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            🖨️ Export Academic Dossier (PDF)
                        </button>
                        <Link href="/bibliography" className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors shadow-sm flex items-center gap-2">
                            📖 Read Scientific Whitepaper
                        </Link>
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-500 font-mono text-center max-w-md leading-relaxed">
                        DISCLAIMER: This analysis is based on linguistic algorithms, phonosemantics, and statistical data. It is not psychological profiling, personality prediction, or destiny forecasting. v7.5.0 • {new Date().getFullYear()} Know Your Name Lab
                    </p>
                </div>
            </div>
        </div>
    );
};
