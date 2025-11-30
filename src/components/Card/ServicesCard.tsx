import Image from "next/image";
import Link from "next/link";

interface ServicesCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function ServicesCard({
  id,
  image,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div className="bg-surface rounded-3xl shadow-lg p-10 pb-14 max-w-sm mx-auto flex flex-col text-center">
      <div className="flex flex-col items-center flex-1">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 hover:scale-[1.02] transition-all duration-300">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
          {description}
        </p>
      </div>

      <Link href={`/servicos/${id}`}>
        <button className="w-fit self-center mt-6 px-6 py-2 border-2 rounded-lg text-sm text-primary font-medium hover:scale-[1.02] cursor-pointer transition-all duration-300">
          Agendar
        </button>
      </Link>
    </div>
  );
}
