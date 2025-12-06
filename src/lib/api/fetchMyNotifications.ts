export interface NotificationServiceInfo {
  service: { name: string };
  professional: { name: string };
}

export interface NotificationAppointment {
  status: "PENDING" | "CONFIRMED" | "CANCELED" | "COMPLETED";
  scheduledAt: string; // ISO date
  services: NotificationServiceInfo[];
}

export interface UserNotification {
  id: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  appointment: NotificationAppointment | null;
}

export interface NotificationsResponse {
  message: string;
  notifications: UserNotification[];
  totalCount: number;
}

/**
 * Mapeia a notificação do backend para UserNotification
 * Usa `appointment` se existir, ou fallback para `snapshot`
 */
function mapNotification(raw: any): UserNotification {
  let appointment: NotificationAppointment | null = null;

  if (raw.appointment) {
    // Pegamos os dados diretamente do agendamento
    appointment = {
      status: raw.appointment.status,
      scheduledAt: raw.appointment.scheduledAt,
      services:
        raw.appointment.services?.map((s: any) => ({
          service: { name: s.service?.name || "Desconhecido" },
          professional: { name: s.professional?.name || "Desconhecido" },
        })) || [],
    };
  } else if (raw.snapshot?.data) {
    // Pegamos os dados do snapshot
    const data = raw.snapshot.data;
    appointment = {
      status: data.afterStatus ?? data.beforeStatus,
      scheduledAt: data.afterScheduledAt ?? data.beforeScheduledAt,
      services:
        data.services?.map((s: any) => ({
          service: { name: s.serviceName || "Desconhecido" },
          professional: { name: s.professionalName || "Desconhecido" },
        })) || [],
    };
  }

  return {
    id: raw.id,
    message: raw.message,
    isRead: raw.isRead,
    createdAt: raw.createdAt,
    appointment,
  };
}

/**
 * Mapa de status para exibição no frontend
 */
export const statusTextMap: Record<string, string> = {
  PENDING: "Aguardando confirmação",
  CONFIRMED: "Confirmado",
  CANCELED: "Cancelado",
  COMPLETED: "Concluído",
};

/**
 * Busca notificações do usuário
 */
export default async function fetchMyNotifications(
  token: string,
  options?: {
    page?: number;
    limit?: number;
    search?: string;
    isRead?: boolean;
  }
): Promise<NotificationsResponse> {
  const query = new URLSearchParams();

  if (options?.page) query.set("page", String(options.page));
  if (options?.limit) query.set("limit", String(options.limit));
  if (options?.search) query.set("search", options.search);
  if (typeof options?.isRead === "boolean")
    query.set("isRead", String(options.isRead));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/me?${query.toString()}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Falha ao buscar notificações.");

  const rawData = await res.json();

  return {
    ...rawData,
    notifications: rawData.notifications.map(mapNotification),
  };
}
