'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, RefreshCw, Clock, Mail, Phone, ArrowLeft } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-12 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:underline mb-4 font-bold">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider block w-fit">
              Razorpay Merchant Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Refund Policy
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-2 leading-relaxed font-normal">
              Official Refund Processing Terms & Guidelines for Trip Customizer (www.tripcustomizer.com).
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-8 text-xs md:text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-brand-600" />
              <span>1. Overview & General Terms</span>
            </h2>
            <p>
              At <strong>Trip Customizer</strong>, customer satisfaction is our top priority. We strive to provide transparent and hassle-free refund processing for all booked holiday packages, flights, hotels, and tour services.
            </p>
            <p>
              All refunds are governed by the terms of our supplier partners (airlines, hotels, local transport providers) and processed strictly through the original payment method used during checkout (Razorpay Payment Gateway).
            </p>
          </section>

          {/* Section 2: Refund Timeline & Processing Mode */}
          <section className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>2. Refund Processing Timeframe</span>
            </h2>
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <p className="font-bold text-amber-900">⚡ Standard Refund Processing Window:</p>
              <ul className="list-disc pl-5 space-y-1 font-medium">
                <li>Approved refunds are initiated within <strong>24 to 48 working hours</strong> of cancellation request receipt.</li>
                <li>Refund amount will be credited back to your original source account (UPI, Credit/Debit Card, NetBanking, or Wallet) within <strong>5 to 7 business days</strong> depending on your bank's clearance policy.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Eligibility & Deductions */}
          <section className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>3. Eligibility Criteria for Refund</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse mt-2">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3">Cancellation Timing</th>
                    <th className="p-3">Eligible Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="p-3">30 days or more before departure</td>
                    <td className="p-3 text-emerald-600 font-bold">90% Refund (10% Service Fee Retained)</td>
                  </tr>
                  <tr>
                    <td className="p-3">15 to 29 days before departure</td>
                    <td className="p-3 text-emerald-700 font-bold">70% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3">7 to 14 days before departure</td>
                    <td className="p-3 text-amber-600 font-bold">50% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3">Less than 7 days / No-Show</td>
                    <td className="p-3 text-rose-600 font-bold">Non-refundable (0% Refund)</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-bold text-emerald-950">
                    <td className="p-3">Trip Cancelled by Trip Customizer</td>
                    <td className="p-3 text-emerald-700">100% Full Refund or Free Reschedule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Non-Refundable Components */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">4. Non-Refundable Charges</h2>
            <p>The following charges are strictly non-refundable once issued/processed:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li>Govt. Visa Application & Processing Fees.</li>
              <li>Non-refundable / Special Instant Flight Tickets.</li>
              <li>Peak Season / Festival Surcharges (Diwali, New Year, Char Dham Peak Dates).</li>
              <li>Travel Insurance Premiums.</li>
            </ul>
          </section>

          {/* Section 5: How to Claim a Refund */}
          <section className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">5. How to Request a Refund</h2>
            <p>
              To request a cancellation and refund, please contact our 24x7 Travel Desk with your Booking Reference Number:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-3">
                <Mail className="w-6 h-6 text-brand-600" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Support</span>
                  <a href="mailto:tripcustomizer@gmail.com" className="font-bold text-slate-900 hover:text-brand-600">
                    tripcustomizer@gmail.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-3">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Phone / WhatsApp</span>
                  <a href="tel:+917408763401" className="font-bold text-slate-900 hover:text-emerald-600">
                    +91 7408763401 / +91 9235222399
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
