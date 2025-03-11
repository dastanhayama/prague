"use client"
import { useState, useCallback } from 'react';
import { ToastType } from './index';

export interface ToastOptions {
  type?: ToastType;
  message: string;
  supportText?: string;
  duration?: number;
}

type Toast = {
  id: string;
  type: ToastType;
  message: string;
  supportText?: string;
  duration: number;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const { type = 'default', message,supportText, duration = 5000 } = options;
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id,
        type,
        message,
        supportText,
        duration,
      },
    ]);
    
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};

export default useToast;