'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Zap } from 'lucide-react';

export const VoaBlogInquiryForm: React.FC<{ defaultDestination?: string }> = ({
  defaultDestination = 'Bali Indonesia (30-Day VoA) 6D/5N',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: defaultDestination,
    budget: 'Under ₹30,000 / person',
    travelers: '2 Adults',
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
        destination: formData.destination,
        budget: formData.budget,
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Top 10 Visa on Arrival Countries 2026',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer VOA LEAD 🛂] Inquiry: ${formData.destination} (${formData.name})`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: formData.destination,
        budget: formData.budget,
        notes: `Visa on Arrival 2026 Lead (${formData.travelers}) from Viral VoA Blog`,
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
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-400 relative overflow-hidden my-8">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-2xl font-black text-white">Inquiry Received Successfully! 🎉</h3>
          <p className="text-xs text-slate-300 font-medium max-w-md mx-auto">
            Thank you <strong className="text-emerald-400">{formData.name || 'Traveler'}</strong>! Our senior international visa & holiday desk will WhatsApp / call you at <strong className="text-white">{formData.phone}</strong> within 10 minutes with complete visa rules, hotel options & custom itinerary.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-bold text-emerald-400 hover:underline pt-2 cursor-pointer"
          >
            ← Submit Another VoA Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <Zap className="w-3 h-3 text-slate-950" /> 2026 VOA FAST-TRACK DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">Get Complete Visa on Arrival Guide & Tour Quotes</h3>
              <p className="text-xs text-slate-300 mt-1">Confirmed Return Flights + 4-Star Hotel Vouchers + Immigration Arrival Kit.</p>
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
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-400"
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
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Select VoA Destination</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-900 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-400"
                >
                  <option value="Bali Indonesia (30-Day VoA) 6D/5N">Bali, Indonesia (30-Day VoA) - ₹24,999</option>
                  <option value="Thailand (Visa Exemption / VoA) 5D/4N">Thailand (Bangkok & Phuket) - ₹18,999</option>
                  <option value="Sri Lanka (Instant ETA on Arrival) 5D/4N">Sri Lanka (Bentota & Nuwara Eliya) - ₹21,999</option>
                  <option value="Maldives (Free 30-Day Tourist VoA) 4D/3N">Maldives (Water Villa Special) - ₹49,999</option>
                  <option value="Seychelles (Free Visitor Permit) 5D/4N">Seychelles (Mahe & Praslin) - ₹59,999</option>
                  <option value="Mauritius (Free 90-Day Tourist Visa) 6D/5N">Mauritius (Catamaran & Beach Resort) - ₹42,500</option>
                  <option value="Kenya (Safari eTA on Arrival) 6D/5N">Kenya (Masai Mara Big 5 Safari) - ₹68,500</option>
                  <option value="Oman (Muscat & Desert Dunes) 5D/4N">Oman (Muscat & Wahiba Sands) - ₹38,999</option>
                  <option value="Qatar (Free 30-Day Visa Waiver) 4D/3N">Qatar (Doha Souq & Desert Safari) - ₹34,500</option>
                  <option value="Baku Azerbaijan (Instant E-Visa / VoA) 5D/4N">Baku, Azerbaijan (Old City & Flame Towers) - ₹28,999</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Email Address (Optional)</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-slate-950 font-black text-sm py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>{isSubmitting ? 'Submitting Request...' : 'GET FREE IMMIGRATION GUIDE & DISCOUNTED TOUR QUOTE'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
