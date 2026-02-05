import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Acoustic Frequency and Emotional Valence | KnowYourName Research',
    description: "Literature review on Ohala's Frequency Code and how the fundamental frequency of speech sounds influences perceived size, dominance, and emotion.",
    keywords: 'frequency code, ohala 1984, acoustic phonetics, dominance perception, fundamental frequency F0',
};

export default function AcousticFrequencyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24">
            
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-slate lg:prose-lg">

                {/* Breadcrumb */}
                <nav className="not-prose mb-8 text-sm">
                    <Link href="/" className="text-slate-500 hover:text-blue-600">&larr; Home</Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <Link href="/research" className="text-slate-500 hover:text-blue-600">Research</Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="text-slate-700 dark:text-slate-300">Acoustic Frequency</span>
                </nav>

                {/* Header */}
                <header className="not-prose mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3">Literature Review</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                        Acoustic Frequency and Emotional Valence
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                        How Ohala's "Frequency Code" explains the link between low-pitched sounds and perceived dominance.
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                        <span>Published: January 2026</span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                        <span>~9 min read</span>
                    </div>
                </header>

                {/* Abstract */}
                <section>
                    <h2>Abstract</h2>
                    <p>
                        John Ohala's "Frequency Code" (1984, 1994) proposes an ethological basis for sound symbolism: across species, larger animals produce lower-frequency vocalizations due to having larger vocal tracts. Consequently, low-pitched sounds have come to signal dominance and threat, while high-pitched sounds signal submission and deference. This review explores the evidence for the Frequency Code and its implications for how names are perceived.
                    </p>
                </section>

                {/* Introduction */}
                <section>
                    <h2>1. The Frequency Code Hypothesis</h2>
                    <p>
                        Ohala observed a cross-species pattern: large animals (elephants, bulls) produce low-frequency calls, while small animals (mice, birds) produce high-frequency calls. This is a direct consequence of physics—larger vocal folds vibrate more slowly.
                    </p>
                    <p>
                        Because of this reliable correlation, Ohala argued, animals (including humans) have evolved to use pitch as a cue for the signaler's size and, by extension, their threat potential. This has carried over into human speech as the "Sound Frequency Code."
                    </p>
                    <blockquote>
                        "The use of high F0 to signal 'small,' 'non-threatening' and low F0 to signal 'large,' 'threatening' is widespread among vertebrates."
                        <cite>— Ohala, J. J. (1984). An Ethological Perspective on Common Cross-Language Utilization of F0. <em>Phonetica</em>, 41, 1-16.</cite>
                    </blockquote>
                    <p className="text-sm text-slate-500">
                        Ref: Ohala, J. J. (1994). The frequency code underlies the sound-symbolic use of voice pitch. In L. Hinton, J. Nichols, &amp; J. J. Ohala (Eds.), <em>Sound Symbolism</em> (pp. 325-347). Cambridge University Press.
                    </p>
                </section>

                {/* Key Findings */}
                <section>
                    <h2>2. Evidence and Implications</h2>

                    <h3>2.1 Intonation in Speech</h3>
                    <p>
                        In most languages, questions are marked by rising intonation (higher pitch at the end), which Ohala interprets as a signal of uncertainty or a request for confirmation—a "submissive" posture. Commands and statements, conversely, often have falling intonation.
                    </p>

                    <h3>2.2 Vowel Intrinsic Pitch</h3>
                    <p>
                        High vowels like /i/ and /u/ have a slightly higher intrinsic fundamental frequency (F0) than low vowels like /a/. This provides a phonetic basis for why names rich in /i/ (e.g., "Timmy") may sound smaller or less authoritative than names rich in /a/ or /o/ (e.g., "Robert," "Donald").
                    </p>

                    <h3>2.3 Application to Names</h3>
                    <p>
                        Gussenhoven (2002, 2004) extended the Frequency Code to prosody, proposing that variation in pitch signals speaker affect and can be used strategically. Names that "sound" low-pitched (back vowels, nasal consonants) may unconsciously evoke perceptions of stability and authority.
                    </p>
                    <p className="text-sm text-slate-500">
                        DOI (Gussenhoven 2004): <a href="https://doi.org/10.1017/S0952675704000306" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">10.1017/S0952675704000306</a>
                    </p>
                </section>

                {/* Replication */}
                <section>
                    <h2>3. Application in Our Engine</h2>
                    <p>
                        KnowYourName calculates a "Dominance Scale" based on the Frequency Code:
                    </p>
                    <ul>
                        <li><strong>High Frequency Weight (1-2):</strong> Indicates names with many high vowels (/i/, /e/) and front consonants. Perceived as agile, approachable, but potentially less authoritative.</li>
                        <li><strong>Low Frequency Weight (4-5):</strong> Indicates names with low vowels (/a/, /o/) and back consonants. Perceived as dominant, authoritative, and "larger."</li>
                    </ul>
                    <p>
                        This metric directly informs the "CEO Vibe" or "Approachable" labels in the Viral Summary.
                    </p>
                </section>

                {/* References */}
                <section className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">References</h3>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li>Gussenhoven, C. (2004). The Phonology of Tone and Intonation. Cambridge University Press. <a href="https://doi.org/10.1017/CBO9780511616983" className="text-blue-600 hover:underline">DOI</a></li>
                        <li>Ohala, J. J. (1984). An ethological perspective on common cross-language utilization of F0 of voice. <em>Phonetica</em>, 41(1), 1-16.</li>
                        <li>Ohala, J. J. (1994). The frequency code underlies the sound-symbolic use of voice pitch. In <em>Sound Symbolism</em> (pp. 325-347). Cambridge.</li>
                    </ul>
                </section>

            </article>
        </div>
    );
}
