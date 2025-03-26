import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from './index';
import Logo from '@/components/Logo';
import NavAccountCard from '@/components/NavAccountCard';
import { MenuItem } from './index';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    docs: {
      control: 'object',
      description: 'Array of menu items to display in the sidebar',
    },
    header: {
      control: 'object',
      description: 'Header content to display at the top of the sidebar',
    },
    footer: {
      control: 'object',
      description: 'Footer content to display at the bottom of the sidebar',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const defaultMenuItems: MenuItem[] = [
  { title: 'Dashboard', link: 'dashboard', icon: '@icons/General/info-circle.svg', is_divider: false, order: 0, current: true },
  { title: 'Profile', link: 'profile', icon: '@icons/General/info-circle.svg', is_divider: false, order: 1 },
  { title: '', link: '', icon: '@icons/General/info-circle.svg', is_divider: true, order: 2 },
  { title: 'Settings', link: 'settings', icon: '@icons/General/info-circle.svg', is_divider: false, order: 3 },
  { title: 'Messages', link: 'messages', icon: '@icons/General/info-circle.svg', is_divider: false, order: 4 },
  { title: '', link: '', icon: '@icons/General/info-circle.svg', is_divider: true, order: 5 },
  { title: 'Help', link: 'help', icon: '@icons/General/info-circle.svg', is_divider: false, order: 6 },
  { title: 'Logout', link: 'logout', icon: '@icons/General/info-circle.svg', is_divider: false, order: 7 },
];

export const Default: Story = {
  args: {
    docs: defaultMenuItems,
    header: <Logo size="sm" brand="business" type="logo" />,
    footer: <NavAccountCard type="card" />,
  },
};

export const WithCustomHeader: Story = {
  args: {
    docs: defaultMenuItems,
    header: <div className="text-xl font-bold p-4">Custom Header</div>,
    footer: <NavAccountCard type="card" />,
  },
};

export const WithCustomFooter: Story = {
  args: {
    docs: defaultMenuItems,
    header: <Logo size="sm" brand="business" type="logo" />,
    footer: <div className="text-center p-4">Custom Footer Content</div>,
  },
};

export const WithoutDividers: Story = {
  args: {
    docs: defaultMenuItems.filter(item => !item.is_divider),
    header: <Logo size="sm" brand="business" type="logo" />,
    footer: <NavAccountCard type="card" />,
  },
};

export const WithManyItems: Story = {
  args: {
    docs: [
      ...defaultMenuItems,
      { title: 'Analytics', link: 'analytics', icon: '@icons/General/info-circle.svg', is_divider: false, order: 8 },
      { title: 'Reports', link: 'reports', icon: '@icons/General/info-circle.svg', is_divider: false, order: 9 },
      { title: '', link: '', icon: '@icons/General/info-circle.svg', is_divider: true, order: 10 },
      { title: 'Support', link: 'support', icon: '@icons/General/info-circle.svg', is_divider: false, order: 11 },
    ],
    header: <Logo size="sm" brand="business" type="logo" />,
    footer: <NavAccountCard type="card" />,
  },
};