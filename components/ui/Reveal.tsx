'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  /**
   * Render visible immediately, skipping the scroll observer.
   *
   * Required for content that mounts inside a `display: none` container — an
   * IntersectionObserver never reports such an element as intersecting, and it
   * does not reliably fire once the container is shown, which would leave the
   * content permanently stuck at opacity 0.
   */
  immediate?: boolean;
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const node = ref.current;
    if (!node) return;

    // Browsers without IntersectionObserver (and test environments) just show
    // the content. Deferred by a frame so state is not set synchronously
    // inside the effect body, which would trigger a cascading render.
    if (typeof IntersectionObserver === 'undefined') {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    // IntersectionObserver reports the current intersection state in its first
    // callback, so elements already on screen — deep links to anchors, and
    // anything above the fold after hydration — reveal straight away without a
    // separate bounding-box measurement.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
