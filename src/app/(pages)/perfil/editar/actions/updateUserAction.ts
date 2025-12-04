"use server";

import putMyProfile from "@/src/lib/api/putMyProfile";
import putChangePassword from "@/src/lib/api/putChangePassword";
import { redirect } from "next/navigation";

export async function updateUserAction(formData: FormData) {
  const token = formData.get("token")?.toString() || "";

  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";

  const newPassword = formData.get("newPassword")?.toString().trim() || "";
  const currentPassword =
    formData.get("currentPassword")?.toString().trim() || "";

  if (!token) {
    redirect(
      `/perfil/editar?error=${encodeURIComponent(
        "Token inválido. Faça login novamente."
      )}`
    );
  }

  try {
    // Atualizar nome + telefone se ao menos um mudar
    if (name || phone) {
      await putMyProfile(token, { name, phone });
    }

    // Atualizar senha apenas se ambos os campos vierem preenchidos
    if (newPassword !== "" && currentPassword !== "") {
      await putChangePassword(token, {
        oldPassword: currentPassword,
        newPassword,
      });
    }
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Erro ao atualizar perfil.";

    redirect(`/perfil/editar?error=${encodeURIComponent(message)}`);
  }

  redirect(
    `/perfil?success=${encodeURIComponent("Perfil atualizado com sucesso!")}`
  );
}
