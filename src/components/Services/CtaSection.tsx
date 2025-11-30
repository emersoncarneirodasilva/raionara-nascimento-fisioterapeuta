import Link from "next/link";
import Container from "../Layout/Container";

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <Container>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-6xl mx-auto text-center">
          Todos os atendimentos são personalizados conforme suas necessidades.
        </p>

        <p className="text-sm lg:text-base font-medium leading-relaxed max-w-5xl mx-auto text-center mt-4">
          Eu avalio cada paciente com atenção, carinho e base científica,
          oferecendo reabilitação eficaz e humanizada.
        </p>

        <div className="flex justify-center mt-10">
          <Link href="/sobre#modalidades_de_atendimento">
            <button className="px-8 py-3 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer">
              Saiba como funciona o atendimento →
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
