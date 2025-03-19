import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index'; // Adjust the import path as needed

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
    },
    contrastBorder: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'boolean' },
    },
    state: {
      control: { type: 'select' },
      options: ['stories', 'focused', 'default', 'hover', 'storiesSeen'],
    },
    text: {
      control: { type: 'text' },
    },
    statusIcon: {
      control: { type: 'boolean' },
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'company', 'verified'],
    },
    avatar: {
      control: { type: 'text' },
    },
    companyIcon: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: true,
    state: 'default',
    text: '',
    statusIcon: false,
    status: 'online',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',

        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Default story
export const Default: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: true,
    state: 'default',
    text: '',
    statusIcon: false,
    status: 'online',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',

        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with placeholder
export const Placeholder: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: true,
    state: 'default',
    text: '',
    statusIcon: false,
    status: 'online',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',

        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with text initials
export const TextInitials: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: false,
    state: 'default',
    text: 'John Doe',
    statusIcon: false,
    status: 'online',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',

        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with image
export const WithImage: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: false,
    state: 'default',
    text: '',
    statusIcon: false,
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with status icon (online)
export const WithStatusOnline: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: false,
    state: 'default',
    text: '',
    statusIcon: true,
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with status icon (verified)
export const WithStatusVerified: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: false,
    state: 'default',
    text: '',
    statusIcon: true,
    status: 'verified',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
        companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',

  },
};

// Avatar with status icon (company)
export const WithStatusCompany: Story = {
  args: {
    size: 'md',
    contrastBorder: true,
    placeholder: false,
    state: 'default',
    text: '',
    statusIcon: true,
    status: 'company',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
};

// Custom story based on your example
export const CustomExample: Story = {
  args: {
    size: '3xl',
    contrastBorder: true,
    placeholder: true,
    state: 'default',
    statusIcon: true,
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    companyIcon: 'https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
};