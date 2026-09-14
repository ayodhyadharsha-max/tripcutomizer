'use client';

import React from 'react';
import { Lock, ShieldCheck, Eye, Database } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Data Privacy & Security
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Privacy Policy & Data Security
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed font-normal">
              At tripcustomizer, we are committed to safeguarding your personal and financial information.
            </p>
          </div>
        </Container>
      </div>

      {/* Privacy Policy Content */}
      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-8 text-xs md:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Database className="w-5 h-5 text-brand-600" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              When you book a holiday package, search flights, or request a custom quote, we collect personal information necessary to fulfill your travel itinerary:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li>Contact details: Name, Email Address, Phone Number.</li>
              <li>Traveler Information: Age, Gender, Passport details (for international trips).</li>
              <li>Payment details: Encrypted transaction tokens processed via PCI-DSS compliant payment gateways.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Eye className="w-5 h-5 text-amber-600" />
              <span>2. How We Use Your Data</span>
            </h2>
            <p>Your data is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li>Issue flight tickets, hotel vouchers, and transport bookings.</li>
              <li>Send SMS/WhatsApp notifications regarding trip updates and e-vouchers.</li>
              <li>Provide 24x7 emergency concierge assistance during your travel.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>3. Data Protection & SSL Security</span>
            </h2>
            <p>
              We implement 256-bit SSL encryption to protect data transmitted across our website. We do NOT sell, rent, or lease your personal information to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">4. Contact Privacy Officer</h2>
            <p>
              If you have any questions regarding your data or wish to request data deletion, email our Data Protection Officer at: <a href="mailto:privacy@tripcustomizer.com" className="text-brand-600 font-bold hover:underline">privacy@tripcustomizer.com</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
