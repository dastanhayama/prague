import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    type: {
      options: ['logo', 'logomark'],
      control: { type: 'radio' },
    },
    brand: {
      options: ['public', 'business'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

// Default story
export const Default: Story = {
  args: {
    type: 'logo',
    brand: 'business',
    size: 'sm',
  },
};

// Logo variants
export const BusinessLogo: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Logo type="logo" brand="business" size="sm" />
        <Logo type="logo" brand="business" size="md" />
        <Logo type="logo" brand="business" size="lg" />
      </div>
    </div>
  ),
};

export const PublicLogo: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Logo type="logo" brand="public" size="sm" />
        <Logo type="logo" brand="public" size="md" />
        <Logo type="logo" brand="public" size="lg" />
      </div>
    </div>
  ),
};

// Logomark variants
export const BusinessLogomark: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Logo type="logomark" brand="business" size="sm" />
        <Logo type="logomark" brand="business" size="md" />
        <Logo type="logomark" brand="business" size="lg" />
      </div>
    </div>
  ),
};

export const PublicLogomark: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Logo type="logomark" brand="public" size="sm" />
        <Logo type="logomark" brand="public" size="md" />
        <Logo type="logomark" brand="public" size="lg" />
      </div>
    </div>
  ),
};

// Interactive story with controls
export const Interactive: Story = {
  args: {
    type: 'logo',
    brand: 'business',
    size: 'sm',
  },
};