'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { MarkdownLite } from '@/components/ui/MarkdownLite';

interface ResultCardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    score?: number | string;
    scoreLabel?: string;
    scoreColor?: string;
    gradient?: string;
    delay?: number;
    className?: string;
    children: React.ReactNode;
    interpretation?: React.ReactNode;
}

export const ResultCard: React.FC<ResultCardProps> = ({
    title,
    description,
    icon,
    score,
    scoreLabel,
    scoreColor = "bg-blue-500",
    gradient = "from-blue-500 to-indigo-500",
    delay = 0,
    className,
    children,
    interpretation
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col",
                className
            )}
        >
            {/* Top Gradient Border */}
            <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", gradient)} />
            
            {/* Ambient Glow */}
            <div className={cn("absolute -top-20 -right-20 w-64 h-64 opacity-5 blur-3xl rounded-full bg-gradient-to-br transition-opacity group-hover:opacity-10", gradient)} />
            <div className={cn("absolute -bottom-20 -left-20 w-64 h-64 opacity-5 blur-3xl rounded-full bg-gradient-to-tr transition-opacity group-hover:opacity-10", gradient)} />

            <div className="relative p-6 md:p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        {icon && (
                            <div className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-xl shadow-lg text-white bg-gradient-to-br transform transition-transform group-hover:scale-105",
                                gradient
                            )}>
                                {icon}
                            </div>
                        )}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                                {title}
                            </h3>
                            {description && (
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Score Badge */}
                    {score !== undefined && (
                        <div className="flex flex-col items-end flex-shrink-0 ml-4">
                            <div className={cn(
                                "flex items-center justify-center min-w-[3rem] px-3 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r",
                                gradient
                            )}>
                                {score}
                            </div>
                            {scoreLabel && (
                                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1 text-right block">
                                    {scoreLabel}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex-1">
                    {children}
                </div>

                {/* Interpretation / Footer */}
                {interpretation && (
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                        <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden group/insight hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex gap-3 relative z-10">
                                <Info className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-indigo-900/70 dark:text-indigo-300/70 block mb-1 uppercase tracking-wider text-[10px]">
                                        Analysis Insight
                                    </span>
                                    <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                        {typeof interpretation === 'string' ? (
                                <MarkdownLite text={interpretation} />
                            ) : (
                                interpretation
                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
