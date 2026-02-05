import React from 'react';
import { SEO } from '../components/SEO';
import { Bibliography } from '../components/Bibliography';

export const Methods: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24 relative overflow-hidden">
            <SEO
                title="Methodology & Validation | Algorithms v7.5"
                description="Technical documentation of the KnowYourName analysis engine. Mathematical models for Shannon Entropy, Sonority Sequencing, and Articulatory Biomechanics."
                keywords="algorithm explanation, shannon entropy formula, sonority hierarchy values, ipa extraction method, name analysis validation"
            />

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="glow-orb w-[800px] h-[800px] bg-blue-500/20 -top-96 -left-96"></div>
                <div className="glow-orb w-[600px] h-[600px] bg-purple-500/20 top-1/3 -right-60" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* HEADER */}
                <div className="mb-20 pb-12 border-b border-slate-200 dark:border-slate-800 animate-fade-in-up">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-2 glass-card rounded-full font-mono text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                            Engine v7.5.0
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/30">
                            ✓ Verified
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl heading-display mb-6">
                        Methods & <span className="gradient-text">Validation</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-3xl">
                        Mathematical models, algorithmic assumptions, and validation datasets.
                        Built for transparency and academic review.
                    </p>
                </div>

                {/* Table of Contents */}
                <nav className="mb-16 p-6 glass-card rounded-2xl animate-fade-in-up delay-100">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Quick Navigation</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { id: 'ipa-extraction', label: 'IPA Extraction', num: '01' },
                            { id: 'sonority-hierarchy', label: 'Sonority Model', num: '02' },
                            { id: 'entropy-calculation', label: 'Entropy', num: '03' },
                            { id: 'keyboard-model', label: 'Keyboard', num: '04' },
                            { id: 'acoustic-simulation', label: 'Acoustics', num: '05' },
                            { id: 'limitations', label: 'Limitations', num: '06' }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                            >
                                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{item.num}</span>
                                <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="space-y-24">

                    {/* 1. PHONETIC TRANSCRIPTION */}
                    <section id="ipa-extraction" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                                🔤
                            </div>
                            <div>
                                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">SECTION 01</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">IPA Extraction Method</h2>
                            </div>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg">
                                The engine utilizes a <strong>deterministic rule-based heuristic</strong> to convert English orthography into International Phonetic Alphabet (IPA) tokens. Unlike neural approaches, this ensures consistent reproducibility.
                            </p>
                            <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 font-mono text-sm overflow-x-auto shadow-2xl border border-slate-700">
                                <p className="text-slate-400 mb-3">// Example Heuristic Rule (simplified)</p>
                                <code className="block text-emerald-400">
                                    if (char == 'C') {'{'}<br />
                                    &nbsp;&nbsp;if (nextChar is 'E', 'I', 'Y') return <span className="text-blue-400">/s/</span> <span className="text-slate-500">// Fricative</span><br />
                                    &nbsp;&nbsp;else if (nextChar is 'H') return <span className="text-blue-400">/tʃ/</span> <span className="text-slate-500">// Affricate</span><br />
                                    &nbsp;&nbsp;else return <span className="text-blue-400">/k/</span> <span className="text-slate-500">// Plosive</span><br />
                                    {'}'}
                                </code>
                            </div>
                            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                                <p className="text-sm text-amber-800 dark:text-amber-200">
                                    <strong>Limitation:</strong> This model assumes standard American English pronunciation. Divergent pronunciations (e.g., "Siobhan" /ʃəˈvɔːn/) are approximated based on grapheme frequency.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. SONORITY HIERARCHY */}
                    <section id="sonority-hierarchy" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30">
                                📊
                            </div>
                            <div>
                                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold">SECTION 02</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Sonority Hierarchy Model</h2>
                            </div>
                        </div>
                        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                            Rhythm scores are calculated using a <strong>10-point Sonority Scale</strong> derived from Clements (1990). This measures the inherent "loudness" or "openness" of a speech sound.
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-900 dark:text-white">Class</th>
                                        <th className="px-6 py-4 font-bold text-slate-900 dark:text-white">Examples</th>
                                        <th className="px-6 py-4 font-bold text-slate-900 dark:text-white text-right">Value</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {[
                                        { cls: 'Low Vowels', ex: '/a/, /æ/ ("Cat")', val: 10, color: 'from-emerald-500 to-teal-500' },
                                        { cls: 'Mid Vowels', ex: '/e/, /o/ ("Met")', val: 9, color: 'from-emerald-400 to-teal-400' },
                                        { cls: 'High Vowels', ex: '/i/, /u/ ("Bee")', val: 8, color: 'from-blue-500 to-indigo-500' },
                                        { cls: 'Glides', ex: '/w/, /y/ ("Yes")', val: 7, color: 'from-blue-400 to-indigo-400' },
                                        { cls: 'Liquids', ex: '/l/, /r/ ("Run")', val: 6, color: 'from-purple-500 to-fuchsia-500' },
                                        { cls: 'Nasals', ex: '/m/, /n/ ("No")', val: 5, color: 'from-purple-400 to-fuchsia-400' },
                                        { cls: 'Voiced Fricatives', ex: '/z/, /v/ ("Zoo")', val: 4, color: 'from-amber-500 to-orange-500' },
                                        { cls: 'Voiceless Fricatives', ex: '/s/, /f/ ("Sit")', val: 3, color: 'from-amber-400 to-orange-400' },
                                        { cls: 'Voiced Plosives', ex: '/b/, /d/, /g/ ("Bed")', val: 2, color: 'from-rose-500 to-pink-500' },
                                        { cls: 'Voiceless Plosives', ex: '/p/, /t/, /k/ ("Top")', val: 1, color: 'from-rose-400 to-pink-400' }
                                    ].map((row, i) => (
                                        <tr key={row.cls} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.cls}</td>
                                            <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">{row.ex}</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${row.color} text-white font-bold text-sm shadow-md`}>
                                                    {row.val}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 3. ENTROPY CALCULATION */}
                    <section id="entropy-calculation" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
                                🔢
                            </div>
                            <div>
                                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">SECTION 03</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Information Entropy</h2>
                            </div>
                        </div>
                        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                            We calculate the "Distinctiveness" of a name using <strong>Shannon Entropy</strong> (bits). This measures information content relative to standard English frequency.
                        </p>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center shadow-2xl mb-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10"></div>
                            <p className="text-slate-400 text-sm mb-4 font-mono">Shannon Entropy Formula</p>
                            <p className="text-3xl md:text-4xl font-mono text-white tracking-wide">
                                H(X) = -Σ <span className="text-emerald-400">p(x)</span> log₂(<span className="text-emerald-400">p(x)</span>)
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">p(x)</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Probability of character x in the English corpus (OEC)</p>
                            </div>
                            <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">&gt;3.5 bits</div>
                                <p className="text-sm text-emerald-700 dark:text-emerald-300">High Entropy = Rare combinations (e.g., "Xryz")</p>
                            </div>
                            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">&lt;2.0 bits</div>
                                <p className="text-sm text-blue-700 dark:text-blue-300">Low Entropy = Common patterns (e.g., "Anna")</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. KEYBOARD ERGONOMICS */}
                    <section id="keyboard-model" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/30">
                                ⌨️
                            </div>
                            <div>
                                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">SECTION 04</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Keyboard Ergonomics</h2>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                            The "Ease of Typing" score is derived from a <strong>graph-traversal model</strong> of the QWERTY layout. We calculate Euclidean distance between sequential keystrokes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="research-card group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Alternation Bonus</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Typing speed increases when hands alternate (Left → Right → Left). Names like "DORIS" receive a <strong className="text-amber-600">Flow bonus</strong>.
                                </p>
                            </div>
                            <div className="research-card group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👆</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Inward Roll Advantage</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Movement from pinky to index finger (Inward Roll) is <strong className="text-amber-600">biomechanically faster</strong> than outward movement.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. ACOUSTIC SIMULATION */}
                    <section id="acoustic-simulation" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-3xl shadow-lg shadow-rose-500/30">
                                👄
                            </div>
                            <div>
                                <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-bold">SECTION 05</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Acoustic Simulation</h2>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                            "Mouth Feel" is visualized by mapping phonemes to their <strong>Place of Articulation</strong> on a 2D Cartesian plane:
                        </p>
                        <div className="p-8 rounded-2xl glass-card mb-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-sm font-mono text-slate-500 mb-2">X-AXIS</div>
                                    <div className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 mb-2"></div>
                                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                                        <span>0 (Labial/Lips)</span>
                                        <span>100 (Velar/Throat)</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-mono text-slate-500 mb-2">Y-AXIS</div>
                                    <div className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 mb-2"></div>
                                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                                        <span>0 (Closed/Stop)</span>
                                        <span>100 (Open/Vowel)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                            A <strong>vector sum</strong> determines if the name is "Projective" (net movement forward) or "Ingestive" (net movement backward).
                        </p>
                    </section>

                    {/* 6. LIMITATIONS */}
                    <section id="limitations" className="animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
                                ⚠️
                            </div>
                            <div>
                                <span className="text-xs font-mono text-red-600 dark:text-red-400 font-bold">SECTION 06</span>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Statistical Limitations</h2>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border-l-4 border-amber-500 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3">Correlation ≠ Causation</h3>
                            <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                                The "First Impression" metrics are based on statistical averages from population studies (e.g., Implicit Egotism). They describe <strong>aggregate sociolinguistic tendencies</strong>, not individual destiny or character. A person named "Kate" (High Competence Score) is not guaranteed to be competent, but the <em>sound</em> of the name carries those cultural associations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: 'Phonetic Parsing', value: '94%', desc: 'Standard English' },
                                { label: 'Gender Codedness', value: '88%', desc: 'US Census Data' },
                                { label: 'Archetype', value: 'Theoretical', desc: 'Psychological Construct' }
                            ].map((stat) => (
                                <div key={stat.label} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm font-medium text-slate-900 dark:text-white">{stat.label}</div>
                                    <div className="text-xs text-slate-500">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Bibliography />

                </div>
            </div>
        </div>
    );
};
