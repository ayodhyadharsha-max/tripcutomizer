import React from 'react';
import { HeroSearch } from '@/components/homepage/HeroSearch';
import { RecentSearches } from '@/components/homepage/RecentSearches';
import { TrendingDestinations } from '@/components/homepage/TrendingDestinations';
import { OffersSection } from '@/components/homepage/OffersSection';
import { TourismBoardSection } from '@/components/homepage/TourismBoardSection';
import { BuildTripWizard } from '@/components/homepage/BuildTripWizard';
import { FlightPromotions } from '@/components/homepage/FlightPromotions';
import { HotelStaysSection } from '@/components/homepage/HotelStaysSection';
import { SpecialsSection } from '@/components/homepage/SpecialsSection';
import { WhyChooseUs } from '@/components/homepage/WhyChooseUs';
import { TravelInsights } from '@/components/homepage/TravelInsights';
import { SEOTagDirectory } from '@/components/homepage/SEOTagDirectory';
import { TestimonialsMetrics } from '@/components/homepage/TestimonialsMetrics';

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

      {/* Build Your Own Itinerary */}
      <BuildTripWizard />

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
