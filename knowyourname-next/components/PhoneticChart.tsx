import React from 'react';
import { PhoneticCounts } from '@/lib/types';

interface Props {
  data: PhoneticCounts;
  totalConsonants: number;
}

export const PhoneticChart: React.FC<Props> = ({ data, totalConsonants }) => {
  const categories = [
    { label: 'Plosives', key: 'plosives' as keyof PhoneticCounts, desc: 'K, T, D, B, P, G', color: 'bg-rose-500' },
    { label: 'Fricatives', key: 'fricatives' as keyof PhoneticCounts, desc: 'S, F, V, Z', color: 'bg-amber-500' },
    { label: 'Nasals', key: 'nasals' as keyof PhoneticCounts, desc: 'M, N', color: 'bg-emerald-500' },
    { label: 'Liquids', key: 'liquids' as keyof PhoneticCounts, desc: 'L, R', color: 'bg-blue-500' },
  ];

  if (totalConsonants === 0) {
    return <div className="text-center text-slate-500 italic py-4">No consonantal phonetic data available.</div>;
  }

  return (
    <div className="space-y-4">
      {categories.map((cat) => {
        const count = data[cat.key];
        const percentage = totalConsonants > 0 ? (count / totalConsonants) * 100 : 0;

        return (
          <div key={cat.key} className="relative">
            <div className="flex justify-between text-sm mb-1">
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-slate-800 dark:text-slate-200">{cat.label} <span className="text-slate-500 text-xs">({cat.desc})</span></span>
                <div className="group/tooltip relative flex items-center justify-center w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[8px] cursor-help font-bold">
                  ?
                  <div className="absolute top-full left-0 mt-2 w-48 p-2 z-[60] bg-slate-900 text-white text-[10px] leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all pointer-events-none text-left font-normal normal-case tracking-normal">
                    <div className="absolute -top-1 left-2 w-2 h-2 bg-slate-900 rotate-45"></div>
                    {cat.key === 'plosives' && <><span className="block mb-1">Hard, sharp stops of airflow that create the "Kiki" effect.</span><span className="block text-[9px] text-slate-400 italic">Historically associated with dominant, fast-moving linguistic evolution.</span></>}
                    {cat.key === 'fricatives' && <><span className="block mb-1">Continuous friction sounds that add linguistic texture.</span><span className="block text-[9px] text-slate-400 italic">Emerged largely after agriculture changed the human overbite (hunting to farming).</span></>}
                    {cat.key === 'nasals' && <><span className="block mb-1">Soft, resonant sounds contributing to acoustic "roundness" (Bouba effect).</span><span className="block text-[9px] text-slate-400 italic">Universal across almost all primitive human languages.</span></>}
                    {cat.key === 'liquids' && <><span className="block mb-1">Flowing sounds that significantly increase rhythmic sonority.</span><span className="block text-[9px] text-slate-400 italic">Often the last phonetic class children naturally acquire.</span></>}
                  </div>
                </div>
              </div>
              <span className="font-mono text-slate-600 dark:text-slate-300">{count}</span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${cat.color} transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};