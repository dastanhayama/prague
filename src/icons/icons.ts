import InfoCircleIcon from '@icons/General/info-circle.svg';

// Map all available icons
export const icons = {
  '@icons/General/info-circle.svg': InfoCircleIcon,
  // Add all other icon mappings here
} as const;

// Create type for icon names
export type IconName = keyof typeof icons;

// Helper function to get icon component
export const getIconComponent = (name: IconName) => {
  return icons[name];
};