import React from 'react'
import VerificationInput from 'react-verification-input'

interface VerificationCodeInputProps {
  value: string
  digits?: 4 | 6
  label?: string
  hintText?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  isDestructive?: boolean
}

function VerificationCodeInput({
  value,
  digits = 4,
  label,
  hintText,
  isDestructive = false,
  onChange,
  onComplete,
}: VerificationCodeInputProps) {
  return (
    <div className="flex flex-col w-full items-start">
      {label && (
        <label className="mb-sm text-[14px] leading-[20px] font-medium text-[#344054]">
          {label}
        </label>
      )}

      <VerificationInput
        classNames={{
          container: 'container',
          character: 'character',
          characterInactive: 'character--inactive',
          characterSelected: 'character--selected',
          characterFilled: 'character--filled',
        }}
        autoFocus
        length={digits}
        placeholder="0"
        validChars="0-9"
        value={value}
        onChange={onChange}
        onComplete={onComplete}
      />

      {hintText && (
        <p
          className={`mt-sm text-[14px] leading-[20px] ${isDestructive ? 'text-[#D92D20]' : 'text-[#475467]'} `}
        >
          {hintText}
        </p>
      )}
    </div>
  )
}

export default VerificationCodeInput
