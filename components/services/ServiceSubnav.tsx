'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Sticky in-page navigation for long service pages. Highlights the section in
 * view and scrolls horizontally on narrow screens.
 */
export default function ServiceSubnav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[calc(var(--header-h)+14px)] z-30 -mt-7">
      <div className="container-x">
        <nav
          aria-label="On this page"
          className="no-scrollbar mx-auto flex max-w-max gap-1 overflow-x-auto rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-soft backdrop-blur-xl"
        >
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              aria-current={active === i.id ? 'location' : undefined}
              className={cn(
                'shrink-0 rounded-full px-4 py-2 text-[0.82rem] font-medium transition-colors',
                active === i.id ? 'bg-navy-900 text-white' : 'text-ink-500 hover:bg-surface hover:text-ink-900',
              )}
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
