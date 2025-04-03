import React, { ReactNode } from 'react'

interface CheckboxGroupProps {
  children: ReactNode
  breakpoint?: 'desktop' | 'mobile'
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  breakpoint = 'desktop', // Default to desktop
}) => {
  // Base classes that are always applied
  const baseClasses = `
    w-full 
    mx-auto 
    gap-lg
    flex 
    flex-col
  `

  // Breakpoint-specific max-width
  const maxWidthClass = breakpoint === 'desktop' ? 'max-w-[768px]' : 'max-w-[343px]'

  // Combine all classes
  const containerClasses = `${baseClasses} ${maxWidthClass}`

  return <div className={containerClasses}>{children}</div>
}

export default CheckboxGroup
