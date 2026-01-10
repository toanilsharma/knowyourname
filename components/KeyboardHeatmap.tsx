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
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ],
  AZERTY: [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N']
  ],
  QWERTZ: [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Y', 'X', 'C', 'V', 'B', 'N', 'M']
  ],
  DVORAK: [
    ['P', 'Y', 'F', 'G', 'C', 'R', 'L'],
    ['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S'],
    ['Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z']
  ],
  COLEMAK: [
    ['Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y'],
    ['A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O'],
    ['Z', 'X', 'C', 'V', 'B', 'K', 'M']
  ]
};

// Coordinate mapping helper (simple grid approx)
const getKeyCoordinates = (key: string, layout: string[][]) => {
  for (let r = 0; r < layout.length; r++) {
    const row = layout[r];
    const index = row.indexOf(key);
    if (index !== -1) {
      // Offset rows slightly for realism
      const xOffset = r * 0.4;
      return { x: index + xOffset, y: r };
    }
  }
  return null;
};

export const KeyboardHeatmap: React.FC<Props> = ({ data: initialData, name }) => {
  const [activeLayout, setActiveLayout] = useState('QWERTY');

  // Recalculate stats based on active layout
  const stats = useMemo(() => {
    if (activeLayout === 'QWERTY') return initialData;
    return calculateKeyboardStats(name, activeLayout);
  }, [activeLayout, name, initialData]);

  const rows = LAYOUTS[activeLayout];

  // Calculate constellation path
  const keySize = 40; // Base unit for SVG
  const gap = 10;

  const getSVGCoords = (key: string) => {
    const coords = getKeyCoordinates(key, rows);
    if (!coords) return null;
    return {
      x: coords.x * 50 + 25, // Center of key
      y: coords.y * 50 + 25
    };
  };

  const pathPoints = name.toUpperCase().replace(/[^A-Z]/g, '').split('').map(char => getSVGCoords(char)).filter(Boolean) as { x: number, y: number }[];
  const pathString = pathPoints.map(p => `${p.x},${p.y}`).join(' ');

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

      {/* Visual Keyboard & Constellation */}
      <div className="relative bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden">

        {/* SVG Overlay for Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox={`0 0 ${rows[0].length * 50} ${rows.length * 55 + 20}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="lineChoice" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
            </marker>
          </defs>
          <polyline
            points={pathString}
            fill="none"
            stroke="url(#lineChoice)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse-slow"
            markerEnd="url(#arrow)"
          />
          {/* Dots at each point */}
          {pathPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
          ))}
        </svg>

        <div className="flex flex-col gap-1.5 items-center relative z-10 select-none">
          {rows.map((row, rIndex) => (
            <div key={rIndex} className="flex gap-1.5">
              {row.map(key => {
                const count = stats.keysPressed[key] || 0;
                const isActive = count > 0;

                return (
                  <div
                    key={key}
                    className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-[10px] md:text-sm font-bold transition-all duration-300
                        ${isActive
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-110 ring-2 ring-blue-500/50'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
                      }
                    `}
                  >
                    {key}
                    {isActive && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center">{count > 1 ? count : ''}</span>}
                  </div>
                );
              })}
            </div>
          ))}
          {/* Spacebar */}
          <div className="w-48 h-8 bg-slate-200 dark:bg-slate-800 rounded-lg mt-1 opacity-50"></div>
        </div>
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
            <div className="h-full bg-indigo-500" style={{ width: `${(stats.leftHandCount / (stats.leftHandCount + stats.rightHandCount || 1)) * 100}%` }}></div>
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-500">Right Hand</span>
            <span className="font-mono">{stats.rightHandCount}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${(stats.rightHandCount / (stats.leftHandCount + stats.rightHandCount || 1)) * 100}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};