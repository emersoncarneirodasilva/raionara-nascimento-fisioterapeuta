export function normalizePaymentMethod(method: string) {
  return method
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}
