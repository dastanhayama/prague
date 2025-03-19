'use client'; // Add this line at the top
import React from 'react';
import VerifiedIcon from '@icons/General/verified-tick.svg';
import UserIcon from '@icons/Users/user-01.svg';

// Define the types for the props
type AvatarSize = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type AvatarState = 'stories' | 'focused' | 'default' | 'hover' | 'storiesSeen';
type StatusType = 'online' | 'company' | 'verified';

interface AvatarProps {
  size?: AvatarSize;
  contrastBorder?: boolean;
  placeholder?: boolean;
  state?: AvatarState;
  text?: string;
  statusIcon?: boolean;
  status?: StatusType;
  avatar?: string;
  companyIcon?: string;
}

// Utility function to get initials from text
const getInitials = (text: string): string => {
  const words = text.split(' ');
  return words
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  contrastBorder = true,
  placeholder = false,
  state = 'default',
  text,
  statusIcon = false,
  status = 'online',
  avatar,
  companyIcon,
}) => {
  const initials = text ? getInitials(text) : '';

  // Size classes
  const sizeClasses = {
    '3xl': 'w-16 h-16', // 64px
    '2xl': 'w-14 h-14', // 56px
    xl: 'w-12 h-12', // 48px
    lg: 'w-11 h-11', // 44px
    md: 'w-10 h-10', // 40px
    sm: 'w-8 h-8', // 32px
    xs: 'w-6 h-6', // 24px
  };

  // User icon size classes
  const userIconSizeClasses = {
    '3xl': 'w-8 h-8', // 32px
    '2xl': 'w-8 h-8', // 32px
    xl: 'w-7 h-7', // 28px
    lg: 'w-[26.4px] h-[26.4px]', // 26.4px
    md: 'w-6 h-6', // 24px
    sm: 'w-5 h-5', // 20px
    xs: 'w-4 h-4', // 16px
  };

  // State classes
  const stateClasses = {
    focused: 'outline-[4px] outline-[#98A2B3]/14',
    hover: 'outline-2 outline-primary',
    storiesSeen: 'outline-2 outline-primary ring-[1.67px] ring-offset-2 ring-secondary',
    default: 'outline-2 outline-primary focus:outline-[4px] focus:outline-[#98A2B3]/14',
    stories: '',
  };

  // Status icon size classes
  const statusIconSizeClasses = {
    online: {
      '3xl': 'w-4 h-4', // 16px
      '2xl': 'w-3.5 h-3.5', // 14px
      xl: 'w-3 h-3', // 12px
      lg: 'w-2.5 h-2.5', // 10px
      md: 'w-2.5 h-2.5', // 10px
      sm: 'w-2 h-2', // 8px
      xs: 'w-1.5 h-1.5', // 6px
    },
    verified: {
      '3xl': 'w-5 h-5', // 20px
      '2xl': 'w-4.5 h-4.5', // 18px
      xl: 'w-4 h-4', // 16px
      lg: 'w-3.5 h-3.5', // 14px
      md: 'w-3.5 h-3.5', // 14px
      sm: 'w-3 h-3', // 12px
      xs: 'w-2.5 h-2.5', // 10px
    },
    company: {
      '3xl': 'w-5 h-5', // 20px
      '2xl': 'w-4.5 h-4.5', // 18px
      xl: 'w-4 h-4', // 16px
      lg: 'w-3.5 h-3.5', // 14px
      md: 'w-3.5 h-3.5', // 14px
      sm: 'w-3 h-3', // 12px
      xs: 'w-2.5 h-2.5', // 10px
    },
  };

  // Text size classes
  const textSizeClasses = {
    '3xl': 'text-2xl leading-8', // 24px / 32px
    '2xl': 'text-xl leading-7', // 20px / 28px
    xl: 'text-lg leading-7', // 18px / 28px
    lg: 'text-base leading-6', // 16px / 24px
    md: 'text-base leading-6', // 16px / 24px
    sm: 'text-sm leading-5', // 14px / 20px
    xs: 'text-xs leading-4', // 12px / 16px
  };

  // Gradient container for stories state
  const gradientContainerClasses =
    'rounded-full p-[5px] bg-gradient-to-r from-[#FECD00] via-[#F9373F] to-[#C913B9] flex items-center justify-center';

  // Avatar container classes
  const avatarContainerClasses = `rounded-full overflow-hidden outline-2 outline-primary ${sizeClasses[size]}`;

  // Placeholder or text container classes
  const placeholderContainerClasses =
    'w-full h-full bg-[#F2F4F7] flex items-center justify-center';

  // Text initials classes
  const textInitialsClasses = `text-fg-quaternary-500 font-semibold ${textSizeClasses[size]}`;

  // User icon classes
  const userIconClasses = `[&>path]:stroke-fg-quaternary-500 ${userIconSizeClasses[size]}`;

  // Status icon container classes
  const statusIconContainerClasses = `absolute bottom-0 right-0 rounded-full overflow-hidden ${
    statusIconSizeClasses[status][size]
  } ${status === 'online' ? 'bg-[#17B26A]' : ''} ${
    status === 'verified' ? 'outline-0' : 'outline-[1.5px] outline-primary'
  }`;

  // Regular avatar container classes
  const regularAvatarContainerClasses = `rounded-full overflow-hidden ${
    contrastBorder ? 'border-[0.75px] border-black/8' : ''
  } ${sizeClasses[size]} ${stateClasses[state]}`;

  if (state === 'stories') {
    return (
      <div className="relative inline-block">
        {/* Gradient container */}
        <div className={gradientContainerClasses}>
          {/* Avatar image container */}
          <div className={avatarContainerClasses}>
            {placeholder || text ? (
              <div className={placeholderContainerClasses}>
                {text ? (
                  <span className={textInitialsClasses}>{initials}</span>
                ) : (
                  <UserIcon className={userIconClasses} />
                )}
              </div>
            ) : (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        </div>

        {/* Status Icon */}
        {statusIcon && (
          <div className={statusIconContainerClasses}>
            {status === 'verified' && (
              <VerifiedIcon className={statusIconSizeClasses[status][size]} />
            )}
            {status === 'company' && (
              <img
                src={companyIcon}
                alt="Company"
                className={`${statusIconSizeClasses[status][size]} object-cover object-center`}
              />
            )}
          </div>
        )}
      </div>
    );
  }

  // Regular avatar for other states
  return (
    <div className="relative inline-block">
      <div className={regularAvatarContainerClasses}>
        {placeholder || text ? (
          <div className={placeholderContainerClasses}>
            {text ? (
              <span className={textInitialsClasses}>{initials}</span>
            ) : (
              <UserIcon className={userIconClasses} />
            )}
          </div>
        ) : (
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>

      {/* Status Icon */}
      {statusIcon && (
        <div className={statusIconContainerClasses}>
          {status === 'verified' && (
            <VerifiedIcon className={statusIconSizeClasses[status][size]} />
          )}
          {status === 'company' && (
            <img
              src={companyIcon}
              alt="Company"
              className={`${statusIconSizeClasses[status][size]} object-cover object-center`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;