import React from 'react';
import { NameAnalysis } from '../types';

interface Props {
  data: NameAnalysis;
  format?: 'story' | 'square' | 'landscape';
}

export const LinguisticPassport: React.FC<Props> = ({ data, format = 'story' }) => {
  // Common Colors
  const bg = '#0f172a';
  const primary = data.synesthesia.primaryColor;
  const secondary = data.synesthesia.secondaryColor;

  // Dimensions
  const dimensions = {
    story: { w: 600, h: 900 },
    square: { w: 1080, h: 1080 },
    landscape: { w: 1200, h: 630 }
  }[format];

  // Base Style
  const containerStyle: React.CSSProperties = {
    width: `${dimensions.w}px`,
    height: `${dimensions.h}px`,
    background: bg,
    backgroundImage: `radial-gradient(circle at 50% 0%, ${primary}40, transparent 70%)`,
    padding: format === 'square' ? '80px' : format === 'landscape' ? '60px' : '40px',
    display: 'flex',
    flexDirection: format === 'landscape' ? 'row' : 'column',
    justifyContent: 'space-between',
    position: 'relative',
    fontFamily: "'Playfair Display', serif",
    color: 'white',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  // Background Pattern (Shared)
  const pattern = (
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }}></div>
  );

  if (format === 'square') {
      // INSTAGRAM: Centered, Iconic, Focused on ONE metric (Shape/Personality)
      return (
        <div id={`passport-${format}`} style={containerStyle}>
            {pattern}
            
            <div style={{ textAlign: 'center', zIndex: 10 }}>
                 <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '20px' }}>
                    Linguistic Analysis
                 </div>
                 <div style={{ fontSize: '120px', lineHeight: 0.9, fontWeight: 'bold', background: `linear-gradient(to bottom right, #fff, ${primary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {data.name}
                 </div>
            </div>

            {/* Big Visual in Center */}
             <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <div style={{ width: '500px', height: '500px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '400px', height: '400px', borderRadius: '50%', border: `4px solid ${primary}`, opacity: 0.6, boxShadow: `0 0 100px ${primary}40` }}></div>
                     <div style={{ position: 'absolute', fontSize: '200px', opacity: 0.1, fontWeight: 'bold' }}>{data.name[0]}</div>
                </div>
                 <div style={{ position: 'absolute', bottom: '10%', background: '#0f172a', padding: '10px 40px', border: `1px solid ${primary}`, borderRadius: '50px', fontSize: '28px', fontFamily: "'Inter', sans-serif", boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    {data.soundSymbolism.shapeCategory}
                 </div>
            </div>

            <div style={{ textAlign: 'center', opacity: 0.6, fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
                <div>Scientific Reference: Ramachandran & Hubbard (2001)</div>
                <div style={{ marginTop: '5px', color: primary, fontWeight: 'bold' }}>knowyourname.co.in</div>
            </div>
        </div>
      );
  }

  if (format === 'landscape') {
      // LINKEDIN: Professional, Side-by-Side, Data Dense
      return (
         <div id={`passport-${format}`} style={containerStyle}>
             {pattern}
             
             {/* Left Column: Identity */}
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '40px' }}>
                 <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '10px' }}>
                    Phonetic Analysis
                 </div>
                 <div style={{ fontSize: '90px', lineHeight: 1, fontWeight: 'bold', background: `linear-gradient(to right, #fff, ${primary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    {data.name}
                 </div>
                 <div style={{ fontSize: '24px', opacity: 0.9, color: secondary, fontStyle: 'italic' }}>
                    {data.phonotacticImpression.split(' ')[0]} Origin
                 </div>
                 <div style={{ marginTop: 'auto', opacity: 0.5, fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>
                     Analyzed via <strong>knowyourname.co.in</strong>
                 </div>
             </div>

             {/* Right Column: Data Grid */}
             <div style={{ flex: 1, paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     {[
                         { label: 'Robustness', value: `${data.globalRobustness.score}/100`, sub: data.globalRobustness.label },
                         { label: 'Brain Fluency', value: data.psycholinguistics.cognitiveEase + '%', sub: 'Processing Speed' },
                         { label: 'Gender Bias', value: data.genderLoading.leaning.replace('-Coded',''), sub: 'Phonetic Probability' },
                         { label: 'Aesthetics', value: data.soundSymbolism.shapeCategory.split(' ')[0], sub: 'Bouba/Kiki Test' }
                     ].map((stat, i) => (
                         <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '12px' }}>
                             <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '5px' }}>
                                 {stat.label}
                             </div>
                             <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '2px' }}>{stat.value}</div>
                             <div style={{ fontSize: '12px', opacity: 0.7 }}>{stat.sub}</div>
                         </div>
                     ))}
                 </div>
                 <div style={{ marginTop: '30px', textAlign: 'right', opacity: 0.5, fontSize: '10px', fontFamily: "'Inter', sans-serif" }}>
                     Citations: Crystal (1987), Vitevitch (1999), Ramachandran (2001)
                 </div>
             </div>
         </div>
      );
  }

  // DEFAULT STORY FORMAT (Vertical)
  return (
    <div id={`passport-${format}`} style={containerStyle}>
        {pattern}

        {/* Header */}
        <div style={{ zIndex: 10 }}>
            <div style={{ 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                fontSize: '12px', 
                opacity: 0.7,
                marginBottom: '4px',
                fontFamily: "'Inter', sans-serif"
            }}>
                Official Linguistic Dossier
            </div>
            <div style={{ 
                fontSize: '64px', 
                lineHeight: 1,
                fontWeight: 'bold',
                background: `linear-gradient(to right, #fff, ${primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
            }}>
                {data.name}
            </div>
            <div style={{
                fontSize: '24px',
                fontStyle: 'italic',
                opacity: 0.9,
                color: secondary
            }}>
                {data.soundSymbolism.shapeCategory}
            </div>
        </div>

        {/* Center Graphic */}
        <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.03)',
                position: 'relative'
            }}>
                {/* Simulated Sonic Ring */}
                <div style={{
                     width: '240px', height: '240px', borderRadius: '50%', 
                     border: `2px solid ${primary}`,
                     opacity: 0.5
                }}></div>
                 <div style={{
                     position: 'absolute',
                     fontSize: '80px',
                     fontWeight: 'bold',
                     opacity: 0.1
                }}>
                    {data.name[0]}
                </div>
                
                {/* Data Points on Circle */}
                <div style={{ position: 'absolute', top: '20px', fontSize: '12px', background: '#0f172a', padding: '4px' }}>IPA: {data.dominantSound.toUpperCase()}</div>
                <div style={{ position: 'absolute', bottom: '20px', fontSize: '12px', background: '#0f172a', padding: '4px' }}>BOUBA-KIKI: {data.soundSymbolism.boubaScore}</div>
            </div>
        </div>

        {/* Stats Grid */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '40px'
        }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '4px' }}>Travel Score (Robustness)</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.globalRobustness.score}/100 ({data.globalRobustness.label})</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '4px' }}>Linguistic Root</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.phonotacticImpression.split(' ')[0]} Origin</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '4px' }}>Gender Leaning (Phonetic)</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.genderLoading.leaning.replace('-Coded', '')}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '4px' }}>Brain Processing</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.psycholinguistics.fluencyDescription.split('(')[0]}</div>
            </div>
        </div>

        {/* Footer */}
        <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            fontFamily: "'Inter', sans-serif",
            opacity: 0.6
        }}>
            <div>Know Your Name Laboratory</div>
            <div>knowyourname.co.in</div>
        </div>
    </div>
  );
};