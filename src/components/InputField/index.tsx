'use client'
import React, { useState, useEffect, useRef } from 'react'
import ChevronDownIcon from '@icons/Arrows/chevron-down.svg'
import CloseIcon from '@icons/General/x-close.svg'
import CZ from '@icons/Country/CZ.svg'
import PL from '@icons/Country/PL.svg'
import SK from '@icons/Country/SK.svg'
import DE from '@icons/Country/DE.svg'
import UA from '@icons/Country/UA.svg'
import EyeIcon from '@icons/General/eye.svg'
import EyeOffIcon from '@icons/General/eye-off.svg'
import Button from '../Buttons/Button'
import InputDropdownMenuItem from '../Dropdown/InputDropdownMenuItem'

interface InputFieldProps {
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'tel' | 'email' | 'password' | 'number'
  label?: string
  hintText?: string
  destructive?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
  HelpIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const countryMap = {
  '+420': { icon: CZ, code: 'CZ', name: 'Česko' },
  '+49': { icon: DE, code: 'DE', name: 'Německo' },
  '+48': { icon: PL, code: 'PL', name: 'Polsko' },
  '+421': { icon: SK, code: 'SK', name: 'Slovensko' },
  '+380': { icon: UA, code: 'UA', name: 'Ukrajina' },
} as const

type CountryCode = keyof typeof countryMap

// Style constants
const baseInputClasses =
  'rounded-md px-[14px] py-[10px] border shadow-xs w-full focus:outline-[4px] focus:ring-none placeholder:text-[#667085] text-[#101828] text-[16px] leading-[24px] bg-primary'
const normalInputClasses = 'border-[#D0D5DD] focus:outline-[#98A2B324]'
const destructiveInputClasses = 'border-[#FDA29B] focus:outline-[#F044383D]'
const disabledInputClasses = 'border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]'

const labelClasses = 'block font-medium text-[#344054] text-[14px] leading-[20px]'
const requiredIndicatorClasses = 'text-[#C00C53] text-[14px] leading-[20px]'
const hintTextClasses = 'mt-sm text-[14px] leading-[20px]'

const countrySelectorButtonClasses =
  'flex items-center justify-center gap-xs rounded-md w-[70px] min-w-[70px] py-[10px] px-lg shadow-xs border border-[#D0D5DD] cursor-pointer bg-primary'
const passwordToggleButtonClasses = 'absolute top-[14px] right-[14px] cursor-pointer'

const drawerOverlayClasses =
  'fixed inset-0 z-50 flex items-end tablet:items-start tablet:justify-end bg-black/10 backdrop-blur-sm'
const drawerContainerClasses =
  'relative bg-white w-full tablet:w-[375px] h-auto tablet:h-full rounded-t-2xl tablet:rounded-none shadow-xl pt-[54px] tablet:pt-3xl px-xl tablet:px-3xl pb-3xl tablet:pb-xl flex flex-col justify-between'
const drawerHandleClasses =
  'w-[36px] h-[5px] rounded-[8px] bg-[#D0D5DD] flex tablet:hidden absolute top-[6px] left-1/2 -translate-x-1/2'
const drawerCloseButtonClasses =
  'absolute top-[22px] right-[26px] hidden tablet:block cursor-pointer'
const drawerTitleClasses = 'text-[#101828] text-[18px] leading-[28px] font-semibold mb-2xl'
const drawerContentClasses = 'mb-3xl'
const drawerGridClasses = 'grid grid-cols-1 gap-0 overflow-y-auto'

function detectCountry(value: string) {
  const code = (Object.keys(countryMap) as CountryCode[]).find((key) => value.startsWith(key))
  return code ? countryMap[code] : null
}

function InputField({
  value,
  onChange,
  type = 'text',
  label,
  hintText,
  destructive = false,
  disabled = false,
  required = false,
  placeholder,
  HelpIcon,
}: InputFieldProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [country, setCountry] = useState<{ icon: any; code: string } | null>(null)

  useEffect(() => {
    if (!isDrawerOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isDrawerOpen])

  useEffect(() => {
    const detected = detectCountry(value)
    setCountry(detected || null)
  }, [value])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [country])

  const shouldSplit = type === 'tel' || (!!country && value.length > 0)
  // const shouldSplit = type === 'tel'

  // Dynamic class composition
  const getInputClasses = () => {
    let classes = baseInputClasses
    if (destructive) classes += ` ${destructiveInputClasses}`
    else classes += ` ${normalInputClasses}`
    if (disabled) classes += ` ${disabledInputClasses}`
    return classes
  }

  const getHintTextClasses = () => {
    return `${hintTextClasses} ${destructive ? 'text-[#D92D20]' : 'text-[#475467]'}`
  }

  const getPasswordIconClasses = () => {
    return destructive ? '[&>path]:stroke-[#F04438]' : '[&>path]:stroke-[#98A2B3]'
  }

  return (
    <div className="relative">
      {label && (
        <div className="flex items-center mb-1 gap-xxs">
          <label className={labelClasses}>{label}</label>
          {required && <span className={requiredIndicatorClasses}>*</span>}
        </div>
      )}

      {shouldSplit && type !== 'password' ? (
        <div className="flex w-full gap-md relative cursor-pointer">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className={countrySelectorButtonClasses}
          >
            {country ? (
              <country.icon className="w-[20px] h-[20px]" />
            ) : (
              <CZ className="w-[20px] h-[20px]" />
            )}
            <ChevronDownIcon className="w-[20px] h-[20px] [&>path]:stroke-[#98A2B3]" />
          </button>
          <input
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            className={getInputClasses()}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
          />
        </div>
      ) : (
        <input
          ref={inputRef}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className={getInputClasses()}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
        />
      )}

      {type === 'password' && (
        <button
          type="button"
          className={passwordToggleButtonClasses}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOffIcon className={`w-[16px] h-[16px] ${getPasswordIconClasses()}`} />
          ) : (
            <EyeIcon className={`w-[16px] h-[16px] ${getPasswordIconClasses()}`} />
          )}
        </button>
      )}

      {hintText && !HelpIcon && <p className={getHintTextClasses()}>{hintText}</p>}
      {HelpIcon && (
        <span className="ml-1" title={hintText}>
          <HelpIcon className="w-4 h-4 text-gray-400" />
        </span>
      )}

      {isDrawerOpen && (
        <div className={drawerOverlayClasses}>
          <div className={drawerContainerClasses}>
            <div className={drawerHandleClasses}></div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className={drawerCloseButtonClasses}
              aria-label="Close drawer"
            >
              <CloseIcon className="w-[20px] h-[20px] [&>path]:stroke-[#98A2B3]" />
            </button>

            <div className={drawerContentClasses}>
              <h3 className={drawerTitleClasses}>Země</h3>
              <div className={drawerGridClasses}>
                {(
                  Object.entries(countryMap) as [
                    CountryCode,
                    { icon: any; code: string; name: string },
                  ][]
                ).map(([code, { icon: Icon, code: countryCode, name: countryName }]) => (
                  <InputDropdownMenuItem
                    onClick={() => setSelectedCountryCode(code)}
                    key={code}
                    type="icon-leading"
                    icon={Icon}
                    text={countryName}
                    supportingText={code}
                    selected={selectedCountryCode === code}
                  />
                ))}
              </div>
            </div>

            <Button
              size="md"
              hierarchy="primary"
              onClick={() => {
                if (selectedCountryCode) {
                  onChange(selectedCountryCode)
                  setIsDrawerOpen(false)
                }
              }}
            >
              Potvrdit
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InputField
