"use server";

import { postForgotPassword } from "@/src/lib/api/postForgotPassword";
import { redirect } from "next/navigation";

export async function handleForgotPassword(formData: FormData) {
  const email = formData.get("email")?.toString()?.trim();

  if (!email) {
    redirect(
      `/esqueci-senha?error=${encodeURIComponent(
        "Preencha o campo de e-mail."
      )}`
    );
  }

  try {
    await postForgotPassword(email);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Erro ao enviar o e-mail.";
    redirect(`/esqueci-senha?error=${encodeURIComponent(message)}`);
  }

  redirect(
    `/login?success=${encodeURIComponent(
      "Link de redefinição enviado para seu e-mail."
    )}`
  );
}
