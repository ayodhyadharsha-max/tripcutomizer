'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { FileCheck, Upload, CheckCircle2, ShieldCheck, ChevronRight, Clock, FileText } from 'lucide-react';

export default function VisaCountryPage({ params }: { params: { country: string } }) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const countryName = params.country.toUpperCase();
  const visaFee = 6500;

  const [applicant, setApplicant] = useState({
    firstName: 'Rishabh',
    lastName: 'Jaiswal',
    passportNo: 'Z9841029',
    dob: '1994-05-14',
    passportExpiry: '2031-08-20',
    email: 'rishabh@example.com',
    phone: '+91 9876543210',
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    passportDoc: true,
    photoDoc: true,
    bankStatement: true,
    flightTickets: true,
  });

  const [appRef, setAppRef] = useState('VISA-984210');

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <Container className="max-w-4xl">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/visa" className="hover:text-brand-500">Visa Services</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-800">{countryName} Visa Application</span>
        </div>

        {/* Stepper Header */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex items-center justify-around text-xs font-bold text-slate-700">
          <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>1</span>
            <span>Applicant Info</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>2</span>
            <span>Upload Documents</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-brand-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-brand-500 text-white' : 'bg-slate-200'}`}>3</span>
            <span>Payment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <div className={`flex items-center space-x-1.5 ${step === 4 ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>4</span>
            <span>Tracking</span>
          </div>
        </div>

        {/* Step 1: Applicant Details */}
        {step === 1 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              {countryName} Tourist Visa — Applicant Details
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">First Name *</label>
                  <input required type="text" value={applicant.firstName} onChange={(e) => setApplicant({ ...applicant, firstName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Last Name *</label>
                  <input required type="text" value={applicant.lastName} onChange={(e) => setApplicant({ ...applicant, lastName: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Passport Number *</label>
                  <input required type="text" value={applicant.passportNo} onChange={(e) => setApplicant({ ...applicant, passportNo: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-bold uppercase" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Passport Expiry Date *</label>
                  <input required type="date" value={applicant.passportExpiry} onChange={(e) => setApplicant({ ...applicant, passportExpiry: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input required type="email" value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input required type="tel" value={applicant.phone} onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })} className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold" />
                </div>
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm">
                CONTINUE TO DOCUMENT UPLOAD →
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: Upload Documents */}
        {step === 2 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
              Upload Visa Documents ({countryName})
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                <p className="font-bold text-slate-800">Passport Front & Back Page Scan</p>
                <span className="text-[10px] text-emerald-600 font-bold block">✓ Passport_Scan.pdf (2.4 MB)</span>
              </div>

              <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                <p className="font-bold text-slate-800">Passport Size Photograph (White Back)</p>
                <span className="text-[10px] text-emerald-600 font-bold block">✓ Photo_WhiteBack.jpg (800 KB)</span>
              </div>

              <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                <p className="font-bold text-slate-800">Bank Statement (6 Months)</p>
                <span className="text-[10px] text-emerald-600 font-bold block">✓ BankStatement.pdf (1.8 MB)</span>
              </div>

              <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-center space-y-2">
                <Upload className="w-6 h-6 text-brand-500 mx-auto" />
                <p className="font-bold text-slate-800">Flight & Hotel Reservations</p>
                <span className="text-[10px] text-emerald-600 font-bold block">✓ Tickets_Vouchers.pdf (1.1 MB)</span>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button onClick={() => setStep(1)} variant="outline" size="lg" className="w-1/3">
                ← Back
              </Button>
              <Button onClick={() => setStep(3)} variant="accent" size="lg" className="w-2/3 font-black py-3 text-slate-950">
                PROCEED TO VISA FEE PAYMENT →
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 text-center space-y-6">
            <h2 className="text-lg font-black text-slate-900">Visa Processing Fee ({formatCurrency(visaFee)})</h2>
            <p className="text-xs text-slate-500">Includes Embassy fee + VFS processing charges + Expert document auditing.</p>

            <Button onClick={() => setStep(4)} variant="accent" size="lg" className="w-full font-black py-3 text-slate-950 text-sm shadow-xl">
              PAY {formatCurrency(visaFee)} VISA FEE NOW →
            </Button>
          </Card>
        )}

        {/* Step 4: Tracking */}
        {step === 4 && (
          <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="bg-brand-50 text-brand-700 font-extrabold text-xs px-3 py-1 rounded-full inline-block">
              Visa Application Ref: {appRef}
            </span>

            <h2 className="text-2xl font-black text-slate-900">{countryName} Visa Application Submitted!</h2>

            <div className="p-4 bg-slate-50 rounded-2xl text-left text-xs border border-slate-200 space-y-2 max-w-md mx-auto">
              <p className="font-bold text-slate-900">Live Application Tracking Status</p>
              <div className="flex justify-between text-slate-600">
                <span>Document Audit:</span>
                <span className="font-bold text-emerald-600">PASSED (Verified by Expert)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Embassy Submission:</span>
                <span className="font-bold text-brand-600">IN PROGRESS (Expected 48 Hrs)</span>
              </div>
            </div>

            <Link href="/account" className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md">
              Track Visa Status in Account Dashboard →
            </Link>
          </Card>
        )}
      </Container>
    </div>
  );
}
