import type { Meta, StoryObj } from '@storybook/react';
import NavAccountCard from './index'; // Adjust the import path as needed

// Define the meta information for Storybook
const meta = {
  title: 'Components/NavAccountCard', // Title in Storybook UI
  component: NavAccountCard, // Component being documented
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    type: {
      control: { type: 'select' }, // Allow selection between 'simple' and 'card'
      options: ['simple', 'card'],
    },
    open: {
      control: { type: 'boolean' }, // Allow toggling the `open` state
    },
  },
} satisfies Meta<typeof NavAccountCard>;

export default meta;

// Define the type for the story
type Story = StoryObj<typeof meta>;



export const Simple: Story = {
  args: {
    type: 'simple', // Set the type to 'simple'
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `simple` type of the NavAccountCard component with the `open` state set to `true`.',
      },
    },
  },
};

// Story for the 'card' type with open=false
export const CardClosed: Story = {
  args: {
    type: 'card', // Set the type to 'card'
    open: false, // Default state is closed
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `card` type of the NavAccountCard component with the `open` state set to `false`.',
      },
    },
  },
};

// Story for the 'card' type with open=true
export const CardOpen: Story = {
  args: {
    type: 'card', // Set the type to 'card'
    open: true, // State is open
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `card` type of the NavAccountCard component with the `open` state set to `true`.',
      },
    },
  },
};