import fetchProfessionals from "@/src/lib/api/fetchProfessionals";
import ServicesCard from "../Card/ServicesCard";
import Container from "../Layout/Container";
import fetchServices from "@/src/lib/api/fetchServicesOnProfessional";

export default async function ServicesSection() {
  const { professionals } = await fetchProfessionals();
  const services = await fetchServices(professionals[0].id);

  return (
    <section id="servicos" className="py-24 bg-background scroll-mt-21">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Áreas de Atuação
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServicesCard
              key={service.id}
              id={service.id}
              image={service.imageUrl ?? "/images/service-default.jpg"}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
