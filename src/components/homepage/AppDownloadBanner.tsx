'use client';

import React from 'react';
import { Container } from '../ui/Container';

export const AppDownloadBanner: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isMobile || isStandalone) {
      setIsMobileDevice(true);
    }
  }, []);

  if (isMobileDevice) return null;

  const handleDownloadAPK = () => {
    const link = document.createElement('a');
    link.href = '/TripCustomizer.apk';
    link.download = 'TripCustomizer.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.tripcustomizer.com/TripCustomizer.apk`;

  return (
    <section className="hidden lg:block py-6 bg-slate-50">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#edf5ff] border border-sky-100 shadow-sm p-6 sm:p-8 text-slate-900">
          {/* Right Colorful Abstract Background Shapes */}
          <div className="absolute right-0 top-0 bottom-0 w-7/12 pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-500 rounded-full opacity-90" />
            <div className="absolute right-24 -bottom-28 w-80 h-80 bg-amber-400 rounded-full opacity-90" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-sky-400 rounded-full opacity-85" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-sans leading-tight">
                  Download <span className="text-brand-600 font-black">Trip Customizer App</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                  Your Personal Travel Desk, Now in Your Pocket
                </p>
              </div>

              {/* Badges & QR Code Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Google Play / Android APK Button */}
                <button
                  onClick={handleDownloadAPK}
                  className="flex items-center space-x-2.5 bg-slate-950 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block leading-none">
                      GET IT ON
                    </span>
                    <span className="text-xs font-black text-white block leading-tight mt-0.5">
                      Google Play
                    </span>
                  </div>
                </button>

                {/* Scan QR Code Card */}
                <div className="flex items-center space-x-2.5 bg-white text-slate-900 p-1.5 px-3 rounded-xl shadow-sm border border-slate-200">
                  <img
                    src={qrCodeUrl}
                    alt="Scan QR"
                    className="w-10 h-10 object-contain rounded"
                  />
                  <div className="pr-1 text-left">
                    <span className="text-xs font-black text-slate-900 block leading-tight">
                      Scan QR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Overlapping 3D Smartphones Mockups for Trip Customizer */}
            <div className="md:col-span-6 relative flex justify-end items-center h-52 sm:h-60">
              <div className="relative flex items-center justify-center w-full max-w-md h-full">

                {/* Left Back Phone (Hotels Screen) */}
                <div className="absolute left-2 sm:left-4 top-3 w-32 sm:w-36 aspect-[9/19] bg-slate-950 rounded-[24px] border-2 border-slate-800 shadow-xl p-1 overflow-hidden transform -rotate-12 hover:-rotate-6 transition-all duration-300">
                  <div className="w-full h-full bg-slate-900 rounded-[20px] overflow-hidden flex flex-col text-white text-[7px]">
                    <div className="bg-brand-600 p-1.5 flex items-center justify-between">
                      <span className="font-bold text-[8px]">🏨 Hotels</span>
                      <span className="text-[6px] text-amber-300 font-bold">4-Star Stay</span>
                    </div>
                    <div className="p-1.5 space-y-1.5 flex-1 bg-slate-950">
                      <div className="bg-slate-900 p-1 rounded border border-slate-800 space-y-0.5">
                        <span className="text-[6px] text-slate-400 block">DESTINATION</span>
                        <span className="font-bold block text-white text-[7px]">Goa Beach Resort</span>
                      </div>
                      <div className="bg-slate-900 p-1 rounded border border-slate-800 space-y-0.5">
                        <span className="text-[6px] text-slate-400 block">DATES</span>
                        <span className="font-bold block text-amber-400 text-[7px]">24 Oct - 28 Oct</span>
                      </div>
                      <div className="bg-brand-600 p-1 rounded text-center font-black text-[7px] text-white">
                        Search Hotels
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Back Phone (Flights / Custom Trip Screen) */}
                <div className="absolute right-2 sm:right-4 top-3 w-32 sm:w-36 aspect-[9/19] bg-slate-950 rounded-[24px] border-2 border-slate-800 shadow-xl p-1 overflow-hidden transform rotate-12 hover:rotate-6 transition-all duration-300">
                  <div className="w-full h-full bg-slate-900 rounded-[20px] overflow-hidden flex flex-col text-white text-[7px]">
                    <div className="bg-brand-600 p-1.5 flex items-center justify-between">
                      <span className="font-bold text-[8px]">✈️ Flights</span>
                      <span className="text-[6px] text-emerald-400 font-bold">Best Fares</span>
                    </div>
                    <div className="p-1.5 space-y-1.5 flex-1 bg-slate-950">
                      <div className="bg-slate-900 p-1 rounded border border-slate-800 space-y-0.5">
                        <span className="text-[6px] text-slate-400 block">FROM / TO</span>
                        <span className="font-bold block text-white text-[7px]">DEL ➔ DPS (Bali)</span>
                      </div>
                      <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded border border-emerald-500/40 text-[6px] font-bold">
                        ✓ INSTANT E-VOUCHER
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Front Phone (Trip Customizer Main App Screen) */}
                <div className="relative z-20 w-36 sm:w-40 aspect-[9/19] bg-slate-950 rounded-[26px] border-3 border-slate-800 shadow-2xl p-1 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col text-slate-900">
                    {/* Header Bar */}
                    <div className="bg-white p-1.5 flex items-center justify-between border-b border-slate-100 shadow-2xs">
                      <div className="flex items-center space-x-1">
                        <img src="/logo-header.png" alt="Trip Customizer" className="h-3.5 w-auto object-contain" />
                        <span className="font-black text-[8px] text-slate-900">Trip Customizer</span>
                      </div>
                    </div>

                    {/* App Screen Highlights */}
                    <div className="p-1.5 space-y-1.5 flex-1 bg-slate-50 overflow-hidden text-[7px]">
                      {/* Search Bar */}
                      <div className="bg-white p-1 rounded-full border border-slate-200 text-slate-400 text-[6px] font-semibold shadow-2xs flex items-center justify-between px-2">
                        <span>Enter Destination...</span>
                        <span className="text-brand-600 font-black">🔍</span>
                      </div>

                      {/* Promo Offer Card */}
                      <div className="bg-gradient-to-r from-brand-600 to-sky-600 p-1.5 rounded-lg text-white shadow-xs">
                        <span className="text-[6px] font-bold text-amber-300 uppercase block">TIME TO TRAVEL</span>
                        <span className="font-black text-[8px] block">SPECIAL OFFER 50% OFF</span>
                      </div>

                      {/* Package Card */}
                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 space-y-0.5 shadow-2xs">
                        <span className="font-black text-slate-900 text-[7px] block">Bali 5D4N Luxury Villa</span>
                        <span className="text-brand-600 font-extrabold text-[7px] block">₹38,999/person</span>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-white p-1 flex justify-around items-center border-t border-slate-200 text-[6px] font-bold text-slate-500">
                      <span className="text-amber-500 font-black">Home</span>
                      <span>Trips</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-600 text-white flex items-center justify-center -mt-2 shadow-xs">
                        +
                      </div>
                      <span>Wishlist</span>
                      <span>Account</span>
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
