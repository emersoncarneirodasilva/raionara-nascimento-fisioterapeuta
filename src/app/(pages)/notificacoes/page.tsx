import { Metadata } from "next";
import Container from "@/src/components/Layout/Container";
import { cookies } from "next/headers";
import fetchMyNotifications from "@/src/lib/api/fetchMyNotifications";
import NotificationCard from "@/src/components/Notifications/NotificationCard";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Notificações",
  description: "Notificações do usuário.",
};

export default async function NotificationsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const data = await fetchMyNotifications(token);

  const notifications = data.notifications || [];

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Notificações
        </h1>

        {notifications.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-muted-foreground text-lg">
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
      </Container>
    </section>
  );
}
