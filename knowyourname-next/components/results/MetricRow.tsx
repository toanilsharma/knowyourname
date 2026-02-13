'use client';

import React from 'react';
import { Info } from 'lucide-react';

export const MetricRow: React.FC<{ label: string; value: string | number; subtext?: string; highlight?: boolean; tooltip?: string }> = ({ label, value, subtext, highlight, tooltip }) => (
  <div className="flex justify-between items-start py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-3 rounded-lg group relative">
    <div className="flex items-center gap-2">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider pt-1">{label}</span>
        {tooltip && (
            <div className="relative group/tooltip cursor-help mt-0.5">
                <Info className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 hover:text-indigo-500 transition-colors" />
                <div className="absolute bottom-full left-0 mb-2 w-64 p-4 bg-slate-900 dark:bg-white text-slate-100 dark:text-slate-900 text-xs rounded-xl shadow-xl hidden group-hover/tooltip:block z-50 leading-relaxed border border-slate-700 dark:border-slate-200 font-medium tracking-wide pointer-events-none">
                    {tooltip}
                </div>
            </div>
        )}
    </div>
    <div className="text-right">
      <span className={`font-mono text-lg ${highlight ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-slate-900 dark:text-slate-100 font-semibold'}`}>{value}</span>
      {subtext && <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-[150px] ml-auto leading-tight mt-1 font-medium">{subtext}</p>}
    </div>
  </div>
);
