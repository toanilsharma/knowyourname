'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { analyzeName, analyzeCompatibility } from '@/lib/nameAnalysisEngine';
import { speakName, playMelody } from '@/lib/audio';
import { NameAnalysis, CompatibilityAnalysis } from '@/lib/types';
import { HomeFeatures } from '@/components/HomeFeatures';
import { HomeFamousNames } from '@/components/HomeFamousNames';
import { HomeCaseStudy } from '@/components/HomeCaseStudy';
import { HomeFAQ } from '@/components/HomeFAQ';
import { Hero } from '@/components/Hero';
import { SingleAnalysisResults } from '@/components/results/SingleAnalysisResults';
import { CompatibilityResults } from '@/components/results/CompatibilityResults';
import { AnalysisErrorBoundary } from '@/components/AnalysisErrorBoundary';
import { InstallPrompt } from '@/components/InstallPrompt';
import { AnimatePresence, motion } from 'framer-motion';

const EXAMPLE_NAMES = [
    "Zephyr", "Ozymandias", "Calliope", "Xavier", "Serendipity", "Aurora", "Maximus", "Echo", "Lysandra", "Wolfgang"
];

export const Home: React.FC = () => {
    const searchParams = useSearchParams();
    const [mode, setMode] = useState<'single' | 'compatibility'>('single');
    const [inputName, setInputName] = useState('');
    const [inputName2, setInputName2] = useState('');

    const [analysis, setAnalysis] = useState<NameAnalysis | null>(null);
    const [compatibility, setCompatibility] = useState<CompatibilityAnalysis | null>(null);
    const [recentNames, setRecentNames] = useState<string[]>([]);
    const [cachedAnalyses, setCachedAnalyses] = useState<Record<string, NameAnalysis>>({});
    const [welcomeBack, setWelcomeBack] = useState<string | null>(null);

    const [error, setError] = useState('');

    const resultsRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load history + cached analyses on mount
    useEffect(() => {
        const saved = localStorage.getItem('kyn-history');
        if (saved) {
            try {
                setRecentNames(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse history");
            }
        }
        // Load cached analyses
        const cached = localStorage.getItem('kyn-analyses');
        if (cached) {
            try {
                setCachedAnalyses(JSON.parse(cached));
            } catch (e) {
                console.error("Failed to parse cached analyses");
            }
        }
        // Welcome back
        const lastName = localStorage.getItem('kyn-last-name');
        if (lastName) {
            setWelcomeBack(lastName);
            setTimeout(() => setWelcomeBack(null), 5000);
        }
        // Auto-focus on desktop
        if (window.innerWidth > 768) {
            setTimeout(() => inputRef.current?.focus(), 800);
        }
    }, []);

    const addToHistory = (name: string, result?: NameAnalysis) => {
        const sanitized = name.trim();
        const updated = [sanitized, ...recentNames.filter(n => n !== sanitized)].slice(0, 10);
        setRecentNames(updated);
        localStorage.setItem('kyn-history', JSON.stringify(updated));
        localStorage.setItem('kyn-last-name', sanitized);
        // Cache the full analysis result
        if (result) {
            const newCache = { ...cachedAnalyses, [sanitized]: result };
            // Cap at 10 entries to limit localStorage usage
            const keys = Object.keys(newCache);
            if (keys.length > 10) {
                delete newCache[keys[0]];
            }
            setCachedAnalyses(newCache);
            try {
                localStorage.setItem('kyn-analyses', JSON.stringify(newCache));
            } catch (e) {
                console.warn('localStorage full, clearing analysis cache');
                localStorage.removeItem('kyn-analyses');
            }
        }
    };

    // Focus management for results
    useEffect(() => {
        if ((analysis || compatibility) && resultsRef.current) {
            setTimeout(() => resultsRef.current?.focus(), 100);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [analysis, compatibility]);

    const isValidName = (n: string) => {
        // Support Latin, extended Latin, accented, Cyrillic, Devanagari, Arabic, CJK, Korean, and more
        return /^[\p{L}\p{M}\s'-]+$/u.test(n);
    };

    const showError = (msg: string) => {
        setError(msg);
        if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
        errorTimerRef.current = setTimeout(() => setError(''), 4000);
    };

    const runAnalysis = useCallback((name: string) => {
        if (!name.trim()) return;

        if (!isValidName(name)) {
            showError('Please enter letters only. Numbers and special symbols are not supported.');
            return;
        }

        if (name.length < 2 || name.length > 30) {
            showError('Name length must be between 2 and 30 characters.');
            return;
        }

        const result = analyzeName(name);

        if (!result) {
            showError('Could not analyze this name structure. Try a standard name.');
            return;
        }

        setError('');
        addToHistory(name, result);
        setAnalysis(result);
        setCompatibility(null);
    }, [recentNames, cachedAnalyses]);

    // Deep Linking: Auto-run if URL has ?name=X
    useEffect(() => {
        const nameParam = searchParams.get('name');
        if (nameParam) {
            setInputName(nameParam);
            setTimeout(() => runAnalysis(nameParam), 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const runCompatibility = (n1: string, n2: string) => {
        if (!n1.trim() || !n2.trim()) return;

        if (!isValidName(n1) || !isValidName(n2)) {
            showError('Please enter valid letters only.');
            return;
        }

        const result = analyzeCompatibility(n1, n2);
        if (!result) {
            showError('Analysis failed. Please check inputs.');
            return;
        }
        setCompatibility(result);
        setAnalysis(null);
    };

    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'single') {
            runAnalysis(inputName);
        } else {
            runCompatibility(inputName, inputName2);
        }
    };

    const handleRandomExample = () => {
        const randomName = EXAMPLE_NAMES[Math.floor(Math.random() * EXAMPLE_NAMES.length)];
        setInputName(randomName);
        setMode('single');
        setTimeout(() => runAnalysis(randomName), 100);
    };

    const handleHistoryClick = (name: string) => {
        setInputName(name);
        setMode('single');
        setTimeout(() => runAnalysis(name), 100);
    };

    const handleSpeak = () => {
        if (analysis) {
            speakName(analysis.name);
        }
    };

    const handleMelody = () => {
        if (analysis) {
            playMelody(analysis.sanitizedName);
        }
    };

    // Dynamic Background Style based on results
    const bgStyle = analysis ? {
        backgroundImage: `radial-gradient(circle at 50% 0%, ${analysis.synesthesia.primaryColor}15, transparent 70%)`
    } : compatibility ? {
        backgroundImage: `radial-gradient(circle at 50% 0%, ${compatibility.name1.synesthesia.primaryColor}10, transparent 40%), radial-gradient(circle at 50% 100%, ${compatibility.name2.synesthesia.primaryColor}10, transparent 40%)`
    } : {};

    return (
        <div className="min-h-screen transition-colors duration-1000 bg-slate-50 dark:bg-slate-950 relative overflow-x-hidden" style={bgStyle}>


            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Premium Full-Screen Hero Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                    src="/images/premium-hero.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-40 dark:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-slate-50/90 to-slate-50 dark:from-slate-950/70 dark:via-slate-950/90 dark:to-slate-950"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-slate-50/80 dark:from-slate-950/80 dark:to-slate-950/80"></div>
            </div>

            <AnimatePresence mode="wait">
                {!analysis && !compatibility ? (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex flex-col items-center pt-0 px-0"
                    >

                        <div className="w-full text-center mb-0">
                            <Hero
                                onAnalyzeClick={() => {
                                    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    setTimeout(() => inputRef.current?.focus(), 500);
                                }}
                                onHowItWorksClick={() => {
                                    featuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            />

                            <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-80">
                                {[
                                    { icon: '🔬', label: 'Acoustic Physics' },
                                    { icon: '⌨️', label: 'Typing Biomechanics' },
                                    { icon: '📊', label: 'Information Entropy' },
                                    { icon: '🗣️', label: 'IPA Phonology' }
                                ].map(tag => (
                                    <span key={tag.label} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                                        <span>{tag.icon}</span>
                                        <span className="uppercase tracking-wide">{tag.label}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="w-full max-w-lg mx-auto relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-[1.7rem] opacity-30 group-hover:opacity-50 blur-lg transition duration-500"></div>
                                <div className="relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl p-3 rounded-[1.5rem] shadow-2xl border border-white/20 dark:border-slate-700">

                                    <div className="flex justify-center mb-4 pt-2">
                                        <div className="bg-slate-100 dark:bg-slate-800/80 p-1 rounded-lg inline-flex">
                                            <button
                                                onClick={() => setMode('single')}
                                                className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${mode === 'single' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
                                            >
                                                Name Analysis
                                            </button>
                                            <button
                                                onClick={() => setMode('compatibility')}
                                                className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${mode === 'compatibility' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
                                            >
                                                Compatibility
                                            </button>
                                        </div>
                                    </div>

                                    <form onSubmit={handleAnalyze} className="flex flex-col gap-4 px-2 pb-2">
                                        <div className="relative group/input">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover/input:opacity-50 transition duration-500 blur"></div>
                                            <input
                                                ref={inputRef}
                                                id="name-input"
                                                type="text"
                                                value={inputName}
                                                onChange={(e) => setInputName(e.target.value)}
                                                placeholder={mode === 'single' ? "Enter a first name..." : "Name A (e.g. You)"}
                                                aria-label="Name 1"
                                                className="relative w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 px-6 py-6 text-2xl outline-none font-serif rounded-xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner"
                                                autoComplete="off"
                                            />
                                        </div>

                                        {mode === 'compatibility' && (
                                            <div className="relative animate-fade-in-up group/input">
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-200 dark:bg-slate-800 rounded-full p-1.5 text-[10px] font-bold text-slate-500 border-2 border-white dark:border-slate-900">&</div>
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl opacity-0 group-hover/input:opacity-50 transition duration-500 blur"></div>
                                                <input
                                                    type="text"
                                                    value={inputName2}
                                                    onChange={(e) => setInputName2(e.target.value)}
                                                    placeholder="Name B (e.g. Partner)"
                                                    aria-label="Name 2"
                                                    className="relative w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 px-6 py-6 text-2xl outline-none font-serif rounded-xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            aria-label="Analyze"
                                            className="mt-4 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 hover:from-blue-500 hover:via-violet-500 hover:to-purple-500 text-white hover:scale-[1.02] active:scale-[0.98] font-bold text-base tracking-[0.15em] uppercase py-5 rounded-xl shadow-xl shadow-purple-500/20 transition-all flex items-center justify-center gap-3"
                                        >
                                            <span>✨ Reveal My Name's Secrets</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 animate-pulse">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </button>
                                    </form>

                                    {recentNames.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-2 mt-4 px-2">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 self-center mr-1">Recent:</span>
                                            {recentNames.map(name => (
                                                <button
                                                    key={name}
                                                    onClick={() => handleHistoryClick(name)}
                                                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium transition-colors"
                                                >
                                                    {name}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="text-center mt-3">
                                        <button
                                            type="button"
                                            onClick={handleRandomExample}
                                            className="text-xs text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 underline decoration-dotted transition-colors"
                                        >
                                            🎲 Try a Random Example
                                        </button>
                                    </div>
                                </div>
                                {/* Inline Error Toast */}
                                {error && (
                                    <div className="mt-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold text-center py-3 px-4 rounded-xl border border-red-200 dark:border-red-800 animate-fade-in-up flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <span>{error}</span>
                                        <button onClick={() => setError('')} className="ml-2 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors">
                                            ✕
                                        </button>
                                    </div>
                                )}
                                {/* Non-Latin Disclaimer */}
                                <p className="text-[9px] text-slate-400 dark:text-slate-600 text-center mt-3 italic">
                                    Optimized for Latin-script names. Non-Latin names may have limited analysis coverage.
                                </p>
                                {/* Welcome Back Toast */}
                                {welcomeBack && !analysis && !compatibility && (
                                    <div className="mt-3 animate-fade-in-up">
                                        <button
                                            onClick={() => { setInputName(welcomeBack); runAnalysis(welcomeBack); setWelcomeBack(null); }}
                                            className="w-full py-2.5 px-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-700 dark:text-blue-300 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <span>👋</span> Welcome back! Re-analyze <strong>{welcomeBack}</strong>?
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Happy Users Section */}
                        <div className="w-full max-w-4xl mx-auto mb-16 relative">
                            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-full md:w-1/3 flex-shrink-0">
                                        <img
                                            src="/images/happy-users.png"
                                            alt="Happy users discovering their name insights"
                                            className="w-full h-48 object-cover rounded-2xl shadow-lg"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <span key={i} className="text-2xl">⭐</span>
                                            ))}
                                        </div>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">
                                            "I never knew my name had such fascinating properties! The acoustic analysis was mind-blowing."
                                        </p>
                                        <p className="text-sm font-bold text-slate-500">— From our growing community of name enthusiasts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Research methodology based on papers from:</span>
                                <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                    <a href="/research/bouba-kiki" className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ramachandran & Hubbard (2001)</a>
                                    <a href="/research/sound-symbolism" className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Song & Schwarz (2009)</a>
                                    <a href="/research/typing-effort" className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Simner et al. (2005)</a>
                                </div>
                            </div>
                        </div>

                        <div ref={featuresRef}>
                            <HomeFeatures />
                        </div>


                        <HomeFamousNames />

                        <HomeCaseStudy />

                        <HomeFAQ />

                        {/* Email Capture — Gap 34 */}
                        <div className="max-w-2xl mx-auto px-6 py-16">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 shadow-2xl shadow-blue-900/20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="relative z-10 text-center">
                                    <span className="text-5xl mb-4 block">✉️</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                                        Get Weekly Name Insights
                                    </h3>
                                    <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                                        Fascinating name facts, new features, and linguistic curiosities — delivered free. No spam, ever.
                                    </p>
                                    <form
                                        name="newsletter"
                                        method="POST"
                                        data-netlify="true"
                                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const form = e.target as HTMLFormElement;
                                            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
                                            if (email) {
                                                const btn = form.querySelector('button');
                                                if (btn) btn.textContent = '✓ Subscribed!';
                                                form.reset();
                                            }
                                        }}
                                    >
                                        <input type="hidden" name="form-name" value="newsletter" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                            className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-white text-indigo-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
                                        >
                                            Subscribe Free
                                        </button>
                                    </form>
                                    <p className="text-[10px] text-blue-200 mt-4 font-medium">
                                        🔒 We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pb-24">
                            <Link href="/science" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-bold text-sm uppercase tracking-wide">
                                Read the Full Research Papers →
                            </Link>
                        </div>

                    </motion.div>
                ) : compatibility ? (
                    <AnalysisErrorBoundary>
                        <CompatibilityResults
                            key="compatibility"
                            compatibility={compatibility}
                            onReset={() => { setCompatibility(null); }}
                        />
                    </AnalysisErrorBoundary>
                ) : (
                    <AnalysisErrorBoundary>
                        <SingleAnalysisResults
                            key="single"
                            analysis={analysis!}
                            onReset={() => { setAnalysis(null); setInputName(''); }}
                            onSpeak={handleSpeak}
                            onMelody={handleMelody}
                        />
                    </AnalysisErrorBoundary>
                )}
            </AnimatePresence>
            <InstallPrompt />
        </div>
    );
};
