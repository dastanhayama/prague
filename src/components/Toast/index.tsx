"use client"
import React, { useEffect, useState } from 'react';
import CloseIcon from '@icons/General/x-close.svg'
import InfoIcon from '@icons/General/info-circle.svg'
import SuccessIcon from '@icons/General/check-circle.svg'

export type ToastType = 'default' | 'brand' | 'info' | 'error' | 'warning' | 'success';

export interface ToastProps {
  id: string;
  type?: ToastType;
  message: string;
  supportText?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type = 'default',
  message,
  supportText,
  duration = 5000,
  onClose
}) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration]);
  
  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 250); // Animation duration
  };
  
  // Icon container classes
  const iconContainerClass = "flex items-center justify-center w-[40px] max-w-[40px] min-w-[40px] h-[40px] max-h-[40px] min-h-[40px] bg-primary rounded-full p-[2px] border-[2px] z-10";
  const innerIconContainerClass = "flex items-center justify-center w-[30px] max-w-[30px] min-w-[30px] h-[30px] max-h-[30px] min-h-[30px] bg-primary rounded-full p-[2px] border-[2px] z-10";

  // Icon classes based on type
  const getIconClass = (color: string) => ``;

  const IconComponent = () => {
    switch (type) {
      case 'success':
        return (
          <div className={`${iconContainerClass} border-fg-success-primary/10`}>
            <div className={`${innerIconContainerClass} border-fg-success-primary/30`}>
              <SuccessIcon className='w-5 h-5 [&>path]:stroke-fg-success-primary' />
            </div>
          </div>
        );
      case 'error':
        return (
          <div className={`${iconContainerClass} border-fg-error-primary/10`}>
            <div className={`${innerIconContainerClass} border-fg-error-primary/30`}>
              <InfoIcon className='w-5 h-5 [&>path]:stroke-fg-error-primary' />
            </div>
          </div>
        );
      case 'warning':
        return (
          <div className={`${iconContainerClass} border-fg-warning-primary/10`}>
            <div className={`${innerIconContainerClass} border-fg-warning-primary/30`}>
              <InfoIcon className='w-5 h-5 [&>path]:stroke-fg-warning-primary' />
            </div>
          </div>
        );
      case 'info':
        return (
          <div className={`${iconContainerClass} border-fg-quaternary-500/10`}>
            <div className={`${innerIconContainerClass} border-fg-quaternary-500/30`}>
              <InfoIcon className='w-5 h-5 [&>path]:stroke-fg-quaternary-500' />
            </div>
          </div>
        );
      case 'brand':
        return (
          <div className={`${iconContainerClass} border-fg-brand-primary-600/10`}>
            <div className={`${innerIconContainerClass} border-fg-brand-primary-600/30`}>
              <InfoIcon className='w-5 h-5 [&>path]:stroke-fg-brand-primary-600' />
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-md p-[10px] border border-[#D0D5DD] z-10">
            <InfoIcon className='w-5 h-5 [&>path]:stroke-fg-secondary-700' />
          </div>
        );
    }
  };
  
  // Toast container classes
  const baseToastClass = "w-full max-w-[340px] flex items-start gap-xl p-xl rounded-xl shadow-md border border-[#D0D5DD]";
  const enterAnimationClass = isMounted ? "translate-x-0 opacity-100" : "translate-x-0 opacity-0";
  const exitAnimationClass = isLeaving ? "translate-x-full opacity-0" : enterAnimationClass;
  const transitionClass = "transition-all duration-200 ease-in-out";

  const getToastStyles = () => {
    return `${baseToastClass} bg-primary text-secondary-700 ${exitAnimationClass} ${transitionClass}`;
  };

  // Text classes
  const messageClass = "text-[14px] leading-[20px] font-semibold text-secondary-700";
  const supportTextClass = "text-[14px] leading-[20px] font-normal text-[#475467]";

  // Button classes
  const dismissButtonClass = "text-[14px] leading-[20px] font-semibold text-secondary-700 bg-primary px-lg py-md rounded-md border border-[#D0D5DD]";
  const viewChangesButtonClass = "text-[14px] leading-[20px] font-semibold text-primary bg-[#101828] px-lg py-md rounded-md border border-[#101828]";

  return (
    <div className={getToastStyles()}>
      <IconComponent />
      <div className="flex flex-col gap-1">
        <p className={messageClass}>{message}</p>
        <p className={supportTextClass}>{supportText}</p>
        <div className='flex items-start gap-lg mt-md'>
          <button className={dismissButtonClass}>Dismiss</button>
          <button className={viewChangesButtonClass}>View changes</button>
        </div>
      </div>
      <button 
        onClick={handleClose}
        className="flex-shrink-0 cursor-pointer"
        aria-label="Close"
      >
        <CloseIcon className="w-5 h-5 [&>path]:stroke-[#98A2B3]" />
      </button>
    </div>
  );
};

export default Toast;