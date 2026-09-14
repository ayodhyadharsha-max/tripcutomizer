'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, MapPin, Calendar, Users, Wallet, Sparkles, Loader2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cloudStore } from '@/lib/cloudStore';
import { sendWeb3FormLead } from '@/lib/web3forms';

export const BuildTripWizard: React.FC = () => {
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
    specialRequirements: '',
    name: '',
    phone: '',
    email: '',
  });

  const [leadResult, setLeadResult] = useState<{
    leadId: string;
    assignedAgent: string;
    summary: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
        source: 'Custom Trip Wizard',
      });

      sendWeb3FormLead({
        subject: `[tripcustomizer] Custom Trip Inquiry: ${formData.destination || 'Selected Destination'}`,
        name: formData.name || 'Valued Client',
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        budget: formData.budget,
        travelDate: formData.travelDate,
        travelers: `${formData.adults} Adults, ${formData.children} Children`,
        specialRequirements: formData.specialRequirements,
      });

      const generatedId = `LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
      const agents = ['Rahul Sharma (Senior Travel Specialist)', 'Priya Mehta (International Tour Manager)', 'Amitabh Roy (Europe Specialist)'];
      const randomAgent = agents[Math.floor(Math.random() * agents.length)];

      setLeadResult({
        leadId: generatedId,
        assignedAgent: randomAgent,
        summary: `Custom Trip to ${formData.destination || 'Selected Destination'} for ${formData.adults} Adults, ${formData.children} Children starting ${formData.travelDate || 'Upcoming Dates'}.`,
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="inline-flex items-center space-x-1.5 bg-accent-500/20 text-accent-400 border border-accent-500/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailor-Made Holidays</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Build Your Own Customized Itinerary
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Tell us your travel dream and budget. Our senior travel architects will curate a personalized day-by-day plan with custom pricing within 2 hours.
          </p>
        </div>

        {leadResult ? (
          <Card className="max-w-2xl mx-auto p-8 bg-white text-slate-900 text-center rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="bg-brand-50 text-brand-700 font-bold text-xs px-3 py-1 rounded-full inline-block mb-2">
              Lead ID: {leadResult.leadId}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Request Submitted Successfully!</h3>
            <p className="text-slate-600 text-sm mb-6">{leadResult.summary}</p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2 mb-6">
              <p className="font-bold text-slate-900">Assigned Travel Agent Desk:</p>
              <p className="text-brand-600 font-semibold">{leadResult.assignedAgent}</p>
              <p className="text-slate-500">Your agent is preparing your flight options, hotel tariffs, and activity voucher package.</p>
            </div>

            <Button
              onClick={() => setLeadResult(null)}
              variant="outline"
              size="md"
              className="text-xs"
            >
              Build Another Itinerary
            </Button>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto bg-white text-slate-900 p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Destination */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Switzerland & France"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Departure City */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Departure City</label>
                  <input
                    type="text"
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Duration (Days)</label>
                  <select
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="3-5">3 - 5 Days</option>
                    <option value="7">7 Days (1 Week)</option>
                    <option value="10">10 Days</option>
                    <option value="14+">14+ Days</option>
                  </select>
                </div>

                {/* Adults */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Adults (12+ Yrs)</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Total Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                    <option value="₹2,00,000+">₹2,00,000+ (Luxury)</option>
                  </select>
                </div>
              </div>

              {/* Inclusions Selection Checkboxes */}
              <div className="pt-2">
                <label className="text-xs font-bold text-slate-700 block mb-2">What Services Do You Need Included?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-700">
                  <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needFlights}
                      onChange={(e) => setFormData({ ...formData, needFlights: e.target.checked })}
                      className="rounded text-brand-500"
                    />
                    <span>Flights</span>
                  </label>

                  <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needHotels}
                      onChange={(e) => setFormData({ ...formData, needHotels: e.target.checked })}
                      className="rounded text-brand-500"
                    />
                    <span>Hotels & Stays</span>
                  </label>

                  <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needSightseeing}
                      onChange={(e) => setFormData({ ...formData, needSightseeing: e.target.checked })}
                      className="rounded text-brand-500"
                    />
                    <span>Sightseeing & Tours</span>
                  </label>

                  <label className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needTransfers}
                      onChange={(e) => setFormData({ ...formData, needTransfers: e.target.checked })}
                      className="rounded text-brand-500"
                    />
                    <span>Private Transfers</span>
                  </label>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} variant="accent" size="lg" className="w-full py-4 text-slate-950 font-black text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                    <span>Curating Your Itinerary & Free Quote...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> BUILD MY TRIP & GET FREE QUOTE
                  </>
                )}
              </Button>
            </form>
          </Card>
        )}
      </Container>
    </section>
  );
};
