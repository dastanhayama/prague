import React from 'react'

// Define the prop types
type IconType = 'glass' | 'light' | 'dark' | 'modern'
type IconSize = 'sm' | 'md' | 'lg' | 'xl'

interface FeaturedIconProps {
  type: IconType
  size: IconSize
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Mapping for icon container styles based on type
const typeStyles = {
  glass: ' ',
  light: '',
  dark: '',
  modern: 'bg-primary border border-secondary shadow-xs ',
}

const iconPathStyles = {
    glass: '',
    light: '',
    dark: '',
    modern: '[&>path]:stroke-fg-secondary-700',
}

// Mapping for icon container sizes
const sizeStyles = {
  sm: 'w-[32px] h-[32px] p-[8px] rounded-sm',
  md: 'w-[40px] h-[40px] p-[10px] rounded-md',
  lg: 'w-[48px] h-[48px] p-[12px] rounded-lg',
  xl: 'w-[56px] h-[56px] p-[14px] rounded-xl',
}

// Mapping for icon sizes
const iconSizeStyles = {
  sm: 'w-[16px] h-[16px]',
  md: 'w-[20px] h-[20px]',
  lg: 'w-[24px] h-[25px]',
  xl: 'w-[28px] h-[30px]',
}

function FeaturedIcon({ type, size, icon: Icon }: FeaturedIconProps) {
  // Combine the styles based on props
  const iconContainerClass = `flex items-center justify-center ${typeStyles[type]} ${sizeStyles[size]}`
  const iconClass = `${iconSizeStyles[size]} ${iconPathStyles[type]}`

  return (
    <div className={iconContainerClass}>
      <Icon className={iconClass} />
    </div>
  )
}

export default FeaturedIcon