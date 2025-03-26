import type { Meta, StoryObj } from '@storybook/react'
import Badge from './index'
import Dot from '../Dot'
import ArrowUp from '@icons/Arrows/arrow-up.svg'
import ArrowRight from '@icons/Arrows/arrow-right.svg'
import CloseIcon from '@icons/General/x-close.svg'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text to display in the badge',
    },
    type: {
      control: { type: 'select' },
      options: ['pill color', 'pill outline', 'badge color', 'badge modern'],
      description: 'Type of badge styling',
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
      description: 'Color variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm', 'xs'],
      description: 'Size of the badge',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'only'],
      description: 'Position of the icon relative to text',
    },
  },
  args: {
    label: 'Label',
    type: 'badge color',
    color: 'gray',
    size: 'md',
    iconPosition: 'left',
  },
}

export default meta

type Story = StoryObj<typeof Badge>

// Basic badge without icon
export const Basic: Story = {
  args: {
    type: 'badge color',
    color: 'gray',
  },
}

// Badge with icon only
export const IconOnly: Story = {
  args: {
    icon: CloseIcon,
    iconPosition: 'only',
  },
}

// Badge with Dot component
export const WithDot: Story = {
  args: {
    icon: <Dot size="sm" color="success" />,
    iconPosition: 'left',
  },
  render: (args) => <Badge {...args} icon={<Dot size="sm" color={args.color || 'success'} />} />,
}

// Badge with close icon on the right
export const WithCloseIcon: Story = {
  args: {
    icon: CloseIcon,
    iconPosition: 'right',
  },
}

// Badge with arrow right icon on the right
export const WithArrowRight: Story = {
  args: {
    icon: ArrowRight,
    iconPosition: 'right',
  },
}

// Badge with arrow up on the left
export const WithArrowUp: Story = {
  args: {
    icon: ArrowUp,
    iconPosition: 'left',
  },
}

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge label="Gray" color="gray" />
      <Badge label="Brand" color="brand" />
      <Badge label="Error" color="error" />
      <Badge label="Warning" color="warning" />
      <Badge label="Success" color="success" />
      <Badge label="Gray Blue" color="gray blue" />
      <Badge label="Blue Light" color="blue light" />
      <Badge label="Blue" color="blue" />
      <Badge label="Indigo" color="indigo" />
      <Badge label="Purple" color="purple" />
      <Badge label="Pink" color="pink" />
      <Badge label="Orange" color="orange" />
    </div>
  ),
}

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge label="Large" size="lg" />
      <Badge label="Medium" size="md" />
      <Badge label="Small" size="sm" />
      <Badge label="X-Small" size="xs" />
    </div>
  ),
}

// Type variants
export const TypeVariants: Story = {
  args: {
    color: 'blue',
  },

  render: () => (
    <div className="flex gap-2">
      <Badge label="Pill Color" type="pill color" />
      <Badge label="Pill Outline" type="pill outline" />
      <Badge label="Badge Color" type="badge color" />
      <Badge label="Badge Modern" type="badge modern" />
    </div>
  ),
}
