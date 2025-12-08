export interface AppointmentService {
  id: string;
  service: {
    id: string;
    name: string;
    price: number;
    duration: number;
  };
  professional: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
}

export interface AppointmentPayment {
  id: string;
  appointmentId: string;
  amount: number;
  method: string;
  status: "PENDING" | "PAID" | "REFUNDED" | "PARTIALLY_PAID";
  createdAt: string;
}

export interface Appointment {
  id: string;
  userId: string;
  salonId: string;
  status: "PENDING" | "CONFIRMED" | "CANCELED" | "COMPLETED";
  scheduledAt: string;
  createdAt: string;
  updatedAt: string;
  services: AppointmentService[];
  payment: AppointmentPayment | null;
  notifications: unknown[];
}

export default async function fetchAppointments(
  token: string
): Promise<Appointment[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar agendamentos.");
  }

  return res.json();
}
