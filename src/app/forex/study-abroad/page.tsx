import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GraduationCap, CreditCard, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function StudyAbroadPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container>
        <div className="bg-gradient-to-r from-purple-900 via-brand-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Dedicated Student Forex Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Study Abroad Forex & Remittance</h1>
          <p className="text-slate-300 text-sm mt-2 max-w-2xl">
            Specialized student forex cards, GIC payments for Canada, Blocked Accounts for Germany, University Tuition Remittance & Student Overseas Health Insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverable className="p-6 bg-white border-slate-200">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl w-fit mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-slate-900 text-base mb-2">University Tuition Payment</h2>
            <p className="text-xs text-slate-500 mb-4">Pay foreign university fees directly with zero bank wire markup and swift confirmation.</p>
            <Link href="/forex/university-fee" className="text-xs font-bold text-purple-600 hover:underline">
              Pay Tuition Fees →
            </Link>
          </Card>

          <Card hoverable className="p-6 bg-white border-slate-200">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-slate-900 text-base mb-2">Student Forex Cards</h2>
            <p className="text-xs text-slate-500 mb-4">Free international student card with zero ATM withdrawal fees worldwide.</p>
            <Link href="/forex/cards" className="text-xs font-bold text-emerald-600 hover:underline">
              Apply Student Card →
            </Link>
          </Card>

          <Card hoverable className="p-6 bg-white border-slate-200">
            <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl w-fit mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-slate-900 text-base mb-2">Student Travel Insurance</h2>
            <p className="text-xs text-slate-500 mb-4">Mandatory university compliant health and accident insurance coverage.</p>
            <Link href="/travel-insurance" className="text-xs font-bold text-brand-600 hover:underline">
              Get Student Quote →
            </Link>
          </Card>
        </div>
      </Container>
    </div>
  );
}
