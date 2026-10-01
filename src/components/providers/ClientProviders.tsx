'use client';

import React, { useEffect } from 'react';
import { NotificationProvider } from '@/components/notifications/NotificationToast';
import { AuthProvider } from '@/context/AuthContext';
import { CustomTripPopupModal } from '@/components/modals/CustomTripPopupModal';

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
        {children}
        <CustomTripPopupModal />
      </NotificationProvider>
    </AuthProvider>
  );
}
