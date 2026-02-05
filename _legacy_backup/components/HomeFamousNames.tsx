import React, { useState, useEffect } from 'react';

const FAMOUS_EXAMPLES = [
    {
        name: "Darth Vader",
        description: "The Sound of Evil",
        traits: ["Low Pitch", "Voiced D-V Stops", "Back Vowels"],
        analysis: "Deep, resonant vowels (ah/er) combined with 'voiced' stops (D/V) create a sense of heaviness and dominance. It sounds 'large' and 'menacing' purely by physics.",
        icon: "👺",
        color: "#ef4444"
    },
    {
        name: "Coca-Cola",
        description: "The Rhythm of Joy",
        traits: ["Alliteration", "Plosive K-C", "Symmetrical"],
        analysis: "Perfect trochaic rhythm (CO-ca CO-la). The hard 'K' sounds trigger dopamine (excitement) while the repeated vowels create an earworm effect.",
        icon: "🥤",
        color: "#f43f5e"
    },
    {
        name: "Sephora",
        description: "Sensory Luxury",
        traits: ["Fricative S-F", "Liquid R", "Girl-Name Ending"],
        analysis: "Uses 'Fricatives' (S/F/Ph) which mimic the sound of airflow (whispering). Soft, frictionless sounds are subconsciously associated with smoothness and luxury.",
        icon: "💄",
        color: "#d946ef"
    },
    {
        name: "Tesla",
        description: "Electric Innovation",
        traits: ["High Freq S-T", "Sharp Vowels", "Modern"],
        analysis: "The 'S' and 'T' cluster creates high-frequency acoustic hiss, mimicking electricity or speed. It sounds physically 'sharper' than a name like 'Ford'.",
        icon: "⚡",
        color: "#3b82f6"
    }
];

export const HomeFamousNames: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % FAMOUS_EXAMPLES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-xs">Phonosemantics in the Real World</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mt-3">Famous Soundscapes</h2>
                    <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6 text-xl leading-relaxed">
                        Major brands and storytellers don't pick names by accident. They use sound symbolism to engineer a specific feeling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <div className="relative h-[400px] w-full perspective-1000">
                        {FAMOUS_EXAMPLES.map((item, index) => {
                            // Calculate position relative to active
                            let offset = index - activeIndex;
                            if (offset < 0) offset += FAMOUS_EXAMPLES.length; // Loop effect logic slightly simplified for 4 items

                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={item.name}
                                    className={`absolute inset-0 transition-all duration-700 ease-out-back transform ${isActive
                                        ? 'opacity-100 scale-100 translate-x-0 z-20'
                                        : 'opacity-0 scale-90 translate-x-12 z-0'
                                        }`}
                                >
                                    <div className="h-full w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl -mr-20 -mt-20" style={{ color: item.color }}></div>

                                        <div className="text-8xl mb-6 animate-float">{item.icon}</div>
                                        <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2">{item.name}</h3>
                                        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.description}</p>

                                        <div className="flex gap-2 mt-6">
                                            {item.traits.map(trait => (
                                                <span key={trait} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold">
                                                    {trait}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-xs font-mono mb-4">
                                ANALYSIS CASE #{activeIndex + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-300">
                                Why "{FAMOUS_EXAMPLES[activeIndex].name}" Works
                            </h3>
                            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed transition-all duration-300">
                                {FAMOUS_EXAMPLES[activeIndex].analysis}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {FAMOUS_EXAMPLES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-slate-900 dark:bg-white w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
