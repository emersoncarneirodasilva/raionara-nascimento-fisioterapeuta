export function formatTime(dateString: string) {
  const date = new Date(dateString);

  // Ajuste fixo para UTC-3 (São Paulo)
  date.setHours(date.getUTCHours() - 3);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
