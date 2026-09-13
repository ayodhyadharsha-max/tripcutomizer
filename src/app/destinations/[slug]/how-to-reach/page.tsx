import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Plane, Train, ChevronRight } from 'lucide-react';

export default function HowToReachPage({ params }: { params: { slug: string } }) {
  const name = params.slug.toUpperCase();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href={`/destinations/${params.slug}`} className="hover:text-brand-500">{name}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-slate-900">How to Reach</span>
        </div>

        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-black">How to Reach {name}</h1>
          <p className="text-slate-300 text-xs mt-2">Flight connectivity, major international airports, rail networks & local transit options.</p>
        </div>

        <Card className="p-6 bg-white border-slate-200 text-xs space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <h2 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Plane className="w-4 h-4 text-brand-500" />
              <span>By Air</span>
            </h2>
            <p className="text-slate-600">Direct non-stop flights available from New Delhi, Mumbai, Bengaluru, and major metro airports in India.</p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
