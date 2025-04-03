import React from 'react'
import FeaturedIcon from '../FeaturedIcon'

export interface CheckboxGroupItemProps {
  size?: 'sm' | 'md'
  breakpoint?: 'mobile' | 'desktop'
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text?: string
  subtext?: string
  supportingText?: string
  onClick?: () => void
  disabled?: boolean
  selected?: boolean
}

const CheckboxGroupItem: React.FC<CheckboxGroupItemProps> = ({
  size = 'sm',
  breakpoint = 'mobile',
  icon,
  text,
  onClick,
  subtext,
  supportingText,
  disabled = false,
  selected = false,
}) => {
  const maxWidth = breakpoint === 'mobile' ? '343px' : '768px'
  const featuredIconSize = size === 'sm' ? 'sm' : 'md'

  const baseClasses = `w-full p-xl flex cursor-pointer ${text && supportingText ? 'items-start' : 'items-center'} gap-lg rounded-xl`

  const stateClasses = disabled
      ? 'bg-[#F9FAFB]  border border-transparent outline outline-[#D0D5DD]'
    : selected
      ? 'bg-primary  border outline-2 outline-[#61646C] border-transparent hover:outline-[#161B26]'
      : 'bg-primary  border outline-2 border-transparent outline-[#EAECF0] hover:outline-[#D0D5DD] '

  const textSizeClass = size === 'sm' ? 'text-[14px] leading-[20px]' : 'text-[16px] leading-[24px]'

  return (
    <div
      className={`${baseClasses} ${stateClasses}`}
      style={{ maxWidth }}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-selected={selected}
      onClick={disabled ? undefined : onClick}
    >
      <FeaturedIcon size={featuredIconSize} color="gray" type="light" icon={icon} />
      <div className="flex flex-col gap-0">
        {text && (
          <p className={`text-[#344054] ${textSizeClass} font-medium inline-flex gap-xs`}>
            {text} {subtext && <span className="text-[#475467] font-normal">{subtext}</span>}
          </p>
        )}
        {supportingText && <p className={`text-[#475467] ${textSizeClass}`}>{supportingText}</p>}
      </div>
    </div>
  )
}

export default CheckboxGroupItem
