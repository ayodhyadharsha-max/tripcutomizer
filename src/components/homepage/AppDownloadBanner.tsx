'use client';

import React from 'react';
import { Download, QrCode, Smartphone, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';

export const AppDownloadBanner: React.FC = () => {
  const handleDownloadAPK = () => {
    const link = document.createElement('a');
    link.href = '/TripCustomizer.apk';
    link.download = 'TripCustomizer.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.tripcustomizer.com/TripCustomizer.apk`;

  return (
    <section className="py-10 bg-slate-50">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 border border-brand-800/40 shadow-2xl p-6 sm:p-10 text-white">
          {/* Decorative Glowing Orbs & Waves */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 -mb-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-600/30 border border-brand-400/40 px-3.5 py-1.5 rounded-full text-amber-300 text-xs font-black tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Instant Mobile Experience</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight font-sans">
                  Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-amber-300">Trip Customizer App</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-medium mt-2">
                  Your Personal Travel Desk, Now in Your Pocket. Track Bookings, Download E-Vouchers & Pay via UPI Instantly.
                </p>
              </div>

              {/* Badges & QR Code Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                {/* Download Buttons Stack */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  {/* Google Play / Android APK Button */}
                  <button
                    onClick={handleDownloadAPK}
                    className="flex items-center space-x-3 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white px-5 py-3 rounded-2xl shadow-lg active:scale-95 transition-all text-left group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                      <Download className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block leading-none">
                        GET IT ON
                      </span>
                      <span className="text-sm font-black text-white block leading-tight mt-0.5">
                        Android APK Direct
                      </span>
                    </div>
                  </button>

                  {/* App Store Button */}
                  <button
                    onClick={handleDownloadAPK}
                    className="flex items-center space-x-3 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white px-5 py-3 rounded-2xl shadow-lg active:scale-95 transition-all text-left group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block leading-none">
                        DOWNLOAD ON THE
                      </span>
                      <span className="text-sm font-black text-white block leading-tight mt-0.5">
                        App Store (PWA)
                      </span>
                    </div>
                  </button>
                </div>

                {/* QR Code Card (Matching Thomas Cook) */}
                <div className="flex items-center space-x-3 bg-white text-slate-900 p-2.5 rounded-2xl shadow-xl border border-slate-100 flex-shrink-0">
                  <div className="w-20 h-20 bg-slate-50 p-1 rounded-xl border border-slate-200">
                    <img
                      src={qrCodeUrl}
                      alt="Scan QR to Download App"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <QrCode className="w-5 h-5 text-brand-600 mb-1" />
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      Scan QR
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 block leading-tight mt-0.5">
                      Instant APK Download
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="flex items-center space-x-6 pt-2 text-xs font-bold text-slate-400">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Virus & Malware Safe</span>
                </span>
                <span className="flex items-center space-x-1.5 text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Signed Build</span>
                </span>
              </div>
            </div>

            {/* Right Mobile Phone Mockup Column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-6 lg:pt-0">
              <div className="relative w-64 sm:w-72 aspect-[9/18] bg-slate-950 rounded-[40px] border-4 border-slate-800 shadow-2xl p-2.5 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950 mr-2" />
                  <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                </div>

                {/* Mobile Screen Mockup Content */}
                <div className="w-full h-full bg-slate-900 rounded-[32px] overflow-hidden flex flex-col pt-8 text-white relative">
                  {/* App Bar */}
                  <div className="bg-brand-900 p-3 flex items-center justify-between border-b border-brand-800">
                    <div className="flex items-center space-x-2">
                      <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain bg-white/10 p-0.5 rounded" />
                      <span className="font-black text-xs text-white">Trip Customizer</span>
                    </div>
                    <span className="bg-amber-400 text-slate-950 text-[8px] font-black px-1.5 py-0.5 rounded uppercase">
                      APP LIVE
                    </span>
                  </div>

                  {/* App Screen Highlights */}
                  <div className="p-3 space-y-3 flex-1 overflow-hidden bg-slate-950">
                    <div className="bg-gradient-to-r from-brand-600 to-indigo-600 p-3 rounded-xl text-white shadow-md">
                      <span className="text-[9px] font-bold text-sky-200 block uppercase">Customized Holiday Special</span>
                      <span className="font-black text-xs block mt-0.5">Bali 5D4N Luxury Villa</span>
                      <span className="text-[10px] text-amber-300 font-bold block mt-1">₹38,999/person • Flights Inc.</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold">
                        <span>INSTANT EVOUCHER</span>
                        <span className="text-emerald-400">CONFIRMED</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-brand-500 rounded-full" />
                      </div>
                    </div>

                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-300">24x7 Support Desk</span>
                      <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Bottom App Navigation */}
                  <div className="bg-slate-900 p-2 flex justify-around border-t border-slate-800 text-[9px] text-slate-400 font-bold">
                    <span className="text-brand-400 font-black">Explore</span>
                    <span>Bookings</span>
                    <span>Support</span>
                    <span>Account</span>
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
