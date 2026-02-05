import React from 'react';
import { PhoneticCounts } from '../types';

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
              <span className="font-medium text-slate-800 dark:text-slate-200">{cat.label} <span className="text-slate-500 text-xs">({cat.desc})</span></span>
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