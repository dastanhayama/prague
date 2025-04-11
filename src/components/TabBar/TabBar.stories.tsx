import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TabBar from '.';
import Tab from './Tab';
import HomeIcon from '@icons/General/home-01.svg';
import SearchIcon from '@icons/General/search-lg.svg';
import ZapIcon from '@icons/General/zap.svg';
import HeartIcon from '@icons/General/heart.svg';
import UserIcon from '@icons/Users/user-01.svg';
import Marker from './Marker';

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['sticky', 'floating'],
      description: 'Type of TabBar behavior',
    },
    blur: {
      control: 'boolean',
      description: 'Whether to apply blur effect',
    },
    children: {
      control: false, // Disable control for children as we'll handle it in the template
    },
  },
  args: {
    type: 'floating',
    blur: false,
  },
};

export default meta;

type Story = StoryObj<typeof TabBar>;

// Template for stories
const Template: Story = {
  render: (args) => (
    <div className="h-[100vh] bg-gradient-to-b from-gray-100 to-gray-300 w-full">
      <TabBar {...args}>
        <Tab icon={HomeIcon} active caption="Home" />
        <Tab icon={SearchIcon} caption="Search" />
        <Tab icon={ZapIcon} caption="Now" />
        <Tab 
          icon={HeartIcon} 
          caption="Favourite" 
          marker={<Marker type="1digit" text="2" color="orange-dark" />} 
        />
        <Tab icon={UserIcon} caption="Profile" />
      </TabBar>
    </div>
  ),
};

// Default floating TabBar
export const Floating = {
  ...Template,
  args: {
    type: 'floating',
    blur: false,
  },
};

// Floating with blur effect
export const FloatingWithBlur = {
  ...Template,
  args: {
    type: 'floating',
    blur: true,
  },
};

// Sticky TabBar
export const Sticky = {
  ...Template,
  args: {
    type: 'sticky',
    blur: false,
  },
};

// Sticky with blur effect
export const StickyWithBlur = {
  ...Template,
  args: {
    type: 'sticky',
    blur: true,
  },
};

// Interactive playground
export const Playground = {
  ...Template,
  args: {
    type: 'floating',
    blur: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use Storybook controls to toggle between different TabBar variants',
      },
    },
  },
};