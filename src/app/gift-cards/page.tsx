'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Gift, CheckCircle2, Copy } from 'lucide-react';

export default function GiftCardsPage() {
  const [amount, setAmount] = useState(5000);
  const [recipientName, setRecipientName] = useState('Ananya Jaiswal');
  const [recipientEmail, setRecipientEmail] = useState('ananya@example.com');
  const [personalMessage, setPersonalMessage] = useState('Happy Birthday! Enjoy your next holiday escape!');
  const [issuedVoucher, setIssuedVoucher] = useState<string | null>(null);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `GIFT-TB-${Math.floor(100000 + Math.random() * 900000)}`;
    setIssuedVoucher(code);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">tripcustomizer Digital Gift Cards</h1>
          <p className="text-xs text-slate-500 mt-1">Gift unforgettable holiday memories, flights, hotels & forex cards to your loved ones</p>
        </div>

        {issuedVoucher ? (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl text-center space-y-4 animate-in zoom-in-95">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Gift Card Issued Successfully!</h2>
            <p className="text-xs text-slate-600">E-Gift Voucher of {formatCurrency(amount)} sent to {recipientEmail}.</p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl max-w-sm mx-auto space-y-1">
              <span className="text-[10px] text-amber-700 font-bold uppercase block">Gift Voucher Promo Code</span>
              <span className="text-lg font-black text-slate-900 tracking-wider">{issuedVoucher}</span>
            </div>

            <Button onClick={() => setIssuedVoucher(null)} variant="outline" size="sm" className="text-xs">
              Purchase Another Gift Card
            </Button>
          </Card>
        ) : (
          <Card className="p-8 bg-white rounded-3xl shadow-xl space-y-6">
            <form onSubmit={handlePurchase} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-2">Select Gift Card Value</label>
                <div className="grid grid-cols-4 gap-2 text-center font-bold">
                  {[2500, 5000, 10000, 25000].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`p-3 rounded-xl border transition-colors cursor-pointer ${amount === val ? 'bg-brand-500 text-white border-brand-500' : 'bg-slate-50 text-slate-800'}`}
                    >
                      {formatCurrency(val)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Recipient Name *</label>
                  <input type="text" required value={recipientName} onChange={(e) => setRecipientName(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Recipient Email *</label>
                  <input type="email" required value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Personal Greeting Message</label>
                <textarea rows={3} value={personalMessage} onChange={(e) => setPersonalMessage(e.target.value)} className="w-full bg-slate-50 border rounded-xl p-3 font-medium" />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                PURCHASE GIFT CARD ({formatCurrency(amount)}) →
              </Button>
            </form>
          </Card>
        )}
      </Container>
    </div>
  );
}
