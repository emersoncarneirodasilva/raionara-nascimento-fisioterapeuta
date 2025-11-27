import { ArrowRight, LucideIcon } from "lucide-react";

type HomeCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

export function HomeCard({ icon: Icon, title, text, href }: HomeCardProps) {
  return (
    <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
      <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />{" "}
      <h3 className="text-lg font-bold mb-3 text-primary">{title}</h3>
      <p className="text-sm text-muted mb-6 leading-relaxed">{text}</p>
      <a
        href={href}
        className="text-xs uppercase tracking-widest border-2 border-(--color-primary) px-4 py-2 rounded hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        Saiba Mais <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}
