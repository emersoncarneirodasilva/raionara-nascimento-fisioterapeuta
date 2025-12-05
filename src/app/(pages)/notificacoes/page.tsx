import { Metadata } from "next";
import Container from "@/src/components/Layout/Container";
import { cookies } from "next/headers";
import fetchMyNotifications from "@/src/lib/api/fetchMyNotifications";
import NotificationCard from "@/src/components/Notifications/NotificationCard";
import { buildQuery } from "@/src/utils/buildQuery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Notificações",
  description: "Notificações do usuário.",
};

export default async function NotificationsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    search?: string;
    isRead?: string;
  }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const params = await searchParams;

  // Query params resolvidos
  const page = Number(params.page ?? 1);
  const limit = Number(params.limit ?? 5);
  const search = params.search || "";
  const isRead =
    params.isRead === "" || params.isRead === undefined
      ? undefined
      : params.isRead === "true";

  const data = await fetchMyNotifications(token, {
    page,
    limit,
    search,
    isRead,
  });

  const notifications = data.notifications || [];
  const totalCount = data.totalCount ?? notifications.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-10 text-foreground">
          Notificações
        </h1>

        {/* FILTROS */}
        <form
          method="GET"
          className="max-w-4xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Campo de busca */}
          <input
            name="search"
            placeholder="Buscar..."
            defaultValue={search}
            className="border rounded-lg px-4 py-2 bg-surface text-foreground placeholder:text-muted border-(--color-secondary)"
          />

          {/* Filtro de lidas/não lidas */}
          <select
            name="isRead"
            defaultValue={isRead === undefined ? "" : isRead ? "true" : "false"}
            className="border rounded-lg px-4 py-2 bg-surface text-foreground border-(--color-secondary)"
          >
            <option value="">Todas</option>
            <option value="false">Não lidas</option>
            <option value="true">Lidas</option>
          </select>

          {/* Seletor de limite por página */}
          <select
            name="limit"
            defaultValue={limit}
            className="border rounded-lg px-4 py-2 bg-surface text-foreground border-(--color-secondary)"
          >
            <option value="5">5 por página</option>
            <option value="10">10 por página</option>
            <option value="20">20 por página</option>
          </select>

          {/* Botão Filtrar */}
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-lg cursor-pointer bg-button-color hover:brightness-90 transition-all duration-200"
          >
            Filtrar
          </button>
        </form>

        {/* LISTA */}
        {notifications.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-muted text-lg">
              Você não possui notificações no momento.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {notifications.map((n) => (
              <NotificationCard key={n.id} notification={n} />
            ))}
          </div>
        )}

        {/* PAGINAÇÃO */}
        {totalPages > 1 && (
          <div className="max-w-4xl mx-auto mt-12 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            {/* Botão Anterior */}
            {page > 1 && (
              <Link
                href={buildQuery({
                  page: page - 1,
                  limit,
                  search,
                  isRead,
                })}
                className="px-4 py-2 rounded-lg border bg-surface text-foreground hover:bg-surface-alt border-(--color-secondary) text-center"
              >
                ← Anterior
              </Link>
            )}

            {/* Indicador de página */}
            <span className="text-sm px-4 py-2 text-foreground bg-surface rounded-lg border border-(--color-secondary) text-center">
              Página {page} de {totalPages}
            </span>

            {/* Botão Próxima */}
            {page < totalPages && (
              <Link
                href={buildQuery({
                  page: page + 1,
                  limit,
                  search,
                  isRead,
                })}
                className="px-4 py-2 rounded-lg border bg-surface text-foreground hover:bg-surface-alt border-(--color-secondary) text-center"
              >
                Próxima →
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
