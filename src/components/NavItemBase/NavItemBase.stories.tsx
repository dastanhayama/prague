import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavItemBase from '@/components/NavItemBase'; 
import ChevronDownIcon from '@icons/Arrows/chevron-down.svg'; // Import your icons
import BarChartIcon from '@icons/Charts/bar-chart-01.svg'; // Import your icons
import Dot from '../Dot'; // Import your Dot component
import Badge from '../Badge'; // Import your Badge component

// Define the metadata for the component
const meta: Meta<typeof NavItemBase> = {
  title: 'Components/NavItemBase',
  component: NavItemBase,
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'boolean',
      description: 'Whether the nav item is currently active',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused'],
      description: 'The state of the nav item',
    },
    text: {
      control: 'text',
      description: 'The text displayed in the nav item',
    },
    dot: {
      control: 'object',
      description: 'A dot element to display before the text',
    },
    icon: {
      control: 'object',
      description: 'An optional icon to display before the text',
    },
    badge: {
      control: 'object',
      description: 'A badge element to display after the text',
    },
    dropdown: {
      control: 'object',
      description: 'An optional dropdown icon to display after the badge',
    },
  },
};

export default meta;

// Define the default story
type Story = StoryObj<typeof NavItemBase>;

export const Default: Story = {
  args: {
    text: 'Dashboard',
    current: false,
    state: 'default',
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};

export const CurrentItem: Story = {
  args: {
    text: 'Dashboard',
    current: true,
    state: 'default',
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};

export const HoverState: Story = {
  args: {
    text: 'Dashboard',
    state: 'hover',
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};

export const FocusedState: Story = {
  args: {
    text: 'Dashboard',
    state: 'focused',
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};

export const FocusedAndCurrent: Story = {
  args: {
    text: 'Dashboard',
    state: 'focused',
    current: true,
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};

// Example of a story with all props combined
export const FullUsage: Story = {
  args: {
    text: 'Dashboard',
    current: true,
    state: 'focused',
    icon: BarChartIcon,
    dropdown: ChevronDownIcon,
    dot: <Dot size="md" />,
    badge: <Badge label="10" type="pill color" size="sm" color="gray" />,
  },
};