import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { Anchor, Clock, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CruisesPage() {
  const cruisePkgs = DEMO_PACKAGES.filter((p) => p.theme === 'Cruise' || p.slug.includes('cruise'));
  const pkg = cruisePkgs[0] || DEMO_PACKAGES[5];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-gradient-to-r from-sky-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Anchor className="w-4 h-4 text-sky-400" />
            <span>Luxury Ocean & River Liners</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Ocean & River Cruise Vacation Packages</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Experience Genting Dream Cruise, Royal Caribbean, Costa Cruises & Cordelia Cruises. Unlimited dining, Broadway theater shows, casino & island ports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Card hoverable className="p-6 bg-white border-slate-200">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-sky-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured Cruise Liner
                </div>
              </div>

              <h2 className="text-xl font-black text-slate-900 mb-2">{pkg.name}</h2>
              <p className="text-xs text-slate-600 mb-4">{pkg.durationDays} Days / {pkg.durationNights} Nights • Singapore - Penang - High Seas</p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-slate-700 font-semibold">
                <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>All Onboard Meals & Buffet</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Broadway Live Theater Shows</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Waterslide Park & Zip Lining</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Singapore Hotel Stay Included</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-400 block">Cabin Fares From</span>
                  <span className="text-2xl font-black text-brand-700">{formatCurrency(pkg.startingPrice)}</span>
                </div>

                <Link href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`} className="bg-brand-500 hover:bg-brand-600 text-white font-black text-xs px-5 py-3 rounded-xl shadow-md">
                  SELECT CABIN & BOOK →
                </Link>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Card className="p-5 bg-white border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Available Cabin Categories</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900">Inside Stateroom</p>
                  <p className="text-slate-500">Cozy double cabin with virtual porthole view.</p>
                </div>
                <div className="p-3 bg-brand-50 rounded-xl border border-brand-200">
                  <p className="font-bold text-brand-900">Oceanview Stateroom</p>
                  <p className="text-brand-700">Large picture window with ocean views.</p>
                </div>
                <div className="p-3 bg-accent-50 rounded-xl border border-accent-200">
                  <p className="font-bold text-accent-950">Balcony Suite</p>
                  <p className="text-accent-800">Private outdoor verandah & butler service.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
