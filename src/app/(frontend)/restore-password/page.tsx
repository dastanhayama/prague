// app/page.tsx
'use client'

import { useState, useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import Button from '@/components/Buttons/Button'
import BackgroundPatternDecorative from '@/components/BackgroundPatternDecorative'
import InputField from '@/components/InputField'
import VerificationCodeInput from '@/components/InputField/VerificationCodeInput'
import FeaturedIcon from '@/components/FeaturedIcon'
import ArrowLeft from '@icons/Arrows/arrow-left.svg'
import KeyIcon from '@icons/Security/key-01.svg'

import { restorePasswordAction, sendOtpRestoreAction } from '@/actions/restore-password'
import { verifyOtpAction } from '@/actions/auth'
import { validatePhoneNumber } from '../registrace/validatePhone'

export default function RestorePasswordPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [otpCode, setOtpCode] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [steps, setSteps] = useState<'phone' | 'code' | 'password'>('phone')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [resendCooldown, setResendCooldown] = useState(0)
  useEffect(() => {
    if (resendCooldown <= 0) return

    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [resendCooldown])
  const handleResendOtp = () => {
    if (resendCooldown > 0) return

    startTransition(async () => {
      const response = await sendOtpRestoreAction({ phoneNumber })

      if (!response.success) {
        setErrorMessage(response.error || 'Nepodařilo se odeslat kód znovu.')
        return
      }

      setErrorMessage(null)
      setResendCooldown(120)
    })
  }
  const handleContinueClick = async () => {
    setErrorMessage(null)
    startTransition(async () => {
      if (steps === 'phone') {
        const phoneError = validatePhoneNumber(phoneNumber)
        if (phoneError) {
          setErrorMessage(phoneError)
          return
        }
        setErrorMessage(null)
        const result = await sendOtpRestoreAction({ phoneNumber })
        if (!result.success) {
          setErrorMessage(result.error || 'Chyba při odesílání kódu')
          return
        }
        setResendCooldown(60) // Optional: start cooldown
        setSteps('code')
      } else if (steps === 'code') {
        const result = await verifyOtpAction({ phoneNumber, otpCode })
        if (!result.success) {
          setErrorMessage(result.error || 'Chybný kód')
          return
        }
        setSteps('password')
      } else if (steps === 'password') {
        //Validate Password
        if (password.trim() === '') {
          setErrorMessage('Zadejte sve heslo.')
          return
        }
        if (password.length < 8) {
          setErrorMessage('Heslo musí mít alespoň 8 znaků.')
          return
        }

        if (!/\d/.test(password)) {
          setErrorMessage('Heslo musí obsahovat alespoň jedno číslo.')
          return
        }

        if (!/[a-zA-Z]/.test(password)) {
          setErrorMessage('Heslo musí obsahovat alespoň jedno písmeno.')
          return
        }

        setErrorMessage(null)

        startTransition(async () => {
          const response = await restorePasswordAction({
            phoneNumber,
            newPassword: password,
          })

          if (!response.success) {
            setErrorMessage(response.error || 'Signin error')
            return
          }
          setErrorMessage(null)
          console.log('✅ Successfully password restored', phoneNumber, password)
          setPhoneNumber('')
          setPassword('')
          //Redirect
        })
      }
    })
  }

  // Function to go back to previous step
  const handleBackClick = () => {
    switch (steps) {
      case 'phone':
        // redirect to /registrace
        router.push('/registrace')
        break
      case 'code':
        setSteps('phone')
        break
    }
  }
  function formatPhoneNumber(phone: string) {
    const cleanPhone = phone.replace(/\D/g, '') // remove non-digits
    const last3 = cleanPhone.slice(-3)
    return `${last3}`
  }

  // Container classes
  const containerClasses = `flex justify-center items-start min-h-screen w-full overflow-hidden relative`

  // Main content classes
  const mainContentClasses = 'bg-transparent pt-6xl tablet:pt-9xl w-full max-w-[375px] px-xl'

  // Header classes
  const headerClasses = 'flex flex-col items-start mb-4xl relative'
  const logoContainerClasses = 'relative'
  const backgroundPatternClasses =
    'absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]'
  const titleClasses = 'text-[#101828] text-[24px] leading-[32px] font-semibold mb-xs'
  const subtitleClasses = 'text-[#475467] text-[16px] leading-[24px]'

  // Auth step classes
  const inputFieldClasses = 'mb-3xl'
  const buttonContainerClasses = 'mb-4xl'

  // OTP step classes
  const resendCodeClasses =
    'text-[14px] leading-[20px] text-[#475467] text-center mb-4xl inline-flex justify-center items-center gap-1'

  return (
    <div className={containerClasses}>
      <div className={mainContentClasses}>
        {/* Header */}
        <div className={headerClasses}>
          <div className={logoContainerClasses}>
            <div className="mb-2xl">
              <FeaturedIcon color="gray" size="lg" type="modern" icon={KeyIcon} />
            </div>
            <div className={backgroundPatternClasses}>
              <BackgroundPatternDecorative type="grid" size="md" background />
            </div>
          </div>
          <h2 className={titleClasses}>
            {steps === 'phone' && 'Zapomenuté heslo'}
            {steps === 'code' && 'Ověření telefonního čísla'}
            {steps === 'password' && 'Vytvořte si nové heslo'}
          </h2>
          <p className={subtitleClasses}>
            {steps === 'phone' && 'Zadejte prosím vaše telefonní číslo.'}
            {steps === 'code' && 'Zadejte čtyřmístný kód, který jsme vám zaslali na číslo končící'}
            {steps === 'code' && phoneNumber && (
              <span className="text-[#101828] font-semibold">
                {' '}
                {formatPhoneNumber(phoneNumber)}.
              </span>
            )}
            {steps === 'password' &&
              'Vaše heslo musí mít alespoň 8 znaků a mělo by obsahovat kombinaci čísel a písmen.'}
          </p>
        </div>

        {steps === 'phone' ? (
          <div className="flex flex-col gap-0">
            {/* Phone Input */}
            <div className={inputFieldClasses}>
              <InputField
                value={phoneNumber}
                onChange={(val) => {
                  setPhoneNumber(val)
                  if (errorMessage) setErrorMessage(null)
                }}
                type="tel"
                placeholder="+420777123456"
                hintText={errorMessage || ''}
                destructive={Boolean(errorMessage)}
              />
            </div>

            {/* Login Button */}
            <div className={buttonContainerClasses}>
              <Button
                size="xl"
                hierarchy="primary"
                onClick={handleContinueClick}
                isLoading={isPending}
                disabled={isPending}
              >
                Pokračovat
              </Button>
            </div>

            <div className="text-center flex justify-center items-center">
              <Button
                size="md"
                hierarchy="link gray"
                onClick={handleBackClick}
                icon={ArrowLeft}
                iconPosition="left"
              >
                Zpět na přihlášení
              </Button>
            </div>
          </div>
        ) : null}

        {/* OTP Step */}
        {steps === 'code' && (
          <div className="flex flex-col gap-0">
            <div className={inputFieldClasses}>
              <VerificationCodeInput
                digits={4}
                value={otpCode}
                onChange={(val) => {
                  setOtpCode(val)
                  if (errorMessage) setErrorMessage(null)
                }}
                hintText={errorMessage || ''}
                isDestructive={Boolean(errorMessage)}
              />
            </div>

            <div className={buttonContainerClasses}>
              <Button
                size="xl"
                hierarchy="primary"
                onClick={handleContinueClick}
                isLoading={isPending}
                disabled={isPending}
              >
                Potvrdit
              </Button>
            </div>

            <p className={resendCodeClasses}>
              Nedostali jste kód?{' '}
              <Button
                size="md"
                hierarchy="link color"
                onClick={handleResendOtp}
                disabled={resendCooldown > 0 || isPending}
              >
                Znovu odeslat kód{resendCooldown > 0 ? ` (${resendCooldown}s)` : ''}
              </Button>
            </p>

            <div className="text-center flex justify-center items-center">
              <Button
                size="md"
                hierarchy="link gray"
                onClick={handleBackClick}
                icon={ArrowLeft}
                iconPosition="left"
              >
                Změnit údaje
              </Button>
            </div>
          </div>
        )}
        {/* Password Step */}
        {steps === 'password' && (
          <div className="flex flex-col gap-0">
            <div className={inputFieldClasses}>
              <InputField
                value={password}
                onChange={(val) => {
                  setPassword(val)
                  if (errorMessage) setErrorMessage(null)
                }}
                type="password"
                placeholder="Zadejte heslo"
                hintText={errorMessage || ''}
                destructive={Boolean(errorMessage)}
              />
            </div>
            <div>
              <Button
                size="xl"
                hierarchy="primary"
                onClick={handleContinueClick}
                isLoading={isPending}
                disabled={isPending}
              >
                Potvrdit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
