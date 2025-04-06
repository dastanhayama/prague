// app/page.tsx
'use client'

import { useState, useEffect, useTransition } from 'react'
import Logo from '@/components/Logo'
import HorizontalTabs from '@/components/HorizontalTabs'
import TabButtonBase from '@/components/TabButtonBase'
import Button from '@/components/Buttons/Button'
import ArrowLeft from '@icons/Arrows/arrow-left.svg'

import BackgroundPatternDecorative from '@/components/BackgroundPatternDecorative'
import InputField from '@/components/InputField'
import VerificationCodeInput from '@/components/InputField/VerificationCodeInput'
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup'
import CheckboxGroupItem from '@/components/Checkbox/CheckboxGroupItem'
import HeartCircleIcon from '@icons/General/heart-circle.svg'
import HeartHandIcon from '@icons/General/heart-hand.svg'
import Building08Icon from '@icons/General/building-08.svg'
import Building04Icon from '@icons/General/building-04.svg'
import CheckCircleIcon from '@icons/General/check-circle.svg'
import FeaturedIcon from '@/components/FeaturedIcon'
import confetti from 'canvas-confetti'
import { validatePhoneNumber } from './validatePhone'
import { signInAction, sendOtpAction, verifyOtpAction, registerUserAction  } from '@/actions/auth'

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [signinData, setSigninData] = useState<string>('')
  const [otpCode, setOtpCode] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>('Holka na sex')
  const [activeTab, setActiveTab] = useState('sign-in') // 'sign-in' or 'sign-up'
  const [steps, setSteps] = useState<string>('auth') // 'auth', 'otp', 'who', 'password', 'confetti'
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [resendCooldown, setResendCooldown] = useState(0)


  const shootConfetti = () => {
    confetti({
      particleCount: 400,
      spread: 500, // full screen
      origin: { x: 0.5, y: 0.8 }, // center of the screen
      // startVelocity: 20, // slower start speed
      // gravity: 0.3, // slower falling
      // ticks: 200, // duration, more ticks = lasts longer
      // scalar: 1, // slightly larger particles
      // colors: ['#C00C53', '#00C896', '#FFD700', '#008CFF'],
    })
  }
  useEffect(() => {
    if (resendCooldown <= 0) return
  
    const interval = setInterval(() => {
      setResendCooldown((prev) => prev - 1)
    }, 1000)
  
    return () => clearInterval(interval)
  }, [resendCooldown])
  

  // Inside your component
  useEffect(() => {
    if (steps === 'confetti') {
      const timeout1 = setTimeout(() => {
        shootConfetti()
      }, 500)

      const timeout2 = setTimeout(() => {
        shootConfetti()
      }, 1000)

      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
      }
    }
  }, [steps])
  const handleResendOtp = () => {
    if (resendCooldown > 0) return
  
    startTransition(async () => {
      const response = await sendOtpAction({ phoneNumber })
  
      if (!response.success) {
        setErrorMessage(response.error || 'Nepodařilo se odeslat kód znovu.')
        return
      }
  
      setErrorMessage(null)
      setResendCooldown(120)
    })
  }
  
  // Handle continue button click based on current step and active tab
  const handleContinueClick = async () => {
    if (activeTab === 'sign-in') {
      const trimmed = signinData.trim()
  
      if (!trimmed) {
        setErrorMessage('Zadejte telefonní číslo nebo uživatelské jméno')
        return
      }
      
      setErrorMessage(null)
      startTransition(async () => {
        const response = await signInAction({ identifier: trimmed })
      
        if (!response.success) {
          setErrorMessage(response.error || 'Neznámá chyba')
          return
        }
        setErrorMessage(null)
        console.log('User authenticated:', response.user)
        // continue...
      })}
       else {
      // For sign-up, move through the steps
      switch (steps) {
        case 'auth':
          const phoneError = validatePhoneNumber(phoneNumber)

          if (phoneError) {
            setErrorMessage(phoneError)
            return
          }
          
          setErrorMessage(null)
          
          startTransition(async () => {
            const response = await sendOtpAction({ phoneNumber })
          
            if (!response.success) {
              setErrorMessage(response.error || 'Chyba při odesílání kódu')
              return
            }
          
            setSteps('otp')
            setResendCooldown(60) // Set cooldown for resend button
          })          
          break
        case 'otp':
          case 'otp': {
            if (!/^\d{4}$/.test(otpCode)) {
              setErrorMessage('Kód musí být čtyřmístný')
              return
            }
          
            setErrorMessage(null)
          
            startTransition(async () => {
              const response = await verifyOtpAction({
                phoneNumber,
                otpCode,
              })
          
              if (!response.success) {
                setErrorMessage(response.error || 'Neznámá chyba při ověření kódu')
                return
              }
          
              setSteps('who')
            })
          
            break
          }
          
        case 'who':
          case 'who': {
            if (!selectedServiceType) {
              setErrorMessage('Vyberte typ služby')
              return
            }
          
            setErrorMessage(null)
            setSteps('password')
            break
          }
          
          case 'password': {
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
              const response = await registerUserAction({
                phoneNumber,
                password,
                serviceType: selectedServiceType!,
              })
            
              if (!response.success) {
                setErrorMessage(response.error || 'Registrace selhala')
                return
              }
            
              console.log('✅ Account successfully created')
              setSteps('confetti')
            })
            
          
            break
          }          
        case 'confetti':
          // Final step - redirect to dashboard
          console.log('Registration complete, redirecting to dashboard')
          break
      }
    }
  }

  // Function to go back to previous step
  const handleBackClick = () => {
    switch (steps) {
      case 'otp':
        setSteps('auth')
        break
      case 'who':
        setSteps('otp')
        break
      case 'password':
        setSteps('who')
        break
      case 'confetti':
        // Usually we don't go back from confetti, but just in case
        setSteps('password')
        break
    }
  }
  // Add this with your other handler functions
  const handleTypeClick = (text: string) => {
    setSelectedServiceType((prev) => (prev === text ? null : text))
  }

  // Container classes
