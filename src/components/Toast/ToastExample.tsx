"use client"
import React from 'react';
import { useToastContext } from '@/components/Toast/ToastContext'

// Пример компонента, который использует тосты через контекст
 const ToastExample: React.FC = () => {
  const { addToast } = useToastContext();

  const handleDefault = () => {
    // Имитация сохранения данных
      addToast({
        type: 'default',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  const handleSuccess = () => {
    // Имитация сохранения данных
      addToast({
        type: 'success',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  const handleError = () => {
    // Имитация сохранения данных
      addToast({
        type: 'error',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  const handleWarning = () => {
    // Имитация сохранения данных
      addToast({
        type: 'warning',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  const handleBrand = () => {
    // Имитация сохранения данных
      addToast({
        type: 'brand',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  const handleInfo = () => {
    // Имитация сохранения данных
      addToast({
        type: 'info',
        message: 'We have just released a new feature!',
        supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        duration: 5000,
      });
  };
  
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Пример использования Toast через контекст</h2>
      <button
        onClick={handleDefault}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Default
      </button>
      <button
        onClick={handleBrand}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Brand
      </button>
      <button
        onClick={handleInfo}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Info
      </button>
      <button
        onClick={handleError}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Error
      </button>
      <button
        onClick={handleSuccess}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Success
      </button>
      <button
        onClick={handleWarning}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Warning
      </button>
      
    </div>
  );
};

export default ToastExample;
