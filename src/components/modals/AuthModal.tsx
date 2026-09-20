'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { cloudStore } from '@/lib/cloudStore';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { Pencil, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

declare global {
  interface Window {
    recaptchaVerifier: any;
    recaptchaWidgetId: any;
  }
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(57);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Countdown timer for Resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  // Clean up verifier on modal close
  useEffect(() => {
    if (!isOpen && typeof window !== 'undefined' && window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      } catch (e) {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Initialize or get clean Recaptcha Verifier
  const setupRecaptcha = () => {
    if (typeof window === 'undefined') return null;

    try {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
        } catch (e) {}
        window.recaptchaVerifier = null;
      }

      // Container element in DOM
      const container = document.getElementById('recaptcha-anchor-box');
      if (!container) return null;

      container.innerHTML = '';

      const verifier = new RecaptchaVerifier(auth, 'recaptcha-anchor-box', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          setErrorMsg('reCAPTCHA expired. Please tap Send OTP again.');
        },
      });

      window.recaptchaVerifier = verifier;
      return verifier;
    } catch (e: any) {
      console.error('Recaptcha init error:', e);
      return null;
    }
  };

  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    const cleanPhone = phoneNumber.replace(/\D/g, '').slice(-10);
    if (!cleanPhone || cleanPhone.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit Indian Mobile Number.');
      return;
    }

    if (authMode === 'signup' && !fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }

    setIsSendingOtp(true);
    const formattedPhone = `+91${cleanPhone}`;

    try {
      const verifier = setupRecaptcha();
      if (!verifier) {
        setErrorMsg('Security check initialization failed. Please refresh the page.');
        setIsSendingOtp(false);
        return;
      }

      // Render verifier widget explicitly before dispatching SMS
      await verifier.render();

      // Trigger genuine carrier SMS from Google/Firebase
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      setConfirmationResult(confirmation);

      setOtp(['', '', '', '', '', '']);
      setStep('otp');
      setResendTimer(57);
      setIsSendingOtp(false);
    } catch (err: any) {
      console.error('Firebase SMS Sending Error:', err);
      setIsSendingOtp(false);

      // Clean up verifier on error so subsequent attempts start fresh
      if (typeof window !== 'undefined' && window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        } catch (e) {}
      }

      const code = err?.code || '';
      if (code === 'auth/invalid-phone-number') {
        setErrorMsg('Invalid mobile number format. Please check the 10 digits.');
      } else if (code === 'auth/quota-exceeded') {
        setErrorMsg('SMS quota limit reached. Please try again after some time.');
      } else if (code === 'auth/too-many-requests') {
        setErrorMsg('Too many OTP attempts from this device. Please wait 2 minutes.');
      } else if (code === 'auth/captcha-check-failed') {
        setErrorMsg('Security verification check failed. Please tap Send OTP again.');
      } else if (code === 'auth/billing-not-enabled') {
        setErrorMsg('Firebase Blaze plan / billing required in Firebase console for real SMS.');
      } else {
        setErrorMsg(err?.message || 'Could not send SMS OTP. Please try again.');
      }
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input box
    if (value && index < 5) {
      const nextInput = document.getElementById(`modal-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const code = otp.join('');

    if (code.length < 6) {
      setErrorMsg('Please enter the complete 6-digit OTP received in your SMS.');
      return;
    }

    if (!confirmationResult) {
      setErrorMsg('Session expired. Please request a new OTP code.');
      return;
    }

    setErrorMsg('');
    setIsVerifying(true);

    let firebaseUid = '';

    // Verify SMS Code with Firebase
    try {
      const userCredential = await confirmationResult.confirm(code);
      firebaseUid = userCredential.user?.uid || '';
    } catch (err: any) {
      console.error('Firebase OTP verification failed:', err);
      setIsVerifying(false);
      setErrorMsg('Incorrect OTP code entered. Please check your SMS and enter the exact 6 digits.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '').slice(-10);
    const finalPhone = `+91 ${cleanPhone}`;
    const finalEmail =
      emailInput.trim() || `${cleanPhone}@tripcustomizer-customer.com`;

    // Search existing bookings to restore name if present
    const allBookings = cloudStore.getBookings();
    const existingBooking = allBookings.find((b) => {
      const bDigits = (b.customerPhone || '').replace(/\D/g, '').slice(-10);
      return bDigits === cleanPhone;
    });

    const finalName =
      fullName.trim() ||
      (existingBooking ? existingBooking.customerName : `Traveler ${cleanPhone.slice(-4)}`);

    const userUid = firebaseUid || `usr_${cleanPhone}`;

    // 1. Sync User Profile to Supabase & Local Database
    cloudStore.saveUserProfile({
      uid: userUid,
      name: finalName,
      email: finalEmail,
      phone: finalPhone,
      updatedAt: new Date().toISOString(),
    });

    // 2. Log in session in AuthContext
    login(finalEmail, finalPhone, finalName);

    setIsVerifying(false);
    onClose();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 relative animate-in zoom-in-95 border border-slate-200">
        {/* Recaptcha DOM Anchor */}
        <div id="recaptcha-anchor-box"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 font-bold text-xs bg-slate-100/80 hover:bg-slate-200 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
        >
          Close ✕
        </button>

        {/* Left Side Graphic Banner */}
        <div className="md:col-span-5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-8 flex flex-col justify-between text-slate-950 min-h-[380px] relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-300/40 rounded-full blur-xl pointer-events-none" />

          {/* Logo */}
          <div className="flex items-center space-x-2 z-10">
            <div className="bg-slate-950 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-md">
              TC
            </div>
            <span className="font-black text-lg text-slate-950 tracking-tight">Trip Customizer</span>
          </div>

          <div className="space-y-3 z-10 py-6">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-slate-950 drop-shadow-xs">
              {authMode === 'login' ? 'Welcome Back Traveler 🏖️' : 'Create Your Account ✨'}
            </h2>
            <p className="text-xs font-bold text-slate-900/90 leading-relaxed">
              Access your booked packages, GST tax invoices, instant e-vouchers & exclusive member discounts.
            </p>
          </div>

          <div className="z-10 text-[11px] font-bold text-slate-900 flex items-center space-x-1.5 bg-amber-300/40 p-2 rounded-xl border border-amber-300/60">
            <ShieldCheck className="w-4 h-4 text-slate-950 shrink-0" />
            <span>100% Verified Secure Account System</span>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-800">
          <div>
            {/* Mode Switcher Tabs */}
            {step === 'input' && (
              <div className="flex border-b border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                  className={`pb-2.5 px-4 font-black text-xs cursor-pointer border-b-2 transition-all ${
                    authMode === 'login'
                      ? 'border-amber-500 text-slate-900'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                  className={`pb-2.5 px-4 font-black text-xs cursor-pointer border-b-2 transition-all ${
                    authMode === 'signup'
                      ? 'border-amber-500 text-slate-900'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  Create New Account / Sign Up
                </button>
              </div>
            )}

            {/* STEP 1: Inputs */}
            {step === 'input' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {authMode === 'login' ? 'Log In with Mobile' : 'Join Trip Customizer'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Enter your 10-digit Indian mobile number to receive live SMS OTP.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold flex items-start space-x-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSendOtp} className="space-y-3.5">
                  {authMode === 'signup' && (
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Mobile Number *
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-slate-100 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 shrink-0 select-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="10-Digit Mobile Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {authMode === 'signup' && (
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSendingOtp}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center space-x-2 mt-2 disabled:opacity-70"
                  >
                    {isSendingOtp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                        <span>Sending Live SMS OTP...</span>
                      </>
                    ) : (
                      <span>{authMode === 'login' ? 'Send Real SMS OTP →' : 'Create Account & Get OTP →'}</span>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: OTP Verification */}
            {step === 'otp' && (
              <div className="space-y-4 pt-1">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Enter OTP Verification Code</h3>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium mt-1">
                    <span>SMS OTP sent to <strong className="text-slate-800">+91 {phoneNumber}</strong></span>
                    <button
                      onClick={() => { setStep('input'); setErrorMsg(''); }}
                      className="text-brand-600 hover:text-brand-700 p-0.5 cursor-pointer ml-1 inline-flex items-center"
                      title="Edit Mobile Number"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold flex items-start space-x-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  {/* 6 OTP Input Boxes */}
                  <div className="flex justify-between gap-1.5 sm:gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`modal-otp-${idx}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-10 h-12 sm:w-11 sm:h-12 bg-slate-50 border border-slate-300 rounded-xl text-center font-black text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    {resendTimer > 0 ? (
                      <span>Resend OTP in <strong className="text-slate-700">{resendTimer}s</strong></span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-amber-600 hover:text-amber-700 font-bold cursor-pointer underline"
                      >
                        Resend OTP Now
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                        <span>Verifying SMS OTP...</span>
                      </>
                    ) : (
                      <span>{authMode === 'signup' ? 'Verify OTP & Finish Sign Up →' : 'Verify OTP & Access Account →'}</span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-semibold">🔒 Protected by Firebase Auth & Supabase Database</span>
          </div>
        </div>
      </div>
    </div>
  );
};
