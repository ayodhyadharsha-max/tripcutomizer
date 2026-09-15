'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HolidayPackage } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import {
  Search,
  Filter,
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  X,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface HolidayListingViewProps {
  initialPackages: HolidayPackage[];
  title: string;
  subtitle: string;
  badgeText?: string;
  defaultCategory?: string; // 'ALL' | 'INDIA' | 'INTERNATIONAL'
  defaultRegion?: string;
  defaultDestinationSlug?: string;
}

export function HolidayListingView({
  initialPackages,
  title,
  subtitle,
  badgeText = '100% Handcrafted Holiday Packages',
  defaultCategory = 'ALL',
  defaultRegion = 'ALL',
  defaultDestinationSlug,
}: HolidayListingViewProps) {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
  const [selectedTheme, setSelectedTheme] = useState('ALL');
  const [selectedHotelCategory, setSelectedHotelCategory] = useState('ALL');
  const [selectedDuration, setSelectedDuration] = useState('ALL');
  const [maxPrice, setMaxPrice] = useState(200000);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Quick Quote Modal state
  const [activeQuotePkg, setActiveQuotePkg] = useState<HolidayPackage | null>(null);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(defaultCategory);
    setSelectedRegion(defaultRegion);
    setSelectedTheme('ALL');
    setSelectedHotelCategory('ALL');
    setSelectedDuration('ALL');
    setMaxPrice(200000);
    setSortBy('recommended');
  };

  const filteredPackages = useMemo(() => {
    return initialPackages
      .filter((pkg) => {
        // Search filter
        const query = searchTerm.toLowerCase().trim();
        const matchesSearch =
          !query ||
          pkg.name.toLowerCase().includes(query) ||
          pkg.destination.toLowerCase().includes(query) ||
          pkg.country.toLowerCase().includes(query) ||
          pkg.region.toLowerCase().includes(query) ||
          pkg.highlights.some((h) => h.toLowerCase().includes(query));

        // Category filter
        const matchesCategory =
          selectedCategory === 'ALL' ||
          (selectedCategory === 'INTERNATIONAL' && pkg.isInternational) ||
          (selectedCategory === 'INDIA' && !pkg.isInternational);

        // Region filter
        const matchesRegion =
          selectedRegion === 'ALL' ||
          pkg.region.toLowerCase().includes(selectedRegion.toLowerCase());

        // Theme filter
        const matchesTheme =
          selectedTheme === 'ALL' ||
          pkg.theme.toLowerCase().includes(selectedTheme.toLowerCase());

        // Hotel category filter
        const matchesHotelCat =
          selectedHotelCategory === 'ALL' || pkg.hotelCategory === selectedHotelCategory;

        // Price filter
        const matchesPrice = pkg.startingPrice <= maxPrice;

        // Duration filter
        let matchesDuration = true;
        if (selectedDuration === 'short') matchesDuration = pkg.durationDays <= 4;
        else if (selectedDuration === 'medium') matchesDuration = pkg.durationDays >= 5 && pkg.durationDays <= 7;
        else if (selectedDuration === 'long') matchesDuration = pkg.durationDays >= 8;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesRegion &&
          matchesTheme &&
          matchesHotelCat &&
          matchesPrice &&
          matchesDuration
        );
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // recommended
      });
  }, [
    initialPackages,
    searchTerm,
    selectedCategory,
    selectedRegion,
    selectedTheme,
    selectedHotelCategory,
    selectedDuration,
    maxPrice,
    sortBy,
  ]);

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <h3 className="font-extrabold text-sm text-slate-900 flex items-center space-x-2">
          <Filter className="w-4 h-4 text-brand-600" />
          <span>Refine Tour Packages</span>
        </h3>
        <button
          onClick={resetFilters}
          className="text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline flex items-center space-x-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* 1. Search Destination */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Search Keywords</label>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. Varanasi, Kashmir, Kerala..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* 2. Destination Category */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Domestic / International</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
        >
          <option value="ALL">All Categories (Global)</option>
          <option value="INDIA">Domestic India Packages</option>
          <option value="INTERNATIONAL">International Packages</option>
        </select>
      </div>

      {/* 3. Region Filter */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Geographic Region</label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
        >
          <option value="ALL">All Regions</option>
          <option value="North India">North India (UP, Kashmir, HP, UK)</option>
          <option value="South India">South India & Islands (Kerala, Tamil Nadu, Andaman)</option>
          <option value="West India">West India (Goa, Gujarat, MH)</option>
          <option value="East India">East & North East India (Sikkim, Meghalaya)</option>
          <option value="Niche">Niche / Spiritual Yatras</option>
          <option value="International">International Destinations</option>
        </select>
      </div>

      {/* 4. Tour Theme Filter */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Tour Theme</label>
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
        >
          <option value="ALL">All Themes</option>
          <option value="Spiritual">Spiritual / Yatra & Pilgrimage</option>
          <option value="Family">Family Holidays</option>
          <option value="Honeymoon">Honeymoon & Romantic</option>
          <option value="Adventure">Adventure & Trekking</option>
          <option value="Wildlife">Wildlife & Nature Safari</option>
          <option value="Heritage">Heritage & Culture</option>
          <option value="Luxury">Luxury Resorts</option>
          <option value="Beach">Beach & Coastal</option>
        </select>
      </div>

      {/* 5. Hotel Star Category */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Hotel Category</label>
        <select
          value={selectedHotelCategory}
          onChange={(e) => setSelectedHotelCategory(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
        >
          <option value="ALL">Any Hotel Star Rating</option>
          <option value="3 Star">3 Star Hotels</option>
          <option value="4 Star">4 Star Hotels</option>
          <option value="5 Star">5 Star Luxury Resorts</option>
        </select>
      </div>

      {/* 6. Duration Filter */}
      <div>
        <label className="text-xs font-bold text-slate-800 block mb-1.5">Trip Duration</label>
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800"
        >
          <option value="ALL">All Durations</option>
          <option value="short">Short Weekend (1 to 4 Days)</option>
          <option value="medium">Standard Holiday (5 to 7 Days)</option>
          <option value="long">Grand Circuit (8+ Days)</option>
        </select>
      </div>

      {/* 7. Price Slider */}
      <div>
        <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
          <span>Max Budget</span>
          <span className="text-brand-600 font-black">{formatCurrency(maxPrice)}</span>
        </div>
        <input
          type="range"
          min="10000"
          max="200000"
          step="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-brand-500 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
          <span>₹10,000</span>
          <span>₹2,00,000</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/holidays" className="hover:text-brand-600 transition-colors">
            Holidays
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-800">{title}</span>
        </div>

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="bg-accent-500/20 text-accent-400 border border-accent-400/30 text-[11px] font-extrabold px-3 py-1 rounded-full inline-flex items-center space-x-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badgeText}</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Mobile Quick Filter Chips & Full Drawer Toggle Button */}
        <div className="lg:hidden mb-6 space-y-3">
          <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center space-x-2 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-all border border-brand-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>All Filters ({filteredPackages.length})</span>
            </button>
            <span className="text-xs text-slate-500 font-bold">
              Showing {filteredPackages.length} Packages
            </span>
          </div>

          {/* 1-Tap Horizontal Quick Filter Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold text-slate-700">
            <button
              onClick={() => { setSelectedCategory('ALL'); setSelectedHotelCategory('ALL'); setSelectedTheme('ALL'); setSelectedDuration('ALL'); setMaxPrice(200000); }}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedCategory === 'ALL' && selectedHotelCategory === 'ALL' && selectedTheme === 'ALL'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              🔥 All ({initialPackages.length})
            </button>
            <button
              onClick={() => setSelectedCategory('INDIA')}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedCategory === 'INDIA'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              🇮🇳 Domestic India
            </button>
            <button
              onClick={() => setSelectedCategory('INTERNATIONAL')}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedCategory === 'INTERNATIONAL'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              🌏 International
            </button>
            <button
              onClick={() => setSelectedHotelCategory(selectedHotelCategory === '4 Star' ? 'ALL' : '4 Star')}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedHotelCategory === '4 Star' || selectedHotelCategory === '5 Star'
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs font-black'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              ⭐ 4-5 Star Hotels
            </button>
            <button
              onClick={() => setSelectedTheme(selectedTheme === 'Spiritual' ? 'ALL' : 'Spiritual')}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedTheme === 'Spiritual'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              🙏 Spiritual Yatra
            </button>
            <button
              onClick={() => setMaxPrice(maxPrice === 30000 ? 200000 : 30000)}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                maxPrice === 30000
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              💰 Under ₹30,000
            </button>
            <button
              onClick={() => setSelectedDuration(selectedDuration === 'short' ? 'ALL' : 'short')}
              className={`px-3.5 py-1.5 rounded-full shrink-0 border transition-all ${
                selectedDuration === 'short'
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              ⏱️ 1-4 Days
            </button>
          </div>
        </div>

        {/* Mobile Filter Drawer Overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end">
            <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <h3 className="font-black text-base text-slate-900">Filters</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {sidebarContent}

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Button
                  onClick={() => setIsMobileFilterOpen(false)}
                  variant="primary"
                  className="w-full font-bold text-xs py-3"
                >
                  Apply Filters ({filteredPackages.length} Packages)
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main SRP Grid (Sidebar Filters on Left + Listing Cards on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Sticky Sidebar Filter */}
          <div className="hidden lg:block lg:col-span-3">
            <Card className="p-5 border-slate-200 sticky top-24 shadow-sm bg-white rounded-3xl">
              {sidebarContent}
            </Card>
          </div>

          {/* Listing Cards Container */}
          <div className="lg:col-span-9 space-y-6">
            {/* Header Control Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="font-bold text-slate-800">
                Showing <span className="text-brand-600 font-black">{filteredPackages.length}</span> Tour Packages
              </span>

              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                <span className="text-slate-500 font-semibold shrink-0">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Zero Results State */}
            {filteredPackages.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl text-center border border-slate-200 shadow-xs">
                <p className="text-slate-700 text-sm font-bold mb-2">No tour packages match your filters.</p>
                <p className="text-slate-400 text-xs mb-4">Try adjusting your budget slider, theme selection, or region keywords.</p>
                <Button
                  onClick={resetFilters}
                  variant="primary"
                  size="sm"
                  className="font-bold text-xs px-4 py-2"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              /* Packages Listing Array */
              <div className="space-y-6">
                {filteredPackages.map((pkg, idx) => (
                  <Card
                    key={pkg.id}
                    hoverable
                    className="border-slate-200 overflow-hidden group bg-white rounded-3xl shadow-sm transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12">
                      {/* Image Thumbnail */}
                      <div className="md:col-span-4 relative h-56 md:h-auto bg-slate-100 min-h-[200px]">
                        <Image
                          src={pkg.heroImage}
                          alt={pkg.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          priority={idx < 4}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-brand-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                          {pkg.theme}
                        </div>
                        {pkg.discountPrice && pkg.discountPrice > pkg.startingPrice && (
                          <div className="absolute bottom-3 left-3 bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md shadow-xs">
                            SAVE {Math.round(((pkg.discountPrice - pkg.startingPrice) / pkg.discountPrice) * 100)}%
                          </div>
                        )}
                      </div>

                      {/* Package Details Content */}
                      <div className="md:col-span-8 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-brand-600 flex items-center space-x-1">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span>{pkg.destination}, {pkg.country}</span>
                            </span>
                            <div className="flex items-center space-x-1 text-amber-500 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                              <Star className="w-3.5 h-3.5 fill-amber-400" />
                              <span>{pkg.rating} ({pkg.reviewsCount})</span>
                            </div>
                          </div>

                          <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-1">
                            {pkg.name}
                          </h2>

                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                            <span className="flex items-center space-x-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-bold">
                              <Clock className="w-3.5 h-3.5 text-brand-600 mr-1" />
                              <span>{pkg.durationDays}D / {pkg.durationNights}N</span>
                            </span>
                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">{pkg.hotelCategory}</span>
                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">{pkg.mealPlan}</span>
                          </div>

                          {/* Key Highlights */}
                          <div className="space-y-1 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            {pkg.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1 font-semibold">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price & Call to Actions */}
                        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            {pkg.discountPrice && pkg.discountPrice > pkg.startingPrice && (
                              <span className="text-xs text-slate-400 line-through mr-2 font-semibold">
                                {formatCurrency(pkg.discountPrice)}
                              </span>
                            )}
                            <span className="text-xl font-black text-brand-700">
                              {formatCurrency(pkg.startingPrice)}
                            </span>
                            <span className="text-[10px] text-slate-500 font-bold"> / person</span>
                          </div>

                          <div className="flex items-center space-x-2 w-full sm:w-auto">
                            <button
                              onClick={() => setActiveQuotePkg(pkg)}
                              className="flex-1 sm:flex-none border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all shadow-2xs"
                            >
                              Get Quote
                            </button>
                            <Link
                              href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`}
                              className="flex-1 sm:flex-none bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm text-center"
                            >
                              View Package →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Free Quick Quote Modal */}
      {activeQuotePkg && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-white rounded-3xl shadow-2xl relative border-slate-100">
            <button
              onClick={() => setActiveQuotePkg(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-sm bg-slate-100 p-1.5 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2.5 py-0.5 rounded-full inline-flex items-center space-x-1 mb-2 border border-brand-200/50">
              <PhoneCall className="w-3 h-3 mr-1" />
              <span>Instant Call Back Quote</span>
            </span>
            <h3 className="font-black text-base text-slate-900 mb-1">{activeQuotePkg.name}</h3>
            <p className="text-xs text-slate-500 mb-4">{activeQuotePkg.durationDays} Days / {activeQuotePkg.durationNights} Nights • Starting at <span className="font-bold text-brand-700">{formatCurrency(activeQuotePkg.startingPrice)}</span></p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Quote request received for ${activeQuotePkg.name}! Our expert agent will contact you on WhatsApp/Phone shortly.`);
                setActiveQuotePkg(null);
              }}
              className="space-y-3.5 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Full Name</label>
                <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp Number</label>
                <input required type="tel" placeholder="+91 9876543210" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Travel Date</label>
                <input required type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>

              <Button type="submit" variant="accent" size="md" className="w-full font-black py-3 mt-2 shadow-md">
                GET FREE INSTANT QUOTE
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
