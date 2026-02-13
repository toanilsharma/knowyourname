import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CitationExport } from '@/components/CitationExport';
import { ArticleHero } from '@/components/research/ArticleHero';
import { ArticleProse } from '@/components/research/ArticleProse';
import { KeyTakeaway } from '@/components/research/KeyTakeaway';

export const metadata: Metadata = {
    title: 'Typing Effort Models in HCI | KnowYourName Research',
    description: "Literature review on keyboard ergonomics models, from Fitts' Law to modern QWERTY optimization studies applied to name analysis.",
    keywords: 'fitts law, typing effort, keyboard ergonomics, hci, qwerty optimization, name typing speed',
};

export default function TypingEffortPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pb-24">
            
            <ArticleHero 
                title="Typing Effort Models"
                subtitle="Human-Computer Interaction"
                description="From Fitts' Law to keyboard layout research: Understanding the biomechanics of typing a name."
                readTime="7 min read"
                gradient="from-rose-600 via-pink-500 to-fuchsia-500"
            />

            <ArticleProse>
                <KeyTakeaway title="The Digital Persona" gradient="from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30">
                    In the digital age, we "meet" people by typing their names into search bars and emails. <strong>Fitts' Law</strong> dictates that names with optimized keyboard paths (alternating hands, inward rolls) are typed faster and with fewer errors, creating a subtle positive affect through "motor fluency."
                </KeyTakeaway>

                <h2>Abstract</h2>
                <p>
                    How easy is it to type a given name? This seemingly trivial question has implications for user experience in the digital age, where names are entered constantly into forms, messages, and searches. This review examines foundational models of motor control, including Fitts' Law, and applies them to keyboard ergonomics. We discuss factors like hand alternation, finger travel distance, and the "inward roll" advantage, and describe how these are quantified in KnowYourName's Keyboard Ergonomics analysis.
                </p>

                <h2>1. The Relevance of Typing Effort</h2>
                <p>
                    In an era of constant digital communication, the ease with which a name can be typed matters. A name that flows smoothly across the keyboard may be typed more quickly and with fewer errors. This has practical implications for everything from email signatures to username selection.
                </p>
                <p>
                    Beyond practicality, typing effort may subtly influence affect. Tasks that are executed fluently tend to feel more pleasant, a principle related to the processing fluency heuristic discussed in cognitive psychology.
                </p>

                <h2>2. Key Concepts &amp; Research</h2>

                <h3>2.1 Fitts' Law (1954)</h3>
                <p>
                    Paul Fitts' foundational work established that the time to move to a target is a function of the distance to the target and the size of the target. Applied to typing, this means that keys farther apart require more time to reach, and smaller keys (or more precise movements) take longer.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    Reference: Fitts, P. M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. <em>Journal of Experimental Psychology</em>, 47(6), 381-391. <a href="https://doi.org/10.1037/h0055392" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI</a>
                </p>

                <h3>2.2 Hand Alternation</h3>
                <p>
                    Research on skilled typing has consistently shown that hand alternation—typing sequential letters with opposite hands—is faster than same-hand sequences. This is because one hand can be moving to its next key while the other is striking. Names with high alternation (e.g., "DORIS" on QWERTY: D-right, O-right, R-left, I-right, S-left... usually left-right alternating) are thus ergonomically efficient.
                </p>

                <h3>2.3 Inward vs. Outward Rolls</h3>
                <p>
                    Typing sequences that move from the pinky finger toward the index finger (an "inward roll") are generally faster and more comfortable than sequences moving outward. This is because the stronger index finger can "catch" the motion.
                </p>

                <h3>2.4 Home Row Advantage</h3>
                <p>
                    Keys on the home row (A, S, D, F, G, H, J, K, L on QWERTY) require the least finger movement and thus the least effort. Names composed primarily of home row letters are ergonomically optimal.
                </p>

                <h2>3. Application in Our Engine</h2>
                <p>
                    KnowYourName's Keyboard Ergonomics analysis calculates:
                </p>
                <ul>
                    <li><strong>Hand Balance:</strong> Ratio of left-hand to right-hand keystrokes.</li>
                    <li><strong>Alternation Score (0-100):</strong> Frequency of hand switches between sequential letters.</li>
                    <li><strong>Row Usage:</strong> Distribution of keystrokes across top, home, and bottom rows.</li>
                </ul>
                <p>
                    Names with high alternation scores and a preference for home-row keys are flagged as "Ergonomically Fluent." The interactive Keyboard Heatmap visualizes which keys are most used for a given name.
                </p>

                {/* References */}
                <div className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">References</h3>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">Fitts, P. M. (1954)</span>
                            <p className="mt-1">The information capacity of the human motor system. <em>Journal of Experimental Psychology</em>. <a href="https://doi.org/10.1037/h0055392" className="text-blue-600 hover:underline">DOI</a></p>
                        </li>
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">MacKenzie, I. S. (2002)</span>
                            <p className="mt-1">Text entry for mobile computing: Models and methods. <em>Human-Computer Interaction</em>.</p>
                        </li>
                    </ul>
                </div>

                <div className="not-prose mt-12">
                     <CitationExport
                        title="Typing Effort Models in HCI"
                        authors={["A Sharma"]}
                        year="2026"
                        journal="Know Your Name Research Library"
                        url="https://knowyourname.co.in/research/typing-effort"
                        abstract="Literature review on keyboard ergonomics models."
                    />
                </div>

            </ArticleProse>
        </div>
    );
};

