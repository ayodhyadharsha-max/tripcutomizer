'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Music, Sparkles, Zap } from 'lucide-react';

export const GoaSunburnInquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Sunburn VIP + 4-Star North Goa Beach Resort (4D/3N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageCategory: defaultPackageCategory,
    dates: 'Christmas & New Year Peak (December 2026)',
    travelers: '2 Adults (Couple / Friends)',
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
        destination: `Goa & Sunburn: ${formData.packageCategory} (${formData.dates})`,
        budget: 'Goa Festive Package',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Sunburn Goa & New Year Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer GOA SUNBURN LEAD 🏖️] Inquiry: ${formData.packageCategory} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Goa Festive - ${formData.packageCategory}`,
        budget: formData.dates,
        notes: `Goa Lead (${formData.travelers}, Dates: ${formData.dates}) from Viral Blog`,
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
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-6 text-center shadow-lg animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Goa Festive Inquiry Received!</h3>
        <p className="text-slate-600 text-sm mb-4">
          Our Goa party &amp; beach holiday concierge will connect with you within <strong>15 minutes</strong> with verified resort rooms, Sunburn passes &amp; custom cab packages.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              packageCategory: defaultPackageCategory,
              dates: 'Christmas & New Year Peak (December 2026)',
              travelers: '2 Adults (Couple / Friends)',
            });
          }}
          className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-emerald-200 p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase flex items-center gap-1 shadow-sm">
        <Zap className="w-3 h-3 fill-white" />
        Dec 2026 Early Bird Live
      </div>

      <div className="mb-5 pt-1">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
          <Music className="w-4 h-4 text-emerald-600" />
          Goa Festive 2026 Party Desk
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">Get Goa Holiday &amp; Sunburn Pass Quote</h3>
        <p className="text-xs text-slate-500 mt-1">
          Lock beachfront 4-star resorts, private cab transfers, water sports &amp; Sunburn passes before December price surge.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Package / Stay Preference
          </label>
          <select
            value={formData.packageCategory}
            onChange={(e) => setFormData({ ...formData, packageCategory: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          >
            <option value="Sunburn VIP + 4-Star North Goa Beach Resort (4D/3N)">Sunburn VIP Pass + 4-Star North Goa Beach Resort (4D/3N)</option>
            <option value="Goa New Year Eve 2026 Beach Bash Party Package (5D/4N)">Goa New Year Eve 2026 Beach Bash Party Package (5D/4N)</option>
            <option value="Goa Romantic Couple Retreat with Private Pool Villa (4D/3N)">Goa Romantic Couple Retreat with Private Pool Villa (4D/3N)</option>
            <option value="South Goa Luxury Heritage Relaxation (5D/4N)">South Goa Luxury Heritage Relaxation (5D/4N)</option>
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
              placeholder="e.g. Aryan Malhotra"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400"
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
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Travel Window
          </label>
          <select
            value={formData.dates}
            onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          >
            <option value="Sunburn Festival Dates (Dec 28 - 31, 2026)">Sunburn Festival Dates (Dec 28 - 31, 2026)</option>
            <option value="Christmas Long Weekend (Dec 23 - 26, 2026)">Christmas Long Weekend (Dec 23 - 26, 2026)</option>
            <option value="New Year Eve Blast (Dec 30, 2026 - Jan 2, 2027)">New Year Eve Blast (Dec 30, 2026 - Jan 2, 2027)</option>
            <option value="Early December Relaxed Vacation (Dec 1 - 20, 2026)">Early December Relaxed Vacation (Dec 1 - 20, 2026)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all text-sm disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Checking Goa Resort Availability...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Instant Goa Package Quote</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 mt-2">
          <span>🔒 100% Privacy Protected • No Hidden Costs • Instant WhatsApp Details</span>
        </p>
      </form>
    </div>
  );
};
