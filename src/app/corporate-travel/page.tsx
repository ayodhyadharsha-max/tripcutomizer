'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Building2, ShieldCheck, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function CorporateTravelPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-brand-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-accent-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-accent-400" />
            <span>Enterprise B2B Travel Management</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Corporate Travel Solutions</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Streamlined business flights, corporate hotels, executive forex, corporate visas, ground transport & automated GST invoice reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4 text-xs">
            <h2 className="text-xl font-bold text-slate-900">Why Corporates Partner With Us</h2>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">Special Corporate Tariffs</h3>
                <p className="text-slate-500">Negotiated airline rates, corporate hotel room blocks & zero cancellation fees options.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">Dedicated Relationship Manager</h3>
                <p className="text-slate-500">Single point contact 24/7 desk for instant flight changes and VIP ground transport.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">Automated Expense Reporting</h3>
                <p className="text-slate-500">Consolidated monthly billing, GST compliant tax invoices & travel policy enforcement.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card className="p-6 bg-white rounded-3xl shadow-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100">
                Register Your Company For Corporate Account
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 text-xs">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900">Corporate Account Inquiry Received!</h4>
                  <p className="text-slate-600">Our B2B Corporate Desk lead will reach out to schedule an account setup demo.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Company Name *</label>
                    <input required type="text" placeholder="Acme Technologies Pvt Ltd" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Contact Person</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Work Email</label>
                      <input required type="email" placeholder="john@acme.com" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Work Phone</label>
                      <input required type="tel" placeholder="+91 9876543210" className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Employee Strength</label>
                      <select className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold">
                        <option>10 - 50 Employees</option>
                        <option>50 - 200 Employees</option>
                        <option>500+ Employees</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 mt-2">
                    SUBMIT CORPORATE INQUIRY →
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
