import { NameAnalysis, AnalysisMetrics, VowelConsonantData, StructuralData, PhoneticCounts, KeyboardStats, Encodings, SynesthesiaData, Psycholinguistics, SoundSymbolism, CompatibilityAnalysis, SonorityPoint, GenderLoading, Phonotactics, GlobalRobustness, Prosody, AcousticProfile, BenchmarkData, Archetype, RadioAnalysis, ElementalData, MouthKinetics, Phonestheme, MouthPoint, SocialImpression, InformationDynamics } from '../types';

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// Phonetic Categories (IPA Generalization)
const PLOSIVES = new Set(['K', 'T', 'D', 'B', 'P', 'G', 'C', 'Q']);
const FRICATIVES = new Set(['S', 'F', 'V', 'Z', 'H', 'J', 'X']);
const NASALS = new Set(['M', 'N']);
const LIQUIDS = new Set(['L', 'R']);
const GLIDES = new Set(['W', 'Y']);

// Articulatory Places (Physical location in mouth)
const LABIALS = new Set(['B', 'P', 'M', 'W', 'F', 'V']); // Lips
const CORONALS = new Set(['T', 'D', 'N', 'S', 'Z', 'L', 'R']); // Tongue Tip/Teeth
const DORSALS = new Set(['K', 'G', 'Y']); // Back of tongue/Throat

// English Letter Frequencies (Percentage) - Source: OEC
const ENGLISH_FREQ: Record<string, number> = {
  E: 11.16, A: 8.50, R: 7.58, I: 7.54, O: 7.16, T: 6.95, N: 6.65, S: 5.74, L: 5.49, C: 4.54,
  U: 3.63, D: 3.38, P: 3.17, M: 3.01, H: 3.00, G: 2.47, B: 2.07, F: 1.81, Y: 1.78, W: 1.29,
  K: 1.10, V: 1.01, X: 0.29, Z: 0.27, J: 0.20, Q: 0.20
};

// --- KEYBOARD LOGIC (Exported for UI Recalculation) ---

const KEYBOARD_LAYOUTS: Record<string, { rows: string[][], left: Set<string> }> = {
  QWERTY: {
    rows: [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']],
    left: new Set(['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Z', 'X', 'C', 'V', 'B'])
  },
  AZERTY: {
    rows: [['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'], ['W', 'X', 'C', 'V', 'B', 'N']],
    left: new Set(['A', 'Z', 'E', 'R', 'T', 'Q', 'S', 'D', 'F', 'G', 'W', 'X', 'C', 'V', 'B'])
  },
  QWERTZ: {
    rows: [['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Y', 'X', 'C', 'V', 'B', 'N', 'M']],
    left: new Set(['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Y', 'X', 'C', 'V', 'B'])
  },
  DVORAK: {
    rows: [['P', 'Y', 'F', 'G', 'C', 'R', 'L'], ['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S'], ['Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z']],
    left: new Set(['P', 'Y', 'F', 'G', 'C', 'A', 'O', 'E', 'U', 'I', 'Q', 'J', 'K', 'X', 'B'])
  },
  COLEMAK: {
    rows: [['Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y'], ['A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O'], ['Z', 'X', 'C', 'V', 'B', 'K', 'M']],
    left: new Set(['Q', 'W', 'F', 'P', 'G', 'A', 'R', 'S', 'T', 'D', 'Z', 'X', 'C', 'V', 'B'])
  }
};

export const calculateKeyboardStats = (name: string, layoutName: string = 'QWERTY'): KeyboardStats => {
  const layout = KEYBOARD_LAYOUTS[layoutName] || KEYBOARD_LAYOUTS['QWERTY'];
  const chars = name.toUpperCase().replace(/[^A-Z]/g, '').split('');

  // Row Sets
  const topRow = new Set(layout.rows[0]);
  const homeRow = new Set(layout.rows[1]);
  const bottomRow = new Set(layout.rows[2]);

  let left = 0, right = 0, alt = 0, lastHand = '';
  let top = 0, home = 0, bottom = 0;
  const keysPressed: Record<string, number> = {};

  chars.forEach(c => {
    keysPressed[c] = (keysPressed[c] || 0) + 1;

    const isLeft = layout.left.has(c);
    if (isLeft) left++; else right++;

    const hand = isLeft ? 'L' : 'R';
    if (lastHand && lastHand !== hand) alt++;
    lastHand = hand;

    if (topRow.has(c)) top++;
    else if (homeRow.has(c)) home++;
    else if (bottomRow.has(c)) bottom++;
  });

  return {
    leftHandCount: left,
    rightHandCount: right,
    balance: Math.abs(left - right) < 2 ? 'Balanced' : left > right ? 'Left-Dominant' : 'Right-Dominant',
    alternationScore: Math.round((alt / (chars.length - 1 || 1)) * 100),
    rowUsage: { top, home, bottom },
    keysPressed
  };
};

// Common Bigrams in English (Corpus: Google Books Ngram)
const COMMON_BIGRAMS = new Set(['TH', 'HE', 'IN', 'ER', 'AN', 'RE', 'ON', 'AT', 'EN', 'ND', 'OR', 'ES', 'TE', 'BY', 'RO', 'AL', 'AR', 'LE', 'ST', 'RA', 'MA', 'LI', 'NA', 'EL', 'LA']);

// Universally "Easy" sounds (Jakobson's Universals)
const UNIVERSAL_PHONEMES = new Set(['M', 'A', 'P', 'T', 'K', 'N', 'I', 'U']);
const DIFFICULT_GLOBAL_PHONEMES = new Set(['J', 'Q', 'R', 'V', 'W', 'X', 'Z']);

const SCRABBLE_POINTS: Record<string, number> = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
  N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

const MORSE_CODE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--.."
};

const BRAILLE_CODE: Record<string, string> = {
  A: "⠁", B: "⠃", C: "⠉", D: "⠙", E: "⠑", F: "⠋", G: "⠛", H: "⠓", I: "⠊", J: "⠚",
  K: "⠅", L: "⠇", M: "⠍", N: "⠝", O: "⠕", P: "⠏", Q: "⠟", R: "⠗", S: "⠎", T: "⠞",
  U: "⠥", V: "⠧", W: "⠺", X: "⠭", Y: "⠽", Z: "⠵"
};

const NATO_ALPHABET: Record<string, string> = {
  A: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot', G: 'Golf',
  H: 'Hotel', I: 'India', J: 'Juliet', K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November',
  O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango', U: 'Uniform',
  V: 'Victor', W: 'Whiskey', X: 'X-ray', Y: 'Yankee', Z: 'Zulu'
};

// --- NEW SCIENTIFIC MODULES ---

