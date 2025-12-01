import Container from "@/src/components/Layout/Container";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 bg-background">
      <Container className="text-center max-w-3xl">
        <h2 className="text-3xl font-medium md:text-4xl text-foreground mb-6">
          Seu movimento começa com uma decisão
        </h2>
        <p className="text-muted mb-10 leading-relaxed text-lg">
          Cada corpo tem um ritmo. O meu papel é te ajudar a reencontrar o seu
          movimento, com segurança e acompanhamento profissional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/servicos#servicos">
            <button className="px-8 py-3 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer">
              Agendar uma sessão
            </button>
          </Link>
          <a
            href="https://wa.me/5584988197995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 text-primary font-normal hover:underline underline-offset-4 cursor-pointer">
              Entre em Contato
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
