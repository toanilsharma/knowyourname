import React, { useState, useMemo } from 'react';
import { KeyboardStats } from '../types';
import { calculateKeyboardStats } from '../logic/nameAnalysisEngine';

interface Props {
  data: KeyboardStats; // Original QWERTY data
  name: string; // To recalculate for other layouts
}

// Layout Visual Mappings
const LAYOUTS: Record<string, string[][]> = {
  QWERTY: [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M']
  ],
  AZERTY: [
    ['A','Z','E','R','T','Y','U','I','O','P'],
    ['Q','S','D','F','G','H','J','K','L','M'],
    ['W','X','C','V','B','N']
  ],
  QWERTZ: [
    ['Q','W','E','R','T','Z','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Y','X','C','V','B','N','M']
  ],
  DVORAK: [
    ['P','Y','F','G','C','R','L'],
    ['A','O','E','U','I','D','H','T','N','S'],
    ['Q','J','K','X','B','M','W','V','Z']
  ],
  COLEMAK: [
    ['Q','W','F','P','G','J','L','U','Y'],
    ['A','R','S','T','D','H','N','E','I','O'],
    ['Z','X','C','V','B','K','M']
  ]
};

export const KeyboardHeatmap: React.FC<Props> = ({ data: initialData, name }) => {
  const [activeLayout, setActiveLayout] = useState('QWERTY');

  // Recalculate stats based on active layout
  const stats = useMemo(() => {
      if (activeLayout === 'QWERTY') return initialData;
      return calculateKeyboardStats(name, activeLayout);
  }, [activeLayout, name, initialData]);

  const rows = LAYOUTS[activeLayout];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-2">
         <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Keyboard Layout</span>
            <select 
                value={activeLayout} 
                onChange={(e) => setActiveLayout(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border-none text-xs font-bold rounded py-1 px-2 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
            >
                {Object.keys(LAYOUTS).map(l => <option key={l} value={l}>{l}</option>)}
            </select>
         </div>
         <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{stats.balance}</span>
      </div>

      {/* Visual Keyboard */}
      <div className="flex flex-col gap-1.5 items-center bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
        {rows.map((row, rIndex) => (
          <div key={rIndex} className="flex gap-1.5">
            {row.map(key => {
              const count = stats.keysPressed[key] || 0;
              const isActive = count > 0;
              
              return (
                <div 
                  key={key}
                  className={`
                    w-7 h-7 md:w-8 md:h-8 rounded flex items-center justify-center text-[10px] md:text-xs font-bold transition-all duration-500
                    ${isActive 
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110 z-10' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
                    }
                  `}
                  style={{ opacity: isActive ? 1 : 0.5 }}
                >
                  {key}
                </div>
              );
            })}
          </div>
        ))}
        {/* Spacebar visualization */}
        <div className="w-48 h-6 bg-slate-200 dark:bg-slate-800 rounded mt-1 opacity-50"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 dark:bg-slate-800/20 p-3 rounded border border-slate-100 dark:border-slate-700/50">
           <p className="text-[10px] text-slate-500 uppercase mb-1">Rhythm Score</p>
           <div className="text-2xl font-serif text-slate-800 dark:text-white">{stats.alternationScore}<span className="text-sm text-slate-500 font-sans">/100</span></div>
           <p className="text-[10px] text-slate-500 mt-1">High score = satisfying "drumming" rhythm.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/20 p-3 rounded border border-slate-100 dark:border-slate-700/50 flex flex-col justify-center">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500">Left Hand</span>
                <span className="font-mono">{stats.leftHandCount}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-indigo-500" style={{ width: `${(stats.leftHandCount / (stats.leftHandCount + stats.rightHandCount || 1)) * 100}%`}}></div>
            </div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500">Right Hand</span>
                <span className="font-mono">{stats.rightHandCount}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${(stats.rightHandCount / (stats.leftHandCount + stats.rightHandCount || 1)) * 100}%`}}></div>
            </div>
        </div>
      </div>
    </div>
  );
};