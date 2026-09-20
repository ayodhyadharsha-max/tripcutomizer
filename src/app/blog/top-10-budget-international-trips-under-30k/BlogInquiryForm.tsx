'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { Send, CheckCircle2, Sparkles, Phone, Mail, User, MapPin } from 'lucide-react';

export const BlogInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Thailand (Phuket & Bangkok)',
    budget: 'Under ₹30,000',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendWeb3FormLead({
        subject: `[Trip Customizer VIRAL LEAD] Budget Trip Inquiry: ${formData.destination} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: formData.destination,
        budget: formData.budget,
        notes: `Lead from Viral Blog: Top 10 Budget International Trips Under 30k`,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-amber-400 relative overflow-hidden">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full blur-xl pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
          <h3 className="text-2xl font-black text-slate-900">Inquiry Received Successfully! 🎉</h3>
          <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
            Thank you <strong className="text-slate-950">{formData.name || 'Traveler'}</strong>! Our senior travel architect will send custom pricing & day-by-day itinerary to <strong>{formData.phone}</strong> within 10 minutes.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-bold text-brand-600 hover:underline pt-2"
          >
            ← Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block">INSTANT 10-MIN CALLBACK DESK</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">Get Customized Package Quote & Itinerary</h3>
            </div>
            <div className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Instant Quote</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Mobile / WhatsApp No. *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="10-Digit Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Email Address (Optional)</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Preferred Destination</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-brand-500"
                >
                  <option value="Thailand (Phuket & Bangkok)">Thailand (Phuket & Bangkok) — From ₹18,999</option>
                  <option value="Bali, Indonesia">Bali, Indonesia — From ₹24,999</option>
                  <option value="Vietnam (Da Nang & Hanoi)">Vietnam (Da Nang & Hanoi) — From ₹22,500</option>
                  <option value="Malaysia (KL & Genting)">Malaysia (KL & Genting) — From ₹19,500</option>
                  <option value="Baku, Azerbaijan">Baku, Azerbaijan — From ₹28,999</option>
                  <option value="Dubai, UAE">Dubai, UAE — From ₹27,500</option>
                  <option value="Sri Lanka (Colombo & Kandy)">Sri Lanka — From ₹21,000</option>
                  <option value="Bhutan (Paro & Thimphu)">Bhutan — From ₹26,000</option>
                  <option value="Nepal (Kathmandu & Pokhara)">Nepal — From ₹16,500</option>
                  <option value="Kazakhstan (Almaty)">Kazakhstan — From ₹29,999</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-98 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Sending Request...' : 'GET FREE ITINERARY & CUSTOMIZED PRICING NOW →'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
