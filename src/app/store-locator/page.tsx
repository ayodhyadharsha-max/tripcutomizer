'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Globe, ArrowRight, CheckCircle2, Headphones, Phone, MessageCircle } from 'lucide-react';

export default function StoreLocatorPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <Container className="max-w-4xl">
        <div className="text-center space-y-3 mb-10">
          <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            100% Digital Online Travel Platform
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            No Physical Store Visit Required 🏖️
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            tripcustomizer is a fully digital online travel platform. Book holiday packages, generate instant GST tax invoices, download e-vouchers, and receive 24/7 live assistance directly online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl w-max">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Instant Online Booking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Explore 500+ holiday destinations, customize itineraries, and pay securely via UPI, NetBanking, or Cards.
            </p>
            <Link href="/holidays" className="inline-flex items-center gap-1 text-xs font-black text-brand-600 hover:underline pt-2">
              Browse Holidays <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          <Card className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-max">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Self-Service Desk</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Retrieve your booking status, view confirmed passenger manifest, and print e-vouchers 24/7.
            </p>
            <Link href="/manage-booking" className="inline-flex items-center gap-1 text-xs font-black text-emerald-600 hover:underline pt-2">
              Track My Booking <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Card>

          <Card className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-max">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">24/7 Dedicated Support</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Speak directly with our travel experts via toll-free helpline or instant WhatsApp assistance.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-black text-amber-600 hover:underline pt-2">
              Contact Care <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Card>
        </div>

        {/* Contact Banner */}
        <Card className="p-8 bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-white">Need Personalized Assistance?</h3>
            <p className="text-xs text-slate-300">Call Toll-Free: 1800-2099-100 (9 AM - 9 PM) or chat on WhatsApp</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:18002099100"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-3 rounded-2xl shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> Call 1800-2099-100
            </a>
            <a
              href="https://wa.me/918291901377"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </Card>
      </Container>
    </div>
  );
}
