import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { Compass, Clock, Star, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CharDhamPage() {
  const spiritualPkgs = DEMO_PACKAGES.filter((p) => p.theme === 'Spiritual' || p.slug.includes('char-dham'));
  const pkg = spiritualPkgs[0] || DEMO_PACKAGES[3];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-gradient-to-r from-amber-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Sacred Yatra Specials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Char Dham & Do Dham Yatra Packages</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Yamunotri, Gangotri, Kedarnath & Badrinath Darshan with Helicopter shuttle passes, VIP Darshan, pure Sattvik vegetarian meals & experienced Yatra guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card hoverable className="p-6 bg-white border-slate-200">
            <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-3 py-1 rounded-full inline-block mb-3">
              Most Popular Yatra
            </span>
            <h2 className="text-xl font-black text-slate-900 mb-2">{pkg.name}</h2>
            <p className="text-xs text-slate-600 mb-4">{pkg.durationDays} Days / {pkg.durationNights} Nights • Haridwar to Haridwar Route</p>
            <div className="text-2xl font-black text-amber-700 mb-4">{formatCurrency(pkg.startingPrice)} <span className="text-xs text-slate-400 font-normal">/ person</span></div>
            <Link href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`} className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-5 py-3 rounded-xl shadow-md">
              BOOK CHAR DHAM YATRA →
            </Link>
          </Card>

          <Card className="p-6 bg-amber-50 border-amber-200 text-slate-900 space-y-4">
            <h3 className="font-bold text-base text-amber-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>Yatra Services Included</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li>✓ Guaranteed Kedarnath Helicopter shuttle ticket assistance</li>
              <li>✓ Special Elderly & Senior Citizen medical attendant support</li>
              <li>✓ 100% Pure Sattvik Pure-Veg breakfasts & dinners</li>
              <li>✓ Mandatory Uttarakhand Yatra registration & biometric assistance</li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
}
