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

            {/* Right Mobile Phone Mockup Artwork */}
            <div className="md:col-span-5 relative flex justify-end items-center h-48">
              <div className="relative flex items-center justify-end w-full max-w-sm">
                {/* Secondary Back Phone */}
                <div className="absolute right-24 top-2 w-32 aspect-[9/18] bg-slate-900 rounded-[22px] border-2 border-slate-700 shadow-lg p-1 overflow-hidden transform -rotate-6 opacity-80">
                  <div className="w-full h-full bg-slate-950 rounded-[18px] p-2 text-white text-[7px] space-y-1.5">
                    <div className="bg-brand-600 p-1 rounded font-bold text-center">Customize Trip</div>
                    <div className="bg-slate-900 p-1 rounded border border-slate-800">
                      <div className="h-1.5 bg-amber-400 rounded w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Primary Front Phone showing Live Home Page */}
                <div className="relative z-10 w-36 sm:w-40 aspect-[9/18] bg-slate-950 rounded-[28px] border-3 border-slate-800 shadow-2xl p-1.5 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col text-slate-900">
                    {/* Mobile Header Bar */}
                    <div className="bg-white p-1.5 flex items-center justify-between border-b border-slate-100 shadow-2xs">
                      <div className="flex items-center space-x-1">
                        <img src="/logo-header.png" alt="Logo" className="h-3.5 w-auto object-contain" />
                        <span className="font-black text-[8px] text-slate-900">Trip Customizer</span>
                      </div>
                      <span className="bg-brand-600 text-white text-[6px] font-black px-1 py-0.2 rounded uppercase">
                        LIVE APP
                      </span>
                    </div>

                    {/* Live Home Page Mockup Content */}
                    <div className="p-1.5 space-y-1.5 flex-1 bg-slate-50 overflow-hidden text-[7px]">
                      {/* Mini Hero Banner */}
                      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-2 rounded-lg text-white shadow-xs relative overflow-hidden">
                        <span className="text-[6px] font-bold text-amber-300 block uppercase">CUSTOM HOLIDAYS</span>
                        <span className="font-black text-[8px] block leading-tight mt-0.5">Crafted Packages Worldwide</span>
                        <div className="mt-1 bg-white text-slate-900 px-1.5 py-0.5 rounded-full font-bold text-[6px] inline-block">
                          Search "Europe"...
                        </div>
                      </div>

                      {/* Mini Category Chips */}
                      <div className="grid grid-cols-3 gap-1">
                        <div className="bg-white p-1 rounded border border-slate-200 text-center font-extrabold text-[6px]">
                          🏖️ Holidays
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-200 text-center font-extrabold text-[6px]">
                          ✈️ Flights
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-200 text-center font-extrabold text-[6px]">
                          🏨 Hotels
                        </div>
                      </div>

                      {/* Featured Package Card */}
                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-slate-900">Bali 5D4N Villa</span>
                          <span className="text-emerald-600 font-bold">₹38,999</span>
                        </div>
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-brand-500 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Mini Bottom Navigation Bar */}
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
