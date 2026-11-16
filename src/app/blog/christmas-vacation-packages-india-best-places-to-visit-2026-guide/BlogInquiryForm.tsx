'use client';

import React, { useState } from 'react';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import { Send, CheckCircle2, Phone, Mail, User, MapPin, Sparkles, Gift } from 'lucide-react';

export const ChristmasInquiryForm: React.FC<{ defaultPackageCategory?: string }> = ({
  defaultPackageCategory = 'Christmas & Winter Holiday Special: 4-Star Hotel + Flights (5D/4N)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    departureCity: 'Delhi (DEL)',
    destinationTheme: 'Goa (Beaches & Midnight Mass)',
    packageCategory: defaultPackageCategory,
    travelDates: 'Dec 24 – Dec 28, 2026 (Christmas Long Weekend)',
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
        name: formData.name || 'Christmas Traveler',
        phone: formData.phone,
        email: formData.email,
        destination: `Christmas 2026: ${formData.destinationTheme} (Ex-${formData.departureCity})`,
        budget: 'Christmas 2026 Special',
        travelersCount: 2,
        status: 'New',
        source: 'Viral Blog: Christmas Vacation Packages Guide',
      });

      // 2. Dispatch Email Notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer CHRISTMAS 2026 LEAD 🎄] ${formData.name} - ${formData.destinationTheme}`,
        name: formData.name || 'Christmas Client',
        email: formData.email || 'not-provided@tripcustomizer.com',
        phone: formData.phone,
        destination: `Christmas 2026 (${formData.departureCity}) - ${formData.destinationTheme}`,
        budget: formData.travelDates,
        notes: `Theme: ${formData.destinationTheme}, City: ${formData.departureCity}, Travelers: ${formData.travelers}, Dates: ${formData.travelDates}`,
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
    <div className="bg-gradient-to-br from-red-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-red-500/30 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-red-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Gift className="w-4 h-4 text-red-400 animate-bounce" />
          <span>Christmas 2026 Early Bird Holiday Desk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
          Reserve Christmas 2026 Holiday Package
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Dec 25 long weekend flights and beachfront/snow resorts sell out by late November. Lock confirmed flights from your city with 4-star stays &amp; gala dinner perks.
        </p>

        {isSubmitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400 p-6 rounded-2xl text-center space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Merry Christmas, {formData.name || 'Traveler'}!</h4>
            <p className="text-xs text-slate-200">
              Your Christmas vacation inquiry for <strong>{formData.destinationTheme}</strong> has been received. Our holiday specialist will share the customized itinerary with locked flight rates on WhatsApp within <strong>15 minutes</strong>.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/917408763401?text=Hi%20TripCustomizer,%20I%20just%20inquired%20for%20Christmas%202026%20Package%20for%20${encodeURIComponent(formData.destinationTheme)}%20from%20${encodeURIComponent(formData.departureCity)}.%20Please%20share%20itinerary.`}
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
                  placeholder="e.g. Ankit Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile (WhatsApp) *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition"
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
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Departure City</label>
                <select
                  value={formData.departureCity}
                  onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-400 transition"
                >
                  <option value="Delhi (DEL)">Delhi (IGI T3)</option>
                  <option value="Mumbai (BOM)">Mumbai (CSMT T2)</option>
                  <option value="Ahmedabad (AMD)">Ahmedabad (SVPI T1/T2)</option>
                  <option value="Bangalore (BLR)">Bangalore (Kempegowda T2)</option>
                  <option value="Pune (PNQ)">Pune (PNQ Airport)</option>
                  <option value="Kolkata (CCU)">Kolkata (CCU Airport)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Destination Preference</label>
                <select
                  value={formData.destinationTheme}
                  onChange={(e) => setFormData({ ...formData, destinationTheme: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-400 transition"
                >
                  <option value="Goa (Beaches & Midnight Mass)">Goa (Beaches &amp; Midnight Mass)</option>
                  <option value="Gulmarg Kashmir (White Christmas Snow)">Gulmarg Kashmir (White Snow)</option>
                  <option value="Manali Himachal (Snowfall & Solang)">Manali Himachal (Snowfall &amp; Solang)</option>
                  <option value="Kerala (Munnar Tea Hills & Houseboat)">Kerala (Munnar &amp; Houseboat)</option>
                  <option value="Pondicherry (French Heritage & Churches)">Pondicherry (French Churches)</option>
                  <option value="Dubai (Shopping Festival Mega Sales)">Dubai (Shopping Festival)</option>
                  <option value="Thailand (Bangkok & Pattaya Beaches)">Thailand (Bangkok &amp; Pattaya)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-black py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Checking Early Bird Slots...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Christmas Quote &amp; Itinerary</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400">
              🔒 100% Confirmed Holiday Bookings • 4-Star Verified Properties • Flight Assistance
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
