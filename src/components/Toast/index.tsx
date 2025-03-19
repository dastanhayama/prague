"use client"
import React, { useEffect, useState } from 'react';
import CloseIcon from '@icons/General/x-close.svg'
import InfoIcon from '@icons/General/info-circle.svg'
import SuccessIcon from '@icons/General/check-circle.svg'
import FeaturedIcon from '../FeaturedIcon';

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
          <FeaturedIcon type="outline" color='success' size="md" icon={SuccessIcon} />
        );
      case 'error':
        return (
          <FeaturedIcon type="outline" color='error' size="md" icon={InfoIcon} />
        );
      case 'warning':
        return (
          <FeaturedIcon type="outline" color='warning' size="md" icon={InfoIcon} />
        );
      case 'info':
        return (
          <FeaturedIcon type="outline" color='gray' size="md" icon={InfoIcon} />
        );
      case 'brand':
        return (
          <FeaturedIcon type="outline" color='brand' size="md" icon={InfoIcon} />
        );
      default:
        return (
          <FeaturedIcon type="modern" size="md" icon={InfoIcon} />
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