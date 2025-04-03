import React from 'react';
import Badge from '../Badge';

type TabButtonProps = {
  current?: boolean;
  size?: 'sm' | 'md'; // You can add more sizes as needed
  type?: 'button white' | 'button primary' | 'button gray' | 'underline' | 'underline filled' | 'line vertical tabs'; // Add other types as needed
  fullWidth?: boolean;
  state?: 'default'; // Add other states as needed
  badge?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
};

function TabButtonBase({
  current = false,
  size = 'sm',
  type = 'button white',
  fullWidth = true,
  state = 'default',
  badge = false,
  onClick,
  children
}: TabButtonProps) {
  // Base classes that are always applied
  const baseClasses = [
    'text-center',
    'font-semibold',
    'cursor-pointer',
    'flex',
    'items-center',
    'justify-center',
    'gap-md',
    'max-w-[240px]'
  ];

  // Size classes
  const sizeClasses = {
    sm: 'text-[14px] leading-[20px]',
    md: 'text-[16px] leading-[24px]',
  };

  // Type classes
  const typeClasses = {
    'button white': current 
      ? 'bg-primary text-[#344054] shadow-xs focus:outline-[4px] focus:outline-[#98A2B324] rounded-sm py-md px-lg' 
      : 'bg-transparent text-[#667085] hover:bg-primary hover:text-[#344054] hover:shadow-xs focus:bg-primary focus:text-[#667085] focus:shadow-xs focus:outline-[4px] focus:outline-[#98A2B324] rounded-sm py-md px-lg',
    'button primary': current 
    ? 'bg-[#FFF4F8] text-[#A80B48] focus:outline-[4px] focus:outline-[#D80E5D3D] rounded-sm py-md px-lg' 
    : 'bg-transparent text-[#667085] hover:bg-[#FFF4F8] hover:text-[#A80B48] focus:bg-primary focus:text-[#667085] focus:outline-[4px] focus:outline-[#D80E5D3D] rounded-sm py-md px-lg',
    'button gray':  current 
    ? 'bg-[#F9FAFB] text-[#344054] focus:outline-[4px] focus:outline-[#98A2B324] rounded-sm py-md px-lg' 
    : 'bg-transparent text-[#667085] hover:bg-[#F9FAFB] hover:text-[#344054] focus:bg-primary focus:text-[#667085] focus:outline-[4px] focus:outline-[#98A2B324] rounded-sm py-md px-lg',
    'underline': current 
    ? 'rounded-none px-xs py-0 pb-lg border-b-[2px] border-[#C00C53] text-[#A80B48]' : 'rounded-none px-xs py-0 pb-lg border-b-[2px] border-transparent text-[#667085] hover:border-[#C00C53] hover:text-[#A80B48] focus:border-transparent focus:text-[#667085]',
    'underline filled': current
    ? 'rounded-none p-lg border-b-[2px] border-[#C00C53] text-[#A80B48] bg-[#FFF4F8]' : 'rounded-none p-lg border-b-[2px] border-transparent text-[#667085] hover:border-[#C00C53] hover:text-[#A80B48] focus:border-transparent focus:text-[#667085]',
    'line vertical tabs': current 
    ? 'border-l-[2px] border-[#C00C53] rounded-none text-[#A80B48] py-md px-lg' : 'border-l-[2px] border-transparent rounded-none text-[#667085] hover:border-l-[2px] hover:border-[#C00C53] hover:text-[#A80B48] focus:text-[#667085] focus:border-transparent py-md px-lg'

  };

  // Full width class
  const fullWidthClass = fullWidth ? 'w-full' : 'w-auto';

  // Combine all classes
  const combinedClasses = [
    ...baseClasses,
    sizeClasses[size],
    typeClasses[type],
    fullWidthClass,
    // Add state classes when needed
  ].join(' ');

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
      {badge ? badge : null}
    </button>
  );
}

export default TabButtonBase;