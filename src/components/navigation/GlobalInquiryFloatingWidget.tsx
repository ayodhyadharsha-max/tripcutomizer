'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';

export const GlobalInquiryFloatingWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show high-converting badge after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello Trip Customizer! I am on your website and would like a customized tour package quote with 4-star hotels and flights. Please share details.'
  );

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none select-none">
      {/* High-Converting Engagement Tooltip */}
      {showTooltip && !isDismissed && (
        <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-2xl border border-slate-700/80 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Close message"
            className="absolute -top-1.5 -right-1.5 bg-slate-700 text-slate-300 hover:text-white rounded-full p-0.5 shadow-md"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping mt-1 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-1">
                Travel Desk Online Now <Sparkles className="w-3 h-3 text-amber-400" />
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                Need a quick quote or customized itinerary? Chat on WhatsApp in 30 seconds.
              </p>
              <a
                href={`https://wa.me/917408763401?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Start WhatsApp Chat &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:+917408763401"
          aria-label="Call Senior Travel Desk"
          title="Call Senior Travel Desk: +91 7408763401"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white flex items-center justify-center shadow-lg hover:shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/917408763401?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Travel Specialist"
          title="Chat with Trip Customizer Travel Desk on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white group"
        >
          {/* Subtle Radar Pulse */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping -z-10" />
          <MessageCircle className="w-7 h-7 text-white fill-white/20" />
        </a>
      </div>
    </div>
  );
};
