'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, CheckCircle2, Award } from 'lucide-react';

export default function MicePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-4xl">
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-accent-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Users className="w-4 h-4 text-accent-400" />
            <span>Meetings, Incentives, Conferences & Exhibitions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">MICE & Corporate Events Desk</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            End-to-end event management for corporate offsites, reward trips, global conferences, gala dinners & team bonding retreats in 40+ countries.
          </p>
        </div>

        <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200">
          <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100 mb-4">
            Request MICE Event Quote & Proposal
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 text-xs">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-slate-900">MICE Proposal Request Received!</h3>
              <p className="text-slate-600">Our MICE Event Director will contact you to discuss venue selection & custom gala arrangements.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Event Category</label>
                  <select className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold">
                    <option>Corporate Incentive Trip</option>
                    <option>Annual Dealers Conference</option>
                    <option>Leadership Executive Retreat</option>
                    <option>Exhibition & Trade Fair</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Preferred Destination</label>
                  <input required type="text" placeholder="e.g. Dubai / Bali / Goa" className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-semibold" />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Group Size (Pax)</label>
                  <input required type="number" placeholder="50" className="w-full bg-slate-50 border rounded-xl px-3 py-2.5 font-bold" />
                </div>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                REQUEST MICE PROPOSAL →
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </div>
  );
}
