'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Tent, Zap } from 'lucide-react';

export const PushkarMelaInquiryForm: React.FC<{ defaultCampCategory?: string }> = ({
  defaultCampCategory = 'Royal Swiss AC Tent Camp (Pushkar Fair Grounds)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    campCategory: defaultCampCategory,
    dates: 'Kartik Purnima Peak (November 2026)',
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
        destination: `Pushkar Mela: ${formData.campCategory} (${formData.dates})`,
        budget: 'Pushkar Luxury Camp Package',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Pushkar Mela 2026 Booking Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer PUSHKAR MELA LEAD 🐪] Inquiry: ${formData.campCategory} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Pushkar Fair - ${formData.campCategory}`,
        budget: formData.dates,
        notes: `Pushkar Mela 2026 Lead (${formData.travelers}, Dates: ${formData.dates}) from Viral Blog`,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission note:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-6 text-center shadow-lg animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-amber-950 mb-1">Pushkar Camp Inquiry Received!</h3>
        <p className="text-slate-600 text-sm mb-4">
          Our Pushkar Fair festival manager will contact you within <strong>15 minutes</strong> with verified camp availability, Kartik Purnima special pricing &amp; hot air balloon slots.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              campCategory: defaultCampCategory,
              dates: 'Kartik Purnima Peak (November 2026)',
              travelers: '2 Adults (Couple / Family)',
            });
          }}
          className="text-xs font-semibold text-amber-800 hover:text-amber-950 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-200 p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-sm">
        <Zap className="w-3 h-3 fill-white" />
        Kartik Purnima 2026 Live
      </div>

      <div className="mb-5 pt-1">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1.5">
          <Tent className="w-4 h-4 text-amber-600" />
          Official Fair Ground Camps
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">Get Pushkar Mela Camp Tariff &amp; VIP Slots</h3>
        <p className="text-xs text-slate-500 mt-1">
          Lock verified luxury Swiss tents, camel safari, sunset balloon ride &amp; Jaipur/Ajmer transfers.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Camp Accommodation Type
          </label>
          <select
            value={formData.campCategory}
            onChange={(e) => setFormData({ ...formData, campCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          >
            <option value="Royal Swiss AC Tent Camp (Pushkar Fair Grounds)">Royal Swiss AC Tent Camp (Fair Grounds)</option>
            <option value="Luxury Glamping Camp (Desert Dunes)">Luxury Glamping Camp (Desert Dunes)</option>
            <option value="Pushkar Heritage Resort (Near Holy Sarovar)">Pushkar Heritage Resort (Near Sarovar Lake)</option>
            <option value="Pushkar + Jaipur + Udaipur 5-Day Golden Triangle Package">Pushkar + Jaipur + Udaipur 5-Day Heritage Package</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Your Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              required
              placeholder="e.g. Vikramaditya Rathore"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Mobile Number (WhatsApp) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Travel Dates &amp; Window
          </label>
          <select
            value={formData.dates}
            onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          >
            <option value="Kartik Purnima Peak (November 2026)">Kartik Purnima Peak (Full Moon Holy Dip)</option>
            <option value="Cultural & Cattle Trading Week (November 2026)">Cultural &amp; Cattle Trading Week</option>
            <option value="Custom Dates (November 2026)">Custom Travel Dates in November 2026</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all text-sm disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Checking Camp Slots...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Instant Pushkar Mela Camp Quote</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 mt-2">
          <span>🔒 100% Privacy Protected • No Spam • Instant WhatsApp Callback</span>
        </p>
      </form>
    </div>
  );
};
