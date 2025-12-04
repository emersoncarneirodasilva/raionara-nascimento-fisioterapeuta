import { Metadata } from "next";
import Link from "next/link";
import Container from "@/src/components/Layout/Container";
import fetchMyProfile, { UserProfile } from "@/src/lib/api/fetchMyProfile";
import { cookies } from "next/headers";
import SuccessToastAutoRedirect from "@/src/components/Success/SuccessToastAutoRedirect";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Perfil do Usuário",
  description: "Página de perfil do usuário.",
};

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const user: UserProfile = await fetchMyProfile(token);

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <SuccessToastAutoRedirect href="/perfil" />

      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Perfil
        </h1>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Nome */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 border-b border-border pb-6">
            <span className="text-muted-foreground text-lg shrink-0">Nome</span>
            <span className="text-foreground font-medium text-lg md:truncate md:flex-1 md:text-right min-w-0">
              {user.name}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 border-b border-border pb-6">
            <span className="text-muted-foreground text-lg shrink-0">
              E-mail
            </span>
            <span className="text-foreground font-medium text-lg md:truncate md:flex-1 md:text-right min-w-0">
              {user.email}
            </span>
          </div>

          {/* Telefone */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 border-b border-border pb-6">
            <span className="text-muted-foreground text-lg shrink-0">
              Telefone
            </span>
            <span className="text-foreground font-medium text-lg md:truncate md:flex-1 md:text-right min-w-0">
              {user.phone}
            </span>
          </div>

          {/* Botão Editar */}
          <div className="flex justify-center pt-6">
            <Link
              href={`/perfil/editar/`}
              className="px-8 py-2 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer duration-300"
            >
              Editar
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
