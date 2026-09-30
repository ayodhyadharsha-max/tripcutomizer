'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Smartphone, QrCode, ArrowDownToLine, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const AppDownloadBanner: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadAPK = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setDownloadStarted(true);

    const link = document.createElement('a');
    link.href = '/TripCustomizer.apk';
    link.download = 'TripCustomizer.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadStarted(false);
    }, 5000);
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.tripcustomizer.com/TripCustomizer.apk`;

  return (
    <section className="py-6 sm:py-10 bg-slate-50">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-950 via-brand-900 to-slate-900 border border-brand-800 shadow-2xl p-6 sm:p-10 text-white">
          {/* Background Decorative Accent Orbs */}
          <div className="absolute right-0 top-0 bottom-0 w-7/12 pointer-events-none overflow-hidden hidden md:block opacity-30">
            <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-500 rounded-full blur-3xl" />
            <div className="absolute right-24 -bottom-28 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title, Buttons & QR Scanner Box */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Mobile App (v2.0 Live)</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  Download <span className="text-amber-400 font-black">Trip Customizer App</span>
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-medium mt-2 max-w-lg leading-relaxed">
                  Your personal travel desk in your pocket. Unlock 30% app-only flight discounts, offline itinerary vouchers, and 24x7 travel desk support.
                </p>
              </div>

              {/* Instant Download Feedback Toast */}
              {downloadStarted && (
                <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center space-x-2.5 animate-bounce">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Download Started! Downloading <strong>TripCustomizer.apk (1.8 MB)</strong> directly...</span>
                </div>
              )}

              {/* Direct Buttons & Scanner Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* 1. Direct APK Download Button (Primary CTA) */}
                <button
                  onClick={handleDownloadAPK}
                  className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 px-5 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center space-x-3 shadow-xl transition-all cursor-pointer group"
                >
                  <ArrowDownToLine className="w-5 h-5 text-slate-950 group-hover:translate-y-0.5 transition-transform shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">
                      INSTANT DIRECT APK
                    </span>
                    <span className="block text-xs font-black text-slate-950">
                      Download App Now (1.8 MB)
                    </span>
                  </div>
                </button>

                {/* 2. Google Play Store Button */}
                <button
                  onClick={handleDownloadAPK}
                  className="bg-slate-950 hover:bg-slate-900 border border-white/20 active:scale-95 text-white px-5 py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center space-x-3 shadow-lg transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current text-emerald-400 shrink-0" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block leading-none">
                      GET IT ON
                    </span>
                    <span className="text-xs font-black text-white block mt-0.5">
                      Google Play Store
                    </span>
                  </div>
                </button>

                {/* 3. High Resolution QR Scanner Card */}
                <div
                  onClick={handleDownloadAPK}
                  title="Click or Scan QR code to download TripCustomizer.apk"
                  className="bg-white text-slate-900 p-2.5 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-200 cursor-pointer hover:border-amber-400 transition-colors group shrink-0"
                >
                  <div className="relative p-1 bg-slate-900 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={qrCodeUrl}
                      alt="Scan QR Code to Download App"
                      className="w-12 h-12 object-contain bg-white p-1 rounded-lg"
                    />
                    <div className="absolute inset-0 border-2 border-amber-400 rounded-xl pointer-events-none opacity-80" />
                  </div>
                  <div className="pr-2 text-left">
                    <div className="flex items-center space-x-1 text-slate-900">
                      <QrCode className="w-3.5 h-3.5 text-brand-600" />
                      <span className="text-xs font-black uppercase tracking-tight">Scan QR</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold block leading-tight mt-0.5">
                      Point Camera to Install
                    </span>
                    <span className="text-[9px] text-emerald-600 font-bold block mt-0.5 group-hover:underline">
                      Tap to Download ↓
                    </span>
                  </div>
                </div>
              </div>

              {/* Safety Features Footer Badges */}
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-1 font-medium">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Secure & Verified APK</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Android 8.0 & Above Supported</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Smartphones Mockups */}
            <div className="lg:col-span-5 relative flex justify-center items-center h-64 sm:h-72">
              <div className="relative flex items-center justify-center w-full max-w-sm h-full">

                {/* Left Back Phone (Holidays Screen) */}
                <div className="absolute -left-2 sm:left-2 top-3 w-28 sm:w-32 aspect-[9/18] bg-slate-900 rounded-[22px] border-2 border-slate-700 shadow-xl p-1 overflow-hidden transform -rotate-12 hover:-rotate-6 transition-all duration-300">
                  <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden flex flex-col text-slate-900 text-[6px]">
                    {/* Status Bar */}
                    <div className="bg-slate-900 text-white px-1.5 py-0.5 flex justify-between items-center text-[5px] font-mono shrink-0">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <span>5G</span>
                        <div className="w-2 h-1 bg-emerald-400 rounded-xs" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="bg-white px-1.5 py-1 border-b border-slate-200 flex items-center justify-between shrink-0 shadow-2xs">
                      <span className="font-extrabold text-[7px] text-slate-900 flex items-center gap-1">
                        <span>🏖️</span> Holidays
                      </span>
                      <span className="bg-brand-50 text-brand-700 font-bold text-[5px] px-1 py-0.2 rounded border border-brand-200">
                        120+ Packages
                      </span>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex gap-1 p-1 bg-slate-100 overflow-x-auto shrink-0 scrollbar-none">
                      <span className="bg-brand-600 text-white px-1.5 py-0.3 rounded-full font-bold text-[5px]">Honeymoon</span>
                      <span className="bg-white text-slate-600 border border-slate-200 px-1.5 py-0.3 rounded-full font-medium text-[5px]">Luxury</span>
                    </div>

                    {/* Main Screen Content */}
                    <div className="p-1 space-y-1 overflow-hidden flex-1">
                      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs">
                        <div className="relative h-12">
                          <img src="/destinations/switzerland.jpg" alt="Swiss" className="w-full h-full object-cover" />
                          <span className="absolute top-1 left-1 bg-amber-400 text-slate-950 font-black text-[5px] px-1 rounded shadow-2xs">
                            Top Rated
                          </span>
                        </div>
                        <div className="p-1">
                          <div className="font-bold text-slate-900 text-[6px] truncate">Switzerland Alpine Magic</div>
                          <div className="flex justify-between items-center mt-0.5">
                            <span className="text-slate-500 text-[5px]">5N / 6D</span>
                            <span className="font-black text-brand-600 text-[6.5px]">₹ 89,999</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="p-1 bg-white border-t border-slate-200 shrink-0">
                      <div className="bg-brand-600 text-white text-[6px] font-black py-0.8 text-center rounded-md shadow-xs">
                        Explore Holiday Deals →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Back Phone (Flight Screen) */}
                <div className="absolute -right-2 sm:right-2 top-3 w-28 sm:w-32 aspect-[9/18] bg-slate-900 rounded-[22px] border-2 border-slate-700 shadow-xl p-1 overflow-hidden transform rotate-12 hover:rotate-6 transition-all duration-300">
                  <div className="w-full h-full bg-slate-50 rounded-[18px] overflow-hidden flex flex-col text-slate-900 text-[6px]">
                    {/* Status Bar */}
                    <div className="bg-slate-900 text-white px-1.5 py-0.5 flex justify-between items-center text-[5px] font-mono shrink-0">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <span>5G</span>
                        <div className="w-2 h-1 bg-emerald-400 rounded-xs" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="bg-white px-1.5 py-1 border-b border-slate-200 flex items-center justify-between shrink-0 shadow-2xs">
                      <span className="font-extrabold text-[7px] text-slate-900 flex items-center gap-1">
                        <span>✈️</span> Flight & Trip
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 font-bold text-[5px] px-1 py-0.2 rounded border border-emerald-200">
                        ✓ Instant Booking
                      </span>
                    </div>

                    {/* Screen Content */}
                    <div className="p-1 space-y-1 overflow-hidden flex-1">
                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                          <div>
                            <span className="font-black text-slate-900 text-[7px] block">DEL</span>
                            <span className="text-[5px] text-slate-500">Delhi</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[5px] text-brand-600 font-bold">✈️ Direct</span>
                          </div>
                          <div className="text-right">
                            <span className="font-black text-slate-900 text-[7px] block">DPS</span>
                            <span className="text-[5px] text-slate-500">Bali</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="p-1 bg-white border-t border-slate-200 shrink-0">
                      <div className="bg-slate-900 text-white text-[6px] font-black py-0.8 text-center rounded-md shadow-xs">
                        Get Custom PDF Quote
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Front Phone (App Home Screen) */}
                <div className="relative z-20 w-32 sm:w-36 aspect-[9/18] bg-slate-950 rounded-[26px] border-3 border-slate-800 shadow-2xl p-1 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col text-slate-900 text-[6.5px]">
                    <div className="bg-white px-2 py-0.5 flex justify-between items-center text-[5px] font-mono shrink-0 border-b border-slate-100">
                      <span className="font-bold text-slate-900">9:41</span>
                      <div className="w-8 h-2 bg-slate-950 rounded-b-md mx-auto -mt-1 shadow-2xs" />
                      <div className="flex items-center space-x-1">
                        <span className="font-bold text-slate-900">5G</span>
                        <div className="w-2 h-1 bg-slate-900 rounded-xs" />
                      </div>
                    </div>

                    <div className="bg-white px-1.5 py-1 flex items-center justify-between border-b border-slate-100 shadow-2xs shrink-0">
                      <div className="flex items-center space-x-1">
                        <img src="/logo-header.png" alt="Trip Customizer" className="h-3.5 w-auto object-contain" />
                        <span className="font-black text-[7.5px] text-slate-950 tracking-tight">Trip Customizer</span>
                      </div>
                      <span className="bg-brand-600 text-white text-[5px] font-black px-1.5 py-0.3 rounded-full uppercase shadow-2xs">
                        APP LIVE
                      </span>
                    </div>

                    <div className="p-1 space-y-1 flex-1 bg-slate-50 overflow-hidden text-[6px]">
                      <div className="bg-white p-1 px-1.5 rounded-full border border-slate-200 text-slate-400 text-[5.5px] font-semibold shadow-2xs flex items-center justify-between">
                        <span>Search "Europe", "Bali"...</span>
                        <span className="text-brand-600 font-black text-[7px]">🔍</span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center text-[5px] font-extrabold text-slate-700 py-0.5">
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">🏖️ Holidays</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">✈️ Flights</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">🏨 Hotels</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">✨ Custom</div>
                      </div>

                      <div className="relative rounded-lg overflow-hidden h-16 shadow-xs border border-slate-200">
                        <img src="/destinations/honeymoon-hero.jpg" alt="Crafted Packages" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-1.5 flex flex-col justify-end text-white">
                          <span className="bg-amber-400 text-slate-950 font-black text-[4.5px] px-1 py-0.2 rounded w-max mb-0.5">
                            30% OFF APP SPECIAL
                          </span>
                          <span className="font-black text-[7px] leading-tight text-white">Custom Tour Packages</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white px-1 py-1 flex justify-around items-center border-t border-slate-200 text-[5px] font-bold text-slate-500 shrink-0">
                      <div className="flex flex-col items-center text-brand-600">
                        <span>🏠</span>
                        <span className="font-black text-[4.5px]">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>🏖️</span>
                        <span className="text-[4.5px]">Trips</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center -mt-2 shadow-sm text-[7px] font-black border-2 border-white">
                        +
                      </div>
                      <div className="flex flex-col items-center">
                        <span>👤</span>
                        <span className="text-[4.5px]">Account</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
