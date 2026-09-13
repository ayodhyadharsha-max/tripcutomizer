import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { MapPin, ChevronRight } from 'lucide-react';

export default function PlacesToVisitPage({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href={`/destinations/${params.slug}`} className="hover:text-brand-500">{name}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-900">Places to Visit</span>
        </div>

        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-black">Top Places to Visit in {name}</h1>
          <p className="text-slate-300 text-xs mt-2">Explore iconic landmarks, scenic viewpoints, cultural monuments & hidden gems.</p>
        </div>

        <Card className="p-6 bg-white border-slate-200 text-xs space-y-4">
          <h2 className="font-bold text-slate-900 text-sm">Must-Visit Attractions</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="p-3 bg-slate-50 rounded-xl font-semibold">1. Landmark Observatory & City Skyline Viewpoints</li>
            <li className="p-3 bg-slate-50 rounded-xl font-semibold">2. Cultural Heritage District & Historic Souks / Old Town</li>
            <li className="p-3 bg-slate-50 rounded-xl font-semibold">3. Waterfront Promenade, Marinas & Sunset Cruise Ports</li>
          </ul>
        </Card>
      </Container>
    </div>
  );
}
