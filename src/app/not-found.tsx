'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
        <h1 className="text-6xl font-black text-brand-600 mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Page Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The page or tour package you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
