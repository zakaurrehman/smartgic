import { Children, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Infinite horizontal scroller. The children are rendered twice so the loop is
 * seamless; the second copy is hidden from assistive technology and removed
 * from the tab order so the list is announced and focused once. Pauses on hover
 * and focus, and stops entirely under reduced motion (globals.css).
 */
export default function Marquee({
  children,
  className,
  itemClassName,
  duration = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
}) {
  const items = Children.toArray(children);
  return (
    <div className={cn('relative overflow-hidden mask-fade-x', className)}>
      <div
        className="marquee-track gap-3"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {items.map((child, i) => (
          <div key={`a-${i}`} className={cn('shrink-0', itemClassName)}>
            {child}
          </div>
        ))}
        {items.map((child, i) => (
          <div key={`b-${i}`} className={cn('shrink-0', itemClassName)} aria-hidden="true" inert>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
