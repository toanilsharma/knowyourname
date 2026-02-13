'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const FAMOUS_EXAMPLES = [
    {
        name: "Darth Vader",
        description: "The Sound of Evil",
        traits: ["Low Pitch", "Voiced D-V Stops", "Back Vowels"],
        analysis: "Deep, resonant vowels (ah/er) combined with 'voiced' stops (D/V) create a sense of heaviness and dominance. It sounds 'large' and 'menacing' purely by physics.",
        icon: "👺",
        color: "#ef4444",
        gradient: "from-red-500/20 to-orange-500/20"
    },
    {
        name: "Coca-Cola",
        description: "The Rhythm of Joy",
        traits: ["Alliteration", "Plosive K-C", "Symmetrical"],
        analysis: "Perfect trochaic rhythm (CO-ca CO-la). The hard 'K' sounds trigger dopamine (excitement) while the repeated vowels create an earworm effect.",
        icon: "🥤",
        color: "#f43f5e",
        gradient: "from-rose-500/20 to-red-500/20"
    },
    {
        name: "Sephora",
        description: "Sensory Luxury",
        traits: ["Fricative S-F", "Liquid R", "Girl-Name Ending"],
        analysis: "Uses 'Fricatives' (S/F/Ph) which mimic the sound of airflow (whispering). Soft, frictionless sounds are subconsciously associated with smoothness and luxury.",
        icon: "💄",
        color: "#d946ef",
        gradient: "from-fuchsia-500/20 to-pink-500/20"
    },
    {
        name: "Tesla",
        description: "Electric Innovation",
        traits: ["High Freq S-T", "Sharp Vowels", "Modern"],
        analysis: "The 'S' and 'T' cluster creates high-frequency acoustic hiss, mimicking electricity or speed. It sounds physically 'sharper' than a name like 'Ford'.",
        icon: "⚡",
        color: "#3b82f6",
        gradient: "from-blue-500/20 to-cyan-500/20"
    }
];

export const HomeFamousNames: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % FAMOUS_EXAMPLES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const activeItem = FAMOUS_EXAMPLES[activeIndex];

    return (
        <section className="py-32 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03]"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-xs">Phonosemantics in the Real World</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white">Famous Soundscapes</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Major brands and storytellers don't pick names by accident. They use sound symbolism to engineer a specific feeling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual Card */}
                    <div className="relative h-[400px] w-full perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: -50, rotateY: 10 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="absolute inset-0"
                            >
                                <Card variant="glass" className="h-full w-full flex flex-col items-center justify-center p-8 relative overflow-hidden ring-1 ring-white/20">
                                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", activeItem.gradient)}></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-current opacity-10 rounded-full blur-3xl -mr-20 -mt-20" style={{ color: activeItem.color }}></div>

                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="text-8xl mb-8 relative z-10"
                                    >
                                        {activeItem.icon}
                                    </motion.div>
                                    
                                    <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2 relative z-10">{activeItem.name}</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest relative z-10" style={{ color: activeItem.color }}>
                                        {activeItem.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mt-8 relative z-10">
                                        {activeItem.traits.map((trait, i) => (
                                            <motion.span 
                                                key={trait}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold border border-white/20"
                                            >
                                                {trait}
                                            </motion.span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Description */}
                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-xs font-mono mb-4">
                                    <Sparkles className="w-3 h-3" />
                                    CASE STUDY #{activeIndex + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    Why "{activeItem.name}" Works
                                </h3>
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {activeItem.analysis}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-3">
                            {FAMOUS_EXAMPLES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={cn(
                                        "h-2 rounded-full transition-all duration-300",
                                        activeIndex === idx ? "w-8 bg-slate-900 dark:bg-white" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                                    )}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
