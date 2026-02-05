import React from 'react';
import { MouthKinetics } from '../types';
import { useTheme } from '../App';

interface Props {
  data: MouthKinetics;
}

export const MouthMap: React.FC<Props> = ({ data }) => {
  const { theme } = useTheme();
  
  // Colors based on theme
  const gridColor = theme === 'dark' ? '#334155' : '#cbd5e1';
  const labelColor = theme === 'dark' ? '#94a3b8' : '#64748b';
  const lineColor = theme === 'dark' ? '#10b981' : '#059669'; // Emerald
  const dotColor = theme === 'dark' ? '#f8fafc' : '#0f172a';

  // SVG Path generation
  let pathD = "";
  data.points.forEach((p, i) => {
      if (i === 0) pathD += `M ${p.x} ${p.y}`;
      else pathD += ` L ${p.x} ${p.y}`;
  });

  return (
    <div className="w-full">
      <div className="relative w-full aspect-video border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        {/* Anatomical Labels */}
        <div className="absolute top-2 left-2 text-[9px] uppercase font-bold text-slate-400">Lips (Front)</div>
        <div className="absolute top-2 right-2 text-[9px] uppercase font-bold text-slate-400">Throat (Back)</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] uppercase font-bold text-slate-400">Jaw Open (Low)</div>

        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
            {/* Grid */}
            <line x1="0" y1="50" x2="100" y2="50" stroke={gridColor} strokeWidth="0.5" strokeDasharray="4" />
            <line x1="50" y1="0" x2="50" y2="100" stroke={gridColor} strokeWidth="0.5" strokeDasharray="4" />

            {/* The Path */}
            <path d={pathD} fill="none" stroke={lineColor} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />

            {/* The Points */}
            {data.points.map((p, i) => (
                <g key={i}>
                    <circle cx={p.x} cy={p.y} r="2" fill={dotColor} stroke={theme === 'dark' ? '#0f172a' : '#fff'} strokeWidth="0.5" />
                    <text x={p.x} y={p.y - 4} fontSize="6" fill={labelColor} textAnchor="middle">{p.char}</text>
                </g>
            ))}
            
            {/* Start/End Markers */}
            <circle cx={data.points[0].x} cy={data.points[0].y} r="3" fill="none" stroke={lineColor} strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-xs">
          <div>
              <span className="text-slate-500 uppercase tracking-widest mr-2">Flow:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{data.flowDirection}</span>
          </div>
          <div>
              <span className="text-slate-500 uppercase tracking-widest mr-2">Jaw Activity:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{data.jawMovement}</span>
          </div>
      </div>
    </div>
  );
};