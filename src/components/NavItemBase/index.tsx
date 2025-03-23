import React from 'react';

interface NavItemBaseProps {
  current?: boolean;
  state?: 'default' | 'hover' | 'focused';
  text: string;
  dot?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: React.ReactNode;
  dropdown?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const NavItemBase: React.FC<NavItemBaseProps> = ({
  current = false,
  state = 'default',
  text,
  dot,
  icon: Icon,
  badge,
  dropdown: Dropdown,
}) => {
  // Determine styles based on state and current
  const getStateStyles = () => {
    switch (state) {
      case 'hover':
        return 'bg-[#F9FAFB] text-[16px] leading-[24px] font-semibold text-[#182230]';
      case 'focused':
        return current ? 'bg-[#F9FAFB] text-[16px] leading-[24px] font-semibold text-secondary-700': 'bg-primary text-[16px] leading-[24px] font-semibold text-secondary-700';
      default:
        return current ? 'bg-[#F9FAFB] text-[16px] leading-[24px] font-semibold text-[#182230] hover:bg-[#F2F4F7] focus:bg-[#F9FAFB] transition-all duration-200' : 'bg-primary text-[16px] leading-[24px] font-semibold text-secondary-700 hover:bg-[#F9FAFB] hover:text-[#182230] focus:bg-primary transition-all duration-200';
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-[12px] py-2 rounded-sm w-full max-w-[280px] cursor-pointer ${getStateStyles()}`}
    >
      {/* Left side: dot, icon, and text */}
      <div className="flex items-center gap-lg mr-[50px]">
        {dot && <div>{dot}</div>}
        {Icon && <Icon className="w-[20px] h-[20px] [&>path]:stroke-[#667085]" />}
        <span>{text}</span>
      </div>

      {/* Right side: badge and dropdown */}
      <div className="flex items-center gap-lg ">
        {badge && <div>{badge}</div>}
        {Dropdown && <Dropdown className="w-[16px] h-[16px] [&>path]:stroke-[#98A2B3]" />}
      </div>
    </div>
  );
};

export default NavItemBase;