import { HomeCard } from "@/components/Card/HomeCard";
import { Container } from "@/components/Layout/Container";
import { Dumbbell, Hand, Target } from "lucide-react";

const servicesData = [
  {
    icon: Hand,
    title: "Terapia Manual",
    text: "Libere dores e tensões musculares com manipulações precisas.",
    href: "/servicos/terapia-manual",
  },
  {
    icon: Dumbbell,
    title: "Reabilitação",
    text: "Planos específicos para recuperação pós-operatória.",
    href: "/servicos/reabilitacao",
  },
  {
    icon: Target,
    title: "Pilates Clínico",
    text: "Fortalecimento e controle corporal para prevenir lesões.",
    href: "/servicos/pilates",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-(--background)">
      <Container>
        <h2 className="text-4xl font-medium text-center mb-16 text-primary">
          Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <HomeCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              text={service.text}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
