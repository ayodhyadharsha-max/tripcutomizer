'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Users, ShieldCheck, Globe, Star, Compass, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-slate-900 text-white py-16 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              About tripcustomizer
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              India&apos;s Most Trusted Customized Holiday Platform
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed font-normal">
              For over a decade, tripcustomizer has empowered travelers to craft personalized, stress-free vacation itineraries across 50+ domestic and international destinations.
            </p>
          </div>
        </Container>
      </div>

      {/* Metrics Banner */}
      <Container className="-mt-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black text-brand-600">120,000+</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Happy Travelers</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-amber-500">4.9 ★</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Customer Rating</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-emerald-600">50+</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Destinations Covered</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-purple-600">24/7</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">On-Trip Concierge</p>
          </div>
        </div>
      </Container>

      {/* Main Content */}
      <Container className="mt-12 space-y-12">
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Tailor-Made Itineraries</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              We believe no two travelers are alike. Every package is fully customizable to suit your pace, budget, hotel tier, and sightseeing preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">100% Guaranteed Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Complete transparency with no hidden charges. All bookings come with confirmed hotel vouchers, verified private transfers, and GST invoices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Dedicated Travel Concierge</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              From the moment you touch down until your departure flight, your personal trip manager is available 24x7 via phone & WhatsApp.
            </p>
          </div>
        </div>

        {/* Story & Mission Section */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase text-brand-600 tracking-wider">Our Vision</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Making World-Class Travel Accessible & Seamless
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              Founded with a passion for wanderlust, tripcustomizer connects travelers directly with local destination experts, premium hotel chains, and trusted transport partners. Whether it&apos;s a spiritual Char Dham yatra, a romantic Bali honeymoon, or a European family vacation, we handle every detail with extreme precision.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-800">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified 3-Star, 4-Star & 5-Star Hotel Partners</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Private Chauffeur-Driven Vehicles for all Sightseeing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant E-Voucher Generation & Tax Invoice Receipts</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand-900 to-slate-900 rounded-2xl p-8 text-white space-y-6">
            <h3 className="text-xl font-black text-amber-400">Why Plan With Us?</h3>
            <div className="space-y-4 text-xs text-slate-200">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Global Network</h4>
                  <p className="text-slate-300 mt-0.5">Local DMC offices in Dubai, Bali, Thailand, Kashmir & Ayodhya.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Award-Winning Service</h4>
                  <p className="text-slate-300 mt-0.5">Voted Best Customized Tour Operator 2024.</p>
                </div>
              </div>
            </div>
            <Link
              href="/holidays"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Explore All Holiday Packages →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
