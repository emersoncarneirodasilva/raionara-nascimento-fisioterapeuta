"use server";

import { fetchSalonByUser } from "@/src/lib/api/fetchSalonByUser";
import { postLogin } from "@/src/lib/api/postLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogin(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    redirect(`/login?error=${encodeURIComponent("Preencha todos os campos.")}`);
  }

  let token: string;

  try {
    const data = await postLogin(email, password);
    token = data?.token;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Erro ao realizar login.";
    redirect(`/login?error=${encodeURIComponent(message)}`);
  }

  if (!token) {
    redirect(`/login?error=${encodeURIComponent("Token inválido.")}`);
  }

  const cookieStore = await cookies();

  cookieStore.set("user_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  let salon;
  try {
    salon = await fetchSalonByUser(token);
  } catch (err: unknown) {
    let message = "Erro ao buscar informações do salão.";

    if (err instanceof Error) {
      message = err.message;
    }

    redirect(`/login?error=${encodeURIComponent(message)}`);
  }

  if (!salon?.slug) {
    redirect(`/login?error=${encodeURIComponent("Salão não encontrado.")}`);
  }

  redirect(`/`);
}
