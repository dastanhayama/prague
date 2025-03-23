import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem'; // Adjust the import path as needed
import Dot from '../Dot'; // Adjust the import path as needed
import  ExampleIcon from '@icons/General/placeholder.svg'; 

// Define the meta information for Storybook
const meta = {
  title: 'Components/NavAccountCardMenuItem', // Title in Storybook UI
  component: MenuItem, // Component being documented
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    type: {
      control: { type: 'select' }, // Allow selection between 'menu item' and 'account'
      options: ['menu item', 'account'],
    },
    current: {
      control: { type: 'boolean' }, // Allow toggling the `current` state
    },
    placeholder: {
      control: { type: 'text' }, // Allow custom placeholder text
    },
    shortcut: {
      control: { type: 'text' }, // Allow custom shortcut text
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

// Define the type for the story
type Story = StoryObj<typeof meta>;

// Story for the 'menu item' type
export const MenuItemType: Story = {
  args: {
    type: 'menu item', // Set the type to 'menu item'
    icon: ExampleIcon, // Pass an icon component
    placeholder: 'Menu Item', // Custom placeholder text
    dot: <Dot size='md' />, // Pass a Dot component
    shortcut: '⌘K', // Custom shortcut text
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `menu item` type of the MenuItem component. It includes an icon, placeholder text, and a shortcut.',
      },
    },
  },
};

// Story for the 'account' type with current=false (not checked)
export const AccountTypeNotChecked: Story = {
  args: {
    type: 'account', // Set the type to 'account'
    placeholder: 'Account Item', // Custom placeholder text

    current: false, // Radio button is not checked
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `account` type of the MenuItem component with the radio button unchecked.',
      },
    },
  },
};

// Story for the 'account' type with current=true (checked)
export const AccountTypeChecked: Story = {
  args: {
    type: 'account', // Set the type to 'account'
    placeholder: 'Account Item', // Custom placeholder text
    current: true, // Radio button is checked
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the `account` type of the MenuItem component with the radio button checked.',
      },
    },
  },
};