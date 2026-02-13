'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Sparkles, Activity, Brain, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const HomeFeatures: React.FC = () => {
    
    const features = [
        {
            title: "Acoustic Fluidity",
            description: "Is your name a fluid stream (like \"Leila\") or a rhythmic percussive beat (like \"Jack\")? We measure the Sonority Curve of every syllable.",
            icon: <Activity className="w-10 h-10 text-white" />,
            gradient: "from-blue-500 to-cyan-500",
            textGradient: "text-blue-600 dark:text-blue-400",
            delay: 0.1,
            metric: 7.5
        },
        {
            title: "Sound-Color Synesthesia",
            description: "~4% of people naturally see colors when they hear sounds. We simulate this neural pathway to reveal your name's Hidden Palette.",
            icon: <Sparkles className="w-10 h-10 text-white" />,
            gradient: "from-purple-500 to-pink-500",
            textGradient: "text-purple-600 dark:text-purple-400",
            delay: 0.2,
            featured: true,
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']
        },
        {
            title: "Implicit Psychology",
            description: "The \"Bouba/Kiki\" effect proves sounds carry meaning. We analyse if your name projects Warmth or Competence.",
            icon: <Brain className="w-10 h-10 text-white" />,
            gradient: "from-emerald-500 to-teal-500",
            textGradient: "text-emerald-600 dark:text-emerald-400",
            delay: 0.3,
            meter: true
        }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -top-60 -left-60 animate-float"></div>
                <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl top-1/2 -right-40 animate-float delay-1000"></div>
                <div className="absolute w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -bottom-40 left-1/3 animate-float delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 shadow-sm">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                        Core Analysis Modules
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">
                        Decode the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">DNA of Sound</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
                        Your name isn't just a label. It's an audio signal that triggers specific
                        psychological and biological responses in everyone who hears it.
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card 
                            key={feature.title}
                            variant="glass"
                            hoverEffect={true}
                            className={cn(
                                "p-8 h-full flex flex-col relative group overflow-hidden border-slate-200/60 dark:border-slate-800/60",
                                feature.featured ? "md:-mt-8 ring-1 ring-purple-500/20" : ""
                            )}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                        >
                             {/* Hover Gradient Border Effect */}
                             <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                                feature.gradient
                            )}></div>

                            {/* Featured Badge */}
                            {feature.featured && (
                                <div className="absolute top-6 right-6">
                                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                        Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className={cn(
                                    "absolute inset-0 opacity-20 blur-2xl rounded-full scale-150 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r",
                                    feature.gradient
                                )}></div>
                                <div className={cn(
                                    "relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-gradient-to-br",
                                    feature.gradient
                                )}>
                                    {feature.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-colors duration-300 bg-gradient-to-r from-slate-900 to-slate-900 dark:from-white dark:to-white" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                                {feature.title}
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                                {feature.description.split(feature.title === "Acoustic Fluidity" ? "Sonority Curve" : feature.title === "Sound-Color Synesthesia" ? "Hidden Palette" : "Warmth").map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <strong className={feature.textGradient}>
                                                {feature.title === "Acoustic Fluidity" ? "Sonority Curve" : feature.title === "Sound-Color Synesthesia" ? "Hidden Palette" : "Warmth"}
                                            </strong>
                                        )}
                                    </React.Fragment>
                                ))}
                                {feature.title === "Implicit Psychology" && <strong className={feature.textGradient}> or Competence</strong>}
                            </p>

                            {/* Feature Specific Visuals */}
                            <div className="mt-auto">
                                {feature.metric && (
                                    <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                        <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">7.5</span>
                                    </div>
                                )}

                                {feature.colors && (
                                    <div className="flex gap-2 justify-center">
                                        {feature.colors.map((color, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-8 h-8 rounded-lg shadow-sm border border-white/20"
                                                style={{ backgroundColor: color }}
                                                whileHover={{ scale: 1.2, rotate: 5, zIndex: 10 }}
                                            />
                                        ))}
                                    </div>
                                )}

                                {feature.meter && (
                                    <div className="flex items-center gap-3 px-2">
                                        <span className="text-xs font-bold text-rose-500">Warm</span>
                                        <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative group/meter">
                                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 opacity-50"></div>
                                            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-slate-900 shadow-lg group-hover/meter:scale-125 transition-transform"></div>
                                        </div>
                                        <span className="text-xs font-bold text-blue-500">Sharp</span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <Link href="/science" className="inline-flex items-center gap-2 group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Explore the Science
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
