import React, { useState, useEffect, useRef } from 'react'
import ChevronDownIcon from '@icons/Arrows/chevron-down.svg'
import CZ from '@icons/Country/CZ.svg'
import PL from '@icons/Country/PL.svg'
import SI from '@icons/Country/SI.svg'
import DE from '@icons/Country/DE.svg'
import UA from '@icons/Country/UA.svg'
import EyeIcon from '@icons/General/eye.svg'

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
  '+420': { icon: CZ, code: 'CZ' },
  '+48': { icon: PL, code: 'PL' },
  '+386': { icon: SI, code: 'SI' },
  '+49': { icon: DE, code: 'DE' },
  '+380': { icon: UA, code: 'UA' },
} as const

type CountryCode = keyof typeof countryMap

function detectCountry(value: string) {
  const code = (Object.keys(countryMap) as CountryCode[]).find((key) =>
    value.startsWith(key)
  )
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
  const baseClasses =
    'rounded-md px-[14px] py-[10px] border shadow-xs w-full focus:outline-[4px] focus:ring-none placeholder:text-[#667085] text-[#101828] text-[16px] leading-[24px]'
  const normalClasses = 'border-[#D0D5DD] focus:outline-[#98A2B324]'
  const destructiveClasses = 'border-[#FDA29B] focus:outline-[#F044383D]'
  const disabledClasses = 'border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]'
  const inputClasses = [
    baseClasses,
    destructive ? destructiveClasses : normalClasses,
    disabled ? disabledClasses : '',
  ].join(' ')

  const inputRef = useRef<HTMLInputElement>(null)
  const [country, setCountry] = useState<{ icon: any; code: string } | null>(null)

  // Detect country when value changes
  useEffect(() => {
    const detected = detectCountry(value)
    setCountry(detected || null)
  }, [value])

  // Keep focus when country changes (split appears)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [country])

  // Logic: Split if type is tel OR user types number starting with code
  const shouldSplit = type === 'tel' || (!!country && value.length > 0)

  return (
    <>
      {label && (
        <div className="flex items-center mb-1 gap-xxs">
          <label className="block font-medium text-[#344054] text-[14px] leading-[20px]">
            {label}
          </label>
          {required && <span className="text-[#C00C53] text-[14px] leading-[20px]">*</span>}
        </div>
      )}

      {shouldSplit ? (
        <div className="flex w-full gap-md relative">
          <div className="flex items-center justify-center gap-xs rounded-md w-[70px] min-w-[70px] py-[10px] px-lg shadow-xs border border-[#D0D5DD]">
            {country ? (
              <country.icon className="w-[20px] h-[20px]" />
            ) : (
              <CZ className="w-[20px] h-[20px]" /> // Default CZ for type='tel'
            )}
            <ChevronDownIcon className="w-[20px] h-[20px] [&>path]:stroke-[#98A2B3]" />
          </div>
          <input
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            className={inputClasses}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
          />
        </div>
      ) : (
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
        />
      )}

      {type === 'password' && (
        <EyeIcon className="[&>path]:stroke-[#98A2B3] w-[16px] h-[16px] absolute top-[14px] right-[14px]" />
      )}

      {hintText && !HelpIcon && (
        <p
          className={`mt-sm text-[14px] leading-[20px] ${
            destructive ? 'text-[#D92D20]' : 'text-[#475467]'
          }`}
        >
          {hintText}
        </p>
      )}
      {HelpIcon && (
        <span className="ml-1" title={hintText}>
          <HelpIcon className="w-4 h-4 text-gray-400" />
        </span>
      )}
    </>
  )
}

export default InputField
