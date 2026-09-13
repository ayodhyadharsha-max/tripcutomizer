import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CreditCard, CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function ForexCardsPage() {
  const cards = [
    {
      name: 'Borderless Multi-Currency Forex Card',
      currencies: '16 Currencies (USD, EUR, GBP, AUD, SGD, AED, CAD, THB, etc.)',
      issuanceFee: '₹0 (Free on $1,000 load)',
      atmMarkup: 'Zero ATM cross-currency fee',
      benefits: ['Lock exchange rates in advance', 'Free emergency cash displacement', 'Trip insurance cover up to $10,000 USD'],
      badge: 'Most Popular',
    },
    {
      name: 'Student Preferred Forex Card',
      currencies: 'USD, EUR, GBP, CAD, AUD',
      issuanceFee: '₹0 (Student Special)',
      atmMarkup: 'Zero ATM withdrawal fee at partner global ATMs',
      benefits: ['Free ISIC International Student ID Card', 'GIC & tuition fee transfer discount', 'Complimentary luggage tag'],
      badge: 'Student Special',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-gradient-to-r from-emerald-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl sm:text-5xl font-black">Multi-Currency Forex Cards</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Swipe like a local anywhere in the world. Zero foreign transaction markup, pin protection & 24/7 instant online reload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((c, i) => (
            <Card key={i} hoverable className="p-8 bg-white border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full">
                    {c.badge}
                  </span>
                  <CreditCard className="w-8 h-8 text-emerald-600" />
                </div>

                <h2 className="text-xl font-black text-slate-900">{c.name}</h2>
                <p className="text-xs text-slate-500 font-semibold">Supported Currencies: {c.currencies}</p>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                  <p className="font-bold text-slate-900">Issuance Fee: {c.issuanceFee}</p>
                  <p className="text-emerald-700 font-semibold">{c.atmMarkup}</p>
                </div>

                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  {c.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link href="/forex/buy" className="block">
                  <Button variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-xs">
                    APPLY FOR FOREX CARD →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
