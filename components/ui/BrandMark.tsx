type BrandMarkProps = {
  className?: string;
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

/**
 * Vector recreation of the Smartgic icon — two rounded bars (cyan + blue)
 * forming an "N/X" motion mark with an accent dot. Used where the PNG logo
 * would not contrast (e.g. dark footer).
 */
export default function BrandMark({
  className = 'h-9 w-9',
  withWordmark = false,
  wordmarkClassName = '',
}: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="20"
          width="13"
          height="40"
          rx="6.5"
          transform="rotate(-32 9.5 40)"
          fill="#11C2CC"
        />
        <rect
          x="26"
          y="6"
          width="13"
          height="44"
          rx="6.5"
          transform="rotate(-32 32.5 28)"
          fill="#1763E8"
        />
        <circle cx="50" cy="46" r="6.5" fill="#11C2CC" />
      </svg>
      {withWordmark && (
        <span className={`flex flex-col leading-none ${wordmarkClassName}`}>
          <span className="text-lg font-extrabold tracking-tight">SMARTGIC</span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-brand-cyan">
            Immigration
          </span>
        </span>
      )}
    </span>
  );
}
