'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MASTER_SEARCH_CATEGORIES,
  SPIRITUAL_KEYWORDS_INDEX,
  GUJARAT_KEYWORDS_INDEX,
  DOMESTIC_KEYWORDS_INDEX,
  INTERNATIONAL_KEYWORDS_INDEX,
  ALL_MASTER_KEYWORD_SLUGS,
  TOTAL_MASTER_KEYWORD_COUNT,
} from '@/lib/searchKeywordsIndex';
import { Sparkles } from 'lucide-react';

const formatTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ''))
    .join(' ');
};

export const PopularKeywordsFooter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'spiritual' | 'gujarat' | 'domestic' | 'international' | 'dubai' | 'master29k'
  >('spiritual');

  const [keywordSearch, setKeywordSearch] = useState('');

  return (
    <div className="bg-brand-950 text-slate-300 py-10 border-t border-brand-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
              Popular Tour Searches & Package Index
            </h3>
          </div>

          {/* Quick Keyword Filter Input */}
          <div className="bg-brand-900 border border-brand-700/80 rounded-full px-4 py-1.5 flex items-center max-w-xs shadow-inner">
            <input
              type="text"
              placeholder="Search packages & destinations..."
              value={keywordSearch}
              onChange={(e) => setKeywordSearch(e.target.value)}
              className="bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-800 pb-4">
          <button
            onClick={() => setActiveTab('spiritual')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'spiritual' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Spiritual & Yatras (365+)
          </button>

          <button
            onClick={() => setActiveTab('gujarat')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'gujarat' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Gujarat & Teerth (685+)
          </button>

          <button
            onClick={() => setActiveTab('domestic')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'domestic' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Domestic India (2,824+)
          </button>

          <button
            onClick={() => setActiveTab('international')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'international' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            International Outbound (3,485+)
          </button>

          <button
            onClick={() => setActiveTab('dubai')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'dubai' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            Dubai & UAE Special (30+)
          </button>

          <button
            onClick={() => setActiveTab('master29k')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'master29k' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-brand-900 text-slate-300 hover:text-white'
            }`}
          >
            All Package Searches
          </button>
        </div>

        {/* Keyword Links Cloud Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-[11px] max-h-96 overflow-y-auto custom-scrollbar pr-2">
          {activeTab === 'spiritual' &&
            SPIRITUAL_KEYWORDS_INDEX.filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/ayodhya?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}

          {activeTab === 'gujarat' &&
            GUJARAT_KEYWORDS_INDEX.filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/gujarat?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}

          {activeTab === 'domestic' &&
            DOMESTIC_KEYWORDS_INDEX.filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/india?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}

          {activeTab === 'international' &&
            INTERNATIONAL_KEYWORDS_INDEX.filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/international?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}

          {activeTab === 'dubai' &&
            MASTER_SEARCH_CATEGORIES.dubaiUae.filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays/dubai?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}

          {activeTab === 'master29k' &&
            ALL_MASTER_KEYWORD_SLUGS.slice(0, 1000).filter((kw) => kw.toLowerCase().includes(keywordSearch.toLowerCase())).map((kw, i) => (
              <Link
                key={i}
                href={`/holidays?q=${encodeURIComponent(kw)}`}
                className="hover:text-amber-300 truncate text-slate-400 transition-colors block py-0.5"
                title={kw}
              >
                • {formatTitleCase(kw)}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
