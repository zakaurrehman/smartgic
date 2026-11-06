import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  /** Light text for navy sections. */
  dark?: boolean;
  /** Buttons or links shown under the description. */
  actions?: ReactNode;
  /** id for the heading, so a section can use aria-labelledby. */
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  size?: 'md' | 'lg';
};

/**
 * Section intro used site-wide: mono eyebrow, display heading (put the accent
 * word in <span className="accent">), supporting paragraph and optional actions.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  actions,
  id,
  as: Tag = 'h2',
  className,
  size = 'lg',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={cn('max-w-3xl', centered ? 'mx-auto text-center' : 'text-left', dark && 'on-dark', className)}>
      <Reveal>
        <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={70}>
        <Tag
          id={id}
          className={cn(
            'mt-5 font-semibold',
            size === 'lg' ? 'text-display-lg' : 'text-display-md',
            dark ? '!text-white' : 'text-ink-900',
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className={cn('lead mt-5', centered && 'mx-auto max-w-2xl')}>{description}</p>
        </Reveal>
      )}
      {actions && (
        <Reveal delay={200}>
          <div className={cn('mt-8 flex flex-col gap-3 sm:flex-row', centered && 'justify-center')}>{actions}</div>
        </Reveal>
      )}
    </div>
  );
}
