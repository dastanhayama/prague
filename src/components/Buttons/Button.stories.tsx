import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import Placeholder from '@icons/General/placeholder.svg'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    hierarchy: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary gray',
        'secondary color',
        'tertiary gray',
        'tertiary color',
        'link gray',
        'link color',
      ],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'only'],
      if: { arg: 'icon' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

// Empty click handler for stories
const handleClick = () => {
  //   console.log('Button clicked');
}

// Base button template
const Template: Story = {
  render: (args) => (
    <Button {...args} onClick={handleClick}>
      {args.children || 'Button CTA'}
    </Button>
  ),
}

// Default button
export const Default: Story = {
  ...Template,
  args: {
    size: 'md',
    hierarchy: 'primary',
    onClick: handleClick,
  },
}

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[400px] w-full">
      <Button size="sm" onClick={handleClick}>
        Small
      </Button>
      <Button size="md" onClick={handleClick}>
        Medium
      </Button>
      <Button size="lg" onClick={handleClick}>
        Large
      </Button>
      <Button size="xl" onClick={handleClick}>
        Extra Large
      </Button>
      <Button size="2xl" onClick={handleClick}>
        2X Large
      </Button>
    </div>
  ),
}

// Hierarchy variations
export const Hierarchies: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[400px] w-full">
      <Button hierarchy="primary" onClick={handleClick}>
        Primary
      </Button>
      <Button hierarchy="secondary gray" onClick={handleClick}>
        Secondary Gray
      </Button>
      <Button hierarchy="secondary color" onClick={handleClick}>
        Secondary Color
      </Button>
      <Button hierarchy="tertiary gray" onClick={handleClick}>
        Tertiary Gray
      </Button>
      <Button hierarchy="tertiary color" onClick={handleClick}>
        Tertiary Color
      </Button>
      <Button hierarchy="link gray" onClick={handleClick}>
        Link Gray
      </Button>
      <Button hierarchy="link color" onClick={handleClick}>
        Link Color
      </Button>
    </div>
  ),
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[400px] w-full">
      <div className="flex gap-4">
        <Button icon={Placeholder} iconPosition="left" onClick={handleClick}>
          Left Icon
        </Button>
        <Button icon={Placeholder} iconPosition="right" onClick={handleClick}>
          Right Icon
        </Button>
      </div>
      <Button icon={Placeholder} iconPosition="only" onClick={handleClick}>
        Only
      </Button>
    </div>
  ),
}

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-[400px] w-full">
      <Button hierarchy="primary" disabled onClick={handleClick}>
        Primary Disabled
      </Button>
      <Button hierarchy="secondary gray" disabled onClick={handleClick}>
        Secondary Gray Disabled
      </Button>
      <Button hierarchy="secondary color" disabled onClick={handleClick}>
        Secondary Color Disabled
      </Button>
      <Button hierarchy="tertiary gray" disabled onClick={handleClick}>
        Tertiary Gray Disabled
      </Button>
      <Button hierarchy="tertiary color" disabled onClick={handleClick}>
        Tertiary Color Disabled
      </Button>
      <Button hierarchy="link gray" disabled onClick={handleClick}>
        Link Gray Disabled
      </Button>
      <Button hierarchy="link color" disabled onClick={handleClick}>
        Link Color Disabled
      </Button>
    </div>
  ),
}

// Icon only buttons
export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-auto">
      <Button icon={Placeholder} iconPosition="only" size="sm" onClick={handleClick}>
        Only
      </Button>
      <Button icon={Placeholder} iconPosition="only" size="md" onClick={handleClick}>
        Only
      </Button>
      <Button icon={Placeholder} iconPosition="only" size="lg" onClick={handleClick}>
        Only
      </Button>
      <Button icon={Placeholder} iconPosition="only" size="xl" onClick={handleClick}>
        Only
      </Button>
      <Button icon={Placeholder} iconPosition="only" size="2xl" onClick={handleClick}>
        Only
      </Button>
    </div>
  ),
}

// Link button example
export const LinkButton: Story = {
  args: {
    size: 'md',
    hierarchy: 'link gray',
    icon: Placeholder,
    iconPosition: 'left',
    children: 'Button CTA',
    onClick: handleClick,
  },
}
