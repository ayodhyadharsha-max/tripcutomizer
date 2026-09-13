'use client';

import React from 'react';
import { NotificationProvider } from '@/components/notifications/NotificationToast';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      {children}
    </NotificationProvider>
  );
}
