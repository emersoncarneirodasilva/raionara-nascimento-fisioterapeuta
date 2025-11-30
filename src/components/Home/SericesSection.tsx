import { HomeCard } from "@/src/components/Card/HomeCard";
import Container from "@/src/components/Layout/Container";
import { Dumbbell, Hand, Target } from "lucide-react";

const servicesData = [
  {
    icon: Hand,
    title: "Terapia Manual",
    text: "Libere dores e tensões musculares com manipulações precisas.",
    href: "/sobre#modalidades_de_atendimento",
  },
  {
    icon: Dumbbell,
    title: "Reabilitação",
    text: "Planos específicos para recuperação pós-operatória.",
    href: "/sobre#modalidades_de_atendimento",
  },
  {
    icon: Target,
    title: "Pilates Clínico",
    text: "Fortalecimento e controle corporal para prevenir lesões.",
    href: "/sobre#modalidades_de_atendimento",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-(--background)">
      <Container>
        <h2 className="text-3xl font-medium md:text-4xl text-center mb-16 text-foreground">
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
