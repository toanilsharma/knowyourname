'use client';

import React from 'react';
import { ResultCard } from './results/ResultCard';
import { MetricRow } from './results/MetricRow';
import { Database, Dna } from 'lucide-react';

import { NameAnalysis } from '@/lib/types';
import { Interpolator } from '@/lib/interpretations';

interface Props {
  analysis: NameAnalysis;
}

export const StructuralDNA: React.FC<Props> = ({ analysis }) => {
  return (
    <ResultCard
        title="Structural DNA"
        description="The mathematical architecture of your name."
        icon={<Dna className="w-6 h-6" />}
        gradient="from-slate-500 to-gray-500"
        delay={0.6}
        interpretation={Interpolator.structure(analysis)}
    >
        <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 p-2">
            <MetricRow 
                label="Alphabetical Weight" 
                value={analysis.metrics.alphaWeight || 0} 
                highlight 
                tooltip="Names starting with A-D often appear first in lists, creating a subtle advantage." 
            />
            <MetricRow 
                label="Unique Characters" 
                value={analysis.metrics.uniqueChars || 0} 
                tooltip="Higher unique counts require more cognitive energy to decode." 
            />
            <MetricRow 
                label="Vowel Density" 
                value={`${analysis.vcData.vowelPercentage.toFixed(1)}%`} 
                subtext={analysis.vcData.densityLabel} 
                tooltip="Vowels carry the acoustic energy, consonants carry the information." 
            />
            <MetricRow 
                label="Linguistic Root" 
                value={analysis.phonotacticImpression || "Unknown"} 
                tooltip="Based on morphological suffix analysis common in Indo-European families." 
            />
        </div>
    </ResultCard>
  );
};
