'use server'

type RegisterUserPayload = {
  phoneNumber: string
  password: string
  serviceType: string
}

export async function checkSignInPhone({ identifier }: { identifier: string }) {
  // Normalize: remove all spaces
  const normalized = identifier.replace(/\s+/g, '').trim()

  if (!normalized) {
    return { success: false, error: 'Zadejte telefon.' }
  }

  // Accept only + followed by 9–15 digits
  const phoneRegex = /^\+?\d{9,15}$/

  if (!phoneRegex.test(normalized)) {
    return {
      success: false,
      error: 'Neplatný formát telefonního čísla.',
    }
  }

  // ⏳ Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // 🧪 Mock existing user phone number
    const mockUserPhone = '+420777123456'

    if (normalized === mockUserPhone) {
      // Return a mock user object
      return {
        success: true,
        user: {
          id: 'mock-user-id',
          phone: mockUserPhone,
          name: 'Mock User',
        },
      }
    }

    // If not found
    return {
      success: false,
      error: 'Uživatel nebyl nalezen. Zkuste se zaregistrovat.',
    }
  } catch (err) {
    console.error('Sign-in error:', err)
    return {
      success: false,
      error: 'Došlo k chybě na serveru',
    }
  }
}

export async function signInUserAction({
  phoneNumber,
  password,
}: {
  phoneNumber: string
  password: string
}) {
  // Normalize input
  const normalizedPhone = phoneNumber.replace(/\s+/g, '').trim()
  const trimmedPassword = password.trim()

  // Mock credentials
  const MOCK_PHONE = '+420777123456'
  const MOCK_PASSWORD = 'password123' // Must be at least 8 chars, have letters & numbers

  // Simulate processing delay
  await new Promise((res) => setTimeout(res, 1000))

  // Check credentials
  if (normalizedPhone === MOCK_PHONE && trimmedPassword === MOCK_PASSWORD) {
    return {
      success: true,
      user: {
        id: 'mock-user-id',
        phone: MOCK_PHONE,
        name: 'Mock User',
      },
    }
  }

  return {
    success: false,
    error: 'Zadali jste nesprávné heslo.',
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
    return { success: false, error: 'Nesprávný kód, zkuste to prosím znovu.' }
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
    error: 'Nesprávný kód, zkuste to prosím znovu.',
  }
}
