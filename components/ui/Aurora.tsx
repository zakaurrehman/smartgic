import { cn } from '@/lib/cn';

/**
 * Background treatment for navy sections: two slowly drifting colour fields,
 * a faded grid and film grain. Purely decorative and CSS-only.
 */
export default function Aurora({
  className,
  grid = true,
  intensity = 'normal',
}: {
  className?: string;
  grid?: boolean;
  intensity?: 'subtle' | 'normal' | 'strong';
}) {
  const alpha = intensity === 'subtle' ? 'opacity-40' : intensity === 'strong' ? 'opacity-90' : 'opacity-70';
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 noise', className)}>
      <div className={cn('absolute inset-0', alpha)}>
        <div className="aurora left-[-12%] top-[-25%] h-[520px] w-[520px] animate-drift bg-brand-cyan/30" />
        <div
          className="aurora right-[-10%] top-[10%] h-[560px] w-[620px] animate-drift bg-brand-blue/40"
          style={{ animationDelay: '-8s' }}
        />
        <div
          className="aurora bottom-[-35%] left-[25%] h-[420px] w-[560px] animate-drift bg-navy-600/60"
          style={{ animationDelay: '-15s' }}
        />
      </div>
      {grid && <div className="absolute inset-0 grid-pattern-dark mask-radial" />}
    </div>
  );
}
