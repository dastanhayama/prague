'use client' // Add this line at the top
import React from 'react'
import PlusIcon from '@icons/General/plus.svg'

interface Action {
  label: string
  onClick: () => void
}

interface EmptyStateProps {
  size?: 'sm' | 'md' | 'lg'
  title?: string
  subtitle?: string
  primaryAction?: Action
  secondaryAction?: Action
  icon?: React.ReactNode
  background?: React.ReactNode
}

const EmptyState: React.FC<EmptyStateProps> = ({
  size = 'md',
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  icon,
  background,
}) => {
  // Container styles
  const containerStyles =
    'relative flex flex-col items-center justify-center text-center max-w-[512px] w-full'
  const containerPaddingTop = {
    sm: 'pt-[12rem]',
    md: 'pt-[14rem]',
    lg: 'pt-[16rem]',
  }

  // Background styles
  const backgroundStyles = 'absolute inset-0 z-[-1] flex items-center justify-center'

  // Icon styles
  const iconStyles = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'
  const iconMarginBottom = {
    sm: 'mb-xl',
    md: 'mb-2xl',
    lg: 'mb-2xl',
  }

  // Title styles
  const titleBaseStyles = 'relative z-10'
  const titleSizes = {
    sm: 'text-base font-semibold text-primary-900 leading-[24px]', // 16px
    md: 'text-lg font-semibold text-primary-900 leading-[28px]', // 18px
    lg: 'text-xl font-semibold text-primary-900 leading-[30px]', // 20px
  }
  const titleMarginBottom = {
    sm: 'mb-xs',
    md: 'mb-md',
    lg: 'mb-md',
  }

  // Subtitle styles
  const subtitleBaseStyles = 'relative z-10'
  const subtitleSizes = {
    sm: 'text-sm text-tertiary-600 leading-[20px]', // 14px
    md: 'text-sm text-tertiary-600 leading-[20px]', // 14px
    lg: 'text-base text-tertiary-600 leading-[24px]', // 16px
  }
  const subtitleMarginBottom = {
    sm: 'mb-3xl',
    md: 'mb-4xl',
    lg: 'mb-4xl',
  }

  // Action container styles
  const actionContainerStyles = 'relative z-10 flex gap-lg'

  // Secondary action button styles
  const secondaryActionStyles =
    'py-[10px] px-xl rounded-md font-semibold text-base leading-[24px] text-[#344054] bg-primary border border-[#D0D5DD] shadow-xs cursor-pointer'

  // Primary action button styles
  const primaryActionStyles =
    'flex items-center gap-sm py-[10px] px-xl rounded-md font-semibold text-base leading-[24px] text-primary bg-[#101828] border border-[#101828] cursor-pointer'
  const primaryActionIconStyles = '[&>path]:stroke-primary w-[20px] h-[20px]'

  return (
    <div className={`${containerStyles} ${containerPaddingTop[size]}`}>
      {/* Custom background */}
      {background && <div className={backgroundStyles}>{background}</div>}

      {/* Icon */}
      {icon && <div className={`${iconStyles} ${iconMarginBottom[size]}`}>{icon}</div>}

      {/* Title */}
      {title && (
        <h2 className={`${titleBaseStyles} ${titleSizes[size]} ${titleMarginBottom[size]}`}>
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={`${subtitleBaseStyles} ${subtitleSizes[size]} ${subtitleMarginBottom[size]}`}>
          {subtitle}
        </p>
      )}

      {/* Actions */}
      <div className={actionContainerStyles}>
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className={secondaryActionStyles}
            aria-label={secondaryAction.label}
          >
            {secondaryAction.label}
          </button>
        )}
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className={primaryActionStyles}
            aria-label={primaryAction.label}
          >
            <PlusIcon className={primaryActionIconStyles} />
            {primaryAction.label}
          </button>
        )}
      </div>
    </div>
  )
}

export default EmptyState
