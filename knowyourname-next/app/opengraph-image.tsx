import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Know Your Name - Scientific Name Analysis';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '30px',
                        background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '40px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ fontSize: '100px', fontWeight: 'bold' }}>K</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '80px', fontWeight: 'bold', letterSpacing: '-2px' }}>KnowYourName</div>
                        <div style={{ fontSize: '32px', color: '#94a3b8', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Scientific Analysis
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
