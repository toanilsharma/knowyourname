import React from 'react';

interface Props {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: string;
}

export const AdUnit: React.FC<Props> = ({ slotId, format = 'auto', className = '', label = 'Advertisement' }) => {
  // In development, we show a placeholder.
  // In production, this would be the actual AdSense code.
  
  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-[728px] min-h-[90px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex items-center justify-center relative overflow-hidden">
        
        {/* AdSense Label (Compliance Requirement: Ads must be labeled) */}
        <span className="absolute top-0 left-0 bg-slate-200 dark:bg-slate-800 text-[9px] px-1 text-slate-500 uppercase tracking-widest">
            {label}
        </span>

        {/* This is where the actual <ins> tag goes for AdSense */}
        <div className="text-slate-400 text-xs font-mono p-4 text-center opacity-50">
            {slotId ? `Google AdSlot: ${slotId}` : 'AdSense Space Reserved (Auto-Layout)'}
        </div>
      </div>
    </div>
  );
};