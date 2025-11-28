import Image from "next/image";
import Container from "../Layout/Container";

const benefits = [
  "Reduzir dores e tensões",
  "Melhorar a postura e a respiração",
  "Fortalecer corpo e mente",
  "Aumentar a qualidade de vida",
];

export default function CarePathSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-3xl md:text-4xl font-medium text-center text-foreground">
          A Fisioterapia como Caminho de Cuidado
        </h2>

        <p className="text-muted text-sm text-center max-w-2xl mx-auto mt-3">
          A fisioterapia vai muito além da reabilitação — ela é prevenção,
          movimento e autoconhecimento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-[440px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/massage.jpg"
                alt="Raionara Nascimento Fisioterapeuta"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ul className="list-disc flex flex-col gap-6 text-center md:text-left pl-0 md:pl-4">
            {benefits.map((item, idx) => (
              <li
                key={idx}
                className="text-foreground font-medium leading-relaxed mx-auto md:mx-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
