import React, { useState, useEffect } from 'react';

const FACTS = [
    "In Denmark, you must choose from a list of ~7,000 government-approved names. (Danish Naming Law)",
    "The sound 'M' is associated with 'Mother' in 1,000+ languages — Jakobson (1960) proposed this is due to infant nursing sounds.",
    "People named 'Dennis' are statistically overrepresented among dentists — Pelham et al. (2002), 'Implicit Egotism'.",
    "Names with 'K', 'T', 'P' sounds are perceived as smaller and sharper than 'B', 'M', 'L' names — Sapir (1929).",
    "In Japan, name stroke count determines fortune (Seimei Handan) — traditional onomancy.",
    "The Roman name 'Brutus' derives from Latin 'brutus' meaning 'heavy' or 'dull'.",
    "Iceland bans names containing 'C' because it's not in the Icelandic alphabet. (Icelandic Naming Committee)",
    "In 2007, a Chinese couple attempted to name their baby '@'. It was rejected. (Xinhua News)",
    "Women with gender-ambiguous names may be more likely to persist in STEM fields — Coffey & McLaughlin (2009).",
    "Your brain processes your own name with heightened attention, known as the Cocktail Party Effect — Cherry (1953)."
];

export const FactGenerator: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % FACTS.length);
                setFade(true);
            }, 500);
        }, 6000); // Change fact every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center py-4 px-4">
            <div className="bg-slate-100/80 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full px-6 py-2 flex items-center gap-3 shadow-sm max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 shrink-0">
                    Did you know?
                </span>
                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 shrink-0"></div>
                <p
                    className={`text-xs md:text-sm text-slate-600 dark:text-slate-300 transition-opacity duration-500 line-clamp-1 md:line-clamp-none ${fade ? 'opacity-100' : 'opacity-0'}`}
                >
                    {FACTS[index]}
                </p>
            </div>
        </div>
    );
};
