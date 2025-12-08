import { Metadata } from "next";
import { cookies } from "next/headers";
import Container from "@/src/components/Layout/Container";
import fetchAppointments from "@/src/lib/api/fetchAppointments";
import AppointmentCard from "@/src/components/Appointments/AppointmentCard";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Meus Agendamentos",
  description: "Lista de agendamentos do usuário.",
};

export default async function AppointmentsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const appointments = await fetchAppointments(token);

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-10 text-foreground">
          Meus Agendamentos
        </h1>

        {appointments.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-muted text-lg">
              Você não possui agendamentos no momento.
            </p>
          </div>
        ) : (
          <div
            className={`max-w-5xl mx-auto grid gap-8 ${
              appointments.length === 1
                ? "grid-cols-1 justify-items-center"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