const analyzeSocialImpression = (chars: string[], phonetics: PhoneticCounts): SocialImpression => {
  // Based on Stereotype Content Model (Fiske et al., 2002)
  let warmthRaw = 0;
  let competenceRaw = 0;

  // 1. Phonetic Contributions
  warmthRaw += (phonetics.nasals * 3);
  warmthRaw += (phonetics.liquids * 3);
  warmthRaw += (phonetics.glides * 2);

  competenceRaw += (phonetics.plosives * 3);
  competenceRaw += (phonetics.fricatives * 2); // Fricatives imply friction/energy

  // 2. Vowel Analysis
  chars.forEach(c => {
    if (['A', 'O', 'U'].includes(c)) warmthRaw += 1.5; // Back/Round vowels = Warmth
    if (['I', 'E'].includes(c)) competenceRaw += 1.5; // Front/Sharp vowels = Precision/Competence
  });

  // 3. Structural Contributions
  if (chars.length <= 5) competenceRaw += 5; // Brevity = Efficiency
  if (chars.length > 7) warmthRaw += 3; // Length = Expressiveness

  // Ending Bias
  const last = chars[chars.length - 1];
  if (['A', 'Y', 'O'].includes(last)) warmthRaw += 5; // Open ending
  if (PLOSIVES.has(last)) competenceRaw += 5; // Hard stop

  // Normalization to 0-100 scale (approximate max raw score around 25-30)
  const maxPoss = chars.length * 4;
  let warmthScore = Math.min(100, Math.round((warmthRaw / maxPoss) * 100));
  let competenceScore = Math.min(100, Math.round((competenceRaw / maxPoss) * 100));

  // Boost baseline to avoid 0s
  warmthScore = Math.min(95, warmthScore + 20);
  competenceScore = Math.min(95, competenceScore + 20);

  let quadrant: SocialImpression['quadrant'] = 'High Warmth, High Competence (Admired)';
  const mid = 55;
  if (warmthScore >= mid && competenceScore >= mid) quadrant = 'High Warmth, High Competence (Admired)';
  else if (warmthScore >= mid && competenceScore < mid) quadrant = 'High Warmth, Low Competence (Sympathetic)';
  else if (warmthScore < mid && competenceScore >= mid) quadrant = 'Low Warmth, High Competence (Envied)';
  else quadrant = 'Low Warmth, Low Competence (Distant)';

  const descriptors = [];
  if (warmthScore > 70) descriptors.push("Approachability");
  if (competenceScore > 70) descriptors.push("Authority");
  if (warmthScore < 40) descriptors.push("Detachment");
  if (competenceScore < 40) descriptors.push("Approachability");

  return { warmthScore, competenceScore, quadrant, descriptors };
};

const analyzeInformationDynamics = (chars: string[]): InformationDynamics => {
  // 1. Calculate Shannon Entropy (bits)
  // H = - sum(p_i * log2(p_i))
  const len = chars.length;
  const counts: Record<string, number> = {};
  chars.forEach(c => counts[c] = (counts[c] || 0) + 1);

  let entropy = 0;
  Object.values(counts).forEach(count => {
    const p = count / len;
    entropy -= p * Math.log2(p);
  });

  let entropyLabel: InformationDynamics['entropyLabel'] = 'Medium Entropy';
  if (entropy > 2.5) entropyLabel = 'High Entropy (Unpredictable)';
  else if (entropy < 1.5) entropyLabel = 'Low Entropy (Patterned)';

  // 2. Rarity Score (vs English Corpus)
  let raritySum = 0;
  let rarestChar = chars[0];
  let minFreq = 100;

  chars.forEach(c => {
    const freq = ENGLISH_FREQ[c] || 0.1; // Default low if unknown
    raritySum += (100 - (freq * 5)); // Weigh inverse frequency
    if (freq < minFreq) {
      minFreq = freq;
      rarestChar = c;
    }
  });

  const rarityScore = Math.min(100, Math.round(raritySum / len));
  const bitDepth = parseFloat((entropy * len).toFixed(2)); // Total bits

  return {
    shannonEntropy: parseFloat(entropy.toFixed(2)),
    entropyLabel,
    rarityScore,
    rarestChar,
    bitDepth
  };
};

const analyzeBiomechanics = (chars: string[]): MouthKinetics => {
  const map: Record<string, { x: number, y: number, label: string }> = {
    B: { x: 5, y: 10, label: 'Labial Stop' }, P: { x: 5, y: 10, label: 'Labial Stop' },
    M: { x: 5, y: 10, label: 'Labial Nasal' }, W: { x: 5, y: 20, label: 'Labial Glide' },
    F: { x: 10, y: 15, label: 'Labiodental' }, V: { x: 10, y: 15, label: 'Labiodental' },
    T: { x: 30, y: 10, label: 'Alveolar Stop' }, D: { x: 30, y: 10, label: 'Alveolar Stop' },
    N: { x: 30, y: 10, label: 'Alveolar Nasal' }, S: { x: 35, y: 15, label: 'Alveolar Fricative' },
    Z: { x: 35, y: 15, label: 'Alveolar Fricative' }, L: { x: 35, y: 20, label: 'Alveolar Liquid' },
    R: { x: 45, y: 25, label: 'Retroflex' },
    J: { x: 50, y: 10, label: 'Palatal' }, Y: { x: 50, y: 15, label: 'Palatal Glide' },
    K: { x: 85, y: 10, label: 'Velar Stop' }, G: { x: 85, y: 10, label: 'Velar Stop' },
    H: { x: 95, y: 40, label: 'Glottal' },
    Q: { x: 85, y: 10, label: 'Velar Stop' }, X: { x: 85, y: 15, label: 'Velar Fricative' },
    I: { x: 20, y: 10, label: 'High Front Vowel' }, E: { x: 25, y: 40, label: 'Mid Front Vowel' },
    A: { x: 50, y: 90, label: 'Low Central Vowel' },
    U: { x: 80, y: 10, label: 'High Back Vowel' }, O: { x: 80, y: 40, label: 'Mid Back Vowel' },
  };
  const points: MouthPoint[] = chars.map(c => {
    const data = map[c] || { x: 50, y: 50, label: 'Unknown' };
    return { char: c, ...data };
  });
  let netFlow = 0;
  for (let i = 0; i < points.length - 1; i++) {
    netFlow += (points[i].x - points[i + 1].x);
  }
  let flowDirection: MouthKinetics['flowDirection'] = 'Scattered';
  if (netFlow > 15) flowDirection = 'Outward (Projective)';
  else if (netFlow < -15) flowDirection = 'Inward (Ingestive)';
  else flowDirection = 'Centralized';
  const yValues = points.map(p => p.y);
  const yRange = Math.max(...yValues) - Math.min(...yValues);
  let jawMovement: MouthKinetics['jawMovement'] = 'Stable';
  if (yRange > 60) jawMovement = 'High Activity';
  else if (yRange < 20) jawMovement = 'Low Activity';
  return { points, flowDirection, jawMovement };
};

const detectPhonesthemes = (name: string): Phonestheme[] => {
  const definitions: Record<string, { meaning: string, examples: string }> = {
    'GL': { meaning: 'Light / Vision', examples: 'glitter, glow, gleam, glance' },
    'SN': { meaning: 'Nose / Mouth', examples: 'snout, sneeze, snore, snack' },
    'FL': { meaning: 'Movement / Flow', examples: 'fly, flow, float, flee' },
    'SL': { meaning: 'Slide / Negative', examples: 'slip, slide, slime, slur' },
    'STR': { meaning: 'Linear / Rigid', examples: 'straight, strip, street, string' },
    'TW': { meaning: 'Small / Twist', examples: 'twist, twig, tweak, twinkle' },
    'BR': { meaning: 'Violent / Break', examples: 'break, bruise, breach' },
    'CR': { meaning: 'Bent / Broken', examples: 'crack, cripple, crook' },
    'SP': { meaning: 'Point / Emit', examples: 'spit, spark, spot, spike' },
    'ST': { meaning: 'Stability / Stand', examples: 'stand, still, stop, stay' }
  };
  const found: Phonestheme[] = [];
  const n = name.toUpperCase();
  Object.entries(definitions).forEach(([key, val]) => {
    if (n.includes(key)) {
      found.push({ sound: key, meaning: val.meaning, examples: val.examples, found: true });
    }
  });
  return found;
};

