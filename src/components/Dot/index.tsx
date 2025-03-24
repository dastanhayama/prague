import React from 'react'

type DotSize = 'sm' | 'md' | 'lg'
type DotColor =
  | 'gray'
  | 'brand'
  | 'error'
  | 'warning'
  | 'success'
  | 'gray-blue'
  | 'blue-light'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'orange'

type DotProps = {
  size: DotSize
  outline?: boolean
  color?: DotColor
}

const Dot: React.FC<DotProps> = ({
  size,
  outline = false,
  color = 'success', // Default color
}) => {
  // Define size classes
  const sizeClasses = {
    sm: 'w-2 h-2', // 8px
    md: 'w-2.5 h-2.5', // 10px
    lg: 'w-3 h-3', // 12px
  }

  // Define outline width classes
  const outlineWidthClasses = {
    sm: 'outline-[3px]',
    md: 'outline-[4px]',
    lg: 'outline-[5px]',
  }

  // Map colors to their Tailwind classes (500 for dot, 200 for outline)
  const colorClasses = {
    gray: 'bg-utility-gray-500 outline-utility-gray-200',
    brand: 'bg-utility-brand-500 outline-utility-brand-200',
    error: 'bg-utility-error-500 outline-utility-error-200',
    warning: 'bg-utility-warning-500 outline-utility-warning-200',
    success: 'bg-utility-success-500 outline-utility-success-200',
    'gray-blue': 'bg-utility-gray-blue-500 outline-utility-gray-blue-200',
    'blue-light': 'bg-utility-blue-light-500 outline-utility-blue-light-200',
    blue: 'bg-utility-blue-500 outline-utility-blue-200',
    indigo: 'bg-utility-indigo-500 outline-utility-indigo-200',
    purple: 'bg-utility-purple-500 outline-utility-purple-200',
    pink: 'bg-utility-pink-500 outline-utility-pink-200',
    orange: 'bg-utility-orange-500 outline-utility-orange-200',
  }

  // Base classes for the dot
  const baseClasses = `rounded-full ${colorClasses[color]}`

  // Combine Tailwind classes
  const className = `${baseClasses} ${sizeClasses[size]} ${
    outline ? outlineWidthClasses[size] : ''
  } ${outline ? 'outline' : ''}`

  return <div className={className} />
}

export default Dot
