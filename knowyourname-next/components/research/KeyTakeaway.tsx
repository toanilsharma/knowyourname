import React from 'react';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KeyTakeawayProps {
    title?: string;
    children: React.ReactNode;
    gradient?: string;
}

export const KeyTakeaway: React.FC<KeyTakeawayProps> = ({ 
    title = "Key Insight", 
    children,
    gradient = "from-amber-200 to-yellow-200 dark:from-amber-900/30 dark:to-yellow-900/30"
}) => {
    return (
        <div className={cn("my-10 p-8 rounded-2xl relative overflow-hidden bg-gradient-to-br", gradient)}>
            <div className="relative z-10 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
                    <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-amber-200 mb-2 mt-2">
                        {title}
                    </h3>
                    <div className="text-lg font-medium text-amber-900 dark:text-amber-100 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
            
            {/* Visual Flair */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />
        </div>
    );
};
