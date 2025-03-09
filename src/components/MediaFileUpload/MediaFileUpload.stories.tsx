import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import MediaFileUpload from './index'

const meta: Meta<typeof MediaFileUpload> = {
  title: 'Components/MediaFileUpload',
  component: MediaFileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' }, // Add disabled control
  },
}

export default meta
type Story = StoryObj<typeof MediaFileUpload>

// Default state
export const Default: Story = {
  args: {
    multiple: true,
    accept: ['image/png', 'image/jpeg'],
    maxSize: 5 * 1024 * 1024,
  },
}

// Hover state (simulated with a decorator)
export const Hover: Story = {
  args: {
    ...Default.args,
    hovered: true, // Simulate hover state
  },
  
}

// Disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true, // Disable the component
  },
}