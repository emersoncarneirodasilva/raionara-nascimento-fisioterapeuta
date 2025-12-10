import { ProfessionalsResponse } from "@/src/interfaces";

export default async function fetchProfessionals(): Promise<ProfessionalsResponse> {
  const slug = process.env.NEXT_PUBLIC_SLUG;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/professionals/slug/${slug}`,
    {
      method: "GET",
      next: { tags: ["professionals"] },
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar profissionais.");
  }

  return res.json();
}
