import type { Meta, StoryObj } from '@storybook/react';
import SectionLabel from './index'; // Adjust the import path as needed
import HelpIcon from "@icons/General/help-circle.svg"; // Ensure this import is correct

const meta: Meta<typeof SectionLabel> = {
  title: 'Components/SectionLabel',
  component: SectionLabel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    tooltip: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    supportingText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'sm',
    tooltip: true,
    required: true,
    label: 'Label Text',
    supportingText: 'This is supporting text for small size.'
  },
};

export default meta;

type Story = StoryObj<typeof SectionLabel>;

// Default story
export const Default: Story = {
  args: {
    label: 'Default Label',
  },
};

// Small size with all features
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Label',
    tooltip: true,
    required: true,
    supportingText: 'This is supporting text for small size.',
  },
};

// Medium size with all features
export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Label',
    tooltip: true,
    required: true,
    supportingText: 'This is supporting text for medium size.',
  },
};

// Without supporting text
export const WithoutSupportingText: Story = {
  args: {
    size: 'md',
    label: 'Label Without Supporting Text',
    tooltip: true,
    required: true,
    supportingText: ""
  },
};

// Without asterisk
export const WithoutAsterisk: Story = {
  args: {
    size: 'md',
    label: 'Label Without Asterisk',
    tooltip: true,
    required: false,
    supportingText: 'This label does not have an asterisk.',
  },
};

// Without tooltip icon
export const WithoutTooltip: Story = {
  args: {
    size: 'md',
    label: 'Label Without Tooltip',
    tooltip: false,
    required: true,
    supportingText: 'This label does not have a tooltip icon.',
  },
};