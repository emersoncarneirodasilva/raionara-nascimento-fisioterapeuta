"use server";

import { fetchResetPassword } from "@/src/lib/api/fetchResetPassword";
import { redirect } from "next/navigation";

export async function resetPasswordAction(formData: FormData) {
  const token = formData.get("token")?.toString();
  const newPassword = formData.get("new-password")?.toString();
  const confirmPassword = formData.get("confirm-password")?.toString();

  if (!token) {
    redirect(`/redefinir-senha?error=${encodeURIComponent("Token inválido.")}`);
  }

  if (!newPassword || !confirmPassword) {
    redirect(
      `/redefinir-senha/${token}?error=${encodeURIComponent(
        "Preencha todos os campos."
      )}`
    );
  }

  if (newPassword !== confirmPassword) {
    redirect(
      `/redefinir-senha/${token}?error=${encodeURIComponent(
        "As senhas não coincidem."
      )}`
    );
  }

  let result;
  try {
    result = await fetchResetPassword(token, newPassword);
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.message
        : "Não foi possível redefinir sua senha.";

    redirect(`/redefinir-senha/${token}?error=${encodeURIComponent(message)}`);
  }

  if (!result.success) {
    redirect(
      `/redefinir-senha/${token}?error=${encodeURIComponent(
        result.message || "Erro ao redefinir senha."
      )}`
    );
  }

  redirect(
    `/login?success=${encodeURIComponent(
      "Sua senha foi redefinida com sucesso."
    )}`
  );
}
