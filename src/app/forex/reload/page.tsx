'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export default function ReloadForexPage() {
  const [cardNumber, setCardNumber] = useState('4123-8900-1234-9842');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(500);
  const [submitted, setSubmitted] = useState(false);

  const rate = 84.45;
  const totalInr = amount * rate + 250;

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Reload Forex Card</h1>
          <p className="text-xs text-slate-500 mt-1">Instant 24/7 online card balance top-up worldwide</p>
        </div>

        {submitted ? (
          <Card className="p-8 bg-white text-center rounded-3xl space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Card Reloaded Successfully!</h2>
            <p className="text-xs text-slate-600">Updated balance of {amount} {currency} has been loaded onto your card {cardNumber}.</p>
            <Link href="/account" className="inline-block font-bold text-xs text-brand-600 hover:underline pt-2">View Card Balance in Account</Link>
          </Card>
        ) : (
          <Card className="p-6 bg-white rounded-3xl shadow-xl space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Forex Card Number (16 Digits)</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Currency</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold">
                  <option value="USD">USD — US Dollar</option>
                  <option value="EUR">EUR — Euro</option>
                  <option value="GBP">GBP — British Pound</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Reload Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl flex justify-between items-center text-slate-900 font-bold">
              <span>Total Amount to Pay:</span>
              <span className="text-lg text-emerald-700">{formatCurrency(totalInr)}</span>
            </div>

            <Button onClick={() => setSubmitted(true)} variant="accent" size="lg" className="w-full font-black py-3 text-slate-950">
              RELOAD CARD NOW →
            </Button>
          </Card>
        )}
      </Container>
    </div>
  );
}
