import { ImageResponse } from 'next/og';
import { analyzeName } from '@/lib/nameAnalysisEngine';
import { COMMON_NAMES } from '@/lib/commonNames';


export const dynamic = 'force-static';

export const alt = 'Name Analysis Results';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function generateStaticParams() {
  return COMMON_NAMES.map((name) => ({
    name: name.toLowerCase(),
  }));
}

export default async function Image({ params }: { params: { name: string } }) {
  const name = await params.name; // params is a promise in Next.js 15
  
  const decodedName = decodeURIComponent(name);
  const formattedName = decodedName.charAt(0).toUpperCase() + decodedName.slice(1);
  const analysis = analyzeName(formattedName);
  
  const archetype = analysis ? analysis.archetype.name : 'Scientific Analysis';
  const primaryColor = analysis ? analysis.synesthesia.primaryColor : '#475569';
  const secondaryColor = analysis ? analysis.synesthesia.secondaryColor : '#0f172a';
  const elementIcon = analysis ? analysis.archetype.icon : '🔬';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: `linear-gradient(to bottom right, ${secondaryColor}, #0f172a)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Abstract Background pattern */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', zIndex: 10 }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '20px',
            }}>
                 <div style={{ fontSize: '80px' }}>{elementIcon}</div>
                 <div style={{
                    fontSize: '120px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #fff, #cbd5e1)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 10px 30px rgba(0,0,0,0.3)',
                 }}>
                    {formattedName}
                </div>
            </div>
            
            <div style={{
                fontSize: '40px',
                padding: '15px 50px',
                background: primaryColor,
                borderRadius: '100px',
                color: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '6px',
                fontWeight: 'bold',
                border: '2px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
            }}>
                {archetype}
            </div>
            
             <div style={{ 
                 marginTop: '60px', 
                 display: 'flex', 
                 flexDirection: 'column', 
                 alignItems: 'center',
                 gap: '10px'
             }}>
                 <div style={{ 
                     fontSize: '24px', 
                     color: '#94a3b8', 
                     textTransform: 'uppercase', 
                     letterSpacing: '4px',
                     fontFamily: 'sans-serif',
                 }}>
                    Scientific Name Analysis
                </div>
                <div style={{ 
                     fontSize: '20px', 
                     color: 'rgba(255,255,255,0.4)', 
                     fontFamily: 'sans-serif',
                 }}>
                    KnowYourName.co.in
                </div>
            </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
