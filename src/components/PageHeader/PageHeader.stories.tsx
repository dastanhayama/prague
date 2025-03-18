import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from './index'; 

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['simple', 'avatar'],
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
    divider: {
      control: { type: 'boolean' },
    },
    centered: {
      control: { type: 'boolean' },
    },
    collapse: {
      control: { type: 'boolean' },
    },
    banner: {
      control: { type: 'boolean' },
    },
    search: {
      control: { type: 'boolean' },
    },
    avatar: {
      control: { type: 'object' },
    },
  },
  args: {
    type: 'simple',
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    divider: true,
    centered: false,
    collapse: true,
    banner: false,
    search: true,
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

// Default story
export const Default: Story = {
  args: {
    type: 'simple',
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    divider: true,
    centered: false,
    collapse: true,
    banner: false,
    search: true,
  },
  render: (args) => (
    <div className="w-full h-[200vh]">
      <PageHeader {...args} />
    </div>
  ),
};

// Mobile view story
export const MobileView: Story = {
  args: {
    type: 'simple',
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    divider: true,
    centered: false,
    collapse: true,
    banner: false,
    search: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Use Storybook's mobile viewport
    },
  },
  render: (args) => (
    <div className="w-full h-[200vh]">
      <PageHeader {...args} />
    </div>
  ),
};

// Desktop view story
export const DesktopView: Story = {
  args: {
    type: 'simple',
    actions: true,
    label: 'Team members',
    supportingText: 'Manage your team members and their account permissions here.',
    divider: true,
    centered: false,
    collapse: true,
    banner: false,
    search: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop', // Use Storybook's desktop viewport
    },
  },
  render: (args) => (
    <div className="w-full h-[200vh]">
      <PageHeader {...args} />
    </div>
  ),
};