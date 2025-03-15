import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from './index'; 

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['buttons', 'search', 'button-group'],
    },
    tabs: {
      control: { type: 'boolean' },
    },
    actions: {
      control: { type: 'boolean' },
    },
    supportingText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    dropdownIcon: {
      control: { type: 'boolean' },
    },
    divider: {
      control: { type: 'boolean' },
    },
    tooltip: {
      control: { type: 'boolean' },
    },
  },
  args: {
    type: 'buttons',
    tabs: false,
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    dropdownIcon: true,
    tooltip: true,
    divider: true,
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

// Default story
export const Default: Story = {
  args: {
    type: 'buttons',
    tabs: false,
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    dropdownIcon: true,
    tooltip: true,
    divider: true,
  },
};

// Mobile view story
export const MobileView: Story = {
  args: {
    type: 'buttons',
    tabs: false,
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    dropdownIcon: true,
    tooltip: true,
    divider: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Use Storybook's mobile viewport
    },
  },
};

// Desktop view story
export const DesktopView: Story = {
  args: {
    type: 'buttons',
    tabs: false,
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    dropdownIcon: true,
    tooltip: true,
    divider: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop', // Use Storybook's desktop viewport
    },
  },
};

