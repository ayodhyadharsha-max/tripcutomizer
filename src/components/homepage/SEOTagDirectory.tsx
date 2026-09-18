'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const SEOTagDirectory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = [
    {
      name: 'Trending International Tour Packages',
      tags: [
        'Turkey tour packages', 'Singapore tour packages', 'Malaysia tour packages', 'Bali tour packages',
        'Dubai tour packages', 'Mauritius tour packages', 'Maldives tour packages', 'Vietnam tour packages',
        'Cambodia tour packages', 'Seychelles tour packages', 'Australia tour packages', 'Europe tour packages',
        'South Africa tour packages', 'Egypt tour packages', 'Spain tour packages', 'USA tour packages',
        'Japan tour packages', 'Thailand tour packages', 'Azerbaijan tour packages', 'Baku tour packages',
        'Georgia tour packages', 'Kazakhstan tour packages'
      ]
    },
    {
      name: 'Most Popular Spiritual Tour Packages',
      tags: [
        'Char Dham Yatra packages', 'Kedarnath tour packages', 'Badrinath tour packages', 'Do Dham Yatra packages',
        'Varanasi Kashi tour', 'Rameswaram Temple tour', 'Tirupati Balaji Darshan', 'Amarnath Yatra packages',
        'Shirdi Sai Baba package', 'Golden Temple Amritsar package', 'Vaishno Devi Yatra', 'Dwarka Somnath package'
      ]
    },
    {
      name: 'Trending Destinations in India',
      tags: [
        'Kerala tour packages', 'Kashmir tour packages', 'Goa tour packages', 'Himachal tour packages',
        'Ladakh tour packages', 'Andaman tour packages', 'Rajasthan tour packages', 'North East tour packages',
        'Sikkim Darjeeling packages', 'Uttarakhand tour packages', 'Coorg Ooty packages', 'Manali tour packages'
      ]
    },
    {
      name: 'Trending International Honeymoon Packages',
      tags: [
        'Maldives honeymoon packages', 'Bali honeymoon packages', 'Mauritius honeymoon packages', 'Greece honeymoon packages',
        'Switzerland honeymoon packages', 'Paris honeymoon packages', 'Thailand honeymoon packages', 'Seychelles honeymoon packages'
      ]
    },
    {
      name: 'Trending India Honeymoon Packages',
      tags: [
        'Kerala honeymoon packages', 'Kashmir honeymoon packages', 'Manali honeymoon packages', 'Goa honeymoon packages',
        'Coorg honeymoon packages', 'Udaipur honeymoon packages', 'Andaman honeymoon packages'
      ]
    },
    {
      name: 'Trending Travel Themes',
      tags: [
        'Luxury Cruise packages', 'Escorted Group Tours', 'Adventure & Trekking', 'Beach Escapes',
        'Wildlife Safari packages', 'Heritage & Cultural tours', 'Self-Drive Holidays', 'Winter Snow Tours'
      ]
    },
    {
      name: 'Most Popular India Tourism',
      tags: [
        'Gods Own Country Kerala', 'Paradise on Earth Kashmir', 'Golden Triangle India', 'Royal Rajasthan Heritage',
        'Spiritual Varanasi Ghats', 'Lakes & Palaces Udaipur', 'Snow Slopes Gulmarg'
      ]
    },
    {
      name: 'Most Popular International Tourism',
      tags: [
        'Europe Tourism', 'Thailand Tourism', 'Dubai Tourism', 'Singapore Tourism',
        'Bali Tourism', 'Maldives Tourism', 'Vietnam Tourism', 'Australia Tourism'
      ]
    },
    {
      name: 'Trending International Flights Routes',
      tags: [
        'Delhi to Dubai Flights', 'Mumbai to Singapore Flights', 'Bengaluru to London Flights',
        'Delhi to Bangkok Flights', 'Mumbai to Abu Dhabi Flights', 'Kolkata to Dubai Flights'
      ]
    },
    {
      name: 'Trending Domestic Flights Routes',
      tags: [
        'Delhi to Mumbai Flights', 'Bengaluru to Delhi Flights', 'Mumbai to Goa Flights',
        'Delhi to Srinagar Flights', 'Kolkata to Bengaluru Flights', 'Chennai to Delhi Flights'
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <Container>
        {/* SEO Title & Paragraph */}
        <div className="mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tours and Travel Agency – tripcustomizer
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-5xl">
            <p>
              &ldquo;Travel is the only thing you buy that makes you richer&rdquo;. We completely swear by this and believe in fulfilling travel dreams that make you invariably rich by the day. We have brought together handpicked international holiday packages, flight schedules, luxury resort stays, and customized tour itineraries designed for unforgettable travel memories.
            </p>
            {isExpanded && (
              <p className="mt-2 text-slate-500 animate-in fade-in duration-200">
                Whether you are seeking a serene house-boat stay in Kerala, a romantic water villa in the Maldives, an escorted group tour across European castles, or a sacred Char Dham Yatra, tripcustomizer ensures seamless booking and 24x7 dedicated travel assistance.
              </p>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-brand-600 font-bold hover:underline inline-flex items-center gap-1 mt-1 text-xs"
            >
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Tabbed Directory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Vertical Tab Menu */}
          <div className="lg:col-span-4 space-y-1.5 border-r border-slate-200 pr-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                  activeTab === idx
                    ? 'border-l-4 border-brand-600 bg-white text-brand-600 font-black shadow-sm'
                    : 'text-slate-600 font-bold hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Right Area: Pill Buttons Cloud */}
          <div className="lg:col-span-8 flex flex-wrap gap-3 pt-1">
            {categories[activeTab].tags.map((tag, idx) => (
              <Link
                key={idx}
                href={`/holidays?search=${encodeURIComponent(tag.replace(/ (packages|tour|yatra)/i, '').trim())}`}
                className="px-5 py-2.5 bg-white text-blue-600 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-50 rounded-full text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer inline-block"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
