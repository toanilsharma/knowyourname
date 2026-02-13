import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ArticleHeroProps {
    title: string;
    subtitle: string;
    description: string;
    readTime: string;
    category?: string;
    gradient?: string;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({
    title,
    subtitle,
    description,
    readTime,
    category = "Research Literature Review",
    gradient = "from-blue-600 via-indigo-600 to-purple-600"
}) => {
    return (
        <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-16">
            {/* Background Gradient */}
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10 dark:opacity-20", gradient)} />
            
            {/* Animated Orbs */}
            <div className={cn("absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 animate-pulse bg-gradient-to-r", gradient)} />
            <div className={cn("absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-pulse delay-1000 bg-gradient-to-l", gradient)} />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                 {/* Breadcrumb */}
                 <nav className="mb-8 flex justify-center items-center gap-2 text-sm text-slate-500 font-medium tracking-wide">
                    <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/research" className="hover:text-slate-900 dark:hover:text-white transition-colors">Research</Link>
                </nav>

                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur border border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
                    {category} • {readTime}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                    {title}
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                    {subtitle}: <span className="opacity-80">{description}</span>
                </p>
            </div>

             {/* Scroll Indicator */}
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2">
                    <div className="w-1 h-3 bg-slate-400 rounded-full" />
                </div>
            </div>
        </header>
    );
};
