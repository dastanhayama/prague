import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FeaturedIcon from './'; // Adjust the import path as necessary
import InfoIcon from '@icons/General/info-circle.svg'; 

// Define the metadata for the FeaturedIcon component
const meta = {
  title: 'Components/FeaturedIcon',
  component: FeaturedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['glass', 'light', 'dark', 'modern'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    icon: {
      control: { type: 'object' }, // You can customize this control as needed
    },
  },
  args: {  },
} satisfies Meta<typeof FeaturedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define a primary story for the FeaturedIcon component


// Additional stories for different configurations
export const ModernSmall: Story = {
    args: {
      type: 'modern',
      size: 'sm',
      icon: InfoIcon,
    },
};
export const ModernMedium: Story = {
    args: {
      type: 'modern',
      size: 'md',
      icon: InfoIcon,
    },
  };

export const ModernLarge: Story = {
  args: {
    type: 'modern',
    size: 'lg',
    icon: InfoIcon,
  },
};

export const ModernExtraLarge: Story = {
  args: {
    type: 'modern',
    size: 'xl',
    icon: InfoIcon,
  },
};