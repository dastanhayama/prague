import React from 'react'

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type ButtonHierarchy =
  | 'primary'
  | 'secondary gray'
  | 'secondary color'
  | 'tertiary gray'
  | 'tertiary color'
  | 'link gray'
  | 'link color'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  hierarchy?: ButtonHierarchy
  children: React.ReactNode
  disabled?: boolean
  onClick: () => void
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right' | 'only'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  hierarchy = 'primary',
  children,
  onClick,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  ...props
}) => {
  const baseClasses =
    'rounded-md font-semibold focus:outline-[4px] cursor-pointer flex items-center justify-center relative'

  const sizeClasses = {
    sm: 'text-[14px] leading-[20px] py-md px-lg w-full',
    md: 'text-[14px] leading-[20px] py-[10px] px-[14px] w-full',
    lg: 'text-[16px] leading-[24px] py-[10px] px-xl w-full',
    xl: 'text-[16px] leading-[24px] py-lg px-[18px] w-full',
    '2xl': 'text-[18px] leading-[28px] py-xl px-[22px] w-full',
  }

  const iconOnlySizeClasses = {
    sm: 'p-md max-w-[36px] max-h-[36px]',
    md: 'p-[10px] max-w-[40px] max-h-[40px]',
    lg: 'p-lg max-w-[44px] max-h-[44px]',
    xl: 'p-[14px] max-w-[48px] max-h-[48px]',
    '2xl': 'p-xl max-w-[56px] max-h-[56px]',
  }

  const linkSizeClasses = {
    sm: 'text-[14px] leading-[20px] w-auto',
    md: 'text-[14px] leading-[20px] w-auto',
    lg: 'text-[16px] leading-[24px] w-auto',
    xl: 'text-[16px] leading-[24px] w-auto',
    '2xl': 'text-[18px] leading-[28px] w-auto',
  }

  const iconGapClasses = {
    sm: 'gap-[4px]',
    md: 'gap-[4px]',
    lg: 'gap-[6px]',
    xl: 'gap-[6px]',
    '2xl': 'gap-[10px]',
  }

  const iconSizeClass = {
    sm: 'w-[20px] h-[20px]',
    md: 'w-[20px] h-[20px]',
    lg: 'w-[20px] h-[20px]',
    xl: 'w-[20px] h-[20px]',
    '2xl': 'w-[24px] h-[24px]',
  }

  const iconColorClass = {
    primary: !disabled ? '[&>path]:stroke-[#ffffff]' : '[&>path]:stroke-[#98A2B3]',
    'secondary gray': !disabled ? '[&>path]:stroke-[#344054]' : '[&>path]:stroke-[#98A2B3]',
    'secondary color': !disabled ? '[&>path]:stroke-[#A80B48]' : '[&>path]:stroke-[#98A2B3]',
    'tertiary gray': !disabled ? '[&>path]:stroke-[#475467]' : '[&>path]:stroke-[#98A2B3]',
    'tertiary color': !disabled ? '[&>path]:stroke-[#A80B48]' : '[&>path]:stroke-[#98A2B3]',
    'link gray': !disabled ? '[&>path]:stroke-[#475467]' : '[&>path]:stroke-[#98A2B3]',
    'link color': !disabled ? '[&>path]:stroke-[#A80B48]' : '[&>path]:stroke-[#98A2B3]',
  }

  const hierarchyClasses = {
    primary:
      isLoading || disabled
        ? 'bg-[#F2F4F7] border border-[#EAECF0] text-[#98A2B3]'
        : 'bg-[#101828] shadow-xs border border-[#101828] text-primary focus:outline-[#98A2B324] hover:bg-[#344054] hover:border-[#344054]',
    'secondary gray': !disabled
      ? 'bg-primary shadow-xs border border-[#D0D5DD] text-[#344054] focus:outline-[#98A2B324] hover:bg-[#F9FAFB] hover:border-[#D0D5DD]'
      : 'bg-primary shadow-xs border border-[#EAECF0] text-[#98A2B3]',
    'secondary color': !disabled
      ? 'bg-primary shadow-xs border border-[#F891B9] text-[#A80B48] focus:outline-[#D80E5D3D] hover:bg-[#FFF4F8] hover:border-[#F891B9]'
      : 'bg-primary shadow-xs border border-[#EAECF0] text-[#98A2B3]',
    'tertiary gray': !disabled
      ? 'text-[#475467] bg-transparent hover:bg-[#F9FAFB] focus:ring-none outline-none'
      : 'text-[#98A2B3] focus:ring-none outline-none',
    'tertiary color': !disabled
      ? 'text-[#A80B48] bg-transparent hover:bg-[#FFF4F8] focus:ring-none outline-none'
      : 'text-[#98A2B3] focus:ring-none outline-none',
    'link gray': !disabled
      ? 'text-[#475467] focus:ring-none outline-none'
      : 'text-[#98A2B3] focus:ring-none outline-none',
    'link color': !disabled
      ? 'text-[#A80B48] focus:ring-none outline-none'
      : 'text-[#98A2B3] focus:ring-none outline-none',
  }

  const isLink = hierarchy.includes('link')
  const isIconOnly = iconPosition === 'only'
  const combinedClasses = `
    ${baseClasses}
    ${isIconOnly ? iconOnlySizeClasses[size] : isLink ? linkSizeClasses[size] : sizeClasses[size]}
    ${hierarchyClasses[hierarchy]}
    ${Icon && !isIconOnly ? iconGapClasses[size] : ''}
  `
  const iconClassName = `${iconSizeClass[size]} ${iconColorClass[hierarchy]}`

  return (
    <button
      className={combinedClasses.trim()}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
        >
          <path
            d="M10.5 1.66666V4.99999M10.5 15V18.3333M5.49999 9.99999H2.16666M18.8333 9.99999H15.5M16.3987 15.8987L14.0417 13.5417M16.3987 4.16661L14.0417 6.52363M4.6013 15.8987L6.95832 13.5417M4.6013 4.16661L6.95832 6.52363"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <>
          {iconPosition === 'left' && Icon && <Icon className={iconClassName} />}
          {!isIconOnly && children}
          {iconPosition === 'right' && Icon && <Icon className={iconClassName} />}
          {isIconOnly && Icon && <Icon className={iconClassName} />}
        </>
      )}
    </button>
  )
}

export default Button