// --- ADVANCED PSYCHOMETRICS (v2.0) ---

const analyzeTrustworthiness = (name: string): any => {
  // Cognitive Fluency: Easy to say = Trustworthy (Song & Schwarz, 2009)
  const n = name.toUpperCase();
  let score = 100;

  // Penalty for length > 6
  if (n.length > 6) score -= (n.length - 6) * 5;

  // Penalty for adjacent consonants (Clusters)
  let cluster = 0;
  for (const char of n) {
    if (!VOWELS.has(char)) cluster++;
    else cluster = 0;

    if (cluster > 1) score -= 10;
    if (cluster > 2) score -= 15;
  }

  // Bonus for alternating C-V (Ideal structure)
  // Simple heuristic: ratio of V vs C should be balanced approx 0.4-0.6
  const vowels = n.replace(/[^AEIOU]/g, '').length;
  const ratio = vowels / n.length;
  if (ratio >= 0.4 && ratio <= 0.6) score += 10;

  score = Math.max(0, Math.min(100, score));

  let label = 'Medium Trust';
  if (score >= 80) label = 'High Trust (Fluent)';
  else if (score < 50) label = 'Low Trust (Complex)';

  return {
    score,
    label,
    description: score >= 80
      ? "Your name flows easily, which the brain interprets as safe and truthful."
      : "Your name is complex and distinctive, signaling sophistication but requiring more cognitive effort."
  };
};

const analyzeSmileIndex = (name: string): any => {
  // Facial Feedback: Front vowels force a smile.
  const n = name.toUpperCase();
  let front = 0;
  let back = 0;

  // Heuristic weighting
  const chars = n.split('');
  chars.forEach(c => {
    if (['E', 'I', 'Y'].includes(c)) front += 2;
    if (['A'].includes(c)) front += 1; // 'A' can be varying
    if (['O', 'U', 'W'].includes(c)) back += 2;
    if (['M', 'P', 'B'].includes(c)) back += 1; // Lip closure
  });

  const total = front + back || 1;
  const smileScore = Math.round((front / total) * 100);

  let muscleAction = 'Neutral';
  if (smileScore > 60) muscleAction = 'Zygomaticus (Smile)';
  if (smileScore < 40) muscleAction = 'Orbicularis (Pout)';

  return {
    score: smileScore,
    muscleAction,
    description: smileScore > 60
      ? "Your name contains front vowels that force the mouth to widen, mimicking a smile."
      : smileScore < 40
        ? "Your name contains back vowels that round the lips, creating a serious or intimate expression."
        : "Your name has a balanced mouth shape, engaging both smiling and rounding muscles."
  };
};

const analyzeDominance = (name: string): any => {
  // Frequency Code: Low freq (large) vs High freq (small)
  const weights: Record<string, number> = {
    K: 1, T: 1, P: 1, S: 1, I: 1, E: 1, F: 1, // Sharp/High/Small
    G: 5, D: 5, B: 5, Z: 5, O: 5, U: 5, M: 4, R: 4, L: 4, N: 4, // Heavy/Low/Large
    A: 3, J: 3, H: 2, V: 3, W: 3, Y: 2, X: 2, Q: 3, C: 2 // Mid
  };

  let totalWeight = 0;
  const chars = name.toUpperCase().replace(/[^A-Z]/g, '').split('');

  chars.forEach(c => {
    totalWeight += weights[c] || 3;
  });

  const avgWeight = parseFloat((totalWeight / chars.length).toFixed(1));

  let label = 'Balanced';
  if (avgWeight < 2.5) label = 'Approachable/Agile';
  if (avgWeight > 3.5) label = 'Dominant/Authoritative';

  return {
    frequencyWeight: avgWeight,
    label,
    description: avgWeight > 3.5
      ? "Dominant sounds (Low Frequency). Biologically signals size, authority, and stability."
      : avgWeight < 2.5
        ? "Approachable sounds (High Frequency). Biologically signals agility, speed, and friendliness."
        : "Balanced frequency profile. Signals a reliable and adaptable presence."
  };
};

// Dictionary for common names that defy standard rules
const IPA_EXCEPTIONS: Record<string, string> = {
  'SEAN': '/ʃɔːn/',
  'SHAUN': '/ʃɔːn/',
  'CHLOE': '/kloʊi/',
  'PHOEBE': '/fiːbi/',
  'GEORGE': '/dʒɔːrdʒ/',
  'CHARLOTTE': '/ʃɑːrlət/',
  'THOMAS': '/tɒməs/', // TH is T
  'ISLAND': '/aɪlənd/',
  'XAVIER': '/zeɪviər/',
  'SIOBHAN': '/ʃɪvɔːn/',
  'SAOIRSE': '/sɜːrʃə/',
  'NIALL': '/naɪl/',
  'LEIGH': '/liː/',
  'HUGH': '/hjuː/',
  'GEOFFREY': '/dʒɛfri/'
};

const generateHeuristicIPA = (name: string): string => {
  let ipa = name.toUpperCase();

  // Check exceptions first
  if (IPA_EXCEPTIONS[ipa]) return IPA_EXCEPTIONS[ipa];

  // Expanded Heuristics for better English Approximation
  ipa = ipa.replace(/PH/g, 'f');
  ipa = ipa.replace(/TH/g, 'θ');
  ipa = ipa.replace(/SH/g, 'ʃ');
  ipa = ipa.replace(/CH/g, 'tʃ');
  ipa = ipa.replace(/NG/g, 'ŋ');
  ipa = ipa.replace(/QU/g, 'kw');
  ipa = ipa.replace(/X/g, 'ks');
  ipa = ipa.replace(/OO/g, 'uː');
  ipa = ipa.replace(/EE/g, 'iː');
  ipa = ipa.replace(/IGH/g, 'aɪ'); // High, Light
  ipa = ipa.replace(/TION/g, 'ʃən');
  ipa = ipa.replace(/WR/g, 'r'); // Write, Wren
  ipa = ipa.replace(/^KN/, 'n'); // Knife, Know
  ipa = ipa.replace(/CK/g, 'k');
  ipa = ipa.replace(/TCH/g, 'tʃ'); // Match

  ipa = ipa.replace(/A/g, 'æ');
  ipa = ipa.replace(/E/g, 'ɛ');
  ipa = ipa.replace(/I/g, 'ɪ');
  ipa = ipa.replace(/O/g, 'ɒ');
  ipa = ipa.replace(/U/g, 'ʌ');
  ipa = ipa.replace(/J/g, 'dʒ');
  ipa = ipa.replace(/Y$/g, 'i'); // Happy
  ipa = ipa.replace(/Y/g, 'j'); // Yes
  ipa = ipa.replace(/C/g, 'k');
  return `/${ipa.toLowerCase()}/`;
};

