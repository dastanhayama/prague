import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['checkbox', 'radio'],
      description: 'Type of the input - checkbox or radio',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Indeterminate state (only for checkboxes)',
      if: { arg: 'type', eq: 'checkbox' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      description: 'Size of the checkbox',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    text: {
      control: { type: 'text' },
      description: 'Primary label text',
    },
    supportingText: {
      control: { type: 'text' },
      description: 'Secondary supporting text',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the input',
    },
  },
  args: {
    type: 'checkbox',
    indeterminate: false,
    size: 'md',
    disabled: false,
    text: 'Checkbox label',
    supportingText: '',
    name: 'checkbox-input',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Default checkbox
export const Default: Story = {
  args: {
    text: 'Default checkbox',
  },
};



// Indeterminate checkbox
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    text: 'Indeterminate checkbox',
  },
};

// Disabled checkbox
export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled checkbox',
  },
};

// With supporting text
export const WithSupportingText: Story = {
  args: {
    text: 'Checkbox with supporting text',
    supportingText: 'This is additional information about the option',
  },
};

// Small size
export const SmallSize: Story = {
  args: {
    size: 'sm',
    text: 'Small checkbox',
  },
};

// Radio button
export const Radio: Story = {
  args: {
    type: 'radio',
    text: 'Radio button',
  },
};



// Group of checkboxes
export const CheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox text="Option 1" type='checkbox'/>
      <Checkbox text="Option 2" type='checkbox'/>
      <Checkbox text="Option 3" indeterminate type='checkbox'/>
      <Checkbox text="Option 4 (disabled)" disabled />
    </div>
  ),
};

// Group of radio buttons
export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox type="radio" name="radio-group" text="Option A" />
      <Checkbox type="radio" name="radio-group" text="Option B" />
      <Checkbox type="radio" name="radio-group" text="Option C" />
      <Checkbox type="radio" name="radio-group" text="Option D (disabled)" disabled />
    </div>
  ),
};