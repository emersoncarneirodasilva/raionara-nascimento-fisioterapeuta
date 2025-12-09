import { ServiceCardProps } from "@/src/interfaces";
import Image from "next/image";

export default function ServiceCard({
  name,
  duration,
  description,
  imageUrl,
}: ServiceCardProps) {
  return (
    <div className="max-w-xl w-full bg-surface shadow-md rounded-3xl p-6 mx-auto">
      <div className="w-44 h-44 relative mx-auto mb-6 rounded-full overflow-hidden shadow">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-lg font-bold text-(--text-black)">
        Área de atuação:
        <span className="font-normal ml-1">{name}</span>
      </h3>

      <p className="mt-2 text-(--text-black)">
        <span className="font-bold">Duração:</span> {duration}min
      </p>

      <div className="mt-6">
        <h3 className="font-bold text-(--text-black) mb-2">Benefícios:</h3>
        <ul className="list-disc space-y-1 text-(--text-black)">
          {description}
        </ul>
      </div>

      <div className="mt-14 mb-8 flex justify-center">
        <a
          href="https://wa.me/5584988197995"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 text-sm sm:text-base bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer"
        >
          Agendar via WhatsApp
        </a>
      </div>
    </div>
  );
}
