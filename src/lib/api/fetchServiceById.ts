interface ServiceSummary {
  name: string;
  description: string;
  duration: number;
  imageUrl: string;
}

export default async function fetchServiceById(
  serviceId: string
): Promise<ServiceSummary> {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/public/${slug}/${serviceId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar serviço.");
  }

  const data = await res.json();

  // Retornando apenas os campos desejados
  const serviceData: ServiceSummary = {
    name: data.name,
    description: data.description,
    duration: data.duration,
    imageUrl: data.imageUrl,
  };

  return serviceData;
}
