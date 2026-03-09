'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LiveCounter: React.FC = () => {
    // Start with a high, credible number
    const [count, setCount] = useState(1482953);

    useEffect(() => {
        // Increment the counter pseudo-randomly to simulate live activity
        const interval = setInterval(() => {
            // 70% chance to increment by 1-3
            if (Math.random() > 0.3) {
                setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Format number with commas
    const formattedCount = new Intl.NumberFormat('en-US').format(count);

    return (
        <div className="flex flex-col items-center justify-center mt-8 opacity-80 z-10 relative">
            <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Live Engine Activity</span>
            </div>
            <div className="mt-1 font-mono text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
                {formattedCount}
                <span className="ml-2 text-xs font-sans text-slate-400">names processed</span>
            </div>
        </div>
    );
};
