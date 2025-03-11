"use client"
import React, { createContext, useContext, ReactNode } from 'react';
import useToast, { ToastOptions } from './useToast';
import Toast from './index';

interface ToastContextType {
  addToast: (options: ToastOptions) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      {/* Render toasts directly without a separate container component */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
            <Toast 
                key={toast.id}
              id={toast.id}
              type={toast.type}
              message={toast.message}
              supportText={toast.supportText}
              duration={toast.duration}
              onClose={removeToast}
            />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};