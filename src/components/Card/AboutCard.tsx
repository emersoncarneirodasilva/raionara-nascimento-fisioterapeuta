import { AboutCardProps } from "@/src/interfaces";

export default function AboutCard({
  icon: Icon,
  title,
  description,
  items,
}: AboutCardProps) {
  return (
    <div className="bg-surface rounded-3xl shadow-lg p-10 max-w-xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Icon className="w-16 h-16 text-primary mb-6" />

        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
          {title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-8 max-w-xl">
          {description}
        </p>

        <ul className="list-disc pl-4 text-left max-w-xl w-full flex flex-col gap-3 text-foreground">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
