import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';
import { BoubaKikiExperiment } from '../components/science/BoubaKikiExperiment';
import { TonePlayer } from '../components/science/TonePlayer';
import { NameLetterEffect } from '../components/science/NameLetterEffect';
import { SonorityHierarchy } from '../components/science/SonorityHierarchy';

export const Science: React.FC = () => {
    const [activeSection, setActiveSection] = useState('intro');

    // Scrollytelling Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Dynamic Background classes
    let bgClass = "bg-slate-50 dark:bg-slate-950";
    if (activeSection === 'bouba-kiki') bgClass = "bg-white dark:bg-slate-950"; // Clean
    if (activeSection === 'sound-size') bgClass = "bg-slate-100 dark:bg-slate-900"; // Tech
    if (activeSection === 'gender-acoustics') bgClass = "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"; // Split

    return (
        <div className={`min-h-screen transition-colors duration-1000 ${bgClass} overflow-x-hidden`}>
            <SEO
                title="The Science of Sound Symbolism"
                description="Explore the interactive research behind Know Your Name. Test the Bouba/Kiki effect, hear Frequency Codes, and prove the Name-Letter effect."
                keywords="phonosemantics research, bouba kiki experiment, name letter effect, sonority hierarchy"
            />

            <div className="max-w-5xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 animate-fade-in-up">

                {/* Hero Section */}
                <section id="intro" className="text-center mb-32 min-h-[50vh] flex flex-col justify-center">
                    <div className="inline-block px-4 py-1.5 mx-auto bg-slate-900 text-white rounded-full text-xs font-mono mb-8 tracking-widest uppercase">
                        Quantified Linguistics Lab
                    </div>
                    <h1 className="text-5xl md:text-8xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight">
                        The Physics of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Phonics</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Names aren't just labels. They are physical vibrations. <br />
                        Interact with the experiments below to see how your brain processes sound.
                    </p>
                </section>

                {/* 1. Bouba/Kiki */}
                <section id="bouba-kiki" className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">Experiment 01</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Shape of Sound</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p className="mb-6">
                                In 1929, Wolfgang Köhler made a discovery that broke linguistics. He found that human brains link <strong>sounds</strong> to <strong>shapes</strong> naturally.
                            </p>
                            <p>
                                Take the test yourself. Look at the two shapes on the right. One is named "Kiki" and one is named "Bouba."
                            </p>
                            <p className="font-bold text-slate-900 dark:text-white mt-4">
                                Which is which?
                            </p>
                        </div>
                    </div>
                    <div>
                        <BoubaKikiExperiment />
                    </div>
                </section>

                {/* 2. Frequency Code */}
                <section id="sound-size" className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <TonePlayer />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">Experiment 02</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Size of Sound</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p className="mb-6">
                                Biologist John Ohala discovered the "Frequency Code." In nature, large animals make low sounds (Growls), and small animals make high sounds (Squeaks).
                            </p>
                            <p className="mb-6">
                                Your brain applies this to names. A high-frequency vowel like <strong>'EE'</strong> (3000Hz) feels small and fast. A low-frequency vowel like <strong>'OH'</strong> (200Hz) feels large and dominant.
                            </p>
                            <p>
                                Click the buttons to hear the raw frequency difference your brain detects instantly.
                            </p>
                        </div>
                    </div>
                </section>

                <AdUnit slotId="science-mid" label="Audio Equipment Sponsored" />

                {/* 3. Name-Letter Effect */}
                <section id="implicit-egotism" className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2 block">Experiment 03</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Name-Letter Effect</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p className="mb-6">
                                We originally thought this was "Nominative Determinism" (people choosing careers like 'Dentist' because they are named 'Dennis').
                            </p>
                            <p className="mb-6">
                                While careers are debated, the <strong>Preference Effect</strong> is robust. Humans possess "Implicit Egotism"—we trust brands, places, and partners that share our initials.
                            </p>
                            <p>
                                Type your initial to see what marketing algorithms predict you will buy.
                            </p>
                        </div>
                    </div>
                    <div>
                        <NameLetterEffect />
                    </div>
                </section>

                {/* 4. Sonority / Gender */}
                <section id="gender-acoustics" className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <SonorityHierarchy />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2 block">Experiment 04</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Sonority Hierarchy</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p className="mb-6">
                                Linguists rank sounds by "Sonority"—how loud and open they are.
                            </p>
                            <p className="mb-6">
                                Names high on the pyramid (Vowels/Glides) are coded as "Soft Power" (often associated with femininity). Names low on the pyramid (Stops) are coded as "Hard Power" (often associated with masculinity).
                            </p>
                            <p>
                                This is why "Lola" (Liquids/Vowels) feels fluid, while "Kate" (Stops) feels precise.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-24 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-2xl font-serif font-bold mb-6">Ready to test your own data?</h3>
                    <Link to="/" className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                        Analyze My Name
                    </Link>
                </div>

            </div>
        </div>
    );
};