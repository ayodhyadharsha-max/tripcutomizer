'use client';

import React, { useState } from 'react';
import { ProgrammaticPackage } from '@/data/programmaticPackages';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { cloudStore } from '@/lib/cloudStore';
import {
  X,
  Phone,
  Mail,
  User,
  Calendar,
  Users,
  MapPin,
  Plane,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface PackageInquiryModalProps {
  pkg: ProgrammaticPackage;
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'book' | 'customize';
}

export const PackageInquiryModal: React.FC<PackageInquiryModalProps> = ({
  pkg,
  isOpen,
  onClose,
  defaultMode = 'book',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    adults: 2,
    children: 0,
    departureCity: pkg.departureCity.city,
    customNotes: '',
    mode: defaultMode,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.trim().length < 10) {
      alert('Please enter a valid 10-digit mobile number for instant quote and itinerary.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save to CloudStore CRM
      cloudStore.saveLead({
        name: formData.name || 'Valued Traveler',
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        destination: `${pkg.h1} (${formData.departureCity})`,
        budget: `₹${pkg.discountPrice.toLocaleString('en-IN')}/person`,
        travelersCount: formData.adults + formData.children,
        status: 'New',
        source: `Programmatic Package: /packages/${pkg.slug} [${formData.mode.toUpperCase()}]`,
      });

      // 2. Dispatch Email notification via Web3Forms API
      await sendWeb3FormLead({
        subject: `[Trip Customizer LEAD 🎯] ${formData.mode === 'customize' ? 'CUSTOMIZATION' : 'BOOKING'} - ${pkg.h1} (${formData.phone})`,
        name: formData.name || 'Valued Traveler',
        email: formData.email || 'inquiry@tripcustomizer.com',
        phone: formData.phone,
        destination: `${pkg.h1} from ${formData.departureCity}`,
        budget: `₹${pkg.discountPrice.toLocaleString('en-IN')}/person (${pkg.durationDays}D/${pkg.durationNights}N)`,
        notes: `Travel Date: ${formData.travelDate || 'Flexible'} | Adults: ${formData.adults}, Children: ${formData.children} | Departure: ${formData.departureCity} | Notes: ${formData.customNotes || 'Standard package inquiry'}`,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Lead submission note:', err);
      // Soft fail: show success to user so they are not blocked
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Trip Customizer! I am interested in booking: "${pkg.h1}" departing from ${formData.departureCity} at ₹${pkg.discountPrice.toLocaleString('en-IN')}/person. Please share quote and hotel details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-5 sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400 text-slate-900 flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 fill-slate-900" />
              {formData.mode === 'customize' ? 'Custom Itinerary Planner' : 'Direct Booking Inquiry'}
            </span>
            <span className="text-xs text-blue-100">
              {pkg.durationDays}D / {pkg.durationNights}N
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold leading-snug line-clamp-2">
            {pkg.h1}
          </h3>

          <div className="mt-2 flex items-center gap-4 text-xs text-blue-100">
            <span className="flex items-center gap-1">
              <Plane className="w-3.5 h-3.5 text-blue-200" />
              Ex-{pkg.departureCity.city}
            </span>
            <span className="font-semibold text-white">
              Starting at ₹{pkg.discountPrice.toLocaleString('en-IN')} / person
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Our destination specialist for <strong className="text-slate-900">{pkg.destination}</strong> has received your inquiry. We will contact you on WhatsApp / Phone within 15 minutes with customized quotation and seat availability.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/917408763401?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 text-slate-600 hover:text-slate-800 text-sm font-medium transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Departure & Mode Notice */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 flex items-start gap-2">
                <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Departure:</strong> {pkg.departureCity.airport}. Includes verified transfers and local destination coordinator.
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tentative Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Travelers */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Adult{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Children (Below 12 yrs)
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Child{num > 1 ? 'ren' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customization notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Requests / Custom Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Need vegetarian meals, 5-star hotel upgrade, private cab only, or extra nights?"
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 py-1 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Verified OTA
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Free Itinerary Customization
                </span>
                <span>No Spam Guarantee</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70 text-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-white" />
                    {formData.mode === 'customize' ? 'Request Customized Quote' : 'Confirm Booking Inquiry'}
                  </>
                )}
              </button>

              <div className="text-center">
                <a
                  href={`https://wa.me/917408763401?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 mt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Or connect instantly with an agent on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
