import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { ForexMiniWidget } from '@/components/homepage/ForexMiniWidget';
import { DollarSign, CreditCard, Send, GraduationCap, RefreshCw, Calculator, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ForexHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">Forex Financial Services</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>RBI Authorized Category-II Foreign Exchange Dealer</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Foreign Currency Exchange & Cards</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Buy & Sell Foreign Currency, Multi-Currency Forex Cards, Outward Remittance under LRS, University Fee Payments & Doorstep Delivery in 48 Hours.
          </p>
        </div>

        {/* Forex Mini Calculator Widget */}
        <ForexMiniWidget />

        {/* Forex Services Quick Links Grid */}
        <div className="py-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Complete Forex Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hoverable className="p-6 bg-white border-slate-200">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Buy Forex Cash & Card</h3>
              <p className="text-xs text-slate-500 mb-4">Zero margin exchange rates on 16+ currencies delivered to home.</p>
              <Link href="/forex/buy" className="text-xs font-bold text-emerald-600 hover:underline">
                Buy Forex Now →
              </Link>
            </Card>

            <Card hoverable className="p-6 bg-white border-slate-200">
              <div className="p-3 bg-accent-50 text-accent-600 rounded-2xl w-fit mb-4">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Send Money Abroad</h3>
              <p className="text-xs text-slate-500 mb-4">Fast LRS outward bank remittance for family maintenance & medical.</p>
              <Link href="/forex/send-money-abroad" className="text-xs font-bold text-accent-600 hover:underline">
                Send Money →
              </Link>
            </Card>

            <Card hoverable className="p-6 bg-white border-slate-200">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-fit mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">University Fee Remittance</h3>
              <p className="text-xs text-slate-500 mb-4">Pay foreign university tuition fees directly with student discounts.</p>
              <Link href="/forex/university-fee" className="text-xs font-bold text-purple-600 hover:underline">
                Pay University Fee →
              </Link>
            </Card>

            <Card hoverable className="p-6 bg-white border-slate-200">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl w-fit mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Reload Forex Card</h3>
              <p className="text-xs text-slate-500 mb-4">Instant 24/7 online card balance top-up while travelling abroad.</p>
              <Link href="/forex/reload" className="text-xs font-bold text-brand-600 hover:underline">
                Reload Card Now →
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
