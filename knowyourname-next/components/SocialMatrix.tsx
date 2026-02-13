'use client';

import React from 'react';
import { NameAnalysis } from '@/lib/types';
import { useTheme } from '@/components/ThemeProvider';
import { ResultCard } from './results/ResultCard';
import { Users, Crosshair } from 'lucide-react';
import { Interpolator } from '@/lib/interpretations';
import { MarkdownLite } from '@/components/ui/MarkdownLite';

interface Props {
  analysis: NameAnalysis;
}

export const SocialMatrix: React.FC<Props> = ({ analysis }) => {
  const data = analysis.socialImpression;
  const insight = Interpolator.social(analysis);
  const { theme } = useTheme();
  
  // Calculate position as percentage (0-100)
  const x = data.competenceScore; // X Axis = Competence
  const y = 100 - data.warmthScore; // Y Axis = Warmth (Inverted because SVG 0 is top)

  // Reference Anchors (Contextual Data)
  const anchors = [
      { label: 'Hero', x: 80, y: 20, color: 'text-emerald-500', bg: 'bg-emerald-500' }, // High Warmth, High Comp
      { label: 'Villain', x: 85, y: 85, color: 'text-indigo-500', bg: 'bg-indigo-500' }, // Low Warmth, High Comp
      { label: 'Child', x: 20, y: 20, color: 'text-amber-500', bg: 'bg-amber-500' }, // High Warmth, Low Comp
      { label: 'Robot', x: 50, y: 90, color: 'text-slate-400', bg: 'bg-slate-400' }, // Low Warmth, Mid Comp
  ];

  return (
    <ResultCard
        title="First Impressions"
        description="What strangers subconsciously think in 7 seconds."
        icon={<Users className="w-6 h-6" />}
        gradient="from-amber-500 to-orange-500"
        delay={0.4}
        interpretation={
            <div>
                <strong className="text-secondary block mb-1">{insight.title}</strong>
                <div>
                   <MarkdownLite text={insight.text} />
                </div>
            </div>
        }
    >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Chart Area */}
            <div className="lg:col-span-2 relative aspect-square md:aspect-video w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 group overflow-hidden">
                
                {/* Quadrant Labels (Background) */}
                <div className="absolute top-4 right-4 text-[9px] text-emerald-500 font-bold uppercase opacity-60 text-right">Admired<br/>(Warm+Comp)</div>
                <div className="absolute top-4 left-4 text-[9px] text-amber-500 font-bold uppercase opacity-60">Sympathetic<br/>(Warm+LowComp)</div>
                <div className="absolute bottom-4 right-4 text-[9px] text-indigo-500 font-bold uppercase opacity-60 text-right">Envied<br/>(Cold+HighComp)</div>
                <div className="absolute bottom-4 left-4 text-[9px] text-slate-400 font-bold uppercase opacity-60">Distant<br/>(Cold+LowComp)</div>

                {/* Axes */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 dark:bg-slate-700"></div>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200 dark:bg-slate-700"></div>
                
                {/* Axis Labels */}
                <div className="absolute top-1/2 right-2 -translate-y-1/2 text-[9px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-1">Competence →</div>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 text-[9px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-1">↑ Warmth</div>

                {/* Anchors (Context) */}
                {anchors.map((anchor, i) => (
                    <div 
                        key={i}
                        className="absolute flex flex-col items-center justify-center transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                        style={{ left: `${anchor.x}%`, top: `${anchor.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className={`w-1.5 h-1.5 rounded-full mb-1 ${anchor.bg}`}></div>
                        <div className={`text-[8px] uppercase font-bold tracking-wider ${anchor.color}`}>{anchor.label}</div>
                    </div>
                ))}

                {/* The Dot (User) */}
                <div 
                    className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-800 shadow-lg z-10 transition-all duration-1000 ease-out flex items-center justify-center"
                    style={{ 
                        left: `${x}%`, 
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Pulse effect */}
                <div 
                    className="absolute w-4 h-4 bg-blue-500 rounded-full opacity-50 animate-ping"
                    style={{ 
                        left: `${x}%`, 
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                ></div>

            </div>
            
            {/* Stats Area */}
            <div className="space-y-4">
                 <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Crosshair className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Social Perception</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                        {data.quadrant}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {data.descriptors.map(d => (
                        <span key={d} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase rounded-full border border-amber-100 dark:border-amber-900/30">
                            {d}
                        </span>
                    ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">Based on the Stereotype Content Model (Fiske et al., 2002)</p>
            </div>
        </div>
    </ResultCard>
  );
};