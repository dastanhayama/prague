import React from 'react';
import CheckIcon from '@icons/General/check.svg';

type InputDropdownMenuItemProps = {
  type?: 'default' | 'icon-leading' | 'avatar-leading' | 'dot-leading';
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  avatar?: React.ReactNode;
  dot?: React.ReactNode;
  text: string;
  supportingText?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const InputDropdownMenuItem: React.FC<InputDropdownMenuItemProps> = ({
  type = 'default',
  icon: Icon,
  avatar,
  dot,
  text,
  supportingText,
  selected = false,
  disabled = false,
  onClick,
}) => {
  // Base classes
  const buttonBaseClasses = 'flex items-center gap-md py-[10px] pr-[10px] pl-md rounded-sm relative w-full';
  const buttonStateClasses = disabled 
    ? '' 
    : 'cursor-pointer hover:bg-[#F9FAFB]';
  const buttonBackgroundClasses = selected ? 'bg-[#F9FAFB]' : 'bg-primary';

  // Text classes
  const textBaseClasses = 'text-[16px] leading-[24px] font-medium';
  const textColorClass = disabled ? 'text-[#667085]' : 'text-[#101828]';
  const supportingTextBaseClasses = 'text-[16px] leading-[24px]';
  const supportingTextColorClass = disabled ? 'text-[#667085]' : 'text-[#475467]';

  // Icon classes
  const leadingIconBaseClasses = 'w-5 h-5';
  const leadingIconStateClass = disabled ? 'opacity-50' : '';
  const checkIconBaseClasses = 'w-[20px] h-[20px]';
  const checkIconColorClass = disabled 
    ? '[&>path]:stroke-[#98A2B3]' 
    : '[&>path]:stroke-[#C00C53]';

  const renderLeadingElement = () => {
    switch (type) {
      case 'icon-leading':
        return Icon ? (
          <Icon 
            className={`${leadingIconBaseClasses} ${leadingIconStateClass}`} 
          />
        ) : null;
      case 'avatar-leading':
        return avatar;
      case 'dot-leading':
        return dot;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${buttonBaseClasses} ${buttonStateClasses} ${buttonBackgroundClasses}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {renderLeadingElement() && (
        <div className="flex-shrink-0">
          {renderLeadingElement()}
        </div>
      )}
      
        <p className={`${textBaseClasses} ${textColorClass}`}>
          {text}
        </p>
        {supportingText && (
          <p className={`${supportingTextBaseClasses} ${supportingTextColorClass}`}>
            {supportingText}
          </p>
        )}
      
      {selected && (
        <div className="absolute top-[12px] right-[12px]">
          <CheckIcon 
            className={`${checkIconBaseClasses} ${checkIconColorClass}`} 
          />
        </div>
      )}
    </button>
  );
};

export default InputDropdownMenuItem;