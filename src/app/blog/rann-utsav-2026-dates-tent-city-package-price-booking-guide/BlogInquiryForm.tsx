'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Tent, Zap } from 'lucide-react';

export const RannUtsavInquiryForm: React.FC<{ defaultTentCategory?: string }> = ({
  defaultTentCategory = 'Premium AC Tent (Dhordo Tent City) 3D/2N',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tentCategory: defaultTentCategory,
    dates: 'Full Moon Special (November / December 2026)',
    travelers: '2 Adults (Couple / Family)',
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
      // 1. Save Lead locally to CloudStore CRM
      cloudStore.saveLead({
        name: formData.name || 'Valued Traveler',
        phone: formData.phone,
        email: formData.email,
        destination: `Rann Utsav: ${formData.tentCategory} (${formData.dates})`,
        budget: 'Tent City Package',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Rann Utsav 2026 Booking Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer RANN UTSAV LEAD 🎪] Inquiry: ${formData.tentCategory} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Rann of Kutch - ${formData.tentCategory}`,
        budget: formData.dates,
        notes: `Rann Utsav 2026 Lead (${formData.travelers}, Dates: ${formData.dates}) from Viral Blog`,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission note:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-400 relative overflow-hidden my-8">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-2xl font-black text-white">Rann Utsav Booking Inquiry Received! 🎪🎉</h3>
          <p className="text-xs text-slate-300 font-medium max-w-md mx-auto">
            Thank you <strong className="text-amber-400">{formData.name || 'Traveler'}</strong>! Our official Kutch booking desk will WhatsApp / call you at <strong className="text-white">{formData.phone}</strong> within 10 minutes with confirmed Tent City availability, Full Moon rates & Bhuj pickup details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-bold text-amber-400 hover:underline pt-2 cursor-pointer"
          >
            ← Check Another Date / Category
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <Zap className="w-3 h-3 text-slate-950" /> 2026-2027 OFFICIAL FESTIVAL BOOKING DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">Get Confirmed Rann Utsav Tent City Quote & Permits</h3>
              <p className="text-xs text-slate-300 mt-1">AC Swiss Tents + All Meals + Cultural Shows + Bhuj Transfers + White Desert Permits Included.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Your Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Gaurav Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">WhatsApp / Phone Number *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Select Tent Accommodation Type</label>
              <div className="relative">
                <Tent className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <select
                  value={formData.tentCategory}
                  onChange={(e) => setFormData({ ...formData, tentCategory: e.target.value })}
                  className="w-full bg-slate-900 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-400"
                >
                  <option value="Premium AC Tent (Dhordo Tent City) 3D/2N">Premium AC Tent (Dhordo Tent City) 3D/2N - from ₹14,500/p</option>
                  <option value="Deluxe AC Swiss Cottage Tent 3D/2N">Deluxe AC Swiss Cottage Tent 3D/2N - from ₹12,000/p</option>
                  <option value="Rajwadi Luxury Suite Tent 3D/2N">Rajwadi Royal Luxury Suite Tent 3D/2N - from ₹22,000/p</option>
                  <option value="White Rann Resort (Dhordo) 2D/1N">White Rann Resort (Dhordo) 2D/1N - from ₹7,500/p</option>
                  <option value="Budget Bhuj Hotel + White Desert Day Tour">Budget Bhuj Hotel + White Desert Day Tour - from ₹5,500/p</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Preferred Travel Month / Dates</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <select
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full bg-slate-900 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-400"
                >
                  <option value="Full Moon Dates (November 2026)">November 2026 Full Moon Special</option>
                  <option value="Diwali Vacation (Late Oct / Early Nov 2026)">Diwali Holiday Week 2026</option>
                  <option value="Full Moon Dates (December 2026)">December 2026 Full Moon Special</option>
                  <option value="Christmas & New Year Eve 2026-2027">Christmas & New Year Eve (Dec 25 - Jan 1)</option>
                  <option value="January 2027 (Kite Festival & Full Moon)">January 2027 (Uttarayan & Full Moon)</option>
                  <option value="February 2027 (Closing Month Special)">February 2027 Closing Special</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black text-sm py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>{isSubmitting ? 'Submitting Request...' : 'GET CONFIRMED TENT CITY TARIFF & FULL MOON BOOKING'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
