export async function fetchSalonBySlug() {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/salons/${slug}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Erro ao buscar dados do salão:", errorData);
    throw new Error("Salão não encontrado.");
  }

  return await res.json();
}
