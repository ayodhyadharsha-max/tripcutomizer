'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Sparkles, Plane, ShoppingBag } from 'lucide-react';

export const DubaiDSFInquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Dubai Shopping Festival Special with Flights (5D/4N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    departureCity: 'Ahmedabad (AMD)',
    packageCategory: defaultPackageCategory,
    travelDates: 'December 2026 / January 2027 (DSF Season)',
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
        destination: `Dubai Shopping Festival: ${formData.packageCategory} (Ex-${formData.departureCity})`,
        budget: 'DSF 2026-2027 Special',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Dubai Shopping Festival Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer DUBAI DSF 2026 LEAD 🛍️] ${formData.name} - Ex ${formData.departureCity}`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Dubai DSF (${formData.departureCity}) - ${formData.packageCategory}`,
        budget: formData.travelDates,
        notes: `Departure: ${formData.departureCity}, Travelers: ${formData.travelers}, Dates: ${formData.travelDates}`,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <ShoppingBag className="w-4 h-4" />
          <span>Exclusive DSF 2026-2027 Flight Deal Desk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
          Get Instant Dubai DSF Package Quote with Flights
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Special flight tie-ups from <strong>Ahmedabad, Mumbai &amp; Delhi</strong> with Emirates and IndiGo. Includes verified 4-star hotel, desert safari, Burj Khalifa tickets &amp; visa.
        </p>

        {isSubmitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400 p-6 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Thank You, {formData.name || 'Traveler'}!</h4>
            <p className="text-xs text-slate-200">
              Your Dubai Shopping Festival travel inquiry has been received. Our senior Dubai specialist will share the customized day-by-day itinerary with confirmed flight rates on WhatsApp within <strong>15 minutes</strong>.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/917408763401?text=Hi%20TripCustomizer,%20I%20just%20inquired%20for%20Dubai%20Shopping%20Festival%20from%20${encodeURIComponent(formData.departureCity)}.%20Please%20share%20the%20itinerary.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <span>Chat on WhatsApp Now &rarr;</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Patel"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Departure City *</label>
                <div className="relative">
                  <Plane className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full bg-slate-800 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Ahmedabad (AMD)">Ahmedabad (AMD) - Direct Flights</option>
                    <option value="Mumbai (BOM)">Mumbai (BOM) - Emirates / Air India</option>
                    <option value="Delhi (DEL)">Delhi (DEL) - Direct Flights</option>
                    <option value="Bangalore (BLR)">Bangalore (BLR)</option>
                    <option value="Kolkata (CCU)">Kolkata (CCU)</option>
                    <option value="Pune (PNQ)">Pune (PNQ)</option>
                    <option value="Other City">Other Indian Airport</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Package Tier *</label>
                <select
                  value={formData.packageCategory}
                  onChange={(e) => setFormData({ ...formData, packageCategory: e.target.value })}
                  className="w-full bg-slate-800 border border-white/20 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Dubai Shopping Festival Special with Flights (5D/4N)">DSF Special with Flights (5D/4N) @ ₹42,999</option>
                  <option value="Dubai Luxury 5-Star + Marina Yacht Cruise (6D/5N)">Luxury 5-Star + Yacht Cruise (6D/5N) @ ₹58,999</option>
                  <option value="Dubai Budget Shopping Break (4D/3N)">Budget Shopping Break (4D/3N) @ ₹34,999</option>
                  <option value="Dubai & Abu Dhabi Combo Tour with Ferrari World (6D/5N)">Dubai + Abu Dhabi Combo (6D/5N) @ ₹49,999</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Generating Customized Quote...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Get DSF Itinerary &amp; Flight Pricing on WhatsApp</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-400 pt-1">
              <span>✓ Official 5% GST Invoice</span>
              <span>✓ 24x7 Senior Desk</span>
              <span>✓ 100% Verified Hotel Stays</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