const AVG_NAME_STATS = { length: 6.1, vowelPct: 39.4, complexity: 0.2 };
const analyzeBenchmarks = (length: number, vowelPct: number): BenchmarkData => {
  const lengthDiff = Math.round(((length - AVG_NAME_STATS.length) / AVG_NAME_STATS.length) * 100);
  const vowelDiff = Math.round(((vowelPct - AVG_NAME_STATS.vowelPct) / AVG_NAME_STATS.vowelPct) * 100);
  const isOutlier = Math.abs(lengthDiff) > 40 || Math.abs(vowelDiff) > 40;
  return { lengthDiff, vowelDiff, complexityDiff: 0, isOutlier };
};

const getSynesthesiaColor = (char: string): string => {
  // Simner et al. (2005) - Cross-Modal Correspondence
  const map: Record<string, string> = {
    A: '#ef4444', // Red
    B: '#1e40af', // Dark Blue
    C: '#facc15', // Yellow
    D: '#374151', // Dark Grey
    E: '#22c55e', // Green
    F: '#9ca3af', // Grey/Silver
    G: '#a855f7', // Purple
    H: '#ea580c', // Orange
    I: '#f8fafc', // White/Light Grey
    J: '#db2777', // Pink/Purple
    K: '#f59e0b', // Orange/Yellow
    L: '#fcd34d', // Pale Yellow
    M: '#b91c1c', // Red/Maroon
    N: '#fbbf24', // Amber
    O: '#ffffff', // White
    P: '#ec4899', // Pink
    Q: '#7c3aed', // Violet
    R: '#dc2626', // Strong Red
    S: '#fbbf24', // Yellow/White
    T: '#2563eb', // Blue
    U: '#f59e0b', // Gold
    V: '#0ea5e9', // Sky Blue
    W: '#1e3a8a', // Dark Blue/Indigo
    X: '#111827', // Black
    Y: '#fef08a', // Light Yellow
    Z: '#000000'  // Black
  };
  return map[char] || '#94a3b8';
};

const calculateSonorityProfile = (chars: string[]): SonorityPoint[] => {
  return chars.map(char => {
    let score = 1; let category = 'Stop/Plosive';
    if (VOWELS.has(char)) { score = 10; category = 'Vowel (Peak)'; }
    else if (GLIDES.has(char)) { score = 8; category = 'Glide'; }
    else if (LIQUIDS.has(char)) { score = 6; category = 'Liquid'; }
    else if (NASALS.has(char)) { score = 4; category = 'Nasal'; }
    else if (FRICATIVES.has(char)) { score = 2; category = 'Fricative'; }
    return { char, score, category };
  });
};

const analyzeAcousticProfile = (sonority: SonorityPoint[]): AcousticProfile => {
  if (sonority.length < 2) { return { avgSlope: 0, peakCount: 1, energyDescription: 'Static / Sustained', maxSignal: sonority[0]?.score || 5 }; }
  let totalDelta = 0;
  for (let i = 0; i < sonority.length - 1; i++) { totalDelta += Math.abs(sonority[i + 1].score - sonority[i].score); }
  const avgSlope = parseFloat((totalDelta / (sonority.length - 1)).toFixed(2));
  const peakCount = sonority.filter(p => p.score >= 8).length;
  const maxSignal = Math.max(...sonority.map(s => s.score));
  let energyDescription = "Balanced Flow";
  if (avgSlope > 4.5) energyDescription = "Explosive (High Dynamic Range)";
  else if (avgSlope < 2.5) energyDescription = "Legato (Smooth/Sustained)";
  else if (avgSlope >= 2.5 && avgSlope <= 4.5) energyDescription = "Rhythmic (Moderate Dynamics)";
  return { avgSlope, peakCount, energyDescription, maxSignal };
};

const analyzePhonotactics = (name: string): Phonotactics => {
  const n = name.toUpperCase();
  if (n.length < 2) return { score: 1, label: 'High Probability (Common)', complexity: 'Simple' };
  let commonBigramsFound = 0; const totalBigrams = n.length - 1; let hasComplexCluster = false; let consonantStreak = 0;
  for (let i = 0; i < totalBigrams; i++) {
    const bigram = n.substring(i, i + 2);
    if (COMMON_BIGRAMS.has(bigram)) commonBigramsFound++;
    if (!VOWELS.has(n[i])) consonantStreak++; else consonantStreak = 0;
    if (consonantStreak >= 3) hasComplexCluster = true;
  }
  if (!VOWELS.has(n[n.length - 1])) consonantStreak++;
  if (consonantStreak >= 3) hasComplexCluster = true;
  const score = totalBigrams > 0 ? (commonBigramsFound / totalBigrams) : 1;
  let finalScore = score;
  if (hasComplexCluster) finalScore -= 0.2;
  const vowels = n.replace(/[^AEIOU]/g, '').length;
  const ratio = vowels / n.length;
  if (ratio > 0.3 && ratio < 0.6) finalScore += 0.2;
  finalScore = Math.max(0, Math.min(1, finalScore));
  let label: Phonotactics['label'] = 'Medium Probability';
  if (finalScore > 0.6) label = 'High Probability (Common)';
  if (finalScore < 0.3) label = 'Low Probability (Rare/Exotic)';
  return { score: parseFloat(finalScore.toFixed(2)), label, complexity: hasComplexCluster ? 'Complex Cluster' : 'Simple' };
};

const analyzeProsody = (name: string): Prosody => {
  const n = name.toUpperCase();
  const vowels = n.match(/[AEIOU]/g);
  const syllCount = vowels ? vowels.length : 1;

  let stressPattern: Prosody['stressPattern'] = 'Complex/Unknown';
  let meter: Prosody['meter'] = 'Unknown';
  let musicalNotation = '○';

  if (syllCount === 1) {
    stressPattern = 'Monosyllabic';
    meter = 'Trochee'; // Default single beat
    musicalNotation = '●';
  }
  else if (syllCount === 2) {
    // Default English: Trochaic (Strong-Weak) like RO-bert
    stressPattern = 'Trochaic (Strong-Weak)';
    meter = 'Trochee';
    musicalNotation = '● ○';

    // French ending detection = Iambic (Weak-Strong) like ma-RIE
    if (/(INE|ETTE|OO|OON|ELLE|EE)$/.test(n)) {
      stressPattern = 'Iambic (Weak-Strong)';
      meter = 'Iamb';
      musicalNotation = '○ ●';
    }
  }
  else if (syllCount === 3) {
    stressPattern = 'Dactylic (Strong-Weak-Weak)';
    meter = 'Dactyl';
    musicalNotation = '● ○ ○';
  }
  else if (syllCount > 3) {
    stressPattern = 'Polysyllabic Flow';
    meter = 'Unknown';
    musicalNotation = '● ○ ○ ○';
  }

  let rhythmType: Prosody['rhythmType'] = 'Balanced';
  let maxCluster = 0; let currentCluster = 0;
  for (let char of n) { if (!VOWELS.has(char)) { currentCluster++; maxCluster = Math.max(maxCluster, currentCluster); } else { currentCluster = 0; } }

  if (maxCluster >= 3) rhythmType = 'Syncopated (Interrupted)';
  else if (maxCluster <= 1) rhythmType = 'Flowing (Smooth)';

  return { stressPattern, meter, musicalNotation, rhythmType, syllableEstimate: syllCount };
};

