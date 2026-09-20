import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileActionBar from '@/components/ui/MobileActionBar';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import BlogCover from '@/components/blog/BlogCover';
import BlogIndex from '@/components/blog/BlogIndex';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { getAllPosts, getCategories, toCard, formatDate } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/blog`;
const title = 'Blog & Insights | Dubai Business Setup, Visas & PRO | Smartgic Visa';
const description =
  'Practical guides on Dubai business setup, UAE visas, Golden Visa, free zones, PRO services and compliance — from the team that files these applications daily.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'Dubai business blog',
    'UAE visa guides',
    'business setup insights Dubai',
    'Golden Visa news',
    'free zone guides',
  ],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const categories = getCategories(posts);
  const cards = rest.map(toCard);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${url}/#blog`,
    url,
    name: 'Smartgic Visa Blog & Insights',
    publisher: { '@id': `${SITE}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${url}/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Blog & Insights"
          title={
            <>
              Guides that make Dubai <span className="gradient-text">simple</span>
            </>
          }
          subtitle="Practical, up-to-date articles on business setup, visas, free zones and compliance — written by the team that processes these files every day."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />

        {/* Featured post */}
        {featured && (
          <section className="bg-white pt-16 lg:pt-20">
            <div className="container-x">
              <Reveal>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft lg:grid-cols-2"
                >
                  {featured.image ? (
                    <div className="relative h-56 overflow-hidden lg:h-full lg:min-h-[320px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={featured.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <BlogCover
                      category={featured.category}
                      className="h-56 lg:h-full lg:min-h-[320px]"
                      iconSize="h-12 w-12"
                    />
                  )}

                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan-dark">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Latest
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold leading-snug text-ink-900 transition-colors group-hover:text-brand-blue sm:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {featured.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-400">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{' '}
                        {formatDate(featured.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {featured.readingTime}{' '}
                        min read
                      </span>
                      <span className="font-semibold text-brand-cyan-dark">
                        {featured.category}
                      </span>
                    </div>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        <BlogIndex posts={cards} categories={categories} />

        <CTABand />
        <Contact source="Blog index" />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
