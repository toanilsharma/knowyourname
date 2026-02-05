import React from 'react';

const REFERENCES = [
    {
        id: "kohler1929",
        citation: "Köhler, W. (1929). Gestalt Psychology. New York: Liveright.",
        topic: "Bouba/Kiki Effect"
    },
    {
        id: "ramachandran2001",
        citation: "Ramachandran, V.S. & Hubbard, E.M. (2001). Synaesthesia—a window into perception, thought and language. Journal of Consciousness Studies, 8(12), 3-34.",
        topic: "Sound Symbolism & Synesthesia"
    },
    {
        id: "ohala1994",
        citation: "Ohala, J. J. (1994). The frequency code underlies the sound-symbolic use of voice pitch. In L. Hinton, J. Nichols & J. J. Ohala (Eds.), Sound Symbolism (pp. 325-347). Cambridge University Press.",
        topic: "Frequency Code (Size/Sound)"
    },
    {
        id: "clements1990",
        citation: "Clements, G. N. (1990). The role of the sonority cycle in core syllabification. Papers in Laboratory Phonology I, 283-333.",
        topic: "Sonority Sequencing Principle"
    },
    {
        id: "shannon1948",
        citation: "Shannon, C. E. (1948). A Mathematical Theory of Communication. The Bell System Technical Journal, 27, 379–423.",
        topic: "Information Entropy"
    },
    {
        id: "fiske2002",
        citation: "Fiske, S. T., Cuddy, A. J. C., Glick, P., & Xu, J. (2002). A model of (often mixed) stereotype content: Competence and warmth respectively follow from perceived status and competition. Journal of Personality and Social Psychology, 82(6), 878–902.",
        topic: "Social Stereotypes"
    },
    {
        id: "simner2005",
        citation: "Simner, J., Ward, J., & Lanz, M. (2005). The colour of sounds: Phonetic attributes of vowels and consonants. Perception, 34, 136-136.",
        topic: "Phoneme-Color Associations"
    },
    {
        id: "sidhu2018",
        citation: "Sidhu, D. M., & Pexman, P. M. (2018). Five mechanisms of sound symbolism. Psychonomic Bulletin & Review, 25, 1619–1643.",
        topic: "Sound Symbolism Mechanisms"
    },
    {
        id: "pelham2002",
        citation: "Pelham, B. W., Mirenberg, M. C., & Jones, J. T. (2002). Why Susie sells seashells by the seashore: Implicit egotism and major life decisions. Journal of Personality and Social Psychology, 83(2), 469–487.",
        topic: "Implicit Egotism / Name-Letter Effect"
    }
];

export const Bibliography: React.FC = () => {
    return (
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 text-left">
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <span>📜</span> Scientific References
            </h3>
            <div className="grid grid-cols-1 gap-4">
                {REFERENCES.map((ref) => (
                    <div key={ref.id} className="text-xs text-slate-500 dark:text-slate-400 font-mono pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        <span className="block font-bold text-slate-700 dark:text-slate-300 mb-1">{ref.topic}</span>
                        {ref.citation}
                    </div>
                ))}
            </div>
            <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest text-center">
                All algorithms in this application are derived from these peer-reviewed publications.
            </p>
        </div>
    );
};
