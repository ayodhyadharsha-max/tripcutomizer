'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, User, Plane, Sparkles, Flame } from 'lucide-react';

export const NewYear2027InquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Goa Sunburn & New Year Eve Party Special (4D/3N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    targetDestination: 'Goa (Sunburn & Beach Parties)',
    packageCategory: defaultPackageCategory,
    travelDates: 'Dec 28, 2026 – Jan 2, 2027 (New Year Peak)',
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
      cloudStore.saveLead({
        name: formData.name || 'Valued Traveler',
        phone: formData.phone,
        email: formData.email,
        destination: `New Year 2027: ${formData.targetDestination} - ${formData.packageCategory}`,
        budget: 'New Year 2027 Special',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Top 10 New Year 2027 Destinations',
      });

      await sendWeb3FormLead({
        subject: `[Trip Customizer NEW YEAR 2027 LEAD 🎆] ${formData.name} - ${formData.targetDestination}`,
        name: formData.name || 'Valued Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `New Year 2027 (${formData.targetDestination}) - ${formData.packageCategory}`,
        budget: formData.travelDates,
        notes: `Destination: ${formData.targetDestination}, Travelers: ${formData.travelers}, Dates: ${formData.travelDates}`,
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
    <div className="bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Flame className="w-4 h-4" />
          <span>New Year 2027 Early Bird Booking Desk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
          Reserve Your Christmas &amp; New Year 2027 Holiday Package
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Lock in early-bird flight pricing and confirmed 4-star hotel vouchers before holiday surcharges double. Custom itineraries with private cabs.
        </p>

        {isSubmitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400 p-6 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Holiday Inquiry Confirmed!</h4>
            <p className="text-xs text-slate-200">
              Thank you, {formData.name || 'Traveler'}! Our senior New Year travel planner is reviewing hotel and flight inventory for <strong>{formData.targetDestination}</strong> and will connect via WhatsApp in <strong>15 minutes</strong>.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/917408763401?text=Hi%20TripCustomizer,%20I%20am%20inquiring%20about%20New%20Year%202027%20package%20for%20${encodeURIComponent(formData.targetDestination)}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <span>Connect on WhatsApp Now &rarr;</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Roy"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Mobile *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Destination *</label>
                <select
                  value={formData.targetDestination}
                  onChange={(e) => setFormData({ ...formData, targetDestination: e.target.value })}
                  className="w-full bg-slate-800 border border-white/20 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-rose-400"
                >
                  <option value="Goa (Sunburn & Beach Parties)">Goa (Sunburn &amp; Beach Shacks) - from ₹12,999</option>
                  <option value="Dubai (Burj Khalifa Fireworks & DSF)">Dubai (Burj Khalifa Fireworks &amp; DSF) - from ₹36,999</option>
                  <option value="Thailand (Bangkok & Pattaya Parties)">Thailand (Bangkok &amp; Pattaya) - from ₹28,999</option>
                  <option value="Kashmir (Gulmarg Snow & Dal Lake)">Kashmir (Gulmarg Snow &amp; Dal Lake) - from ₹14,999</option>
                  <option value="Bali (Seminyak Beach Clubs & Ubud)">Bali (Beach Clubs &amp; Pool Villa) - from ₹32,999</option>
                  <option value="Manali & Shimla (Winter Snowfall)">Himachal (Manali Snow &amp; Solang) - from ₹9,999</option>
                  <option value="Kerala (Alleppey Houseboat & Munnar)">Kerala (Houseboat &amp; Munnar) - from ₹11,999</option>
                  <option value="Rajasthan (Udaipur & Jaisalmer Camp)">Rajasthan (Desert Camp &amp; Palaces) - from ₹13,500</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Travelers &amp; Party Size *</label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="w-full bg-slate-800 border border-white/20 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-rose-400"
                >
                  <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                  <option value="Group of Friends (3 to 6)">Group of Friends (3 to 6)</option>
                  <option value="Family with Kids (3 to 5)">Family with Kids (3 to 5)</option>
                  <option value="Large Group (7+)">Large Group (7+)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-black text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Checking Early Bird Inventory...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Get New Year 2027 Itinerary &amp; Special Rates</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