const containerClasses = `flex justify-center ${steps === 'confetti' ? 'items-center' : 'items-start'} min-h-screen w-full overflow-hidden relative`;

// Main content classes
const mainContentClasses = "bg-transparent pt-6xl w-full max-w-[375px] px-xl";

// Header classes
const headerClasses = "flex flex-col items-start mb-4xl relative";
const logoContainerClasses = "relative";
const backgroundPatternClasses = "absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]";
const titleClasses = "text-[#101828] text-[24px] leading-[32px] font-semibold mb-xs";
const subtitleClasses = "text-[#475467] text-[16px] leading-[24px]";

// Auth step classes
const authTabContainerClasses = "mb-4xl";
const inputFieldClasses = "mb-3xl";
const buttonContainerClasses = "mb-4xl";
const footerTextClasses = "text-center text-[12px] leading-[18px]";
const footerLinkClasses = "text-[#C00C53] underline";

// OTP step classes
const resendCodeClasses = "text-[14px] leading-[20px] text-[#475467] text-center mb-4xl inline-flex justify-center items-center gap-1";

// Confetti step classes
const confettiContentClasses = "flex flex-col gap-0 max-w-[375px] w-full items-center py-0 px-xl";
const confettiTitleClasses = "mt-2xl mb-xs text-[#101828] text-[24px] leading-[32px] font-semibold text-center";
const confettiSubtitleClasses = "text-[#475467] text-[16px] leading-[24px] text-center";
const confettiButtonContainerClasses = "w-full mt-3xl tablet:mt-3xl fixed bottom-3xl left-0 right-0 px-xl tablet:relative tablet:bottom-auto tablet:left-auto tablet:right-auto tablet:px-0";