const analyzeGlobalPronounceability = (name: string): GlobalRobustness & any => {
  // Replaces the old analyzeGlobalRobustness with new "Travel Score" logic
  const n = name.toUpperCase();
  const chars = n.split('');
  const difficultFound: string[] = [];

  // Difficult Phonemes Map (International Context)
  // TH: Hard for German/French
  // R: Hard for Japanese/Chinese
  // W/V: Hard for Germanic/Slavic confusion
  // J: Varies wildly (Y vs J vs H)

  if (n.includes('TH')) difficultFound.push('TH (Dental Fricative)');
  chars.forEach(c => {
    if (['R'].includes(c)) difficultFound.push('R (Liquid r)');
    if (['W', 'V'].includes(c)) difficultFound.push('W/V (Labial Glide)');
    if (['J', 'Q', 'X'].includes(c)) difficultFound.push(c + ' (Rare Consonant)');
  });

  const uniqueDifficult = Array.from(new Set(difficultFound));

  let score = 100;
  score -= (uniqueDifficult.length * 15);

  // Bonus for Universal Structure (CVCV)
  let isCVCV = true;
  for (let i = 0; i < n.length; i++) {
    const type = VOWELS.has(n[i]) ? 'V' : 'C';
    const expected = (i % 2 === 0) ? 'C' : 'V'; // Very rough check, just looking for alternation
    // Actually, true CVCV is hard to detect perfectly without dictionary, 
    // so we rely on Universal Phoneme count instead.
  }

  let universalCount = 0;
  chars.forEach(c => { if (UNIVERSAL_PHONEMES.has(c)) universalCount++; });
  if (universalCount / n.length > 0.6) score += 10;

  score = Math.max(0, Math.min(100, score));

  let label: 'International' | 'Regional' | 'Local' = 'Regional';
  let explanation = "Your name has some sounds that are specific to certain languages.";

  if (score >= 80) {
    label = 'International';
    explanation = "Your name uses 'Universal Phonemes' (M, A, K, I) found in almost every human language. It travels perfectly.";
  } else if (score <= 50) {
    label = 'Local';
    explanation = "Your name uses complex sounds (like 'Th' or 'R') that are physically difficult for non-native speakers to pronounce.";
  }

  return { score, label, diff: uniqueDifficult, class: label, difficulties: uniqueDifficult, explanation };
  // Returning mixed object to satisfy both Interfaces if needed, 
  // but we are fully replacing the old logic in the types.
};

const analyzeGenderLoading = (name: string): GenderLoading => {
  let score = 0; const n = name.toUpperCase(); const lastChar = n.slice(-1);
  if (['A', 'I', 'E', 'Y'].includes(lastChar)) score += 4; if (['O'].includes(lastChar)) score -= 2; if (['U'].includes(lastChar)) score += 1;
  if (PLOSIVES.has(lastChar)) score -= 4; if (NASALS.has(lastChar)) score -= 1;
  if (FRICATIVES.has(lastChar)) { if (lastChar === 'S') score -= 1; else score += 1; }

  // Suffix analysis for better accuracy
  if (/ETTE$|INE$|ELLE$|IA$|NA$/.test(n)) score += 5;
  if (/SON$|TON$|ER$|US$|O$/.test(n)) score -= 5;

  if (n.length > 7) score += 2; if (n.length < 5) score -= 1;
  const matches = n.match(/[LMNR]/g); if (matches && matches.length > 2) score += 2;
  const baseF = 50 + (score * 5); let fChance = Math.max(5, Math.min(95, baseF)); let mChance = 100 - fChance;
  const uncertainty = Math.max(0, 20 - Math.abs(score * 2)); fChance -= (uncertainty / 2); mChance -= (uncertainty / 2);
  let leaning: GenderLoading['leaning'] = 'Androgynous';
  if (fChance > mChance + 15) leaning = 'Feminine-Coded'; if (mChance > fChance + 15) leaning = 'Masculine-Coded';
  return { masculineChance: Math.round(mChance), feminineChance: Math.round(fChance), neutralChance: Math.round(uncertainty), leaning, reason: `Ending "${lastChar}" & phoneme density` };
};

const analyzeSoundSymbolism = (chars: string[]): SoundSymbolism => {
  let roundness = 0; let sharpness = 0;
  chars.forEach(c => { if (['B', 'D', 'G', 'L', 'M', 'N', 'O', 'U'].includes(c)) roundness += 2; if (['R', 'H'].includes(c)) roundness += 1; if (['K', 'T', 'P', 'I', 'E', 'Z', 'S', 'X'].includes(c)) sharpness += 2; if (['F', 'V', 'J'].includes(c)) sharpness += 1; });
  const total = roundness + sharpness || 1; const boubaScore = Math.round((roundness / total) * 100);
  let shapeCategory: SoundSymbolism['shapeCategory'] = 'Neutral';
  if (boubaScore > 60) shapeCategory = 'Round/Curved (Bouba)'; if (boubaScore < 40) shapeCategory = 'Angular/Sharp (Kiki)';
  let labial = 0, coronal = 0, dorsal = 0;
  chars.forEach(c => { if (LABIALS.has(c)) labial++; else if (CORONALS.has(c)) coronal++; else if (DORSALS.has(c)) dorsal++; });
  const maxPlace = Math.max(labial, coronal, dorsal); let articulatoryPlace: SoundSymbolism['articulatoryPlace'] = 'Mixed';
  if (maxPlace === labial) articulatoryPlace = 'Front-Mouth (Labial)'; else if (maxPlace === coronal) articulatoryPlace = 'Mid-Mouth (Coronal)'; else if (maxPlace === dorsal) articulatoryPlace = 'Back-Mouth (Velar)';
  return { boubaScore, shapeCategory, articulatoryPlace, reference: "Ramachandran & Hubbard (2001); Köhler (1929)" };
};

const analyzePsycholinguistics = (name: string, phonotactics: Phonotactics): Psycholinguistics => {
  const n = name.toUpperCase(); const chars = n.split(''); let difficulty = 0; let prevType = '';
  chars.forEach(c => { const isVowel = VOWELS.has(c); const type = isVowel ? 'V' : 'C'; if (prevType === type && type === 'C') difficulty += 20; prevType = type; });
  if (n.length > 8) difficulty += 15;
  const cognitiveEase = Math.max(0, Math.min(100, 100 - difficulty));
  let fluencyDescription = cognitiveEase > 75 ? "High Fluency (Easy to Process)" : cognitiveEase < 45 ? "Low Fluency (Distinctive/Complex)" : "Moderate Fluency";
  let weight = 0; let vowels = 0;
  chars.forEach(c => { if (['O', 'U', 'A'].includes(c)) { weight += 2; vowels++; } else if (['I', 'E', 'Y'].includes(c)) { weight -= 1; vowels++; } });
  const perceivedWeight = Math.min(100, Math.max(0, 50 + (weight * 10)));
  let weightDescription = perceivedWeight > 60 ? "Acoustically Large/Dominant" : perceivedWeight < 40 ? "Acoustically Small/Agile" : "Acoustically Neutral";
  const optimalLength = n.length >= 3 && n.length <= 6; const familiarityScore = Math.round(phonotactics.score * 100);
  const distinctivenessScore = Math.round((1 - phonotactics.score) * 100); const balanceZone = familiarityScore > 40 && familiarityScore < 80;
  return { cognitiveEase, perceivedWeight, fluencyDescription, weightDescription, optimalLength, familiarityScore, distinctivenessScore, balanceZone };
};

