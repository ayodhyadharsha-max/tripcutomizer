'use client';

import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Legal & Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              Terms of Use & Booking Policies
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed font-normal">
              Last updated: January 2026. Please read these terms carefully before booking your travel package with tripcustomizer.
            </p>
          </div>
        </Container>
      </div>

      {/* Terms Content Container */}
      <Container className="mt-10 max-w-4xl">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-12 shadow-xs space-y-8 text-xs md:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-brand-600" />
              <span>1. Booking Confirmation & Payment Terms</span>
            </h2>
            <p>
              A booking is considered confirmed only upon receipt of the initial booking deposit or full payment as specified in your package quotation.
              All prices quoted are in Indian Rupees (INR) and include applicable 5% Govt. Tour Service GST tax unless stated otherwise.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li>Token Deposit: Minimum 30% payment required at the time of booking.</li>
              <li>Final Balance: Remainder 70% must be cleared 15 days prior to departure date.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>2. Cancellation & Refund Policy</span>
            </h2>
            <p>
              In case of trip cancellation by the traveler, cancellation charges will apply as per the timeline below:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse mt-2">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3">Cancellation Notice Period</th>
                    <th className="p-3">Cancellation Fee / Deduction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="p-3">30 days or more before departure</td>
                    <td className="p-3 text-emerald-600 font-bold">10% of Total Package Fare</td>
                  </tr>
                  <tr>
                    <td className="p-3">15 to 29 days before departure</td>
                    <td className="p-3 text-amber-600 font-bold">30% of Total Package Fare</td>
                  </tr>
                  <tr>
                    <td className="p-3">7 to 14 days before departure</td>
                    <td className="p-3 text-rose-600 font-bold">50% of Total Package Fare</td>
                  </tr>
                  <tr>
                    <td className="p-3">Less than 7 days / No Show</td>
                    <td className="p-3 text-rose-700 font-black">100% Non-refundable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>3. Passports, Visas & Travel Documentation</span>
            </h2>
            <p>
              For international travel, passengers must hold a passport with at least 6 months validity from the date of return flight.
              Visa assistance provided by tripcustomizer is subjective to embassy approvals. The company is not liable for visa rejections or delays caused by diplomatic missions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black text-slate-900">4. Force Majeure & Unforeseen Events</h2>
            <p>
              tripcustomizer shall not be held liable for itinerary changes or flight delays resulting from natural disasters, severe weather conditions, strikes, road blockages in high-altitude regions (e.g. Ladakh, Kedarnath), or government restrictions.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
