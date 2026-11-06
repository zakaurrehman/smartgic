import { ImageResponse } from 'next/og';
import { SHARE_IMAGE_ALT } from '@/lib/seo';

/**
 * Default social share card.
 *
 * The site declared `summary_large_image` on every page but shipped no image,
 * so shared links rendered as bare text. Generated at build time with no
 * external font or asset fetch, so it cannot fail the build.
 */

export const alt = SHARE_IMAGE_ALT;

const MARK =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><line x1="5.9" y1="45.4" x2="32.4" y2="18.6" stroke="#11C2CC" stroke-width="11.7" stroke-linecap="round"/><line x1="31.6" y1="45.4" x2="58.1" y2="18.6" stroke="#2C7BFF" stroke-width="11.7" stroke-linecap="round"/><circle cx="55.4" cy="45.4" r="5.85" fill="#11C2CC"/></svg>',
  ).toString('base64');
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0A1730 0%, #0F2148 55%, #0E47B0 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(17,194,204,0.28)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -220,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: 'rgba(23,99,232,0.30)',
          }}
        />

        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: '#050B1A',
              border: '1px solid rgba(255,255,255,0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* The Smartgic mark, as an inline SVG data URI. ImageResponse
                renders with Satori, where next/image is not available. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MARK} width={46} height={46} alt="" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: '#ffffff', letterSpacing: -0.5 }}>
              SMARTGIC
            </span>
            <span style={{ fontSize: 17, color: '#94a3b8', letterSpacing: 2 }}>
              IMMIGRATION · DUBAI
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 940 }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Business setup, visas,
          </span>
          <span
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: '#11C2CC',
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            tax, accounting &amp; audit
          </span>
          <span style={{ fontSize: 26, color: '#cbd5e1', marginTop: 24, lineHeight: 1.4 }}>
            One DET-licensed team in Dubai — from your first licence to your annual audit.
          </span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 22, color: '#94a3b8' }}>smartgicvisa.com</span>
          <span style={{ fontSize: 20, color: '#94a3b8' }}>Licensed by Dubai DET · 1394564</span>
        </div>
      </div>
    ),
    size,
  );
}
