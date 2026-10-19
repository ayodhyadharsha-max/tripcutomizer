'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Home, MapPin, Search } from 'lucide-react';

export default function NotFound() {
  const popularLinks = [
    { name: 'Ayodhya Tour Packages', href: '/holidays/ayodhya' },
    { name: 'Dubai Holiday Packages', href: '/holidays/dubai' },
    { name: 'Kashmir Tour Packages', href: '/holidays/kashmir' },
    { name: 'Char Dham Yatra 2026', href: '/holidays/char-dham' },
    { name: 'Bali Honeymoon Packages', href: '/holidays/bali' },
    { name: 'Goa Beach Vacations', href: '/holidays/goa' },
    { name: 'Kerala Houseboat Tours', href: '/holidays/kerala' },
    { name: 'Thailand Tour Packages', href: '/holidays/thailand' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 mb-4">
          <Compass className="w-3.5 h-3.5" /> Error 404
        </span>
        <h1 className="text-5xl font-black text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The holiday package or travel guide you are looking for may have been updated or moved to our main catalog.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            href="/customize-trip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-3 rounded-full transition-all"
          >
            <Search className="w-4 h-4 text-brand-600" /> Plan Custom Trip
          </Link>
        </div>

        <div className="text-left pt-6 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-600" /> Popular Destinations You Might Like:
          </p>
          <div className="flex flex-wrap gap-2">
            {popularLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-xs bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-medium px-3 py-1.5 rounded-lg border border-slate-200 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
