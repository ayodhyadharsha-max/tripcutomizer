'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';
import { User, Phone, Mail, MapPin, LogOut, Package, FileText, Printer, CheckCircle2, ShieldCheck, AlertCircle, LogIn, UserPlus } from 'lucide-react';

export default function CustomerAccountPage() {
  const { user, isLoggedIn, login, logout, updateProfile } = useAuth();

  // Auth Mode: 'login' (existing user) vs 'signup' (new user)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // Existing User Login State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginError, setLoginError] = useState('');

  // New User Signup State
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');

  // Profile Edit State
  const [editing, setEditing] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileCity, setProfileCity] = useState('');

  // User Bookings
  const [userBookings, setUserBookings] = useState<CustomerBooking[]>([]);

  // Selected Booking for Detailed Tax Invoice Modal
  const [selectedInvoice, setSelectedInvoice] = useState<CustomerBooking | null>(null);

  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setProfilePhone(user.phone || '');
      setProfileCity(user.city || '');

      // Strict user booking isolation
      const allBookings = cloudStore.getBookings();
      const filtered = allBookings.filter(
        (b) => b.customerEmail.toLowerCase() === user.email.toLowerCase() || b.customerPhone === user.phone
      );
      setUserBookings(filtered);
    }
  }, [user]);

  // Existing Customer Login Handler (only needs email or phone!)
  const handleExistingUserLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const input = loginIdentifier.trim();

    if (!input) {
      setLoginError('Please enter your registered email or phone number.');
      return;
    }

    // Try finding existing profile or existing booking
    const isEmail = input.includes('@');
    const email = isEmail ? input : `${input.replace(/\D/g, '')}@tripcustomizer-customer.com`;
    const phone = !isEmail ? input : '+91 9876543210';

    // Search existing bookings or profile to extract name
    const allBookings = cloudStore.getBookings();
    const existingBooking = allBookings.find(
      (b) => b.customerEmail.toLowerCase() === input.toLowerCase() || b.customerPhone.includes(input)
    );

    const derivedName = existingBooking ? existingBooking.customerName : 'Valued Traveler';

    login(email, phone, derivedName);
  };

  // New Customer Signup Handler
  const handleNewUserSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login(signupEmail, signupPhone, signupName);
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

  const handlePrintInvoice = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-slate-50 min-h-screen py-14 flex items-center justify-center">
        <Container className="max-w-md">
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            {/* Header Title */}
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto">
                <User className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black text-slate-900">Welcome to tripcustomizer</h1>
              <p className="text-xs text-slate-500">
                Manage your holiday bookings, e-vouchers & tax invoices.
              </p>
            </div>

            {/* Login vs Signup Tabs */}
            <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-extrabold">
              <button
                onClick={() => setAuthMode('login')}
                className={`py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  authMode === 'login'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <LogIn className="w-4 h-4 text-brand-600" />
                <span>Existing User (Login)</span>
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  authMode === 'signup'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <UserPlus className="w-4 h-4 text-brand-600" />
                <span>New User (Sign Up)</span>
              </button>
            </div>

            {/* TAB 1: Existing Customer Login (Needs ONLY email/phone) */}
            {authMode === 'login' && (
              <form onSubmit={handleExistingUserLogin} className="space-y-4 text-xs">
                {loginError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Registered Mobile Number or Email Address
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Phone Number or Email"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                    Fast 1-step sign in for existing customers.
                  </span>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full font-black py-3 cursor-pointer">
                  LOG IN TO MY ACCOUNT →
                </Button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode('signup')}
                    className="text-brand-600 hover:underline font-bold text-xs cursor-pointer"
                  >
                    Don't have an account? Create New Account
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: New Customer Signup */}
            {authMode === 'signup' && (
              <form onSubmit={handleNewUserSignup} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mobile Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full font-black py-3 cursor-pointer">
                  CREATE ACCOUNT & SAVE PROFILE →
                </Button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-brand-600 hover:underline font-bold text-xs cursor-pointer"
                  >
                    Already have an account? Log In
                  </button>
                </div>
              </form>
            )}
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Container className="max-w-5xl space-y-8">
        {/* Profile Card Header */}
        <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-md">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black text-slate-900">{user?.name}</h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Verified Traveler
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-1 font-medium">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-brand-500" /> {user?.email}</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-500" /> {user?.phone}</span>
                {user?.city && <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-500" /> {user?.city}</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={() => setEditing(!editing)} variant="outline" size="sm" className="font-bold">
              {editing ? 'Cancel' : 'Edit Profile'}
            </Button>
            <Button onClick={logout} variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-50 font-bold flex items-center gap-1 cursor-pointer">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </Card>

        {/* Edit Profile Form if Active */}
        {editing && (
          <Card className="p-6 bg-white rounded-3xl shadow-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Update Profile Details</h3>
            <form onSubmit={handleSaveProfile} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
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
          </Card>
        )}

        {/* Bookings & Invoices Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Package className="w-5 h-5 text-brand-600" /> My Holiday Bookings & E-Vouchers
            </h2>
            <Link href="/holidays">
              <Button variant="accent" size="sm" className="font-bold text-slate-950">
                + Book New Trip
              </Button>
            </Link>
          </div>

          {userBookings.length === 0 ? (
            <Card className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
              <p className="text-slate-500 text-sm font-semibold">No active bookings found for your account yet.</p>
              <Link href="/holidays">
                <Button variant="primary" size="sm" className="font-bold">Explore 50+ Packages</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {userBookings.map((b) => (
                <Card key={b.id} className="p-6 bg-white rounded-3xl shadow-sm border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-extrabold bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-md">
                        Ref: {b.referenceNo}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mt-1">{b.packageName}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          b.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : b.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {b.status === 'Confirmed' ? '✓ Confirmed' : b.status}
                      </span>
                    </div>
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
                      <span className="font-black text-brand-700 text-sm">{formatCurrency(b.totalAmount)}</span>
                    </div>
                  </div>

                  {/* Actions Bar for Bill / Invoice / Voucher */}
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
          )}
        </div>
      </Container>

      {/* TAX INVOICE & TRAVEL VOUCHER MODAL */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl border border-slate-200 relative my-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-base cursor-pointer"
            >
              ✕
            </button>

            {/* Print Header */}
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

            {/* Company & Customer Details */}
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

            {/* Package & Trip Particulars Table */}
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

            {/* Tax Breakdown Table */}
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

            {/* Voucher Inclusions List */}
            <div className="p-4 bg-brand-50/70 border border-brand-100 rounded-2xl text-xs space-y-2">
              <span className="font-extrabold text-brand-900 uppercase text-[10px] block">Voucher Inclusions & Voucher Benefits</span>
              <ul className="space-y-1 text-slate-700 font-semibold list-disc list-inside">
                <li>🏨 4-Star Resort Accommodations with Daily Breakfast & Dinner</li>
                <li>🚘 Private AC Vehicle for Transfers & Full Sightseeing Tour</li>
                <li>🎟️ Monument Entry Tickets Included</li>
                <li>📞 24/7 On-Tour Manager Support & Emergency Assistance</li>
              </ul>
            </div>

            {/* Modal Actions */}
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
