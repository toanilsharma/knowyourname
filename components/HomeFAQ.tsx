import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 dark:border-slate-800">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {question}
                </h3>
                <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export const HomeFAQ: React.FC = () => {
    return (
        <div className="py-24 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Scientific Methods</span>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mt-3">Common Questions</h2>
            </div>

            <div className="space-y-2">
                <FAQItem
                    question="Is this numerology?"
                    answer="Absolutely not. Numerology is a pseudoscientific belief in divine relationships between numbers. This tool relies on Sound Symbolism (a branch of linguistics) and statistical distributions found in US Census data. We measure physical sound properties, not mystical 'vibrations'."
                />
                <FAQItem
                    question="What is the Bouba/Kiki effect?"
                    answer="It's a famous psychological experiment showing that 95% of people associate round shapes with sounds like 'Bouba' and spiky shapes with sounds like 'Kiki'. Your name lies somewhere on this spectrum, influencing how strangers subconsciously perceive your 'acoustic shape' before they even meet you."
                />
                <FAQItem
                    question="Can I use this for brand naming?"
                    answer="Yes. Major corporations use these exact same principles (Phonosemantics) to name products. 'Kodak' was chosen to sound crisp and modern. 'Swiffer' was chosen to sound fast and airy. You can use our Compatibility tool to check if two potential brand names clash or harmonize."
                />
                <FAQItem
                    question="Does spelling matter, or just sound?"
                    answer="Our primary engine uses CMUdict to convert text to Phonemes (Sound), so 'Philly' and 'Filly' analyze identically for acoustics. However, our Visual Analysis tracks Graphemes (Look), where spelling does matter for 'Information Entropy' and 'Typing Ergonomics'."
                />
            </div>
        </div>
    );
};
