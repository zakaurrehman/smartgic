import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { ArrowUpRight, CalendarDays, Clock, UserRound } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BlogCover from '@/components/blog/BlogCover';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { getPost, getPostSlugs, getRelatedPosts, formatDate } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_AE',
      url,
      siteName: 'Smartgic Visa',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE}/blog/${post.slug}`;
  const html = marked.parse(post.content) as string;
  const related = getRelatedPosts(post, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}/#post`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@id': `${SITE}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        {/* Post hero */}
        <section className="relative overflow-hidden bg-brand-navy pt-[72px] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="aurora left-[-10%] top-[-15%] h-80 w-80 bg-brand-cyan/35" />
            <div className="aurora right-[-8%] top-[10%] h-96 w-96 bg-brand-blue/45" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
          </div>
          <div className="container-x relative pb-14 pt-10 lg:pb-16 lg:pt-14">
            <Breadcrumbs
              light
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
            />
            <span className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan backdrop-blur">
              {post.category}
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-3xl font-extrabold leading-[1.12] tracking-tight !text-white sm:text-4xl lg:text-[2.7rem]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-brand-cyan" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-brand-cyan" /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-cyan" /> {post.readingTime} min read
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="section bg-white">
          <div className="container-x">
            <div className="mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl shadow-soft">
              {post.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover sm:h-72"
                />
              ) : (
                <BlogCover category={post.category} className="h-52 sm:h-72" iconSize="h-14 w-14" />
              )}
            </div>
            <article
              className="prose prose-slate mx-auto max-w-3xl
                prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900
                prose-a:font-semibold prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                prose-strong:text-ink-900
                prose-li:marker:text-brand-cyan
                prose-table:text-sm
                prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2.5 prose-td:px-4 prose-td:py-2.5
                prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="section bg-slate-50/70">
            <div className="container-x">
              <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
                Keep <span className="gradient-text">reading</span>
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                  >
                    <BlogCover category={p.category} className="h-24" iconSize="h-8 w-8" />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan-dark">
                        {p.category}
                      </span>
                      <h3 className="mt-2 flex-1 text-base font-bold leading-snug text-ink-900 group-hover:text-brand-blue">
                        {p.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                        Read article <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
