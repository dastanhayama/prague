import React from 'react'

// Define the prop types
type IconType = 'glass' | 'light' | 'dark' | 'modern' | 'outline'
type IconSize = 'sm' | 'md' | 'lg' | 'xl'
type IconColor = 'brand' | 'gray' | 'error' | 'warning' | 'success'

interface FeaturedIconProps {
  type: IconType
  size: IconSize
  color?: IconColor
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Mapping for icon container styles based on type and color
const typeStyles = {
  glass: () => 'bg-primary/60 border border-primary/60 backdrop-blur-[14px]', // Main container for glass type
  light: (color: IconColor) => {
    const colors = {
      brand: 'bg-[#FEEFF5]',
      gray: 'bg-[#F2F4F7]',
      error: 'bg-[#FEE4E2]',
      warning: 'bg-[#FEF0C7]',
      success: 'bg-[#DCFAE6]',
    }
    return `${colors[color]}`
  },
  dark: (color: IconColor) => {
    const colors = {
      brand: 'bg-[#C00C53]',
      gray: 'bg-[#475467]',
      error: 'bg-[#D92D20]',
      warning: 'bg-[#DC6803]',
      success: 'bg-[#079455]',
    }
    return colors[color]
  },
  modern: () => 'bg-primary border border-secondary shadow-xs',
  outline: (color: IconColor) => {
    const colors = {
      brand: 'border-[#C00C53]/10 bg-primary border-[2px]',
      gray: 'border-[#475467]/10 bg-primary border-[2px]',
      error: 'border-[#D92D20]/10 bg-primary border-[2px]',
      warning: 'border-[#DC6803]/10 bg-primary border-[2px]',
      success: 'border-[#079455]/10 bg-primary border-[2px]',
    }
    return colors[color]
  }, // Outline type styles
}

// Mapping for pseudo-container background colors based on color prop
const pseudoContainerColors = {
  brand: 'bg-[#C00C53]',
  gray: 'bg-[#475467]',
  error: 'bg-[#D92D20]',
  warning: 'bg-[#DC6803]',
  success: 'bg-[#079455]',
}

const iconPathStyles = {
  glass: () => '[&>path]:stroke-primary',
  light: (color: IconColor) => {
    const colors = {
      brand: '[&>path]:stroke-[#C00C53]',
      gray: '[&>path]:stroke-[#475467]',
      error: '[&>path]:stroke-[#D92D20]',
      warning: '[&>path]:stroke-[#DC6803]',
      success: '[&>path]:stroke-[#079455]',
    }
    return colors[color]
  },
  dark: () => '[&>path]:stroke-primary',
  modern: () => '[&>path]:stroke-fg-secondary-700',
  outline: (color: IconColor) => {
    const colors = {
      brand: '[&>path]:stroke-[#C00C53]',
      gray: '[&>path]:stroke-[#475467]',
      error: '[&>path]:stroke-[#D92D20]',
      warning: '[&>path]:stroke-[#DC6803]',
      success: '[&>path]:stroke-[#079455]',
    }
    return colors[color]
  },
}

// Mapping for icon container sizes
const sizeStyles = {
  sm: 'w-[32px] h-[32px] p-[8px]',
  md: 'w-[40px] h-[40px] p-[10px]',
  lg: 'w-[48px] h-[48px] p-[12px]',
  xl: 'w-[56px] h-[56px] p-[14px]',
}

const roundedStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

// Mapping for icon sizes
const iconSizeStyles = {
  sm: 'w-[16px] h-[16px]',
  md: 'w-[20px] h-[20px]',
  lg: 'w-[24px] h-[24px]',
  xl: 'w-[28px] h-[28px]',
}

// Mapping for icon container sizes
const sizeOutlineStyles = {
  sm: 'w-[34px] h-[34px] p-[2px]',
  md: 'w-[38px] h-[38px] p-[2px]',
  lg: 'w-[42px] h-[42px] p-[2px]',
  xl: 'w-[46px] h-[46px] p-[2px]',
}
// Mapping for icon container sizes
const sizeOutlineInnerStyles = {
  sm: 'w-[24px] h-[24px] p-[2px]',
  md: 'w-[28px] h-[28px] p-[2px]',
  lg: 'w-[32px] h-[32px] p-[2px]',
  xl: 'w-[36px] h-[36px] p-[2px]',
}
// Mapping for icon container styles based on type and color
const typeOutlineStyles = {
  outline: (color: IconColor) => {
    const colors = {
      brand: 'border-[#C00C53]/30 bg-primary border-[2px]',
      gray: 'border-[#475467]/30 bg-primary border-[2px]',
      error: 'border-[#D92D20]/30 bg-primary border-[2px]',
      warning: 'border-[#DC6803]/30 bg-primary border-[2px]',
      success: 'border-[#079455]/30 bg-primary border-[2px]',
    }
    return colors[color]
  }, // Outline type styles
}

function FeaturedIcon({ type, size, color = 'brand', icon: Icon }: FeaturedIconProps) {
  // Combine the styles based on props
  const iconContainerClass = `flex items-center justify-center relative z-10 ${
    typeStyles[type](color)
  } ${sizeStyles[size]} ${type === 'light' ? 'rounded-full' : roundedStyles[size]}`


  const iconClass = `${iconSizeStyles[size]} ${iconPathStyles[type](color)}`

  // Pseudo-container styles
  const pseudoContainerClass = `absolute z-0 ${
    type === 'glass' 
      ? `${pseudoContainerColors[color]} rotate-15 ${roundedStyles[size]} top-[-10px] left-[10px] ${sizeStyles[size]}` 
      : ''
  }`
  
  const iconContainerOutlineClass = `flex items-center justify-center relative z-10 ${
    typeStyles[type](color)
  } ${sizeOutlineStyles[size]} rounded-full`
  // Inner container styles for outline type
  const innerIconContainerClass = `flex items-center justify-center ${
    sizeOutlineInnerStyles[size]
  } ${typeOutlineStyles['outline'](color)} rounded-full`

  return (
    <div className="relative">
      {/* Pseudo-container */}
      {type === 'glass' && <div className={pseudoContainerClass} />}
      {/* Main container */}
      <div className={type === 'outline' ? iconContainerOutlineClass : iconContainerClass}>
        {type === 'outline' ? (
          <div className={innerIconContainerClass}>
            <Icon className={iconClass} />
          </div>
        ) : (
          <Icon className={iconClass} />
        )}
      </div>
    </div>
  )
}

export default FeaturedIcon