import React from 'react';
import type { Metadata } from 'next';
import { HeroSearch } from '@/components/homepage/HeroSearch';
import { RecentSearches } from '@/components/homepage/RecentSearches';
import { TrendingDestinations } from '@/components/homepage/TrendingDestinations';
import { OffersSection } from '@/components/homepage/OffersSection';
import { AppDownloadBanner } from '@/components/homepage/AppDownloadBanner';
import { TourismBoardSection } from '@/components/homepage/TourismBoardSection';
import { FlightPromotions } from '@/components/homepage/FlightPromotions';
import { HotelStaysSection } from '@/components/homepage/HotelStaysSection';
import { SpecialsSection } from '@/components/homepage/SpecialsSection';
import { WhyChooseUs } from '@/components/homepage/WhyChooseUs';
import { TravelInsights } from '@/components/homepage/TravelInsights';
import { SEOTagDirectory } from '@/components/homepage/SEOTagDirectory';
import { TestimonialsMetrics } from '@/components/homepage/TestimonialsMetrics';

export const metadata: Metadata = {
  title: 'Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels',
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
  return (
    <div className="bg-slate-50 min-h-screen">
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

      {/* Travel Insights / Insta Moments */}
      <TravelInsights />

      {/* Trust Metrics & FAQs */}
      <TestimonialsMetrics />

      {/* SEO Tour Package Tag Directory (Tours and Travel Agency – tripcustomizer) */}
      <SEOTagDirectory />
    </div>
  );
}
