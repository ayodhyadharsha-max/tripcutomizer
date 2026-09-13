'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { ShieldCheck, HeartPulse, GraduationCap, Users, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TravelInsurancePage() {
  const [destinationRegion, setDestinationRegion] = useState('Worldwide (Excl USA/Canada)');
  const [durationDays, setDurationDays] = useState(10);
  const [ageGroup, setAgeGroup] = useState('18-40 Years');
  const [calculatedQuote, setCalculatedQuote] = useState<number | null>(1450);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    let base = durationDays * 120;
    if (destinationRegion.includes('USA')) base += 800;
    setCalculatedQuote(base);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Travel Insurance Desk</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Schengen & Global Visa Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Overseas Travel Insurance</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Cashless hospitalization worldwide up to $500,000 USD, flight delay, trip cancellation & passport loss coverage.
          </p>
        </div>

        {/* Insurance Quote Calculator */}
        <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 mb-10">
          <h2 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Instant Travel Insurance Premium Calculator
          </h2>

          <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Destination Region</label>
              <select
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold"
              >
                <option value="Worldwide (Excl USA/Canada)">Worldwide (Excl USA/Canada)</option>
                <option value="Worldwide (Incl USA/Canada)">Worldwide (Incl USA/Canada)</option>
                <option value="Asia Pacific">Asia Pacific Only</option>
                <option value="Schengen Europe">Schengen Europe ($50K USD Compliant)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Trip Duration (Days)</label>
              <input
                type="number"
                min="1"
                max="180"
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-bold"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Eldest Traveller Age</label>
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold"
              >
                <option value="18-40 Years">18 - 40 Years</option>
                <option value="41-60 Years">41 - 60 Years</option>
                <option value="61-70 Years (Senior)">61 - 70 Years (Senior Citizen)</option>
                <option value="71+ Years (Super Senior)">71+ Years (Super Senior)</option>
              </select>
            </div>

            <div className="sm:col-span-3 pt-2">
              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                CALCULATE INSTANT PREMIUM QUOTE →
              </Button>
            </div>
          </form>

          {calculatedQuote && (
            <div className="mt-6 p-5 bg-purple-50 rounded-2xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-purple-700 font-bold uppercase block">Instant Policy Quote ($50,000 Sum Insured)</span>
                <span className="text-2xl font-black text-purple-900">{formatCurrency(calculatedQuote)}</span>
                <span className="text-xs text-slate-500 font-medium"> total premium for {durationDays} Days</span>
              </div>

              <Link href="/booking/checkout">
                <Button variant="primary" size="md" className="font-bold px-6 py-2.5 text-xs">
                  BUY POLICY INSTANTLY →
                </Button>
              </Link>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
}
