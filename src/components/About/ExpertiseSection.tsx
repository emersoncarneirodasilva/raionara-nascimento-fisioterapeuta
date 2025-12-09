import AboutCard from "../Card/AboutCard";
import Container from "../Layout/Container";
import { HeartHandshake, Brain, Bone, Layers } from "lucide-react";

const areas = [
  {
    icon: HeartHandshake,
    title: "Gerontologia e Saúde da Pessoa Idosa",
    description:
      "Acompanhamento especializado para promover autonomia, funcionalidade e bem-estar na terceira idade.",
    items: [
      "Aumento de força muscular e mobilidade",
      "Melhora do equilíbrio e coordenação",
      "Prevenção de quedas",
      "Promoção do envelhecimento ativo e saudável",
    ],
  },
  {
    icon: Brain,
    title: "Fisioterapia Neurológica",
    description:
      "Reabilitação baseada em evidências, com foco na recuperação funcional e neuroplasticidade.",
    items: [
      "Reabilitação de AVC, Parkinson e neuropatias",
      "Melhora da coordenação e força muscular",
      "Estímulo cognitivo e funcional",
    ],
  },
  {
    icon: Bone,
    title: "Fisioterapia Traumato-Ortopédica",
    description:
      "Recuperação funcional segura e eficiente após lesões ortopédicas ou cirurgias.",
    items: [
      "Recuperação pós-cirúrgica e pós-lesão",
      "Redução de dor e inflamação",
      "Retorno seguro às atividades diárias",
    ],
  },
  {
    icon: Layers,
    title: "Fisioterapia Reumatológica",
    description:
      "Tratamento humanizado para aliviar dores articulares e melhorar a qualidade de vida.",
    items: [
      "Redução da dor e rigidez articular",
      "Melhora da mobilidade e força",
      "Promoção do bem-estar e qualidade de vida",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium text-center text-foreground mb-16">
          Áreas de Atuação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {areas.map((area, idx) => (
            <AboutCard
              key={idx}
              icon={area.icon}
              title={area.title}
              description={area.description}
              items={area.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
