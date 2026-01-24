import React, { useState, useRef, useEffect } from 'react';
import { analyzeName, analyzeCompatibility } from '../logic/nameAnalysisEngine';
import { speakName, playMelody } from '../logic/audio';
import { NameAnalysis, CompatibilityAnalysis } from '../types';
import { AnalysisCard, MetricRow } from '../components/AnalysisCard';
import { PhoneticChart } from '../components/PhoneticChart';
import { SharePanel } from '../components/SharePanel';
import { SonicFingerprint } from '../components/SonicFingerprint';
import { KeyboardHeatmap } from '../components/KeyboardHeatmap';
import { SonorityChart } from '../components/SonorityChart';
import { MouthMap } from '../components/MouthMap';
import { SocialMatrix } from '../components/SocialMatrix';
import { Link, useSearchParams } from 'react-router-dom';
import { PsychometricCard } from '../components/PsychometricCard';
import { AestheticsCard } from '../components/AestheticsCard';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';
import { HomeFeatures } from '../components/HomeFeatures';
import { HomeFamousNames } from '../components/HomeFamousNames';
import { HomeCaseStudy } from '../components/HomeCaseStudy';
import { HomeFAQ } from '../components/HomeFAQ';
import { FactGenerator } from '../components/FactGenerator';
import { ViralResultCard } from '../components/ViralResultCard';

const ExplanationBlock: React.FC<{ text: string; linkTo?: string; linkLabel?: string }> = ({ text, linkTo, linkLabel }) => (
    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm leading-relaxed no-print">
        <p>
            <span className="font-bold text-slate-900 dark:text-white mr-1">In Simple Language:</span>
            <span className="text-slate-700 dark:text-slate-300">{text}</span>
        </p>
        {linkTo && (
            <div className="mt-2 text-right">
                <Link to={linkTo} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-end gap-1">
                    {linkLabel || "Learn the Science"} →
                </Link>
            </div>
        )}
    </div>
);

const EXAMPLE_NAMES = [
    "Zephyr", "Ozymandias", "Calliope", "Xavier", "Serendipity", "Aurora", "Maximus", "Echo", "Lysandra", "Wolfgang"
];

