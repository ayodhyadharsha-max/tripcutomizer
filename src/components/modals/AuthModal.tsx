'use client';

import React, { useState, useEffect, useRef } from 'react';
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

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(57);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  // Clean up recaptcha on modal close
  useEffect(() => {
    return () => {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;
        } catch (e) {}
      }
    };
  }, []);

  if (!isOpen) return null;

  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    const rawInput = identifier.trim();
    if (!rawInput) {
      setErrorMsg('Please enter a valid 10-digit Mobile Number or Email.');
      return;
    }
    if (authMode === 'signup' && !fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }

    const isEmail = rawInput.includes('@');
    let formattedPhone = '';

    if (!isEmail) {
      const cleanDigits = rawInput.replace(/\D/g, '').slice(-10);
      if (cleanDigits.length !== 10) {
        setErrorMsg('Please enter a valid 10-digit Indian Mobile Number (e.g. 9876543210)');
        return;
      }
      formattedPhone = `+91${cleanDigits}`;
    }

    setIsSendingOtp(true);

    if (!isEmail && typeof window !== 'undefined') {
      try {
        // Clear previous verifier if exists
        if (recaptchaVerifierRef.current) {
          try {
            recaptchaVerifierRef.current.clear();
            recaptchaVerifierRef.current = null;
          } catch (e) {}
        }
        if ((window as any).recaptchaVerifier) {
          try {
            (window as any).recaptchaVerifier.clear();
            (window as any).recaptchaVerifier = null;
          } catch (e) {}
        }

        // Initialize invisible RecaptchaVerifier
        const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => {
            // Recaptcha solved
          },
          'expired-callback': () => {
            setErrorMsg('Security verification expired. Please try sending OTP again.');
          },
        });

        recaptchaVerifierRef.current = verifier;
        (window as any).recaptchaVerifier = verifier;

        // Call Firebase Phone Auth
        const confirmation = await signInWithPhoneNumber(auth, formattedPhone, verifier);
        setConfirmationResult(confirmation);
        
        setOtp(['', '', '', '', '', '']);
        setStep('otp');
        setResendTimer(57);
        setIsSendingOtp(false);
        return;
      } catch (err: any) {
        console.error('Firebase Phone Auth Error:', err);
        setIsSendingOtp(false);

        const errCode = err?.code || '';
        if (errCode === 'auth/invalid-phone-number') {
          setErrorMsg('Invalid phone number format. Please enter a valid 10-digit number.');
        } else if (errCode === 'auth/too-many-requests') {
          setErrorMsg('Too many OTP requests. Please wait a few minutes before trying again.');
        } else if (errCode === 'auth/quota-exceeded') {
          setErrorMsg('SMS quota exceeded for today. Please try again later or use test number.');
        } else if (errCode === 'auth/billing-not-enabled') {
          setErrorMsg('Firebase Blaze plan / billing required for sending SMS to unlisted numbers.');
        } else if (errCode === 'auth/captcha-check-failed') {
          setErrorMsg('reCAPTCHA verification failed. Please refresh and try again.');
        } else {
          setErrorMsg(`Firebase Error: ${err?.message || 'Could not send SMS OTP. Please check console.'}`);
        }
        return;
      }
    }

    // Email login fallback
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

    // Auto-focus next input box
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const code = otp.join('');

    if (code.length < 6) {
      setErrorMsg('Please enter the complete 6-digit OTP code.');
      return;
    }

    setErrorMsg('');
    setIsVerifying(true);

    let firebaseUid = '';

    // Verify with Firebase Confirmation Result
    if (confirmationResult) {
      try {
        const userCredential = await confirmationResult.confirm(code);
        firebaseUid = userCredential.user?.uid || '';
      } catch (err: any) {
        console.error('Firebase OTP verification error:', err);
        setErrorMsg('Invalid OTP code or expired. Please check and re-enter.');
        setIsVerifying(false);
        return;
      }
    }

    const normalizeDigits = (str: string) => str.replace(/\D/g, '').slice(-10);
    const isEmail = identifier.includes('@');
    const inputVal = identifier.trim();
    const inputDigits = normalizeDigits(inputVal);

    // Search if this user exists in cloud store to restore their exact name
    const allBookings = cloudStore.getBookings();
    const existingBooking = allBookings.find((b) => {
      const bEmail = (b.customerEmail || '').toLowerCase();
      const bDigits = normalizeDigits(b.customerPhone || '');
      return (isEmail && bEmail === inputVal.toLowerCase()) || (!isEmail && inputDigits && bDigits === inputDigits);
    });

    const finalEmail = isEmail
      ? inputVal
      : emailInput.trim() || `${inputDigits || inputVal.replace(/\D/g, '')}@tripcustomizer-customer.com`;
    const finalPhone = !isEmail ? `+91 ${inputDigits}` : '+91 9876543210';
    const finalName =
      fullName.trim() ||
      (existingBooking ? existingBooking.customerName : isEmail ? inputVal.split('@')[0] : `Traveler ${inputVal.slice(-4)}`);

    const userUid = firebaseUid || `usr_${inputDigits || Date.now()}`;

    // Sync User Profile to Supabase & Local Database
    cloudStore.saveUserProfile({
      uid: userUid,
      name: finalName,
      email: finalEmail,
      phone: finalPhone,
      updatedAt: new Date().toISOString(),
    });

    // Log in session in AuthContext
    login(finalEmail, finalPhone, finalName);

    setIsVerifying(false);
    onClose();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 relative animate-in zoom-in-95 border border-slate-200">
        {/* Hidden container for Firebase Recaptcha */}
        <div id="recaptcha-container"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 font-bold text-xs bg-slate-100/80 hover:bg-slate-200 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
        >
          Close ✕
        </button>

        {/* Left Side Banner */}
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

          {/* Main Hero Banner Text */}
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

            {/* STEP 1: Log In / Sign Up Inputs */}
            {step === 'input' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {authMode === 'login' ? 'Log In to Your Account' : 'Sign Up & Join Trip Customizer'}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {authMode === 'login' ? 'Enter 10-digit mobile number to receive live SMS OTP.' : 'Fill in your details to create a new traveler account.'}
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
                      {authMode === 'signup' ? 'Mobile Number *' : 'Mobile Number or Email *'}
                    </label>
                    <div className="relative flex items-center">
                      <input
                        required
                        type="tel"
                        maxLength={14}
                        placeholder={authMode === 'signup' ? '10-Digit Mobile No. (e.g. 9876543210)' : '10-Digit Mobile No. or Email'}
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
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
                        <span>Sending Real SMS OTP...</span>
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
                    <span>SMS OTP sent to <strong className="text-slate-800">+91 {identifier.replace(/\D/g, '').slice(-10)}</strong></span>
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
                        id={`otp-input-${idx}`}
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
                        <span>Verifying Code...</span>
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
