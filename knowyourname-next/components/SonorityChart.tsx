'use client';

import React from 'react';
import { NameAnalysis } from '@/lib/types';
import { ResultCard } from './results/ResultCard';
import { Activity, Music, Mic2 } from 'lucide-react';
import { Interpolator } from '@/lib/interpretations';

interface Props {
  analysis: NameAnalysis;
}

export const SonorityChart: React.FC<Props> = ({ analysis }) => {
  const data = analysis.sonorityProfile;
  if (!data || data.length === 0) return null;

  const height = 150;
  const padding = 20;

  // Y coordinate calculation (invert score because SVG Y=0 is top)
  const getY = (score: number) => {
    return height - ((score / 10) * (height - padding * 2)) - padding;
  };

  // Generate SVG Path
  let pathD = `M ${0} ${getY(data[0].score)}`;
  
  // Create smooth bezier curves
  data.forEach((point, i) => {
    if (i === 0) return;
    const x = (i / (data.length - 1)) * 100;
    const y = getY(point.score);
    const prevX = ((i - 1) / (data.length - 1)) * 100;
    const prevY = getY(data[i-1].score);
    
    // Control points for bezier
    const cp1x = prevX + (x - prevX) / 2;
    const cp1y = prevY;
    const cp2x = prevX + (x - prevX) / 2;
    const cp2y = y;

    pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
  });

  return (
    <ResultCard
        title="Rhythm & Flow"
        description="The musical quality of your name."
        icon={<Music className="w-6 h-6" />}
        gradient="from-blue-500 to-cyan-500"
        delay={0.2}
        interpretation={Interpolator.rhythm(analysis)}
    >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Chart Area */}
            <div className="lg:col-span-2 relative h-[200px] w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-4">
                <div className="absolute top-2 left-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Sonority Curve</div>
                <svg width="100%" height="100%" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="overflow-visible mt-4">
                  
                  {/* Background Grid Lines */}
                  <line x1="0" y1={getY(10)} x2="100" y2={getY(10)} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeDasharray="4" strokeWidth="0.5" />
                  <text x="102" y={getY(10)} fontSize="6" fill="currentColor" className="text-slate-400" alignmentBaseline="middle">Vowel (Open)</text>
                  
                  <line x1="0" y1={getY(1)} x2="100" y2={getY(1)} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeDasharray="4" strokeWidth="0.5" />
                  <text x="102" y={getY(1)} fontSize="6" fill="currentColor" className="text-slate-400" alignmentBaseline="middle">Stop (Closed)</text>

                  {/* Area Fill */}
                  <path 
                    d={`${pathD} L 100 ${height} L 0 ${height} Z`} 
                    fill="url(#sonorityGradient)" 
                    opacity="0.2" 
                  />
                  
                  {/* The Waveform Line */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                  />

                  {/* Points */}
                  {data.map((p, i) => (
                     <circle 
                        key={i} 
                        cx={`${(i / (data.length - 1)) * 100}`} 
                        cy={getY(p.score)} 
                        r="3" 
                        className="fill-white dark:fill-slate-900 stroke-blue-500 stroke-2"
                     />
                  ))}

                  <defs>
                    <linearGradient id="sonorityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Labels under the graph */}
                <div className="flex justify-between mt-[-10px] px-0 relative z-10 w-full">
                    {data.map((p, i) => (
                        <div key={i} className="flex flex-col items-center" style={{ width: `${100/data.length}%` }}>
                            <span className="font-serif font-bold text-lg text-slate-700 dark:text-slate-200">{p.char}</span>
                            <span className="text-[8px] uppercase text-slate-400 hidden md:block">{p.category.split(' ')[0]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Area */}
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Stress Pattern</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                        {analysis.prosody.stressPattern || "N/A"}
                    </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                     <div className="flex items-center gap-2 mb-2">
                        <Mic2 className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Rhythm Type</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                        {analysis.prosody.rhythmType || "N/A"}
                    </div>
                </div>
            </div>
        </div>
    </ResultCard>
  );
};