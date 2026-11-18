import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSearch } from '@/components/homepage/HeroSearch';
import { RecentSearches } from '@/components/homepage/RecentSearches';
import { TrendingDestinations } from '@/components/homepage/TrendingDestinations';
import { OffersSection } from '@/components/homepage/OffersSection';

// Dynamically split below-the-fold homepage components to minimize initial JS bundle & accelerate LCP
const AppDownloadBanner = dynamic(() => import('@/components/homepage/AppDownloadBanner').then((m) => m.AppDownloadBanner));
const TourismBoardSection = dynamic(() => import('@/components/homepage/TourismBoardSection').then((m) => m.TourismBoardSection));
const SpecialsSection = dynamic(() => import('@/components/homepage/SpecialsSection').then((m) => m.SpecialsSection));
const FlightPromotions = dynamic(() => import('@/components/homepage/FlightPromotions').then((m) => m.FlightPromotions));
const HotelStaysSection = dynamic(() => import('@/components/homepage/HotelStaysSection').then((m) => m.HotelStaysSection));
const WhyChooseUs = dynamic(() => import('@/components/homepage/WhyChooseUs').then((m) => m.WhyChooseUs));
const TrendingEditorialGuides = dynamic(() => import('@/components/homepage/TrendingEditorialGuides').then((m) => m.TrendingEditorialGuides));
const TravelInsights = dynamic(() => import('@/components/homepage/TravelInsights').then((m) => m.TravelInsights));
const TestimonialsMetrics = dynamic(() => import('@/components/homepage/TestimonialsMetrics').then((m) => m.TestimonialsMetrics));
const HomepageFAQ = dynamic(() => import('@/components/homepage/HomepageFAQ').then((m) => m.HomepageFAQ));
const SEOTagDirectory = dynamic(() => import('@/components/homepage/SEOTagDirectory').then((m) => m.SEOTagDirectory));

