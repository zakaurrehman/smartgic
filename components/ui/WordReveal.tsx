import { Fragment, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Headline that rises in word by word — blur, lift and fade.
 *
 * Pure CSS (keyframes in globals.css), server-rendered: the animation starts
 * with the first paint instead of waiting for hydration, so it never holds back
 * the page's largest paint, and reduced-motion visitors get the final state
 * immediately through the global reduced-motion rule.
 *
 * `parts` mixes plain strings with `{ accent }` objects, which render in the
 * italic serif accent style.
 */
export type RevealPart = string | { accent: string; className?: string };

export default function WordReveal({
  parts,
  as: Tag = 'h1',
  className,
  delay = 0,
  stagger = 55,
}: {
  parts: RevealPart[];
  as?: ElementType;
  className?: string;
  /** ms before the first word starts. */
  delay?: number;
  /** ms between words. */
  stagger?: number;
}) {
  let index = 0;
  const nodes: ReactNode[] = [];

  parts.forEach((part, p) => {
    const text = typeof part === 'string' ? part : part.accent;
    const words = text.split(/\s+/).filter(Boolean);
    words.forEach((word, w) => {
      const style = { '--i': index, '--d': `${delay}ms`, '--s': `${stagger}ms` } as React.CSSProperties;
      nodes.push(
        <Fragment key={`${p}-${w}`}>
          <span
            className={cn('wr-word', typeof part !== 'string' && 'accent', typeof part !== 'string' && part.className)}
            style={style}
          >
            {word}
          </span>{' '}
        </Fragment>,
      );
      index += 1;
    });
  });

  return <Tag className={cn('word-reveal', className)}>{nodes}</Tag>;
}
