import React from 'react';
import type { Metadata } from 'next';
import { HeroSearch } from '@/components/homepage/HeroSearch';
import { RecentSearches } from '@/components/homepage/RecentSearches';
import { TrendingDestinations } from '@/components/homepage/TrendingDestinations';
import { OffersSection } from '@/components/homepage/OffersSection';
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
    'Book customized international & domestic tour packages across 40+ countries. 4-Star hotels, flights, visa assistance, 5% GST tax compliance, and 24x7 expert travel desk support.',
  alternates: {
    canonical: 'https://www.tripcustomizer.com',
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
