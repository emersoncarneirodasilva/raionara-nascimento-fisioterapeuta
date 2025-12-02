export async function fetchSalonByUser(token: string) {
  const slug = "raionara-nascimento-fisioterapeuta";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/salons/users/${slug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Erro ao buscar dados do salão:", errorData);
    throw new Error("Credenciais inválidas.");
  }

  return await res.json();
}
