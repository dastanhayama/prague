'use client'
import React, { useState, useEffect, useRef } from 'react'
import SearchInput from './SearchInput'
import ArrowLeft from '@icons/Arrows/arrow-narrow-left.svg'

interface PageHeaderProps {
  type: 'simple' | 'avatar'
  actions?: boolean
  supportingText?: string
  label: string
  divider?: boolean
  centered?: boolean
  collapse?: boolean
  banner?: boolean
  search?: boolean
  avatar?: React.ReactNode // New prop for the avatar
}

const PageHeader: React.FC<PageHeaderProps> = ({
  type,
  actions = true,
  supportingText,
  label,
  collapse = false,
  banner = false,
  centered = false,
  search = true,
  divider = true,
  avatar,
}) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true)
  const labelRef = useRef<HTMLLabelElement>(null)

  useEffect(() => {
    const stickyContainer = document.querySelector('.stickyContainer') // Add a class to your sticky container
    const labelElement = labelRef.current

    if (!stickyContainer || !labelElement) return

    // Function to update the IntersectionObserver with the correct rootMargin
    const updateObserver = () => {
      const stickyContainerHeight = stickyContainer.getBoundingClientRect().height

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsLabelVisible(entry.isIntersecting)
        },
        {
          root: null,
          rootMargin: `-${stickyContainerHeight}px 0px 0px 0px`, // Dynamic rootMargin
          threshold: 0,
        },
      )

      observer.observe(labelElement)

      // Cleanup the previous observer
      return () => {
        observer.unobserve(labelElement)
      }
    }

    // Create a ResizeObserver to track changes in the stickyContainer's height
    const resizeObserver = new ResizeObserver(updateObserver)
    resizeObserver.observe(stickyContainer)

    // Initial setup
    updateObserver()

    // Cleanup
    return () => {
      resizeObserver.unobserve(stickyContainer)
    }
  }, [])

  const containerClass = `flex flex-col `
  const wrapperClass =
    `flex desktop:flex-row flex-col items-start justify-between pb-2xl relative  pt-xl gap-y-xl desktop:gap-0 ${banner ? 'desktop:px-8xl px-xl' : 'px-xl'}`
  const dividerClass = 'border-b border-secondary'
  const leftContainerClass = 'flex items-center desktop:gap-2xl gap:xl'
  const labelContainerClass = 'flex flex-col gap-xs'
  const labelClass =
    'desktop:text-[30px] desktop:leading-[38px] text-[24px] leading-[32px] font-semibold text-primary-900'
  const supportingTextClass = 'text-[16px] leading-[24px] text-tertiary-600'
  const rightContainerClass =
    'flex desktop:flex-row flex-col items-start gap-x-lg gap-y-xl w-full desktop:w-auto'
  const buttonGroupClass = 'flex items-start gap-lg'
  const buttonBaseClass =
    'px-[14px] py-[10px] rounded-md font-semibold text-[14px] leading-[20px] cursor-pointer'
  const buttonTertiaryClass = 'text-[#475467] bg-primary'
  const buttonSecondaryClass = 'text-[#A80B48] bg-primary border border-[#F891B9] shadow-xs'
  const buttonSecondaryAltClass = 'text-[#344054] bg-primary border border-[#D0D5DD] shadow-xs'
  const buttonPrimaryClass = 'bg-[#101828] border border-[#101828] text-primary'
  const stickyContainerClass =
    'w-full flex desktop:hidden sticky top-0 items-center justify-center py-[10px] bg-primary border-b border-secondary z-10 stickyContainer'
  const arrowLeftClass = 'absolute left-0 w-[20px] h-[20px] [&>path]:stroke-[#475467]'
  const stickyLabelClass = `text-[16px] leading-[24px] text-primary-900 font-semibold transition-opacity duration-300 ${
    isLabelVisible ? 'opacity-0' : 'opacity-100'
  }`

  return (
    <header className={containerClass}>
      {banner && (
        <div className="h-[160px] desktop:h-[240px] w-full bg-gradient-to-b from-[#A5C0EE] to-[#FBC5EC]" />
      )}
      <div className={`${wrapperClass} ${divider ? dividerClass : ''}`}>
        {collapse && (
          <div className={stickyContainerClass}>
            <ArrowLeft className={arrowLeftClass} />
            <label className={stickyLabelClass}>{label}</label>
          </div>
        )}

        {/* Left Side: Label and Supporting Text */}
        <div className={leftContainerClass}>
          {/* Render the avatar if type is 'avatar' */}
          {/* {type === 'avatar' && avatar && (
            <div className="desktop:w-[64px] desktop:h-[64px] desktop:max-w-[64px] desktop:max-h-[64px] desktop:min-h-[64px] desktop:min-w-[64px] w-[56px] h-[56px] max-w-[56px] max-h-[56px] min-h-[56px] min-w-[56px] rounded-full overflow-hidden mr-4">
              {avatar}
            </div>
          )} */}
          <div className={labelContainerClass}>
            <label ref={labelRef} className={labelClass}>
              {label}
            </label>
            {supportingText && <p className={supportingTextClass}>{supportingText}</p>}
          </div>
        </div>

        {/* Right Side: Buttons and Dropdown Icon */}
        {actions && (
          <div className={rightContainerClass}>
            <div className={buttonGroupClass}>
              <button className={`${buttonBaseClass} ${buttonTertiaryClass} desktop:flex hidden`}>
                Tertiary
              </button>
              <button className={`${buttonBaseClass} ${buttonSecondaryClass} desktop:flex hidden`}>
                Secondary
              </button>
              <button className={`${buttonBaseClass} ${buttonSecondaryAltClass}`}>Secondary</button>
              <button className={`${buttonBaseClass} ${buttonPrimaryClass}`}>Primary</button>
            </div>
            {search && <SearchInput />}
          </div>
        )}
      </div>
    </header>
  )
}

export default PageHeader
