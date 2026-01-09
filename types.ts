
export interface PhoneticCounts {
  plosives: number;
  fricatives: number;
  nasals: number;
  liquids: number;
  glides: number;
  unknown: number;
}

export interface AnalysisMetrics {
  totalChars: number;
  uniqueChars: number;
  alphaWeight: number; // Sum of A=1..Z=26
}

export interface VowelConsonantData {
  vowelCount: number;
  consonantCount: number;
  vowelPercentage: number;
  densityLabel: string;
}

export interface StructuralData {
  firstLetterCat: 'Vowel' | 'Consonant';
  lastLetterCat: 'Vowel' | 'Consonant';
  lengthCategory: 'Short' | 'Medium' | 'Long';
  firstLetterFrequency: 'Common' | 'Rare'; // Zipf's Law bucket
  isSymmetrical: boolean;
}

export interface KeyboardStats {
  leftHandCount: number;
  rightHandCount: number;
  balance: 'Left-Dominant' | 'Right-Dominant' | 'Balanced';
  alternationScore: number; // 0-100 score of how often hands switch
  rowUsage: { top: number; home: number; bottom: number };
  keysPressed: Record<string, number>; 
}

export interface Encodings {
  scrabbleScore: number;
  morseCode: string;
  binarySequence: string;
  braille: string; 
}

export interface SynesthesiaData {
  primaryColor: string; // Hex
  secondaryColor: string; // Hex
  description: string;
  scientificRef: string;
}

export interface SoundSymbolism {
  boubaScore: number; // 0 (Kiki/Sharp) to 100 (Bouba/Round)
  shapeCategory: 'Angular/Sharp (Kiki)' | 'Round/Curved (Bouba)' | 'Neutral';
  articulatoryPlace: 'Front-Mouth (Labial)' | 'Mid-Mouth (Coronal)' | 'Back-Mouth (Velar)' | 'Mixed';
  reference: string;
}

export interface Psycholinguistics {
  cognitiveEase: number; // 0-100 (Processing Fluency)
  perceivedWeight: number; // 0-100 (Frequency Code)
  fluencyDescription: string;
  weightDescription: string;
  optimalLength: boolean; // Baddeley Working Memory (3-6 items)
  familiarityScore: number; // 0-100 (Alter & Oppenheimer)
  distinctivenessScore: number;
  balanceZone: boolean;
}

export interface Phonotactics {
  score: number; // 0 to 1
  label: 'High Probability (Common)' | 'Medium Probability' | 'Low Probability (Rare/Exotic)';
  complexity: 'Simple' | 'Complex Cluster';
}

export interface Prosody {
  stressPattern: 'Trochaic (Strong-Weak)' | 'Iambic (Weak-Strong)' | 'Dactylic (Strong-Weak-Weak)' | 'Monosyllabic' | 'Complex/Unknown';
  rhythmType: 'Flowing (Smooth)' | 'Syncopated (Interrupted)' | 'Balanced';
  syllableEstimate: number;
}

export interface GlobalRobustness {
  score: number; // 0 to 100
  label: 'Universal' | 'Robust' | 'Language-Specific';
  difficultSounds: string[]; // List of phonemes hard to pronounce globally
}

export interface SonorityPoint {
  char: string;
  score: number; // 1-10 scale
  category: string;
}

export interface GenderLoading {
  masculineChance: number; // %
  feminineChance: number; // %
  neutralChance: number; // %
  leaning: 'Masculine-Coded' | 'Feminine-Coded' | 'Androgynous';
  reason: string;
}

export interface AcousticProfile {
  avgSlope: number; // Rate of change in sonority (Dynamic Range)
  peakCount: number; // Number of acoustic peaks (Vowels/Glides)
  energyDescription: string; // "Explosive", "Legato", "Balanced"
  maxSignal: number; // Peak sonority (1-10)
}

export interface BenchmarkData {
  lengthDiff: number; // deviation from avg (6.1)
  vowelDiff: number; // deviation from avg (39%)
  complexityDiff: number; // deviation from avg complexity
  isOutlier: boolean;
}

export interface Archetype {
  name: 'The Architect' | 'The Luminary' | 'The Weaver' | 'The Catalyst';
  traits: string[];
  description: string;
  icon: string;
  element: 'Earth' | 'Air' | 'Water' | 'Fire';
}

export interface RadioAnalysis {
  natoString: string[];
  clarityScore: number; // 0-100
  clarityLabel: string;
  confusablePairs: string[]; // e.g., ["M/N risk", "T/D risk"]
}

export interface ElementalData {
  atomicMass: number;
  composition: { element: string, count: number, atomicNumber: number }[];
  stateOfMatter: 'Solid' | 'Liquid' | 'Gas' | 'Plasma';
}

export interface MouthPoint {
  char: string;
  x: number; // 0 (Lips) to 100 (Throat)
  y: number; // 0 (Closed/Roof) to 100 (Open/Floor)
  label: string;
}

export interface MouthKinetics {
  points: MouthPoint[];
  flowDirection: 'Outward (Projective)' | 'Inward (Ingestive)' | 'Centralized' | 'Scattered';
  jawMovement: 'High Activity' | 'Low Activity' | 'Stable';
}

export interface Phonestheme {
  sound: string;
  meaning: string;
  examples: string;
  found: boolean;
}

// NEW: Social Psychology (Fiske)
export interface SocialImpression {
  warmthScore: number; // 0-100
  competenceScore: number; // 0-100
  quadrant: 'High Warmth, High Competence (Admired)' | 'High Warmth, Low Competence (Sympathetic)' | 'Low Warmth, High Competence (Envied)' | 'Low Warmth, Low Competence (Distant)';
  descriptors: string[];
}

// NEW: Information Theory (Shannon)
export interface InformationDynamics {
  shannonEntropy: number; // Bits
  entropyLabel: 'High Entropy (Unpredictable)' | 'Medium Entropy' | 'Low Entropy (Patterned)';
  rarityScore: number; // 0-100 (Based on English char frequency)
  rarestChar: string;
  bitDepth: number; // Total bits to encode name
}

export interface NameAnalysis {
  name: string;
  sanitizedName: string;
  ipaTranscription: string; 
  metrics: AnalysisMetrics;
  structure: StructuralData;
  vcData: VowelConsonantData;
  phonetics: PhoneticCounts;
  dominantSound: string;
  keyboard: KeyboardStats;
  encodings: Encodings;
  synesthesia: SynesthesiaData; 
  phonotacticImpression: string;
  soundSymbolism: SoundSymbolism; 
  psycholinguistics: Psycholinguistics;
  sonorityProfile: SonorityPoint[];
  genderLoading: GenderLoading;
  phonotactics: Phonotactics; 
  globalRobustness: GlobalRobustness;
  prosody: Prosody;
  acousticProfile: AcousticProfile;
  benchmarks: BenchmarkData; 
  archetype: Archetype; 
  radioAnalysis: RadioAnalysis; 
  elementalData: ElementalData; 
  mouthKinetics: MouthKinetics; 
  phonesthemes: Phonestheme[];
  socialImpression: SocialImpression; // New
  informationDynamics: InformationDynamics; // New
}

export interface CompatibilityAnalysis {
  name1: NameAnalysis;
  name2: NameAnalysis;
  phoneticSimilarity: number; // 0-100 (Levenshtein/Soundex)
  rhythmicSync: string; // Syllable/Stress match
  placeOfArticulationMatch: string;
  combinedFluency: number;
}