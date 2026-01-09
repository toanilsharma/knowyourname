import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-12 animate-fade-in-up">
      <SEO 
        title="Scientific Methodology" 
        description="Learn how we analyze names using phonetic data, QWERTY heatmaps, and sound symbolism theories."
      />
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono mb-4 border border-blue-200 dark:border-blue-500/20">
          TRANSPARENCY REPORT
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Scientific Methodology</h1>
        <p className="text-xl font-serif italic text-slate-800 dark:text-slate-200 border-l-4 border-emerald-500 pl-4 py-2">
          "Names influence perception — not destiny. We study the sound, not the soul."
        </p>
        <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-light">
          We believe in radical transparency. Here is exactly how our algorithms work, what data we use, and the limits of our claims.
        </p>
      </header>
      
      {/* 1. Corpus Sources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">01.</span> Corpus Data Sources
        </h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
            Our analysis engine does not query a backend database of names. Instead, it uses <strong>embedded linguistic dictionaries</strong> compressed for client-side performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">CMU Pronouncing Dictionary</h3>
              <p className="text-sm">Used for mapping graphemes (letters) to phonemes (sounds) to determine articulatory effort.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Google Books Ngram Corpus</h3>
              <p className="text-sm">Provides frequency data for English bigrams (letter pairs) to calculate "Phonotactic Probability" (Vitevitch & Luce).</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">IPA (International Phonetic Alphabet)</h3>
              <p className="text-sm">The standard framework used to categorize sounds into Plosives, Fricatives, and Sonorants.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Jakobson’s Universals</h3>
              <p className="text-sm">Linguistic framework for determining "Global Robustness" based on cross-language sound availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Measured vs Simulated */}
      <section className="space-y-6">
         <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
            <span className="text-emerald-500">02.</span> Measured vs. Simulated
         </h2>
         <p className="leading-relaxed">
            It is crucial to distinguish between hard mathematical properties of a name and heuristic simulations of perception.
         </p>
         
         <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                    <tr>
                        <th className="p-4">Feature</th>
                        <th className="p-4">Type</th>
                        <th className="p-4">Accuracy</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="bg-white dark:bg-slate-900/50">
                        <td className="p-4 font-medium">Keyboard Ergonomics</td>
                        <td className="p-4 text-emerald-600 dark:text-emerald-400">Measured</td>
                        <td className="p-4 opacity-70">100%. Based on fixed QWERTY layout distance.</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                        <td className="p-4 font-medium">Phonetic Counts</td>
                        <td className="p-4 text-emerald-600 dark:text-emerald-400">Measured</td>
                        <td className="p-4 opacity-70">High. Maps letters to standard IPA classes.</td>
                    </tr>
                    <tr className="bg-white dark:bg-slate-900/50">
                        <td className="p-4 font-medium">Gender Probability</td>
                        <td className="p-4 text-amber-600 dark:text-amber-400">Statistical Model</td>
                        <td className="p-4 opacity-70">~85%. Based on historical naming trends (Barry & Harper).</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                        <td className="p-4 font-medium">Synesthesia (Colors)</td>
                        <td className="p-4 text-purple-600 dark:text-purple-400">Simulated</td>
                        <td className="p-4 opacity-70">Subjective. Simulates common grapheme-color associations found in studies (Simner et al.).</td>
                    </tr>
                     <tr className="bg-white dark:bg-slate-900/50">
                        <td className="p-4 font-medium">Personality (Bouba/Kiki)</td>
                        <td className="p-4 text-purple-600 dark:text-purple-400">Heuristic</td>
                        <td className="p-4 opacity-70">Theoretical. Maps sound sharpness to abstract shape associations.</td>
                    </tr>
                </tbody>
            </table>
         </div>
      </section>

      {/* 3. What is NOT claimed */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
            <span className="text-red-500">03.</span> What We Do NOT Claim
        </h2>
        <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-lg space-y-4">
            <p>
                <strong>This is NOT a fortune-telling tool.</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li>We do <strong>not</strong> claim your name determines your destiny.</li>
                <li>We do <strong>not</strong> claim to predict your actual personality traits (e.g., introversion/extroversion).</li>
                <li>We do <strong>not</strong> use "Numerology" in the mystical sense. Our "metrics" are linguistic weights, not spiritual vibrations.</li>
            </ul>
            <p className="text-sm opacity-80 pt-2">
                <em>We analyze the "User Interface" of your name—how it is spoken, typed, and heard—not the "Soul" of the person behind it.</em>
            </p>
        </div>
      </section>

      <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="mb-6 text-slate-600 dark:text-slate-400">
            Open science builds better tools. 
        </p>
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
          ← Return to Analysis Lab
        </Link>
      </div>
    </div>
  );
};