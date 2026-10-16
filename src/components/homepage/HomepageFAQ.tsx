'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: 'Booking & Customization',
    question: 'How do I customize a tour package on Trip Customizer?',
    answer:
      'You can customize any trip by selecting your destination, choosing your preferred departure city, travel dates, and hotel tier (3-Star, 4-Star, or 5-Star Luxury). Alternatively, use our 1-Minute Custom Trip Wizard or message our travel desk directly on WhatsApp at +91 7408763401 for a customized day-by-day itinerary and transparent quote within 2 hours.',
  },
  {
    category: 'Spiritual Yatras',
    question: 'What spiritual and pilgrimage tour packages does Trip Customizer specialize in?',
    answer:
      'Trip Customizer specializes in sacred yatras across India including Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri) with helicopter options, Ayodhya Ram Mandir VIP Darshan & Saryu Aarti, Varanasi Kashi Vishwanath, Kailash Mansarovar, Dwarka Somnath, and Mathura Vrindavan. All packages include verified AC transport, hotel stays, puja assistance, and experienced yatra guides.',
  },
  {
    category: 'Inclusions & Visa',
    question: 'Are flights, hotel accommodations, and visa assistance included in packages?',
    answer:
      'Yes, 100%. Every Trip Customizer package can be bundled with return flights, verified 4-star/5-star hotel accommodations with daily breakfast, private sightseeing transfers, and complete step-by-step visa documentation assistance for Schengen, Dubai, Bali, Singapore, Thailand, and Vietnam.',
  },
  {
    category: 'Payment & Safety',
    question: 'What is the payment process and booking security on Trip Customizer?',
    answer:
      'Bookings are confirmed with a nominal advance token payment, with the remaining balance settled closer to departure. We accept UPI, Net Banking, Credit/Debit Cards, and EMI via Razorpay with 256-bit bank-grade encryption. Every booking comes with GST-compliant tax invoicing and guaranteed departure vouchers.',
  },
  {
    category: '24x7 Assistance',
    question: 'How do I reach Trip Customizer customer support during my journey?',
    answer:
      'Trip Customizer provides a dedicated 24x7 Travel Desk for every traveler. You receive an assigned relationship manager accessible via WhatsApp and Phone at +91 7408763401, as well as email at help@tripcustomizer.com for real-time flight updates, hotel check-in assistance, and emergency logistics support.',
  },
];

export const HomepageFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200" id="faqs">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200/60 text-brand-700 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-brand-600">Questions</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Everything you need to know about customizing holiday packages, spiritual yatras, pricing, and 24x7 travel desk support.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-brand-500 shadow-lg ring-1 ring-brand-500/20'
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-brand-50 text-brand-600 rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed speakable-content">
                      <p className="pt-3">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support CTA Card */}
          <div className="mt-10 bg-gradient-to-r from-brand-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-brand-800">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Need Personalized Help?</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black">
                Talk to a Senior Travel Specialist Today
              </h4>
              <p className="text-xs text-slate-300 max-w-md">
                Get a custom quote within 2 hours with flights, hotels, and day-by-day sightseeing.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/917408763401?text=Hi%20TripCustomizer%20Team,%20I%20need%20help%20customizing%20my%20holiday%20package."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-2xl font-bold text-xs flex items-center space-x-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+917408763401"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-2xl font-bold text-xs flex items-center space-x-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 7408763401</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
