'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'outlined' | 'gradient';
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    
    const baseStyles = "rounded-3xl overflow-hidden transition-all duration-300";
    
    const variants = {
      default: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",
      glass: "glass-card",
      outlined: "bg-transparent border border-slate-200 dark:border-slate-800",
      gradient: "bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800"
    };

    const hoverStyles = hoverEffect ? "hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 dark:hover:border-blue-400/30" : "";

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export { Card };
