import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { MapPin, Sun, DollarSign, FileCheck, Compass, ArrowRight, ChevronRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();
  return {
    title: `${name} Travel Guide 2026 — Places to Visit, Best Time, Visa & Packages | tripcustomizer`,
    description: `Complete travel guide for ${name}. Explore top attractions, best time to visit, visa guidelines, currency exchange rates and holiday packages.`,
  };
}

export default function DestinationMasterSeoPage({ params }: { params: { slug: string } }) {
  const destSlug = params.slug;
  const name = destSlug.charAt(0).toUpperCase() + destSlug.slice(1);
  const packages = DEMO_PACKAGES.filter((p) => p.destinationSlug === destSlug) || DEMO_PACKAGES;

  // JSON-LD TouristTrip & TravelAgency Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${name} Travel Guide & Tour Packages`,
    description: `Handcrafted tour itineraries, hotels, visa assistance and forex currency exchange for ${name}.`,
    touristType: ['Family', 'Couples', 'Solo'],
    provider: {
      '@type': 'TravelAgency',
      name: 'tripcustomizer',
      url: 'https://tripcustomizer.com',
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      {/* JSON-LD Script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Destinations</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-900">{name}</span>
        </div>

        {/* Hero SEO Header */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <span className="text-xs font-bold text-accent-400 uppercase tracking-wider block mb-2">Master Destination Guide</span>
          <h1 className="text-3xl sm:text-5xl font-black">{name} Travel Guide 2026</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Everything you need to know about visiting {name}: top places to see, ideal travel weather, local currency, visa requirements & tour packages.
          </p>
        </div>

        {/* Dynamic SEO Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 text-xs font-bold border-b border-slate-200">
          <Link href={`/destinations/${destSlug}`} className="bg-brand-900 text-white px-4 py-2 rounded-xl">Overview</Link>
          <Link href={`/destinations/${destSlug}/places-to-visit`} className="bg-white text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-xl">Places to Visit</Link>
          <Link href={`/destinations/${destSlug}/best-time-to-visit`} className="bg-white text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-xl">Best Time to Visit</Link>
          <Link href={`/destinations/${destSlug}/how-to-reach`} className="bg-white text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-xl">How to Reach</Link>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 space-y-6">
            <Card className="p-6 bg-white border-slate-200 text-xs space-y-4">
              <h2 className="text-base font-bold text-slate-900">About {name}</h2>
              <p className="text-slate-600 leading-relaxed">
                {name} is one of the most vibrant travel destinations in the world, offering a captivating blend of iconic landmarks, cultural heritage, world-class dining, and luxurious resort stays.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Local Currency</span>
                  <span className="font-bold text-slate-900 text-sm flex items-center space-x-1 mt-0.5">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span>Currency Available via Forex Desk</span>
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Visa Status</span>
                  <span className="font-bold text-slate-900 text-sm flex items-center space-x-1 mt-0.5">
                    <FileCheck className="w-4 h-4 text-brand-600" />
                    <span>E-Visa / Express Assistance</span>
                  </span>
                </div>
              </div>
            </Card>

            {/* Related Packages */}
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-4">Top Recommended {name} Tour Packages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packages.map((pkg) => (
                  <Card key={pkg.id} hoverable className="p-5 bg-white border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{pkg.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{pkg.durationDays}D / {pkg.durationNights}N • {pkg.hotelCategory}</p>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                      <span className="text-base font-black text-brand-700">{formatCurrency(pkg.startingPrice)}</span>
                      <Link href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`} className="text-xs font-bold text-brand-500 hover:underline">
                        View Package →
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Card className="p-6 bg-white border-slate-200 text-xs space-y-3">
              <h3 className="font-bold text-slate-900">Quick Travel Tips</h3>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li>• Carry foreign exchange currency cards for easy payments.</li>
                <li>• Ensure passport validity is minimum 6 months from travel date.</li>
                <li>• Book flights 45 days in advance for best airfares.</li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
