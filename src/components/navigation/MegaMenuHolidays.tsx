'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, MapPin, Sun, Heart, Flame, ShieldAlert, Anchor } from 'lucide-react';

export const MegaMenuHolidays: React.FC = () => {
  const internationalDestinations = [
    { name: 'Europe Special', slug: 'europe' },
    { name: 'Dubai & UAE', slug: 'dubai' },
    { name: 'Bali & Indonesia', slug: 'bali' },
    { name: 'Singapore & Malaysia', slug: 'singapore' },
    { name: 'Thailand Getaways', slug: 'thailand' },
    { name: 'Vietnam & Cambodia', slug: 'vietnam' },
    { name: 'Maldives Luxury', slug: 'maldives' },
    { name: 'Japan & South Korea', slug: 'japan' },
    { name: 'Australia & NZ', slug: 'australia' },
    { name: 'South Africa Safari', slug: 'south-africa' },
    { name: 'Switzerland', slug: 'switzerland' },
    { name: 'Turkey & Greece', slug: 'turkey' },
  ];

  const indiaDestinations = [
    { name: 'Ayodhya & Varanasi', slug: 'ayodhya-varanasi' },
    { name: 'Mathura & Vrindavan', slug: 'mathura-vrindavan' },
    { name: 'Himachal & Manali', slug: 'himachal' },
    { name: 'Kashmir Paradise', slug: 'kashmir' },
    { name: 'Kerala Backwaters', slug: 'kerala' },
    { name: 'Rajasthan Forts', slug: 'rajasthan' },
    { name: 'Char Dham & UK', slug: 'uttarakhand' },
    { name: 'Ladakh Adventure', slug: 'ladakh' },
    { name: 'Sikkim & North East', slug: 'north-east' },
    { name: 'Goa & Water Sports', slug: 'goa' },
    { name: 'Gujarat & Kutch', slug: 'gujarat' },
    { name: 'Andaman Islands', slug: 'andaman' },
  ];

  const specialThemes = [
    { name: 'Char Dham Yatra', href: '/char-dham', icon: Compass, badge: 'Popular' },
    { name: 'Do Dham Yatra', href: '/do-dham', icon: MapPin },
    { name: 'International Honeymoon', href: '/honeymoon/international', icon: Heart, badge: 'Romantic' },
    { name: 'India Honeymoon', href: '/honeymoon/india', icon: Heart },
    { name: 'Escorted Group Tours', href: '/escorted-tours', icon: Sparkles },
    { name: 'Private Luxury Journeys', href: '/private-journeys', icon: Flame },
    { name: 'Wildlife & Safaris', href: '/wildlife-tours', icon: Sun },
    { name: 'Luxury Cruises', href: '/cruises', icon: Anchor },
  ];

  return (
    <div
      style={{ width: '780px', minWidth: '780px' }}
      className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 text-slate-800 z-50 font-sans leading-normal"
    >
      {/* Column 1: International Holidays */}
      <div className="border-r border-slate-100 pr-4">
        <div className="flex items-center space-x-2 text-brand-600 font-bold text-sm mb-3 pb-2 border-b border-slate-100">
          <Compass className="w-4 h-4" />
          <span>International Holidays</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-600">
          {internationalDestinations.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/holidays/${item.slug}`}
                className="hover:text-brand-500 hover:translate-x-1 transition-all inline-block font-medium py-0.5"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-2 border-t border-slate-100">
          <Link href="/holidays/international" className="text-xs font-bold text-brand-500 hover:underline">
            View All International Packages →
          </Link>
        </div>
      </div>

      {/* Column 2: Domestic India Holidays */}
      <div className="border-r border-slate-100 pr-4">
        <div className="flex items-center space-x-2 text-brand-600 font-bold text-sm mb-3 pb-2 border-b border-slate-100">
          <Sun className="w-4 h-4 text-accent-500" />
          <span>India Holidays</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-600">
          {indiaDestinations.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/holidays/${item.slug}`}
                className="hover:text-brand-500 hover:translate-x-1 transition-all inline-block font-medium py-0.5"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-2 border-t border-slate-100">
          <Link href="/holidays/india" className="text-xs font-bold text-brand-500 hover:underline">
            Explore All India Destinations →
          </Link>
        </div>
      </div>

      {/* Column 3: Specials & Themes */}
      <div>
        <div className="flex items-center space-x-2 text-brand-600 font-bold text-sm mb-3 pb-2 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-accent-500" />
          <span>Special Tour Themes</span>
        </div>
        <div className="space-y-2">
          {specialThemes.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 group-hover:text-brand-500">
                  <IconComponent className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-accent-100 text-accent-600 font-bold px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
        <div className="mt-5 p-3 rounded-xl bg-brand-50 border border-brand-100">
          <p className="text-xs font-bold text-brand-800">Customize Your Trip</p>
          <p className="text-[11px] text-slate-500 mb-2">Build a tailored itinerary with expert agents</p>
          <Link
            href="/customize-trip"
            className="inline-block bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm"
          >
            Build My Trip →
          </Link>
        </div>
      </div>
    </div>
  );
};
