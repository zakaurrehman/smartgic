import type { Metadata } from 'next';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import BlogCover from '@/components/blog/BlogCover';
import CTABand from '@/components/sections/CTABand';
import Contact from '@/components/sections/Contact';
import { getAllPosts, formatDate } from '@/lib/blog';

const SITE = 'https://www.smartgicvisa.com';
const url = `${SITE}/blog`;
const title = 'Blog & Insights | Dubai Business Setup, Visas & PRO | Smartgic Visa';
const description =
  'Practical guides and daily insights on Dubai business setup, UAE visas, Golden Visa, free zones, PRO services and compliance — from the Smartgic Visa team.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ['Dubai business blog', 'UAE visa guides', 'business setup insights Dubai', 'Golden Visa news', 'free zone guides'],
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'en_AE', url, siteName: 'Smartgic Visa', title, description },
  twitter: { card: 'summary_large_image', title, description },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
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
      <main>
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

        <section className="section bg-white">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-soft"
                  >
                    {post.image ? (
                      <div className="relative flex h-40 items-end overflow-hidden p-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                        <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                          {post.category}
                        </span>
                      </div>
                    ) : (
                      <BlogCover category={post.category} className="h-40">
                        <span className="relative rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-brand-cyan backdrop-blur">
                          {post.category}
                        </span>
                      </BlogCover>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-4 text-xs text-ink-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
                        </span>
                      </div>
                      <h2 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-blue">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                        {post.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                        Read article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
