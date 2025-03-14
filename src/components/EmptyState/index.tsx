'use client'; // Add this line at the top

import React from 'react';
import PlusIcon from '@icons/General/plus.svg';

interface Action {
  label: string;
  onClick: () => void;
}

interface EmptyStateProps {
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  subtitle?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  icon?: React.ReactNode;
  background?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  size = 'md',
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  icon,
  background,
}) => {
  // Define size-based styles for title and subtitle
  const titleSizes = {
    sm: 'text-base font-semibold text-primary-900 leading-[24px]', // 16px
    md: 'text-lg font-semibold text-primary-900 leading-[28px]', // 18px
    lg: 'text-xl font-semibold text-primary-900 leading-[30px]', // 20px
  };

  const subtitleSizes = {
    sm: 'text-sm text-tertiary-600 leading-[20px]', // 14px
    md: 'text-sm text-tertiary-600 leading-[20px]', // 14px
    lg: 'text-base text-tertiary-600 leading-[24px]', // 16px
  };

  const iconMarginBottom = {
    sm: 'mb-xl',
    md: 'mb-2xl',
    lg: 'mb-2xl',
  };

  const titleMarginBottom = {
    sm: 'mb-xs',
    md: 'mb-md',
    lg: 'mb-md',
  };

  const subtitleMarginBottom = {
    sm: 'mb-3xl',
    md: 'mb-4xl',
    lg: 'mb-4xl',
  }; 
  const containerPaddingTop = {
    sm: 'pt-[12rem]', 
    md: 'pt-[14rem]',    
    lg: 'pt-[16rem]',    
  };

  return (
    <div className={`relative flex flex-col items-center justify-center text-center max-w-[512px] w-full ${containerPaddingTop[size]}`}>
      {/* Custom background */}
      {background && (
        <div className="absolute inset-0 z-[-1] flex items-center justify-center">
          {background}
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${iconMarginBottom[size]}`}>
          {icon}
        </div>
      )}

      {/* Title */}
      {title && (
        <h2 className={`relative z-10 ${titleSizes[size]} ${titleMarginBottom[size]}`}>
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={`relative z-10 ${subtitleSizes[size]} ${subtitleMarginBottom[size]}`}>
          {subtitle}
        </p>
      )}

      {/* Actions */}
      <div className="relative z-10 flex gap-lg">
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="py-[10px] px-xl rounded-md font-semibold text-base leading-[24px] text-[#344054] bg-primary border border-[#D0D5DD] shadow-xs cursor-pointer"
            aria-label={secondaryAction.label}
          >
            {secondaryAction.label}
          </button>
        )}
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className="flex items-center gap-sm py-[10px] px-xl rounded-md font-semibold text-base leading-[24px] text-primary bg-[#101828] border border-[#101828] cursor-pointer"
            aria-label={primaryAction.label}
          >
            <PlusIcon className="[&>path]:stroke-primary w-[20px] h-[20px]" />
            {primaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;