'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { DollarSign, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function SellForexPage() {
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(500);
  const [submitted, setSubmitted] = useState(false);

  const rate = 83.75;
  const payoutInr = amount * rate;

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Sell Unused Foreign Currency</h1>
          <p className="text-xs text-slate-500 mt-1">Convert leftover cash or card balance back into your Indian bank account</p>
        </div>

        {submitted ? (
          <Card className="p-8 bg-white text-center rounded-3xl space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Encashment Request Created!</h2>
            <p className="text-xs text-slate-600">Our representative will pick up your currency cash notes or process card payout of {formatCurrency(payoutInr)} within 24 hours.</p>
            <Link href="/forex" className="inline-block font-bold text-xs text-brand-600 hover:underline pt-2">Back to Forex Desk</Link>
          </Card>
        ) : (
          <Card className="p-6 bg-white rounded-3xl shadow-xl space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Currency to Sell</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold">
                <option value="USD">USD — US Dollar (Buyback Rate: ₹83.75)</option>
                <option value="EUR">EUR — Euro (Buyback Rate: ₹91.20)</option>
                <option value="GBP">GBP — British Pound (Buyback Rate: ₹108.50)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Foreign Amount</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl flex justify-between items-center text-slate-900 font-bold">
              <span>Estimated Bank Payout:</span>
              <span className="text-lg text-emerald-700">{formatCurrency(payoutInr)}</span>
            </div>

            <Button onClick={() => setSubmitted(true)} variant="accent" size="lg" className="w-full font-black py-3 text-slate-950">
              SUBMIT ENCASHMENT REQUEST →
            </Button>
          </Card>
        )}
      </Container>
    </div>
  );
}
