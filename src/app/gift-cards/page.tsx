'use client';

import React, { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, Heart, CreditCard, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function GiftCardsPage() {
  const [amount, setAmount] = useState(5000);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-purple-950 via-brand-900 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              Gift the Joy of Wanderlust
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              tripcustomizer Travel Gift Cards
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              The perfect gift for weddings, anniversaries, birthdays & corporate rewards. Valid on all domestic & international holiday packages!
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-10 max-w-4xl">
        {purchased ? (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Gift Card Order Placed!</h2>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              A digital voucher of ₹{amount.toLocaleString()} has been generated and sent to {recipientEmail} for {recipientName}.
            </p>
            <button
              onClick={() => setPurchased(false)}
              className="bg-brand-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Buy Another Gift Card
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-900 to-slate-900 rounded-3xl p-8 text-white space-y-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full">
                    HOLIDAY GIFT CARD
                  </div>
                  <Gift className="w-6 h-6 text-amber-400" />
                </div>
                <h2 className="text-3xl font-black mt-8">₹ {amount.toLocaleString()}</h2>
                <p className="text-xs text-slate-300 mt-1">Valid for 1 Year across 50+ Destinations</p>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
                <span>tripcustomizer Card</span>
                <span>Instant E-Delivery</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xs">
              <form onSubmit={handlePurchase} className="space-y-4 text-xs font-semibold">
                <h3 className="font-black text-slate-900 text-base">Select Amount</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[2500, 5000, 10000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-2 rounded-xl border text-xs font-bold ${
                        amount === val ? 'bg-amber-400 text-slate-950 border-amber-400' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      ₹{val.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-slate-700 mb-1">Recipient Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1">Recipient Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ananya@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-black py-3 rounded-2xl text-xs transition-all shadow-sm"
                >
                  Buy E-Gift Card Now →
                </button>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
