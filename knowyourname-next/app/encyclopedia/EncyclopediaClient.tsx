'use client';

import React from 'react';
import Link from 'next/link';

import { Bibliography } from '@/components/Bibliography'; // Assuming Bibliography might be wanted or not? It wasn't in original Encyclopedia.tsx?
// Original Encyclopedia.tsx did NOT import Bibliography. It did import AdUnit and SEO.
// It also used <Link to>

export const EncyclopediaClient: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-slate-700 dark:text-slate-300 animate-fade-in-up">

      {/* Hero Image */}
      <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
        <img 
          src="/images/encyclopedia-globe.png" 
          alt="Global naming traditions across cultures"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"></div>
      </div>

      <header className="border-b border-slate-200 dark:border-slate-800 pb-12 text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-mono mb-4 border border-amber-200 dark:border-amber-500/20">
          GLOBAL ONOMASTICS INDEX
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white mb-6 tracking-tight">The Science of Names</h1>
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          From the movement of stars in India to the stroke counts of Japan. A comprehensive guide to how the world defines identity.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

        {/* SIDEBAR TOC */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-2 text-sm border-l border-slate-200 dark:border-slate-800">
            {[
              { id: 'naming-laws', label: '1. Global Regulations' },
              { id: 'vedic-system', label: '2. The Vedic System' },
              { id: 'sinitic-system', label: '3. Chinese Traditions' },
              { id: 'japan-system', label: '4. Japanese Stroke Count' },
              { id: 'arabic-system', label: '5. Arabic Naming Chain' },
              { id: 'science', label: '6. Name Mathematics' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left pl-4 py-2 text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-l-2 hover:border-emerald-500 -ml-px transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-8">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl text-xs text-slate-500">
                <strong>Did you know?</strong><br />
                In 1066, the Normans invaded England and replaced 80% of names. "William" and "Robert" replaced "Aethelred".
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-9 space-y-24">

          {/* SECTION: Global Regulations */}
          <article className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white border-l-4 border-blue-500 pl-6" id="naming-laws">1. Global Naming Regulations</h2>
            <p className="leading-relaxed text-lg">
              While many Western nations prioritize creative freedom, many countries treat personal names as a matter of national heritage and public interest, enforcing strict legal frameworks to prevent mockery and preserve linguistic integrity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇩🇰</span> Denmark
                </h3>
                <p className="text-sm leading-relaxed mb-4 font-semibold text-slate-700 dark:text-slate-300">
                  The "Approved 7,000"
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  You cannot just invent a name. You must choose from a strict government list of 7,000 pre-approved names.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Rejected:</strong> "Monkey", "Pluto", "Anus".</li>
                  <li><strong>Approved:</strong> "Benji", "Jimin".</li>
                  <li><strong>Reason:</strong> To protect the child from being ridiculed.</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇩🇪</span> Germany
                </h3>
                <p className="text-sm leading-relaxed mb-4 font-semibold text-slate-700 dark:text-slate-300">
                  Gender Clarity Law
                </p>
                <p className="text-sm leading-relaxed mb-4">
                  Historically, a first name <em>must</em> clearly indicate the child's gender. Neutral names (like "Matti") were often rejected unless a second, gender-specific name was added.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Banned:</strong> "Stompie", "Woodstock".</li>
                  <li><strong>Allowed:</strong> "Legolas" (Recently approved).</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Iceland: The Approved Registry</h3>
                <p className="text-sm leading-relaxed mb-4">
                  The <strong>Mannanafnanefnd</strong> (Naming Committee) enforces a strict list. Names must declinate correctly according to Icelandic grammar cases.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Rule 1:</strong> Must contain only letters in the Icelandic alphabet (No C, Q, W, Z).</li>
                  <li><strong>Rule 2:</strong> Must not cause the bearer embarrassment.</li>
                  <li><strong>Example:</strong> "Duncan" is banned because it cannot be conjugated in Icelandic cases.</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Malaysia: "MyKid" Restrictions</h3>
                <p className="text-sm leading-relaxed mb-4">
                  In 2006, the Malaysian National Registration Department clamped down on an increasing trend of "unusual" names.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Banned:</strong> "007" (Numbers are strictly forbidden).</li>
                  <li><strong>Banned:</strong> "Sor Chai" (Insane), "Khiow Khoo" (Hunchback).</li>
                  <li><strong>Banned:</strong> Names of animals, insects, or fruits, to prevent bullying.</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Portugal: Traditionalism</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Portugal requires names to be traditional, Portuguese in origin, and gender-specific. Nicknames on birth certificates are forbidden.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Enforced:</strong> "Tom" is rejected; it must be "Tomás".</li>
                  <li><strong>Enforced:</strong> "Sam" is rejected; it must be "Samuel".</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">New Zealand: Anti-Title Law</h3>
                <p className="text-sm leading-relaxed mb-4">
                  The Registrar of Births, Deaths and Marriages routinely blocks names that resemble official titles or ranks.
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4 text-slate-600 dark:text-slate-400">
                  <li><strong>Rejected List:</strong> Justice, King, Prince, Royal, Duke, Major.</li>
                  <li><strong>Rationale:</strong> Prevents confusion with official government roles.</li>
                </ul>
              </div>
            </div>
          </article>


          {/* SECTION: Indian / Vedic */}
          <article className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-orange-500 pl-4" id="vedic-system">2. The Vedic System (India)</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>
                In Hindu tradition, naming is not merely labeling; it is the <strong>Namkaran</strong> (Naming Ceremony), one of the essential 16 Samskaras (rites of passage). The name is believed to influence the child's destiny and vibrational energy.
              </p>
              <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800/30">
                  <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2">Nakshatra (Star)</h4>
                  <p className="text-xs">
                    The name's starting syllable is determined by the birth star (Nakshatra). For example, a child born under <em>Rohini</em> might be required to start their name with 'O' or 'Va'.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800/30">
                  <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2">Swar Siddhanta</h4>
                  <p className="text-xs">
                    The science of sound. Sanskrit names are chosen for their specific phonetic vibration, which is believed to resonate with the individual's chakras.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800/30">
                  <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2">Meaning</h4>
                  <p className="text-xs">
                    Names almost universally refer to qualities (e.g., <em>Anil</em> - Wind/Air), deities, or nature, acting as a lifelong invocation of that attribute.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: Chinese / Sinitic */}
          <article className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-red-500 pl-4" id="sinitic-system">3. Sinitic Traditions (China)</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>
                Chinese naming is a complex interplay of genealogy, hope, and cosmic balance. A typical name consists of three characters: [Surname] + [Generation Name] + [Given Name].
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong>Banci (Generation Name):</strong> Historically, families had a "Generation Poem." Each generation would use the next character in the poem as the middle part of their name, instantly identifying their rank in the family hierarchy, even among distant cousins.</li>
                <li><strong>Tone Balance:</strong> A name must sound melodically pleasing. Parents avoid combining characters with "clashing" tones (e.g., using only Fourth Tone "falling" sounds which sound aggressive).</li>
                <li><strong>The Five Elements (Wu Xing):</strong> If a child's birth chart (Bazi) lacks an element (e.g., Water), the name will often include a character with the "Water" radical (like Ocean or River) to restore cosmic equilibrium.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: Japanese Seimei Handan */}
          <article className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-pink-500 pl-4" id="japan-system">4. Seimei Handan (Japan)</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>
                <strong>Seimei Handan</strong> is the Japanese art of "Name Diagnosis." Unlike phonetic systems, this focuses on the visual biology of the Kanji characters—specifically the <strong>Stroke Count</strong>.
              </p>
              <p>
                Japanese parents will often calculate the total strokes of the surname and given name. Certain totals (like 11, 21, 31) are considered "Great Luck" (Daikichi), bringing leadership and prosperity. Others (like 4, 9, 19) are historically associated with hardship and are avoided.
              </p>
              <p className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg border border-pink-100 dark:border-pink-800/30 text-sm mt-4">
                <strong>Kira-Kira Names:</strong> A modern phenomenon where parents give children names with "sparkly" or non-standard readings (e.g., the Kanji for "Light" but pronounced "Pikachu"). The Japanese government is currently debating laws to restrict readings to those generally recognized in society.
              </p>
            </div>
          </article>

          {/* SECTION: Arabic Structure */}
          <article className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4" id="arabic-system">5. Arabic Naming Chain</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>
                Arabic names are patrilineal chains that serve as a precise GPS of identity. They do not follow the Western [First] [Last] structure.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex gap-4 items-start">
                  <span className="font-bold text-emerald-600 w-24 shrink-0">Ism</span>
                  <span>The personal name (e.g., <em>Muhammad</em>). The given name at birth.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-bold text-emerald-600 w-24 shrink-0">Nasab</span>
                  <span> The pedigree. Indicated by "ibn" (son of) or "bint" (daughter of). A full name recites the lineage: <em>Ahmed ibn Yusuf ibn Hassan</em> (Ahmed, son of Yusuf, son of Hassan).</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-bold text-emerald-600 w-24 shrink-0">Kunya</span>
                  <span>An honorific indicating parenthood, often used daily instead of the Ism. E.g., <em>Abu Bakr</em> (Father of Bakr). Using a Kunya is a sign of respect.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-bold text-emerald-600 w-24 shrink-0">Laqab</span>
                  <span>A descriptive epithet or religious title (e.g., <em>Al-Rashid</em>, "The Rightly Guided").</span>
                </div>
              </div>
            </div>
          </article>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-12"></div>

          {/* SECTION: Scientific Theories (Zipf, Phonosemantics, Bouba/Kiki) */}
          <article className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-violet-500 pl-4" id="science">6. The Mathematics of Names</h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-8">

              {/* Zipfs */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Zipf's Law in Demographics</h3>
                <p>
                  <strong>Zipf's law</strong> is a power-law distribution. In names, it predicts that a tiny handful of names (e.g., James, Wei, Mohamed) will account for a huge percentage of the population, while the "long tail" of unique names stretches infinitely. This explains why trying to be "unique" is statistically difficult—the tail is crowded.
                </p>
              </div>

              {/* Nominative Determinism */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Nominative Determinism</h3>
                <p>
                  The hypothesis that people gravitate toward careers that fit their names (e.g., Usain Bolt running fast, or a dentist named Dennis). Researchers attribute this to <strong>Implicit Egotism</strong>: we subconsciously prefer things that share letters with our own name, influencing where we live, who we marry, and what we do.
                </p>
              </div>

              {/* Bouba Kiki */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">The Bouba/Kiki Effect</h3>
                <p>
                  A universal phenomenon where 95% of humans, regardless of language, associate round shapes with words like "Bouba" (round vowels, soft consonants) and spiky shapes with "Kiki" (sharp vowels, hard stops). This proves that sound is not arbitrary—it carries intrinsic distinctive meaning.
                </p>
                <cite className="text-xs text-slate-500 block mt-2 not-italic">Reference: Ramachandran, V.S. & Hubbard, E.M. (2001).</cite>
              </div>

            </div>
          </article>

          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
              ← Return to Analysis Lab
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
