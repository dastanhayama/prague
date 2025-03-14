import React from 'react'

// Define the type for the size prop
type Size = 'sm' | 'md' | 'lg'

// Define the type for the type prop
type PatternType = 'empty' | 'grid' | 'grid-dot' | 'circles' | 'squares'

// Import SVG patterns directly
// Grid patterns
import GridSmSVG from './images/grid-sm.svg'
import GridMdSVG from './images/grid-md.svg'
import GridLgSVG from './images/grid-lg.svg'

// Grid dot patterns
import GridDotSmSVG from './images/grid-dot-sm.svg'
import GridDotMdSVG from './images/grid-dot-md.svg'
import GridDotLgSVG from './images/grid-dot-lg.svg'

// Circle patterns
import CirclesSmSVG from './images/circles-sm.svg'
import CirclesMdSVG from './images/circles-md.svg'
import CirclesLgSVG from './images/circles-lg.svg'

// Square patterns
import SquaresSmSVG from './images/squares-sm.svg'
import SquaresMdSVG from './images/squares-md.svg'
import SquaresLgSVG from './images/squares-lg.svg'

interface BackgroundPatternDecorativeProps {
  background: boolean
  type: PatternType
  size: Size
}

function BackgroundPatternDecorative({ background, type, size }: BackgroundPatternDecorativeProps) {
  // Map size prop to Tailwind classes
  const sizeClasses: Record<Size, string> = {
    sm: 'w-[336px] h-[336px] min-w-[336px] min-h-[336px] max-w-[336px] max-h-[336px]',
    md: 'w-[480px] h-[480px] min-w-[480px] min-h-[480px] max-w-[480px] max-h-[480px]',
    lg: 'w-[768px] h-[768px] min-w-[768px] min-h-[768px] max-w-[768px] max-h-[768px]',
  }
  
  const containerFlex = "flex items-center justify-center"
  
  // Select the right SVG pattern based on type and size
  const getBackgroundImage = () => {
    if (!background || type === 'empty') {
      return null
    }
    
    const patterns = {
      'grid': {
        'sm': GridSmSVG,
        'md': GridMdSVG,
        'lg': GridLgSVG
      },
      'grid-dot': {
        'sm': GridDotSmSVG,
        'md': GridDotMdSVG,
        'lg': GridDotLgSVG
      },
      'circles': {
        'sm': CirclesSmSVG,
        'md': CirclesMdSVG,
        'lg': CirclesLgSVG
      },
      'squares': {
        'sm': SquaresSmSVG,
        'md': SquaresMdSVG,
        'lg': SquaresLgSVG
      }
    }
    
    return patterns[type][size]
  }
  
  const BackgroundSVG = getBackgroundImage()
  
  return (
    <div className={`${sizeClasses[size]} ${containerFlex} ${background && type === 'empty' ? 'bg-white' : ''}`}>
      {background && BackgroundSVG && (
        <div className="absolute inset-0">
          <BackgroundSVG className="w-full h-full" />
        </div>
      )}
    </div>
  )
}

export default BackgroundPatternDecorative