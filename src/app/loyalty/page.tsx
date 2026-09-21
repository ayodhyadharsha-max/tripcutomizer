'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { Award, Star, CheckCircle2, Gift, Sparkles } from 'lucide-react';

export default function LoyaltyPage() {
  const [points, setPoints] = useState(4500);

  const tiers = [
    { name: 'Silver Member', minPoints: '0 PTS', perk: '1.5x Reward Points on Forex' },
    { name: 'Gold Partner', minPoints: '2,500 PTS', perk: '2x Reward Points + Free Lounge Pass', active: true },
    { name: 'Platinum Elite', minPoints: '10,000 PTS', perk: '3x Points + Free Room Upgrade + Priority Support' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="bg-gradient-to-r from-amber-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-accent-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-accent-400" />
            <span>Trip Customizer Loyalty Club</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Earn Rewards On Every Journey</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Accumulate reward points on holidays, forex cards & flight bookings. Redeem points for instant discounts on future trips.
          </p>
        </div>

        {/* User Loyalty Balance Card */}
        <Card className="p-6 bg-white rounded-3xl shadow-xl border border-slate-200 mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-bold uppercase block">Your Available Reward Balance</span>
            <span className="text-3xl font-black text-slate-900">{points} PTS</span>
            <p className="text-xs text-emerald-600 font-bold mt-1">Equivalent to {formatCurrency(points)} discount voucher</p>
          </div>

          <Button onClick={() => alert('Points applied to your checkout cart!')} variant="accent" size="lg" className="font-black text-xs text-slate-950">
            REDEEM POINTS NOW →
          </Button>
        </Card>

        {/* Tiers Grid */}
        <h2 className="text-xl font-bold text-slate-900 mb-4">Membership Tiers & Perks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {tiers.map((t, i) => (
            <Card key={i} className={`p-6 rounded-2xl border ${t.active ? 'border-amber-400 bg-amber-50/50 shadow-md' : 'border-slate-200 bg-white'}`}>
              {t.active && <Badge variant="gold" className="mb-2">Your Current Tier</Badge>}
              <h3 className="font-black text-slate-900 text-base">{t.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{t.minPoints}</p>
              <p className="text-xs font-semibold text-slate-700">{t.perk}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
