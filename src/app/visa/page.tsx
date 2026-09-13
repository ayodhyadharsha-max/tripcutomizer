import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { FileCheck, ShieldCheck, Clock, CheckCircle2, ChevronRight, Search } from 'lucide-react';

export default function VisaHubPage() {
  const visaCountries = [
    { country: 'Dubai (UAE)', flag: '🇦🇪', type: 'E-Visa (30 Days Tourist)', processing: '24-48 Hours', price: 6500, slug: 'dubai' },
    { country: 'Singapore', flag: '🇸🇬', type: 'E-Visa (30 Days Multi Entry)', processing: '3-4 Working Days', price: 3800, slug: 'singapore' },
    { country: 'Thailand', flag: '🇹🇭', type: 'E-Visa / Visa on Arrival', processing: '24 Hours', price: 2500, slug: 'thailand' },
    { country: 'Schengen (Europe)', flag: '🇪🇺', type: 'Short Stay Tourist C', processing: '10-15 Days', price: 9200, slug: 'schengen' },
    { country: 'United Kingdom', flag: '🇬🇧', type: 'Standard Visitor Visa', processing: '15-20 Days', price: 13500, slug: 'uk' },
    { country: 'United States', flag: '🇺🇸', type: 'B1/B2 Tourist Visa', processing: 'Appointment Based', price: 16500, slug: 'usa' },
    { country: 'Vietnam', flag: '🇻🇳', type: 'E-Visa (30 Days Single)', processing: '3 Days', price: 2800, slug: 'vietnam' },
    { country: 'Japan', flag: '🇯🇵', type: 'E-Visa / Tourist Visa', processing: '5 Working Days', price: 1800, slug: 'japan' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Visa Services Desk</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-accent-400 font-bold text-xs uppercase tracking-wider mb-2">
            <FileCheck className="w-4 h-4 text-accent-400" />
            <span>99.4% Visa Success Rate</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Global Visa Assistance Desk</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Apply online for Dubai E-Visas, Schengen Visas, Singapore, UK, USA & Thailand Visas. Expert document verification & doorstep pickup.
          </p>
        </div>

        {/* Visa Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaCountries.map((v) => (
            <Card key={v.slug} hoverable className="p-6 bg-white border-slate-200 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{v.flag}</span>
                  <span className="text-[10px] bg-brand-50 text-brand-700 font-bold px-2.5 py-0.5 rounded-full">
                    {v.processing}
                  </span>
                </div>

                <h2 className="text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors">
                  {v.country} Visa
                </h2>
                <p className="text-xs text-slate-500 font-semibold">{v.type}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Fee per Applicant</span>
                  <span className="text-base font-black text-brand-700">₹{v.price}</span>
                </div>

                <Link
                  href={`/visa/${v.slug}`}
                  className="bg-brand-50 hover:bg-brand-500 hover:text-white text-brand-600 font-bold text-xs px-3.5 py-2 rounded-xl transition-all"
                >
                  Apply Visa →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
