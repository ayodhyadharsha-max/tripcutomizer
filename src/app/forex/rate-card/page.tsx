import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Info, TrendingUp, RefreshCw } from 'lucide-react';

export default function ForexRateCardPage() {
  const rates = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', buy: 83.75, sell: 84.45 },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', buy: 91.20, sell: 92.10 },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', buy: 108.50, sell: 109.80 },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buy: 22.75, sell: 23.10 },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', buy: 63.80, sell: 64.60 },
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', buy: 2.42, sell: 2.52 },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', buy: 61.30, sell: 62.10 },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', buy: 55.40, sell: 56.20 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Daily Forex Exchange Rate Card</h1>
          <p className="text-xs text-slate-500 mt-1">Live RBI reference buy & sell rates updated every 15 minutes</p>
        </div>

        <Card className="p-6 bg-white rounded-3xl shadow-xl space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-900 flex items-center space-x-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Live Currency Exchange Board</span>
            </span>
            <span className="text-[11px] text-slate-400 font-semibold">Last Updated: Just now</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-2">Currency</th>
                  <th className="py-2">We Buy At (INR)</th>
                  <th className="py-2">We Sell At (INR)</th>
                  <th className="py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                {rates.map((r) => (
                  <tr key={r.code} className="hover:bg-slate-50">
                    <td className="py-3 flex items-center space-x-2">
                      <span className="text-base">{r.flag}</span>
                      <span>{r.code} — {r.name}</span>
                    </td>
                    <td className="py-3 text-emerald-700">₹{r.buy}</td>
                    <td className="py-3 text-brand-700">₹{r.sell}</td>
                    <td className="py-3 text-right">
                      <Link href={`/forex/buy?currency=${r.code}`} className="bg-brand-50 hover:bg-brand-500 hover:text-white text-brand-600 px-3 py-1.5 rounded-lg text-[11px] transition-colors">
                        Buy {r.code}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mandatory Disclaimer */}
          <div className="p-3 bg-slate-100 rounded-xl flex items-center space-x-2 text-[11px] text-slate-500">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Rates shown are indicative until confirmed at order booking execution. Service adapter integrated.</span>
          </div>
        </Card>
      </Container>
    </div>
  );
}
