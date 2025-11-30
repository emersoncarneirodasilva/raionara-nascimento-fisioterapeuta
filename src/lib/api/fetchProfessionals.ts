export interface Professional {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatarUrl: string | null;
}

export interface ProfessionalsResponse {
  total: number;
  totalPages: number;
  currentPage: number;
  professionals: Professional[];
}

export default async function fetchProfessionals(): Promise<ProfessionalsResponse> {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/professionals/slug/${slug}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar profissionais.");
  }

  return res.json();
}
