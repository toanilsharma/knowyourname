import { NameAnalysis, SocialImpression, InformationDynamics, MouthKinetics, Phonotactics, GenderBias } from './types';

// Helper to select random template for variety
const select = (templates: string[]) => templates[Math.floor(Math.random() * templates.length)];

export const Interpolator = {
  
  // 1. Rhythm & Flow (Sonority)
  rhythm: (analysis: NameAnalysis): string => {
    const { stressPattern, rhythmType } = analysis.prosody;
    const { energyDescription } = analysis.acousticProfile;
    
    let narrative = `Your name follows a **${stressPattern}** rhythmic structure, which acts as the 'musical heatbeat' of your identity. `;
    
    if (rhythmType.includes("Flowing")) {
      narrative += select([
        "Acoustically, it flows without obstruction, utilizing liquid transitions that the human ear perceives as **harmonious and continuous**. In linguistic theory, this 'sonorant-heavy' quality creates an immediate impression of grace, suggesting a personality that moves through the world with fluidity rather than resistance.",
        "The syllabic progression is remarkably smooth, stripped of harsh stops. This gives your name a **liquid, melodic quality** that naturally de-escalates tension. People with this rhythmic signature are often subconsciously perceived as adaptable, empathetic, and emotionally intelligent before a word is even spoken.",
      ]);
    } else if (rhythmType.includes("Syncopated")) {
      narrative += select([
        "This creates a **catchy, energetic bounce** that serves as an auditory hook. The syncopation—or 'off-beat' stress—breaks the standard monotony of speech, making your name strictly more memorable. It signals a dynamic, active presence that refuses to fade into the background.",
        "The rhythm is **punchy and kinetic**, utilizing 'plosive' stops to create definition. This is the acoustic signature of action. Unlike softer names that drift, your name lands with impact, suggesting a personality that is decisive, modern, and high-energy.",
      ]);
    } else {
      narrative += "It strikes a **mathematically perfect balance** between sonorous vowels and defining consonants. This equilibrium appeals to the brain's preference for symmetry, projecting an aura of stability and reliability.";
    }

    narrative += ` Overall, the acoustic energy profile is classified as **${energyDescription.toLowerCase()}**, which influences how clearly it cuts through background noise in social environments.`;
    return narrative;
  },

  // 2. Mouth Feel (Biomechanics)
  mouthFeel: (analysis: NameAnalysis): string => {
    const { flowDirection, jawMovement } = analysis.mouthKinetics;
    let text = "";

    if (flowDirection.includes("Outward")) {
        text = "When properly articulated, your name propels kinetic energy **outward from the lips**. In psycholinguistics, this 'projective' motion is subconsciously linked to **extroversion and openness**. It physically invites the speaker to engage with the world, creating a micro-gesture of connection every time it is spoken.";
    } else if (flowDirection.includes("Inward")) {
        text = "Your name travels on an **inward trajectory**, moving from the front teeth or lips back toward the throat. This 'ingestive' motion is associated with **intimacy, self-containment, and reflection**. It requires the speaker to bring sound 'into' themselves, creating a subtle psychological feeling of closeness or exclusivity.";
    } else {
        text = "Your name centers its articulatory energy in the **mid-mouth**, avoiding extremes. This creates a sensation of **balance and grounding**. Neither aggressive nor retreating, it feels stable and confident to say—a neutral platform that allows your personality, rather than the sound itself, to take center stage.";
    }

    if (jawMovement === "High Activity") {
      text += " Additionally, the required **vertical jaw displacement** (opening the mouth wide) signals confidence. By forcing the speaker to 'open up' physically, the name acts as a subtle biological cue for authenticity and expressive power.";
    }

    return text;
  },

  // 3. Social Impression (Stereotypes)
  social: (analysis: NameAnalysis): { title: string; text: string } => {
    const { warmthScore, competenceScore, quadrant } = analysis.socialImpression;
    
    const title = quadrant.split('(')[1]?.replace(')', '') || "Balanced Impression";
    let text = "";

    if (warmthScore > 60 && competenceScore > 60) {
      text = "Your name lands in the **'Golden Quadrant' (Admired)** of the Stereotype Content Model. This is the rarest and most desirable outcome. It projects high **Warmth** (trustworthiness, kindness) AND high **Competence** (capability, intelligence) simultaneously. In professional settings, this gives you a massive advantage: you are seen as a leader who hasn't lost their humanity. It's the 'CEO' name signature.";
    } else if (warmthScore > 60) {
      text = "Your name scores famously high on **Warmth**. In social dynamics, you are the person everyone feels safe talking to. The acoustic softness signals **approachability, empathy, and benevolence**. The trade-off? You may sometimes need to over-communicate your boundaries, as people naturally assume you are accommodating. It is a powerful asset for community building and networking.";
    } else if (competenceScore > 60) {
      text = "Your name is acoustically wired for **Authority**. High Competence names use 'hard' sounds that signal **precision, decisiveness, and intellect**. You likely command respect easily in professional environments. However, in casual settings, this intensity can be intimidating. Using a nickname or softer tome can help bridge the gap when you want to appear more approachable.";
    } else {
      text = "Your name holds a **high intrigue factor**. By not leaning heavily into either 'warm' or 'competent' stereotypes, it creates a blank slate. This **mystery** is often associated with high-fashion brands or luxury concepts. It forces people to engage with *you* to figure you out, rather than making snap judgments based on your name alone.";
    }

    return { title, text };
  },

  // 4. Uniqueness (Entropy)
  uniqueness: (analysis: NameAnalysis): string => {
    const { rarityScore } = analysis.informationDynamics;
    
    if (rarityScore > 75) {
      return "You are a **Statistical Outlier** in the best possible way. Your name possesses high 'Information Entropy', meaning it defies predictive linguistic patterns. In a crowded market of Davids and Sarahs, your name acts as a **distinct pattern interrupt**. While it may take people an extra moment to process, that cognitive effort ensures it is **encoded deeply into long-term memory**.";
    } else if (rarityScore > 45) {
        return "Your name occupies the **'Sweet Spot' of Distinctiveness**. It is uncommon enough to feel personal and unique to you, yet it adheres to enough familiar phonotactic rules that it feels 'right'. This balance minimizes social friction while maximizing individual identity—a difficult equilibrium to achieve.";
    } else {
      return "Your name benefits from the **Processing Fluency Effect**. Because it follows established linguistic highways, the human brain processes it with zero friction. This cognitive ease is subconsciously translated into **trust and truthfulness**. It feels like a 'classic'—timeless, reliable, and deeply woven into the cultural fabric.";
    }
  },

  // 5. Structural DNA (Morphology)
  structure: (analysis: NameAnalysis): string => {
    const vowels = analysis.vcData.vowelPercentage;
    if (vowels > 45) {
      return "Your name is **Vowel-Dominant** (>45%). In acoustic theory, vowels carry the raw emotional content and volume of speech (the 'carrier wave'). This structure suggests a name that is **expressive, open, and loud**. It is designed to be shouted across a playground or heard in a crowd. It prioritizes **connection over information**.";
    } else if (vowels < 30) {
      return "Your name is **Consonant-Heavy**. Consonants are the 'shape' of speech—they break the sound wave to create meaning. This structure signals **intellectualism, precision, and solidity**. It feels engineered and deliberate. You don't just 'have' a name; you have a title. It prioritizes **definition over emotion**.";
    } else {
      return "You possess a **Mathematically Perfect Balance** of vowels and consonants (approx. 40/60). This 'Golden Ratio' of linguistics is found in the most enduring names across history because it pleases the brain's desire for **symmetry**. It offers enough vowels for flow and enough consonants for structure—a universally appealing architecture.";
    }
  },

  // 6. Typing Ergonomics
  ergonomics: (analysis: NameAnalysis): string => {
    const { balance, alternationScore } = analysis.keyboard;
    
    if (alternationScore > 60) {
        return "Your name is a **'Drumroll'** on the keyboard. It bounces rapidly between the left and right hands, creating a **high-flow rhythm** that is physically satisfying to type. In the digital age, where you type your name thousands of times, this micro-interaction creates a tiny dopamine hit of 'correctness' and speed.";
    }
    
    if (balance === 'Balanced') {
        return "Your name utilizes the **full span of the keyboard**, engaging both hands equally. This creates a subconscious feeling of **completeness and stability** during digital communication. It feels 'symmetrical' to the muscle memory, mirroring the balanced acoustics of the name itself.";
    } 
    
    return `Your name is **${balance}**. This creates a unique **unilateral muscle memory**, grouping the motion on one side of the keyboard. This allows for rapid, one-handed execution, making your name feel **compact, swift, and efficient** in digital environments like chat or email signatures.`;
  },

  // 7. Clarity (Radio)
  clarity: (analysis: NameAnalysis): string => {
    const { clarityScore } = analysis.radioAnalysis;
    
    if (clarityScore > 80) {
      return "Your name is **Broadcast Ready**. It relies on high-contrast phonetic sounds that cut through ambient noise frequencies (like 'K', 'T', 'P'). You rarely have to spell it out. This 'high-fidelity' quality projects **competence and certainty**—it sounds like a statement of fact rather than a request.";
    } else if (clarityScore > 50) {
      return "Your name possesses **Average Acoustic Fidelity**. It holds up reasonably well in standard conversation, though softer consonants might get lost in loud environments (like a busy bar). It strikes a middle ground: **distinct enough to be recognized**, but soft enough to avoid sounding harsh or aggressive.";
    } else {
      return "Your name is **Acoustically Soft**. It uses low-frequency or breathy sounds that can blend into background noise. While this leads to occasional mishearings, it creates a powerful **psychological intimacy**. It forces the listener to **lean in and focus** to hear you properly, establishing a closer connection from the very first introduction.";
    }
  }
};
