export function validatePhoneNumber(phone: string): string | null {
  // Remove all spaces from the string
  const normalized = phone.replace(/\s+/g, '').trim()

  if (!normalized) return 'Zadejte telefon.'

  // Match +420, +421, +48, +386, +49, +380 followed by 3–14 digits
  const countryRegex = /^\+(420|421|48|386|49|380)\d{3,14}$/

  if (!countryRegex.test(normalized)) {
    return 'Zadejte telefon.'
  }

  return null
}
