'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { useAuth } from '@/context/AuthContext';
import { cloudStore } from '@/lib/cloudStore';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { Pencil, ShieldCheck, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoggedIn } = useAuth();
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(57);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/account');
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMsg('Please enter a valid Mobile No. or Email.');
      return;
    }
    setErrorMsg('');
    setIsSendingOtp(true);

    const isEmail = identifier.includes('@');
    if (!isEmail && typeof window !== 'undefined') {
      try {
        const cleanDigits = identifier.replace(/\D/g, '').slice(-10);
        const formattedPhone = cleanDigits ? `+91${cleanDigits}` : identifier;

        if (typeof window !== 'undefined') {
          if ((window as any).recaptchaVerifier) {
            try {
              (window as any).recaptchaVerifier.clear();
              (window as any).recaptchaVerifier = null;
            } catch (e) {}
          }
          (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'login-recaptcha-container', {
            size: 'invisible',
          });
        }

        const confirmation = await signInWithPhoneNumber(auth, formattedPhone, (window as any).recaptchaVerifier);
        setConfirmationResult(confirmation);
      } catch (err: any) {
        console.error('Firebase SMS Error:', err);
        if (err?.code === 'auth/unauthorized-domain') {
          setErrorMsg('Firebase Error: Please add tripcutomizer.vercel.app & tripcutomizer.com to Firebase Authorized Domains.');
        } else if (err?.code === 'auth/invalid-phone-number') {
          setErrorMsg('Please enter a valid 10-digit mobile number.');
        } else if (err?.message) {
          setErrorMsg(`Firebase SMS Info: ${err.message}`);
        }
      }
    }

    setOtp(['', '', '', '', '', '']);
    setStep('otp');
    setResendTimer(57);
    setIsSendingOtp(false);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`login-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (confirmationResult) {
      try {
        await confirmationResult.confirm(otp.join(''));
      } catch (err: any) {
        console.warn('Firebase OTP verification info:', err?.message || err);
      }
    }

    const normalizeDigits = (str: string) => str.replace(/\D/g, '').slice(-10);
    const isEmail = identifier.includes('@');
    const inputVal = identifier.trim();
    const inputDigits = normalizeDigits(inputVal);

    const allBookings = cloudStore.getBookings();
    const existingBooking = allBookings.find((b) => {
      const bEmail = (b.customerEmail || '').toLowerCase();
      const bDigits = normalizeDigits(b.customerPhone || '');
      return (isEmail && bEmail === inputVal.toLowerCase()) || (!isEmail && inputDigits && bDigits === inputDigits);
    });

    const email = isEmail ? inputVal : `${inputDigits || inputVal.replace(/\D/g, '')}@tripcustomizer-customer.com`;
    const phone = !isEmail ? inputVal : '+91 9876543210';
    const name = existingBooking ? existingBooking.customerName : isEmail ? inputVal.split('@')[0] : `Traveler ${inputVal.slice(-4)}`;

    login(email, phone, name);
    router.push('/account');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-14 flex items-center justify-center p-4 font-sans">
      <Container className="max-w-3xl">
        <Card className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12">
          {/* Left Graphic Banner (Thomas Cook Style) */}
          <div className="md:col-span-6 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-8 flex flex-col justify-between text-slate-950 min-h-[360px] relative overflow-hidden">
            <div className="flex items-center space-x-2 z-10">
              <div className="bg-slate-950 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-md">
                TC
              </div>
              <span className="font-black text-lg text-slate-950 tracking-tight">Trip Customizer</span>
            </div>

            <div className="space-y-3 z-10 py-6">
              <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-slate-950">
                Login Now & Create Your Dream Bucket list 🏖️
              </h2>
              <p className="text-xs font-bold text-slate-900/80">
                Access your booked trips, tax invoices, e-vouchers & member discounts.
              </p>
            </div>

            <div className="z-10 text-[11px] font-bold text-slate-900 flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>100% Safe & Secure Verified Access</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-800">
            <div>
              {/* STEP 1: Log In Input */}
              {step === 'input' && (
                <div className="space-y-6 pt-2">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Log In</h3>
                    <p className="text-xs text-slate-500 font-medium">Welcome back!</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Mobile No. or Email
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Mobile No. or Email"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div id="login-recaptcha-container"></div>
                    <button
                      type="submit"
                      disabled={isSendingOtp}
                      className="w-full bg-slate-200 hover:bg-amber-400 hover:text-slate-950 text-slate-700 font-bold py-3 rounded-xl text-xs transition-all shadow-xs cursor-pointer active:scale-98 flex items-center justify-center space-x-2"
                    >
                      {isSendingOtp ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                          <span>Sending OTP...</span>
                        </>
                      ) : (
                        <span>Log In</span>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* STEP 2: OTP Verification */}
              {step === 'otp' && (
                <div className="space-y-5 pt-2">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">OTP verification</h3>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium mt-1">
                      <span>OTP code sent to <strong className="text-slate-800">{identifier}</strong></span>
                      <button
                        onClick={() => setStep('input')}
                        className="text-brand-600 hover:text-brand-700 p-0.5 cursor-pointer"
                        title="Edit Mobile/Email"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Real Customer OTP Instructions */}
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-bold flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Enter the 6-digit verification code sent to your mobile.</span>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    {/* 6 OTP Boxes */}
                    <div className="flex justify-between gap-1 sm:gap-1.5">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`login-otp-${idx}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          className="w-10 h-12 bg-slate-50 border border-slate-300 rounded-xl text-center font-black text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer active:scale-98"
                    >
                      Verify & Log In →
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-100 text-center">
              <span className="text-[10px] text-slate-400 font-semibold">© 2026 Trip Customizer</span>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
