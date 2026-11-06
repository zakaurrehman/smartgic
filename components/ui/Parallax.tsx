'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/**
 * Moves its content slightly slower than the page as it scrolls past, for
 * depth on large photographs. The offset is small (default ±40px) so nothing
 * leaves its frame; disabled under reduced motion.
 */
export default function Parallax({
  children,
  offset = 40,
  className = '',
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <m.div style={reduce ? undefined : { y }} className="relative h-full w-full">
        {children}
      </m.div>
    </div>
  );
}
