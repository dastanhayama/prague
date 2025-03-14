// src/components/EmptyStateUsage.tsx
"use client"; // Mark this as a Client Component

import React from 'react';
import EmptyState from './'; // Adjust the import path as needed
import FeaturedIcon from '../FeaturedIcon'; // Adjust the import path as needed
import InfoIcon from '@icons/General/info-circle.svg'; // Ensure this path is correct
import BackgroundPatternDecorative from '../BackgroundPatternDecorative'; // Adjust the import path as needed

const EmptyStateUsage = () => {
  const handleCreate = () => {
    console.log('Create button clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn more button clicked');
  };

  const icon = <FeaturedIcon type="modern" size="lg" icon={InfoIcon} />;
  const icon3 = <FeaturedIcon type="modern" size="xl" icon={InfoIcon} />;
  const background = <BackgroundPatternDecorative background={true} size="md" type="grid" />;
  const background3 = <BackgroundPatternDecorative background={true} size="lg" type="circles" />;

  return (
    <div className='flex flex-col gap-4'>
      <EmptyState
        size="sm"
        title="No projects found"
        subtitle='Your search "Landing page design" did not match any projects. Please try again.'
        primaryAction={{ label: "New project", onClick: handleCreate }}
        secondaryAction={{ label: "Clear search", onClick: handleLearnMore }}
        icon={icon}
        background={background}
      />
      <EmptyState
        size="md"
        title="No projects found"
        subtitle='Your search "Landing page design" did not match any projects. Please try again.'
        primaryAction={{ label: "New project", onClick: handleCreate }}
        secondaryAction={{ label: "Clear search", onClick: handleLearnMore }}
        icon={icon3}
        background={background3}
      /> 
      
      <EmptyState
        size="lg"
        title="No projects found"
        subtitle='Your search "Landing page design" did not match any projects. Please try again.'
        primaryAction={{ label: "New project", onClick: handleCreate }}
        secondaryAction={{ label: "Clear search", onClick: handleLearnMore }}
        icon={icon3}
        background={background3}
      /> 
    </div>
  );
};

export default EmptyStateUsage;