import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Toast, { ToastType } from './index' // Adjust the import path as needed

// Meta configuration for Storybook
const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'brand', 'info', 'error', 'warning', 'success'],
    },
    message: {
      control: 'text',
    },
    supportText: {
      control: 'text',
    },
    duration: {
      control: 'number',
    },
  },
  args: {
    onClose: fn(),
    id: 'toast-1', // Default ID for the toast
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

// Default Toast
export const Default: Story = {
  args: {
    type: 'default',
    message: 'This is a default toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}

// Brand Toast
export const Brand: Story = {
  args: {
    type: 'brand',
    message: 'This is a brand toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}

// Info Toast
export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an info toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}

// Error Toast
export const Error: Story = {
  args: {
    type: 'error',
    message: 'This is an error toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}

// Warning Toast
export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}

// Success Toast
export const Success: Story = {
  args: {
    type: 'success',
    message: 'This is a success toast message.',
    supportText: 'Additional information can go here.',
    duration: 0,
  },
}
