'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Site-wide motion settings. `reducedMotion="user"` makes every framer-motion
 * animation honour the visitor's operating-system setting: transforms are
 * dropped and only opacity changes remain.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    // LazyMotion + the m.* components ship only the animation features the
    // site uses (no drag or layout animation), keeping the bundle smaller.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
