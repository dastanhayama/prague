import React from 'react';

// Define the size and outline types
type DotSize = 'sm' | 'md' | 'lg';
type DotProps = {
  size: DotSize;
  outline?: boolean;
  color?: string; // Background color
  outlineColor?: string; // Outline color
};

const Dot: React.FC<DotProps> = ({
  size,
  outline = false,
  color = '#17B26A', // Default background color
  outlineColor = '#DCFAE6', // Default outline color
}) => {
  // Define size classes
  const sizeClasses = {
    sm: 'w-2 h-2', // 8px
    md: 'w-2.5 h-2.5', // 10px
    lg: 'w-3 h-3', // 12px
  };

  // Define outline width classes
  const outlineWidthClasses = {
    sm: 'outline-[3px]',
    md: 'outline-[4px]',
    lg: 'outline-[5px]',
  };

  // Base classes for the dot
  const baseClasses = 'rounded-full';

  // Combine Tailwind classes
  const className = `${baseClasses} ${sizeClasses[size]} ${
    outline ? outlineWidthClasses[size] : ''
  }`;

  // Inline styles for dynamic colors
  const dynamicStyles = {
    backgroundColor: color,
    outlineColor: outline ? outlineColor : 'transparent',
    outlineStyle: 'solid', // Ensure the outline is rendered
  };

  return <div className={className} style={dynamicStyles}></div>;
};

export default Dot;