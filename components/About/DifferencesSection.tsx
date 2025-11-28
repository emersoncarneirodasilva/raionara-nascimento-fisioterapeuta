import Container from "../Layout/Container";

const steps = [
  {
    number: 1,
    title: "Planos terapêuticos personalizados",
    description:
      "Cada tratamento é planejado de forma exclusiva, respeitando a história, os limites e os objetivos de cada paciente.",
  },
  {
    number: 2,
    title: "Atendimento técnico e humanizado",
    description:
      "Integro conhecimento científico e empatia para oferecer um cuidado que trata o corpo e acolhe o indivíduo.",
  },
  {
    number: 3,
    title: "Equipamentos para reabilitação em casa",
    description:
      "Utilizo recursos e forneço orientações para que o paciente continue seu progresso em casa com segurança.",
  },
  {
    number: 4,
    title: "Cartilhas e exercícios personalizados",
    description:
      "Desenvolvo materiais e exercícios específicos para o acompanhamento individual e manutenção dos resultados.",
  },
  {
    number: 5,
    title: "Escuta atenta e acompanhamento próximo",
    description:
      "Cada sessão é conduzida com atenção genuína, garantindo uma comunicação clara e apoio em cada etapa do processo.",
  },
  {
    number: 6,
    title: "Atendimento presencial e online",
    description:
      "Consultas adaptadas à rotina de cada pessoa, mantendo a mesma qualidade e acolhimento em qualquer formato.",
  },
];

export default function DifferencesSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl text-foreground mb-16">
          Meu Diferencial
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-3 border-primary text-primary text-3xl font-medium mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
