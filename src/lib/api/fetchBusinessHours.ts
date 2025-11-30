export interface BusinessHour {
  id: string;
  salonId: string;
  weekday: number;
  startTime: string;
  endTime: string;
}

export default async function fetchBusinessHours(): Promise<BusinessHour[]> {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/business-hours/public/${slug}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar horários.");
  }

  return res.json();
}
