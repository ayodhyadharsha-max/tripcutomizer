'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Heart, Zap } from 'lucide-react';

export const HoneymoonBlogInquiryForm: React.FC<{ defaultDestination?: string }> = ({
  defaultDestination = 'Kashmir (Dal Lake Houseboat & Gulmarg) 6D/5N',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: defaultDestination,
    budget: 'Under ₹30,000 / couple',
    travelers: 'Couple (2 Adults)',
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
        name: formData.name || 'Valued Couple',
        phone: formData.phone,
        email: formData.email,
        destination: formData.destination,
        budget: formData.budget,
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Top 10 Honeymoon Destinations Under 30k',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer HONEYMOON LEAD 💑] Inquiry: ${formData.destination} (${formData.name})`,
        name: formData.name || 'Valued Couple',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: formData.destination,
        budget: formData.budget,
        notes: `Honeymoon Under 30k Lead from Viral Honeymoon Blog`,
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
    <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-rose-400 relative overflow-hidden my-8">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />

      {isSubmitted ? (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-2xl font-black text-white">Honeymoon Inquiry Received! 💑🎉</h3>
          <p className="text-xs text-slate-300 font-medium max-w-md mx-auto">
            Thank you <strong className="text-rose-400">{formData.name || 'Couple'}</strong>! Our senior romance travel concierge will WhatsApp / call you at <strong className="text-white">{formData.phone}</strong> within 10 minutes with private cab quotes, resort options, and free couple inclusions (Candlelight Dinner & Flower Bed Decor).
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-bold text-rose-400 hover:underline pt-2 cursor-pointer"
          >
            ← Submit Another Honeymoon Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <Heart className="w-3 h-3 text-white fill-current" /> HONEYMOON PRIORITY DESK 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">Get Up to 40% Off Couple Honeymoon Tour Quotes</h3>
              <p className="text-xs text-slate-300 mt-1">4-Star Romantic Resorts + Private Cab + Free Candlelight Dinner & Cake Included.</p>
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
                  placeholder="e.g. Aman & Simran"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-rose-400"
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
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-rose-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Select Target Honeymoon Destination</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-900 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-rose-400"
                >
                  <option value="Kashmir (Dal Lake Houseboat & Gulmarg) 6D/5N">Kashmir (Gulmarg Gondola & Dal Lake) - ₹18,999</option>
                  <option value="Kerala (Munnar Hills & Alleppey Houseboat) 5D/4N">Kerala (Munnar Tea Hills & Houseboat) - ₹16,999</option>
                  <option value="Manali & Solang Valley Snow Escape 5D/4N">Himachal (Manali & Solang Snow Valley) - ₹14,999</option>
                  <option value="Goa Beach Resort & Sunset Cruise 4D/3N">Goa (South Goa Beach Resort & Cruise) - ₹12,999</option>
                  <option value="Udaipur Royal Lake Palace Romance 4D/3N">Udaipur (Lake Pichola Boat & City Palace) - ₹15,500</option>
                  <option value="Ooty & Coonoor Nilgiri Hills 4D/3N">Ooty & Coonoor Toy Train Special - ₹12,999</option>
                  <option value="Meghalaya & Shillong Romantic Escapes 5D/4N">Meghalaya & Dawki River Boating - ₹19,500</option>
                  <option value="Auli & Rishikesh Himalayan Glades 5D/4N">Auli Snow Glades & Riverside Camp - ₹13,999</option>
                  <option value="Coorg Coffee Estate Romance 4D/3N">Coorg Coffee Estate & Abbey Falls - ₹13,500</option>
                  <option value="Darjeeling & Gangtok Sunrise Special 5D/4N">Darjeeling & Gangtok Kanchenjunga - ₹18,500</option>
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
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl pl-9 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-rose-400"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-black text-sm py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 text-white" />
            <span>{isSubmitting ? 'Submitting Request...' : 'GET FREE HONEYMOON ITINERARY & DISCOUNT QUOTE'}</span>
          </button>
        </form>
      )}
    </div>
  );
};
