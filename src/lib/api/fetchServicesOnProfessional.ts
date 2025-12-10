import { PublicService } from "@/src/interfaces";

export default async function fetchServices(
  professionalId: string
): Promise<PublicService[]> {
  const slug = process.env.NEXT_PUBLIC_SLUG;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services-on-professionals/public/${slug}/${professionalId}`,
    {
      method: "GET",
      next: { tags: ["services"] },
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
