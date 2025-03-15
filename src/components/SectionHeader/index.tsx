import React from 'react';
import HelpIcon from '@icons/General/help-circle.svg';
import DropDownIcon from '@icons/General/dots-vertical.svg';

// Define the props interface
interface SectionHeaderProps {
  type: 'buttons' | 'search' | 'button-group';
  tabs: boolean;
  actions?: boolean;
  supportingText?: string;
  label: string;
  dropdownIcon?: boolean;
  divider?: boolean;
  tooltip?: boolean;
}


const SectionHeader: React.FC<SectionHeaderProps> = ({
  type,
  tabs,
  actions = true,
  supportingText,
  label,
  dropdownIcon = true,
  divider = true,
  tooltip = true,
}) => {
    // Tailwind CSS class variables
const containerClass = 'flex flex-col px-xl pt-xl';
const wrapperClass = 'flex desktop:flex-row flex-col items-start justify-between pb-2xl relative desktop:pr-[36px] pr-0 gap-xl desktop:gap-0';
const dividerClass = 'border-b border-secondary';
const leftContainerClass = 'flex flex-col gap-xs';
const labelContainerClass = 'flex items-center gap-xs';
const labelClass = 'desktop:text-[20px] desktop:leading-[30px] text-[18px] leading-[28px] font-semibold text-primary-900';
const tooltipIconClass = 'w-[16px] h-[16px] [&>path]:stroke-fg-quinary-400 cursor-pointer';
const supportingTextClass = 'text-[14px] leading-[20px] text-tertiary-600';
const rightContainerClass = 'flex items-start gap-xl';
const buttonGroupClass = 'flex items-start gap-lg';
const buttonBaseClass = 'px-[14px] py-[10px] rounded-md font-semibold text-[14px] leading-[20px] cursor-pointer';
const buttonTertiaryClass = 'text-[#475467] bg-primary';
const buttonSecondaryClass = 'text-[#A80B48] bg-primary border border-[#F891B9] shadow-xs';
const buttonSecondaryAltClass = 'text-[#344054] bg-primary border border-[#D0D5DD] shadow-xs';
const buttonPrimaryClass = 'bg-[#101828] border border-[#101828] text-primary';
const dropdownIconClass = 'cursor-pointer w-[20px] h-[20px] [&>path]:stroke-fg-quinary-400 absolute top-0 right-0';

  return (
    <header className={containerClass}>
      <div className={`${wrapperClass} ${divider ? dividerClass : ''}`}>
        {/* Left Side: Label and Supporting Text */}
        <div className={leftContainerClass}>
          <div className={labelContainerClass}>
            <label className={labelClass}>{label}</label>
            {tooltip && <HelpIcon className={tooltipIconClass} />}
          </div>
          {supportingText && <p className={supportingTextClass}>{supportingText}</p>}
        </div>

        {/* Right Side: Buttons and Dropdown Icon */}
        {actions && (
          <div className={rightContainerClass}>
            {type === 'buttons' && (
              <div className={buttonGroupClass}>
                <button className={`${buttonBaseClass} ${buttonTertiaryClass} desktop:flex hidden`}>
                  Tertiary
                </button>
                <button className={`${buttonBaseClass} ${buttonSecondaryClass} desktop:flex hidden`}>
                  Secondary
                </button>
                <button className={`${buttonBaseClass} ${buttonSecondaryAltClass}`}>
                  Secondary
                </button>
                <button className={`${buttonBaseClass} ${buttonPrimaryClass}`}>
                  Primary
                </button>
              </div>
            )}

          </div>
        )}
        {dropdownIcon && <DropDownIcon className={dropdownIconClass} />}
      </div>
    </header>
  );
};

export default SectionHeader;