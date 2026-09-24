'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import Reveal from '../ui/Reveal';
import PostCard from './PostCard';
import type { BlogCard } from '@/lib/blog-shared';

const PAGE_SIZE = 9;

export default function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogCard[];
  categories: { name: string; count: number }[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (q && !p.searchIndex.includes(q)) return false;
      return true;
    });
  }, [posts, query, category]);

  // Every matching post is rendered into the DOM and the overflow is hidden with
  // CSS rather than sliced out. Progressive disclosure still works for readers,
  // but crawlers see a link to every article in the server-rendered HTML instead
  // of only the first page.
  const hasMore = filtered.length > visible;
  const filtering = query.trim().length > 0 || category !== 'All';

  function pick(next: string) {
    setCategory(next);
    setVisible(PAGE_SIZE);
  }

  function search(next: string) {
    setQuery(next);
    setVisible(PAGE_SIZE);
  }

  function reset() {
    setQuery('');
    setCategory('All');
    setVisible(PAGE_SIZE);
  }

  return (
    <section className="section bg-white">
      <div className="container-x">
        {/* Search */}
        <div className="relative mx-auto max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400"
            aria-hidden="true"
          />
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => search(e.target.value)}
            placeholder="Search guides — try “golden visa” or “bank account”"
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {[{ name: 'All', count: posts.length }, ...categories].map((c) => {
            const active = category === c.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => pick(c.name)}
                aria-pressed={active}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? 'border-transparent bg-brand-gradient text-white shadow-sm'
                    : 'border-slate-200 bg-white text-ink-500 hover:border-brand-blue/40 hover:text-brand-blue'
                }`}
              >
                {c.name}
                <span className={active ? 'text-white/70' : 'text-ink-400'}>{c.count}</span>
              </button>
            );
          })}
        </div>

        {/* Count + clear */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-500">
          <p aria-live="polite">
            <span className="font-bold text-ink-900">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'article' : 'articles'}
            {filtering ? ' match' : ''}
          </p>
          {filtering && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:underline"
            >
              <X className="h-3.5 w-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-16 text-center">
            <p className="text-lg font-bold text-ink-900">Nothing matches that search</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
              Try a different term, or ask us directly — if it is a question worth answering, it is
              probably worth us writing about.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" onClick={reset} className="btn-ghost">
                Show all articles
              </button>
              <Link href="/contact" className="btn-gradient">
                Ask an advisor
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={(i % 3) * 80}
                  className={i >= visible ? 'hidden' : undefined}
                  // Cards past the fold mount inside a `hidden` wrapper, where
                  // the scroll observer cannot see them. Render them visible so
                  // they appear the moment "Load more" removes `hidden`.
                  immediate={i >= PAGE_SIZE}
                >
                  <PostCard post={post} headingLevel="h2" />
                </Reveal>
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="btn-ghost"
                >
                  Load more articles ({filtered.length - visible} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
