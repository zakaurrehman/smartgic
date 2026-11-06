import { cn } from '@/lib/cn';

type BrandMarkProps = {
  className?: string;
  withWordmark?: boolean;
  /** Colour classes for the wordmark — white on navy, navy on light. */
  wordmarkClassName?: string;
  /** Colour class for the "IMMIGRATION" line. */
  subClassName?: string;
};

/**
 * The Smartgic mark as vector: two rounded bars (cyan, blue) rising at 45° and
 * an accent dot, with geometry measured from the supplied logo (equal bar
 * lengths, the dot level with the bars' lower ends). Bars are drawn as round-
 * capped strokes so the ends are true semicircles at any size.
 */
export default function BrandMark({
  className = 'h-9 w-9',
  withWordmark = false,
  wordmarkClassName = 'text-navy-900',
  subClassName = 'text-teal',
}: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="5.9" y1="45.4" x2="32.4" y2="18.6" stroke="#11C2CC" strokeWidth="11.7" strokeLinecap="round" />
        <line x1="31.6" y1="45.4" x2="58.1" y2="18.6" stroke="#1763E8" strokeWidth="11.7" strokeLinecap="round" />
        <circle cx="55.4" cy="45.4" r="5.85" fill="#11C2CC" />
      </svg>
      {withWordmark && (
        <span className={cn('flex flex-col leading-none', wordmarkClassName)}>
          <span className="text-[1.15rem] font-bold tracking-[-0.02em]">SMARTGIC</span>{' '}
          <span className={cn('mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.34em]', subClassName)}>
            Immigration
          </span>
        </span>
      )}
    </span>
  );
}
