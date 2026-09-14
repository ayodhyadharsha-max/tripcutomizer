'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { cloudStore, CustomerBooking } from '@/lib/cloudStore';
import { formatCurrency } from '@/lib/utils';
import { User, Phone, Mail, Calendar, MapPin, CheckCircle2, Clock, LogOut, Package, ArrowRight } from 'lucide-react';

export default function CustomerAccountPage() {
  const { user, isLoggedIn, login, logout, updateProfile } = useAuth();

  // Login form state if not logged in
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  // Profile Edit State
  const [editing, setEditing] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileCity, setProfileCity] = useState('');

  // User Bookings
  const [userBookings, setUserBookings] = useState<CustomerBooking[]>([]);

  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setProfilePhone(user.phone || '');
      setProfileCity(user.city || '');

      // Load bookings matching this user's email or phone
      const allBookings = cloudStore.getBookings();
      const filtered = allBookings.filter(
        (b) => b.customerEmail.toLowerCase() === user.email.toLowerCase() || b.customerPhone === user.phone
      );
      setUserBookings(filtered);
    }
  }, [user]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(emailInput, phoneInput, nameInput);
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

  if (!isLoggedIn) {
    return (
      <div className="bg-slate-50 min-h-screen py-14 flex items-center justify-center">
        <Container className="max-w-md">
          <Card className="p-8 bg-white rounded-3xl shadow-xl border border-slate-200 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto">
                <User className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black text-slate-900">Customer Login / Signup</h1>
              <p className="text-xs text-slate-500">
                Enter your details once. We save your profile so you never have to re-enter details again!
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Mobile Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 font-semibold text-slate-800"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full font-black py-3">
                SAVE PROFILE & LOGIN →
              </Button>
            </form>
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
            <Button onClick={logout} variant="ghost" size="sm" className="text-rose-600 hover:bg-rose-50 font-bold flex items-center gap-1">
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
                  className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Phone</label>
                <input
                  type="text"
                  value={profilePhone}
                  onChange={(e) => setProfilePhone(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">City</label>
                <input
                  type="text"
                  value={profileCity}
                  onChange={(e) => setProfileCity(e.target.value)}
                  className="w-full bg-slate-50 border rounded-xl px-3 py-2 font-semibold"
                />
              </div>
              <div className="sm:col-span-3 flex justify-end gap-2 pt-2">
                <Button type="submit" variant="primary" size="sm" className="font-bold">
                  Save Changes
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Bookings Section */}
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
              <p className="text-slate-500 text-sm font-semibold">No active bookings found yet.</p>
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
                        {b.referenceNo}
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
                      <span className="text-slate-400 font-bold block uppercase text-[10px]">Total Amount</span>
                      <span className="font-black text-brand-700 text-sm">{formatCurrency(b.totalAmount)}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
