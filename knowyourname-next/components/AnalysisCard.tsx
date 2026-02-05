import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  info?: string;
  variant?: 'default' | 'elemental' | 'numerology';
  gradient?: string;
  method?: string;
  confidence?: 'High' | 'Medium' | 'Low';
}

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative flex items-center ml-2 cursor-help z-20">
    <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 text-slate-400 text-[10px] font-serif italic flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 hover:border-emerald-500 transition-colors">
      i
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 dark:bg-slate-800 text-slate-200 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none text-center leading-relaxed border border-slate-700">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
    </div>
  </div>
);

export const AnalysisCard: React.FC<Props> = ({ 
  title, children, className = '', icon, info, variant = 'default', gradient,
  method, confidence 
}) => {
  const isSpecial = variant !== 'default';
  
  return (
    <div className={`
      relative overflow-hidden rounded-xl p-6 md:p-8 transition-all duration-300
      ${isSpecial ? 'text-white shadow-xl' : 'glass-panel'}
      ${className}
    `}>
      {isSpecial && gradient && (
         <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 -z-10`}></div>
      )}
      
      <div className={`mb-6 pb-4 border-b flex flex-col gap-2 ${isSpecial ? 'border-white/20' : 'border-slate-200 dark:border-slate-700/50'}`}>
          <h3 className={`text-xl md:text-2xl font-serif flex items-center ${isSpecial ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
            {icon && <span className={`${isSpecial ? 'text-white/80' : 'text-blue-500 dark:text-blue-400 opacity-80'} mr-3`}>{icon}</span>}
            {title}
            {info && !isSpecial && <Tooltip text={info} />}
            {info && isSpecial && (
               <div className="group relative flex items-center ml-2 cursor-help">
                <div className="w-4 h-4 rounded-full border border-white/40 text-white/60 text-[10px] font-serif italic flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors">
                  i
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-black/90 text-white/90 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none text-center leading-relaxed border border-white/10">
                  {info}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black/90"></div>
                </div>
              </div>
            )}
          </h3>

          {/* Scientific Credibility Metadata */}
          {(method || confidence) && (
             <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] uppercase tracking-widest font-mono ${isSpecial ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'}`}>
                {method && (
                  <span className="flex items-center gap-1">
                    Method: <span className={isSpecial ? 'text-white' : 'text-slate-600 dark:text-slate-300'}>{method}</span>
                  </span>
                )}
                {confidence && (
                  <span className="flex items-center gap-1">
                    Confidence: 
                    <span className={`font-bold ${
                      isSpecial 
                        ? 'text-white' 
                        : confidence === 'High' 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : confidence === 'Medium' 
                                ? 'text-amber-600 dark:text-amber-400' 
                                : 'text-slate-500'
                    }`}>
                      {confidence}
                    </span>
                  </span>
                )}
             </div>
          )}
      </div>

      <div className={isSpecial ? 'text-white/90' : 'text-slate-700 dark:text-slate-300'}>
        {children}
      </div>
    </div>
  );
};

export const MetricRow: React.FC<{ label: string; value: string | number; subtext?: string; highlight?: boolean; tooltip?: string }> = ({ label, value, subtext, highlight, tooltip }) => (
  <div className="flex justify-between items-start py-3 border-b border-slate-200 dark:border-slate-700/30 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2 rounded group relative">
    <div className="flex items-center">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider pt-1">{label}</span>
        {tooltip && (
            <div className="ml-2">
                 <div className="relative group/tooltip cursor-help">
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-400 text-[9px] font-serif italic flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                      i
                    </div>
                    <div className="absolute bottom-full left-0 mb-2 w-56 p-2 bg-slate-900 dark:bg-slate-800 text-slate-200 text-[11px] rounded shadow-xl hidden group-hover/tooltip:block z-50 leading-snug border border-slate-700">
                        {tooltip}
                    </div>
                 </div>
            </div>
        )}
    </div>
    <div className="text-right">
      <span className={`font-mono text-lg ${highlight ? 'text-amber-600 dark:text-gold-400 font-bold' : 'text-slate-800 dark:text-slate-200'}`}>{value}</span>
      {subtext && <p className="text-xs text-slate-500 max-w-[200px] ml-auto leading-tight mt-1">{subtext}</p>}
    </div>
  </div>
);