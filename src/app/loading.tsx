import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden" aria-busy="true" aria-live="polite">
      {/* 1. Top High-Speed Progress Bar Animation */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-sky-400 via-brand-500 to-indigo-600 animate-[loading-bar_1.2s_ease-in-out_infinite]" />
      </div>

      {/* 2. Skeleton Hero Area */}
      <div className="w-full bg-slate-900/90 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4 animate-pulse">
          <div className="h-5 w-36 bg-slate-800 rounded-full" />
          <div className="h-8 sm:h-12 w-3/4 max-w-xl bg-slate-800 rounded-xl" />
          <div className="h-4 w-full max-w-lg bg-slate-800/60 rounded" />
        </div>
      </div>

      {/* 3. Skeleton Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="flex items-center justify-between mb-6 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 rounded-lg" />
          <div className="h-6 w-24 bg-slate-200 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs animate-pulse"
            >
              {/* Image skeleton */}
              <div className="h-44 sm:h-48 bg-slate-200 w-full" />

              {/* Content skeleton */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-20 bg-slate-200 rounded-full" />
                  <div className="h-4 w-12 bg-slate-100 rounded" />
                </div>
                <div className="h-5 w-4/5 bg-slate-200 rounded" />
                <div className="h-3 w-3/5 bg-slate-100 rounded" />
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="h-6 w-24 bg-slate-200 rounded" />
                  <div className="h-8 w-20 bg-slate-200 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
