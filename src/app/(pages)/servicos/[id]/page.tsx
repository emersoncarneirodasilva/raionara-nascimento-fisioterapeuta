import ActionButton from "@/src/components/Buttons/ActionButton";
import Container from "@/src/components/Layout/Container";
import ServiceCard from "@/src/components/Services/ServiceCard";
import fetchServiceById from "@/src/lib/api/fetchServiceById";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Serviço",
  description:
    "Página de informações de serviço oferecido pela fisioterapeuta Raionara Nascimento.",
};

interface Params {
  id: string;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  const serviceData = await fetchServiceById(id);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <section className="py-24">
        <Container>
          <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
            Agendamento
          </h1>

          <ServiceCard
            name={serviceData.name}
            duration={serviceData.duration}
            description={serviceData.description}
            imageUrl={serviceData.imageUrl}
          />

          <div className="mt-8 text-start">
            <ActionButton
              href="/servicos"
              text="← Voltar"
              className="inline-flex items-start gap-2 text-sm font-medium text-muted hover:text-primary hover:underline transition-all duration-200 cursor-pointer"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
