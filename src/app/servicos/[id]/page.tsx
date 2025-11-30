import Container from "@/src/components/Layout/Container";
import ServiceCard from "@/src/components/Services/ServiceCard";
import fetchServiceById from "@/src/lib/api/fetchServiceById";

interface Params {
  id: string;
}

export default async function ServicoPage({
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
        </Container>
      </section>
    </main>
  );
}