export const Home: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mode, setMode] = useState<'single' | 'compatibility'>('single');
    const [inputName, setInputName] = useState('');
    const [inputName2, setInputName2] = useState('');

    const [analysis, setAnalysis] = useState<NameAnalysis | null>(null);
    const [compatibility, setCompatibility] = useState<CompatibilityAnalysis | null>(null);
    const [recentNames, setRecentNames] = useState<string[]>([]);

    const [error, setError] = useState('');

    const resultsRef = useRef<HTMLDivElement>(null);

    // Load history on mount
    useEffect(() => {
        const saved = localStorage.getItem('kyn-history');
        if (saved) {
            try {
                setRecentNames(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse history");
            }
        }
    }, []);

    // Deep Linking: Auto-run if URL has ?name=X
    useEffect(() => {
        const nameParam = searchParams.get('name');
        if (nameParam) {
            setInputName(nameParam);
            // Small timeout to allow UI to settle before running heavy analysis
            setTimeout(() => runAnalysis(nameParam), 500);
        }
    }, [searchParams]);

    const addToHistory = (name: string) => {
        const sanitized = name.trim();
        const updated = [sanitized, ...recentNames.filter(n => n !== sanitized)].slice(0, 5);
        setRecentNames(updated);
        localStorage.setItem('kyn-history', JSON.stringify(updated));
    };

    // Focus management for results
    useEffect(() => {
        if ((analysis || compatibility) && resultsRef.current) {
            setTimeout(() => resultsRef.current?.focus(), 100);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [analysis, compatibility]);

    // Validation: Allow letters (including accents), spaces, hyphens, and apostrophes.
    const isValidName = (n: string) => {
        return /^[a-zA-Z\u00C0-\u00FF\s'-]+$/.test(n);
    };

    const runAnalysis = (name: string) => {
        if (!name.trim()) return;

        if (!isValidName(name)) {
            setError('Please enter valid letters only. No numbers or special symbols.');
            return;
        }

        if (name.length < 2 || name.length > 30) {
            setError('Name length must be between 2 and 30 characters.');
            return;
        }

        const result = analyzeName(name);

        if (!result) {
            setError('Could not analyze this name structure. Try a standard name.');
            return;
        }

        setError('');
        addToHistory(name);
        setAnalysis(result);
        setCompatibility(null);
    };

    const runCompatibility = (n1: string, n2: string) => {
        if (!n1.trim() || !n2.trim()) return;

        if (!isValidName(n1) || !isValidName(n2)) {
            setError('Please enter valid letters only.');
            return;
        }

        const result = analyzeCompatibility(n1, n2);
        if (!result) {
            setError('Analysis failed. Please check inputs.');
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

    const handlePrint = () => {
        window.print();
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

    // Scroll to section helper
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-1000 bg-slate-50 dark:bg-slate-950 relative overflow-x-hidden" style={bgStyle}>
            <SEO
                title="Scientific Name Analysis & Phonosemantics"
                description="Analyze the hidden linguistic DNA of your name. Calculate phonotactics, keyboard ergonomics, and acoustic sonority profiles instantly using IPA standards."
            />

            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {!analysis && !compatibility ? (
                <div className="relative z-10 flex flex-col items-center animate-fade-in-up pt-10 md:pt-20 px-4">

                    <div className="w-full max-w-5xl mx-auto text-center mb-16">
                        <FactGenerator />

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mt-6 bg-slate-900/5 dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Linguistic Analysis Engine v7.5
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-slate-900 dark:text-white tracking-tight leading-[1] mb-8 relative z-20">
                            Reveal the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-500 animate-gradient-x">hidden architecture</span><br className="hidden md:block" />
                            of your name.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-12 relative z-20">
                            Measure the <strong>Phonetics</strong>, <strong>Keyboard Ergonomics</strong>, and <strong>Acoustic Psychology</strong> of your personal identity. No horoscopes. Just data.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-80">
                            {['Acoustic Physics', 'Typing Biomechanics', 'Information Entropy', 'IPA Phonology'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-xs font-mono text-slate-500 uppercase tracking-wide">
                                    {tag}
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
                                        className="mt-4 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02] active:scale-[0.98] font-bold text-base tracking-[0.15em] uppercase py-5 rounded-xl shadow-xl shadow-slate-900/10 dark:shadow-white/5 transition-all flex items-center justify-center gap-3"
                                    >
                                        <span>Initialize Analysis</span>
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
                            {error && <div className="absolute top-full left-0 right-0 mt-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold text-center py-2 rounded-lg border border-red-200 dark:border-red-800 animate-fade-in-up">{error}</div>}
                        </div>
                    </div>

                    <div className="w-full border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Research methodology based on papers from:</span>
                            <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300">Oxford Linguistics</span>
                                <span className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300">MIT Brain & CogSci</span>
                                <span className="font-serif font-bold text-lg text-slate-700 dark:text-slate-300">UCSD Psychology</span>
                            </div>
                        </div>
                    </div>

                    <HomeFeatures />

                    <AdUnit slotId="home-mid" label="Sponsored" />

                    <HomeFamousNames />

                    <HomeCaseStudy />

                    <HomeFAQ />

                    <div className="text-center pb-24">
                        <Link to="/science" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-bold text-sm uppercase tracking-wide">
                            Read the Full Research Papers →
                        </Link>
                    </div>



                    {/* ... Rest of Marketing Content ... */}
                    {/* Truncated for brevity, assuming standard content blocks remain same as before */}

                </div>
            ) : compatibility ? (
                // --- COMPATIBILITY RESULTS ---
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

                    <AdUnit slotId="compatibility-results" />

                    <div className="text-center no-print">
                        <button
                            onClick={() => { setCompatibility(null); }}
                            className="mt-6 text-sm text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4"
                        >
                            Start New Analysis
                        </button>
                    </div>
                </div>
            ) : (
                // --- SINGLE ANALYSIS RESULTS ---
                <div
                    className="animate-fade-in-up outline-none pt-4 px-4"
                    ref={resultsRef}
                    tabIndex={-1}
                >
                    {/* Sticky Quick Nav for Analysis */}
                    <div className="sticky top-20 z-40 flex justify-center mb-8 no-print pointer-events-none">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 pointer-events-auto flex gap-1">
                            <button onClick={() => scrollToSection('section-acoustics')} className="px-3 py-1 text-[10px] uppercase font-bold text-slate-500 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">Acoustics</button>
                            <button onClick={() => scrollToSection('section-ergonomics')} className="px-3 py-1 text-[10px] uppercase font-bold text-slate-500 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">Ergonomics</button>
                            <button onClick={() => scrollToSection('section-psychology')} className="px-3 py-1 text-[10px] uppercase font-bold text-slate-500 hover:text-purple-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">Psychology</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-lg shadow-purple-500/20">
                            {analysis?.archetype.name}
                        </div>

                        <h2 className="text-6xl md:text-8xl font-serif font-medium text-slate-900 dark:text-slate-100 mb-6 relative">
                            <span className="relative z-10" style={{ color: analysis?.synesthesia.primaryColor }}>{analysis?.name}</span>
                            <span className="absolute top-0 left-0 w-full h-full blur-3xl opacity-20 -z-10" style={{ backgroundColor: analysis?.synesthesia.primaryColor }}></span>
                        </h2>

                        <div className="flex items-center gap-3 no-print">
                            <button onClick={handleSpeak} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200" style={{ '--hover-bg': analysis?.synesthesia.primaryColor } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = analysis?.synesthesia.primaryColor || ''} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 2.485.586 4.814 1.634 6.874.35 1.05 1.543 1.626 2.625 1.626h1.94l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /></svg>
                                <span className="text-xs font-bold uppercase">Pronounce</span>
                            </button>
                            <button title="Data Sonification" onClick={handleMelody} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200" style={{ '--hover-bg': analysis?.synesthesia.primaryColor } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = analysis?.synesthesia.primaryColor || ''} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017c0-.44.272-.843.685-.961l10.89-3.11a.75.75 0 01.217-.052z" clipRule="evenodd" /></svg>
                                <span className="text-xs font-bold uppercase">Melody</span>
                            </button>
                        </div>
                        <p className="text-slate-500 mt-4 font-mono text-xs tracking-wide">
                            Atomic Mass: {analysis?.elementalData.atomicMass}u • {analysis?.psycholinguistics.fluencyDescription}
                        </p>
                        <button
                            onClick={() => { setAnalysis(null); setInputName(''); }}
                            className="mt-6 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4 no-print"
                        >
                            Start New Analysis
                        </button>
                    </div>

                    <div id="analysis-container" className="p-8 -m-8 rounded-3xl bg-slate-950/0">

                        {/* NEW: Viral Result Card with Big Beautiful Name */}
                        {analysis?.viralSummary && (
                            <ViralResultCard
                                summary={analysis.viralSummary}
                                name={analysis.name}
                                primaryColor={analysis.synesthesia.primaryColor}
                            />
                        )}

                        {/* Archetype */}
                        <div className="mb-8">
                            <AnalysisCard
                                title="Linguistic Archetype"
                                icon={<span>{analysis?.archetype.icon}</span>}
                                info="A classification based on Sound Symbolism (Bouba/Kiki) and phonetic density. Categorizes names into 4 acoustic personas."
                                variant="elemental"
                                gradient={analysis?.archetype.element === 'Fire' ? 'from-amber-600 to-red-600' : analysis?.archetype.element === 'Water' ? 'from-blue-600 to-cyan-600' : analysis?.archetype.element === 'Air' ? 'from-indigo-600 to-purple-600' : 'from-emerald-600 to-teal-600'}
                                method="Phonosemantic Classification"
                                confidence="High"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="text-center md:text-left flex-1">
                                        <h3 className="text-3xl font-serif font-bold mb-2">{analysis?.archetype.name}</h3>
                                        <p className="opacity-90 leading-relaxed mb-4">{analysis?.archetype.description}</p>
                                        <div className="flex gap-2 justify-center md:justify-start">
                                            {analysis?.archetype.traits.map(trait => (
                                                <span key={trait} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {trait}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-8xl opacity-30 select-none">
                                        {analysis?.archetype.icon}
                                    </div>
                                </div>
                            </AnalysisCard>
                        </div>

                        {/* NEW: Advanced Aesthetics (Synesthesia, Rhythm, Travel Score) */}
                        <div className="mb-8">
                            {analysis && <AestheticsCard analysis={analysis} />}
                        </div>

                        {/* SECTION 1: ACOUSTICS */}
                        <div id="section-acoustics" className="scroll-mt-32">
                            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="h-full">
                                    <AnalysisCard
                                        title="Rhythm & Flow"
                                        icon={<span>🌊</span>}
                                        info="Based on the Sonority Sequencing Principle (Clements, 1990). The 'loudness' curve of a syllable determines its rhythmic impulse."
                                        className="h-full"
                                        method="Linguistic Rule-Based"
                                        confidence="High"
                                    >
                                        <div className="flex flex-col h-full">
                                            <div className="flex-1">
                                                {analysis && <SonorityChart data={analysis.sonorityProfile} />}
                                            </div>
                                            <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                                <div>
                                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Stress Pattern</p>
                                                    <p className="font-serif text-lg text-slate-800 dark:text-slate-200">{analysis?.prosody.stressPattern}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Rhythm Type</p>
                                                    <p className="font-serif text-lg text-slate-800 dark:text-slate-200">{analysis?.prosody.rhythmType}</p>
                                                </div>
                                            </div>
                                            <ExplanationBlock
                                                text="Imagine your name as a song that plays every time someone says it. The vowels are your sustained notes—they ring out and carry across a room. The consonants are your rhythm section—quick taps that give your name its beat. Your particular pattern creates a sonic signature that people recognize instantly, even in a crowd. It's why you sometimes 'hear' your name when no one said it—your brain is always listening for this exact melody."
                                                linkTo="/science"
                                                linkLabel="Explore the Science"
                                            />
                                        </div>
                                    </AnalysisCard>
                                </div>

                                <div className="h-full">
                                    <AnalysisCard
                                        title="Mouth Feel"
                                        icon={<span>👅</span>}
                                        info="Articulatory Biomechanics. Maps the physical movement of the tongue inside the oral cavity (Front vs. Back, Open vs. Closed)."
                                        className="h-full"
                                        method="Articulatory Phonetics"
                                        confidence="High"
                                    >
                                        {analysis && <MouthMap data={analysis.mouthKinetics} />}
                                        <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                                            Visualizes the "choreography" of the name. Does it move forward (projective) or backward (ingestive)?
                                        </div>
                                        <ExplanationBlock text="Speaking your name is a physical journey through your mouth. Close your eyes and say it slowly—feel how your tongue dances from one position to another, how your lips shape and release each sound. This dance is unique to you. Names that push outward feel naturally confident and projecting; names that pull inward feel intimate and personal. Neither is better—they're just different ways of entering the world." />
                                    </AnalysisCard>
                                </div>
                            </div>
                        </div>

                        <AdUnit slotId="analysis-middle" />

                        {/* SECTION 2: PSYCHOLOGY */}
                        <div id="section-psychology" className="scroll-mt-32">
                            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Social Impression Matrix */}
                                <AnalysisCard
                                    title="First Impressions"
                                    icon={<span>👥</span>}
                                    info="Based on the Stereotype Content Model (Fiske, Cuddy, Glick, & Xu, 2002). Maps names onto the universal dimensions of Warmth and Competence."
                                    className="h-full"
                                    method="Sociolinguistic Mapping"
                                    confidence="Medium"
                                >
                                    {analysis && <SocialMatrix data={analysis.socialImpression} />}
                                    <ExplanationBlock
                                        text="Here's something fascinating: within 7 seconds of hearing your name, a stranger has already formed impressions about your personality. It happens unconsciously—soft, flowing sounds (like M, L, N) trigger feelings of warmth and approachability, while sharp, decisive sounds (like K, T, P) suggest competence and authority. Your name lands somewhere on this invisible map, shaping first impressions before you even shake hands."
                                        linkTo="/science#implicit-egotism"
                                        linkLabel="See the Research"
                                    />
                                </AnalysisCard>

                                {/* Information Entropy */}
                                <AnalysisCard
                                    title="Uniqueness Score"
                                    icon={<span>💾</span>}
                                    info="Claude Shannon's Entropy. Measures the 'surprise' or 'uniqueness' of the name's letter distribution against standard English frequencies."
                                    className="h-full"
                                    method="Shannon Entropy (bits)"
                                    confidence="High"
                                >
                                    <div className="flex flex-col justify-between h-full space-y-6">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-slate-500 uppercase tracking-widest text-xs">Information Entropy</span>
                                                <span className="text-2xl font-mono font-bold text-slate-800 dark:text-white">{analysis?.informationDynamics.shannonEntropy} <span className="text-sm font-normal text-slate-500">bits</span></span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-500" style={{ width: `${Math.min(100, (analysis?.informationDynamics.shannonEntropy || 0) * 20)}%` }}></div>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2">{analysis?.informationDynamics.entropyLabel}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded border border-slate-200 dark:border-slate-700">
                                                <div className="text-[10px] uppercase text-slate-500 mb-1">Rarity Score</div>
                                                <div className="text-xl font-bold">{analysis?.informationDynamics.rarityScore}/100</div>
                                            </div>
                                            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded border border-slate-200 dark:border-slate-700">
                                                <div className="text-[10px] uppercase text-slate-500 mb-1">Rarest Component</div>
                                                <div className="text-xl font-bold font-mono">'{analysis?.informationDynamics.rarestChar}'</div>
                                            </div>
                                        </div>

                                        <ExplanationBlock
                                            text="Think of your name as a password—some are predictable ('ABC123') and some are complex. High entropy means your name contains genuine surprise, making it memorable precisely because it doesn't follow the usual patterns. Low entropy means your name flows with familiar sounds, making it easy for others to learn and spell. Neither is better—memorable names stick because they're unusual; familiar names stick because they feel trusted."
                                            linkTo="/encyclopedia#zipfs-law"
                                            linkLabel="Explore the Math"
                                        />
                                    </div>
                                </AnalysisCard>
                            </div>
                        </div>

                        {/* SECTION 3: ERGONOMICS & STRUCTURE */}
                        <div id="section-ergonomics" className="scroll-mt-32">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AnalysisCard
                                    title="Structural Metrics"
                                    info="The hidden mathematics. From alphabetical weight to vowel density, these numbers define the structural DNA of your name."
                                    method="Deterministic Calculation"
                                    confidence="High"
                                >
                                    <MetricRow label="Alphabetical Weight" value={analysis?.metrics.alphaWeight || 0} highlight tooltip="Implicit ordering effects: Names starting with A-D often appear first in social lists, creating a subtle 'primacy effect' advantage." />
                                    <MetricRow label="Unique Characters" value={analysis?.metrics.uniqueChars || 0} tooltip="Information Entropy: Higher unique counts require more cognitive energy to decode initially." />
                                    <MetricRow label="Vowel Density" value={`${analysis?.vcData.vowelPercentage.toFixed(1)}%`} subtext={analysis?.vcData.densityLabel} tooltip="Carrying Power: Vowels carry the acoustic energy (volume) of a name, while consonants carry the information (clarity)." />
                                    <MetricRow label="Linguistic Root" value={analysis?.phonotacticImpression || "Unknown"} tooltip="Based on morphological suffix analysis (e.g. -son, -us, -a) common in Indo-European families." />

                                    <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                                        <ExplanationBlock
                                            text="Here's a hidden advantage (or disadvantage) you've probably never thought about: if your name starts with A-D, you've likely appeared near the top of countless alphabetical lists throughout your life—roll calls, team rosters, seating charts. This 'primacy effect' means people saw your name first, and first impressions matter. Meanwhile, vowel-heavy names project further in crowded rooms because vowels carry acoustic energy—they're the engine of your name's volume."
                                            linkTo="/encyclopedia#naming-laws"
                                            linkLabel="Hidden Naming Rules"
                                        />
                                    </div>
                                </AnalysisCard>

                                <AnalysisCard
                                    title="Typing Ergonomics"
                                    info="Dvorak & QWERTY studies. We track the 'alternation rhythm'—how often your hands switch sides—which correlates with typing pleasure."
                                    method="Physical Layout Analysis"
                                    confidence="High"
                                >
                                    {analysis && <KeyboardHeatmap data={analysis.keyboard} name={analysis.sanitizedName} />}
                                    <ExplanationBlock text="Every day, you type your name countless times—on forms, in emails, signing off on messages. A well-balanced name creates a satisfying alternating rhythm between your hands, like playing a tiny instrument. If one hand dominates, you might notice fatigue during long typing sessions. This may seem minor, but in the age of keyboards, the 'feel' of your name has become part of your daily experience of it." />
                                </AnalysisCard>
                            </div>
                        </div>

                        {/* Miscellaneous Charts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
                            {/* Radio Clarity */}
                            <AnalysisCard
                                title="Communication Clarity"
                                icon={<span>📡</span>}
                                info="Analyzes intelligibility over distorted audio channels (like phone/radio). Checks for commonly confused sounds (M/N, F/S)."
                                method="NATO Protocol Analysis"
                                confidence="High"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-2xl font-bold font-mono text-slate-800 dark:text-white">
                                        {analysis?.radioAnalysis.clarityScore}/100
                                    </div>
                                    <div className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${analysis?.radioAnalysis.clarityScore > 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                                        {analysis?.radioAnalysis.clarityLabel}
                                    </div>
                                </div>
                                <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs mb-3 shadow-inner overflow-x-auto whitespace-nowrap">
                                    {`> ${analysis?.radioAnalysis.natoString.join(' ')}`}
                                </div>
                                {analysis?.radioAnalysis.confusablePairs.length ? (
                                    <div className="text-xs text-amber-600 dark:text-amber-400">
                                        <strong>Interference Risk:</strong> {analysis.radioAnalysis.confusablePairs.join(', ')}
                                    </div>
                                ) : (
                                    <div className="text-xs text-emerald-600 dark:text-emerald-400">
                                        <strong>Optimal Signal:</strong> High distinctive contrast between phonemes.
                                    </div>
                                )}
                                <ExplanationBlock text="Picture this: you're on a scratchy phone line with poor reception, trying to give your name to someone who's never heard it before. Some names cut through static beautifully—their sounds are distinct enough that even with noise, they're understood. Others contain 'confusable' sounds (M/N, F/S, B/V) that blur together when signal quality drops. Your score predicts how many times you'll have to say 'that's M as in Mike, not N as in November' in your lifetime." />
                            </AnalysisCard>

                            {/* Elemental Chemistry */}
                            <AnalysisCard
                                title="Name Chemistry"
                                icon={<span>🧪</span>}
                                info="Treats the name as a chemical formula where A=1 (Hydrogen) through Z=26 (Iron). Calculates total atomic mass and state of matter."
                                method="Alphabetical Stoichiometry"
                                confidence="High"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">State of Matter</p>
                                        <p className={`font-serif text-xl font-bold ${analysis?.elementalData.stateOfMatter === 'Plasma' ? 'text-purple-500' : analysis?.elementalData.stateOfMatter === 'Gas' ? 'text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {analysis?.elementalData.stateOfMatter}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Atomic Mass</p>
                                        <p className="font-mono text-xl">{analysis?.elementalData.atomicMass}u</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {analysis?.elementalData.composition.slice(0, 5).map(el => (
                                        <div key={el.element} className="w-10 h-10 border border-slate-300 dark:border-slate-600 rounded flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800">
                                            <span className="text-[8px] opacity-60 leading-none">{el.atomicNumber}</span>
                                            <span className="font-bold text-sm leading-none">{el.element}</span>
                                            <span className="text-[8px] opacity-60 leading-none">{el.count > 1 ? `x${el.count}` : ''}</span>
                                        </div>
                                    ))}
                                    {analysis && analysis.elementalData.composition.length > 5 && (
                                        <div className="w-10 h-10 flex items-center justify-center text-xs text-slate-400">+</div>
                                    )}
                                </div>
                                <ExplanationBlock text="Here's a playful way to think about your name: if each letter were an element on a periodic table (A=Hydrogen through Z=Iron), what kind of 'matter' would your name be? Vowel-rich names behave like gases or plasma—they're energetic, expansive, and fill the space around them. Consonant-heavy names are more solid—stable, grounded, and clearly defined. It's not scientific fate, but it's a fun lens for understanding why some names feel 'airy' and others feel 'weighty.'" />
                            </AnalysisCard>
                        </div>

                        <div className="mb-8">
                            <AnalysisCard
                                title="Statistical Norms"
                                info="Comparison against average English names (US Census Data 2020). See how your name deviates from the norm."
                                method="Comparative Statistics"
                                confidence="High"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">Deviation from Average</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span>Length (Avg: 6.1)</span>
                                                    <span className={analysis?.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? "text-blue-500" : "text-amber-500"}>
                                                        {analysis?.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? '+' : ''}{analysis?.benchmarks.lengthDiff}%
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400 z-10"></div>
                                                    <div
                                                        className={`h-full absolute top-0 ${analysis?.benchmarks.lengthDiff && analysis.benchmarks.lengthDiff > 0 ? 'bg-blue-500 left-1/2 rounded-r-full' : 'bg-amber-500 right-1/2 rounded-l-full'}`}
                                                        style={{ width: `${Math.min(50, Math.abs(analysis?.benchmarks.lengthDiff || 0) / 2)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span>Vowel Density (Avg: 39%)</span>
                                                    <span className={analysis?.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? "text-blue-500" : "text-amber-500"}>
                                                        {analysis?.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? '+' : ''}{analysis?.benchmarks.vowelDiff}%
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400 z-10"></div>
                                                    <div
                                                        className={`h-full absolute top-0 ${analysis?.benchmarks.vowelDiff && analysis.benchmarks.vowelDiff > 0 ? 'bg-blue-500 left-1/2 rounded-r-full' : 'bg-amber-500 right-1/2 rounded-l-full'}`}
                                                        style={{ width: `${Math.min(50, Math.abs(analysis?.benchmarks.vowelDiff || 0) / 2)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                                        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Statistical Status</div>
                                        <div className={`text-2xl font-serif font-bold ${analysis?.benchmarks.isOutlier ? 'text-purple-500' : 'text-emerald-500'}`}>
                                            {analysis?.benchmarks.isOutlier ? 'Statistical Outlier' : 'Normative Pattern'}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2 max-w-xs">
                                            {analysis?.benchmarks.isOutlier
                                                ? "This name deviates significantly (>40%) from standard English phonological averages."
                                                : "This name follows standard English phonological distribution patterns."}
                                        </p>
                                    </div>
                                </div>
                                <ExplanationBlock text="We've analyzed your name against the statistical patterns of millions of English names. Most names cluster around certain 'norms'—average lengths, typical vowel-to-consonant ratios. If your name is an outlier, congratulations: you stand out mathematically. This can make your name more memorable (unusual things stick), but it may also require a little extra cognitive effort for others to process initially. Normative names trade memorability for instant familiarity." />
                            </AnalysisCard>
                        </div>

                        {/* Top Row: Fingerprint & Phonetics */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-1">
                                {analysis && <SonicFingerprint data={analysis} />}

                                {/* Synesthesia Section */}
                                <div className="mt-4 glass-panel-light p-4 rounded-xl text-center border-t-4 bg-slate-50 dark:bg-slate-900/40" style={{ borderColor: analysis?.synesthesia.primaryColor }}>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Synesthesia Simulation</div>
                                    <div className="flex justify-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-full shadow-lg" style={{ backgroundColor: analysis?.synesthesia.primaryColor }}></div>
                                        <div className="w-12 h-12 rounded-full shadow-lg" style={{ backgroundColor: analysis?.synesthesia.secondaryColor }}></div>
                                    </div>
                                    <p className="text-[10px] text-slate-500 italic leading-tight">
                                        Simner et al. (2005) suggests certain letters trigger color associations in the brain. This is how a synesthete might "see" your name.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <AnalysisCard
                                    title="Phonetic Architecture"
                                    className="h-full"
                                    info="IPA (International Phonetic Alphabet) analysis of articulatory effort. We map the physical energy required to produce your name."
                                    method="Deterministic IPA Mapping"
                                    confidence="High"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {analysis && <PhoneticChart data={analysis.phonetics} totalConsonants={analysis.vcData.consonantCount} />}
                                        <div className="space-y-4">
                                            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <h5 className="text-xs font-bold uppercase text-slate-500">Cognitive Fluency</h5>
                                                    <span className="text-[10px] text-slate-400">{analysis?.psycholinguistics.fluencyDescription}</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 mt-2 rounded-full">
                                                    <div className="bg-emerald-500 h-1 rounded-full" style={{ width: `${analysis?.psycholinguistics.cognitiveEase}%` }}></div>
                                                </div>
                                                <p className="text-[10px] text-slate-400 mt-1">Ref: Laham, Koval, & Alter (2012) - The Name-Pronunciation Effect.</p>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-slate-800/20 p-4 rounded-lg">
                                                <div className="flex justify-between mb-2">
                                                    <h5 className="text-xs font-bold uppercase text-slate-500">Working Memory Loop</h5>
                                                    <span className={`text-[10px] font-bold ${analysis?.psycholinguistics.optimalLength ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                        {analysis?.psycholinguistics.optimalLength ? 'OPTIMAL' : 'HIGH LOAD'}
                                                    </span>
                                                </div>
                                                <p className="text-[10px] text-slate-400">
                                                    {analysis?.psycholinguistics.optimalLength ? 'Fits perfectly within the brain\'s 3-6 item short-term buffer.' : 'Exceeds typical short-term memory chunking.'}
                                                </p>
                                                <p className="text-[10px] text-slate-400 mt-1">Ref: Baddeley (2000) - The Phonological Loop.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ExplanationBlock
                                        text="Here's a surprising truth from psychology: the easier something is to process, the more we tend to trust and like it. This 'cognitive fluency' effect applies to your name. If it rolls off the tongue without effort—no awkward consonant clusters, no unusual spellings—people unconsciously associate that ease with positive feelings. It's not fair, but it's real: in studies, people with easy-to-pronounce names were rated as more trustworthy, even when raters had never met them."
                                        linkTo="/science#fluency"
                                        linkLabel="Read the Research"
                                    />
                                </AnalysisCard>
                            </div>
                        </div>

                        {analysis && <SharePanel data={analysis} />}

                        <div className="mt-8 mx-auto max-w-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 text-center no-print">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Scientific Limits</h4>
                            <p className="text-sm font-serif italic text-slate-600 dark:text-slate-400 mb-3">This tool does NOT:</p>
                            <div className="flex flex-col gap-1 items-center">
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="text-red-500 font-bold">✕</span> <span>Predict personality</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="text-red-500 font-bold">✕</span> <span>Predict success or destiny</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="text-red-500 font-bold">✕</span> <span>Provide psychological profiling</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                <Link to="/about" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline uppercase tracking-wider">
                                    Read Full Scientific Methodology →
                                </Link>
                            </div>
                        </div>

                        <div className="text-center mt-4 mb-8 no-print">
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center gap-2 px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span>🖨️</span> Save as PDF Report
                            </button>
                        </div>

                        <div className="mt-8 text-center max-w-2xl mx-auto pb-10">
                            <p className="text-xs text-slate-500 dark:text-slate-600 font-mono">
                                DISCLAIMER: This tool uses linguistic algorithms and statistics.
                                <br />Algorithm v7.5.0 (Research) • {new Date().getFullYear()} Know Your Name Lab
                                <br />Data Source: Heuristic Analysis (CMUdict/OEC patterns)
                            </p>
                        </div>

                        <AdUnit slotId="analysis-bottom" />

                    </div>
                </div>
            )}
        </div>
    );
};