import Image from "next/image";
import Container from "../Layout/Container";
import fetchImagesByType from "@/src/lib/api/fetchImagesByType";
import ActionButton from "../Buttons/ActionButton";

export default async function HeroSection() {
  const imagesData = await fetchImagesByType("Imagem Fisioterapia Serviços");

  const imagemFisioterapiaServicos =
    imagesData["Imagem Fisioterapia Serviços"]?.[0] ?? null;

  return (
    <section className="pt-28 pb-24 bg-surface min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Serviços
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imagemFisioterapiaServicos?.url ?? "/images/servicos.jpg"}
                alt="Imagem de serviço de fisioterapia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-start">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Cuide do seu corpo, fortaleça sua saúde.
            </h3>
            <p className="text-base md:text-lg mb-8 text-muted">
              Conheça meus serviços e descubra qual atendimento é ideal para
              você.
            </p>

            <ActionButton
              href="/servicos#servicos"
              text="Ver serviços"
              className="px-8 py-3 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
