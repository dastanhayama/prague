import React from 'react'

interface MarkerProps {
  type?: '2digit' | '1digit' | 'round'
  color?: 'dark' | 'light' | 'orange-dark'
  text?: string
}

const Marker: React.FC<MarkerProps> = ({ type = 'round', color = 'dark', text = '' }) => {
  const baseStyles =
    'inline-flex items-center justify-center text-[12px] leading-[1] px-xs pt-0 pb-[1px] rounded-full relative'
  const typeStyles = {
    '2digit': 'w-[23px] h-[16px] max-w-[23px] max-h-[16px]',
    '1digit': 'w-[16px] h-[16px] max-w-[16px] max-h-[16px]',
    round: 'w-[16px] h-[16px] max-w-[16px] max-h-[16px]',
  }

  const colorStyles = {
    dark: 'bg-[#344054] text-white',
    light: 'bg-[#F9FAFB] text-[#344054]',
    'orange-dark': 'bg-[#BC1B06] text-white',
  }
  const ellipseClasses = `rounded-full w-[4px] h-[4px] absolute top-[4px] left-1/2 transform -translate-x-1/2 ${color === 'orange-dark' ? 'bg-[#BC1B06]' : 'bg-[#344054]'}`

  return (
    <div
      className={`${baseStyles} ${typeStyles[type]} ${type === 'round' ? `bg-transparent` : `${colorStyles[color]}`}`}
    >
      {text && type !== 'round' ? (
        <span>{text}</span>
      ) : (
        <span
          className={ellipseClasses}
        ></span>
      )}
    </div>
  )
}

export default Marker
