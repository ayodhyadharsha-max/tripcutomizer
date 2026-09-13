import React from 'react';
import { ForexMiniWidget } from '@/components/homepage/ForexMiniWidget';
import { Container } from '@/components/ui/Container';

export default function CurrencyConverterPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-black text-slate-900">Live Currency Converter Tool</h1>
          <p className="text-xs text-slate-500 mt-1">Check real-time buy & sell exchange rates for 16+ foreign currencies</p>
        </div>

        <ForexMiniWidget />
      </Container>
    </div>
  );
}
