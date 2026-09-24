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
          {/* Right Colorful Background Accent Shapes */}
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
                    <span className="text-[9px] text-slate-500 font-medium block">
                      To Install App
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Overlapping 3D Smartphones Mockups - Real App Screens */}
            <div className="md:col-span-6 relative flex justify-end items-center h-64 sm:h-72">
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
                      <span className="bg-white text-slate-600 border border-slate-200 px-1.5 py-0.3 rounded-full font-medium text-[5px]">Beach</span>
                    </div>

                    {/* Main Screen Content */}
                    <div className="p-1 space-y-1 overflow-hidden flex-1">
                      {/* Package Card 1 */}
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
                            <span className="text-slate-500 text-[5px]">5 Nights / 6 Days</span>
                            <span className="font-black text-brand-600 text-[6.5px]">₹ 89,999</span>
                          </div>
                        </div>
                      </div>

                      {/* Package Card 2 */}
                      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs">
                        <div className="relative h-11">
                          <img src="/destinations/maldives.jpg" alt="Maldives" className="w-full h-full object-cover" />
                          <span className="absolute top-1 left-1 bg-emerald-500 text-white font-black text-[5px] px-1 rounded shadow-2xs">
                            Water Villa
                          </span>
                        </div>
                        <div className="p-1">
                          <div className="font-bold text-slate-900 text-[6px] truncate">Maldives Premium Stay</div>
                          <div className="flex justify-between items-center mt-0.5">
                            <span className="text-slate-500 text-[5px]">4 Nights All Inc.</span>
                            <span className="font-black text-brand-600 text-[6.5px]">₹ 45,500</span>
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

                {/* Right Back Phone (Flight & Custom Trip Builder Screen) */}
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
                      {/* Flight Route Box */}
                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                          <div>
                            <span className="font-black text-slate-900 text-[7px] block">DEL</span>
                            <span className="text-[5px] text-slate-500">New Delhi</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[5px] text-brand-600 font-bold">✈️ Non-Stop</span>
                            <span className="text-[4.5px] text-slate-400">5h 30m</span>
                          </div>
                          <div className="text-right">
                            <span className="font-black text-slate-900 text-[7px] block">DPS</span>
                            <span className="text-[5px] text-slate-500">Bali</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-[5.5px] font-semibold text-slate-600">24 Oct - 29 Oct</span>
                          <span className="font-extrabold text-emerald-600 text-[6.5px]">₹ 22,400</span>
                        </div>
                      </div>

                      {/* Included Hotel Card */}
                      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs">
                        <div className="relative h-11">
                          <img src="/destinations/dubai.jpg" alt="Dubai Hotel" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent p-1 flex items-end">
                            <span className="text-white font-extrabold text-[5.5px]">5★ Beach Resort Included</span>
                          </div>
                        </div>
                        <div className="p-1 flex justify-between items-center">
                          <span className="text-slate-500 text-[5px]">Breakfast + Transfer</span>
                          <span className="bg-brand-100 text-brand-800 font-bold text-[5px] px-1 py-0.2 rounded">Included</span>
                        </div>
                      </div>

                      {/* Customization Note */}
                      <div className="bg-amber-50 border border-amber-200 p-1 rounded-md text-amber-900 text-[5px]">
                        <span className="font-bold">✨ Customize Itinerary:</span> Add extra days, flights or activities easily.
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

                {/* Center Front Phone (Main Website Home Screen) */}
                <div className="relative z-20 w-32 sm:w-36 aspect-[9/18] bg-slate-950 rounded-[26px] border-3 border-slate-800 shadow-2xl p-1 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col text-slate-900 text-[6.5px]">

                    {/* Notch & Status Bar */}
                    <div className="bg-white px-2 py-0.5 flex justify-between items-center text-[5px] font-mono shrink-0 border-b border-slate-100">
                      <span className="font-bold text-slate-900">9:41</span>
                      <div className="w-8 h-2 bg-slate-950 rounded-b-md mx-auto -mt-1 shadow-2xs" />
                      <div className="flex items-center space-x-1">
                        <span className="font-bold text-slate-900">5G</span>
                        <div className="w-2 h-1 bg-slate-900 rounded-xs" />
                      </div>
                    </div>

                    {/* Mobile Header Bar */}
                    <div className="bg-white px-1.5 py-1 flex items-center justify-between border-b border-slate-100 shadow-2xs shrink-0">
                      <div className="flex items-center space-x-1">
                        <img src="/logo-header.png" alt="Trip Customizer" className="h-3.5 w-auto object-contain" />
                        <span className="font-black text-[7.5px] text-slate-950 tracking-tight">Trip Customizer</span>
                      </div>
                      <span className="bg-brand-600 text-white text-[5px] font-black px-1.5 py-0.3 rounded-full uppercase shadow-2xs">
                        APP LIVE
                      </span>
                    </div>

                    {/* App Main Home Screen Content */}
                    <div className="p-1 space-y-1 flex-1 bg-slate-50 overflow-hidden text-[6px]">
                      {/* Search Bar */}
                      <div className="bg-white p-1 px-1.5 rounded-full border border-slate-200 text-slate-400 text-[5.5px] font-semibold shadow-2xs flex items-center justify-between">
                        <span>Search "Europe", "Bali", "Dubai"...</span>
                        <span className="text-brand-600 font-black text-[7px]">🔍</span>
                      </div>

                      {/* Category Icons Row */}
                      <div className="grid grid-cols-4 gap-1 text-center text-[5px] font-extrabold text-slate-700 py-0.5">
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">🏖️ Holidays</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">✈️ Flights</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">🏨 Hotels</div>
                        <div className="bg-white p-1 rounded-md border border-slate-200 shadow-2xs">✨ Custom</div>
                      </div>

                      {/* Main Hero Banner with Real Honeymoon Photo */}
                      <div className="relative rounded-lg overflow-hidden h-16 shadow-xs border border-slate-200">
                        <img
                          src="/destinations/honeymoon-hero.jpg"
                          alt="Crafted Tour Packages"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-1.5 flex flex-col justify-end text-white">
                          <span className="bg-amber-400 text-slate-950 font-black text-[4.5px] px-1 py-0.2 rounded w-max mb-0.5">
                            SPECIAL OFFER 30% OFF
                          </span>
                          <span className="font-black text-[7px] leading-tight text-white">Crafted Tour Packages</span>
                          <span className="text-amber-300 font-extrabold text-[6px]">Starting @ ₹ 14,999</span>
                        </div>
                      </div>

                      {/* Featured Bali Package Card */}
                      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs p-1 flex items-center space-x-1.5">
                        <img
                          src="/destinations/bali.jpg"
                          alt="Bali Villa"
                          className="w-9 h-9 rounded-md object-cover shrink-0"
                        />
                        <div className="flex-1 overflow-hidden">
                          <div className="font-black text-[6.5px] text-slate-900 truncate">Bali 5D4N Villa & Spa</div>
                          <div className="text-[5px] text-slate-500 font-medium">Flight + 4★ Hotel + Sightseeing</div>
                          <div className="text-brand-600 font-black text-[6.5px] mt-0.5">₹ 38,999 <span className="text-slate-400 line-through text-[5px] font-normal">₹ 49,999</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom App Navigation Bar */}
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
                        <span>❤️</span>
                        <span className="text-[4.5px]">Saved</span>
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
