'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Percent, Copy, Check, Clock, Tag } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export const OffersSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'holidays' | 'flights' | 'bank'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const offers = [
    {
      id: 'off-1',
      category: 'holidays',
      title: 'Flat ₹15,000 Off on Europe Group Escorted Tours',
      code: 'EUROPE15K',
      validity: 'Valid till 31 Oct 2026',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop',
      product: 'International Holidays',
      terms: 'Minimum booking value ₹1,50,000. Applicable on select departures.',
    },
    {
      id: 'off-3',
      category: 'bank',
      title: '10% Instant Discount with HDFC Credit Cards',
      code: 'HDFCHOLIDAY',
      validity: 'Valid till 30 Nov 2026',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
      product: 'All Holiday Packages',
      terms: 'Maximum discount ₹7,500 per transaction.',
    },
    {
      id: 'off-4',
      category: 'flights',
      title: 'Flat 12% Off International Flight Bookings',
      code: 'FLYGLOBAL',
      validity: 'Valid till 31 Dec 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop',
      product: 'International Flights',
      terms: 'Valid on return flight bookings originating from India.',
    },
  ];

  const filteredOffers = activeCategory === 'all' ? offers : offers.filter((o) => o.category === activeCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1 text-brand-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Percent className="w-4 h-4 text-accent-500" />
              <span>Offers For You</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Handcrafted Offers & Bank Cashbacks
            </h2>
          </div>

          <Link href="/offers" className="text-xs font-bold text-brand-500 hover:underline mt-2 sm:mt-0">
            View All Promo Offers →
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-4 text-xs font-bold">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${activeCategory === 'all' ? 'bg-brand-800 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            All Offers
          </button>
          <button
            onClick={() => setActiveCategory('holidays')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${activeCategory === 'holidays' ? 'bg-brand-800 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Holidays Offers
          </button>
          <button
            onClick={() => setActiveCategory('flights')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${activeCategory === 'flights' ? 'bg-brand-800 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Flight Deals
          </button>
          <button
            onClick={() => setActiveCategory('bank')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 ${activeCategory === 'bank' ? 'bg-brand-800 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Bank & Card Cashbacks
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} hoverable className="flex flex-col h-full bg-white border-slate-200">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={offer.image} alt={offer.title} fill unoptimized className="object-cover" />
                <div className="absolute top-3 left-3 bg-brand-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {offer.product}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">{offer.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {offer.validity}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-300 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Use Promo Code</span>
                    <span className="font-mono font-extrabold text-sm text-brand-600">{offer.code}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="flex items-center space-x-1 bg-white border border-slate-200 hover:border-brand-500 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
