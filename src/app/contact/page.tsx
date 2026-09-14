'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, Headphones } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Holiday Package Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white py-14 shadow-md">
        <Container>
          <div className="max-w-3xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider">
              24x7 Customer Support
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-3 tracking-tight leading-tight">
              We&apos;re Here to Help You Plan Your Dream Vacation
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Have questions about tour packages, flight bookings, or visa assistance? Our travel experts are available round the clock to guide you.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Quick Contact Cards */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Toll-Free Helpline</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Mon - Sun (9:00 AM - 9:00 PM)</p>
                  <a href="tel:18002099100" className="text-brand-600 font-black text-base hover:underline block mt-1">
                    1800-2099-100
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">WhatsApp Instant Chat</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Instant quotes & custom itineraries</p>
                  <a
                    href="https://wa.me/918291901377"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 font-black text-sm hover:underline block mt-1"
                  >
                    +91 82919 01377 →
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Official Email Support</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Response within 2 hours</p>
                  <a href="mailto:support@tripcustomizer.com" className="text-slate-800 font-bold text-xs hover:underline block mt-1">
                    support@tripcustomizer.com
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Address */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-slate-900 font-black text-sm">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span>Head Office Address</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                tripcustomizer House, Plot 42, Sector 18, Commercial Hub, Gurugram, NCR Delhi – 122002, India.
              </p>
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Walk-in Hours: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Message Received Successfully!</h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out to tripcustomizer. Our Senior Travel Specialist will get in touch with you via phone/WhatsApp within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Send Us a Direct Message</h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Fill in your query details below and our travel team will respond promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Topic / Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50 font-medium"
                      >
                        <option value="Holiday Package Inquiry">Holiday Package Inquiry</option>
                        <option value="Booking Status & Voucher">Booking Status & Voucher</option>
                        <option value="Custom Trip Planning">Custom Trip Planning</option>
                        <option value="Flight & Hotel Cancellation">Flight & Hotel Cancellation</option>
                        <option value="Corporate / Group Booking">Corporate / Group Booking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Query *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your preferred destination, travel dates, or any special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 rounded-2xl text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry Now →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
