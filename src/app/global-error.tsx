'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('ChunkLoadError')
    ) {
      window.location.reload();
    }
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
          <h1 className="text-3xl font-black text-rose-600 mb-2">Application Updated</h1>
          <p className="text-xs text-slate-500 mb-6">
            A new version of the app was deployed. Click below to refresh.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-brand-600 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md cursor-pointer"
          >
            Refresh Application
          </button>
        </div>
      </body>
    </html>
  );
}