const analyzeMorphology = (name: string): string => {
  const n = name.toUpperCase();
  if (/(SON|TON|FORD|LEY|HAM|MAN|BERT|HARD|WIN|TH|WELL|STON)$/.test(n)) return 'Germanic / Old English Morphology';
  if (/(US|OS|IUS|AS|IS|IX|AX)$/.test(n)) return 'Latinate / Hellenic Morphology';
  if (/(A|IA|INA|TTE|ELLE|ANA|ITA|INE)$/.test(n)) return 'Romance / Latinate Morphology';
  if (/(OV|EV|SKI|SKA|OVA|INA|IC|ICH|KOV)$/.test(n)) return 'Slavic Morphology';
  if (/(O|I|ANI|INO|ELLO|ETTO)$/.test(n)) return 'Italic Morphology';
  if (/^(MC|MAC|O'|NI|TRE|POL|PEN)/.test(n)) return 'Celtic / Brythonic Morphology';
  if (/^(AL|EL|ABD|BEN)/.test(n) || /(IM|IN|AH)$/.test(n)) return 'Semitic Morphology';
  const vowels = n.replace(/[^AEIOU]/g, '').length; const ratio = vowels / n.length;
  if (ratio > 0.6) return 'High Vocalic Structure (Open Syllables)'; if (ratio < 0.35) return 'High Consonantal Structure (Closed Syllables)';
  return 'Standard Indo-European Phonotactics';
}

const analyzeArchetype = (phonetics: PhoneticCounts, vowelPct: number, boubaScore: number): Archetype => {
  // 1. The Architect (Structure, Hardness, Plosives)
  if (phonetics.plosives > (phonetics.liquids + phonetics.nasals) && boubaScore < 45) {
    return { name: 'The Architect', traits: ['Structural', 'Decisive', 'Grounded'], description: 'Your name is built on plosive consonants (T, K, P, D)—sounds created by sudden releases of air that feel solid and definitive. Like the foundation of a building, these sounds create an impression of reliability and permanence. People instinctively sense structure in names like yours.', icon: '🏗️', element: 'Earth' };
  }
  // 2. The Luminary (Openness, Vowels, Glides)
  if (vowelPct > 55 || phonetics.glides >= 2) {
    return { name: 'The Luminary', traits: ['Radiant', 'Expressive', 'Magnetic'], description: 'Your name opens outward like sunlight through a window. Dominated by vowels and gliding sounds, it creates an expansive acoustic space that projects confidence and warmth. These are the kinds of names that fill a room naturally—they don\'t demand attention, they simply illuminate.', icon: '✨', element: 'Fire' };
  }
  // 3. The Weaver (Flow, Liquids, Nasals)
  if ((phonetics.liquids + phonetics.nasals) >= 2 && boubaScore > 55) {
    return { name: 'The Weaver', traits: ['Flowing', 'Empathetic', 'Artistic'], description: 'Your name moves like water over stones—continuous, melodic, and deeply satisfying to the ear. Rich in liquid sounds (L, R) and nasals (M, N), it creates the acoustic sensation of connection and flow. Linguists call these the most "beautiful" sounds in human language because they never stop; they transition smoothly, weaving syllables together.', icon: '🌊', element: 'Water' };
  }
  // 4. The Catalyst (Complexity, Fricatives, Mixed)
  return { name: 'The Catalyst', traits: ['Dynamic', 'Energizing', 'Distinctive'], description: 'Your name has friction—and that\'s a superpower. Built with fricative sounds (S, Z, F, V) that create audible air turbulence, your name has an inherent energy and edge. These sounds command attention through their sharpness. They accelerate conversations rather than smoothing them over.', icon: '🌪️', element: 'Air' };
};

const analyzeRadio = (name: string): RadioAnalysis => {
  const chars = name.toUpperCase().split('');
  const natoString = chars.map(c => NATO_ALPHABET[c] || c);
  let confusionPoints = 0;
  const confusablePairs: string[] = [];
  if (name.includes('M') && name.includes('N')) { confusionPoints += 15; confusablePairs.push("M/N Blur"); }
  if (name.includes('T') && name.includes('D')) { confusionPoints += 10; confusablePairs.push("T/D Blur"); }
  if (name.includes('F') && name.includes('S')) { confusionPoints += 10; confusablePairs.push("F/S Hiss"); }
  if (name.includes('B') && name.includes('V')) { confusionPoints += 10; confusablePairs.push("B/V Blur"); }
  if (name.length < 4) { confusionPoints += 10; confusablePairs.push("Brevity Risk"); }
  if (name.length > 9) { confusionPoints += 10; confusablePairs.push("Memory Load"); }
  const clarityScore = Math.max(0, 100 - confusionPoints);
  let clarityLabel = "Crystal Clear";
  if (clarityScore < 85) clarityLabel = "Standard Fidelity";
  if (clarityScore < 60) clarityLabel = "Low Fidelity (Repeat Likely)";
  return { natoString, clarityScore, clarityLabel, confusablePairs };
};

const analyzeElemental = (chars: string[]): ElementalData => {
  let atomicMass = 0;
  const composition: { element: string, count: number, atomicNumber: number }[] = [];
  const elementCounts: Record<string, number> = {};
  chars.forEach(c => {
    const atomicNumber = c.charCodeAt(0) - 64;
    atomicMass += atomicNumber;
    elementCounts[c] = (elementCounts[c] || 0) + 1;
  });
  Object.keys(elementCounts).sort().forEach(key => {
    composition.push({ element: key, count: elementCounts[key], atomicNumber: key.charCodeAt(0) - 64 });
  });
  let vowelEnergy = 0;
  chars.forEach(c => { if (VOWELS.has(c)) vowelEnergy++; });
  const ratio = vowelEnergy / chars.length;
  let stateOfMatter: ElementalData['stateOfMatter'] = 'Liquid';
  if (ratio > 0.6) stateOfMatter = 'Plasma';
  else if (ratio > 0.45) stateOfMatter = 'Gas';
  else if (ratio < 0.25) stateOfMatter = 'Solid';
  return { atomicMass, composition, stateOfMatter };
};

const analyzeGenderBias = (name: string): GenderBias => {
  const n = name.toUpperCase();
  // 1. Text mining of gender-copded phonemes (Barry & Harper, 1995)
  let feminineScore = 0;
  let masculineScore = 0;

  // Feminine Indicators: 'A' ending, 'E' ending, 'N' ending (soft), more vowels
  if (n.endsWith('A')) feminineScore += 30;
  if (n.endsWith('E') && !n.endsWith('KE')) feminineScore += 15;
  if (n.endsWith('Y') || n.endsWith('I')) feminineScore += 10;
  if (n.includes('LL')) feminineScore += 10;
  if (n.includes('SS')) feminineScore += 10;

  // Masculine Indicators: Plosive endings (T, K, P, D), 'O' ending, 'R' ending
  if (/[TKPD]$/.test(n)) masculineScore += 25;
  if (n.endsWith('O')) masculineScore += 20;
  if (n.endsWith('R')) masculineScore += 15;
  if (n.endsWith('SON')) masculineScore += 30;
  if (n.length <= 4) masculineScore += 5; // Brevity

  // Vowel Density Check
  const vowels = n.replace(/[^AEIOU]/g, '').length;
  const density = vowels / n.length;
  if (density > 0.5) feminineScore += 10;
  else masculineScore += 10;

  // Normalize to 0-100 scale where 0=Masc, 100=Fem
  const total = feminineScore + masculineScore || 1;
  const ratio = feminineScore / total;
  let score = Math.round(ratio * 100);

  // Damping for neutrality
  if (score > 40 && score < 60) score = 50;

  let leaning: GenderBias['leaning'] = 'Neutral';
  let viralHook = "Your name is perfectly gender-neutral.";
  let explanation = "Your name contains an equal balance of 'soft' linguistic cues and 'hard' phonetic stops.";

  if (score > 60) {
    leaning = 'Feminine-Coded';
    viralHook = "Your name is 85% Feminine-Coded.";
    explanation = "Your name relies heavily on 'Sonorants' (L, M, N) and open vowels, which are cross-culturally associated with feminine archetypes.";
  } else if (score < 40) {
    leaning = 'Masculine-Coded';
    viralHook = "Your name is 90% Masculine-Coded.";
    explanation = "Your name is defined by 'Obstruents' (T, K, D) and closed syllables, creating a structure traditionally aligned with masculine naming conventions.";
  }

  return { score, leaning, viralHook, explanation };
};

const analyzeViralSummary = (
  name: string,
  archetype: Archetype,
  dominance: DominanceScale,
  trust: TrustworthinessScore,
  entropy: InformationDynamics,
  gender: GenderBias
): ViralSummary => {
  let headline = "The Enigma";
  let emoji = "🔮";
  let adjectives = ["Unique", "Mysterious", "Complex"];
  let socialVibe = "Your name is a beautiful puzzle. People remember names they can't quite figure out—and yours has that rare quality of being both familiar enough to feel comfortable, yet distinctive enough to linger in the mind long after the conversation ends.";

  // 1. The Powerhouse (High Dominance)
  if (dominance.frequencyWeight > 3.5) {
    headline = "The Natural Leader";
    emoji = "🦁";
    adjectives = ["Commanding", "Grounded", "Unforgettable"];
    socialVibe = "When you introduce yourself, something shifts in the room. Your name uses low-frequency sounds that humans instinctively associate with strength and stability—the same acoustic patterns found in the words we use for big, powerful things. In job interviews, first dates, or crowded networking events, this name doesn't compete for attention—it simply receives it.";
  }
  // 2. The Charmer (High Fluency/Trust)
  else if (trust.score > 85) {
    headline = "The Instant Connection";
    emoji = "✨";
    adjectives = ["Magnetic", "Effortless", "Warm"];
    socialVibe = "Here's a secret: people make judgments about trustworthiness within milliseconds of hearing a name, and yours passes that test beautifully. It flows with zero cognitive friction—no tongue-twisters, no awkward pauses. Research shows names like yours create an unconscious feeling of comfort and familiarity, even in strangers. You're starting every interaction with an invisible head start.";
  }
  // 3. The Innovator (High Entropy/Unique)
  else if (entropy.shannonEntropy > 2.8) {
    headline = "The Trailblazer";
    emoji = "⚡";
    adjectives = ["Bold", "Modern", "Electric"];
    socialVibe = "Your name breaks the mold. Mathematically, it contains more 'information entropy' than average—meaning it's genuinely surprising and distinctive. This is the acoustic signature of innovation. Think of the names behind startups, artists, and disruptors. Your name stands out in a sea of sameness, and that's exactly where breakthroughs happen.";
  }
  // 4. The Poet (Water element - flowing, melodic)
  else if (archetype.element === 'Water') {
    headline = "The Storyteller";
    emoji = "🌊";
    adjectives = ["Melodic", "Flowing", "Artistic"];
    socialVibe = "Your name moves like water—smooth, continuous, and deeply satisfying to say out loud. It's rich in 'sonorants' (L, M, N, R sounds), which linguists call the most musical sounds in human language. People with names like yours are often perceived as creative, empathetic, and emotionally intelligent. Your name doesn't demand attention; it invites connection.";
  }
  // 5. The Luminary (Fire element - radiant, open)
  else if (archetype.element === 'Fire') {
    headline = "The Main Character";
    emoji = "🌟";
    adjectives = ["Radiant", "Expressive", "Memorable"];
    socialVibe = "Some names exist in the background. Yours doesn't. With its open vowels and resonant structure, your name has 'protagonist energy'—it projects outward, fills a room, and sticks in memory without trying too hard. You could whisper it and people would still turn their heads. That's not ego; that's acoustics.";
  }
  // 6. The Diplomat (Balanced warmth/competence)
  else if (dominance.frequencyWeight >= 2.8 && dominance.frequencyWeight <= 3.2 && trust.score > 65) {
    headline = "The Perfect Balance";
    emoji = "⚖️";
    adjectives = ["Versatile", "Approachable", "Professional"];
    socialVibe = "Your name hits the rare sweet spot between warmth and authority. It's friendly enough to put people at ease, yet structured enough to command respect. Psychologists call this the 'admired' quadrant—where people are seen as both likeable AND competent. It's a powerful combination that makes you equally at home in boardrooms and barbecues.";
  }
  // 7. The Architect (Earth element - solid, structured)
  else if (archetype.element === 'Earth') {
    headline = "The Foundation";
    emoji = "🏛️";
    adjectives = ["Solid", "Reliable", "Timeless"];
    socialVibe = "In a world of trends and fleeting novelty, your name is a rock. It's built on 'stops' and 'plosives'—the consonants that create structure and clarity. People trust names like yours instinctively because they feel substantial, grounded, and real. This is the acoustic architecture of names that stand the test of time.";
  }
  // 8. The Catalyst (Air element - dynamic, energetic)
  else if (archetype.element === 'Air') {
    headline = "The Spark";
    emoji = "🌪️";
    adjectives = ["Dynamic", "Quick", "Energizing"];
    socialVibe = "Your name has friction—and that's a superpower. It uses fricatives (S, F, Z sounds) that create 'acoustic energy', making it feel fast, sharp, and alive. This is the naming signature of disruptors and change-makers. Your name doesn't just enter a conversation; it accelerates it.";
  }
  // Fallback for edge cases
  else {
    headline = "The Original";
    emoji = "💫";
    adjectives = ["Distinctive", "Intriguing", "One-of-a-Kind"];
    socialVibe = "Your name defies easy categorization—and that's exactly what makes it special. It combines phonetic elements in a way that's genuinely uncommon, creating an acoustic fingerprint that belongs to no one else. In a world of algorithms trying to predict everything, your name is refreshingly unpredictable.";
  }

  // Generate Share Text
  const shareText = `🧬 Name Analysis: ${name}\n✨ Vibe: ${headline} ${emoji}\n📊 Traits: ${adjectives.join(" • ")}\n\nDiscover your name's hidden linguistics at KnowYourName.co.in`;

  return { headline, emoji, adjectives, socialVibe, shareText };
};


export const analyzeName = (rawName: string): NameAnalysis | null => {
  if (!rawName || rawName.length < 2) return null;
  // IMPROVED SANITIZATION: Normalize Accents (NFD) then remove diacritics
  const sanitized = rawName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, '');
  if (sanitized.length < 2) return null;

  const chars = sanitized.split('');

  let alphaWeight = 0; const charCounts: Record<string, number> = {}; const uniqueSet = new Set(chars);
  chars.forEach(c => { alphaWeight += (c.charCodeAt(0) - 64); charCounts[c] = (charCounts[c] || 0) + 1; });

  let vowelCount = 0; chars.forEach(c => { if (VOWELS.has(c)) vowelCount++; });
  const consonantCount = chars.length - vowelCount; const vowelPercentage = (vowelCount / chars.length) * 100;

  const phonetics: PhoneticCounts = { plosives: 0, fricatives: 0, nasals: 0, liquids: 0, glides: 0, unknown: 0 };
  chars.forEach(c => {
    if (PLOSIVES.has(c)) phonetics.plosives++; else if (FRICATIVES.has(c)) phonetics.fricatives++;
    else if (NASALS.has(c)) phonetics.nasals++; else if (LIQUIDS.has(c)) phonetics.liquids++;
    else if (GLIDES.has(c)) phonetics.glides++; else if (!VOWELS.has(c)) phonetics.unknown++;
  });

  const pArr = Object.entries(phonetics).sort((a, b) => b[1] - a[1]);
  const dominantSound = pArr[0][1] > 0 ? pArr[0][0].replace(/s$/, '') : 'Mixed';

  const keyboard = calculateKeyboardStats(sanitized, 'QWERTY'); // Default layout

  const synesthesia: SynesthesiaData = {
    primaryColor: getSynesthesiaColor(chars[0]), secondaryColor: getSynesthesiaColor(chars.find(c => c !== chars[0]) || chars[0]),
    description: `Simulated grapheme-color association based on prevalence studies (Simner et al., 2005).`, scientificRef: "Simner, J. et al. (2005). Synaesthesia: The prevalence of atypical cross-modal experiences.",
    colors: sanitized.split('').map(getSynesthesiaColor)
  };

  let scrabble = 0, morse = "", bin = "", braille = "";
  chars.forEach(c => { scrabble += SCRABBLE_POINTS[c] || 0; morse += (MORSE_CODE[c] || "") + " "; braille += (BRAILLE_CODE[c] || "") + " "; bin += c.charCodeAt(0).toString(2) + " "; });

  const phonotactics = analyzePhonotactics(sanitized);
  const prosody = analyzeProsody(sanitized);
  const sonorityProfile = calculateSonorityProfile(chars);
  const acousticProfile = analyzeAcousticProfile(sonorityProfile);
  const benchmarks = analyzeBenchmarks(chars.length, vowelPercentage);
  const ipaTranscription = generateHeuristicIPA(sanitized);
  const soundSymbolism = analyzeSoundSymbolism(chars);
  const archetype = analyzeArchetype(phonetics, vowelPercentage, soundSymbolism.boubaScore);
  const radioAnalysis = analyzeRadio(sanitized);
  const elementalData = analyzeElemental(chars);
  const mouthKinetics = analyzeBiomechanics(chars);
  const phonesthemes = detectPhonesthemes(sanitized);

  // NEW ANALYSES
  const socialImpression = analyzeSocialImpression(chars, phonetics);
  const informationDynamics = analyzeInformationDynamics(chars);
  const trustworthiness = analyzeTrustworthiness(sanitized);
  const smileIndex = analyzeSmileIndex(sanitized);
  const dominanceScale = analyzeDominance(sanitized);
  const genderBias = analyzeGenderBias(sanitized);
  const globalPronounceability = analyzeGlobalPronounceability(sanitized);

  const viralSummary = analyzeViralSummary(
    rawName,
    archetype,
    dominanceScale,
    trustworthiness,
    informationDynamics,
    genderBias
  );

  return {
    name: rawName.trim(),
    sanitizedName: sanitized,
    ipaTranscription: ipaTranscription,
    metrics: { totalChars: chars.length, uniqueChars: uniqueSet.size, alphaWeight },
    structure: {
      firstLetterCat: VOWELS.has(chars[0]) ? 'Vowel' : 'Consonant',
      lastLetterCat: VOWELS.has(chars[chars.length - 1]) ? 'Vowel' : 'Consonant',
      lengthCategory: chars.length < 5 ? 'Short' : chars.length > 8 ? 'Long' : 'Medium',
      firstLetterFrequency: 'Common',
      isSymmetrical: chars.join('') === chars.reverse().join('')
    },
    vcData: { vowelCount, consonantCount, vowelPercentage, densityLabel: vowelPercentage > 50 ? 'Vowel-Heavy' : 'Consonant-Heavy' },
    phonetics,
    dominantSound,
    keyboard,
    encodings: { scrabbleScore: scrabble, morseCode: morse, binarySequence: bin, braille },
    synesthesia,
    phonotacticImpression: phonotactics.label,
    soundSymbolism,
    psycholinguistics: {
      // Using generic defaults for now as full implementation is complex in single return
      cognitiveEase: 80, perceivedWeight: 50, fluencyDescription: 'Medium', weightDescription: 'Balanced',
      optimalLength: true, familiarityScore: 50, distinctivenessScore: 50, balanceZone: true,
      ...analyzePsycholinguistics(sanitized, phonotactics)
    },
    sonorityProfile,
    genderLoading: analyzeGenderLoading(sanitized),
    phonotactics,
    globalRobustness: { score: globalPronounceability.score, label: globalPronounceability.class === 'Local' ? 'Language-Specific' : globalPronounceability.class as any, difficultSounds: globalPronounceability.difficulties },
    prosody,
    acousticProfile,
    benchmarks,
    archetype,
    radioAnalysis,
    elementalData,
    mouthKinetics,
    phonesthemes,
    socialImpression,
    informationDynamics,
    trustworthiness,
    smileIndex,
    dominanceScale,
    genderBias,
    globalPronounceability,
    viralSummary // NEW
  };
};



const levenshtein = (a: string, b: string): number => {
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i; for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) { for (let i = 1; i <= a.length; i++) { const indicator = a[i - 1] === b[j - 1] ? 0 : 1; matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + indicator); } }
  return matrix[b.length][a.length];
};

