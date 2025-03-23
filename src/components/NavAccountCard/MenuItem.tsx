import React from 'react';
import Avatar from '../Avatar';
import AvatarLabelGroup from '../AvatarLabelGroup';



type MenuType = 'account' | 'menu item';
interface MenuItemProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dot?: React.ReactNode;
  shortcut?: string;
  placeholder?: string;
  current?: boolean;
  type?: MenuType;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  dot: DotComponent,
  shortcut,
  placeholder = 'Placeholder',
  current = false,
    type = 'menu item',
}) => {

    
  // Container classes
  const containerClasses = `p-md flex items-start justify-between w-[240px] rounded-sm relative ${current ? 'bg-[#F9FAFB] hover:bg-[#F9FAFB]' : 'bg-transparent hover:bg-[#F9FAFB]'}`;

  // Left section classes
  const leftSectionClasses = 'flex items-center gap-md';

  // Icon classes
  const iconClasses = '[&>path]:stroke-[#667085] w-[20px] h-[20px]';

  // Text classes
  const textClasses = 'text-secondary-700 text-[14px] leading-[20px] font-semibold';

  // Right section classes
  const rightSectionClasses = 'flex items-center gap-lg';

  // Shortcut classes
  const shortcutClasses = 'rounded-xs border border-secondary text-[#475467] font-medium text-[12px] leading-[18px] py-[1px] px-xs';
  const iconContainerClasses = `
  flex items-center justify-center
`;
const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww";

  return (
    <div className={containerClasses}>
        {type === 'menu item' ? (
            <>
                <div className={leftSectionClasses}>
                    {Icon && <Icon className={iconClasses} />}
                    {placeholder && <p className={textClasses}>{placeholder}</p>}
                </div>
                <div className={rightSectionClasses}>
                    {DotComponent}
                    {shortcut && <span className={shortcutClasses}>{shortcut}</span>}
                </div>
            </>
        ) : (
            <>
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
      <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="custom-radio"
        className="appearance-none w-4 h-4 rounded-full border border-[#D0D5DD] checked:border-[#C00C53] checked:border-[5px] checked:bg-primary transition-colors duration-200"
      />
      <span className="absolute w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 checked:opacity-100 pointer-events-none" />
    </label>
      </div> 
            </>
        )}
        
    </div>
  );
};

export default MenuItem;