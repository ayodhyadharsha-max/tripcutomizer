'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If chunk load error, auto-reload once to fetch latest Vercel deployment assets
    if (
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('ChunkLoadError') ||
      error?.name === 'ChunkLoadError'
    ) {
      const reloaded = sessionStorage.getItem('chunk_error_reload');
      if (!reloaded) {
        sessionStorage.setItem('chunk_error_reload', 'true');
        window.location.reload();
      }
    }
  }, [error]);

  const handleRetry = () => {
    if (
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('ChunkLoadError')
    ) {
      window.location.reload();
    } else {
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
        <h1 className="text-3xl font-black text-rose-600 mb-2">Something Went Wrong</h1>
        <p className="text-xs text-slate-500 mb-6">
          {error?.message?.includes('Loading chunk')
            ? 'A new update was deployed! Click Try Again to load the latest version.'
            : error?.message || 'An unexpected error occurred while loading this page.'}
        </p>
        <div className="flex justify-center space-x-3">
          <button
            onClick={handleRetry}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-full transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
