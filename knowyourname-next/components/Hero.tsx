'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import { FactGenerator } from './FactGenerator';

interface HeroProps {
    onAnalyzeClick?: () => void;
    onHowItWorksClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAnalyzeClick, onHowItWorksClick }) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-float delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
                        V 7.5 Now Live
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[0.9]"
                >
                    Scientific<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient-x">Name Analysis</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Decode the hidden acoustics, phonetics, and psychological impact of your name. <br className="hidden md:block" />
                    <span className="font-semibold text-slate-900 dark:text-white">100% Data. No Horoscopes.</span>
                </motion.p>

                {/* Fact Generator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-12"
                >
                    <FactGenerator />
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up flex-wrap" style={{ animationDelay: '0.4s' }}>
                        <Button size="lg" onClick={onAnalyzeClick} className="w-full sm:w-auto text-lg sm:text-xl font-bold py-6 px-10 shadow-xl shadow-blue-500/20">
                            Analyze My Name
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={onHowItWorksClick} className="w-full sm:w-auto text-lg sm:text-lg font-bold py-6 px-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur border-2 border-slate-200 dark:border-slate-700">
                            How It Works
                        </Button>
                    </div>
                </motion.div>

                <div className="mt-12 text-slate-500 dark:text-slate-400 text-sm max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <p className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Inspired by the proven studies of:</span>
                        <a href="/research/bouba-kiki" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Ramachandran & Hubbard</a>
                        <span>•</span>
                        <a href="/research/sound-symbolism" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Song & Schwarz</a>
                        <span>•</span>
                        <a href="/research/typing-effort" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Simner et al.</a>
                    </p>
                </div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center gap-4"
                >
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Trusted by linguists, parents & the name-curious</p>
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500">
                                {String.fromCharCode(64 + i)}
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500">
                            +5k
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
