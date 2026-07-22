import {
  Building2, Plane, Wallet, Receipt, ShieldCheck, ArrowRightLeft,
  Newspaper, type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';

type Theme = { icon: LucideIcon; a: string; b: string };

const themes: Record<string, Theme> = {
  'Business Setup': { icon: Building2, a: '#11C2CC', b: '#1763E8' },
  'Visas & Immigration': { icon: Plane, a: '#8B5CF6', b: '#1763E8' },
  Banking: { icon: Wallet, a: '#10B981', b: '#0BA2AB' },
  'Tax & Compliance': { icon: Receipt, a: '#F59E0B', b: '#E8590C' },
  Compliance: { icon: ShieldCheck, a: '#0E47B0', b: '#11C2CC' },
  'Corporate Changes': { icon: ArrowRightLeft, a: '#EC4899', b: '#8B5CF6' },
};

const fallback: Theme = { icon: Newspaper, a: '#11C2CC', b: '#1763E8' };

/**
 * Branded generative cover art for blog posts — category-tinted glows,
 * icon chip and a Dubai skyline silhouette on the brand navy base.
 */
export default function BlogCover({
  category,
  className = 'h-36',
  iconSize = 'h-10 w-10',
  children,
}: {
  category: string;
  className?: string;
  iconSize?: string;
  children?: ReactNode;
}) {
  const theme = themes[category] ?? fallback;
  const Icon = theme.icon;

  return (
    <div className={`relative flex items-end overflow-hidden bg-brand-navy p-5 ${className}`}>
      {/* Category-tinted glows */}
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${theme.b}66 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-6 h-36 w-36 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${theme.a}55 0%, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      {/* Dubai skyline silhouette */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-white/[0.07]"
        viewBox="0 0 400 64"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 64 V42 H16 V30 H30 V42 H44 V22 H58 V64 H70 V34 H88 V64 H100 V26 H112 V64 H126 V44 H142 V64 H154 V10 L160 2 L166 10 V64 H180 V36 H196 V64 H210 V18 H222 V64 H238 V40 H254 V64 H266 V28 H280 V64 H296 V46 H312 V64 H326 V24 H340 V64 H356 V38 H372 V64 H386 V50 H400 V64 Z" />
      </svg>

      {/* Icon chip */}
      <span
        className={`absolute right-4 top-4 grid place-items-center rounded-xl border border-white/15 bg-white/10 backdrop-blur ${iconSize}`}
      >
        <Icon className="h-1/2 w-1/2 text-white" />
      </span>

      {children}
    </div>
  );
}
