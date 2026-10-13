'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Snowflake, Zap } from 'lucide-react';

export const KashmirGondolaInquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Kashmir Winter Special: Gulmarg + Pahalgam + Srinagar Houseboat (5D/4N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageCategory: defaultPackageCategory,
    dates: 'Winter / Snow Season (Nov 2026 - Jan 2027)',
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
        destination: `Kashmir & Gulmarg: ${formData.packageCategory} (${formData.dates})`,
        budget: 'Kashmir Winter Package',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Gulmarg Gondola & Kashmir Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer KASHMIR LEAD ❄️] Inquiry: ${formData.packageCategory} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Kashmir Winter & Gulmarg Gondola - ${formData.packageCategory}`,
        budget: formData.dates,
        notes: `Kashmir Lead (${formData.travelers}, Dates: ${formData.dates}) from Viral Blog`,
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
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-300 rounded-2xl p-6 text-center shadow-lg animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Kashmir Inquiry Received!</h3>
        <p className="text-slate-600 text-sm mb-4">
          Our Kashmir destination specialist will call you within <strong>15 minutes</strong> with verified Gulmarg Gondola ticket slots, houseboat allocation &amp; customized itinerary quote.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              packageCategory: defaultPackageCategory,
              dates: 'Winter / Snow Season (Nov 2026 - Jan 2027)',
              travelers: '2 Adults (Couple / Family)',
            });
          }}
          className="text-xs font-semibold text-sky-800 hover:text-sky-950 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-sky-200 p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-600 to-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-sm">
        <Zap className="w-3 h-3 fill-white" />
        Gondola Slot Assistance Live
      </div>

      <div className="mb-5 pt-1">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-widest flex items-center gap-1.5">
          <Snowflake className="w-4 h-4 text-sky-600" />
          Kashmir Winter 2026-27 Desk
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">Book Kashmir Package with Gondola Assistance</h3>
        <p className="text-xs text-slate-500 mt-1">
          Lock Dal Lake luxury houseboats, private snow cabs, Pahalgam valleys &amp; Gulmarg Phase 1 / Phase 2 ticket support.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Preferred Kashmir Package
          </label>
          <select
            value={formData.packageCategory}
            onChange={(e) => setFormData({ ...formData, packageCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
          >
            <option value="Kashmir Winter Special: Gulmarg + Pahalgam + Srinagar Houseboat (5D/4N)">Kashmir Winter Special (5D/4N - Houseboat + Cab + Hotels)</option>
            <option value="Kashmir Romantic Honeymoon with Gulmarg Snow & Shikara (6D/5N)">Romantic Couple Honeymoon (6D/5N with Candlelight Dinner)</option>
            <option value="Gulmarg Ski & Snow Adventure Weekend (3D/2N)">Gulmarg Ski & Snow Adventure (3D/2N)</option>
            <option value="Grand Kashmir Family Vacation: Sonamarg + Doodhpathri (7D/6N)">Grand Family Tour with Doodhpathri (7D/6N)</option>
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
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            WhatsApp Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Travel Month / Season
          </label>
          <select
            value={formData.dates}
            onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
          >
            <option value="November 2026 (Autumn Chinar Golden Colors)">November 2026 (Autumn Golden Chinars & Early Snow)</option>
            <option value="December 2026 (Christmas & New Year Snow Rush)">December 2026 (Christmas & New Year Snow Peak)</option>
            <option value="January 2027 (Heavy Snow & Skiing Season)">January 2027 (Chillai Kalan Heavy Snow & Skiing)</option>
            <option value="February - March 2027 (Pleasant Snow & Sunny Days)">February - March 2027 (Pleasant Snow & Sunny Slopes)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all text-sm disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Checking Kashmir Slots...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Instant Kashmir Itinerary &amp; Quote</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 mt-2">
          <span>🔒 100% Privacy Protected • No Spam • 10-Minute Response Guarantee</span>
        </p>
      </form>
    </div>
  );
};
