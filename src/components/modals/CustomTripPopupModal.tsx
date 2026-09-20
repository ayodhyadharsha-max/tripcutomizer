'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Sparkles, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cloudStore } from '@/lib/cloudStore';
import { sendWeb3FormLead } from '@/lib/web3forms';
import { useAuth } from '@/context/AuthContext';

export const CustomTripPopupModal: React.FC = () => {
  const pathname = usePathname() || '';
  const { isLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadResult, setLeadResult] = useState<{
    leadId: string;
    assignedAgent: string;
    summary: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    destination: '',
    departureCity: 'New Delhi',
    travelDate: '',
    durationDays: '7',
    adults: 2,
    children: 0,
    needFlights: true,
    needHotels: true,
    needSightseeing: true,
    needTransfers: true,
    budget: '₹1,00,000 - ₹2,00,000',
    name: '',
    phone: '',
    email: '',
  });

  // Strict page filtering & timing control
  const isAdminPage = pathname.startsWith('/admin');
  const isAuthOrAccountPage = pathname.startsWith('/login') || pathname.startsWith('/account') || pathname.startsWith('/manage-booking');
  const isImportantTravelPage =
    pathname === '/' ||
    pathname.startsWith('/holidays') ||
    pathname.startsWith('/customize-trip') ||
    pathname.startsWith('/flights') ||
    pathname.startsWith('/hotels') ||
    pathname.startsWith('/visa') ||
    pathname.startsWith('/blog');

  useEffect(() => {
    // 1. NEVER show on admin pages, login/account pages, or for logged-in users
    if (isAdminPage || isAuthOrAccountPage || isLoggedIn || !isImportantTravelPage) {
      setIsOpen(false);
      return;
    }

    // 2. Check 7-day dismissal window & session dismissal
    const dismissedUntil = localStorage.getItem('tc_popup_dismissed_until');
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
      return;
    }

    if (sessionStorage.getItem('custom_trip_modal_dismissed')) {
      return;
    }

    // 3. Smart Trigger: 60s timer OR 40% scroll depth on important travel pages
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60 Seconds

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isLoggedIn, isAdminPage, isAuthOrAccountPage, isImportantTravelPage]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('custom_trip_modal_dismissed', 'true');
    localStorage.setItem('tc_popup_dismissed_until', String(Date.now() + 7 * 24 * 60 * 60 * 1000));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      cloudStore.saveLead({
        name: formData.name || 'Valued Client',
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination || 'Custom Trip',
        budget: formData.budget,
        travelDates: formData.travelDate,
        travelersCount: Number(formData.adults) + Number(formData.children),
        status: 'New',
        source: '1-Min Customized Trip Popup Modal',
      });

      sendWeb3FormLead({
        subject: `[Trip Customizer] 1-Min Popup Inquiry: ${formData.destination || 'Selected Destination'}`,
        name: formData.name || 'Valued Client',
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        budget: formData.budget,
        travelDate: formData.travelDate,
        travelers: `${formData.adults} Adults, ${formData.children} Children`,
      });

      const generatedId = `LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
      const agents = [
        'Rahul Sharma (Senior Travel Specialist)',
        'Priya Mehta (International Tour Manager)',
        'Amitabh Roy (Europe & Asia Specialist)',
      ];
      const randomAgent = agents[Math.floor(Math.random() * agents.length)];

      setLeadResult({
        leadId: generatedId,
        assignedAgent: randomAgent,
        summary: `Custom Trip to ${formData.destination || 'Selected Destination'} for ${formData.adults} Adults starting ${formData.travelDate || 'Upcoming Dates'}.`,
      });

      setIsSubmitting(false);
      sessionStorage.setItem('custom_trip_modal_dismissed', 'true');
      localStorage.setItem('tc_popup_dismissed_until', String(Date.now() + 7 * 24 * 60 * 60 * 1000));
    }, 600);
  };

  if (!isOpen || isAdminPage || isAuthOrAccountPage || isLoggedIn || !isImportantTravelPage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className="relative p-5 sm:p-6 bg-brand-900 text-white flex items-center justify-between shrink-0 overflow-hidden">
          {/* Subtle Background Image Overlay */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="/destinations/hero-holidays.jpg"
              alt="Customized Travel"
              fill
              sizes="800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/90 to-brand-950/80" />
          </div>

          <div className="relative z-10 space-y-1">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-slate-950" />
              <span>Tailor-Made Holidays</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Build Your Own Customized Itinerary
            </h3>
            <p className="text-slate-300 text-xs font-medium">
              Tell us your travel dream & budget. Get a personalized plan within 2 hours!
            </p>
          </div>

          <button
            onClick={handleClose}
            className="relative z-10 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {leadResult ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="bg-brand-50 text-brand-700 font-bold text-xs px-3 py-1 rounded-full inline-block">
                Lead ID: {leadResult.leadId}
              </span>
              <h4 className="text-2xl font-black text-slate-900">Itinerary Request Submitted!</h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">{leadResult.summary}</p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-1.5 max-w-md mx-auto">
                <p className="font-extrabold text-slate-900">Assigned Senior Travel Architect:</p>
                <p className="text-brand-600 font-bold">{leadResult.assignedAgent}</p>
                <p className="text-slate-500">Your agent is preparing your flight options, hotel tariffs, and activity voucher package.</p>
              </div>

              <Button onClick={handleClose} variant="primary" size="md" className="w-full sm:w-auto font-bold text-xs">
                Great, Thank You!
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Destination */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Switzerland, Kashmir, Maldives..."
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Travel Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Duration (Days)</label>
                  <select
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="3-5">3 - 5 Days</option>
                    <option value="7">7 Days (1 Week)</option>
                    <option value="10">10 Days</option>
                    <option value="14+">14+ Days</option>
                  </select>
                </div>

                {/* Total Budget */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Total Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                    <option value="₹2,00,000+">₹2,00,000+ (Luxury)</option>
                  </select>
                </div>

                {/* Contact Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Inclusions Selection */}
              <div className="pt-1">
                <label className="text-[11px] font-bold text-slate-600 block mb-1.5">Services Needed:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-slate-700">
                  <label className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needFlights}
                      onChange={(e) => setFormData({ ...formData, needFlights: e.target.checked })}
                      className="rounded text-brand-600"
                    />
                    <span>Flights</span>
                  </label>
                  <label className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needHotels}
                      onChange={(e) => setFormData({ ...formData, needHotels: e.target.checked })}
                      className="rounded text-brand-600"
                    />
                    <span>Hotels</span>
                  </label>
                  <label className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needSightseeing}
                      onChange={(e) => setFormData({ ...formData, needSightseeing: e.target.checked })}
                      className="rounded text-brand-600"
                    />
                    <span>Sightseeing</span>
                  </label>
                  <label className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needTransfers}
                      onChange={(e) => setFormData({ ...formData, needTransfers: e.target.checked })}
                      className="rounded text-brand-600"
                    />
                    <span>Transfers</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-extrabold text-xs sm:text-sm py-3 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Curating Your Itinerary...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Get Free Customized Plan & Call Back</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
