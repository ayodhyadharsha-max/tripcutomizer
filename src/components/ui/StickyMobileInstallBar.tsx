'use client';

import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Check } from 'lucide-react';

export const StickyMobileInstallBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) {
      setIsIOSDevice(true);
    }
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
  }, []);

  if (!isVisible || isInstalled || isIOSDevice) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/api/download-app';
    link.download = 'TripCustomizer.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-3 shadow-2xl border-t border-brand-500/30 backdrop-blur-lg animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between space-x-3 max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 p-1 flex items-center justify-center shadow-md flex-shrink-0 border border-brand-400/40">
            <img src="/icon-192.png" alt="App Icon" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xs tracking-tight text-white leading-tight">
              Trip Customizer App
            </span>
            <span className="text-[10px] text-amber-300 font-bold">
              ⚡ Fast Booking • 4.9★ Rated
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-lg active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg"
            aria-label="Close app banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
