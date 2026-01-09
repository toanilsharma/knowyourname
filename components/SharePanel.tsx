import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { NameAnalysis } from '../types';
import { LinguisticPassport } from './LinguisticPassport';

interface Props {
  data: NameAnalysis;
}

export const SharePanel: React.FC<Props> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState<string | null>(null);

  const generateSummary = () => {
    return `LINGUISTIC ANALYSIS: ${data.name}
--------------------------------
SHAPE BIAS: ${data.soundSymbolism.shapeCategory}
ARTICULATION: ${data.soundSymbolism.articulatoryPlace}
FLUENCY: ${data.psycholinguistics.fluencyDescription}
IPA DOMINANCE: ${data.dominantSound}

"Names influence perception — not destiny. We study the sound, not the soul."

Analyzed via KnowYourName.co.in`;
  };

  const handleCopy = () => {
    const text = generateSummary();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownloadImage = async (format: 'story' | 'square' | 'landscape') => {
    const element = document.getElementById(`passport-${format}`);
    if (!element) return;

    setGenerating(format);
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#0f172a',
        useCORS: true
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      const suffix = format === 'square' ? 'Instagram' : format === 'landscape' ? 'LinkedIn' : 'Passport';
      link.download = `KYN-${suffix}-${data.name}.png`;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
      alert('Could not generate image. Please try again.');
    } finally {
      setGenerating(null);
    }
  };

  return (
    <div className="mt-12 p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 text-center relative overflow-hidden">
      {/* Hidden Passport Renders for Capture */}
      <div style={{ position: 'absolute', top: 0, left: '-9999px' }}>
         <LinguisticPassport data={data} format="story" />
         <LinguisticPassport data={data} format="square" />
         <LinguisticPassport data={data} format="landscape" />
      </div>

      <h3 className="text-xl font-serif text-slate-800 dark:text-slate-200 mb-2">Share Your Identity</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 max-w-md mx-auto">
        Generate official visual exports for social media.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <button
          onClick={handleCopy}
          className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none ${
            copied 
              ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
              : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600'
          }`}
        >
          {copied ? "Copied" : "Copy Summary"}
        </button>

        <button
          onClick={() => handleDownloadImage('square')}
          disabled={generating !== null}
          className="px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white shadow-lg shadow-pink-900/20 disabled:opacity-50 flex-1 sm:flex-none"
        >
           {generating === 'square' ? (
             <span className="animate-pulse">Generating...</span>
           ) : (
             <>
               <span className="text-lg">📷</span>
               Instagram (Square)
             </>
           )}
        </button>

         <button
          onClick={() => handleDownloadImage('landscape')}
          disabled={generating !== null}
          className="px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-900/20 disabled:opacity-50 flex-1 sm:flex-none"
        >
           {generating === 'landscape' ? (
             <span className="animate-pulse">Generating...</span>
           ) : (
             <>
               <span className="text-lg">💼</span>
               LinkedIn (PNG)
             </>
           )}
        </button>
      </div>
       <div className="mt-4 flex justify-center">
            <button
                onClick={() => handleDownloadImage('story')}
                disabled={generating !== null}
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 underline decoration-dotted"
            >
                Download Full Story Format (Vertical)
            </button>
       </div>
    </div>
  );
};