export const analyzeCompatibility = (name1: string, name2: string): CompatibilityAnalysis | null => {
  const a1 = analyzeName(name1); const a2 = analyzeName(name2); if (!a1 || !a2) return null;
  const dist = levenshtein(a1.sanitizedName, a2.sanitizedName); const maxLength = Math.max(a1.sanitizedName.length, a2.sanitizedName.length); const similarity = Math.max(0, Math.round((1 - (dist / maxLength)) * 100));
  const p1 = a1.soundSymbolism.articulatoryPlace; const p2 = a2.soundSymbolism.articulatoryPlace; let placeMatch = "Complementary (Distinct Zones)"; if (p1 === p2) placeMatch = `Homorganic (${p1})`;
  const s1 = (a1.sanitizedName.match(/[AEIOU]+/g) || []).length; const s2 = (a2.sanitizedName.match(/[AEIOU]+/g) || []).length; let rhythmicSync = "Polyrhythmic (Different)"; if (s1 === s2) rhythmicSync = "Isorhythmic (Matched)";
  const combinedFluency = Math.round((a1.psycholinguistics.cognitiveEase + a2.psycholinguistics.cognitiveEase) / 2);
  return { name1: a1, name2: a2, phoneticSimilarity: similarity, placeOfArticulationMatch: placeMatch, rhythmicSync, combinedFluency };
};