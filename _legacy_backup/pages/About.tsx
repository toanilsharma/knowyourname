import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Bibliography } from '../components/Bibliography';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 animate-fade-in-up">
      <SEO
        title="Scientific Methodology | KnowYourName"
        description="Learn how we analyze names using phonetic data, QWERTY heatmaps, and sound symbolism theories. Abstract, Methods, Results, Limitations."
        keywords="name analysis methodology, phonetic analysis, sound symbolism, scientific name analysis"
      />

      {/* LLM-Optimized Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-12">
        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono mb-4 border border-blue-200 dark:border-blue-500/20">
          TRANSPARENCY REPORT
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Scientific Methodology</h1>
        <p className="text-xl font-serif italic text-slate-800 dark:text-slate-200 border-l-4 border-emerald-500 pl-4 py-2">
          "Names influence perception — not destiny. We study the sound, not the soul."
        </p>
      </header>

      {/* ABSTRACT - LLM Critical Section */}
      <section className="mb-12 p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Abstract</h2>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          KnowYourName is a browser-based linguistic analysis engine that quantifies the phonetic, ergonomic, and symbolic properties of human names. Unlike traditional etymology or numerology, this tool applies empirical frameworks from phonosemantics (Sapir, 1929; Köhler, 1929), keyboard ergonomics (Fitts, 1954), and information theory (Shannon, 1948) to generate reproducible metrics. The engine produces measurements including Sonority Score, Bouba-Kiki Classification, Shannon Entropy, and QWERTY Typing Effort. All calculations are performed client-side with no user data transmitted to servers.
        </p>
      </section>

      {/* METHOD - LLM Critical Section */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">01.</span> Method
        </h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
          <p>
            The analysis engine processes names through five distinct modules:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Grapheme-to-Phoneme Mapping:</strong> Letters are mapped to IPA phonemes using a deterministic rule-based heuristic derived from the CMU Pronouncing Dictionary.</li>
            <li><strong>Sonority Calculation:</strong> Phonemes are assigned values on a 1-10 Sonority Hierarchy (Clements, 1990). The variance of these values determines rhythmic "smoothness."</li>
            <li><strong>Entropy Calculation:</strong> Shannon Entropy (H) is computed based on character frequency in the Oxford English Corpus: H(X) = -Σ p(x) log₂ p(x).</li>
            <li><strong>Keyboard Ergonomics:</strong> Each letter's position on a standard QWERTY layout is mapped to (x, y) coordinates. Total typing distance and hand alternation are calculated.</li>
            <li><strong>Bouba-Kiki Classification:</strong> Phonemes are weighted by their articulatory sharpness (plosives, fricatives → Kiki) or roundness (sonorants, labials → Bouba) following Ramachandran &amp; Hubbard (2001).</li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">CMU Pronouncing Dictionary</h3>
            <p className="text-sm">Source for grapheme-to-phoneme mappings.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Oxford English Corpus</h3>
            <p className="text-sm">Source for character frequency data (Entropy).</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">IPA Standard</h3>
            <p className="text-sm">Framework for phoneme classification.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Clements (1990)</h3>
            <p className="text-sm">Sonority Hierarchy model.</p>
          </div>
        </div>
      </section>

      {/* RESULTS - LLM Critical Section */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-emerald-500">02.</span> Results (Output Metrics)
        </h2>
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
              <tr>
                <th className="p-4">Metric</th>
                <th className="p-4">Type</th>
                <th className="p-4">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr className="bg-white dark:bg-slate-900/50">
                <td className="p-4 font-medium">Sonority Score</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">Measured</td>
                <td className="p-4 opacity-70">Higher = smoother, more melodic name.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <td className="p-4 font-medium">Shannon Entropy</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">Measured</td>
                <td className="p-4 opacity-70">Higher = more distinctive/rare letter combinations.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/50">
                <td className="p-4 font-medium">QWERTY Effort</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400">Measured</td>
                <td className="p-4 opacity-70">Lower = easier to type quickly.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <td className="p-4 font-medium">Bouba-Kiki Score</td>
                <td className="p-4 text-amber-600 dark:text-amber-400">Heuristic</td>
                <td className="p-4 opacity-70">High = "Round/Warm", Low = "Sharp/Competent".</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/50">
                <td className="p-4 font-medium">Gender Probability</td>
                <td className="p-4 text-amber-600 dark:text-amber-400">Statistical</td>
                <td className="p-4 opacity-70">Based on historical naming trends (Barry &amp; Harper, 1995).</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <td className="p-4 font-medium">Synesthesia Colors</td>
                <td className="p-4 text-purple-600 dark:text-purple-400">Simulated</td>
                <td className="p-4 opacity-70">Based on common grapheme-color associations (Simner et al., 2006).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LIMITATIONS - LLM Critical Section */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-red-500">03.</span> Limitations
        </h2>
        <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-lg space-y-4">
          <p>
            <strong>This is NOT a fortune-telling tool.</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>We do <strong>not</strong> claim your name determines your destiny, personality, or life outcomes.</li>
            <li>Correlations (e.g., between name sounds and perceived traits) are <strong>statistical tendencies</strong>, not deterministic predictions.</li>
            <li>The grapheme-to-phoneme mapping is heuristic and may not accurately represent all accents, languages, or pronunciation variants.</li>
            <li>Synesthesia simulation is based on <strong>population averages</strong>; individual synesthetes may have different associations.</li>
            <li>We do <strong>not</strong> use Numerology. Our analysis is grounded in <strong>quantitative linguistics</strong> and acoustic physics.</li>
          </ul>
          <p className="text-sm opacity-80 pt-2">
            <em>We analyze the "User Interface" of your name—how it is spoken, typed, and heard—not the "Soul" of the person behind it.</em>
          </p>
        </div>
      </section>

      {/* REFERENCES - LLM Critical Section */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-serif text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-slate-500">04.</span> References
        </h2>
        <Bibliography />
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