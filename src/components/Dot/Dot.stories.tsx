import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dot from './index';

// Define the meta information for the component
const meta: Meta<typeof Dot> = {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    outline: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
    outlineColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;

// Define the type for the stories
type Story = StoryObj<typeof Dot>;

// Story for Dot with outline=false
export const Default: Story = {
  args: {
    size: 'md',
    outline: false,
    color: '#17B26A', // Default green color
    outlineColor: '#DCFAE6', // Default outline color
  },
};

// Story for Dot with outline=true
export const WithOutline: Story = {
  args: {
    size: 'md',
    outline: true,
    color: '#17B26A', // Default green color
    outlineColor: '#DCFAE6', // Default outline color
  },
};

// Story for Dot with custom colors
export const CustomColors: Story = {
  args: {
    size: 'md',
    outline: true,
    color: '#FF5733', // Custom background color (e.g., orange)
    outlineColor: '#FFC300', // Custom outline color (e.g., yellow)
  },
};