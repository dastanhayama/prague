"use client"
import React, { useState } from 'react';
import Avatar from '../Avatar';
import AvatarLabelGroup from '../AvatarLabelGroup';
import ChevronSelectorVerticalIcon from '@icons/Arrows/chevron-selector-vertical.svg';
import LogOutIcon from '@icons/General/log-out-01.svg'
// Define the props type
interface NavAccountCardProps {
  type?: 'simple' | 'card';
  open?: boolean;
}

const NavAccountCard: React.FC<NavAccountCardProps> = ({ type = 'simple', open: initialOpen = false }) => {
  // State to manage open/close
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  // Tailwind classes as variables
  const containerClasses = `
    flex items-start justify-between  
    desktop:w-[280px] w-[256px] relative
    ${type === 'card' ? 'cursor-pointer bg-primary border border-secondary p-lg  rounded-xl ' : 'bg-transparent px-md pb-0 pt-2xl border-t border-secondary  rounded-none'}
  `;

  const iconContainerClasses = `
    w-[32px] h-[32px] flex items-center justify-center rounded-sm absolute ${type === "card" ? 'top-[6px] right-[6px]' : 'top-[10px] right-0'}
    ${isOpen ? 'bg-[#F9FAFB] shadow-xs' : 'bg-primary'}
  `;

  const iconClasses = `
    w-[20px] h-[20px] [&>path]:stroke-[#98A2B3]
  `;

  // Avatar URL
  const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww";

  // Handle click for card type
  const handleClick = () => {
    if (type === 'card') {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={containerClasses} onClick={handleClick}>
      <AvatarLabelGroup
        size="md"
        text="Olivia Rhye"
        supportingText="olivia@eroguide.cz"
        avatar={
          <Avatar
            size="lg"
            contrastBorder
            state="default"
            statusIcon={false}
            avatar={avatar}
          />
        }
      />
      <div className={iconContainerClasses}>
        {type === 'card' ? (
            <ChevronSelectorVerticalIcon className={iconClasses} />
        ) : (
            <LogOutIcon className={iconClasses} />
        )}
      </div>
    </div>
  );
};

export default NavAccountCard;