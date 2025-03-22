import React from 'react'

// Define the size and outline types
type DotSize = 'sm' | 'md' | 'lg'
type DotProps = {
  size: DotSize
  outline?: boolean
}

const Dot: React.FC<DotProps> = ({ size, outline = false }) => {
  // Define size classes
  const sizeClasses = {
    sm: 'w-2 h-2', // 8px
    md: 'w-2.5 h-2.5', // 10px
    lg: 'w-3 h-3', // 12px
  }

  // Define outline classes
  const outlineClasses = {
    sm: 'outline-[3px] outline-[#DCFAE6]',
    md: 'outline-[4px] outline-[#DCFAE6]',
    lg: 'outline-[5px] outline-[#DCFAE6]',
  }

  // Base classes for the dot
  const baseClasses = 'rounded-full bg-[#17B26A]'

  // Combine classes based on props
  const className = `${baseClasses} ${sizeClasses[size]} ${outline ? outlineClasses[size] : ''}`

  return <div className={className}></div>
}

export default Dot
