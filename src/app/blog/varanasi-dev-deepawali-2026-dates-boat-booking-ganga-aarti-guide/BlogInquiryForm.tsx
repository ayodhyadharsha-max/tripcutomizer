'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Sparkles, Flame } from 'lucide-react';

export const DevDeepawaliInquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Varanasi Dev Deepawali: Ganga Boat + Kashi Vishwanath Special (3D/2N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageCategory: defaultPackageCategory,
    boatPreference: 'Luxury Bajra / Shared Motor Boat',
    travelDates: 'November 27–29, 2026 (Dev Deepawali Peak)',
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
        name: formData.name || 'Pilgrim Traveler',
        phone: formData.phone,
        email: formData.email,
        destination: `Varanasi Dev Deepawali: ${formData.packageCategory} (${formData.boatPreference})`,
        budget: 'Dev Deepawali 2026 Special',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Varanasi Dev Deepawali Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer DEV DEEPAWALI 2026 LEAD 🪔] ${formData.name}`,
        name: formData.name || 'Pilgrim Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Varanasi Dev Deepawali - ${formData.packageCategory}`,
        budget: formData.travelDates,
        notes: `Boat: ${formData.boatPreference}, Travelers: ${formData.travelers}, Dates: ${formData.travelDates}`,
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
    <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Priority Ganga Boat &amp; Darshan Desk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
          Reserve Dev Deepawali Boat &amp; Kashi Package
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Ghat-facing hotels and river boats sell out 3 weeks in advance. Lock guaranteed Ganga motor boat slots, Kashi Vishwanath VIP passes &amp; hotel stays.
        </p>

        {isSubmitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400 p-6 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Har Har Mahadev, {formData.name || 'Pilgrim'}!</h4>
            <p className="text-xs text-slate-200">
              Your Dev Deepawali Varanasi inquiry has been received. Our Varanasi pilgrimage desk will share available boat slots &amp; hotel itineraries on WhatsApp within <strong>15 minutes</strong>.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/917408763401?text=Hi%20TripCustomizer,%20I%20just%20inquired%20for%20Varanasi%20Dev%20Deepawali%202026%20Boat%20Booking.%20Please%20share%20details.`}
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
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile (WhatsApp Number) *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email ID</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Boat Preference</label>
                <select
                  value={formData.boatPreference}
                  onChange={(e) => setFormData({ ...formData, boatPreference: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                >
                  <option value="Shared Motor Boat (Budget)">Shared Motor Boat (Per Seat)</option>
                  <option value="Private Motor Boat (4-8 Persons)">Private Motor Boat (4-8 Pax)</option>
                  <option value="Luxury Bajra / Double-Decker Cruise">Luxury Bajra / Double-Decker Cruise</option>
                  <option value="Traditional Hand-Rowed Wooden Boat">Traditional Hand-Rowed Wooden Boat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Total Travelers</label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
                >
                  <option value="1 Adult (Solo Pilgrim)">1 Adult (Solo Pilgrim)</option>
                  <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                  <option value="Family (3-5 Members)">Family (3-5 Members)</option>
                  <option value="Group / Yatra Sangha (6+ Members)">Group / Yatra Sangha (6+ Members)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Package Category</label>
              <select
                value={formData.packageCategory}
                onChange={(e) => setFormData({ ...formData, packageCategory: e.target.value })}
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
              >
                <option value="Varanasi Dev Deepawali: Ganga Boat + Kashi Vishwanath Special (3D/2N)">
                  Varanasi Dev Deepawali: Ganga Boat + Kashi Vishwanath (3D/2N)
                </option>
                <option value="Dev Deepawali + Ayodhya Ram Mandir + Prayagraj Sangam (5D/4N)">
                  Dev Deepawali + Ayodhya Ram Mandir + Prayagraj (5D/4N)
                </option>
                <option value="Dev Deepawali Luxury Bajra Cruise + 5-Star Hotel Package">
                  Dev Deepawali Luxury Bajra Cruise + 5-Star Hotel Package
                </option>
                <option value="Only Ganga Boat & Aarti Cruise Pass Booking">
                  Only Ganga Boat &amp; Aarti Cruise Pass Booking
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Checking Available Slots...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Dev Deepawali Quote &amp; Boat Slot</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400">
              🔒 Guaranteed Ganga Boat Pass • Official Varanasi Local Guides • No Hidden Surcharges
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
