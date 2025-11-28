import Container from "../Layout/Container";

const steps = [
  {
    number: 1,
    title: "Avaliação Funcional",
    description:
      "Entrevista detalhada sobre histórico, sintomas e objetivos. Testes específicos para diagnóstico funcional e entrega de relatório completo.",
  },
  {
    number: 2,
    title: "Plano de Tratamento",
    description:
      "Desenvolvimento de plano terapêutico com base em evidências científicas, priorizando o movimento funcional e a prevenção.",
  },
  {
    number: 3,
    title: "Orientação e Continuidade",
    description:
      "Ao término do tratamento, o paciente recebe cartilhas e exercícios personalizados para manter os resultados e promover autonomia.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium text-center text-foreground">
          Como Funciona o Atendimento
        </h2>

        <div className="mt-20 flex flex-col items-center gap-20">
          {/* Linha 1 – Etapa 1 e 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center px-4"
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

          {/* Etapa 3 centralizada */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-3 border-primary text-primary text-3xl font-medium mb-6">
              {steps[2].number}
            </div>

            <h3 className="text-xl font-bold text-primary mb-3">
              {steps[2].title}
            </h3>

            <p className="text-muted leading-relaxed">{steps[2].description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
