'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { GraduationCap, CheckCircle2, ShieldCheck, Upload } from 'lucide-react';

export default function UniversityFeePage() {
  const [university, setUniversity] = useState('University of Toronto');
  const [country, setCountry] = useState('Canada');
  const [studentId, setStudentId] = useState('STU-984102');
  const [tuitionAmount, setTuitionAmount] = useState(12500); // CAD / USD
  const [submitted, setSubmitted] = useState(false);

  const rate = 62.10;
  const inrTotal = tuitionAmount * rate;

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Foreign University Fee Remittance</h1>
          <p className="text-xs text-slate-500 mt-1">Pay tuition fees & GIC deposits directly to international university bank accounts</p>
        </div>

        {submitted ? (
          <Card className="p-8 bg-white text-center rounded-3xl space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Tuition Remittance Initiated!</h2>
            <p className="text-xs text-slate-600">Payment receipt for {university} has been generated. Swift MT103 confirmation will be emailed.</p>
            <Link href="/account" className="inline-block font-bold text-xs text-brand-600 hover:underline pt-2">View Swift Confirmation</Link>
          </Card>
        ) : (
          <Card className="p-6 bg-white rounded-3xl shadow-xl space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">University Name</label>
              <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Student Roll # / ID</label>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Tuition Fee Amount</label>
                <input type="number" value={tuitionAmount} onChange={(e) => setTuitionAmount(Number(e.target.value))} className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-bold" />
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 flex justify-between items-center text-slate-900 font-bold">
              <span>Total Payable INR:</span>
              <span className="text-lg text-purple-800">{formatCurrency(inrTotal)}</span>
            </div>

            <Button onClick={() => setSubmitted(true)} variant="accent" size="lg" className="w-full font-black py-3 text-slate-950">
              PAY UNIVERSITY TUITION FEE →
            </Button>
          </Card>
        )}
      </Container>
    </div>
  );
}
