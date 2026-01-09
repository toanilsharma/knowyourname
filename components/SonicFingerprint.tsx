import React, { useEffect, useRef, useState } from 'react';
import { NameAnalysis } from '../types';
import { useTheme } from '../App';

interface Props {
  data: NameAnalysis;
}

export const SonicFingerprint: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Accessibility Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Canvas Setup
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radiusBase = Math.min(width, height) * 0.35;
    const points = data.metrics.totalChars;
    const angleStep = (Math.PI * 2) / points;

    // Animation State
    let animationFrameId: number;
    let progress = 0; // For initial draw
    const startTime = performance.now();
    
    // Living State
    let phase = 0; // For breathing animation

    const draw = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      
      // Intro Animation
      if (progress < 1) {
          progress = prefersReducedMotion ? 1 : Math.min(elapsed / 1000, 1);
      }
      
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      // Breathing / Pulse (Disabled if reduced motion)
      if (!prefersReducedMotion) {
          phase += 0.05;
      }
      const breath = Math.sin(phase) * 2;
      const activityMult = isHovered && !prefersReducedMotion ? 2.5 : 1; 

      // Clear
      ctx.clearRect(0, 0, width, height);

      const visiblePoints = Math.ceil(points * easedProgress);

      if (points > 0) {
        ctx.beginPath();
        for (let i = 0; i <= points; i++) { 
          if (i > visiblePoints && i !== points) break;

          const index = i % points;
          const charCode = data.sanitizedName.charCodeAt(index) - 64; 
          
          // Organic variation
          const organicOffset = Math.sin(phase + index) * 2 * activityMult;
          const radiusVariation = (charCode / 26) * 40 + organicOffset; 
          
          const r = radiusBase + radiusVariation + (breath * (index % 2 === 0 ? 1 : -1));
          
          const x = centerX + Math.cos(index * angleStep - Math.PI/2) * r;
          const y = centerY + Math.sin(index * angleStep - Math.PI/2) * r;
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        if (progress === 1) ctx.closePath();

        // Style
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        if (theme === 'dark') {
          gradient.addColorStop(0, '#3b82f6'); // Blue 500
          gradient.addColorStop(1, '#10b981'); // Emerald 500
        } else {
          gradient.addColorStop(0, '#2563eb'); // Blue 600
          gradient.addColorStop(1, '#059669'); // Emerald 600
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.stroke();

        if (progress > 0.5) {
            ctx.fillStyle = theme === 'dark' 
                ? `rgba(59, 130, 246, ${0.1 * ((progress - 0.5) * 2)})` 
                : `rgba(37, 99, 235, ${0.05 * ((progress - 0.5) * 2)})`;
            ctx.fill();
        }
      }

      // Nodes
      for (let i = 0; i < visiblePoints && i < points; i++) {
        const charCode = data.sanitizedName.charCodeAt(i) - 64;
        const organicOffset = Math.sin(phase + i) * 2 * activityMult;
        const radiusVariation = (charCode / 26) * 40 + organicOffset;
        const r = radiusBase + radiusVariation + (breath * (i % 2 === 0 ? 1 : -1));
        const x = centerX + Math.cos(i * angleStep - Math.PI/2) * r;
        const y = centerY + Math.sin(i * angleStep - Math.PI/2) * r;

        // Intro Scale
        const nodeScale = progress > (i/points) ? Math.min(1, (progress - (i/points))*5) : 0;
        
        if (nodeScale > 0) {
            ctx.beginPath();
            ctx.arc(x, y, 4 * nodeScale, 0, Math.PI * 2);
            ctx.fillStyle = theme === 'dark' ? '#f8fafc' : '#1e293b';
            ctx.fill();
            
            // Vowels get a glow ring
            if (['A','E','I','O','U'].includes(data.sanitizedName[i])) {
              ctx.beginPath();
              ctx.arc(x, y, 8 * nodeScale + (Math.sin(phase*2) * 2), 0, Math.PI * 2);
              ctx.strokeStyle = theme === 'dark' ? 'rgba(251, 191, 36, 0.6)' : 'rgba(217, 119, 6, 0.6)'; 
              ctx.lineWidth = 1;
              ctx.stroke();
            }
        }
      }

      // Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5 + Math.sin(phase)*2, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'dark' ? '#475569' : '#cbd5e1';
      ctx.fill();

      // Only loop if not reduced motion, or if initial animation isn't done
      if (!prefersReducedMotion || progress < 1) {
          animationFrameId = requestAnimationFrame(draw);
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameId);
  }, [data, theme, isHovered]);

  return (
    <div 
        className="flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-colors duration-300 cursor-crosshair group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-xs font-serif tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4 flex items-center gap-2">
          Geometric Fingerprint
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </h4>
      <canvas 
        ref={canvasRef} 
        width={240} 
        height={240} 
        className="w-[200px] h-[200px]"
        role="img"
        aria-label={`Geometric fingerprint visualization for ${data.name}. A living polygon with ${data.metrics.totalChars} points.`}
      />
      <div className="mt-4 text-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">
          {data.metrics.totalChars} Points • {data.structure.isSymmetrical ? 'Symmetrical' : 'Asymmetrical'}
        </p>
        <div className="mt-2 text-[9px] text-slate-400 uppercase tracking-widest border-t border-slate-200 dark:border-slate-700/50 pt-2">
           Status: Active Bio-Rhythm
        </div>
      </div>
    </div>
  );
};