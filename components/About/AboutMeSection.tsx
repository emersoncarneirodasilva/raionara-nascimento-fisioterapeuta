import Image from "next/image";
import Container from "../Layout/Container";

export default function AboutMeSection() {
  return (
    <section className="pt-28 pb-24 bg-surface min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Quem Sou
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Raionara Nascimento
            </h3>

            <p className="text-base font-semibold mb-6 text-muted">
              Fisioterapeuta | Pós-graduanda em Gerontologia e Saúde da Pessoa
              Idosa | Especializada em Coluna Lombar
            </p>

            <p className="text-muted mb-4 leading-relaxed">
              Sou fisioterapeuta e pós-graduanda em Fisioterapia em Gerontologia
              e Saúde da Pessoa Idosa, especializada em coluna lombar, o que me
              permite oferecer um atendimento especializado, seguro e
              humanizado.
            </p>

            <p className="text-muted leading-relaxed">
              Minha missão é promover saúde e movimento, proporcionando
              atendimentos individualizados, personalizados e focados no
              bem-estar e na qualidade de vida de cada paciente. Busco
              proporcionar experiências inesquecíveis, com atenção, empatia e
              carinho.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-[440px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/raionara-nascimento-fisioterapeuta.jpg"
                alt="Raionara Nascimento Fisioterapeuta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
