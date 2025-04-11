import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab'; 
import Icon from '@icons/General/home-01.svg'
import Marker from './Marker'; // Import your Marker component

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the tab is active',
    },
    caption: {
      control: 'text',
      description: 'Text displayed below the icon',
    },
    marker: {
      control: 'object',
      description: 'Marker component to display notification',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

// Default Tab with marker
export const Default: Story = {
  args: {
    icon: Icon,
    caption: 'Home',
    marker: <Marker color='orange-dark' text='2' type='1digit' />,
  },
};

// Active Tab with marker
export const Active: Story = {
  args: {
    icon: Icon,
    caption: 'Home',
    active: true,
    marker: <Marker color='orange-dark' text='2' type='1digit' />,
  },
};

// Tab without marker
export const WithoutMarker: Story = {
  args: {
    icon: Icon,
    caption: 'Profile',
  },
};

// Active Tab without marker
export const ActiveWithoutMarker: Story = {
  args: {
    icon: Icon,
    caption: 'Profile',
    active: true,
  },
};

// Show all variants in one story
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    <Tab icon={Icon} caption='Home' marker={<Marker color='orange-dark' text='2' type='1digit'/>} />
    <Tab icon={Icon} caption='Home' active marker={<Marker color='orange-dark' text='2' type='1digit'/>} />
    <Tab icon={Icon} caption='Profile' />
    <Tab icon={Icon} caption='Profile' active />
  </div>
);

AllVariants.parameters = {
  docs: {
    description: {
      story: 'Demonstration of all Tab variants in one view',
    },
  },
};