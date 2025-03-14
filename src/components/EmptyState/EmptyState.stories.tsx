import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './index';
import BackgroundPatternDecorative from '../BackgroundPatternDecorative';
import InfoIcon from '@icons/General/info-circle.svg';
import FeaturedIcon from '../FeaturedIcon';

// Define the meta information for the component
const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the empty state component',
    },
    title: {
      control: 'text',
      description: 'Main title text',
    },
    subtitle: {
      control: 'text',
      description: 'Explanatory subtitle text',
    },
    primaryAction: {
      control: 'object',
      description: 'Configuration for the primary action button',
    },
    secondaryAction: {
      control: 'object',
      description: 'Configuration for the secondary action button',
    },
    icon: {
      control: 'object',
      description: 'Icon element to display',
    },
    background: {
      control: 'object',
      description: 'Background element to display',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

// Define the type for the stories
type Story = StoryObj<typeof meta>;

// Helper function to create action objects
const createAction = (label: string): { label: string; onClick: () => void } => ({
  label,
  onClick: () => console.log(`Clicked: ${label}`),
});

// Primary story with all features
export const Primary: Story = {
  args: {
    size: 'md',
    title: 'No items found',
    subtitle: 'Your search did not match any items. Try adjusting your search or filters.',
    primaryAction: createAction('Create new'),
    secondaryAction: createAction('Back'),
    icon: <FeaturedIcon type="modern" size="lg" icon={InfoIcon} />,
    background: <BackgroundPatternDecorative background={true} type="circles" size="md" />,
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'sm',
    title: 'No items found',
    subtitle: 'Your search did not match any items. Try adjusting your search or filters.',
    primaryAction: createAction('Create new'),
    secondaryAction: createAction('Back'),
    icon: <FeaturedIcon type="modern" size="md" icon={InfoIcon} />,
    background: <BackgroundPatternDecorative background={true} type="circles" size="sm" />,
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    title: 'No items found',
    subtitle: 'Your search did not match any items. Try adjusting your search or filters.',
    primaryAction: createAction('Create new'),
    secondaryAction: createAction('Back'),
    icon: <FeaturedIcon type="modern" size="xl" icon={InfoIcon} />,
    background: <BackgroundPatternDecorative background={true} type="circles" size="lg" />,
  },
};

