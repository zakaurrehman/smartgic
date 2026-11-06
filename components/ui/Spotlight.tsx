'use client';

import { useRef, type ElementType, type PointerEvent, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Wraps a card so a soft light follows the cursor across it. Writes the pointer
 * position to --mx/--my; the light itself is the `.spotlight::after` gradient
 * in globals.css, so there is no re-render per pointer move.
 */
export default function Spotlight({
  children,
  className,
  dark = false,
  as: Tag = 'div',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  as?: ElementType;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node || e.pointerType === 'touch') return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    node.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn('spotlight', dark && 'spotlight-dark', className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
