import Image from "next/image";
import Container from "@/src/components/Layout/Container";
import Link from "next/link";
import fetchImagesByType from "@/src/lib/api/fetchImagesByType";

export default async function HeroSection() {
  const imagesData = await fetchImagesByType("Imagem Fundo Home");

  const imagemFundoHome = imagesData["Imagem Fundo Home"]?.[0] ?? null;

  return (
    <section className="relative h-screen w-full flex items-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagemFundoHome?.url ?? "/images/main.jpg"}
          alt="Fisioterapia"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
      </div>

      <Container className="relative z-10 text-[#efefef] mt-20">
        <h1 className="text-4xl md:text-6xl font-medium max-w-3xl leading-tight mb-6">
          BEM-ESTAR E MOVIMENTO COM FISIOTERAPIA PERSONALIZADA.
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-xl mb-8 font-light leading-9">
          Recupere sua qualidade de vida com a Fisioterapeuta Raionara
          Nascimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/servicos#servicos">
            <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/40 text-white rounded hover:bg-white/10 hover:text-primary transition-all font-medium cursor-pointer">
              Agende agora
            </button>
          </Link>
          <a
            href="https://wa.me/5584988197995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 text-black font-normal hover:underline underline-offset-4 cursor-pointer">
              Entre em Contato
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
