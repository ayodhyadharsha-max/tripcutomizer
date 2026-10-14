'use client';

import React, { useState } from 'react';
import { ProgrammaticPackage } from '@/data/programmaticPackages';
import { PackageInquiryModal } from './PackageInquiryModal';
import { Zap, Sliders, MessageCircle, PhoneCall, ShieldCheck, Check } from 'lucide-react';

interface PackageActionButtonsProps {
  pkg: ProgrammaticPackage;
}

export const PackageActionButtons: React.FC<PackageActionButtonsProps> = ({ pkg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'book' | 'customize'>('book');

  const openBookModal = () => {
    setModalMode('book');
    setIsModalOpen(true);
  };

  const openCustomizeModal = () => {
    setModalMode('customize');
    setIsModalOpen(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Trip Customizer! I want details on: "${pkg.h1}" departing from ${pkg.departureCity.city} (Special Price: ₹${pkg.discountPrice.toLocaleString('en-IN')}). Please share itinerary and quote.`
  );

  return (
    <>
      <div className="space-y-3">
        <button
          onClick={openBookModal}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 text-base cursor-pointer"
        >
          <Zap className="w-5 h-5 fill-white" />
          Book Now @ ₹{pkg.discountPrice.toLocaleString('en-IN')}
        </button>

        <button
          onClick={openCustomizeModal}
          className="w-full py-3.5 px-6 bg-white hover:bg-slate-50 text-indigo-700 font-bold rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 shadow-sm flex items-center justify-center gap-2 transition-all text-sm cursor-pointer"
        >
          <Sliders className="w-4 h-4 text-indigo-600" />
          Customize This Itinerary (Free)
        </button>

        <a
          href={`https://wa.me/917408763401?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-6 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold rounded-2xl border border-emerald-200 flex items-center justify-center gap-2 transition-all text-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          Chat on WhatsApp with Specialist
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Instant Quote & Booking Confirmation</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Pay 25% to confirm, rest before departure</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Zero-fee itinerary modification within 48 hours</span>
        </div>
      </div>

      <PackageInquiryModal
        pkg={pkg}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultMode={modalMode}
      />
    </>
  );
};
