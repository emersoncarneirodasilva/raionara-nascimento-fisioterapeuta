import { BusinessHour } from "@/src/interfaces";

export default async function fetchBusinessHours(): Promise<BusinessHour[]> {
  const slug = process.env.NEXT_PUBLIC_SLUG;

  if (!slug) {
    throw new Error("NEXT_PUBLIC_SLUG não definido");
  }

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

  const data: BusinessHour[] = await res.json();

  return data;
}
