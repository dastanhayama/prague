import React from 'react'
type HorizontalTabs = {
  size?: 'sm' | 'md'; 
  type?: 'button white border' | 'button primary' | 'button gray' | 'underline' | 'underline filled'; // Add other types as needed
  fullWidth?: boolean;
  children?: React.ReactNode;
};


function HorizontalTabs({
    size = 'sm',
    type = 'button white border',
    fullWidth = true,
    children
} : HorizontalTabs) {
    const sizeClasses = {
        sm: 'p-xs rounded-lg',
        md: 'p-sm rounded-xl'
      };
      // Full width class
    const fullWidthClass = fullWidth ? 'w-full flex items-center justify-center' : 'w-auto flex items-center';
    
  // Type classes
  const typeClasses = {
    'button white border':  `gap-xs bg-[#F9FAFB] border border-[#EAECF0] ${sizeClasses[size]}`,
    'button primary': 'gap-xs',
    'button gray': 'gap-xs',
    'underline': 'gap-md border-b border-[#EAECF0]',
    'underline filled': 'gap-md border-b border-[#EAECF0]',

  };
   // Combine all classes
   const combinedClasses = [
    typeClasses[type],
    fullWidthClass,
    // Add state classes when needed
  ].join(' ');
  return (
    <div className={combinedClasses}>
        {children}
    </div>
  )
}

export default HorizontalTabs