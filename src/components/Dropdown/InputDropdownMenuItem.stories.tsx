import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputDropdownMenuItem from './InputDropdownMenuItem';
import PlusIcon from '@/icons/General/plus.svg';
import Avatar from '@/components/Avatar'; 
import Dot from '@/components/Dot';

const meta: Meta<typeof InputDropdownMenuItem> = {
  title: 'Components/InputDropdownMenuItem',
  component: InputDropdownMenuItem,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'icon-leading', 'avatar-leading', 'dot-leading'],
      },
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputDropdownMenuItem>;

// Default variant
export const Default: Story = {
  args: {
    text: 'Default item',
    supportingText: 'Supporting text',
    selected: false,
    disabled: false,
  },
};

// States
export const Selected: Story = {
  args: {
    ...Default.args,
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const SelectedAndDisabled: Story = {
  args: {
    ...Default.args,
    selected: true,
    disabled: true,
  },
};

// Icon leading variants
export const IconLeading: Story = {
  args: {
    type: 'icon-leading',
    icon: PlusIcon,
    text: 'Icon leading item',
    supportingText: 'With user icon',
  },
};


// Avatar leading variants
export const AvatarLeading: Story = {
  args: {
    type: 'avatar-leading',
    avatar: <Avatar size="xs" avatar='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww' />,
    text: 'Avatar leading item',
    supportingText: 'With user avatar',
  },
};

export const AvatarLeadingDisabled: Story = {
  args: {
    ...AvatarLeading.args,
    disabled: true,
  },
};

// Dot leading variants
export const DotLeading: Story = {
  args: {
    type: 'dot-leading',
    dot: <Dot size='md' color='success' />,
    text: 'Dot leading item',
    supportingText: 'With colored dot',
  },
};

export const DotLeadingDisabled: Story = {
  args: {
    ...DotLeading.args,
    disabled: true,
  },
};

