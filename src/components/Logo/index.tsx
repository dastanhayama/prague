import React from 'react'
import LogoBusinessSm from '@icons/Logo/logo-business-sm.svg'
import LogoBusinessMd from '@icons/Logo/logo-business-md.svg'
import LogoBusinessLg from '@icons/Logo/logo-business-lg.svg'
import LogoPublicSm from '@icons/Logo/logo-public-sm.svg'
import LogoPublicMd from '@icons/Logo/logo-public-md.svg'
import LogoPublicLg from '@icons/Logo/logo-public-lg.svg'
import LogomarkBusinessSm from '@icons/Logo/logomark-business-sm.svg'
import LogomarkBusinessMd from '@icons/Logo/logomark-business-md.svg'
import LogomarkBusinessLg from '@icons/Logo/logomark-business-lg.svg'
import LogomarkPublicSm from '@icons/Logo/logomark-public-sm.svg'
import LogomarkPublicMd from '@icons/Logo/logomark-public-md.svg'
import LogomarkPublicLg from '@icons/Logo/logomark-public-lg.svg'

type LogoType = 'logo' | 'logomark'
type BrandType = 'public' | 'business'
type SizeType = 'sm' | 'md' | 'lg'

interface LogoProps {
  type?: LogoType
  brand?: BrandType
  size?: SizeType
  className?: string
}

const sizeClasses = {
  sm: {
    logo: 'w-[117px] h-[32px]',
    logomark: 'w-[32px] h-[32px]',
  },
  md: {
    logo: 'w-[146.25px] h-[40px]',
    logomark: 'w-[40px] h-[40px]',
  },
  lg: {
    logo: 'w-[175.5px] h-[48px]',
    logomark: 'w-[48px] h-[48px]',
  },
}

const Logo: React.FC<LogoProps> = ({
  type = 'logo',
  brand = 'business',
  size = 'sm',
  className = '',
}) => {
  const baseClass = sizeClasses[size][type]
  const combinedClassName = `${baseClass} ${className}`.trim()

  if (type === 'logomark') {
    if (brand === 'business') {
      switch (size) {
        case 'sm':
          return <LogomarkBusinessSm className={combinedClassName} />
        case 'md':
          return <LogomarkBusinessMd className={combinedClassName} />
        case 'lg':
          return <LogomarkBusinessLg className={combinedClassName} />
      }
    } else {
      switch (size) {
        case 'sm':
          return <LogomarkPublicSm className={combinedClassName} />
        case 'md':
          return <LogomarkPublicMd className={combinedClassName} />
        case 'lg':
          return <LogomarkPublicLg className={combinedClassName} />
      }
    }
  } else {
    if (brand === 'business') {
      switch (size) {
        case 'sm':
          return <LogoBusinessSm className={combinedClassName} />
        case 'md':
          return <LogoBusinessMd className={combinedClassName} />
        case 'lg':
          return <LogoBusinessLg className={combinedClassName} />
      }
    } else {
      switch (size) {
        case 'sm':
          return <LogoPublicSm className={combinedClassName} />
        case 'md':
          return <LogoPublicMd className={combinedClassName} />
        case 'lg':
          return <LogoPublicLg className={combinedClassName} />
      }
    }
  }
}

export default Logo