return (
  <div className={containerClasses}>
    {steps !== 'confetti' ? (
      <div className={mainContentClasses}>
        {/* Header */}
        <div className={headerClasses}>
          <div className={logoContainerClasses}>
            <Logo type="logomark" brand="business" size="md" className="mb-2xl" />
            <div className={backgroundPatternClasses}>
              <BackgroundPatternDecorative type="squares" size="md" background />
            </div>
          </div>
          <h2 className={titleClasses}>
            {steps === 'auth' && 'Vítejte'}
            {steps === 'otp' && 'Ověření telefonního čísla'}
            {steps === 'who' && 'Kdo jste?'}
            {steps === 'password' && 'Vytvořte si heslo'}
            {steps === 'confetti' && 'Registrace dokončena!'}
          </h2>
          <p className={subtitleClasses}>
            {steps === 'auth' && 'Přihlaste se nebo se zaregistrujte.'}
            {steps === 'otp' && 'Zadejte čtyřmístný kód, který jsme vám zaslali na číslo '}
            {steps === 'otp' && phoneNumber && (
              <span className="text-[#101828] font-semibold">{phoneNumber}.</span>
            )}
            {steps === 'who' && 'Vyberte typ poskytovaných služeb.'}
            {steps === 'password' &&
              'Vaše heslo musí mít alespoň 8 znaků a mělo by obsahovat kombinaci čísel a písmen.'}
            {steps === 'confetti' && 'Registrace dokončena!'}
          </p>
        </div>

        {/* Auth Step - Phone/Username Input */}
        {steps === 'auth' && (
          <div className="flex flex-col gap-0">
            {/* Login Tabs */}
            <div className={authTabContainerClasses}>
              <HorizontalTabs size="sm" type="button white border" fullWidth>
                <TabButtonBase
                  current={activeTab === 'sign-in'}
                  type="button white"
                  size="sm"
                  fullWidth
                  onClick={() => setActiveTab('sign-in')}
                >
                  <span>Přihlásit se</span>
                </TabButtonBase>
                <TabButtonBase
                  current={activeTab === 'sign-up'}
                  type="button white"
                  size="sm"
                  fullWidth
                  onClick={() => setActiveTab('sign-up')}
                >
                  <span>Registrovat se</span>
                </TabButtonBase>
              </HorizontalTabs>
            </div>

            {/* Phone Input */}
            <div className={inputFieldClasses}>
              {activeTab === 'sign-in' ? (
                <InputField
                  value={signinData}
                  onChange={(val) => {
                    setSigninData(val);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  type="text"
                  placeholder="Telefon nebo uživatelské jméno"
                  hintText={errorMessage || ''}
                  destructive={Boolean(errorMessage)}
                />
              ) : (
                <InputField
                  value={phoneNumber}
                  onChange={(val) => {
                    setPhoneNumber(val);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  type="tel"
                  placeholder="+420777123456"
                  hintText={errorMessage || ''}
                  destructive={Boolean(errorMessage)}
                />
              )}
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

            {/* Footer */}
            <div className={footerTextClasses}>
              <p className="text-[#475467]">
                Vytvořením účtu souhlasíte s našimi{' '}
                <a
                  href="https://eroguide.cz/pages/legal"
                  target="blank"
                  className={footerLinkClasses}
                >
                  obchodními <br /> podmínkami
                </a>{' '}
                a{' '}
                <a
                  href="https://eroguide.cz/pages/privacy"
                  target="blank"
                  className={footerLinkClasses}
                >
                  zásadami ochrany osobních údajů
                </a>
                .
              </p>
            </div>
          </div>
        )}

        {/* OTP Step */}
        {steps === 'otp' && (
          <div className="flex flex-col gap-0">
            <div className={inputFieldClasses}>
              <VerificationCodeInput
                digits={4}
                value={otpCode}
                onChange={(val) => {
                  setOtpCode(val);
                  if (errorMessage) setErrorMessage(null);
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
                Změnit telefonní číso
              </Button>
            </div>
          </div>
        )}

        {/* Who Step */}
        {steps === 'who' && (
          <div className="flex flex-col gap-0">
            <CheckboxGroup breakpoint="mobile">
              <CheckboxGroupItem
                icon={HeartCircleIcon}
                size="sm"
                text="Holka na sex"
                selected={selectedServiceType === 'Holka na sex'}
                onClick={() => handleTypeClick('Holka na sex')}
              />
              <CheckboxGroupItem
                icon={HeartHandIcon}
                size="sm"
                text="Masérka"
                selected={selectedServiceType === 'Masérka'}
                onClick={() => handleTypeClick('Masérka')}
              />
              <CheckboxGroupItem
                icon={Building08Icon}
                size="sm"
                text="Privát"
                selected={selectedServiceType === 'Privát'}
                onClick={() => handleTypeClick('Privát')}
              />
              <CheckboxGroupItem
                icon={Building04Icon}
                size="sm"
                text="Masážní salon"
                selected={selectedServiceType === 'Masážní salon'}
                onClick={() => handleTypeClick('Masážní salon')}
              />
            </CheckboxGroup>

            <div className="mb-4xl mt-3xl">
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
          </div>
        )}

        {/* Password Step */}
        {steps === 'password' && (
          <div className="flex flex-col gap-0">
            <div className={inputFieldClasses}>
              <InputField
                value={password}
                onChange={(val) => {
                  setPassword(val);
                  if (errorMessage) setErrorMessage(null);
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
                Zaregistrovat se
              </Button>
            </div>
          </div>
        )}
      </div>
    ) : (
      <div className={confettiContentClasses}>
        <FeaturedIcon type="light" color="success" icon={CheckCircleIcon} size="lg" />
        <p className={confettiTitleClasses}>
          Gratulujeme
        </p>
        <p className={confettiSubtitleClasses}>
          Úspěšně jste se zaregistrovali! Nyní můžete nastavit svůj profil a začít inzerovat.
        </p>

        {/* Button container */}
        <div className={confettiButtonContainerClasses}>
          <Button size="xl" hierarchy="primary" onClick={handleContinueClick}>
            Začít inzerovat
          </Button>
        </div>
      </div>
    )}
  </div>
);
}
