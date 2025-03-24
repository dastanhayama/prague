import type { Meta, StoryObj } from '@storybook/react';
import ButtonUtility from './index';
import PlaceholderIcon from '@icons/General/placeholder.svg'; // Adjust import path as needed

const meta: Meta<typeof ButtonUtility> = {
  title: 'Components/ButtonUtility',
  component: ButtonUtility,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm'],
      description: 'Size of the button',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Visual state of the button',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['secondary', 'tertiary'],
      description: 'Hierarchy level of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    icon: {
      control: false, // We don't need a control for the icon component
      description: 'SVG icon component to display',
    },
  },
  args: {
    size: 'sm',
    state: 'default',
    hierarchy: 'secondary',
    disabled: false,
    icon: PlaceholderIcon,
  },
};

export default meta;

type Story = StoryObj<typeof ButtonUtility>;

// Default story
export const Default: Story = {
  args: {
    size: 'sm',
    state: 'default',
    hierarchy: 'secondary',
    disabled: false,
  },
};

// Extra Small Size
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

// Secondary Hierarchy
export const Secondary: Story = {
  args: {
    hierarchy: 'secondary',
  },
};

// Tertiary Hierarchy
export const Tertiary: Story = {
  args: {
    hierarchy: 'tertiary',
  },
};

// Hover State
export const HoverState: Story = {
  args: {
    state: 'hover',
  },
};

// Focused State
export const FocusedState: Story = {
  args: {
    state: 'focused',
  },
};

// Disabled State - Secondary
export const DisabledSecondary: Story = {
  args: {
    hierarchy: 'secondary',
    disabled: true,
  },
};

// Disabled State - Tertiary
export const DisabledTertiary: Story = {
  args: {
    hierarchy: 'tertiary',
    disabled: true,
  },
};

