export function validatePhoneNumber(phone: string): string | null {
    const trimmed = phone.trim()
  
    if (!trimmed) return 'Telefonní číslo je povinné'
  
    // Match +420, +421, +48, +386, +49, +380 (CZ, SK, PL, SI, DE, UA)
    const countryRegex = /^\+(420|421|48|386|49|380)\s?\d{3,14}$/
  
    if (!countryRegex.test(trimmed)) {
      return 'Neplatné číslo. Použijte kód země jako +420'
    }
  
    return null
  }
  