import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import PostCover from './PostCover';
import { formatDate, type PostSummary } from '@/lib/blog-shared';

/** Grid widths the card is laid out at — keeps the cover's srcset honest. */
const CARD_SIZES = '(min-width: 1280px) 380px, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw';

/**
 * Blog post card, shared by the blog index, related posts, the homepage and
 * service pages so a post looks the same wherever it is surfaced.
 *
 * The category lives in the card body rather than on the cover: supplied
 * covers carry their own headline, and a badge laid over them would sit on
 * top of that text.
 */
export default function PostCard({
  post,
  headingLevel = 'h3',
}: {
  post: PostSummary;
  /** h2 where cards are the page's primary list, h3 under a section heading. */
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
    >
      <PostCover post={post} sizes={CARD_SIZES} zoomOnHover />

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan-dark">
          {post.category}
        </span>
        <Heading className="mt-2 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-blue">
          {post.title}
        </Heading>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{post.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingTime} min read
          </span>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
          Read article
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
