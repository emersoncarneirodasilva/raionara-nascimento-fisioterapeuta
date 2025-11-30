import Container from "../Layout/Container";

export default function HighlightBlockSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <Container>
        <p className="text-md md:text-lg lg:text-xl font-medium leading-relaxed max-w-5xl mx-auto text-center">
          Cada atendimento é uma oportunidade de transformar vidas, promovendo
          saúde, movimento e qualidade de vida.
        </p>
        <p className="text-md md:text-lg lg:text-xl font-medium leading-relaxed max-w-5xl mx-auto text-center mt-4">
          Meu compromisso é oferecer um atendimento profissional, acolhedor e
          inesquecível, com evolução real em cada etapa do tratamento.
        </p>
      </Container>
    </section>
  );
}
