import Container from "@/src/components/Layout/Container";
import fetchMyProfile from "@/src/lib/api/fetchMyProfile";
import { cookies } from "next/headers";
import { updateUserAction } from "./actions/updateUserAction";
import ErrorToastFromParams from "@/src/components/Error/ErrorToastFromParams";
import { Metadata } from "next";
import { UserProfile } from "@/src/interfaces";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Editar Perfil do Usuário",
  description: "Página de edição do perfil do usuário.",
};

export default async function EditProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const user: UserProfile = await fetchMyProfile(token);

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <ErrorToastFromParams />

      <Container>
        <h1 className="text-4xl font-semibold text-center mb-12 text-foreground">
          Editar Perfil
        </h1>

        <form
          action={updateUserAction}
          className="max-w-3xl mx-auto bg-surface p-8 rounded-2xl shadow-lg space-y-8"
        >
          {/* token oculto */}
          <input type="hidden" name="token" value={token} />

          {/* Dados Pessoais */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium border-b border-border pb-2 mb-4 text-foreground">
              Dados Pessoais
            </h2>

            {/* Nome */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label htmlFor="name" className="text-muted md:w-40">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user.name}
                placeholder="Digite seu nome"
                className="border border-border rounded-lg px-4 py-2 md:flex-1 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-muted bg-surface text-foreground"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label htmlFor="phone" className="text-muted md:w-40">
                Telefone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                defaultValue={user.phone}
                placeholder="Digite seu telefone"
                className="border border-border rounded-lg px-4 py-2 md:flex-1 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-muted bg-surface text-foreground"
              />
            </div>
          </div>

          {/* Alteração de Senha */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium border-b border-border pb-2 mb-4 text-foreground">
              Alterar Senha (opcional)
            </h2>

            {/* Nova Senha */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label htmlFor="newPassword" className="text-muted md:w-40">
                Nova Senha
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                minLength={6}
                placeholder="Digite a nova senha"
                className="border border-border rounded-lg px-4 py-2 md:flex-1 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-muted bg-surface text-foreground"
              />
            </div>

            {/* Senha Atual */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label htmlFor="currentPassword" className="text-muted md:w-40">
                Senha Atual
              </label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                minLength={6}
                placeholder="Digite sua senha atual"
                className="border border-border rounded-lg px-4 py-2 md:flex-1 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-muted bg-surface text-foreground"
              />
            </div>
          </div>

          {/* Botão */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer duration-300"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
