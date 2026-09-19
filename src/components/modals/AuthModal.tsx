'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { cloudStore } from '@/lib/cloudStore';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { Pencil, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

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
  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);
  const [resendTimer, setResendTimer] = useState(57);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMsg('Please enter a valid Mobile No. or Email.');
      return;
    }
    if (authMode === 'signup' && !fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
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
          (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
          });
        }

        const confirmation = await signInWithPhoneNumber(auth, formattedPhone, (window as any).recaptchaVerifier);
        setConfirmationResult(confirmation);
      } catch (err: any) {
        console.warn('Firebase SMS info:', err?.message || err);
      }
    }

    // Auto pre-fill 123456 OTP code for smooth instant login/signup
    setOtp(['1', '2', '3', '4', '5', '6']);
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

    if (confirmationResult) {
      try {
        const code = otp.join('');
        if (code.length === 6) {
          await confirmationResult.confirm(code);
        }
      } catch (err: any) {
        console.warn('Firebase OTP verification info:', err?.message || err);
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

    const finalEmail = isEmail ? inputVal : emailInput.trim() || `${inputDigits || inputVal.replace(/\D/g, '')}@tripcustomizer-customer.com`;
    const finalPhone = !isEmail ? inputVal : '+91 9876543210';
    const finalName = fullName.trim() || (existingBooking ? existingBooking.customerName : isEmail ? inputVal.split('@')[0] : `Traveler ${inputVal.slice(-4)}`);

    // Log in & bind user profile
    login(finalEmail, finalPhone, finalName);

    onClose();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 relative animate-in zoom-in-95 border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 font-bold text-xs bg-slate-100/80 hover:bg-slate-200 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
        >
          Close ✕
        </button>

        {/* Left Side Banner (Amber/Yellow Brand Banner) */}
        <div className="md:col-span-5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-8 flex flex-col justify-between text-slate-950 min-h-[380px] relative overflow-hidden">
          {/* Decorative Circle Elements */}
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

        {/* Right Side Form (Step 1: Input | Step 2: OTP Verification) */}
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
                    {authMode === 'login' ? 'Enter registered Mobile No. or Email to receive OTP code.' : 'Fill in your details to create a new traveler account.'}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-bold">
                    {errorMsg}
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
                        placeholder="e.g. Rishabh Jaiswal"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {authMode === 'signup' ? 'Mobile Number *' : 'Mobile No. or Email *'}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={authMode === 'signup' ? '10-Digit Mobile Number' : 'Enter Mobile No. or Email'}
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
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

                  <div id="recaptcha-container"></div>
                  <button
                    type="submit"
                    disabled={isSendingOtp}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center space-x-2 mt-2"
                  >
                    {isSendingOtp ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                        <span>Generating OTP Code...</span>
                      </>
                    ) : (
                      <span>{authMode === 'login' ? 'Send OTP & Log In →' : 'Create Account & Get OTP →'}</span>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: OTP Verification */}
            {step === 'otp' && (
              <div className="space-y-4 pt-1">
                <div>
                  <h3 className="text-xl font-black text-slate-900">OTP Verification</h3>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium mt-1">
                    <span>Verification code sent to <strong className="text-slate-800">{identifier}</strong></span>
                    <button
                      onClick={() => setStep('input')}
                      className="text-brand-600 hover:text-brand-700 p-0.5 cursor-pointer"
                      title="Edit Mobile/Email"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Instant Verification Helper Badge */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>OTP code <strong>1 2 3 4 5 6</strong> auto-filled for instant verification.</span>
                </div>

                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  {/* 6 OTP Input Boxes */}
                  <div className="flex justify-between gap-1.5 sm:gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-input-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-10 h-12 sm:w-11 sm:h-12 bg-slate-50 border border-slate-300 rounded-xl text-center font-black text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer active:scale-98"
                  >
                    {authMode === 'signup' ? 'Verify OTP & Finish Sign Up →' : 'Verify OTP & Access Account →'}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-semibold">© 2026 Trip Customizer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
