export const playMorseCode = (morse: string) => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  
  const ctx = new AudioContext();
  const dotDuration = 0.06; // Standard speed
  const freq = 600; // Comfortable tone frequency
  
  let currentTime = ctx.currentTime + 0.1;

  morse.split('').forEach(char => {
    if (char === '.' || char === '-') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.frequency.value = freq;
      osc.type = 'sine';
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const duration = char === '.' ? dotDuration : dotDuration * 3;
      
      osc.start(currentTime);
      
      // Smooth envelope
      gain.gain.setValueAtTime(0, currentTime);
      gain.gain.linearRampToValueAtTime(1, currentTime + 0.005);
      gain.gain.setValueAtTime(1, currentTime + duration - 0.005);
      gain.gain.linearRampToValueAtTime(0, currentTime + duration);
      
      osc.stop(currentTime + duration);
      currentTime += duration + dotDuration;
    } else if (char === ' ') {
      currentTime += dotDuration * 2;
    } else if (char === '/') {
      currentTime += dotDuration * 6;
    }
  });
};

export const speakName = (text: string) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85; 
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) || voices[0];
  if (preferredVoice) utterance.voice = preferredVoice;
  window.speechSynthesis.speak(utterance);
};

// C Major Pentatonic Scale (C, D, E, G, A) spanning 2 octaves
// Sounds pleasing in almost any random order
const SCALE = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  783.99, // G5
  880.00, // A5
];

export const playMelody = (name: string) => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  
  const ctx = new AudioContext();
  const now = ctx.currentTime;
  
  name.toUpperCase().replace(/[^A-Z]/g, '').split('').forEach((char, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Map character A-Z to the scale using modulo
    const noteIndex = (char.charCodeAt(0) - 65) % SCALE.length;
    const freq = SCALE[noteIndex];
    
    osc.frequency.value = freq;
    osc.type = 'triangle'; // Triangle wave sounds more like a bell/chime
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const startTime = now + (index * 0.25); // Play notes 250ms apart
    const duration = 0.5;
    
    osc.start(startTime);
    
    // Bell-like envelope (quick attack, long decay)
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05); // Attack
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // Decay
    
    osc.stop(startTime + duration);
  });
};