'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
          <h1 className="text-4xl font-black text-rose-600 mb-2">Application Error</h1>
          <p className="text-xs text-slate-500 mb-6">
            {error?.message || 'A critical error occurred in the application.'}
          </p>
          <button
            onClick={() => reset()}
            className="bg-brand-600 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md cursor-pointer"
          >
            Refresh Application
          </button>
        </div>
      </body>
    </html>
  );
}
