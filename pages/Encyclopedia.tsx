import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';

export const Encyclopedia: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-16 animate-fade-in-up">
      <SEO 
        title="Encyclopedia of Onomastics & Phonosemantics"
        description="A comprehensive scientific reference on naming laws, the Bouba/Kiki effect, nominative determinism, and the linguistics of personal identity."
        keywords="onomastics, phonosemantics, naming laws, bouba kiki effect, nominative determinism, linguistic relativity"
      />

      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 text-center">
        <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-mono mb-4 border border-amber-200 dark:border-amber-500/20">
          REFERENCE LIBRARY
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Naming Encyclopedia</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
          A compendium of naming laws, mathematical distributions, and phonosemantic theories.
        </p>
      </header>
      
      {/* Article 1: Naming Laws */}
      <article className="space-y-6">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-blue-500 pl-4" id="naming-laws">Strict Naming Laws by Country</h2>
        <p className="leading-relaxed text-lg">
          While many cultures allow parents freedom in naming, several nations enforce strict legal lists to preserve cultural heritage and prevent embarrassment. These laws often dictate the phonotactic structure of allowed names.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Iceland: Mannanafnanefnd</h3>
            <p className="text-sm leading-relaxed mb-4">
              The <strong>Icelandic Naming Committee</strong> maintains a register of approved names. Names must be capable of having Icelandic grammatical case endings (declensions) and must not conflict with the linguistic structure of Icelandic.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
              <li>No letter 'C', 'Q', or 'W' (not in alphabet).</li>
              <li>Must clearly indicate gender (historically).</li>
            </ul>
            <cite className="text-xs text-slate-500 block">Source: Lög um mannanöfn (Personal Names Act), No. 45/1996.</cite>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">Portugal: Approved Lists</h3>
            <p className="text-sm leading-relaxed mb-4">
              Portugal is perhaps the most strict, requiring names to be traditional Portuguese, gender-specific, and fully spelled out (no nicknames). The <em>Instituto dos Registos e do Notariado</em> publishes an 80+ page document of allowed and forbidden names.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
              <li><strong>Forbidden:</strong> Tom (must be Tomás).</li>
              <li><strong>Forbidden:</strong> Ben (must be Benjamim).</li>
            </ul>
            <cite className="text-xs text-slate-500 block">Source: IRN, Lista de Nomes Próprios.</cite>
          </div>
        </div>
      </article>

      <AdUnit slotId="article-middle" />

      {/* Article 2: Zipf's Law */}
      <article className="space-y-6">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4" id="zipfs-law">The Mathematics of Names: Zipf's Law</h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
            <strong>Zipf's law</strong> is an empirical law formulated using mathematical statistics. It states that given some corpus of natural language utterances, the frequency of any word is inversely proportional to its rank in the frequency table.
          </p>
          <p>
            Surprisingly, this power-law distribution applies to <strong>First Names</strong> as well. In almost every country, a very small number of names (e.g., James, Mary, Mohamed, Wei) account for a disproportionately large percentage of the population, while the "long tail" of unique names stretches out infinitely.
          </p>
          <p className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800/30 text-sm">
            <strong>The Implications:</strong> Parents often strive for uniqueness, pushing naming trends further down the "long tail." This accelerates name turnover (fashion cycles), a phenomenon studied quantitatively in sociology. This explains why names like "Jennifer" (top of curve) can suddenly feel dated, while "rare" names become the new status signal.
          </p>
          <cite className="text-xs text-slate-500 block mt-2 not-italic">Reference: Hahn, H. & Bentley, R. A. (2003). "Drift as a mechanism for cultural change: An example from baby names". *Proceedings of the Royal Society*.</cite>
        </div>
      </article>

      {/* Article 3: Phonosemantics */}
      <article className="space-y-6">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-indigo-500 pl-4" id="phonosemantics">Phonosemantics: Meaning in Sound</h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
            <strong>Phonosemantics</strong> (or sound symbolism) suggests that vocal sounds carry meaning in and of themselves, separate from the etymological history of the word. This field challenges the Saussurean concept that the signifier (sound) and signified (meaning) have an arbitrary relationship.
          </p>
          <p>
            For example, the <strong>GL-</strong> cluster in English is disproportionately associated with light or vision: <em>glitter, gleam, glow, glint, glare, glass, glimpse</em>.
          </p>
          <p>
            The <strong>SN-</strong> cluster is often associated with the nose or mouth: <em>snout, sneeze, snore, sniff, snack, snarl</em>.
          </p>
          <p>
            When analyzing names, our engine looks for these "Phonesthemes." A name like "Gloria" subconsciously triggers the "light/vision" association of the GL- cluster, making it feel "radiant" purely through sound, even if the listener doesn't know the Latin root.
          </p>
          <cite className="text-xs text-slate-500 block mt-2 not-italic">Reference: Magnus, M. (2001). *What's in a Word? Studies in Phonosemantics*.</cite>
        </div>
      </article>

      {/* Article 4: Nominative Determinism */}
      <article className="space-y-6">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-rose-500 pl-4" id="determinism">Nominative Determinism & Implicit Egotism</h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
            <strong>Nominative determinism</strong> is the hypothesis that people tend to gravitate towards areas of work that fit their names. The term was first used in the magazine *New Scientist* in 1994, after the discovery of a book on polar explorations by Daniel <em>Snowman</em> and an article on urology by researchers <em>Splatt</em> and <em>Weedon</em>.
          </p>
          <p>
             While often dismissed as coincidence, researchers Pelham, Mirenberg, and Jones (2002) found a statistically significant preference for people to live in places (e.g., people named Louis living in St. Louis) or choose careers (e.g., people named Dennis becoming dentists) that share letters with their names. This is attributed to <strong>Implicit Egotism</strong>—the unconscious preference for things we associate with ourselves.
          </p>
          <div className="my-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <h4 className="font-bold text-sm mb-2">The Name-Letter Effect</h4>
              <p className="text-sm">
                  People also tend to prefer brands, partners, and even street names that share their initials. This subtle psychological bias suggests that a name acts as a "filter" for how we interact with the world, guiding micro-decisions over a lifetime.
              </p>
          </div>
          <cite className="text-xs text-slate-500 block mt-2 not-italic">Reference: Pelham, B. W., et al. (2002). "Why Susie sells seashells by the seashore: Implicit egotism and major life decisions."</cite>
        </div>
      </article>

      {/* Article 5: The Bouba/Kiki Effect */}
      <article className="space-y-6">
        <h2 className="text-3xl font-serif text-slate-900 dark:text-white border-l-4 border-purple-500 pl-4" id="bouba-kiki">The Bouba/Kiki Effect</h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
             The <strong>Bouba/Kiki effect</strong> is a non-arbitrary mapping between speech sounds and the visual shape of objects. It was first documented by Wolfgang Köhler in 1929 using nonsense words.
          </p>
          <p>
             When shown a curvy shape and a spiky shape, and asked which is "Bouba" and which is "Kiki," over 95% of people across cultures (including those without written language) identify the curvy shape as Bouba and the spiky one as Kiki.
          </p>
          <ul className="list-disc pl-5 space-y-2">
             <li><strong>Bouba Sounds:</strong> Voiced bilabial stops (/b/, /m/) and back rounded vowels (/u/, /o/). These require the mouth to make a rounded shape.</li>
             <li><strong>Kiki Sounds:</strong> Unvoiced velar or dental stops (/k/, /t/) and high front vowels (/i/). These feel "sharp" in the throat and mouth.</li>
          </ul>
          <p>
              In personal naming, this creates an "Acoustic Personality." A name like "Molly" (Bouba) is perceived as softer and more approachable, while a name like "Beatrix" (Kiki) is perceived as sharper, more energetic, and more competent.
          </p>
          <cite className="text-xs text-slate-500 block mt-2 not-italic">Reference: Ramachandran, V.S. & Hubbard, E.M. (2001). "Synaesthesia: A window into perception, thought and language".</cite>
        </div>
      </article>
      
      <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
          ← Return to Analysis Lab
        </Link>
      </div>
    </div>
  );
};