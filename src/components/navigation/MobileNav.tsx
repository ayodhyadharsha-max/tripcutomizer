'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, Phone, MessageCircle, MapPin, Compass, Plane, Hotel, Gift, Briefcase, User, Sparkles, Award, Building2, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="p-4 bg-brand-950 text-white flex items-center justify-between border-b border-brand-800/80 shadow-md">
          <Link href="/" onClick={onClose} className="flex items-center space-x-3">
            <img src="/logo-dark.png" alt="Trip Customizer" className="h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center border-l-2 border-amber-400/30 pl-3">
              <span className="font-black text-lg tracking-tight text-white block leading-none">
                Trip <span className="text-amber-400 font-black">Customizer</span>
              </span>
              <span className="text-[9px] font-black text-amber-300 tracking-wider block mt-1 uppercase bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                Holidays • Flights • Hotels
              </span>
            </div>
          </Link>
          <button onClick={onClose} className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-b border-slate-100 bg-slate-50 grid grid-cols-2 gap-2">
          <Link href="/login" onClick={onClose}>
            <Button variant="outline" size="sm" className="w-full justify-center text-xs">
              <User className="w-3.5 h-3.5 mr-1" /> Customer Login
            </Button>
          </Link>
          <Link href="/agent/login" onClick={onClose}>
            <Button variant="secondary" size="sm" className="w-full justify-center text-xs">
              <Briefcase className="w-3.5 h-3.5 mr-1" /> Agent Login
            </Button>
          </Link>
        </div>

        {/* Links Scroll Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4 text-xs font-semibold text-slate-700">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">Primary Categories</span>
            <div className="space-y-1">
              <Link href="/holidays" onClick={onClose} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-3 text-brand-600">
                  <Compass className="w-4 h-4" />
                  <span>Holidays & Packages</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link href="/customize-trip" onClick={onClose} className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                <div className="flex items-center space-x-3 text-amber-700 font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Customize Trip</span>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </Link>

              <Link href="/flights" onClick={onClose} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-3 text-brand-500 font-semibold">
                  <Plane className="w-4 h-4" />
                  <span>Flight Search</span>
                </div>
                <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  COMING SOON
                </span>
              </Link>

              <Link href="/hotels" onClick={onClose} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-3 text-accent-600 font-semibold">
                  <Hotel className="w-4 h-4" />
                  <span>Hotel Stays</span>
                </div>
                <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  COMING SOON
                </span>
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">More Services</span>
            <div className="space-y-1">
              <Link href="/gift-cards" onClick={onClose} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-2.5">
                  <Gift className="w-4 h-4 text-slate-500" />
                  <span>Gift Cards</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link href="/corporate-travel" onClick={onClose} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-2.5">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>Corporate Travel</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link href="/blog" onClick={onClose} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100">
                <div className="flex items-center space-x-2.5">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <span>Travel Blog</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Support Info */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs space-y-2">
          <a href="tel:18002099100" className="flex items-center space-x-2 text-slate-700 font-semibold">
            <Phone className="w-4 h-4 text-accent-500" />
            <span>1800-2099-100 (Toll Free)</span>
          </a>
          <a href="https://wa.me/917408763401" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-emerald-700 font-semibold">
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp Support (+91 7408763401)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
