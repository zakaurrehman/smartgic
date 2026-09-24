import {
  Building2, Plane, Wallet, Receipt, ShieldCheck, ArrowRightLeft,
  Newspaper, type LucideIcon,
} from 'lucide-react';
import BrandMark from '../ui/BrandMark';

type Theme = { icon: LucideIcon; a: string; b: string; label: string };

const themes: Record<string, Theme> = {
  'Business Setup': { icon: Building2, a: '#11C2CC', b: '#1763E8', label: 'Business Setup Guide' },
  'Visas & Immigration': { icon: Plane, a: '#8B5CF6', b: '#1763E8', label: 'Visa & Residency Guide' },
  Banking: { icon: Wallet, a: '#10B981', b: '#0BA2AB', label: 'Corporate Banking Guide' },
  'Tax & Compliance': { icon: Receipt, a: '#F59E0B', b: '#E8590C', label: 'UAE Tax Guide' },
  Compliance: { icon: ShieldCheck, a: '#11C2CC', b: '#0E47B0', label: 'Compliance Guide' },
  'Corporate Changes': { icon: ArrowRightLeft, a: '#EC4899', b: '#8B5CF6', label: 'Company Changes Guide' },
};

const fallback: Theme = { icon: Newspaper, a: '#11C2CC', b: '#1763E8', label: 'Smartgic Guide' };

/**
 * Generative cover for posts that have no supplied artwork.
 *
 * Composed like the supplied branded covers — brand mark top left, a headline
 * on the left, a visual on the right, the Dubai skyline along the base — so a
 * grid mixing the two reads as one family rather than photos and placeholders.
 *
 * Everything is sized in container query units (cqw), so the composition
 * scales like an image from a 350px card up to the 768px article cover. The
 * caller sets the box; PostCover gives it the covers' native 1200:630 ratio.
 */
export default function BlogCover({
  category,
  className = '',
}: {
  category: string;
  className?: string;
}) {
  const theme = themes[category] ?? fallback;
  const Icon = theme.icon;

  return (
    <div
      className={`relative overflow-hidden bg-brand-navy ${className}`}
      style={{ containerType: 'inline-size' }}
      aria-hidden="true"
    >
      {/* Category-tinted light, sized to the cover so it fills at any width */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            `radial-gradient(60% 85% at 82% 42%, ${theme.b}66 0%, transparent 70%)`,
            `radial-gradient(50% 70% at 2% 105%, ${theme.a}55 0%, transparent 72%)`,
            'linear-gradient(135deg, #0A1730 0%, #0F2148 100%)',
          ].join(', '),
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Dubai skyline along the base */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[30%] w-full text-white/[0.08]"
        viewBox="0 0 400 64"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 64 V42 H16 V30 H30 V42 H44 V22 H58 V64 H70 V34 H88 V64 H100 V26 H112 V64 H126 V44 H142 V64 H154 V10 L160 2 L166 10 V64 H180 V36 H196 V64 H210 V18 H222 V64 H238 V40 H254 V64 H266 V28 H280 V64 H296 V46 H312 V64 H326 V24 H340 V64 H356 V38 H372 V64 H386 V50 H400 V64 Z" />
      </svg>

      {/* Brand mark, top left — where the supplied covers carry the logo */}
      <div className="absolute left-[6%] top-[11%] flex items-center" style={{ gap: '1.4cqw' }}>
        <BrandMark className="h-[6cqw] w-[6cqw]" />
        <span className="flex flex-col leading-none">
          <span className="font-extrabold tracking-tight text-white" style={{ fontSize: '2.6cqw' }}>
            SMARTGIC
          </span>
          <span
            className="font-semibold uppercase text-brand-cyan"
            style={{ fontSize: '1.35cqw', letterSpacing: '0.32em', marginTop: '0.5cqw' }}
          >
            Immigration
          </span>
        </span>
      </div>

      {/* Headline, left */}
      <div className="absolute left-[6%] top-[44%] max-w-[50%]">
        <p
          className="text-balance font-extrabold leading-[1.08] tracking-tight text-white"
          style={{ fontSize: '5.2cqw' }}
        >
          {theme.label}
        </p>
        <span
          className="block rounded-full"
          style={{
            width: '12cqw',
            height: '0.7cqw',
            marginTop: '2.4cqw',
            background: `linear-gradient(90deg, ${theme.a}, ${theme.b})`,
          }}
        />
      </div>

      {/* Visual, right */}
      <span
        className="absolute right-[9%] top-1/2 grid aspect-square w-[23%] -translate-y-1/2 place-items-center border border-white/15 bg-white/10 backdrop-blur"
        style={{
          borderRadius: '3cqw',
          boxShadow: `0 3cqw 8cqw -2cqw ${theme.b}99`,
        }}
      >
        <Icon className="h-1/2 w-1/2 text-white" strokeWidth={1.6} />
      </span>
    </div>
  );
}
