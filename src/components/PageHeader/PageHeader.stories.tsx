import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from './index';
import Avatar from '@/components/Avatar'; // Import your Avatar component

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
    avatar: null, // Default to null, but can be overridden in stories
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
    avatar: null, // No avatar by default
  },
  render: (args) => (
    <div className="w-full h-[200vh]">
      <PageHeader {...args} />
    </div>
  ),
};

// Story with Avatar
export const WithAvatar: Story = {
  args: {
    type: 'avatar',
    actions: true,
    label: 'Olivia Rhye',
    supportingText: 'olivia@gmail.com',
    divider: true,
    centered: true,
    collapse: false,
    banner: true,
    search: true,
    avatar: (
      <Avatar
        size="3xl"
        contrastBorder
        placeholder={false}
        state="default"
        statusIcon={true}
        status="verified"
        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
      />
    ),
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
    avatar: null, // No avatar by default
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
    avatar: null, // No avatar by default
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