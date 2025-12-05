export interface NotificationServiceInfo {
  service: {
    name: string;
  };
  professional: {
    name: string;
  };
}

export interface NotificationAppointment {
  status: "PENDING" | "CONFIRMED" | "CANCELED";
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
}

export default async function fetchMyNotifications(
  token: string
): Promise<NotificationsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar notificações");
  }

  return res.json();
}
