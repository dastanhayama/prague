import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AvatarLabelGroup from './index'; // Adjust the import path as needed
import Avatar from '../Avatar'; // Adjust the import path as needed

const meta: Meta<typeof AvatarLabelGroup> = {
  title: 'Components/AvatarLabelGroup',
  component: AvatarLabelGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    text: {
      control: { type: 'text' },
    },
    supportingText: {
      control: { type: 'text' },
    },
    avatar: {
      control: { type: 'object' },
    },
  },
};

export default meta;

// Define the type for the story
type Story = StoryObj<typeof AvatarLabelGroup>;

// Avatar image and company icon URLs
const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww";
const companyIcon = "https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D";

// Story for the 'sm' size
export const Small: Story = {
  args: {
    size: 'sm',
    text: 'Olivia Rhye',
    supportingText: 'Software Engineer',
    avatar: (
      <Avatar
        size="md"
        contrastBorder
        state="default"
        statusIcon={false}
        status="verified"
        avatar={avatar}
        companyIcon={companyIcon}
      />
    ),
  },
};

// Story for the 'md' size
export const Medium: Story = {
  args: {
    size: 'md',
    text: 'Olivia Rhye',
    supportingText: 'Software Engineer',
    avatar: (
      <Avatar
        size="lg"
        contrastBorder
        state="default"
        statusIcon={false}
        status="verified"
        avatar={avatar}
        companyIcon={companyIcon}
      />
    ),
  },
};

// Story for the 'lg' size
export const Large: Story = {
  args: {
    size: 'lg',
    text: 'Olivia Rhye',
    supportingText: 'Software Engineer',
    avatar: (
      <Avatar
        size="xl"
        contrastBorder
        state="default"
        statusIcon={false}
        status="verified"
        avatar={avatar}
        companyIcon={companyIcon}
      />
    ),
  },
};

// Story for the 'xl' size
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    text: 'Olivia Rhye',
    supportingText: 'Software Engineer',
    avatar: (
      <Avatar
        size="2xl"
        contrastBorder
        state="default"
        statusIcon={false}
        status="verified"
        avatar={avatar}
        companyIcon={companyIcon}
      />
    ),
  },
};