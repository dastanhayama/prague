import React from 'react';

type Size = 'xs' | 'sm';
type State = 'default' | 'hover' | 'focused';
type Hierarchy = 'secondary' | 'tertiary';

interface ButtonUtilityProps {
  size?: Size;
  state?: State;
  hierarchy?: Hierarchy;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

const ButtonUtility: React.FC<ButtonUtilityProps> = ({
  size = 'sm',
  state = 'default',
  hierarchy = 'secondary',
  icon: Icon,
  disabled = false,
}) => {
  // Determine container dimensions based on hierarchy and size
  const getContainerSize = () => {
    if (hierarchy === 'secondary') {
      return size === 'xs' ? 'w-7 h-7' : 'w-8 h-8';
    }
    return 'w-8 h-8'; // tertiary
  };

  // Determine shadow based on hierarchy
  const getShadow = () => {
    return hierarchy === 'secondary' ? 'shadow-xs' : '';
  };

  // Determine border styles
  const getBorder = () => {
    if (disabled) {
      return hierarchy === 'secondary' ? 'border border-[#EAECF0]' : '';
    }
    return hierarchy === 'secondary' ? 'border border-[#D0D5DD]' : '';
  };

  // Determine state styles
  const getStateStyles = () => {
    if (disabled) {
      return 'cursor-not-allowed';
    }
    
    switch (state) {
      case 'hover':
        return 'bg-[#F9FAFB]';
      case 'focused':
        return 'ring-[4px] ring-[#98A2B324]';
      default:
        return 'bg-transparent hover:bg-[#F9FAFB] focus:ring-[4px] focus:ring-[#98A2B324]';
    }
  };

  // Determine icon color
  const getIconColor = () => {
    if (disabled) {
      return '[&>path]:stroke-[#D0D5DD]';
    }
    return '[&>path]:stroke-[#98A2B3]';
  };

  const containerClasses = `
    ${getContainerSize()}
    ${getShadow()}
    ${getStateStyles()}
    ${getBorder()}
    rounded-sm
    p-sm
    flex
    items-center
    justify-center
    outline-none
    transition-colors
    cursor-pointer
    ${disabled ? 'opacity-100' : ''}
  `;

  // Determine icon size based on button size
  const iconSize = size === 'xs' ? "w-[16px] h-[16px]" : "w-[20px] h-[20px]";

  return (
    <button
      className={containerClasses}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <Icon className={`${iconSize} ${getIconColor()}`} />
    </button>
  );
};

export default ButtonUtility;