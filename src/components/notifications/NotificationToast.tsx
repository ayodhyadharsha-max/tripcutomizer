'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Bell, CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

interface NotificationContextType {
  showToast: (title: string, description: string, type?: ToastMessage['type']) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, description: string, type: ToastMessage['type'] = 'info') => {
    const id = `toast-${Date.now()}`;
    const newToast: ToastMessage = { id, title, description, type };
    setToasts((prev) => [newToast, ...prev]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Render Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-white border rounded-xl p-4 shadow-xl flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300 ${
              toast.type === 'success'
                ? 'border-emerald-200 bg-emerald-50/90 text-emerald-950'
                : toast.type === 'warning'
                ? 'border-amber-200 bg-amber-50/90 text-amber-950'
                : toast.type === 'error'
                ? 'border-rose-200 bg-rose-50/90 text-rose-950'
                : 'border-blue-200 bg-blue-50/90 text-blue-950'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
              {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
              {toast.type === 'info' && <Bell className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />}
              <div>
                <h4 className="font-extrabold text-xs">{toast.title}</h4>
                <p className="text-[11px] opacity-90 mt-0.5 font-medium leading-snug">{toast.description}</p>
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-700 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
