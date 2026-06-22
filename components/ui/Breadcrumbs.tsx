import { ChevronRight } from 'lucide-react';

export type Crumb = { label: string; href?: string };

const SITE = 'https://www.smartgicvisa.com';

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE}${item.href}` } : {}),
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${light ? 'text-slate-300' : 'text-ink-400'}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={`transition-colors hover:underline ${
                    light ? 'hover:text-white' : 'hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? (light ? 'text-white' : 'text-ink-700') : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  className={`h-3.5 w-3.5 ${light ? 'text-slate-500' : 'text-ink-400'}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
