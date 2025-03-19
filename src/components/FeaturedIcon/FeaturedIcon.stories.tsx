import type { Meta, StoryObj } from '@storybook/react';
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
      options: ['glass', 'light', 'dark', 'modern', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'gray', 'error', 'warning', 'success'],
    },
    icon: {
      control: { type: 'object' }, // You can customize this control as needed
    },
  },
  args: { 
    type: 'modern',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
} satisfies Meta<typeof FeaturedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;



// Additional stories for different configurations
export const Modern: Story = {
  args: {
    type: 'modern',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
};

export const Light: Story = {
  args: {
    type: 'light',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
};

export const Glass: Story = {
  args: {
    type: 'glass',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    size: 'md',
    color: 'brand',
    icon: InfoIcon,
  },
};