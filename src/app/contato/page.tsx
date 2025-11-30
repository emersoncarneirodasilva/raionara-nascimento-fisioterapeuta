import Container from "@/src/components/Layout/Container";
import fetchBusinessHours from "@/src/lib/api/fetchBusinessHours";
import fetchImagesByType from "@/src/lib/api/fetchImagesByType";
import { formatBusinessHours } from "@/src/utils/formatBusinessHours";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Contato",
  description: "Página de contatos da fisioterapeuta Raionara Nascimento.",
};

export default async function ContactSection() {
  const image = await fetchImagesByType("Imagem Raionara Perfil");
  const businessHours = await fetchBusinessHours();

  const imagemRaionaraPerfil = image["Imagem Raionara Perfil"]?.[0] ?? null;

  const formattedBusinessHours = formatBusinessHours(businessHours);

  return (
    <section className="pt-28 pb-24 bg-background min-h-screen">
      <Container>
        <h1 className="text-3xl text-center font-medium md:text-4xl mb-16 text-foreground">
          Contato
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-start space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Entre em contato e marque seu atendimento comigo.
            </h3>

            <div className="text-muted text-base md:text-lg space-y-2">
              <p>
                <span className="font-bold text-foreground">
                  Telefone / WhatsApp:
                </span>{" "}
                (84) 98804-1681
              </p>
              <p>
                <span className="font-bold text-foreground">E-mail:</span>{" "}
                contato@raionarafisio.com.br
              </p>
              <p>
                <span className="font-bold text-foreground">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/raionarafisio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all"
                >
                  @raionarafisio
                </a>
              </p>
            </div>

            <div className="text-base md:text-lg text-muted">
              <p className="font-bold text-foreground mb-2">
                Horário de atendimento:
              </p>
              <ul className="list-disc list-inside space-y-1">
                {formattedBusinessHours.map((day) => (
                  <li key={day.id}>
                    {day.weekdayName}: {day.startTime} às {day.endTime}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={
                  imagemRaionaraPerfil?.url ??
                  "/images/raionara-nascimento-fisioterapeuta.jpg"
                }
                alt="Imagem relacionada ao contato"
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
