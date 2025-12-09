"use server";

import { CreateUserPayload } from "@/src/interfaces";
import { fetchSalonBySlug } from "@/src/lib/api/fetchSalonBySlug";
import { postUser } from "@/src/lib/api/postUser";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !phone || !password) {
    redirect(
      `/cadastro?error=${encodeURIComponent(
        "Todos os campos são obrigatórios"
      )}`
    );
  }

  let salon;
  try {
    salon = await fetchSalonBySlug();
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Erro ao buscar informações do salão.";
    redirect(`/cadastro?error=${encodeURIComponent(message)}`);
  }

  if (!salon?.id) {
    redirect(`/cadastro?error=${encodeURIComponent("Salão não encontrado.")}`);
  }

  const payload: CreateUserPayload = {
    name,
    email,
    password,
    phone,
    salonId: salon.id,
  };

  try {
    await postUser(payload);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Erro ao criar usuário.";
    redirect(`/cadastro?error=${encodeURIComponent(message)}`);
  }

  redirect(
    `/login?success=${encodeURIComponent("Cadrastro feito com sucesso!")}`
  );
}
