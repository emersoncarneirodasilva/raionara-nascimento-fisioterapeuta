export interface PublicService {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
}

export default async function fetchServices(
  professionalId: string
): Promise<PublicService[]> {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services-on-professionals/public/${slug}/${professionalId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar serviços.");
  }

  const data = await res.json();

  return data.map((item: any) => ({
    id: item.service.id,
    name: item.service.name,
    description: item.service.description,
    imageUrl: item.service.imageUrl,
  }));
}
