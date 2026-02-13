
import React from 'react';
import { Metadata } from 'next';
import { CitationExport } from '@/components/CitationExport';
import { ArticleHero } from '@/components/research/ArticleHero';
import { ArticleProse } from '@/components/research/ArticleProse';
import { KeyTakeaway } from '@/components/research/KeyTakeaway';

export const metadata: Metadata = {
    title: 'Phonotactics and Brand Perception | KnowYourName Research',
    description: 'Review of research on how phonotactic patterns (consonant clusters, syllable structure) influence consumer brand perception and product expectations.',
    keywords: 'phonotactics marketing, brand naming linguistics, sound branding, klink 2000, lowrey shrum',
};

export default function PhonotacticsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pb-24">
            
            <ArticleHero 
                title="Phonotactics & Brand Perception"
                subtitle="Consumer Psychology"
                description="How the structural rules of language influence what we expect from a product or a name."
                readTime="8 min read"
                gradient="from-emerald-600 via-teal-500 to-cyan-500"
            />

            <ArticleProse>
                <KeyTakeaway title="The Fluency Heuristic" gradient="from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
                    Names that follow common sound patterns (high <strong>phonotactic probability</strong>) feel familiar and trustworthy, triggering a "processing fluency" effect. Conversely, names that violate these rules feel exotic, innovative, or risky. We decode this "linguistic DNA" instantly.
                </KeyTakeaway>

                <h2>Abstract</h2>
                <p>
                    Phonotactics describes the rules governing permissible sound sequences in a language. Research in consumer psychology and linguistics has demonstrated that phonotactic patterns influence brand perception. Novel brand names that violate English phonotactics may seem exotic or foreign, while highly probable sequences feel familiar and trustworthy. This review examines foundational work by Klink (2000) and Lowrey &amp; Shrum (2007), and discusses how phonotactic probability can be leveraged in naming.
                </p>

                <h2>1. What is Phonotactics?</h2>
                <p>
                    Every language has implicit rules about which sounds can appear next to each other. In English, a word can start with "str-" (as in "string") but not "*tsr-". A word can end in "-lk" (as in "milk") but rarely in "-lkr". These are <strong>phonotactic constraints</strong>.
                </p>
                <p>
                    Names that adhere closely to these patterns are processed more fluently, which can lead to positive affect (the "processing fluency" heuristic). Names that violate them may stand out, but also create cognitive friction.
                </p>

                <h2>2. Key Studies</h2>

                <h3>2.1 Klink (2000): Sound Symbolism and Brands</h3>
                <p>
                    Richard Klink's influential study examined how specific phonemes in brand names affect consumer expectations. He found that front vowels (like /i/) in brand names led participants to expect smaller, lighter, faster, and sharper products, while back vowels (like /o/) evoked larger, heavier, slower, and duller products. Plosive consonants (like /k/, /t/) were associated with hardness, while fricatives (like /s/, /f/) with softness.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    DOI: <a href="https://doi.org/10.1509/jmkr.37.2.253.18728" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">10.1509/jmkr.37.2.253.18728</a>
                </p>

                <h3>2.2 Lowrey &amp; Shrum (2007): Phonetic Symbolism Effects</h3>
                <p>
                    Lowrey and Shrum extended this research to show that sound symbolic effects occur even when consumers are not consciously attending to the brand name. They demonstrated that the effects are "automatic," influencing preferences even under cognitive load. This suggests that sound symbolism operates at a pre-attentive level.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    DOI: <a href="https://doi.org/10.1016/j.jcps.2007.01.005" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">10.1016/j.jcps.2007.01.005</a>
                </p>

                <h3>2.3 Phonotactic Probability &amp; Fluency</h3>
                <p>
                    Research on phonotactic probability (how likely a sound sequence is in a given language) shows that high-probability sequences are easier to remember and produce. Names with high phonotactic probability are perceived as more "native" and can benefit from in-group familiarity, while low-probability names may signal foreignness or innovation.
                </p>

                <h2>3. Application in Our Engine</h2>
                <p>
                    KnowYourName calculates a "Phonotactic Impression" score based on bigram and trigram frequencies from large English corpora. Names are classified as:
                </p>
                <ul>
                    <li><strong>High Probability (Common):</strong> Familiar, easy to process (e.g., "Michael").</li>
                    <li><strong>Medium Probability:</strong> Balanced—neither exotic nor mundane.</li>
                    <li><strong>Low Probability (Rare/Exotic):</strong> Distinctive, potentially foreign-sounding (e.g., "Xzavier").</li>
                </ul>
                <p>
                    This is correlated with "Cognitive Ease" in the Psycholinguistics section.
                </p>

                {/* References */}
                <div className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">References</h3>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">Klink, R. R. (2000)</span>
                            <p className="mt-1">Creating brand names with meaning: The use of sound symbolism. <em>Marketing Letters</em>. <a href="https://doi.org/10.1509/jmkr.37.2.253.18728" className="text-blue-600 hover:underline">DOI</a></p>
                        </li>
                        <li className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <span className="font-medium text-slate-900 dark:text-white">Lowrey, T. M., &amp; Shrum, L. J. (2007)</span>
                            <p className="mt-1">Phonetic symbolism and brand name preference. <em>Journal of Consumer Psychology</em>. <a href="https://doi.org/10.1016/j.jcps.2007.01.005" className="text-blue-600 hover:underline">DOI</a></p>
                        </li>
                    </ul>
                </div>

                <div className="not-prose mt-12">
                     <CitationExport
                        title="Phonotactics and Brand Perception"
                        authors={["A Sharma"]}
                        year="2026"
                        journal="Know Your Name Research Library"
                        url="https://knowyourname.co.in/research/phonotactics"
                        abstract="Review of research on how phonotactic patterns influence brand perception."
                    />
                </div>

            </ArticleProse>
        </div>
    );
};
