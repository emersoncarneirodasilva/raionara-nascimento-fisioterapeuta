import AboutCard from "../Card/AboutCard";
import Container from "../Layout/Container";
import { Home, Laptop } from "lucide-react";

export default function ServiceModalitiesSection() {
  return (
    <section className="py-28 bg-background">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium text-center text-foreground">
          Modalidades de Atendimento
        </h2>

        <p className="text-muted text-center max-w-2xl mx-auto mt-3">
          Ofereço atendimentos presenciais em domicílio e online, garantindo
          flexibilidade e conforto para cada paciente.
        </p>

        <div className="flex flex-col md:flex-row gap-20 mt-20">
          {/* CARD 1 */}
          <AboutCard
            icon={Home}
            title="Atendimento Presencial Domiciliar"
            description="Sessões individualizadas com duração média de 50 minutos, com todos os equipamentos necessários para avaliação e tratamento. Inclui uma avaliação funcional completa seguida de um plano personalizado."
            items={[
              "Conforto e segurança do lar",
              "Economia de tempo e deslocamento",
              "Atendimento acolhedor e observação no ambiente real",
              "Equipamentos utilizados: bola suíça, faixas elásticas, caneleiras, halteres, cones, bastão, step, eletroestimulação, oxímetro, tensiômetro, entre outros",
            ]}
          />

          {/* CARD 2 */}
          <AboutCard
            icon={Laptop}
            title="Atendimento Online"
            description="Realizado por teleconsulta (avaliação e orientação) e telemonitoramento para evolução de quadros crônicos ou manutenção de resultados."
            items={[
              "Acesso em qualquer localidade",
              "Flexibilidade para rotinas diferentes",
              "Redução de custos e otimização de tempo",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
