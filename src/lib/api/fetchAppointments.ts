import { Appointment } from "@/src/interfaces";

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
