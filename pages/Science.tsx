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
        }, { threshold: 0.3 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Dynamic Background classes
    let bgClass = "bg-slate-50 dark:bg-slate-950";
    if (activeSection === 'cocktail-party') bgClass = "bg-slate-100 dark:bg-slate-900";
    if (activeSection === 'bouba-kiki') bgClass = "bg-white dark:bg-slate-950";
    if (activeSection === 'branding') bgClass = "bg-yellow-50 dark:bg-yellow-900/10";

    return (
        <div className={`min-h-screen transition-colors duration-1000 ${bgClass} overflow-x-hidden`}>
            <SEO
                title="The Science of Sound Symbolism & Naming"
                description="Why do you hear your name in a crowded room? Why are some names 'spiky' and others 'round'? Explore the neuroscience of nomenclature."
                keywords="cocktail party effect, bouba kiki effect, sound symbolism in branding, name letter effect, neuroscience of names"
            />

            <div className="max-w-4xl mx-auto px-4 py-24 text-slate-700 dark:text-slate-300 animate-fade-in-up">

                {/* Hero Section */}
                <section id="intro" className="text-center mb-40 min-h-[40vh] flex flex-col justify-center">
                    <div className="inline-block px-4 py-1.5 mx-auto bg-slate-900 text-white rounded-full text-xs font-mono mb-8 tracking-widest uppercase">
                        Quantified Linguistics Lab
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 dark:text-white mb-8 tracking-tight">
                        The Physics of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Phonics</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Your name is more than a social label. It is a physical acoustic event that triggers specific neural pathways in the human brain.
                    </p>
                </section>

                {/* 1. The Cocktail Party Effect */}
                <section id="cocktail-party" className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">Neuroscience 101</span>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">The "Cocktail Party" Effect</h2>
                            <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                <p>
                                    Imagine you are at a loud party. Hundreds of voices are mixing into a wall of noise. You can't distinguish a single word.
                                </p>
                                <p>
                                    Suddenly, from across the room, someone says <strong>your name</strong>. You hear it instantly and clearly. Why?
                                </p>
                                <p>
                                    This is the <strong>Reticular Activating System (RAS)</strong>. Your brain filters out 99% of sensory data, but it keeps your own name on a permanent "Must Process" whitelist. Your name is biologically prioritized over almost all other sounds.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
                            <div className="text-center relative z-10">
                                <div className="text-6xl mb-4">🧠</div>
                                <div className="font-mono text-sm opacity-70">RAS Filter: Active</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Bouba/Kiki */}
                <section id="bouba-kiki" className="mb-40">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">Experiment 01</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">The Shape of Sound</h2>
                        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                            In 1929, Wolfgang Köhler broke linguistics by proving that humans "see" sounds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                Look at the interactive tool on the right. There are two shapes. One is named <strong>"Bouba"</strong> and one is named <strong>"Kiki"</strong>.
                            </p>
                            <p>
                                95% of people—regardless of language, culture, or age—agree on which is which.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Bouba:</strong> Uses round vowels (O, U) and soft consonants (B, M). The mouth makes a circle to say it. The brain maps this to round visual shapes.</li>
                                <li><strong>Kiki:</strong> Uses sharp vowels (I, E) and hard stops (K, T). The tongue creates a jagged interruption in airflow. The brain maps this to spikey shapes.</li>
                            </ul>
                        </div>
                        <div>
                            <BoubaKikiExperiment />
                        </div>
                    </div>
                </section>

                <AdUnit slotId="science-mid" label="Audio Tech" />

                {/* 3. Branding Secrets */}
                <section id="branding" className="mb-40">
                    <div className="bg-slate-900 text-slate-300 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-6">The Billion-Dollar Secret</h2>
                                <div className="space-y-4 text-lg font-light">
                                    <p>
                                        Major corporations don't name products by accident. They use <strong>Phonosemantics</strong>.
                                    </p>
                                    <p>
                                        A camera company wants to sound precise, mechanical, and fast. They chose the hard "K" sounds: <strong>Kodak</strong>. It mimics the shutter click.
                                    </p>
                                    <p>
                                        A soap company wants to sound soft and biological. They chose the voiced "V" and liquid "L": <strong>Dove</strong>.
                                    </p>
                                    <p className="text-amber-400 font-bold mt-4">
                                        Your name carries these same hidden cues. Is your name a "Kodak" (Competent) or a "Dove" (Warm)?
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-2">IKEA</div>
                                    <div className="text-xs uppercase tracking-widest text-white/60">Effectiveness</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>Chanel</div>
                                    <div className="text-xs uppercase tracking-widest text-white/60">Sophistication</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-2">Twitch</div>
                                    <div className="text-xs uppercase tracking-widest text-white/60">Speed</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-2">Hulu</div>
                                    <div className="text-xs uppercase tracking-widest text-white/60">Simplicity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Frequency Code */}
                <section id="frequency-code" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <TonePlayer />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">Experiment 02</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">The Size of Sound</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                Why do we call a small thing a "bit" or "mini" and a large thing "humongous" or "large"?
                            </p>
                            <p>
                                Biologist John Ohala discovered the <strong>Frequency Code</strong>. In the wild, large animals have large vocal tracts and make deep, low-frequency sounds (Roars). Small animals make high-pitched sounds (Squeaks).
                            </p>
                            <p>
                                We instinctively respect low-frequency vowels (like "Oh" and "Ah") as authoritative, while high-frequency vowels (like "Ee" and "Ih") are perceived as harmless or cute.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Name-Letter Effect */}
                <section id="implicit-egotism" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2 block">Experiment 03</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">Implicit Egotism</h2>
                        <div className="prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                Do you live in a city that starts with the same letter as your name? Are you more likely to buy a Toyota if your name is Tom?
                            </p>
                            <p>
                                Statistically, yes. This is <strong>Implicit Egotism</strong>. Because most people have positive self-esteem, they unconsciously prefer things that remind them of themselves—specifically their initials.
                            </p>
                            <p>
                                This "Name-Letter Effect" influences everything from who we marry to the street we choose to live on.
                            </p>
                        </div>
                    </div>
                    <div>
                        <NameLetterEffect />
                    </div>
                </section>

                {/* 6. Sonority Hierarchy */}
                <section id="sonority" className="mb-40">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2 block">Experiment 04</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">The Sonority Pyramid</h2>
                        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                            Linguists rank every sound by how much "energy" it carries. This creates the "texture" of your name.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <SonorityHierarchy />
                        </div>
                        <div className="order-1 lg:order-2 prose dark:prose-invert text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                <strong>High Sonority (Fluid):</strong> Vowels, Liquids (L, R), and Nasals (M, N). These sounds flow without obstruction. Names high in sonority (e.g., "Leona", "Julian") are perceived as diplomatic, artistic, and adaptable.
                            </p>
                            <p>
                                <strong>Low Sonority (Solid):</strong> Stops (P, K, T, D). These sounds explode from the mouth. Names high in obstructions (e.g., "Kate", "Jack") are perceived as decisive, logical, and strong.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Evolution of Identity */}
                <section id="evolution" className="mb-32 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6 text-center">The Evolution of Naming</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl mb-4">🏹</div>
                            <h3 className="font-bold mb-2">The Functional Era</h3>
                            <p className="text-sm opacity-70">
                                Surnames like "Smith", "Cooper", "Baker" described what you <em>did</em> for the tribe.
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl mb-4">⛪</div>
                            <h3 className="font-bold mb-2">The Religious Era</h3>
                            <p className="text-sm opacity-70">
                                Names like "John", "Mohammed", "Mary" signaled religious adherence and tradition.
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-bold mb-2">The Aesthetic Era</h3>
                            <p className="text-sm opacity-70">
                                Today, names are chosen for <em>sound</em> and <em>vibe</em>. The rise of "Liquid Names" (Liam, Noah) proves we now prioritize acoustics over tradition.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-12 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-2xl font-serif font-bold mb-6">What does your name say about you?</h3>
                    <Link to="/" className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                        Analyze My Name
                    </Link>
                </div>

            </div>
        </div>
    );
};