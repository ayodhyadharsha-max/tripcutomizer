'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, CreditCard, Send, GraduationCap, RefreshCw, Calculator, TrendingUp, ShieldCheck } from 'lucide-react';

export const MegaMenuForex: React.FC = () => {
  const forexServices = [
    { title: 'Buy Forex', href: '/forex/buy', desc: 'Foreign Currency Cash & Cards at best rates', icon: DollarSign, badge: 'Zero Margin' },
    { title: 'Sell Forex', href: '/forex/sell', desc: 'Encash remaining foreign currency effortlessly', icon: RefreshCw },
    { title: 'Reload Forex Card', href: '/forex/reload', desc: 'Instant 24/7 online card balance top-up', icon: CreditCard },
    { title: 'Encash Forex Card', href: '/forex/encash', desc: 'Transfer unused card balance back to bank', icon: ShieldCheck },
    { title: 'Multi-Currency Forex Cards', href: '/forex/cards', desc: 'Lock in rates in 16+ currencies worldwide', icon: CreditCard },
  ];

  const remittanceServices = [
    { title: 'Send Money Abroad', href: '/forex/send-money-abroad', desc: 'Fast outward bank remittance under RBI LRS', icon: Send },
    { title: 'University Fee Payment', href: '/forex/university-fee', desc: 'Pay tuition fees directly to foreign universities', icon: GraduationCap, badge: 'Student Special' },
    { title: 'Study Abroad Forex Desk', href: '/forex/study-abroad', desc: 'GIC payments, Forex Cards & Student Insurance', icon: GraduationCap },
    { title: 'Currency Converter Tool', href: '/forex/currency-converter', desc: 'Live exchange rates calculator', icon: Calculator },
    { title: 'Daily Forex Rate Card', href: '/forex/rate-card', desc: 'View live buying & selling exchange rates', icon: TrendingUp },
  ];

  return (
    <div className="w-[720px] bg-white border border-slate-200 rounded-2xl shadow-mega p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
      {/* Forex Exchange Services */}
      <div className="border-r border-slate-100 pr-4">
        <div className="flex items-center space-x-2 text-brand-600 font-bold text-sm mb-3 pb-2 border-b border-slate-100">
          <CreditCard className="w-4 h-4" />
          <span>Forex Cash & Cards</span>
        </div>
        <div className="space-y-3">
          {forexServices.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="p-2 bg-brand-50 rounded-lg text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600">{item.title}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.2 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Remittance & Education */}
      <div>
        <div className="flex items-center space-x-2 text-brand-600 font-bold text-sm mb-3 pb-2 border-b border-slate-100">
          <Send className="w-4 h-4 text-accent-500" />
          <span>Remittance & Student Forex</span>
        </div>
        <div className="space-y-3">
          {remittanceServices.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="p-2 bg-accent-50 rounded-lg text-accent-600 group-hover:bg-accent-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-brand-600">{item.title}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-accent-100 text-accent-600 font-bold px-1.5 py-0.2 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
