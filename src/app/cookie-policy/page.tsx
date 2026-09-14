'use client';

import React from 'react';
import { Cookie, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Privacy & Cookies
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Cookie Policy
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Information on how tripcustomizer uses essential session cookies to store booking preferences and login sessions securely.
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Cookie className="w-5 h-5 text-amber-600" />
              <span>1. What Are Cookies?</span>
            </h2>
            <p>
              Cookies are small text files saved locally on your browser when visiting websites. We use essential session storage cookies to maintain your login status, saved co-traveler lists, active booking checkout state, and applied coupon discounts.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>2. Managing Cookies</span>
            </h2>
            <p>
              You can clear your browser storage cookies at any time via your browser preferences. Please note that disabling essential cookies may require logging in again to access e-vouchers and tax invoices.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
