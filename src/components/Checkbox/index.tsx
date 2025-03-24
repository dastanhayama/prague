import React from 'react';
import CheckIcon from '@icons/General/check.svg';
import MinusIcon from '@icons/General/minus.svg';

interface CheckboxProps {
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  name?: string;
  disabled?: boolean;
  text?: string;
  supportingText?: string;
}

const Checkbox = ({
  type = 'radio',
  checked = false,
  indeterminate = false,
  text,
  supportingText,
  size = 'md',
  disabled = false,
  name = 'custom-radio',
}: CheckboxProps) => {
  // Size configuration
  const sizeConfig = {
    sm: {
      container: 'w-4 h-4',
      dot: 'w-1.5 h-1.5',
      border: 'checked:border-[5px]',
      icon: 'w-[12px] h-[12px]',
      gap: 'gap-2',
      text: 'text-[14px] leading-[20px]',
      supportingText: 'text-[14px] leading-[20px]'
    },
    md: {
      container: 'w-5 h-5',
      dot: 'w-2 h-2',
      border: 'checked:border-[6px]',
      icon: 'w-[14px] h-[14px]',
      gap: 'gap-3',
      text: 'text-[16px] leading-[24px]',
      supportingText: 'text-[16px] leading-[24px]'
    }
  };

  // Current size classes
  const currentSize = sizeConfig[size];

  // Base classes
  const baseClasses = {
    iconContainer: `flex items-center justify-center cursor-pointer relative ${text || supportingText ? 'mt-1 ' : 'mt-0'}`,
    input: {
      base: 'appearance-none border border-[#D0D5DD] bg-transparent disabled:bg-[#F9FAFB] disabled:cursor-not-allowed flex justify-center items-center transition-colors duration-200 cursor-pointer',
      focus: 'focus:ring-[#98A2B324] focus:ring-[4px]',
      checked: {
        radio: 'checked:border-[#C00C53]',
        checkbox: 'checked:bg-[#C00C53] checked:border-[#C00C53]'
      },
      indeterminate: 'checked:focus:ring-[#98A2B324]'
    },
    radioDot: 'absolute bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 checked:opacity-100 pointer-events-none',
    icon: {
      base: 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none',
      disabled: '[&>path]:stroke-[#D0D5DD]',
      active: '[&>path]:stroke-primary',
      stroke: '[&>path]:stroke-[3.5px]'
    },
    textContainer: 'flex flex-col justify-start gap-0',
    text: {
      primary: 'text-secondary-700 font-medium',
      secondary: 'text-[#475467]'
    },
    layout: 'flex items-start'
  };

  // Dynamic classes
  const borderRadius = type === 'radio' ? 'rounded-full' : 'rounded-xs';
  const checkedFocusRing = indeterminate ? baseClasses.input.indeterminate : 'checked:focus:ring-[#D80E5D3D]';
  const checkedBorder = type === 'checkbox' ? baseClasses.input.checked.checkbox : currentSize.border;
  const iconColor = disabled ? baseClasses.icon.disabled : baseClasses.icon.active;

  return (
    <div className={`${baseClasses.layout} ${currentSize.gap}`}>
      <label className={baseClasses.iconContainer}>
        <input
          type={type}
          name={name}
          disabled={disabled}
          className={`
            ${baseClasses.input.base}
            ${currentSize.container}
            ${borderRadius}
            ${baseClasses.input.focus}
            ${checkedFocusRing}
            ${baseClasses.input.checked.radio}
            ${checkedBorder}
          `}
        />
        
        {type === 'radio' ? (
          <span 
            className={`
              ${baseClasses.radioDot}
              ${currentSize.dot}
            `} 
          />
        ) : (
          indeterminate ? (
            <MinusIcon className={`
              ${baseClasses.icon.base}
              ${iconColor}
              ${baseClasses.icon.stroke}
              ${currentSize.icon}
            `} />
          ) : (
            <CheckIcon className={`
              ${baseClasses.icon.base}
              ${iconColor}
              ${baseClasses.icon.stroke}
              ${currentSize.icon}
            `} />
          )
        )}
      </label>
      
      {(text || supportingText) && (
        <div className={baseClasses.textContainer}>
          {text && <p className={`${currentSize.text} ${baseClasses.text.primary}`}>{text}</p>}
          {supportingText && <p className={`${currentSize.supportingText} ${baseClasses.text.secondary}`}>{supportingText}</p>}
        </div>
      )}
    </div>
  );
};

export default Checkbox;