'use client';

import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Legal Disclaimer
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Website & Services Disclaimer
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Legal information regarding package pricing, third-party service providers, and website content accuracy.
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>1. Accuracy of Information & Pricing</span>
            </h2>
            <p>
              All prices, package inclusions, flight schedules, and hotel tariffs listed on tripcustomizer are subject to availability and dynamic pricing adjustments by airline GDS systems and hotel chains. While we make every effort to display accurate rates, prices are confirmed only upon booking voucher generation.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-brand-600" />
              <span>2. Third-Party Vendors & DMCs</span>
            </h2>
            <p>
              tripcustomizer acts as an aggregator and travel facilitator connecting customers with verified airlines, hotel properties, bus operators, and Destination Management Companies (DMCs). The company is not directly liable for flight delays, luggage losses, or hotel service deficiencies caused by third-party vendor operations.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
