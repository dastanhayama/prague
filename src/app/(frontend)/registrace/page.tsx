// app/page.tsx
'use client'

import { useState, useEffect} from 'react'
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



export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [signinData, setSigninData] = useState<string>('')
  const [otpCode, setOtpCode] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>("Holka na sex");
  const [activeTab, setActiveTab] = useState('sign-in') // 'sign-in' or 'sign-up'
  const [steps, setSteps] = useState<string>('auth') // 'auth', 'otp', 'who', 'password', 'confetti'

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
    });
  };
  
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
  // Handle continue button click based on current step and active tab
  const handleContinueClick = () => {
    if (activeTab === 'sign-in') {
      // For sign-in, redirect to dashboard directly
      console.log('Redirect to dashboard with credentials:', signinData)
      // Here you would typically call your authentication API
      // and then redirect to dashboard
    } else {
      // For sign-up, move through the steps
      switch (steps) {
        case 'auth':
          if (phoneNumber.trim()) {
            setSteps('otp')
            // Here you would typically call API to send OTP
            console.log('Sending OTP to:', phoneNumber)
          }
          break
        case 'otp':
          if (otpCode.trim()) {
            setSteps('who')
            console.log('OTP verified:', otpCode)
          }
          break
        case 'who':
          if (selectedServiceType) {
            setSteps('password');
            console.log('Selected service type:', selectedServiceType);
          }
          break;
        case 'password':
          if (password) {
            setSteps('confetti')
            console.log('Account created!')
            // Here you would typically call API to create account
          }
          break
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
  setSelectedServiceType(prev => prev === text ? null : text);
};



  return (
    <div className={`flex justify-center ${steps === 'confetti' ? 'items-center' : 'items-start'} min-h-screen w-full overflow-hidden relative`}>
      {steps !== 'confetti' ? (
        <div className="bg-transparent pt-6xl w-full max-w-[375px] px-xl">
        {/* Header */}
        <div className="flex flex-col items-start mb-4xl relative">
          <div className="relative">
          <Logo type="logomark" brand="business" size="md" className="mb-2xl" />
          {/* Position the background relative to the logo */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
            <BackgroundPatternDecorative type="squares" size="md" background />
          </div>
        </div>          
        <h2 className="text-[#101828] text-[24px] leading-[32px] font-semibold mb-xs">
            {steps === 'auth' && 'Vítejte'}
            {steps === 'otp' && 'Ověření telefonního čísla'}
            {steps === 'who' && 'Kdo jste?'}
            {steps === 'password' && 'Vytvořte si heslo'}
            {steps === 'confetti' && 'Registrace dokončena!'}
          </h2>
          <p className="text-[#475467] text-[16px] leading-[24px]">
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
            <div className="mb-4xl">
              <HorizontalTabs size="sm" type="button white border" fullWidth>
                <TabButtonBase
                  current={activeTab === 'sign-in'}
                  type="button white"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    setActiveTab('sign-in')
                  }}
                >
                  <span>Přihlásit se</span>
                </TabButtonBase>
                <TabButtonBase
                  current={activeTab === 'sign-up'}
                  type="button white"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    setActiveTab('sign-up')
                  }}
                >
                  <span>Registrovat se</span>
                </TabButtonBase>
              </HorizontalTabs>
            </div>

            {/* Phone Input */}
            <div className="mb-3xl">
              {activeTab === 'sign-in' ? (
                <InputField
                  value={signinData}
                  onChange={setSigninData}
                  type="text"
                  placeholder="Telefon nebo uživatelské jméno"
                />
              ) : (
                <InputField
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  type="tel"
                  placeholder="777 123 456"
                />
              )}
            </div>

            {/* Login Button */}
            <div className="mb-4xl">
              <Button size="xl" hierarchy="primary" onClick={handleContinueClick}>
                Pokračovat
              </Button>
            </div>

            {/* Footer */}
            <div className="text-center text-[12px] leading-[18px]">
              <p className="text-[#475467]">
                Vytvořením účtu souhlasíte s našimi{' '}
                <a
                  href="https://eroguide.cz/pages/legal"
                  target="blank"
                  className="text-[#C00C53] underline"
                >
                  obchodními <br /> podmínkami
                </a>{' '}
                a{' '}
                <a
                  href="https://eroguide.cz/pages/privacy"
                  target="blank"
                  className="text-[#C00C53] underline"
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
            <div className="mb-3xl">
              <VerificationCodeInput digits={4} onChange={setOtpCode} value={otpCode} />
            </div>

            <div className="mb-4xl">
              <Button size="xl" hierarchy="primary" onClick={handleContinueClick}>
                Potvrdit
              </Button>
            </div>

            <p className="text-[14px] leading-[20px] text-[#475467] text-center mb-4xl inline-flex justify-center items-center gap-1">
              Nedostali jste kód?{' '}
              <Button size="md" hierarchy="link color" onClick={() => {}}>
                Znovu odeslat kód
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
        selected={selectedServiceType === "Holka na sex"}
        onClick={() => handleTypeClick("Holka na sex")}
      />
      <CheckboxGroupItem 
        icon={HeartHandIcon} 
        size="sm" 
        text="Masérka" 
        selected={selectedServiceType === "Masérka"}
        onClick={() => handleTypeClick("Masérka")}
      />
      <CheckboxGroupItem 
        icon={Building08Icon} 
        size="sm" 
        text="Privát" 
        selected={selectedServiceType === "Privát"}
        onClick={() => handleTypeClick("Privát")}
      />
      <CheckboxGroupItem 
        icon={Building04Icon} 
        size="sm" 
        text="Masážní salon" 
        selected={selectedServiceType === "Masážní salon"}
        onClick={() => handleTypeClick("Masážní salon")}
      /></CheckboxGroup>

            <div className="mb-4xl mt-3xl">
              <Button size="xl" hierarchy="primary" onClick={handleContinueClick}>
                Pokračovat
              </Button>
            </div>
          </div>
        )}

        {/* Password Step */}
        {steps === 'password' && (
          <div className="flex flex-col gap-0">
            <div className="mb-3xl">
              <InputField
                value={password}
                onChange={setPassword}
                type="password"
                placeholder="Zadejte heslo"
              />
            </div>
            <div >
              <Button
                size="xl"
                hierarchy="primary"
                onClick={handleContinueClick}
              >
                Zaregistrovat se
              </Button>
            </div>
          </div>
        )}

        {/* Confetti Step
        {steps === 'confetti' && (
          <div className="flex flex-col gap-0 items-center">
            <div className="mb-3xl text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-[#101828] text-[20px] leading-[28px] font-semibold mb-xs">
                Vítejte na palubě, 
              </h3>
              <p className="text-[#475467] text-[16px] leading-[24px]">
                Váš účet byl úspěšně vytvořen.
              </p>
            </div>

            <div className="mb-4xl w-full">
              <Button size="xl" hierarchy="primary" onClick={handleContinueClick}>
                Přejít na dashboard
              </Button>
            </div>
          </div>
        )} */}
      </div>
      ) : (
        <div className='flex flex-col gap-0 max-w-[375px] w-full items-center py-0 px-xl'>
  <FeaturedIcon type='light' color='success' icon={CheckCircleIcon} size='lg'/>
  <p className='mt-2xl mb-xs text-[#101828] text-[24px] leading-[32px] font-semibold text-center'>Gratulujeme</p>
  <p className='text-[#475467] text-[16px] leading-[24px] text-center'>Úspěšně jste se zaregistrovali! Nyní můžete nastavit svůj profil a začít inzerovat.</p>
  
  {/* Button container */}
  <div className='w-full mt-3xl tablet:mt-3xl fixed bottom-3xl left-0 right-0 px-xl tablet:relative tablet:bottom-auto tablet:left-auto tablet:right-auto tablet:px-0'>
    <Button size='xl' hierarchy='primary' onClick={handleContinueClick}>Začít inzerovat</Button>
  </div>
</div>
      )}
      
    </div>
  )
}
