'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, CalendarX, AlertTriangle, Mail, Phone, ArrowLeft } from 'lucide-react';

export default function CancellationPolicyPage() {
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
            <span className="bg-rose-500/20 text-rose-300 border border-rose-400/40 text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider block w-fit">
              Razorpay Merchant Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Cancellation & Rescheduling Policy
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-2 leading-relaxed font-normal">
              Official Package Cancellation, Date Change & Refund Terms for Trip Customizer (www.tripcustomizer.com).
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-8 text-xs md:text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <CalendarX className="w-5 h-5 text-rose-600" />
              <span>1. Traveler-Initiated Cancellation Slabs</span>
            </h2>
            <p>
              If you wish to cancel your tour package booking, written notification must be sent to our official email address at <strong>tripcustomizer@gmail.com</strong>.
              Cancellation charges are calculated based on the number of days prior to departure:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse mt-2">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3">Notice Period Before Departure</th>
                    <th className="p-3">Deduction Fee</th>
                    <th className="p-3">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="p-3">30 Days or More</td>
                    <td className="p-3 text-emerald-600 font-bold">10% of Package Cost</td>
                    <td className="p-3 text-emerald-700 font-bold">90% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3">15 to 29 Days</td>
                    <td className="p-3 text-amber-600 font-bold">30% of Package Cost</td>
                    <td className="p-3 text-emerald-700 font-bold">70% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3">7 to 14 Days</td>
                    <td className="p-3 text-rose-600 font-bold">50% of Package Cost</td>
                    <td className="p-3 text-amber-600 font-bold">50% Refund</td>
                  </tr>
                  <tr>
                    <td className="p-3">Less than 7 Days / No-Show</td>
                    <td className="p-3 text-rose-700 font-black">100% of Package Cost</td>
                    <td className="p-3 text-rose-600 font-bold">No Refund (0%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Date Change & Rescheduling */}
          <section className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>2. Free Rescheduling & Travel Credit</span>
            </h2>
            <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <p className="font-bold text-emerald-900">💡 Flexible Booking Policy:</p>
              <p>
                Travelers may request a <strong>free date change</strong> up to 15 days prior to departure (subject to hotel & flight fare difference if applicable).
                Instead of cancellation, you may also opt for <strong>100% Travel Credit Vouchers</strong> valid for 12 months across any domestic or international destination.
              </p>
            </div>
          </section>

          {/* Section 3: Flight & Hotel Specific Policies */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">3. Flight & Hotel Cancellation Specifics</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li><strong>Flight Tickets:</strong> Airline-specific cancellation & fare rules will apply over and above package service fees.</li>
              <li><strong>Hotels & Resorts:</strong> During Peak Season (New Year, Diwali, Char Dham peak Yatra dates), hotel bookings may be 100% non-refundable as per hotel contract rules.</li>
              <li><strong>Group Bookings:</strong> Special group booking terms apply for bookings with 10+ travelers.</li>
            </ul>
          </section>

          {/* Section 4: Unforeseen Weather & Natural Events */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>4. Weather, Landslides & Government Directives</span>
            </h2>
            <p>
              In case of trip disruption due to weather conditions, landslides (e.g. Kedarnath / Badrinath routes), flight cancellations, or political emergencies, Trip Customizer will assist in arranging alternate accommodation and transport. Additional costs incurred due to force majeure events shall be borne by the traveler.
            </p>
          </section>

          {/* Section 5: Support Contact */}
          <section className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">5. Need Help with Cancellation?</h2>
            <p>Contact our dedicated cancellation desk for instant assistance:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-3">
                <Mail className="w-6 h-6 text-brand-600" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Request</span>
                  <a href="mailto:tripcustomizer@gmail.com" className="font-bold text-slate-900 hover:text-brand-600">
                    tripcustomizer@gmail.com
                  </a>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-3">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Helpline</span>
                  <a href="tel:+917408763401" className="font-bold text-slate-900 hover:text-emerald-600">
                    +91 7408763401
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
