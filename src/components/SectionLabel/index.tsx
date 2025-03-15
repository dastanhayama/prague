import React from 'react'
import HelpIcon from "@icons/General/help-circle.svg"
interface SectionLabelProps {
  size: 'sm' | 'md' // Size of the label
  tooltip: boolean // Whether to show the tooltip icon
  required: boolean // Whether to show the asterisk
  supportingText?: string // Supporting text (optional)
  label: string // Label text
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  size,
  tooltip = false,
  required = false,
  supportingText,
  label,
}) => {
  // Dynamic classes for label based on size
  const labelClass =
    size === 'sm'
      ? 'text-[14px] leading-[20px] font-semibold text-secondary-700 gap-[2px] flex items-center'
      : 'text-[16px] leading-[24px] font-semibold text-secondary-700 gap-[2px] flex items-center'

  // Dynamic classes for supporting text based on size
  const supportingTextClass =
    size === 'sm'
      ? 'text-[14px] leading-[20px] text-tertiary-600'
      : 'text-[16px] leading-[24px] text-tertiary-600'
const containerClass = "flex flex-col gap-0"
const iconClass = "w-[16px] h-[16px] [&>path]:stroke-fg-quinary-400 cursor-pointer"
const asteriskClass = "text-[#C00C53] text-[14px] leading-[20px]"
  return (
    <div className={containerClass}>
      <label className={labelClass}>
        {label}
        {required && <span className={asteriskClass}>*</span>}
        {tooltip && (
                <HelpIcon className={iconClass}/>
        )}
      </label>
      {supportingText && <p className={`${supportingTextClass}`}>{supportingText}</p>}
    </div>
  )
}

export default SectionLabel
