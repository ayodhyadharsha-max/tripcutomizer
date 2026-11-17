'use client';

import React, { useState } from 'react';
import { Send, PhoneCall, ShieldCheck, CheckCircle2, Snowflake, Mountain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const AuliInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupCity: 'Delhi NCR',
    travelMonth: 'December 2026 (Christmas & Snow)',
    groupSize: 'Couple (2 Adults)',
    skiInterest: 'Beginner Skiing (Equipment + Instructor)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Direct Web3Forms submission for instant email lead delivery
      const web3Payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        subject: `🎿 New Auli Skiing & Winter Snow Inquiry: ${formData.name} (${formData.pickupCity})`,
        from_name: 'Trip Customizer Auli Winter Desk',
        name: formData.name,
        phone: formData.phone,
        pickup_city: formData.pickupCity,
        travel_month: formData.travelMonth,
        group_size: formData.groupSize,
        ski_interest: formData.skiInterest,
        page_source: 'Auli Skiing & Ropeway Master Guide 2026-2027',
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
          destination: 'Auli, Uttarakhand',
          departureCity: formData.pickupCity,
          travelMonth: formData.travelMonth,
          groupSize: formData.groupSize,
          specialRequests: `Skiing Preference: ${formData.skiInterest} | Source: Auli Winter Editorial Guide`,
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error('CRM sync error:', err));

      setIsSuccess(true);

      // 3. Open WhatsApp with prefilled inquiry message
      const whatsappText = encodeURIComponent(
        `Hi Trip Customizer! 🏔️ I am planning an Auli Skiing & Winter Tour.\n\n` +
          `👤 Name: ${formData.name}\n` +
          `📞 Phone: ${formData.phone}\n` +
          `🚗 Pickup: ${formData.pickupCity}\n` +
          `🗓️ Travel Window: ${formData.travelMonth}\n` +
          `👥 Group: ${formData.groupSize}\n` +
          `🎿 Ski Interest: ${formData.skiInterest}\n\n` +
          `Please share 4x4 cab rates, ropeway updates, ski gear options, and customized 5D/4N itinerary.`
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
    <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 border border-sky-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30">
            <Snowflake className="w-3.5 h-3.5 animate-spin" /> Winter Season 2026–2027 Booking Desk
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          Get Instant Auli Skiing &amp; 4x4 Cab Custom Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6">
          Compare private 4x4 snow cab rates from Haridwar/Rishikesh/Delhi, certified ski instructors, chairlift passes, and cliff-view resort stays in 15 minutes.
        </p>

        {isSuccess ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-6 text-center text-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Inquiry Dispatched Successfully!</h4>
            <p className="text-xs sm:text-sm text-emerald-200 mb-4">
              Our Senior Uttarakhand Winter Specialist is connecting on WhatsApp with live snow updates &amp; transparent quotation.
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
                  placeholder="e.g. Vikram Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
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
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pickup Location
                </label>
                <select
                  value={formData.pickupCity}
                  onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                >
                  <option value="Delhi NCR">Delhi NCR (Direct Cab / Flight to DED)</option>
                  <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                  <option value="Rishikesh (Yog Nagari)">Rishikesh (Yog Nagari)</option>
                  <option value="Dehradun Airport (Jolly Grant)">Dehradun Airport (Jolly Grant)</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Joshimath (Local Stay / Cab Only)">Joshimath (Local Stays Only)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Travel Window
                </label>
                <select
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                >
                  <option value="December 2026 (Christmas & Snow)">December 2026 (Christmas &amp; Snow)</option>
                  <option value="New Year 2027 Peak (Dec 29 - Jan 3)">New Year 2027 Peak (Dec 29 - Jan 3)</option>
                  <option value="January 2027 (Peak Powder Snow)">January 2027 (Peak Powder Snow)</option>
                  <option value="February 2027 (Auli Ski Championship)">February 2027 (Ski Championship)</option>
                  <option value="March 2027 (Spring Snow & Treks)">March 2027 (Spring Snow &amp; Treks)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Skiing Preference
                </label>
                <select
                  value={formData.skiInterest}
                  onChange={(e) => setFormData({ ...formData, skiInterest: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                >
                  <option value="Beginner Skiing (Equipment + Instructor)">Beginner Skiing (Gear + Instructor)</option>
                  <option value="Snow Sightseeing & Ropeway Only">Snow Sightseeing &amp; Ropeway Only</option>
                  <option value="Gorson Bugyal Winter Trek + Snow Camping">Gorson Bugyal Snow Trek</option>
                  <option value="Advanced / 7-Day Ski Certificate Course">7-Day Certified Ski Course</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-black py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  Generating Custom Quote...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Get Free Auli Ski &amp; Cab Quote On WhatsApp
                </>
              )}
            </Button>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> 100% Verified GMVN Stays &amp; 4x4 Cabs
              </span>
              <span className="flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-amber-400" /> Live Snow Condition Assistance
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> ₹0 Hidden Booking Fee
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
