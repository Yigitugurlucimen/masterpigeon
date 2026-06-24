export function formatTrPhone(number) {
  const digits = String(number).replace(/\D/g, '')
  if (digits.startsWith('90') && digits.length === 12) {
    return `+90 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`
  }
  return `+${digits}`
}

export function telLink(number) {
  return `tel:+${String(number).replace(/\D/g, '')}`
}
