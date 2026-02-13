'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

export const HomeCaseStudy: React.FC = () => {
    const [active, setActive] = useState<'tesla' | 'ford'>('tesla');

    return (
        <div className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div className="space-y-8">
                        <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold uppercase tracking-widest">
                            Live Experiment
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white leading-tight">
                            Why does <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">"Tesla"</span> sound faster than <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">"Ford"</span>?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            It's not just marketing. It's <strong className="text-slate-900 dark:text-white">Phonosemantics</strong>. High-frequency sounds (like 'S' and 'T') mimic the physics of speed and electricity. Low-frequency sounds (like 'O' and 'R') mimic weight and durability.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <Button
                                variant={active === 'tesla' ? 'primary' : 'outline'}
                                onClick={() => setActive('tesla')}
                                className={cn("flex-1", active === 'tesla' ? "bg-red-600 hover:bg-red-700 ring-4 ring-red-100 dark:ring-red-900/30" : "")}
                            >
                                Tesla
                            </Button>
                            <Button
                                variant={active === 'ford' ? 'primary' : 'outline'}
                                onClick={() => setActive('ford')}
                                className={cn("flex-1", active === 'ford' ? "bg-blue-700 hover:bg-blue-800 ring-4 ring-blue-100 dark:ring-blue-900/30" : "")}
                            >
                                Ford
                            </Button>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <Card className="h-[400px] w-full flex items-center justify-center p-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <AnimatePresence mode="wait">
                            {active === 'tesla' ? (
                                <motion.div
                                    key="tesla"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-center relative z-10"
                                >
                                    <div className="text-8xl mb-6 animate-pulse-slow">⚡</div>
                                    <h3 className="text-5xl font-sans font-bold text-slate-900 dark:text-white tracking-tighter uppercase italic">TESLA</h3>
                                    <div className="mt-8 flex justify-center gap-2">
                                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-bold uppercase">High Frequency</span>
                                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-bold uppercase">Fricative 'S'</span>
                                    </div>
                                    <p className="mt-6 text-sm text-slate-500 italic">"Sharp, Electrical, Cutting edge"</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="ford"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-center relative z-10"
                                >
                                    <div className="text-8xl mb-6 animate-bounce-slow">🛡️</div>
                                    <h3 className="text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-widest uppercase">FORD</h3>
                                    <div className="mt-8 flex justify-center gap-2">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">Low Pitch</span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-bold uppercase">Back Vowel 'O'</span>
                                    </div>
                                    <p className="mt-6 text-sm text-slate-500 italic">"Reliable, Heavy, Sturdy"</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </div>
            </div>
        </div>
    );
};
