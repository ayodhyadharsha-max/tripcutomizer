import React from 'react';
import Image from 'next/image';
import { Smartphone, Download, QrCode } from 'lucide-react';
import { Container } from '../ui/Container';

export const AppPromotion: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-brand-800 to-brand-900 text-white overflow-hidden">
      <Container>
        <div className="bg-white/10 rounded-3xl p-8 lg:p-12 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="bg-accent-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full inline-flex items-center space-x-1">
              <Smartphone className="w-3.5 h-3.5 mr-1" />
              TRAVEL AT YOUR TAP
            </span>

            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              Download the tripcustomizer Mobile App
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Unlock exclusive app-only flight discounts, live forex card balance tracking, instant visa status alerts & itinerary vouchers offline.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-950 hover:bg-slate-900 text-white px-5 py-3 rounded-2xl flex items-center space-x-3 border border-white/20 shadow-lg"
              >
                <Download className="w-5 h-5 text-accent-400" />
                <div className="text-left">
                  <p className="text-[9px] uppercase text-slate-400 font-bold">GET IT ON</p>
                  <p className="text-xs font-black text-white">Google Play</p>
                </div>
              </a>

              <a
                href="https://apple.com/app-store"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-950 hover:bg-slate-900 text-white px-5 py-3 rounded-2xl flex items-center space-x-3 border border-white/20 shadow-lg"
              >
                <Download className="w-5 h-5 text-brand-400" />
                <div className="text-left">
                  <p className="text-[9px] uppercase text-slate-400 font-bold">DOWNLOAD ON THE</p>
                  <p className="text-xs font-black text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-6 rounded-3xl shadow-2xl flex items-center space-x-4 border border-slate-200 shrink-0">
            <div className="p-3 bg-slate-100 rounded-2xl">
              <QrCode className="w-20 h-20 text-slate-900" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Scan to Download</p>
              <p className="text-[11px] text-slate-500 mt-1">Available for iOS & Android</p>
              <span className="text-[10px] text-brand-600 font-bold block mt-2">⭐ 4.8 Rating (50K+ Reviews)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
