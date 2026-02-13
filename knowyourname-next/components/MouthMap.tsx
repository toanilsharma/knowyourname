'use client';

import React from 'react';
import { NameAnalysis } from '@/lib/types';
import { useTheme } from '@/components/ThemeProvider';
import { ResultCard } from './results/ResultCard';
import { Smile, MoveHorizontal, ArrowUpDown } from 'lucide-react';
import { Interpolator } from '@/lib/interpretations';

interface Props {
  analysis: NameAnalysis;
}

export const MouthMap: React.FC<Props> = ({ analysis }) => {
  const data = analysis.mouthKinetics;
  const { theme } = useTheme();
  
  // Colors based on theme
  const gridColor = theme === 'dark' ? '#334155' : '#e2e8f0';
  const labelColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const lineColor = theme === 'dark' ? '#f43f5e' : '#e11d48'; // Rose
  const dotColor = theme === 'dark' ? '#f8fafc' : '#0f172a';

  // SVG Path generation
  let pathD = "";
  if (data.points) {
      data.points.forEach((p: {x: number, y: number}, i: number) => {
          if (i === 0) pathD += `M ${p.x} ${p.y}`;
          else pathD += ` L ${p.x} ${p.y}`;
      });
  }

  return (
    <ResultCard
        title="Mouth Feel"
        description="The physical choreography of your name."
        icon={<Smile className="w-6 h-6" />}
        gradient="from-rose-500 to-pink-500"
        delay={0.3}
        interpretation={Interpolator.mouthFeel(analysis)}
    >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
             {/* Chart Area */}
             <div className="lg:col-span-2 relative aspect-video w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-4 overflow-hidden">
                {/* Anatomical Labels */}
                <div className="absolute top-2 left-4 text-[9px] uppercase font-bold text-slate-400">Lips (Front)</div>
                <div className="absolute top-2 right-4 text-[9px] uppercase font-bold text-slate-400">Throat (Back)</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] uppercase font-bold text-slate-400">Jaw Open (Low)</div>

                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 m-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] overflow-visible">
                    {/* Grid */}
                    <line x1="0" y1="50" x2="100" y2="50" stroke={gridColor} strokeWidth="0.5" strokeDasharray="4" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke={gridColor} strokeWidth="0.5" strokeDasharray="4" />

                    {/* The Path */}
                    <path d={pathD} fill="none" stroke={lineColor} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="drop-shadow-sm" />

                    {/* The Points */}
                    {data.points && data.points.map((p: any, i: number) => (
                        <g key={i}>
                            <circle cx={p.x} cy={p.y} r="3" fill={dotColor} stroke={theme === 'dark' ? '#0f172a' : '#fff'} strokeWidth="1" />
                            <text x={p.x} y={p.y - 6} fontSize="8" fontWeight="bold" fill={labelColor} textAnchor="middle">{p.char}</text>
                        </g>
                    ))}
                    
                    {/* Start Marker */}
                    {data.points && data.points.length > 0 && (
                        <circle cx={data.points[0].x} cy={data.points[0].y} r="5" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.5" />
                    )}
                </svg>
             </div>

            {/* Stats Area */}
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                        <MoveHorizontal className="w-4 h-4 text-rose-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Flow</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                        {data.flowDirection}
                    </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                     <div className="flex items-center gap-2 mb-2">
                        <ArrowUpDown className="w-4 h-4 text-pink-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Jaw Activity</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                        {data.jawMovement}
                    </div>
                </div>
            </div>
        </div>
    </ResultCard>
  );
};