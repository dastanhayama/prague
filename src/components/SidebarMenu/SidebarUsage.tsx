import React from 'react';
import SidebarMenu from './index';
import Logo from '@/components/Logo';
import NavAccountCard from '@/components/NavAccountCard';
import { MenuItem } from './index'; // Import the MenuItem type from your SidebarMenu

const SidebarUsage = () => {
  const menuItems: MenuItem[] = [
    { title: 'Dashboard', link: 'dashboard', icon: '@icons/General/info-circle.svg', is_divider: false, order: 0 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 1 },
    { title: '', link: '', icon: '@icons/General/info-circle.svg', is_divider: true, order: 2 },
    { title: 'Settings', link: 'settings', icon: '@icons/General/info-circle.svg', is_divider: false, order: 3 },
    { title: 'Home', link: 'dashboard', icon: '@icons/General/info-circle.svg', is_divider: false, order: 5 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 4 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 6 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 7 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 8 },
    { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 9 },
  ];

  return (
    <SidebarMenu 
      docs={menuItems}
      header={<Logo size="sm" brand="business" type="logo" />}
      footer={<NavAccountCard type="card" />}
    />
  );
};

export default SidebarUsage;