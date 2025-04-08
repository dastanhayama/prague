'use server'

type RegisterUserPayload = {
  phoneNumber: string
  password: string
  serviceType: string
}

export async function signInAction({ identifier }: { identifier: string }) {
  const trimmed = identifier.trim()

  if (!trimmed) {
    return { success: false, error: 'Zadejte telefonní číslo nebo uživatelské jméno' }
  }

  const phoneRegex = /^\+?\d{9,15}$/
  const usernameRegex = /^[a-zA-Z0-9_.@-]{3,}$/

  if (!phoneRegex.test(trimmed) && !usernameRegex.test(trimmed)) {
    return { success: false, error: 'Neplatný formát telefonního čísla nebo uživatelského jména' }
  }

  // ⏳ Simulate server processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/users?identifier=${encodeURIComponent(trimmed)}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      },
    )

    if (!res.ok) {
      return { success: false, error: 'Chyba při ověřování uživatele' }
    }

    const user = await res.json()

    if (!user || !user.id) {
      return { success: false, error: 'Uživatel nebyl nalezen' }
    }

    return { success: true, user }
  } catch (err) {
    console.error('Sign-in error:', err)
    return { success: false, error: 'Došlo k chybě na serveru' }
  }
}

export async function registerUserAction({
  phoneNumber,
  password,
  serviceType,
}: RegisterUserPayload): Promise<{ success: boolean; error?: string }> {
  // Basic validations (redundant but safe)
  if (!phoneNumber || !password || !serviceType) {
    return { success: false, error: 'Chybějící registrační údaje' }
  }

  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    return { success: false, error: 'Neplatné heslo' }
  }

  // Simulate delay and "DB check"
  await new Promise((r) => setTimeout(r, 1000))

  // Mocked condition: already registered phone
  if (phoneNumber === '+420777123456') {
    return { success: false, error: 'Uživatel s tímto číslem již existuje' }
  }

  // Simulated success
  console.log('🆕 USER CREATED:', { phoneNumber, password, serviceType })

  return { success: true }
}

export async function sendOtpAction({ phoneNumber }: { phoneNumber: string }) {
  const trimmed = phoneNumber.trim()

  if (!trimmed) return { success: false, error: 'Telefonní číslo je povinné' }

  const phoneRegex = /^\+(420|421|48|386|49|380)\s?\d{3,14}$/
  if (!phoneRegex.test(trimmed)) {
    return { success: false, error: 'Neplatný formát čísla' }
  }

  // Simulate check for already registered numbers
  const alreadyRegisteredNumbers = ['+420777123456', '+420888888888']

  if (alreadyRegisteredNumbers.includes(trimmed)) {
    return { success: false, error: 'Telefonní číslo je již registrováno' }
  }

  // Simulate delay + "sending OTP"
  await new Promise((res) => setTimeout(res, 1000))

  console.log('📨 OTP sent to:', phoneNumber)
  return { success: true }
}

export async function verifyOtpAction({
  phoneNumber,
  otpCode,
}: {
  phoneNumber: string
  otpCode: string
}) {
  const trimmedCode = otpCode.trim()

  if (!/^\d{4}$/.test(trimmedCode)) {
    return { success: false, error: 'Kód musí být čtyřmístný' }
  }

  // Simulate delay
  await new Promise((res) => setTimeout(res, 1000))

  if (trimmedCode === '1234') {
    return { success: true }
  }

  if (trimmedCode === '1111') {
    return { success: false, error: 'Nesprávný kód, zkuste to prosím znovu.' }
  }

  if (trimmedCode === '0000') {
    return { success: false, error: 'Neplatný kód, zažádejte prosím o nový.' }
  }

  return {
    success: false,
    error: 'Neplatný kód, zažádejte prosím o nový.',
  }
}
