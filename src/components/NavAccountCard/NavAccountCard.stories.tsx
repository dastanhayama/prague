import type { Meta, StoryObj } from '@storybook/react';
import NavAccountCard from './index';

const meta = {
  title: 'Components/NavAccountCard',
  component: NavAccountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['simple', 'card'],
    },
    open: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NavAccountCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Simple type story (always uses LogOutIcon)
export const Simple: Story = {
  args: {
    type: 'simple',
    open: false, // ButtonUtility will get state="default"
  },
};

// Card type in closed state (default button state)
export const CardClosed: Story = {
  args: {
    type: 'card',
    open: false, // ButtonUtility will get state="default"
  },
};

// Card type in open state (hover button state)
export const CardOpen: Story = {
  args: {
    type: 'card',
    open: true, // ButtonUtility will get state="hover"
  },
};