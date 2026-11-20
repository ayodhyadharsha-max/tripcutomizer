import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { Heart, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Honeymoon Tour Packages 2026: Romantic Couple Holiday Deals | Trip Customizer',
  description:
    'Book exclusive honeymoon tour packages with private pool villas, overwater bungalows, candlelight dinners, resort stays & romantic inclusions in Bali, Maldives, Switzerland, Paris & Kerala.',
  keywords: [
    'honeymoon packages 2026',
    'romantic honeymoon tour packages',
    'maldives honeymoon package',
    'bali honeymoon packages',
    'switzerland honeymoon tour',
    'kerala honeymoon packages',
    'kashmir honeymoon packages',
    'Trip Customizer',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com/honeymoon',
  },
  openGraph: {
    title: 'Honeymoon Tour Packages 2026: Romantic Couple Holiday Deals | Trip Customizer',
    description: 'Exclusive honeymoon packages with pool villas, candlelight dinners, and couple transfers.',
    url: 'https://www.tripcustomizer.com/honeymoon',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honeymoon Tour Packages 2026 | Trip Customizer',
    description: 'Romantic couple holiday packages across Bali, Maldives, Europe, Kashmir & Kerala.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function HoneymoonPage() {
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
        name: 'Honeymoon Packages',
        item: 'https://www.tripcustomizer.com/honeymoon',
      },
    ],
  };

  const honeymoonPackages = DEMO_PACKAGES.filter((p) => p.theme === 'Honeymoon' || p.slug.includes('bali') || p.slug.includes('maldives'));

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Honeymoon & Couple Tour Packages 2026',
    numberOfItems: honeymoonPackages.length,
    itemListElement: honeymoonPackages.map((pkg, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: pkg.name,
      url: `https://www.tripcustomizer.com/holidays/${pkg.destinationSlug}/${pkg.slug}`,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in Trip Customizer honeymoon packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trip Customizer honeymoon packages include verified 4-star/5-star romantic resort stays, private pool villas, complimentary candlelight dinners, flower bed decorations, airport transfers, and 24x7 couple concierge support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which are the best budget honeymoon destinations in India under ₹30,000?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top budget honeymoon destinations under ₹30,000 include Kashmir (Srinagar houseboat & Gulmarg), Kerala (Munnar & Alleppey backwaters), Manali snow cottages, and North Goa beach resorts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we customize our honeymoon package with flights and private pool villas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% of our honeymoon packages in Bali, Maldives, Mauritius, Thailand, and Switzerland can be customized with direct flights, private pool villas, floating breakfasts, and luxury couple spa sessions.',
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="bg-gradient-to-r from-rose-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Romantic Escapes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Honeymoon Special Tour Packages</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Bali Pool Villas, Maldives Overwater Bungalows, Switzerland Snow Peaks, Kerala Backwater Resorts & Romantic Inclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {honeymoonPackages.map((pkg) => (
            <Card key={pkg.id} hoverable className="border-slate-200 group bg-white">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-rose-800/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Honeymoon Couple Special
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-1 text-slate-500 text-xs font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-rose-500" />
                  <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-rose-600 transition-colors line-clamp-1 mb-4">
                  {pkg.name}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">Starting Price</span>
                    <span className="text-base font-black text-rose-700">{formatCurrency(pkg.startingPrice)}</span>
                  </div>

                  <Link
                    href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`}
                    className="bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
