import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { DEMO_PACKAGES } from '@/data/packagesData';
import { formatCurrency } from '@/lib/utils';
import { Heart, Clock, Star, ArrowRight } from 'lucide-react';

export default function HoneymoonPage() {
  const honeymoonPackages = DEMO_PACKAGES.filter((p) => p.theme === 'Honeymoon' || p.slug.includes('bali') || p.slug.includes('maldives'));

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-gradient-to-r from-rose-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Romantic Escapes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Honeymoon Special Tour Packages</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Bali Pool Villas, Maldives Overwater Bungalows, Switzerland Snow Peaks, Kerala Backwater Resorts & Romantic Inclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {honeymoonPackages.map((pkg) => (
            <Card key={pkg.id} hoverable className="border-slate-200 group bg-white">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-rose-800/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Honeymoon Couple Special
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center space-x-1 text-slate-500 text-xs font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-rose-500" />
                  <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-rose-600 transition-colors line-clamp-1 mb-4">
                  {pkg.name}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">Starting Price</span>
                    <span className="text-base font-black text-rose-700">{formatCurrency(pkg.startingPrice)}</span>
                  </div>

                  <Link
                    href={`/holidays/${pkg.destinationSlug}/${pkg.slug}`}
                    className="bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
