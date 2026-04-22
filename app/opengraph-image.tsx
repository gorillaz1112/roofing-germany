import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dachbau Pro – Dachdecker-Meisterbetrieb in Wesseling & Köln';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #0f0d0d 0%, #1a1616 55%, #7a1418 100%)',
          position: 'relative',
          padding: '80px',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              'radial-gradient(circle at center, rgba(239,28,36,0.65) 0%, rgba(239,28,36,0) 70%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 26,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: '#EF1C24',
              boxShadow: '0 0 0 6px rgba(239,28,36,0.25)',
            }}
          />
          Dachdecker-Meisterbetrieb
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Dachbau Pro</span>
            <span
              style={{
                background:
                  'linear-gradient(135deg, #ff5a5f 0%, #EF1C24 60%, #b3141a 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: 80,
              }}
            >
              Wesseling · Köln · Bonn
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: 'rgba(255,255,255,0.8)',
                maxWidth: 780,
                lineHeight: 1.35,
              }}
            >
              Dachmontage · Reparatur · Abdichtung · 24h Notdienst
            </div>
            <div
              style={{
                background: '#EF1C24',
                color: 'white',
                padding: '14px 24px',
                borderRadius: 16,
                fontSize: 24,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              dachservice24plus.de
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
