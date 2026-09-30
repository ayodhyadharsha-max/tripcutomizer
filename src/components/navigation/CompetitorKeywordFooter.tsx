'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPETITOR_KEYWORDS_CATEGORY } from '@/lib/competitorKeywords';
import { ChevronDown, Compass, MapPin, Sparkles } from 'lucide-react';

export const CompetitorKeywordFooter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dubai' | 'gujarat' | 'spiritual' | 'india' | 'international'>('dubai');

  return (
    <div className="bg-brand-950 text-slate-300 py-10 border-t border-brand-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
            Popular Tour Searches & Competitor Packages Index
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-800 pb-4">
          <button
            onClick={() => setActiveTab('dubai')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'dubai' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Dubai & UAE (19+)
          </button>

          <button
            onClick={() => setActiveTab('gujarat')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'gujarat' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Gujarat & Teerth (45+)
          </button>

          <button
            onClick={() => setActiveTab('spiritual')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'spiritual' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Sacred Spiritual Yatras (40+)
          </button>

          <button
            onClick={() => setActiveTab('india')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'india' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Top India Destinations (65+)
          </button>

          <button
            onClick={() => setActiveTab('international')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'international' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            International Outbound (100+)
          </button>
        </div>

        {/* Keyword Links Cloud Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-[11px]">
          {activeTab === 'dubai' &&
            COMPETITOR_KEYWORDS_CATEGORY.dubaiUae.map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/dubai?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
              >
                • {kw}
              </Link>
            ))}

          {activeTab === 'gujarat' &&
            COMPETITOR_KEYWORDS_CATEGORY.gujaratSpecialTeerth.map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/gujarat?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
              >
                • {kw}
              </Link>
            ))}

          {activeTab === 'spiritual' &&
            COMPETITOR_KEYWORDS_CATEGORY.spiritualYatras.map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/ayodhya?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
              >
                • {kw}
              </Link>
            ))}

          {activeTab === 'india' &&
            COMPETITOR_KEYWORDS_CATEGORY.topDomesticIndia.map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/india?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
              >
                • {kw}
              </Link>
            ))}

          {activeTab === 'international' &&
            COMPETITOR_KEYWORDS_CATEGORY.internationalOutbound.map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/international?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
              >
                • {kw}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
