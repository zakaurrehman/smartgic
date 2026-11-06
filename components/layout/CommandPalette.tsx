'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { m } from 'framer-motion';
import { ArrowRight, CornerDownLeft, Loader2, Search, X } from 'lucide-react';
import type { SearchEntry } from '@/lib/search-index';
import { cn } from '@/lib/cn';

let cache: SearchEntry[] | null = null;

const POPULAR = [
  '/services/company-registration',
  '/golden-visa',
  '/services/corporate-tax-registration',
  '/services/vat-registration',
  '/services/accounting-services',
  '/services/corporate-pro-services',
  '/free-zones',
  '/contact',
];

const GROUP_ORDER: SearchEntry['group'][] = ['Services', 'Categories', 'Tools', 'Jurisdictions', 'Guides', 'Pages'];

/**
 * Site search as a command palette: a combobox over every service, category,
 * tool, jurisdiction, guide and key page. Arrow keys move, Enter opens, Escape
 * closes. The index is a static JSON file loaded on first open.
 */
export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [index, setIndex] = useState<SearchEntry[] | null>(cache);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const listId = useId();

  useEffect(() => {
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!cache) {
      fetch('/search-index.json')
        .then((r) => r.json())
        .then((data: SearchEntry[]) => {
          cache = data;
          setIndex(data);
        })
        .catch(() => setIndex([]));
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const results = useMemo(() => {
    if (!index) return [];
    const q = query.trim().toLowerCase();
    if (!q) {
      return POPULAR.map((href) => index.find((e) => e.href === href)).filter(Boolean) as SearchEntry[];
    }
    const words = q.split(/\s+/);
    return index
      .map((e) => {
        if (!words.every((w) => e.terms.includes(w))) return null;
        const title = e.title.toLowerCase();
        let score = 0;
        if (title.startsWith(q)) score += 6;
        if (title.includes(q)) score += 4;
        score += words.filter((w) => title.includes(w)).length * 2;
        score += 5 - GROUP_ORDER.indexOf(e.group) * 0.5;
        return { e, score };
      })
      .filter(Boolean)
      .sort((a, b) => b!.score - a!.score)
      .slice(0, 24)
      .map((r) => r!.e);
  }, [index, query]);

  // Keep the highlighted option in view (it resets to 0 as the query changes).
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${cursor}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  const go = (entry: SearchEntry | undefined) => {
    if (!entry) return;
    onClose();
    router.push(entry.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(results.length - 1, c + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(0, c - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[cursor]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  // Group for display while keeping one flat cursor order.
  const grouped = useMemo(() => {
    const out: { group: string; items: { entry: SearchEntry; i: number }[] }[] = [];
    results.forEach((entry, i) => {
      const label = query.trim() ? entry.group : 'Popular';
      let g = out.find((x) => x.group === label);
      if (!g) {
        g = { group: label, items: [] };
        out.push(g);
      }
      g.items.push({ entry, i });
    });
    return out;
  }, [results, query]);

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-3 pt-[8vh] sm:pt-[12vh]" role="presentation">
      <m.div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_40px_120px_-30px_rgba(5,11,26,0.6)]"
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-5">
          <Search className="h-5 w-5 shrink-0 text-ink-400" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search services, free zones, guides…"
            className="h-16 w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results[cursor] ? `${listId}-${cursor}` : undefined}
            aria-autocomplete="list"
          />
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-ink-400 hover:bg-surface hover:text-ink-900"
            aria-label="Close search"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[min(60vh,520px)] overflow-y-auto overscroll-contain p-2">
          {!index && (
            <p className="flex items-center gap-2 px-4 py-6 text-sm text-ink-400">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Loading…
            </p>
          )}
          {index && results.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm font-medium text-ink-900">No matches for “{query}”.</p>
              <p className="mt-1 text-sm text-ink-400">Try a broader term, or ask us directly.</p>
              <button type="button" onClick={() => go({ href: '/contact' } as SearchEntry)} className="btn-ghost btn-sm mt-4">
                Contact an advisor <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
          <ul ref={listRef} id={listId} role="listbox" aria-label="Results">
            {grouped.map((g) => (
              <li key={g.group} role="presentation">
                <p className="px-3 pb-1 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-400">{g.group}</p>
                <ul role="presentation">
                  {g.items.map(({ entry, i }) => (
                    <li
                      key={entry.href}
                      id={`${listId}-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={i === cursor}
                      onMouseMove={() => setCursor(i)}
                      onClick={() => go(entry)}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-2.5',
                        i === cursor ? 'bg-surface' : '',
                      )}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-ink-900">{entry.title}</span>
                        <span className="block truncate text-xs text-ink-400">{entry.desc}</span>
                      </span>
                      {i === cursor && <CornerDownLeft className="h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden items-center gap-4 border-t border-slate-100 px-5 py-3 text-xs text-ink-400 sm:flex">
          <span><kbd className="font-mono">↑ ↓</kbd> to move</span>
          <span><kbd className="font-mono">Enter</kbd> to open</span>
          <span><kbd className="font-mono">Esc</kbd> to close</span>
        </div>
      </m.div>
    </div>
  );
}
