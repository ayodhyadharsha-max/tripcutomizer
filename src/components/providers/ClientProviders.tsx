'use client';

import React, { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { NotificationProvider } from '@/components/notifications/NotificationToast';
import { AuthProvider } from '@/context/AuthContext';
import { NavigationProgressBar } from '@/components/navigation/NavigationProgressBar';

const CustomTripPopupModal = dynamic(
  () => import('@/components/modals/CustomTripPopupModal').then((mod) => mod.CustomTripPopupModal),
  { ssr: false }
);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Automatically catch Next.js stale chunk loading errors when new deployment happens
    const handleChunkError = (event: PromiseRejectionEvent | ErrorEvent) => {
      const message =
        'reason' in event
          ? event.reason?.message || String(event.reason || '')
          : event.message || '';

      if (
        message.includes('Loading chunk') ||
        message.includes('ChunkLoadError') ||
        message.includes('Failed to fetch dynamically imported module')
      ) {
        const hasReloaded = sessionStorage.getItem('chunk_reload_attempt');
        if (!hasReloaded) {
          sessionStorage.setItem('chunk_reload_attempt', 'true');
          window.location.reload();
        }
      }
    };

    window.addEventListener('unhandledrejection', handleChunkError);
    window.addEventListener('error', handleChunkError);

    return () => {
      window.removeEventListener('unhandledrejection', handleChunkError);
      window.removeEventListener('error', handleChunkError);
    };
  }, []);

  return (
    <AuthProvider>
      <NotificationProvider>
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>
        {children}
        <CustomTripPopupModal />
      </NotificationProvider>
    </AuthProvider>
  );
}
