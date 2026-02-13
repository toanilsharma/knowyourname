'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                className={cn(
                    "w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group rounded-2xl transition-all duration-300",
                    isOpen 
                        ? "bg-white dark:bg-slate-900 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20" 
                        : "bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-8">
                    {question}
                </h3>
                <span className={cn(
                    "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 transition-all duration-300",
                    isOpen ? "rotate-180 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
                )}>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-2">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg border-l-2 border-slate-200 dark:border-slate-800 pl-4 ml-1">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const HomeFAQ: React.FC = () => {
    
    const faqs = [
        {
            question: "Is this numerology?",
            answer: "Absolutely not. Numerology is a pseudoscientific belief in divine relationships between numbers. This tool relies on Sound Symbolism (a branch of linguistics) and statistical distributions found in US Census data. We measure physical sound properties, not mystical 'vibrations'."
        },
        {
            question: "What is the Bouba/Kiki effect?",
            answer: "It's a famous psychological experiment showing that 95% of people associate round shapes with sounds like 'Bouba' and spiky shapes with sounds like 'Kiki'. Your name lies somewhere on this spectrum, influencing how strangers subconsciously perceive your 'acoustic shape' before they even meet you."
        },
        {
            question: "Can I use this for brand naming?",
            answer: "Yes. Major corporations use these exact same principles (Phonosemantics) to name products. 'Kodak' was chosen to sound crisp and modern. 'Swiffer' was chosen to sound fast and airy. You can use our Compatibility tool to check if two potential brand names clash or harmonize."
        },
        {
            question: "Does spelling matter, or just sound?",
            answer: "Our primary engine uses CMUdict to convert text to Phonemes (Sound), so 'Philly' and 'Filly' analyze identically for acoustics. However, our Visual Analysis tracks Graphemes (Look), where spelling does matter for 'Typing Ergonomics' and 'Visual Balance'."
        },
        {
            question: "Do nicknames count?",
            answer: "Yes! Nicknames often 'correct' the acoustic problems of a full name. For example, 'Robert' is hard and serious (low frequency), while 'Bobby' is soft and friendly (bilabial bounces). Analyze both to see your 'Professional' vs 'Personal' acoustics."
        },
        {
            question: "Does my middle name matter?",
            answer: "Acoustically, usually no. In 90% of social interactions, you are known by 'First Name' or 'First + Last'. Middle names act as written 'buffers' but rarely affect the daily spoken impression of your name."
        },
        {
            question: "Why do I hate my own voice?",
            answer: "This is called 'Voice Confrontation'. You hear your voice through your skull (bone conduction), which adds bass. Recordings show only air conduction. Our 'Melody' tool plays your name as pure musical notes, helping you hear the objective beauty of the pattern without the self-consciousness."
        },
        {
            question: "What about accents?",
            answer: "We use 'General American English' (GenAm) as the baseline standard (like news anchors). While accents change vowel qualities, the 'Skeleton' of the name (Consonants like K, T, P, M) remain identical across almost all accents."
        }
    ];

    return (
        <section className="py-32 px-4 relative max-w-4xl mx-auto">
             <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest">
                    <HelpCircle className="w-3 h-3" />
                    FAQ
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white">Scientific FAQ</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Real questions from our 50,000+ monthly users.
                </p>
            </div>

            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};
