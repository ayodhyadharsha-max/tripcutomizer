'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Lock, Phone, Mail, ShieldCheck, ArrowRight, Briefcase } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  const [identifier, setIdentifier] = useState('demo@tripcustomizer.com');
  const [password, setPassword] = useState('password123');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMethod === 'otp' && !otpSent) {
      setOtpSent(true);
      return;
    }
    // Simulate successful customer login
    router.push('/account');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 flex items-center justify-center">
      <Container className="max-w-md w-full">
        <Card className="p-8 bg-white rounded-3xl shadow-2xl border border-slate-200">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-brand-500 text-white font-black text-xl rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
              TB
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Login to tripcustomizer</h1>
            <p className="text-xs text-slate-500 mt-1">Manage your holiday bookings, forex cards & saved wishlist</p>
          </div>

          {/* Login Method Toggle */}
          <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold text-center">
            <button
              onClick={() => { setLoginMethod('password'); setOtpSent(false); }}
              className={`py-2 rounded-lg transition-colors cursor-pointer ${loginMethod === 'password' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
            >
              Password
            </button>
            <button
              onClick={() => setLoginMethod('otp')}
              className={`py-2 rounded-lg transition-colors cursor-pointer ${loginMethod === 'otp' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
            >
              Mobile / Email OTP
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Email ID or Mobile Number</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. demo@tripcustomizer.com or +91 9876543210"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            {loginMethod === 'password' ? (
              <div>
                <label className="font-bold text-slate-700 block mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>
            ) : (
              otpSent && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Enter 6-Digit OTP</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="123456"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-center font-bold tracking-widest text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <p className="text-[10px] text-emerald-600 font-bold mt-1">OTP sent to your registered mobile/email (Use 123456 for demo)</p>
                </div>
              )
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full font-bold py-3 text-sm shadow-md">
              {loginMethod === 'otp' && !otpSent ? 'SEND OTP CODE' : 'LOGIN TO ACCOUNT'}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-500">Don't have an account?</span>
            <Link href="/register" className="text-brand-600 hover:underline">
              Create Account →
            </Link>
          </div>

          <div className="mt-4 p-3 bg-brand-50 rounded-xl border border-brand-100 flex items-center space-x-2 text-[11px]">
            <Briefcase className="w-4 h-4 text-brand-600 shrink-0" />
            <div>
              <span className="text-brand-900 font-bold">Are you a Travel Agent / Franchisee?</span>{' '}
              <Link href="/agent/login" className="text-brand-600 underline font-bold">Agent SSO Login Desk</Link>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
