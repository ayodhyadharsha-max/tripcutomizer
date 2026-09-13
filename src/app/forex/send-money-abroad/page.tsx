'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Send, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export default function SendMoneyAbroadPage() {
  const [purpose, setPurpose] = useState('Family Maintenance');
  const [country, setCountry] = useState('United States');
  const [amount, setAmount] = useState(2500);
  const [submitted, setSubmitted] = useState(false);

  const rate = 84.45;
  const inrAmount = amount * rate;
  const remittedRef = 'REM-984102';

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Send Money Abroad (RBI LRS Remittance)</h1>
          <p className="text-xs text-slate-500 mt-1">Direct wire transfer to foreign bank accounts under Liberated Remittance Scheme</p>
        </div>

        {submitted ? (
          <Card className="p-8 bg-white text-center rounded-3xl space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Remittance Request Created!</h2>
            <p className="text-xs text-slate-600">Reference #{remittedRef}. Bank wire transfer of ${amount} to beneficiary in {country} is being processed.</p>
            <Link href="/account" className="inline-block font-bold text-xs text-brand-600 hover:underline pt-2">View Remittance Status</Link>
          </Card>
        ) : (
          <Card className="p-6 bg-white rounded-3xl shadow-xl space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Purpose of Remittance</label>
              <select value={purpose} onChange={(e) => setPurpose(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold">
                <option value="Family Maintenance">Maintenance of Close Relatives Abroad</option>
                <option value="Medical Expenses">Medical Treatment Expenses Abroad</option>
                <option value="Emigration">Emigration Expenses</option>
                <option value="Gift Remittance">Gift Remittance</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Recipient Country</label>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Foreign Amount ($)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl flex justify-between items-center text-slate-900 font-bold">
              <span>Total Payable INR:</span>
              <span className="text-lg text-emerald-700">{formatCurrency(inrAmount + 500)}</span>
            </div>

            <Button onClick={() => setSubmitted(true)} variant="accent" size="lg" className="w-full font-black py-3 text-slate-950">
              INITIATE BANK REMITTANCE →
            </Button>
          </Card>
        )}
      </Container>
    </div>
  );
}
