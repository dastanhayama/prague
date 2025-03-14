import type { Meta, StoryObj } from '@storybook/react';
import BackgroundPatternDecorative from './index';

// Define the meta information for the component
const meta = {
  title: 'Components/BackgroundPatternDecorative',
  component: BackgroundPatternDecorative,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    background: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['empty', 'grid', 'grid-dot', 'circles', 'squares'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BackgroundPatternDecorative>;

export default meta;

// Define the type for the stories
type Story = StoryObj<typeof meta>;

// Primary story - Grid pattern
export const Grid: Story = {
  args: {
    background: true,
    type: 'grid',
    size: 'md',
  },
};

// Empty background story
export const Empty: Story = {
  args: {
    background: true,
    type: 'empty',
    size: 'md',
  },
};

// Grid Dot pattern story
export const GridDot: Story = {
  args: {
    background: true,
    type: 'grid-dot',
    size: 'md',
  },
};

// Circles pattern story
export const Circles: Story = {
  args: {
    background: true,
    type: 'circles',
    size: 'md',
  },
};

// Squares pattern story
export const Squares: Story = {
  args: {
    background: true,
    type: 'squares',
    size: 'md',
  },
};

// Size variants
export const SmallSize: Story = {
  args: {
    background: true,
    type: 'grid',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    background: true,
    type: 'grid',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    background: true,
    type: 'grid',
    size: 'lg',
  },
};

// Background toggle example
export const WithoutBackground: Story = {
  args: {
    background: false,
    type: 'grid',
    size: 'md',
  },
};