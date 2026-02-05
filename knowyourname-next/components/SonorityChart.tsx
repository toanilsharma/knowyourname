import React from 'react';
import { SonorityPoint } from '@/lib/types';

interface Props {
  data: SonorityPoint[];
  theme?: 'light' | 'dark';
}

export const SonorityChart: React.FC<Props> = ({ data, theme = 'light' }) => {
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
    <div className="w-full h-full flex flex-col justify-between">
      <div className="relative w-full h-[150px]">
        <svg width="100%" height="100%" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="overflow-visible">
          
          {/* Background Grid Lines */}
          <line x1="0" y1={getY(10)} x2="100" y2={getY(10)} stroke={theme === 'dark' ? '#334155' : '#e2e8f0'} strokeDasharray="4" strokeWidth="1" />
          <text x="102" y={getY(10)} fontSize="8" fill={theme === 'dark' ? '#94a3b8' : '#64748b'} alignmentBaseline="middle">Vowel (Singing)</text>
          
          <line x1="0" y1={getY(1)} x2="100" y2={getY(1)} stroke={theme === 'dark' ? '#334155' : '#e2e8f0'} strokeDasharray="4" strokeWidth="1" />
          <text x="102" y={getY(1)} fontSize="8" fill={theme === 'dark' ? '#94a3b8' : '#64748b'} alignmentBaseline="middle">Stop (Percussive)</text>

          {/* Area Fill */}
          <path 
            d={`${pathD} L 100 ${height} L 0 ${height} Z`} 
            fill="url(#sonorityGradient)" 
            opacity="0.3" 
          />
          
          {/* The Waveform Line */}
          <path 
            d={pathD} 
            fill="none" 
            stroke={theme === 'dark' ? '#38bdf8' : '#0284c7'} 
            strokeWidth="3" 
            strokeLinecap="round"
          />

          {/* Points */}
          {data.map((p, i) => (
             <circle 
                key={i} 
                cx={`${(i / (data.length - 1)) * 100}`} 
                cy={getY(p.score)} 
                r="4" 
                fill={theme === 'dark' ? '#f8fafc' : '#0f172a'} 
                stroke={theme === 'dark' ? '#38bdf8' : '#0284c7'}
                strokeWidth="2"
             />
          ))}

          <defs>
            <linearGradient id="sonorityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={theme === 'dark' ? '#38bdf8' : '#0284c7'} />
              <stop offset="100%" stopColor={theme === 'dark' ? '#38bdf8' : '#0284c7'} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Labels under the graph */}
        <div className="flex justify-between mt-2 px-0">
            {data.map((p, i) => (
                <div key={i} className="flex flex-col items-center" style={{ width: `${100/data.length}%` }}>
                    <span className="font-serif font-bold text-lg">{p.char}</span>
                    <span className="text-[8px] uppercase text-slate-400 hidden md:block">{p.category.split(' ')[0]}</span>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-6 text-xs text-slate-500 italic border-t border-slate-200 dark:border-slate-800 pt-3">
        &quot;The Sonority Sequencing Principle&quot; (Clements, 1990). We map the rise and fall of acoustic energy in your mouth. Peaks are vowels (loud/open), valleys are stops (quiet/closed).
      </div>
    </div>
  );
};