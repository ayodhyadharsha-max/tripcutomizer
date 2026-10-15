import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User, Clock, ChevronRight, Compass } from 'lucide-react';

interface ArticleData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaUrl: string;
  ctaBtn: string;
  toc: string[];
  content: string;
}

const ARTICLES: Record<string, ArticleData> = {
  'top-10-things-to-do-in-dubai-2026': {
    title: 'Top 10 Unmissable Experiences in Dubai for 2026',
    author: 'Aanya Sharma',
    date: 'Sept 10, 2026',
    readTime: '6 Min Read',
    category: 'Destination Guide',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    ctaTitle: 'Book Dubai Tour Package',
    ctaDesc: '5 Nights / 6 Days with Burj Khalifa tickets, Desert Safari & 4-star hotel stay.',
    ctaUrl: '/holidays/dubai',
    ctaBtn: 'EXPLORE DUBAI PACKAGES →',
    toc: [
      '1. Scale Burj Khalifa At The Top 124th Floor',
      '2. Dune Bashing & BBQ Desert Safari',
      '3. Visit Museum of the Future',
      '4. Marina Dhow Dinner Cruise',
      '5. Gold & Spice Souk Shopping',
    ],
    content: `
Dubai continues to redefine modern travel with groundbreaking architecture, world-class theme parks, and pristine desert adventures. Whether you are traveling with family, on a honeymoon escape, or on a business trip, here is your essential guide to top attractions.

### 1. Scale Burj Khalifa At The Top 124th Floor
No visit to Dubai is complete without ascending the world's tallest building. Take the high-speed elevator to the 124th and 125th floor observation decks for breathtaking 360-degree views of the skyline and Arabian Gulf.

### 2. Dune Bashing & BBQ Desert Safari
Hop into a 4x4 Land Cruiser for thrilling sand dune driving across Lahbab desert red dunes, followed by camel riding, henna tattoos, and a lavish BBQ buffet with live belly dance & Tanoura shows under the stars.

### 3. Visit Museum of the Future
Recognized as one of the most beautiful buildings on earth, this architectural marvel takes you into the year 2071 with interactive exhibits spanning space travel, bioengineering, and ecosystems.

### 4. Marina Dhow Dinner Cruise
Glide along the illuminated Dubai Marina on a traditional wooden dhow with a 5-star international buffet, live acoustic music, and views of soaring towers.

### 5. Traditional Souks & Al Fahidi Historical Neighborhood
Cross Dubai Creek on a traditional 1-AED Abra boat ride and explore the dazzling Gold Souk and aromatic Spice Souk in Deira.
    `,
  },
  'how-to-choose-the-right-forex-card': {
    title: 'How to Choose the Best Multi-Currency Forex Card for Overseas Trips (2026 Guide)',
    author: 'Vikram Sengupta',
    date: 'Sept 04, 2026',
    readTime: '5 Min Read',
    category: 'Forex & Finance',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    ctaTitle: 'Get Doorstep Forex Delivery',
    ctaDesc: 'Order multi-currency cards and foreign cash currency at live interbank rates with zero markup.',
    ctaUrl: '/contact',
    ctaBtn: 'CONTACT FOREX DESK →',
    toc: [
      '1. Why Credit Cards Cost 3.5% More Abroad',
      '2. Zero Cross-Currency Markup Cards',
      '3. ATM Withdrawal Fee Comparisons',
      '4. Security: App-Based Lock & Pin Reset',
      '5. Recommended Forex Cards for Indians',
    ],
    content: `
Traveling internationally requires smart financial planning. Swiping domestic Indian debit or credit cards overseas often incurs painful foreign currency transaction fees (3.5% + GST) and arbitrary exchange markup margins.

### 1. Why Credit Cards Cost 3.5% More Abroad
Standard bank credit cards charge 3.5% forex markup plus 18% GST on the fee, which adds up to roughly 4.13% in hidden fees on every purchase. Multi-currency prepaid Forex cards lock in your exchange rate on the day you load funds, safeguarding you against currency depreciation.

### 2. Zero Cross-Currency Markup Cards
Modern neo-bank cards (such as Niyo Global or Scapia) and dedicated travel cards offer interbank exchange rates with 0% markup, saving Indian travelers up to ₹5,000 on a typical ₹1,00,000 international vacation.

### 3. ATM Withdrawal Fee Comparisons
Forex cards typically charge a flat $2-$3 per international ATM cash withdrawal. Always withdraw larger chunks of local cash once rather than multiple small withdrawals to minimize recurring ATM fees.

### 4. Security & Companion App Controls
Choose a card that allows instant freeze/unfreeze, contactless toggle, and balance reload within seconds via an Indian UPI banking app.
    `,
  },
  'ultimate-guide-to-switzerland-by-train': {
    title: 'The Ultimate Guide to Exploring Switzerland via Eurail & Swiss Travel Pass',
    author: 'Rohan Kapoor',
    date: 'Aug 28, 2026',
    readTime: '7 Min Read',
    category: 'Europe Travel',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    ctaTitle: 'Book Swiss Alpine Package',
    ctaDesc: '7 Nights / 8 Days with Swiss Pass, Mt. Titlis Rotair, Jungfraujoch & 4-star hotels.',
    ctaUrl: '/holidays/switzerland',
    ctaBtn: 'VIEW SWISS PACKAGES →',
    toc: [
      '1. Swiss Travel Pass vs. Eurail Pass',
      '2. Glacier Express: World’s Slowest Express Train',
      '3. Bernina Express through Alpine Glaciers',
      '4. GoldenPass Panoramic Route',
      '5. Mountain Excursions: Mt. Titlis & Jungfraujoch',
    ],
    content: `
Switzerland possesses the most punctual and picturesque public transit network in the world. Exploring the Swiss Alps by panoramic train is an unforgettable bucket-list experience.

### 1. Swiss Travel Pass vs. Eurail Pass
If your trip is exclusively inside Switzerland, the **Swiss Travel Pass** is the undisputed champion. It provides unlimited travel on trains, boats, and postbuses across 90 towns, free admission to over 500 museums, and 50% discounts on mountain cableways like Mt. Titlis and Jungfraujoch.

### 2. Glacier Express: World’s Slowest Express Train
Connecting St. Moritz to Zermatt in 8 hours, the Glacier Express crosses 291 bridges and 91 tunnels, featuring floor-to-ceiling panoramic glass windows and a 3-course gourmet dining service.

### 3. Bernina Express through UNESCO Alpine Passes
Traversing from Chur across the Bernina Pass into Tirano, Italy, this route navigates the famous circular Brusio Viaduct and glacier lakes at 2,253 meters above sea level.

### 4. Mountain Peaks: Mt. Titlis & Jungfraujoch
From Lucerne, take the world’s first revolving Rotair cable car to Mt. Titlis (10,000 ft) for year-round snow, or board the cogwheel train to Jungfraujoch, the Top of Europe at 3,454m.
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = ARTICLES[params.slug];
  if (!article) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `https://www.tripcustomizer.com/blog/${params.slug}`;

  return {
    title: article.title,
    description: article.content.slice(0, 155).trim() + '...',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 155).trim() + '...',
      url: canonicalUrl,
      images: [article.heroImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.content.slice(0, 155).trim() + '...',
      images: [article.heroImage],
    },
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug];
  if (!article) {
    notFound();
  }

  const canonicalUrl = `https://www.tripcustomizer.com/blog/${params.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.content.slice(0, 160).trim() + '...',
    image: [article.heroImage],
    datePublished: '2026-09-10T08:00:00+05:30',
    dateModified: '2026-10-15T10:00:00+05:30',
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trip Customizer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tripcustomizer.com/logo-square.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tripcustomizer.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Travel Blog',
        item: 'https://www.tripcustomizer.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Container className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/blog" className="hover:text-brand-500">Blog</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800 line-clamp-1">{article.title}</span>
        </div>

        {/* Header */}
        <div className="mb-6 space-y-3">
          <span className="bg-brand-50 text-brand-700 font-bold text-xs px-3 py-1 rounded-full inline-block">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-brand-500" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-lg">
          <Image src={article.heroImage} alt={article.title} fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-6 bg-white border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Table of Contents</h3>
              <ul className="space-y-1.5 text-xs text-brand-600 font-semibold">
                {article.toc.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </Card>
          </div>

          {/* Sidebar CTA & Related Packages */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="p-6 bg-brand-900 text-white rounded-3xl space-y-3">
              <Compass className="w-6 h-6 text-accent-400" />
              <h3 className="font-black text-base">{article.ctaTitle}</h3>
              <p className="text-xs text-slate-300">{article.ctaDesc}</p>
              <Link href={article.ctaUrl} className="block pt-2">
                <Button variant="accent" size="md" className="w-full font-bold text-slate-950 text-xs">
                  {article.ctaBtn}
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
