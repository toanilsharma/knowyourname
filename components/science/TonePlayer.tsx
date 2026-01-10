import React, { useRef, useEffect } from 'react';

export const TonePlayer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

    const playTone = (freq: number, type: 'high' | 'low') => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);

        drawWave(type);
    };

    const drawWave = (type: 'high' | 'low') => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = type === 'high' ? '#3b82f6' : '#8b5cf6'; // Blue for high, Purple for low
        ctx.lineWidth = 3;

        const width = canvas.width;
        const height = canvas.height;
        const frequency = type === 'high' ? 0.3 : 0.05; // Visual frequency

        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x++) {
            const y = height / 2 + Math.sin(x * frequency) * (height / 3);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    };

    useEffect(() => {
        drawWave('high'); // Initial
    }, []);

    return (
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-xs text-white">OSCILLOSCOPE v1.0</div>

            <canvas ref={canvasRef} width={300} height={100} className="w-full h-32 bg-black/50 rounded-xl mb-6 border border-slate-700/50" />

            <div className="flex gap-4">
                <button
                    onClick={() => playTone(3000, 'high')}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg border border-slate-700 transition-colors group"
                >
                    <div className="text-xs font-mono text-slate-400 mb-1">HIGH FREQ (3000Hz)</div>
                    <div className="font-bold text-lg group-hover:text-blue-400">"EE"</div>
                </button>
                <button
                    onClick={() => playTone(200, 'low')}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg border border-slate-700 transition-colors group"
                >
                    <div className="text-xs font-mono text-slate-400 mb-1">LOW FREQ (200Hz)</div>
                    <div className="font-bold text-lg group-hover:text-purple-400">"OH"</div>
                </button>
            </div>
            <div className="mt-4 text-[10px] text-center text-slate-500 font-mono">
                *Click buttons to generate sine waves
            </div>
        </div>
    );
};
