import React from 'react'

// Define types for props
type BadgeType = 'pill color' | 'pill outline' | 'badge color' | 'badge modern'
type BadgeColor =
  | 'gray'
  | 'brand'
  | 'error'
  | 'warning'
  | 'success'
  | 'gray blue'
  | 'blue light'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'orange'
type BadgeSize = 'lg' | 'md' | 'sm' | 'xs'
type IconPosition = 'left' | 'right' | 'only'

interface BadgeProps {
  label: string
  type?: BadgeType
  color?: BadgeColor
  size?: BadgeSize
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode
  iconPosition?: IconPosition
}

const Badge: React.FC<BadgeProps> = ({
  label,
  type = 'badge color',
  color = 'gray',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
}) => {
  // Utility classes for colors
  const colorClasses = {
    gray: {
      bg: 'bg-utility-gray-50',
      border: 'border-utility-gray-200',
      text: 'text-utility-gray-700',
      outlineBorder: 'border-utility-gray-600',
      iconColor: '[&>path]:stroke-utility-gray-500',
    },
    brand: {
      bg: 'bg-utility-brand-50',
      border: 'border-utility-brand-200',
      text: 'text-utility-brand-700',
      outlineBorder: 'border-utility-brand-600',
      iconColor: '[&>path]:stroke-utility-brand-500',
    },
    error: {
      bg: 'bg-utility-error-50',
      border: 'border-utility-error-200',
      text: 'text-utility-error-700',
      outlineBorder: 'border-utility-error-600',
      iconColor: '[&>path]:stroke-utility-error-500',
    },
    warning: {
      bg: 'bg-utility-warning-50',
      border: 'border-utility-warning-200',
      text: 'text-utility-warning-700',
      outlineBorder: 'border-utility-warning-600',
      iconColor: '[&>path]:stroke-utility-warning-500',
    },
    success: {
      bg: 'bg-utility-success-50',
      border: 'border-utility-success-200',
      text: 'text-utility-success-700',
      outlineBorder: 'border-utility-success-600',
      iconColor: '[&>path]:stroke-utility-success-500',
    },
    'gray blue': {
      bg: 'bg-utility-gray-blue-50',
      border: 'border-utility-gray-blue-200',
      text: 'text-utility-gray-blue-700',
      outlineBorder: 'border-utility-gray-blue-600',
      iconColor: '[&>path]:stroke-utility-gray-blue-500',
    },
    'blue light': {
      bg: 'bg-utility-blue-light-50',
      border: 'border-utility-blue-light-200',
      text: 'text-utility-blue-light-700',
      outlineBorder: 'border-utility-blue-light-600',
      iconColor: '[&>path]:stroke-utility-blue-light-500',
    },
    blue: {
      bg: 'bg-utility-blue-50',
      border: 'border-utility-blue-200',
      text: 'text-utility-blue-700',
      outlineBorder: 'border-utility-blue-600',
      iconColor: '[&>path]:stroke-utility-blue-500',
    },
    indigo: {
      bg: 'bg-utility-indigo-50',
      border: 'border-utility-indigo-200',
      text: 'text-utility-indigo-700',
      outlineBorder: 'border-utility-indigo-600',
      iconColor: '[&>path]:stroke-utility-indigo-500',
    },
    purple: {
      bg: 'bg-utility-purple-50',
      border: 'border-utility-purple-200',
      text: 'text-utility-purple-700',
      outlineBorder: 'border-utility-purple-600',
      iconColor: '[&>path]:stroke-utility-purple-500',
    },
    pink: {
      bg: 'bg-utility-pink-50',
      border: 'border-utility-pink-200',
      text: 'text-utility-pink-700',
      outlineBorder: 'border-utility-pink-600',
      iconColor: '[&>path]:stroke-utility-pink-500',
    },
    orange: {
      bg: 'bg-utility-orange-50',
      border: 'border-utility-orange-200',
      text: 'text-utility-orange-700',
      outlineBorder: 'border-utility-orange-600',
      iconColor: '[&>path]:stroke-utility-orange-500',
    },
  }

  // Utility classes for sizes
  const sizeClasses = {
    lg: {
      text: 'text-[14px] leading-[20px]',
      padding: 'py-xs px-lg',
      iconOnlyPadding: 'p-md',
      gap: 'gap-[6px]',
      strokeWidth: '[&>path]:stroke-[3px]',
      iconOnlyRadius: 'rounded-md',
    },
    md: {
      text: 'text-[14px] leading-[20px]',
      padding: 'py-xxs px-[10px]',
      iconOnlyPadding: 'p-sm',
      gap: 'gap-[6px]',
      strokeWidth: '[&>path]:stroke-[3px]',
      iconOnlyRadius: 'rounded-sm',
    },
    sm: {
      text: 'text-[12px] leading-[18px]',
      padding: 'py-xxs px-md',
      iconOnlyPadding: 'p-[5px]',
      gap: 'gap-[4px]',
      strokeWidth: '[&>path]:stroke-[3px]',
      iconOnlyRadius: 'rounded-sm',
    },
    xs: {
      text: 'text-[10px] leading-[8px]',
      padding: 'py-xs px-sm',
      iconOnlyPadding: 'p-xxs',
      gap: 'gap-[2px]',
      strokeWidth: '[&>path]:stroke-[3px]',
      iconOnlyRadius: 'rounded-xs',
    },
  }

  // Get the color-specific classes
  const { bg, border, text, outlineBorder, iconColor } = colorClasses[color] || colorClasses.gray

  // Get the size-specific classes
  const {
    text: sizeText,
    padding,
    iconOnlyPadding,
    gap,
    strokeWidth,
    iconOnlyRadius,
  } = sizeClasses[size] || sizeClasses.md

  // Determine the base classes based on the type
  let baseClasses = ''
  switch (type) {
    case 'pill color':
      baseClasses = `rounded-full border ${bg} ${border} ${text}`
      break
    case 'pill outline':
      baseClasses = `rounded-full border-[1.5px] ${outlineBorder} bg-primary ${text}`
      break
    case 'badge color':
      baseClasses =
        iconPosition === 'only'
          ? `border ${bg} ${border} ${text} ${iconOnlyRadius}`
          : `rounded-md border ${bg} ${border} ${text}`
      break
    case 'badge modern':
      baseClasses =
        iconPosition === 'only'
          ? `bg-primary shadow-xs border border-[#D0D5DD] text-secondary-700 ${iconOnlyRadius}`
          : `rounded-md bg-primary shadow-xs border border-[#D0D5DD] text-secondary-700`
      break
    default:
      baseClasses = `rounded-md ${bg} ${border} ${text}`
  }

  // Use iconOnlyPadding if iconPosition is 'only', otherwise use regular padding
  const finalPadding = iconPosition === 'only' ? iconOnlyPadding : padding

  // Determine icon color - always use secondary-500 for badge modern
  const finalIconColor = type === 'badge modern' ? '[&>path]:stroke-[#667085]' : iconColor

  // Render the icon
  const renderIcon = () => {
    if (typeof Icon === 'function') {
      return (
        <Icon
          className={`w-[12px] h-[12px] ${iconPosition === 'left' && '-ml-[2px]'} ${iconPosition === 'right' && '-mr-[2px]'} ${finalIconColor} ${strokeWidth}`}
        />
      )
    }
    return (
      <div
        className={`${iconPosition === 'left' && '-ml-[2px]'} ${iconPosition === 'right' && '-mr-[2px]'}`}
      >
        {Icon}
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center w-auto ${baseClasses} ${finalPadding} ${gap}`}>
      {iconPosition === 'left' && Icon && renderIcon()}
      {iconPosition !== 'only' && <p className={`${sizeText} font-medium`}>{label}</p>}
      {iconPosition === 'right' && Icon && renderIcon()}
      {iconPosition === 'only' && Icon && renderIcon()}
    </div>
  )
}

export default Badge
