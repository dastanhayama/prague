import { Meta, StoryObj } from '@storybook/react';
import Dot from './index';

// Define the meta information for the component
const meta: Meta<typeof Dot> = {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    outline: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

// Define the type for the stories
type Story = StoryObj<typeof Dot>;

// Story for Dot with outline=false
export const Default: Story = {
  args: {
    size: 'md',
    outline: false,
  },
};

// Story for Dot with outline=true
export const WithOutline: Story = {
  args: {
    size: 'md',
    outline: true,
  },
};