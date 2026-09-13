import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Sun, ChevronRight } from 'lucide-react';

export default function BestTimeToVisitPage({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href={`/destinations/${params.slug}`} className="hover:text-brand-500">{name}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-900">Best Time to Visit</span>
        </div>

        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-black">Best Time & Weather to Visit {name}</h1>
          <p className="text-slate-300 text-xs mt-2">Peak season, pleasant months & shoulder season flight discounts.</p>
        </div>

        <Card className="p-6 bg-white border-slate-200 text-xs space-y-4">
          <h2 className="font-bold text-slate-900 text-sm">Seasonal Travel Breakdown</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <h3 className="font-bold text-emerald-900 text-sm">Peak Season (October to April)</h3>
              <p className="text-slate-600 mt-1">Pleasant temperatures, clear skies, ideal for sightseeing & outdoor desert/beach activities.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
              <h3 className="font-bold text-amber-900 text-sm">Shoulder Season (May & September)</h3>
              <p className="text-slate-600 mt-1">Fewer crowds, excellent hotel discounts & lower airfares.</p>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
