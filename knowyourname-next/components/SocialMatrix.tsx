import React from 'react';
import { SocialImpression } from '@/lib/types';
import { useTheme } from '@/components/ThemeProvider';

interface Props {
  data: SocialImpression;
}

export const SocialMatrix: React.FC<Props> = ({ data }) => {
  const { theme } = useTheme();
  
  // Calculate position as percentage (0-100)
  const x = data.competenceScore; // X Axis = Competence
  const y = 100 - data.warmthScore; // Y Axis = Warmth (Inverted because SVG 0 is top)

  // Reference Anchors (Contextual Data)
  const anchors = [
      { label: 'Hero', x: 80, y: 20, color: 'text-emerald-500' }, // High Warmth, High Comp
      { label: 'Villain', x: 85, y: 85, color: 'text-indigo-500' }, // Low Warmth, High Comp
      { label: 'Child', x: 20, y: 20, color: 'text-amber-500' }, // High Warmth, Low Comp
      { label: 'Robot', x: 50, y: 90, color: 'text-slate-400' }, // Low Warmth, Mid Comp
  ];

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square md:aspect-video border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50 overflow-hidden p-6 group">
        
        {/* Quadrant Labels (Background) */}
        <div className="absolute top-2 right-2 text-[8px] text-emerald-500 font-bold uppercase opacity-60 text-right">Admired<br/>(Warm+Comp)</div>
        <div className="absolute top-2 left-2 text-[8px] text-amber-500 font-bold uppercase opacity-60">Sympathetic<br/>(Warm+LowComp)</div>
        <div className="absolute bottom-2 right-2 text-[8px] text-indigo-500 font-bold uppercase opacity-60 text-right">Envied<br/>(Cold+HighComp)</div>
        <div className="absolute bottom-2 left-2 text-[8px] text-slate-400 font-bold uppercase opacity-60">Distant<br/>(Cold+LowComp)</div>

        {/* Axes */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300 dark:bg-slate-700"></div>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-300 dark:bg-slate-700"></div>
        
        {/* Axis Labels */}
        <div className="absolute top-1/2 right-2 -translate-y-1/2 text-[9px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-900 px-1">Competence →</div>
        <div className="absolute left-1/2 top-2 -translate-x-1/2 text-[9px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-900 px-1">↑ Warmth</div>

        {/* Anchors (Context) */}
        {anchors.map((anchor, i) => (
            <div 
                key={i}
                className="absolute flex flex-col items-center justify-center transition-opacity duration-300 opacity-30 group-hover:opacity-100"
                style={{ left: `${anchor.x}%`, top: `${anchor.y}%`, transform: 'translate(-50%, -50%)' }}
            >
                <div className={`w-1.5 h-1.5 rounded-full mb-1 ${anchor.color.replace('text-', 'bg-')}`}></div>
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
      
      <div className="mt-4 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Social Perception</div>
          <div className="text-lg font-serif font-bold text-slate-800 dark:text-white leading-tight">
              {data.quadrant}
          </div>
          <div className="flex justify-center gap-2 mt-2">
              {data.descriptors.map(d => (
                  <span key={d} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] text-slate-600 dark:text-slate-300 uppercase font-bold">
                      {d}
                  </span>
              ))}
          </div>
          <p className="text-[10px] text-slate-400 mt-2 italic">Based on the Stereotype Content Model (Fiske et al., 2002)</p>
      </div>
    </div>
  );
};