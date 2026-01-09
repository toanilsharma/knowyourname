import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';

export const Science: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 animate-fade-in-up">
      <SEO 
        title="The Science of Sound Symbolism" 
        description="Explore the academic research behind Know Your Name. From the Bouba/Kiki effect to Nominative Determinism and Implicit Egotism."
        keywords="phonosemantics research, bouba kiki experiment, nominative determinism studies, implicit egotism, sound symbolism history"
      />

      {/* Hero Section */}
      <header className="text-center mb-20 border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-mono mb-4 border border-purple-200 dark:border-purple-500/20">
          RESEARCH HUB
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-6">
          The Physics of <span className="italic text-purple-600 dark:text-purple-400">Phonics</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
          Names aren't just labels. They are physical vibrations that trigger specific thoughts in the brain. 
          Here is the psychology behind why some names sound "round" and others sound "spiky."
        </p>
      </header>

      {/* 1. The Foundation: Bouba/Kiki */}
      <section id="bouba-kiki" className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌵 vs 🎈</span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">The Shape of Sound</span>
           </div>
           <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">The Bouba/Kiki Effect</h2>
           <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400">
             <p className="mb-4">
               This is the most famous experiment in linguistics. When people are shown two shapes—one <strong>spiky</strong> and one <strong>round</strong>—and asked to guess which is named "Kiki" and which is "Bouba," over <strong>95%</strong> of people agree:
             </p>
             <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>"Kiki"</strong> is the spike. The sound is sharp, quick, and happens at the back of the throat.</li>
                <li><strong>"Bouba"</strong> is the blob. The sound is low, round, and requires your lips to make a circle.</li>
             </ul>
             <p className="mb-4">
               <strong>Why it matters:</strong> Your name has a "shape." Names with K, T, P, and I (like <em>Kate</em> or <em>Trixie</em>) feel sharp, energetic, and precise. Names with B, M, L, and O (like <em>Molly</em> or <em>Leo</em>) feel round, soft, and approachable.
             </p>
           </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl flex justify-around items-center">
            {/* Visual simulation of Bouba/Kiki */}
            <div className="text-center">
                <svg width="120" height="120" viewBox="0 0 100 100" className="mb-4 mx-auto drop-shadow-lg">
                    <path d="M50 5 L60 35 L90 40 L65 60 L75 90 L50 75 L25 90 L35 60 L10 40 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="3" className="text-pink-500" />
                </svg>
                <div className="font-mono font-bold text-lg text-slate-900 dark:text-white">"Kiki"</div>
                <div className="text-xs text-slate-500 mt-1">Sharp • Quick • High</div>
            </div>
            <div className="text-center">
                <svg width="120" height="120" viewBox="0 0 100 100" className="mb-4 mx-auto drop-shadow-lg">
                    <path d="M50 10 C80 10, 90 30, 90 50 C90 80, 70 90, 50 90 C30 90, 10 80, 10 50 C10 20, 20 10, 50 10 Z" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500" />
                </svg>
                <div className="font-mono font-bold text-lg text-slate-900 dark:text-white">"Bouba"</div>
                <div className="text-xs text-slate-500 mt-1">Round • Slow • Low</div>
            </div>
        </div>
      </section>

      {/* 2. Sound Symbolism (Size) */}
      <section id="sound-size" className="mb-24 scroll-mt-24">
         <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🐭 vs 🐘</span>
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Frequency Code</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">Big Sounds vs. Small Sounds</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Did you know vowels have size? 
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        High-pitch vowels like <strong>'ee'</strong> (as in <em>teeny</em>, <em>feet</em>, <em>squeak</em>) naturally sound <strong>small, fast, and light</strong>.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Low-pitch vowels like <strong>'oh'</strong> and <strong>'ah'</strong> (as in <em>huge</em>, <em>large</em>, <em>humongous</em>) naturally sound <strong>big, heavy, and slow</strong>.
                        <br/><br/>
                        A name like <strong>"Tim"</strong> sounds smaller and quicker than a name like <strong>"Tom"</strong>, even though they are just one letter apart. Writers use this trick all the time (e.g., <em>Voldemort</em> uses deep, dark vowels to sound ominous).
                    </p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center space-y-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center gap-4">
                        <div className="text-3xl">🐁</div>
                        <div>
                            <div className="font-bold text-slate-900 dark:text-white">The "I" / "EE" Sound</div>
                            <div className="text-xs text-slate-500">Perceived as: Small, Fast, Bright</div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center gap-4">
                        <div className="text-3xl">🦍</div>
                        <div>
                            <div className="font-bold text-slate-900 dark:text-white">The "O" / "U" Sound</div>
                            <div className="text-xs text-slate-500">Perceived as: Large, Strong, Dark</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      <AdUnit slotId="science-middle" />

      {/* 3. Implicit Egotism */}
      <section id="implicit-egotism" className="mb-24 scroll-mt-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🪞</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Implicit Egotism</span>
                 </div>
                 <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">Why Dennis is a Dentist</h2>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    We all have a "Name-Letter Effect." Psychology studies show that humans unconsciously prefer things that remind them of themselves.
                 </p>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    This means people named <strong>L</strong>ouis are statistically more likely to live in St. <strong>L</strong>ouis. People named <strong>D</strong>ennis or <strong>D</strong>enise are disproportionately found in <strong>D</strong>entistry.
                    <br/><br/>
                    It sounds crazy, but the data (Pelham et al., 2002) backs it up. We trust sounds that are familiar to our own identity.
                 </p>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="bg-emerald-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-emerald-100 dark:border-slate-800 relative overflow-hidden">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 text-center uppercase text-sm tracking-wider">The Statistical Anomaly</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                            <span className="font-mono text-lg">Geoffrey</span>
                            <span className="text-slate-400">→</span>
                            <span className="font-bold text-emerald-600">Geo</span>logy
                        </div>
                        <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                            <span className="font-mono text-lg">Lawrence</span>
                            <span className="text-slate-400">→</span>
                            <span className="font-bold text-emerald-600">Law</span>yer
                        </div>
                        <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                            <span className="font-mono text-lg">Georgia</span>
                            <span className="text-slate-400">→</span>
                            <span className="font-bold text-emerald-600">Geo</span>rgia (State)
                        </div>
                    </div>
                    <div className="mt-4 text-[10px] text-center text-slate-400 italic">
                        Source: "Why Susie Sells Seashells by the Seashore" (2002)
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. The Name-Pronunciation Effect */}
      <section id="fluency" className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24">
         <div className="order-2 md:order-1 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-center">Brain Processing Speed</h3>
            <div className="space-y-6">
                <div className="relative">
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Simple Name (e.g. John)</span>
                        <span className="text-emerald-500">Fast</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-black h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[95%]"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Brain says: "Safe, Familiar, True"</p>
                </div>
                
                <div className="relative">
                    <div className="flex justify-between text-sm font-bold mb-1">
                        <span>Complex Name (e.g. Xyla)</span>
                        <span className="text-amber-500">Slow</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-black h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[40%]"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Brain says: "Unique, Risky, Exotic"</p>
                </div>
            </div>
         </div>
         <div className="order-1 md:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🧠</span>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Cognitive Fluency</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">The "Easy" Advantage</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                The human brain is lazy. It loves things that are easy to process.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Studies show that people with easier-to-pronounce names are often judged more positively and achieve higher status within groups more quickly. This is called <strong>Cognitive Fluency</strong>.
                <br/><br/>
                However, "difficult" names have their own power: they are more memorable and distinctive once learned.
            </p>
         </div>
      </section>

      {/* 5. Gender Acoustics */}
      <section id="gender-acoustics" className="mb-24 scroll-mt-24">
         <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">♀️♂️</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">Sociolinguistics</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Hidden Gender Code</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-3">Feminine Codes</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            Historically, names ending in vowels (especially 'a') or soft consonants (L, M, N) are perceived as feminine. These sounds ("Sonorants") flow continuously without stopping the breath.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-xs font-mono">Soph<strong>ia</strong></span>
                            <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-xs font-mono">Isabe<strong>ll</strong>e</span>
                            <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-xs font-mono">Oli<strong>v</strong>ia</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">Masculine Codes</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            Names ending in "Plosive" stops (K, T, D, P, G) are perceived as masculine. These sounds abruptly cut off the airflow, creating a sense of finality and hardness.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono">Jac<strong>k</strong></span>
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono">Rober<strong>t</strong></span>
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono">Davi<strong>d</strong></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Bibliography / Reference Library */}
      <section>
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            Academic Reference Library
        </h2>
        <div className="grid grid-cols-1 gap-6">
            {[
                {
                    title: "Synaesthesia: The prevalence of atypical cross-modal experiences",
                    authors: "Simner, J., et al.",
                    year: "2006",
                    journal: "Perception",
                    desc: "Established the statistical consistency of letter-color associations in the general population."
                },
                {
                    title: "Sound Symbolism",
                    authors: "Hinton, L., Nichols, J., & Ohala, J. J.",
                    year: "1994",
                    journal: "Cambridge University Press",
                    desc: "The definitive text on how phonemes carry inherent semantic weight across languages."
                },
                {
                    title: "The Name-Letter Effect in relation to self-esteem",
                    authors: "Koole, S. L., & Pelham, B. W.",
                    year: "2003",
                    journal: "Journal of Personality and Social Psychology",
                    desc: "Explored how our preference for our own initials guides subconscious decision making."
                },
                {
                    title: "Phonological probability and name desirability",
                    authors: "Vitevitch, M. S.",
                    year: "2002",
                    journal: "Journal of Memory and Language",
                    desc: "Mathematical analysis of how common sound clusters (phonotactics) affect the appeal of words."
                }
            ].map((paper, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 transition-colors">
                    <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">{paper.title}</h3>
                    <div className="text-sm text-slate-500 mt-1 mb-2">
                        {paper.authors} ({paper.year}) • <span className="italic">{paper.journal}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{paper.desc}</p>
                </div>
            ))}
        </div>
      </section>

      <div className="pt-12 mt-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <Link to="/" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
          Analyze Your Name with Science
        </Link>
      </div>

    </div>
  );
};