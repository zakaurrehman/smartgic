'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * A card that tilts toward the cursor in 3D, with a glare highlight that
 * tracks the pointer. Transform-only (GPU composited), mouse and pen only —
 * touch devices and reduced-motion visitors get a flat card.
 */
export default function TiltCard({
  children,
  className,
  max = 7,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--rx', '0deg');
    node.style.setProperty('--ry', '0deg');
    node.style.setProperty('--glare', '0');
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
      node.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
      node.style.setProperty('--gx', `${px * 100}%`);
      node.style.setProperty('--gy', `${py * 100}%`);
      node.style.setProperty('--glare', '1');
    });
  };

  return (
    <div className="[perspective:1200px]">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        className={cn(
          'relative h-full transition-transform duration-500 ease-out-expo will-change-transform [transform-style:preserve-3d]',
          '[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]',
          className,
        )}
      >
        {children}
        {glare && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--glare,0)] transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(600px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.16), transparent 40%)',
            }}
          />
        )}
      </div>
    </div>
  );
}
