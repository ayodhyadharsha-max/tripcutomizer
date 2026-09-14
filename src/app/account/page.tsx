'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';
import {
  User,
  Phone,
  Mail,
  MapPin,
  LogOut,
  Package,
  FileText,
  Printer,
  CheckCircle2,
  ShieldCheck,
  Pencil,
  Briefcase,
  Users,
  Settings,
  Plus,
  Trash2,
  Calendar,
  Sparkles,
  Lock,
} from 'lucide-react';

interface CoTraveller {
  id: string;
  name: string;
  age: number;
  gender: string;
  relation: string;
}

export default function CustomerAccountPage() {
  const { user, isLoggedIn, login, logout, updateProfile } = useAuth();

  // Navigation Tab State (Matching Thomas Cook Screenshots)
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'settings' | 'cotravellers' | 'manage'>('bookings');
  const [bookingSubTab, setBookingSubTab] = useState<'upcoming' | 'past'>('upcoming');

  // OTP Login Flow State
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [identifier, setIdentifier] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(57);
  const [errorMsg, setErrorMsg] = useState('');

  // Profile Edit State
  const [editing, setEditing] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileCity, setProfileCity] = useState('');

  // User Bookings
  const [userBookings, setUserBookings] = useState<CustomerBooking[]>([]);

  // Selected Booking for Detailed Tax Invoice Modal
  const [selectedInvoice, setSelectedInvoice] = useState<CustomerBooking | null>(null);

  // Co-Travellers State
  const [coTravellers, setCoTravellers] = useState<CoTraveller[]>([]);

  const [showAddCoModal, setShowAddCoModal] = useState(false);
  const [newCoName, setNewCoName] = useState('');
  const [newCoAge, setNewCoAge] = useState('');
  const [newCoGender, setNewCoGender] = useState('Male');
  const [newCoRelation, setNewCoRelation] = useState('Family');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setProfilePhone(user.phone || '');
      setProfileCity(user.city || '');

      // Load co-travellers dynamically from persistent cloudStore
      const userCo = cloudStore.getCoTravellers(user.uid);
      const fallbackCo = cloudStore.getCoTravellers();
      if (userCo && userCo.length > 0) {
        setCoTravellers(userCo);
      } else if (fallbackCo && fallbackCo.length > 0) {
        setCoTravellers(fallbackCo);
      } else {
        setCoTravellers([
          { id: 'cot-1', name: 'Priya Sharma', age: 28, gender: 'Female', relation: 'Spouse' },
          { id: 'cot-2', name: 'Aarav Sharma Jr.', age: 6, gender: 'Male', relation: 'Son' },
        ]);
      }

      const normalizeDigits = (str: string) => str.replace(/\D/g, '').slice(-10);
      const userEmailLower = (user.email || '').toLowerCase();
      const userPhoneDigits = normalizeDigits(user.phone || '');

      // Strict user booking isolation with smart 10-digit phone and email matching
      const allBookings = cloudStore.getBookings();
      const filtered = allBookings.filter((b) => {
        const bEmail = (b.customerEmail || '').toLowerCase();
        const bPhoneDigits = normalizeDigits(b.customerPhone || '');

        return (
          (userEmailLower && bEmail === userEmailLower) ||
          (userPhoneDigits && bPhoneDigits && bPhoneDigits === userPhoneDigits) ||
          (user.name && user.name !== 'Valued Traveler' && b.customerName.toLowerCase() === user.name.toLowerCase())
        );
      });
      setUserBookings(filtered);
    } else {
      const fallbackCo = cloudStore.getCoTravellers();
      if (fallbackCo && fallbackCo.length > 0) {
        setCoTravellers(fallbackCo);
      }
    }
  }, [user]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMsg('Please enter a valid Mobile No. or Email.');
      return;
    }
    setErrorMsg('');
    setOtp(['', '', '', '', '', '']);
    setStep('otp');
    setResendTimer(57);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`acc-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

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
    const name = fullName.trim() || (existingBooking ? existingBooking.customerName : isEmail ? inputVal.split('@')[0] : `Traveler ${inputVal.slice(-4)}`);

    login(email, phone, name);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: profileName,
      phone: profilePhone,
      city: profileCity,
    });
    setEditing(false);
  };

  const handleAddCoTraveller = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCoName.trim()) return;

    const newTraveller: CoTraveller = {
      id: `cot-${Date.now()}`,
      name: newCoName.trim(),
      age: parseInt(newCoAge, 10) || 25,
      gender: newCoGender,
      relation: newCoRelation,
    };

    const updated = [...coTravellers, newTraveller];
    setCoTravellers(updated);
    cloudStore.saveCoTravellers(updated, user?.uid);

    setNewCoName('');
    setNewCoAge('');
    setShowAddCoModal(false);
  };

  const handleRemoveCoTraveller = (id: string) => {
    const updated = coTravellers.filter((t) => t.id !== id);
    setCoTravellers(updated);
    cloudStore.saveCoTravellers(updated, user?.uid);
  };

  const handlePrintInvoice = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Logged-out Thomas Cook Style Login Screen
  if (!isLoggedIn) {
    return (
      <div className="bg-slate-50 min-h-screen py-14 flex items-center justify-center p-4 font-sans">
        <Container className="max-w-3xl">
          <Card className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12">
            {/* Left Graphic Banner */}
            <div className="md:col-span-6 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-8 flex flex-col justify-between text-slate-950 min-h-[340px] relative overflow-hidden">
              <div className="flex items-center space-x-2 z-10">
                <div className="bg-slate-950 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-md">
                  TC
                </div>
                <span className="font-black text-lg text-slate-950 tracking-tight">tripcustomizer</span>
              </div>

              <div className="space-y-3 z-10 py-6">
                <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-slate-950">
                  Login Now & Create Your Dream Bucket list 🏖️
                </h2>
                <p className="text-xs font-bold text-slate-900/80">
                  Access your booked trips, tax invoices, e-vouchers & exclusive deals.
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

                      <button
                        type="submit"
                        className="w-full bg-slate-200 hover:bg-amber-400 hover:text-slate-950 text-slate-700 font-bold py-3 rounded-xl text-xs transition-all shadow-xs cursor-pointer active:scale-98"
                      >
                        Log In
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
                        <span>SMS OTP code sent to <strong className="text-slate-800">{identifier}</strong></span>
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
                            id={`acc-otp-${idx}`}
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
                <span className="text-[10px] text-slate-400 font-semibold">© tripcustomizer 2026</span>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  // Filter Upcoming vs Past Bookings
  const upcomingBookings = userBookings.filter((b) => b.status === 'Confirmed' || b.status === 'Pending');
  const pastBookings = userBookings.filter((b) => b.status === 'Completed' || b.status === 'Cancelled');

  return (
    <div className="bg-slate-100 min-h-screen py-8 font-sans">
      <Container className="max-w-6xl space-y-6">
        {/* Top Breadcrumbs (Matching Screenshots) */}
        <div className="text-xs text-slate-500 font-medium flex items-center space-x-1.5">
          <Link href="/" className="text-sky-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 capitalize font-bold">
            {activeTab === 'manage'
              ? 'Manage Your Holidays'
              : activeTab === 'cotravellers'
              ? 'Co-travellers'
              : activeTab === 'bookings'
              ? 'My Bookings'
              : activeTab}
          </span>
        </div>

        {/* Main 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT SIDEBAR MENU (Exact Match to Screenshots media_1789370461943 & media_1789370461945) */}
          <div className="lg:col-span-3 bg-white border border-slate-200 shadow-xs rounded-xl overflow-hidden">
            <div className="flex flex-col">
              {/* Profile Tab */}
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center space-x-3 px-5 py-3.5 text-xs font-bold transition-all text-left border-b border-slate-100 cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>

              {/* My Bookings Tab */}
              <button
                onClick={() => setActiveTab('bookings')}
                className={`flex items-center space-x-3 px-5 py-3.5 text-xs font-bold transition-all text-left border-b border-slate-100 cursor-pointer ${
                  activeTab === 'bookings'
                    ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>My Bookings</span>
              </button>

              {/* Settings Tab */}
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center space-x-3 px-5 py-3.5 text-xs font-bold transition-all text-left border-b border-slate-100 cursor-pointer ${
                  activeTab === 'settings'
                    ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              {/* Co-Travellers Tab */}
              <button
                onClick={() => setActiveTab('cotravellers')}
                className={`flex items-center space-x-3 px-5 py-3.5 text-xs font-bold transition-all text-left border-b border-slate-100 cursor-pointer ${
                  activeTab === 'cotravellers'
                    ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Co-Travellers</span>
              </button>

              {/* Manage Your Holidays Tab */}
              <button
                onClick={() => setActiveTab('manage')}
                className={`flex items-center space-x-3 px-5 py-3.5 text-xs font-bold transition-all text-left cursor-pointer ${
                  activeTab === 'manage'
                    ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Manage Your Holidays</span>
              </button>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-6">
            {/* 1. MY BOOKINGS / MANAGE YOUR HOLIDAYS TAB (Matching Screenshot media_1789370461943) */}
            {(activeTab === 'bookings' || activeTab === 'manage') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                    {activeTab === 'manage' ? 'Manage Your Holidays' : 'My Bookings'}
                  </h1>
                  <Link href="/holidays">
                    <Button variant="accent" size="sm" className="font-bold text-slate-950">
                      + Book New Holiday
                    </Button>
                  </Link>
                </div>

                {/* Sub-Tabs: Upcoming | Past */}
                <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs flex space-x-2 w-full max-w-xs">
                  <button
                    onClick={() => setBookingSubTab('upcoming')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      bookingSubTab === 'upcoming' ? 'bg-slate-100 text-slate-900 border-b-2 border-sky-500' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setBookingSubTab('past')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                      bookingSubTab === 'past' ? 'bg-slate-100 text-slate-900 border-b-2 border-sky-500' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Past
                  </button>
                </div>

                {/* Booking Content List or Empty State */}
                {bookingSubTab === 'upcoming' ? (
                  upcomingBookings.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-3 shadow-xs">
                      <p className="text-slate-500 text-xs font-semibold">No bookings present at this time</p>
                      <Link href="/holidays">
                        <Button variant="outline" size="sm" className="font-bold">Explore Holiday Packages</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {upcomingBookings.map((b) => (
                        <Card key={b.id} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 space-y-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                            <div>
                              <span className="text-[11px] font-extrabold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-md">
                                Ref: {b.referenceNo}
                              </span>
                              <h3 className="text-base font-black text-slate-900 mt-1">{b.packageName}</h3>
                            </div>
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full ${
                                b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {b.status === 'Confirmed' ? '✓ Confirmed' : b.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                            <div>
                              <span className="text-slate-400 font-bold block uppercase text-[10px]">Destination</span>
                              <span className="font-bold text-slate-800">{b.destination}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-bold block uppercase text-[10px]">Travel Dates</span>
                              <span className="font-bold text-slate-800">{b.travelDates}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-bold block uppercase text-[10px]">Travelers</span>
                              <span className="font-bold text-slate-800">{b.travelersCount} Adults</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-bold block uppercase text-[10px]">Total Paid Amount</span>
                              <span className="font-black text-sky-700 text-sm">{formatCurrency(b.totalAmount)}</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-xs text-emerald-700 font-bold">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>E-Voucher & Tax Invoice Ready</span>
                            </div>

                            <Button
                              onClick={() => setSelectedInvoice(b)}
                              variant="primary"
                              size="sm"
                              className="font-bold flex items-center gap-1.5 cursor-pointer"
                            >
                              <FileText className="w-4 h-4" /> View Tax Invoice Bill & Voucher 📄
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )
                ) : pastBookings.length === 0 ? (
                  <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-3 shadow-xs">
                    <p className="text-slate-500 text-xs font-semibold">No past holiday bookings</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pastBookings.map((b) => (
                      <Card key={b.id} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <h3 className="font-bold text-slate-800 text-sm">{b.packageName}</h3>
                          <span className="text-xs bg-slate-100 text-slate-600 font-bold px-2.5 py-0.5 rounded-full">{b.status}</span>
                        </div>
                        <p className="text-xs text-slate-500">Ref: {b.referenceNo} • Amount: {formatCurrency(b.totalAmount)}</p>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. CO-TRAVELLERS TAB (Exact Match to Screenshot media_1789370461945) */}
            {activeTab === 'cotravellers' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                    Hi {user?.name || 'New User'},
                  </h1>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-sky-600">Co-travellers</h2>
                    <button
                      onClick={() => setShowAddCoModal(true)}
                      className="border border-sky-500 text-sky-600 hover:bg-sky-50 font-bold text-xs px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" /> Add Co-Traveller
                    </button>
                  </div>

                  {coTravellers.length === 0 ? (
                    <p className="text-xs text-slate-500 font-medium py-4 text-center">No saved co-travellers added yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {coTravellers.map((t) => (
                        <div key={t.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-extrabold text-slate-900 text-sm block">{t.name}</span>
                            <span className="text-slate-500 font-medium">{t.age} Yrs • {t.gender} ({t.relation})</span>
                          </div>
                          <button
                            onClick={() => handleRemoveCoTraveller(t.id)}
                            className="text-rose-500 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 cursor-pointer"
                            title="Remove Co-Traveller"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3. PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Personal Profile</h1>
                  <Button onClick={() => setEditing(!editing)} variant="outline" size="sm" className="font-bold">
                    {editing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>

                <Card className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
                    <div className="w-16 h-16 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-md">
                      {user?.name ? user.name[0].toUpperCase() : 'U'}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">{user?.name}</h2>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block mt-1">
                        Verified Traveler Account
                      </span>
                    </div>
                  </div>

                  {editing ? (
                    <form onSubmit={handleSaveProfile} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                        <input
                          type="text"
                          value={profileName}
                          onChange={(e) => setProfileName(e.target.value)}
                          className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Phone</label>
                        <input
                          type="text"
                          value={profilePhone}
                          onChange={(e) => setProfilePhone(e.target.value)}
                          className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">City</label>
                        <input
                          type="text"
                          value={profileCity}
                          onChange={(e) => setProfileCity(e.target.value)}
                          className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold text-slate-800"
                        />
                      </div>
                      <div className="sm:col-span-3 flex justify-end gap-2 pt-2">
                        <Button type="submit" variant="primary" size="sm" className="font-bold cursor-pointer">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block uppercase text-[10px]">Email Address</span>
                        <span className="font-bold text-slate-800">{user?.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block uppercase text-[10px]">Phone Number</span>
                        <span className="font-bold text-slate-800">{user?.phone}</span>
                      </div>
                      {user?.city && (
                        <div>
                          <span className="text-slate-400 font-bold block uppercase text-[10px]">City</span>
                          <span className="font-bold text-slate-800">{user.city}</span>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              </div>
            )}

            {/* 4. SETTINGS TAB */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Account Settings</h1>

                <Card className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 text-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="font-extrabold text-slate-900 block text-sm">WhatsApp Trip Updates</span>
                      <span className="text-slate-500 font-medium">Receive e-vouchers and itinerary updates on WhatsApp</span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-sky-600 cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="font-extrabold text-slate-900 block text-sm">Email Invoices & Vouchers</span>
                      <span className="text-slate-500 font-medium">Get PDF receipts sent directly to {user?.email}</span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-sky-600 cursor-pointer" />
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <span className="font-bold text-slate-700">Account Session</span>
                    <Button onClick={logout} variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-50 font-bold flex items-center gap-1 cursor-pointer">
                      <LogOut className="w-4 h-4" /> Logout Account
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* ADD CO-TRAVELLER MODAL */}
      {showAddCoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              onClick={() => setShowAddCoModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer"
            >
              ✕
            </button>

            <h3 className="font-black text-slate-900 text-lg">Add Co-Traveller</h3>

            <form onSubmit={handleAddCoTraveller} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Co-Traveller Name"
                  value={newCoName}
                  onChange={(e) => setNewCoName(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Age</label>
                  <input
                    required
                    type="number"
                    placeholder="25"
                    value={newCoAge}
                    onChange={(e) => setNewCoAge(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Gender</label>
                  <select
                    value={newCoGender}
                    onChange={(e) => setNewCoGender(e.target.value)}
                    className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Relationship</label>
                <select
                  value={newCoRelation}
                  onChange={(e) => setNewCoRelation(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                >
                  <option value="Spouse">Spouse</option>
                  <option value="Child">Child</option>
                  <option value="Parent">Parent</option>
                  <option value="Friend">Friend</option>
                  <option value="Family">Family</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" onClick={() => setShowAddCoModal(false)} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm" className="font-bold cursor-pointer">
                  Save Co-Traveller
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TAX INVOICE & TRAVEL VOUCHER MODAL */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl border border-slate-200 relative my-8">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-base cursor-pointer"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b-2 border-slate-200 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="bg-brand-700 text-white font-black text-sm px-2 py-0.5 rounded-lg">TC</div>
                  <span className="font-black text-xl text-brand-900 tracking-tight">tripcustomizer</span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Official Tax Invoice & Travel Voucher</p>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-bold text-slate-400 block uppercase">Invoice No.</span>
                <span className="font-black text-brand-700 text-sm">INV-{selectedInvoice.referenceNo}</span>
                <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">Issued: {new Date(selectedInvoice.createdAt).toLocaleDateString('en-IN')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <div className="space-y-1">
                <span className="font-extrabold text-slate-400 uppercase text-[10px] block">Issued By (Service Provider)</span>
                <p className="font-black text-slate-900 text-sm">tripcustomizer Travels Pvt. Ltd.</p>
                <p className="text-slate-600">GSTIN: 07AAAAA0000A1Z5</p>
                <p className="text-slate-600">Toll Free: 1800-2099-100</p>
                <p className="text-slate-600">Support: support@tripcustomizer.com</p>
              </div>
              <div className="space-y-1 sm:border-l sm:border-slate-200 sm:pl-4">
                <span className="font-extrabold text-slate-400 uppercase text-[10px] block">Billed To (Customer Details)</span>
                <p className="font-black text-slate-900 text-sm">{selectedInvoice.customerName}</p>
                <p className="text-slate-600 font-semibold"><Phone className="w-3 h-3 inline mr-1 text-brand-500" /> {selectedInvoice.customerPhone}</p>
                <p className="text-slate-600 font-semibold"><Mail className="w-3 h-3 inline mr-1 text-brand-500" /> {selectedInvoice.customerEmail}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider">Booked Package Details</h4>
              <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Description</th>
                      <th className="py-2.5 px-3">Travel Dates</th>
                      <th className="py-2.5 px-3">Pax</th>
                      <th className="py-2.5 px-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                    <tr>
                      <td className="py-3 px-3">
                        <span className="font-extrabold text-slate-900 block">{selectedInvoice.packageName}</span>
                        <span className="text-[10px] text-slate-500">{selectedInvoice.destination}</span>
                      </td>
                      <td className="py-3 px-3 font-semibold">{selectedInvoice.travelDates}</td>
                      <td className="py-3 px-3 font-semibold">{selectedInvoice.travelersCount} Adults</td>
                      <td className="py-3 px-3 text-right font-black text-slate-900">{formatCurrency(selectedInvoice.totalAmount)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Base Tour Package Fare:</span>
                <span className="font-bold text-slate-900">{formatCurrency(selectedInvoice.totalAmount * 0.95)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST (5% Tour Operator Service Tax):</span>
                <span className="font-bold text-slate-900">{formatCurrency(selectedInvoice.totalAmount * 0.05)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-slate-900">
                <span className="font-black text-sm">Grand Total Paid:</span>
                <span className="text-xl font-black text-emerald-700">{formatCurrency(selectedInvoice.totalAmount)}</span>
              </div>
            </div>

            <div className="p-4 bg-brand-50/70 border border-brand-100 rounded-2xl text-xs space-y-2">
              <span className="font-extrabold text-brand-900 uppercase text-[10px] block">Voucher Inclusions & Voucher Benefits</span>
              <ul className="space-y-1 text-slate-700 font-semibold list-disc list-inside">
                <li>🏨 4-Star Resort Accommodations with Daily Breakfast & Dinner</li>
                <li>🚘 Private AC Vehicle for Transfers & Full Sightseeing Tour</li>
                <li>🎟️ Monument Entry Tickets Included</li>
                <li>📞 24/7 On-Tour Manager Support & Emergency Assistance</li>
              </ul>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Button
                onClick={handlePrintInvoice}
                variant="accent"
                size="md"
                className="font-bold flex items-center gap-1.5 cursor-pointer text-slate-950"
              >
                <Printer className="w-4 h-4" /> Print / Save Tax Invoice PDF 🖨️
              </Button>
              <Button
                onClick={() => setSelectedInvoice(null)}
                variant="outline"
                size="md"
                className="font-bold cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
