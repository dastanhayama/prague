import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Dot from './index'

// Define the meta information for the component
const meta: Meta<typeof Dot> = {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    outline: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    color: {
      control: { type: 'select' },
      options: [
        'gray',
        'brand',
        'error',
        'warning',
        'success',
        'gray blue',
        'blue light',
        'blue',
        'indigo',
        'purple',
        'pink',
        'orange',
      ],
      defaultValue: 'success',
    },
  },
}

export default meta

// Define the type for the stories
type Story = StoryObj<typeof Dot>

// Base story with default props
export const Default: Story = {
  args: {
    size: 'md',
    outline: false,
    color: 'success',
  },
}

// Story with outline
export const WithOutline: Story = {
  args: {
    size: 'md',
    outline: true,
    color: 'success',
  },
}

// Story showing all color variants
export const AllColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {(
        [
          'gray',
          'brand',
          'error',
          'warning',
          'success',
          'gray blue',
          'blue light',
          'blue',
          'indigo',
          'purple',
          'pink',
          'orange',
        ] as const
      ).map((color) => (
        <div key={color} className="flex items-center gap-2">
          <Dot {...args} color={color} />
          <span className="text-sm capitalize">{color}</span>
        </div>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    outline: false,
  },
}

// Story showing different sizes
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Dot {...args} size="sm" />
      <Dot {...args} size="md" />
      <Dot {...args} size="lg" />
    </div>
  ),
  args: {
    outline: true,
    color: 'brand',
  },
}
