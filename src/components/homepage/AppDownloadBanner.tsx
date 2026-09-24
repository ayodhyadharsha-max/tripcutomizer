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
          {/* Right Colorful Circles & Logo Background Photo */}
          <div className="absolute right-0 top-0 bottom-0 w-7/12 pointer-events-none overflow-hidden hidden md:block">
            {/* Colorful Thomas Cook style background shapes */}
            <div className="absolute -right-12 -top-12 w-96 h-96 bg-brand-500 rounded-full opacity-95" />
            <div className="absolute right-28 -bottom-24 w-80 h-80 bg-amber-400 rounded-full opacity-95" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-sky-400 rounded-full opacity-90" />
            
            {/* Background Logo Photo Overlay */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 transform rotate-[-12deg] scale-125">
              <img src="/logo-dark.png" alt="Background Logo Artwork" className="h-40 w-auto object-contain" />
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-4">
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
                {/* App Store Button */}
                <button
                  onClick={handleDownloadAPK}
                  className="flex items-center space-x-2.5 bg-slate-950 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-92.1zM273.8 80.6c23.6-28.5 38.6-67.6 34.3-106.6-33.6 1.8-74.6 22.7-98.2 50.8-21 24.3-39.7 64.2-34.8 102.1 37.6 2.9 75.1-17.8 98.7-46.3z" />
                  </svg>
                  <div className="text-left">
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block leading-none">
                      Download on the
                    </span>
                    <span className="text-xs font-black text-white block leading-tight mt-0.5">
                      App Store
                    </span>
                  </div>
                </button>

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

            {/* Right Overlapping Mobile Phones Artwork */}
            <div className="md:col-span-5 relative flex justify-end items-center h-44 sm:h-52">
              <div className="relative flex items-center justify-end w-full max-w-sm">
                {/* Secondary Phone Mockup */}
                <div className="absolute right-28 top-4 w-36 aspect-[9/18] bg-slate-900 rounded-[24px] border-2 border-slate-700 shadow-xl p-1 overflow-hidden transform -rotate-6">
                  <div className="w-full h-full bg-slate-950 rounded-[20px] overflow-hidden p-2 text-white text-[8px]">
                    <div className="bg-brand-600 p-1.5 rounded-lg text-center font-bold">
                      Hotels & Flights
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="h-2 bg-slate-800 rounded" />
                      <div className="h-2 bg-slate-800 rounded w-3/4" />
                    </div>
                  </div>
                </div>

                {/* Primary Phone Mockup (Front) */}
                <div className="relative z-10 w-44 aspect-[9/18] bg-slate-950 rounded-[28px] border-3 border-slate-800 shadow-2xl p-1.5 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-full bg-slate-900 rounded-[24px] overflow-hidden flex flex-col text-white">
                    {/* App Header */}
                    <div className="bg-brand-900 p-2 flex items-center space-x-1 border-b border-brand-800">
                      <img src="/logo-dark.png" alt="Logo" className="h-4 w-auto object-contain" />
                    </div>
                    {/* App Screen Content */}
                    <div className="p-2 space-y-2 flex-1 bg-slate-950">
                      <div className="bg-gradient-to-r from-brand-600 to-sky-600 p-2 rounded-lg text-[9px]">
                        <span className="font-black block">Custom Holidays</span>
                        <span className="text-[7px] text-amber-300 block">50+ Countries</span>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded border border-slate-800 text-[8px] flex items-center justify-between">
                        <span>Instant Voucher</span>
                        <span className="text-emerald-400 font-bold">Active</span>
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
