'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { NameAnalysis } from '@/lib/types';
import { SingleAnalysisResults } from '@/components/results/SingleAnalysisResults';
import { speakName, playMelody } from '@/lib/audio';

interface NamePageClientProps {
    analysis: NameAnalysis;
}

export function NamePageClient({ analysis }: NamePageClientProps) {
    const router = useRouter();

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

    const handleReset = () => {
        router.push('/');
    };

    return (
        <SingleAnalysisResults 
            analysis={analysis} 
            onReset={handleReset}
            onSpeak={handleSpeak}
            onMelody={handleMelody}
        />
    );
}
