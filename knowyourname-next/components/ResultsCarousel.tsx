'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface CarouselStep {
    id: string;
    title: string;
    icon: string;
    teaser: string;
    component: React.ReactNode;
}

interface Props {
    steps: CarouselStep[];
    primaryColor?: string;
}

export const ResultsCarousel: React.FC<Props> = ({ steps, primaryColor = '#6366f1' }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isAnimating, setIsAnimating] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [animKey, setAnimKey] = useState(0);

    const totalSteps = steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;
    const isFirst = currentStep === 0;
    const isLast = currentStep === totalSteps - 1;

    const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
        if (isAnimating || index < 0 || index >= totalSteps) return;
        setIsAnimating(true);
        setDirection(dir);
        setCurrentStep(index);
        setAnimKey(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, totalSteps]);

    const goNext = useCallback(() => {
        if (!isLast) goTo(currentStep + 1, 'next');
    }, [currentStep, isLast, goTo]);

    const goPrev = useCallback(() => {
        if (!isFirst) goTo(currentStep - 1, 'prev');
    }, [currentStep, isFirst, goTo]);

    // Keyboard navigation
    useEffect(() => {
        if (showAll) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                goNext();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [goNext, goPrev, showAll]);

    // Scroll to top on step change
    useEffect(() => {
        if (!showAll) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentStep, showAll]);

    if (showAll) {
        return (
            <div className="space-y-8">
                <div className="text-center mb-8">
                    <button
                        onClick={() => setShowAll(false)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                        ← Back to Story Mode
                    </button>
                </div>
                {steps.map((step) => (
                    <div key={step.id} className="animate-fade-in-up">
                        {step.component}
                    </div>
                ))}
            </div>
        );
    }

    const currentStepData = steps[currentStep];
    const nextStepData = currentStep < totalSteps - 1 ? steps[currentStep + 1] : null;

    return (
        <div className="relative">
            {/* ===== PROGRESS BAR ===== */}
            <div className="sticky top-20 z-40 mb-8 no-print">
                <div className="max-w-2xl mx-auto">
                    {/* Step counter */}
                    <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                            Your Name Story
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                            {currentStep + 1} / {totalSteps}
                        </span>
                    </div>

                    {/* Progress track */}
                    <div className="relative h-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                            style={{
                                width: `${progress}%`,
                                background: `linear-gradient(90deg, ${primaryColor}, #8b5cf6, #ec4899)`,
                                boxShadow: `0 0 20px ${primaryColor}40`,
                            }}
                        />
                    </div>

                    {/* Step dots */}
                    <div className="flex justify-center gap-1.5 mt-3">
                        {steps.map((step, i) => (
                            <button
                                key={step.id}
                                onClick={() => goTo(i, i > currentStep ? 'next' : 'prev')}
                                title={step.title}
                                className={`transition-all duration-300 rounded-full ${
                                    i === currentStep
                                        ? 'w-6 h-2 scale-100'
                                        : i < currentStep
                                        ? 'w-2 h-2 opacity-60 hover:opacity-100'
                                        : 'w-2 h-2 opacity-30 hover:opacity-60'
                                }`}
                                style={{
                                    backgroundColor: i <= currentStep ? primaryColor : undefined,
                                }}
                            >
                                {i > currentStep && (
                                    <span className="block w-full h-full rounded-full bg-slate-300 dark:bg-slate-700" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== CARD DISPLAY AREA ===== */}
            <div className="relative min-h-[400px]">
                {/* Card label */}
                <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 shadow-sm">
                        <span className="text-base">{currentStepData.icon}</span>
                        <span>{currentStepData.title}</span>
                    </span>
                </div>

                {/* Animated card */}
                <div
                    key={animKey}
                    className={`carousel-card-enter ${direction === 'next' ? 'carousel-from-right' : 'carousel-from-left'}`}
                >
                    {currentStepData.component}
                </div>
            </div>

            {/* ===== NAVIGATION ===== */}
            <div className="mt-10 mb-6 no-print">
                <div className="max-w-2xl mx-auto">
                    {/* Main action buttons */}
                    <div className="flex items-center gap-3">
                        {/* Prev button */}
                        <button
                            onClick={goPrev}
                            disabled={isFirst || isAnimating}
                            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                isFirst
                                    ? 'opacity-0 pointer-events-none'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-95 shadow-sm'
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <span className="hidden sm:inline">Back</span>
                        </button>

                        {/* Next / Reveal button */}
                        {!isLast ? (
                            <button
                                onClick={goNext}
                                disabled={isAnimating}
                                className="flex-1 group relative overflow-hidden flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                style={{
                                    background: `linear-gradient(135deg, ${primaryColor}, #8b5cf6, #ec4899)`,
                                    boxShadow: `0 10px 30px ${primaryColor}30`,
                                }}
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                <span className="relative z-10 flex items-center gap-3">
                                    <span className="flex flex-col items-start leading-tight">
                                        <span className="text-[10px] opacity-70 normal-case tracking-normal font-normal">
                                            Tap to reveal
                                        </span>
                                        <span className="flex items-center gap-2">
                                            {nextStepData?.icon && <span>{nextStepData.icon}</span>}
                                            {nextStepData?.teaser}
                                        </span>
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 animate-pulse">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </button>
                        ) : (
                            <div className="flex-1 flex flex-col items-center gap-3 py-4">
                                <div className="text-center">
                                    <span className="text-2xl mb-2 block">🎉</span>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">You've explored your complete Name Story!</p>
                                    <p className="text-xs text-slate-500 mt-1">Every hidden dimension revealed.</p>
                                </div>
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                    </svg>
                                    View All at Once
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Keyboard hint */}
                    <div className="text-center mt-4">
                        <p className="text-[10px] text-slate-400 dark:text-slate-600 font-mono hidden sm:block">
                            Use ← → arrow keys to navigate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
