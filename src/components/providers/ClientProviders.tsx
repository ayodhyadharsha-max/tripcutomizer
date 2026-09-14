'use client';

import React from 'react';
import { NotificationProvider } from '@/components/notifications/NotificationToast';
import { AuthProvider } from '@/context/AuthContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </AuthProvider>
  );
}
