'use client';

import React, { useState, useEffect } from 'react';

export const AppSplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasSeenSplash = sessionStorage.getItem('tc_splash_shown');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Trigger fade-out animation at 1.5s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Completely remove from DOM at 2.0s
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('tc_splash_shown', 'true');
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090d16] text-white transition-all duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient Radial Glow Effect */}
      <div className="absolute w-96 h-96 bg-rose-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute w-80 h-80 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D Container with Perspective */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center animate-in zoom-in-95 duration-700">
        {/* Glowing 3D Logo Frame */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-600 via-brand-500 to-amber-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
          <div className="relative bg-slate-950 p-4 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
            <img
              src="/splash-logo.jpg"
              alt="Trip Customizer 3D Splash Logo"
              className="w-64 sm:w-80 h-auto object-contain rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="space-y-1.5 mt-2">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">
            MAKING EVERY JOURNEY MEMORABLE
          </p>
          <h1 className="text-xl font-black text-white tracking-tight font-sans">
            Trip <span className="text-rose-500">Customizer</span>
          </h1>
        </div>

        {/* Loading Indicator */}
        <div className="w-48 h-1.5 bg-slate-800/80 rounded-full mt-8 overflow-hidden p-0.5 border border-slate-700/50 shadow-inner">
          <div className="h-full bg-gradient-to-r from-rose-500 via-brand-500 to-amber-400 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
          Loading Custom Trips...
        </span>
      </div>
    </div>
  );
};
