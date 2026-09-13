'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DollarSign, Send, CreditCard, GraduationCap, RefreshCw, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { forexRateService, ExchangeRate, ForexQuoteResult } from '@/services/forexAdapter';
import { formatCurrency } from '@/lib/utils';

export const ForexMiniWidget: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [action, setAction] = useState<'BUY' | 'SELL' | 'RELOAD'>('BUY');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [amount, setAmount] = useState<number>(1000);
  const [quote, setQuote] = useState<ForexQuoteResult | null>(null);

  useEffect(() => {
    forexRateService.getLiveRates().then(setRates);
  }, []);

  useEffect(() => {
    if (selectedCurrency && amount > 0) {
      forexRateService.calculateQuote(selectedCurrency, amount, action).then(setQuote);
    }
  }, [selectedCurrency, amount, action]);

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Forex Info & Offerings */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5" />
              <span>RBI Authorized Foreign Exchange</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Instant Forex Cash & Multi-Currency Cards
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Lock in guaranteed zero-margin exchange rates. Get forex delivered to your doorstep in 48 hours or pick up at 100+ stores nationwide.
            </p>

            {/* Forex Feature Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/forex/buy" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Buy Forex</p>
                  <p className="text-[10px] text-slate-400">Cash & Cards</p>
                </div>
              </Link>

              <Link href="/forex/send-money-abroad" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center space-x-3">
                <div className="p-2 bg-accent-500/20 text-accent-400 rounded-lg">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Send Money Abroad</p>
                  <p className="text-[10px] text-slate-400">LRS Remittance</p>
                </div>
              </Link>

              <Link href="/forex/reload" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center space-x-3">
                <div className="p-2 bg-brand-500/20 text-brand-400 rounded-lg">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Reload Card</p>
                  <p className="text-[10px] text-slate-400">Instant 24/7 Top-up</p>
                </div>
              </Link>

              <Link href="/forex/university-fee" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">University Fees</p>
                  <p className="text-[10px] text-slate-400">Study Abroad</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Forex Mini Calculator Widget */}
          <div className="lg:col-span-6">
            <Card className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin-slow" />
                  <span>Live Forex Calculator</span>
                </h3>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                  Zero Margin
                </span>
              </div>

              {/* Action Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-4 text-xs font-bold text-center">
                <button
                  onClick={() => setAction('BUY')}
                  className={`py-2 rounded-lg transition-colors cursor-pointer ${action === 'BUY' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Buy Forex
                </button>
                <button
                  onClick={() => setAction('SELL')}
                  className={`py-2 rounded-lg transition-colors cursor-pointer ${action === 'SELL' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Sell Forex
                </button>
                <button
                  onClick={() => setAction('RELOAD')}
                  className={`py-2 rounded-lg transition-colors cursor-pointer ${action === 'RELOAD' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Reload Card
                </button>
              </div>

              {/* Form Controls */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">Select Currency</label>
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {rates.map((r) => (
                        <option key={r.currencyCode} value={r.currencyCode}>
                          {r.flag} {r.currencyCode} — {r.currencyName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-500 block mb-1">Foreign Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Calculation Summary Box */}
                {quote && (
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Live Exchange Rate:</span>
                      <span className="font-bold text-slate-900">1 {quote.currencyCode} = ₹{quote.exchangeRate}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Conversion Total:</span>
                      <span className="font-semibold text-slate-800">{formatCurrency(quote.estimatedInrAmount)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Service Fee + GST:</span>
                      <span className="font-semibold text-slate-800">{formatCurrency(quote.serviceFee + quote.gstAmount)}</span>
                    </div>
                    <div className="pt-2 border-t border-emerald-200 flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">Total Estimated INR:</span>
                      <span className="text-lg font-black text-emerald-700">{formatCurrency(quote.totalPayableInr)}</span>
                    </div>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-400">
                  <Info className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span>Rates shown are indicative until confirmed at order execution. Service adapter integrated.</span>
                </div>

                {/* Order CTA */}
                <Link href={`/forex/buy?currency=${selectedCurrency}&amount=${amount}`}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg mt-2">
                    PROCEED TO ORDER FOREX →
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
