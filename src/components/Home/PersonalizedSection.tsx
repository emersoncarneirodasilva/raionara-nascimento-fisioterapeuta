import Image from "next/image";
import Container from "@/src/components/Layout/Container";
import fetchImagesByType from "@/src/lib/api/fetchImagesByType";

const data = [
  {
    number: "1",
    title: "Avaliação personalizada",
    text: "Cada paciente é único. Iniciamos com uma avaliação detalhada.",
  },
  {
    number: "2",
    title: "Tratamento individualizado",
    text: "Elaboro um plano que considera seu corpo e rotina.",
  },
  {
    number: "3",
    title: "Acompanhamento contínuo",
    text: "A evolução é acompanhada de perto em cada sessão.",
  },
  {
    number: "4",
    title: "Orientações para o dia a dia",
    text: "Exercícios para casa, garantindo resultados na rotina.",
  },
];

export default async function PersonalizedSection() {
  const imagesData = await fetchImagesByType("Imagem Fisioterapia Home");

  const imagemFisiotarapiaHome =
    imagesData["Imagem Fisioterapia Home"]?.[0] ?? null;

  return (
    <section className="py-24 bg-surface">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium md:text-4xl text-foreground mb-2">
            Fisioterapia personalizada
          </h2>
          <p className="text-muted text-sm max-w-2xl mx-auto">
            Mais do que aliviar dores, meu objetivo é promover movimento,
            equilíbrio e bem-estar duradouro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={imagemFisiotarapiaHome?.url ?? "/images/main2.jpg"}
              alt="Tratamento Fisioterapia"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {data.map((item) => (
              <div key={item.number} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-3 border-primary text-primary flex items-center justify-center text-3xl font-light mb-4">
                  {item.number}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted text-center leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