export const metadata: Metadata = {
  title: {
    absolute: 'Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels',
  },
  description:
    'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 travel desk support.',
  keywords: [
    'Trip Customizer',
    'customized tour packages',
    'international tour packages',
    'bali honeymoon package',
    'dubai tour package',
    'char dham yatra package',
    'ayodhya ram mandir tour',
    'customized bali honeymoon package with private pool villa',
    'dubai 5 days luxury package with desert safari price',
    'budget thailand tour package for couple under 30k',
    'azerbaijan baku 5 days tour package from delhi',
    'vietnam customized itinerary 7 days package',
    'europe tour packages 10 days customized',
    'australia 7 days holiday package price india',
    'ayodhya ram mandir vip darshan tour package',
    'char dham yatra package 2026 from ayodhya',
    'kedarnath badrinath divine yatra package price',
    'dwarka somnath tour package 5 days',
    'varanasi luxury ganga aarti ghat tour',
    'kailash mansarovar yatra package 2026',
    'customized tour packages india',
    'best travel agency for custom holiday packages ayodhya delhi',
    'tailor made holiday packages with flights and 4 star hotels',
  ],
  alternates: {
    canonical: 'https://www.tripcustomizer.com',
  },
  openGraph: {
    title: 'Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels',
    description:
      'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 travel desk support.',
    url: 'https://www.tripcustomizer.com',
    siteName: 'Trip Customizer',
    images: [
      {
        url: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
        width: 1200,
        height: 630,
        alt: 'Trip Customizer Customized Holiday Packages',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels',
    description:
      'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 travel desk support.',
    images: ['https://www.tripcustomizer.com/destinations/hero-holidays.jpg'],
  },
};

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trip Customizer',
    alternateName: ['TripCustomizer', 'Trip Customizer India', 'TripCustomizer.com', 'ट्रिप कस्टमाइज़र'],
    url: 'https://www.tripcustomizer.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.tripcustomizer.com/holidays?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trip Customizer Main Sitelinks Navigation',
    description: 'Corporate navigation sitelinks for holiday packages, honeymoon specials, spiritual yatras, and custom trip planning.',
    numberOfItems: 8,
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Holiday Packages 2026',
        description: 'Explore 500+ customized holiday packages with flights, 4-star hotels, and transfers.',
        url: 'https://www.tripcustomizer.com/holidays',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Honeymoon Tour Packages',
        description: 'Romantic couple getaways with luxury resort stays, candlelight dinners, and private cabs.',
        url: 'https://www.tripcustomizer.com/honeymoon',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Char Dham & Spiritual Yatras',
        description: 'Sacred pilgrimages to Kedarnath, Badrinath, Ayodhya Ram Mandir VIP Darshan & Varanasi.',
        url: 'https://www.tripcustomizer.com/char-dham',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'City Departure Tour Packages',
        description: 'Browse city-to-destination holiday packages with direct flights from Mumbai, Delhi, Ahmedabad, and Bangalore.',
        url: 'https://www.tripcustomizer.com/packages',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: '1-Minute Custom Trip Wizard',
        description: 'Plan and customize your dream holiday itinerary in 60 seconds with 24x7 expert travel desk support.',
        url: 'https://www.tripcustomizer.com/customize-trip',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Exclusive Travel Offers & Deals',
        description: 'Unlock seasonal discounts up to ₹15,000, early-bird holiday deals, and festive vacation packages.',
        url: 'https://www.tripcustomizer.com/offers',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'Luxury Ocean Cruises',
        description: 'Book luxury cruise vacations across Goa, Lakshadweep, Dubai Marina, Singapore, and European ports.',
        url: 'https://www.tripcustomizer.com/cruises',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 8,
        name: 'Travel Blog & 2026 Guides',
        description: 'Expert travel guides, itineraries, tips, and destination recommendations for 2026.',
        url: 'https://www.tripcustomizer.com/blog',
      },
    ],
  };

  const agencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Trip Customizer',
    url: 'https://www.tripcustomizer.com',
    logo: 'https://www.tripcustomizer.com/logo-square.png',
    image: 'https://www.tripcustomizer.com/destinations/hero-holidays.jpg',
    description:
      'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 expert travel desk support.',
    telephone: '+91-7408763401',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Trip Customizer Plaza, Ayodhya Road',
      addressLocality: 'Ayodhya',
      addressRegion: 'Uttar Pradesh',
      postalCode: '224001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7922,
      longitude: 82.1998,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '12850',
    },
    sameAs: [
      'https://facebook.com/tripcustomizer',
      'https://instagram.com/tripcustomizer',
      'https://twitter.com/tripcustomizer',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why book tour packages with Trip Customizer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trip Customizer offers 100% customized holiday itineraries with flights, 4-star handpicked hotels, private cabs, 5% GST tax compliance, and 24x7 dedicated travel desk support across 40+ global destinations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I customize my holiday package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can customize any holiday package on Trip Customizer by selecting your preferred departure city, hotel category, travel dates, and adding custom sightseeing or meals directly via our online trip wizard or WhatsApp desk.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are flights and transfers included in Trip Customizer tour packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all Trip Customizer tour packages can be booked with roundtrip flights, airport transfers, daily breakfast, and private AC vehicles for sightseeing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the most popular spiritual yatra packages on Trip Customizer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top spiritual yatras include Ayodhya Ram Mandir VIP Darshan, Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri), Kashi Varanasi Ganga Aarti, and Dwarka Somnath Gujarat Teerth.',
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero & Search Tabs */}
      <HeroSearch />

      {/* Recent Searches */}
      <RecentSearches />

      {/* Trending Destinations */}
      <TrendingDestinations />

      {/* Offers For You */}
      <OffersSection />

      {/* Download App Banner with Scanner & APK Download Buttons */}
      <AppDownloadBanner />

      {/* Tourism Board Recommends */}
      <TourismBoardSection />

      {/* Curated Specials */}
      <SpecialsSection />

      {/* Top Flight Routes */}
      <FlightPromotions />

      {/* Explore Hotel Stays */}
      <HotelStaysSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Trending Editorial Guides & Peak Season Festivals */}
      <TrendingEditorialGuides />

      {/* Travel Insights / Insta Moments */}
      <TravelInsights />

      {/* Trust Metrics & FAQs */}
      <TestimonialsMetrics />

      {/* AEO & GEO Structured FAQ Section */}
      <HomepageFAQ />

      {/* SEO Tour Package Tag Directory (Tours and Travel Agency – tripcustomizer) */}
      <SEOTagDirectory />
    </div>
  );
}
