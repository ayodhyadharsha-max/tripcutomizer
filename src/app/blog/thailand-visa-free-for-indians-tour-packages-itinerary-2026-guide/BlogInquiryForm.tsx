'use client';

import React, { useState } from 'react';
import { Send, PhoneCall, ShieldCheck, CheckCircle2, Plane, Sparkles, Globe2, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ThailandInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    departureCity: 'Delhi NCR (DEL)',
    destinationPreference: 'Phuket & Krabi (Beach & Islands)',
    travelMonth: 'December 2026 (Winter & Christmas)',
    groupType: 'Couple (2 Adults Honeymoon / Vacation)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Direct Web3Forms submission for instant email lead delivery
      const web3Payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'c542ca79-b08a-4352-bf3e-1045518a0486',
        subject: `🌴 New Thailand 60-Day Visa-Free Inquiry: ${formData.name} (${formData.departureCity})`,
        from_name: 'Trip Customizer Thailand Desk',
        name: formData.name,
        phone: formData.phone,
        departure_city: formData.departureCity,
        destination_pref: formData.destinationPreference,
        travel_month: formData.travelMonth,
        group_type: formData.groupType,
        page_source: 'Thailand Visa-Free Tour Guide 2026-2027',
      };

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(web3Payload),
      }).catch((err) => console.error('Web3Forms backup dispatch error:', err));

      // 2. Direct CloudStore CRM synchronization
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          destination: 'Thailand (Bangkok / Phuket / Krabi)',
          departureCity: formData.departureCity,
          travelMonth: formData.travelMonth,
          groupSize: formData.groupType,
          specialRequests: `Destination: ${formData.destinationPreference} | 60-Day Visa-Free Assistance | Source: Thailand Editorial Guide`,
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error('CRM sync error:', err));

      setIsSuccess(true);

      // 3. Open WhatsApp with prefilled inquiry message
      const whatsappText = encodeURIComponent(
        `Hi Trip Customizer! 🌴✈️ I am planning a Thailand trip with 60-Day Visa-Free Entry.\n\n` +
          `👤 Name: ${formData.name}\n` +
          `📞 Phone: ${formData.phone}\n` +
          `🛫 Departure City: ${formData.departureCity}\n` +
          `🏖️ Preferred Route: ${formData.destinationPreference}\n` +
          `🗓️ Travel Window: ${formData.travelMonth}\n` +
          `👥 Group: ${formData.groupType}\n\n` +
          `Please share 4-star beach resort packages with direct flights, speed boat island tours, and transparent quotation.`
      );

      setTimeout(() => {
        window.open(`https://wa.me/917408763401?text=${whatsappText}`, '_blank');
      }, 700);
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" /> 60-Day Visa-Free Entry Guaranteed
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          Get Instant Thailand Custom Package Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6">
          Compare direct flights from Delhi/Mumbai/BLR, 4-star beachfront resorts, Phi Phi speedboat transfers, and Indian meals in 15 minutes.
        </p>

        {isSuccess ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-6 text-center text-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Inquiry Dispatched Successfully!</h4>
            <p className="text-xs sm:text-sm text-emerald-200 mb-4">
              Our Senior Thailand Specialist is connecting on WhatsApp with live flight deals &amp; customized itinerary.
            </p>
            <a
              href="https://wa.me/917408763401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs uppercase tracking-wider transition"
            >
              <PhoneCall className="w-4 h-4" /> Chat on WhatsApp Now
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Departure City
                </label>
                <select
                  value={formData.departureCity}
                  onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                >
                  <option value="Delhi NCR (DEL)">Delhi NCR (DEL Direct)</option>
                  <option value="Mumbai (BOM)">Mumbai (BOM Direct)</option>
                  <option value="Bangalore (BLR)">Bangalore (BLR Direct)</option>
                  <option value="Kolkata (CCU)">Kolkata (CCU Shortest 2.5h)</option>
                  <option value="Ahmedabad (AMD)">Ahmedabad (AMD)</option>
                  <option value="Chennai (MAA)">Chennai (MAA Direct)</option>
                  <option value="Hyderabad (HYD)">Hyderabad (HYD)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Destination Island / City
                </label>
                <select
                  value={formData.destinationPreference}
                  onChange={(e) => setFormData({ ...formData, destinationPreference: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                >
                  <option value="Phuket & Krabi (Beach & Islands)">Phuket &amp; Krabi (Beaches &amp; Phi Phi)</option>
                  <option value="Bangkok & Pattaya (Nightlife & Temples)">Bangkok &amp; Pattaya (Classic Budget)</option>
                  <option value="Phuket & Bangkok Combo (Best All-Round)">Phuket &amp; Bangkok Combo (5D/4N)</option>
                  <option value="Koh Samui (Luxury Pool Villa Honeymoon)">Koh Samui (Luxury Villas)</option>
                  <option value="Complete Thailand (Bangkok + Pattaya + Phuket + Krabi 7D)">Complete Thailand 7D/6N</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Travel Window
                </label>
                <select
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                >
                  <option value="December 2026 (Winter & Christmas)">December 2026 (Festive)</option>
                  <option value="New Year 2027 (Dec 28 - Jan 2)">New Year 2027 Countdown</option>
                  <option value="January 2027 (Pleasant Winter)">January 2027 (Peak Season)</option>
                  <option value="February 2027 (Valentine Special)">February 2027 (Valentine Honeymoon)</option>
                  <option value="March 2027 (Holi Holiday Break)">March 2027 (Holi Holiday)</option>
                  <option value="April 2027 (Songkran Water Festival)">April 2027 (Songkran Festival)</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  Generating Free Thailand Quote...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Get Free Thailand Quote With Flights On WhatsApp
                </>
              )}
            </Button>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ₹0 Visa Fee • 60-Day Stamp
              </span>
              <span className="flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-sky-400" /> Verified 4-Star Stays &amp; Indian Meals
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 100% Transparent Price with 5% GST
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
