export async function sendOtpRestoreAction({ phoneNumber }: { phoneNumber: string }) {
  const trimmed = phoneNumber.trim()

  if (!trimmed) {
    return { success: false, error: 'Zadejte telefon.' }
  }

  const phoneRegex = /^\+(420|421|48|386|49|380)\s?\d{3,14}$/
  if (!phoneRegex.test(trimmed)) {
    return { success: false, error: 'Neplatný formát čísla' }
  }

  // 🔄 Simulate "existing users in DB"
  const existingUsers = ['+420777123456', '+420888888888']

  // ✅ Only send OTP if user exists
  if (!existingUsers.includes(trimmed)) {
    return { success: false, error: 'Uživatel nebyl nalezen. Zkuste se zaregistrovat.' }
  }

  // Simulate OTP sending
  await new Promise((res) => setTimeout(res, 1000))

  console.log('📨 OTP sent to:', trimmed)
  return { success: true }
}

export async function restorePasswordAction({
  phoneNumber,
  newPassword,
}: {
  phoneNumber: string
  newPassword: string
}) {
  const trimmedPhone = phoneNumber.trim()
  const trimmedPassword = newPassword.trim()

  if (!trimmedPhone) {
    return { success: false, error: 'Zadejte telefon.' }
  }

  if (!trimmedPassword || trimmedPassword.length < 8) {
    return {
      success: false,
      error: 'Heslo musí mít alespoň 8 znaků',
    }
  }

  const phoneRegex = /^\+(420|421|48|386|49|380)\s?\d{3,14}$/
  if (!phoneRegex.test(trimmedPhone)) {
    return { success: false, error: 'Neplatný formát čísla' }
  }

  // 🔄 Mock database users
  const existingUsers = ['+420777123456', '+420888888888']

  // 🔍 Check if phone number exists
  if (!existingUsers.includes(trimmedPhone)) {
    return {
      success: false,
      error: 'Uživatel nebyl nalezen. Zkuste se zaregistrovat.',
    }
  }

  // ✅ Simulate password update delay
  await new Promise((res) => setTimeout(res, 1000))

  console.log(`🔑 Password reset for: ${trimmedPhone}, new password: ${trimmedPassword}`)
  return { success: true }
}
