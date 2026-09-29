import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import PostCard, { CARD_SIZES } from './PostCard';
import type { PostSummary } from '@/lib/blog-shared';

/**
 * A row of blog guides under a section heading — the homepage's latest
 * guides and each service page's further reading.
 *
 * The grid narrows for one or two posts so they sit centred instead of
 * leaving empty columns in a three-up layout.
 */
export default function GuidesSection({
  posts,
  eyebrow,
  title,
  description,
  className = 'bg-slate-50/70',
}: {
  posts: PostSummary[];
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  className?: string;
}) {
  if (posts.length === 0) return null;

  // Each layout's card widths go with it, so the covers are fetched at the
  // size they display — a lone card is wider than a three-up one.
  const [grid, sizes] =
    posts.length === 1
      ? ['mx-auto max-w-md', '(min-width: 488px) 448px, 100vw']
      : posts.length === 2
        ? ['mx-auto max-w-3xl sm:grid-cols-2', '(min-width: 816px) 372px, (min-width: 640px) 48vw, 100vw']
        : ['sm:grid-cols-2 lg:grid-cols-3', CARD_SIZES];

  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className={`mt-14 grid gap-6 ${grid}`}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <PostCard post={post} sizes={sizes} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="btn-ghost group">
            View all guides
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
