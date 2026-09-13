'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Percent, Copy, Check, Clock, Tag, ChevronRight } from 'lucide-react';

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'holidays' | 'forex' | 'flights' | 'bank'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const offersList = [
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
      id: 'off-2',
      category: 'forex',
      title: 'Zero Forex Card Issuance Fee + ₹500 Cashback',
      code: 'FREECARD',
      validity: 'Valid till 15 Nov 2026',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
      product: 'Forex Card',
      terms: 'Applicable on loading minimum 1,000 USD equivalent.',
    },
    {
      id: 'off-3',
      category: 'bank',
      title: '10% Instant Discount with HDFC Bank Credit Cards',
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

  const filtered = activeTab === 'all' ? offersList : offersList.filter((o) => o.category === activeTab);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Offers & Promo Codes</span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-accent-600 via-brand-800 to-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-accent-300 font-bold text-xs uppercase tracking-wider mb-2">
            <Percent className="w-4 h-4" />
            <span>Verified Cashbacks & Discounts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Travel Deals & Bank Promo Codes</h1>
          <p className="text-slate-200 text-sm mt-2 max-w-2xl">
            Save on international holidays, forex card loads, flights & partner credit card cashbacks.
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl cursor-pointer ${activeTab === 'all' ? 'bg-brand-900 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            All Deals
          </button>
          <button
            onClick={() => setActiveTab('holidays')}
            className={`px-4 py-2 rounded-xl cursor-pointer ${activeTab === 'holidays' ? 'bg-brand-900 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Holiday Offers
          </button>
          <button
            onClick={() => setActiveTab('forex')}
            className={`px-4 py-2 rounded-xl cursor-pointer ${activeTab === 'forex' ? 'bg-emerald-700 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Forex Deals
          </button>
          <button
            onClick={() => setActiveTab('flights')}
            className={`px-4 py-2 rounded-xl cursor-pointer ${activeTab === 'flights' ? 'bg-brand-900 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Flight Cashbacks
          </button>
          <button
            onClick={() => setActiveTab('bank')}
            className={`px-4 py-2 rounded-xl cursor-pointer ${activeTab === 'bank' ? 'bg-accent-500 text-slate-950 shadow font-bold' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
          >
            Bank Card Offers
          </button>
        </div>

        {/* Offers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <Card key={item.id} hoverable className="border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.product}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{item.terms}</p>

                  <div className="p-2 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs font-black text-brand-700 tracking-wider">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{item.code}</span>
                    </div>

                    <button
                      onClick={() => handleCopy(item.code)}
                      className="text-[11px] font-bold text-slate-600 hover:text-brand-500 flex items-center space-x-1 bg-white px-2 py-1 rounded shadow-xs cursor-pointer"
                    >
                      {copiedCode === item.code ? (
                        <span className="text-emerald-600">Copied!</span>
                      ) : (
                        <span>Copy Code</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{item.validity}</span>
                </span>
                <Link href="/holidays" className="font-bold text-brand-500 hover:underline">
                  Use Code →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
