import React from 'react';

// Define types for the component props
type AvatarLabelGroupProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text: string;
  supportingText: string;
  avatar: React.ReactNode; // Avatar component passed as a React node
};

const AvatarLabelGroup: React.FC<AvatarLabelGroupProps> = ({
  size = 'md',
  text,
  supportingText,
  avatar,
}) => {
  // Define Tailwind classes based on the size prop
  const textClasses = {
    sm: {
      text: 'text-[14px] leading-[20px]',
      supportingText: 'text-[12px] leading-[18px]',
      gap: 'gap-[10px]'
    },
    md: {
      text: 'text-[14px] leading-[20px]',
      supportingText: 'text-[14px] leading-[20px]',
      gap: 'gap-[8px]'

    },
    lg: {
      text: 'text-[16px] leading-[24px]',
      supportingText: 'text-[16px] leading-[24px]',
      gap: 'gap-[12px]'

    },
    xl: {
      text: 'text-[18px] leading-[28px]',
      supportingText: 'text-[16px] leading-[24px]',
      gap: 'gap-[16px]'

    },
  };

  // Get the appropriate classes for the current size
  const currentTextClass = `${textClasses[size].text} font-semibold text-[#101828]`;
  const currentSupportingTextClass = `${textClasses[size].supportingText} text-[#475467]`
  const currentGapClass = textClasses[size].gap;
  const containerClasses = `flex items-center ${currentGapClass}`;
  return (
    <div className={containerClasses}>
      {/* Avatar Component passed as a prop */}
      {avatar}
      {/* Text and Supporting Text */}
      <div className="flex flex-col">
        <p className={`${currentTextClass}`}>{text}</p>
        <p className={`${currentSupportingTextClass}`}>
          {supportingText}
        </p>
      </div>
    </div>
  );
};

export default AvatarLabelGroup;