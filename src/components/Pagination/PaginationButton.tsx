import Link from "next/link";

export function PaginationButton({
  href,
  disabled,
  direction,
}: {
  href: string;
  disabled: boolean;
  direction: "prev" | "next";
}) {
  const label = direction === "prev" ? "← Anterior" : "Próxima →";

  if (disabled) {
    return (
      <span className="px-4 py-2 rounded-lg border bg-surface text-muted border-(--color-secondary) cursor-not-allowed opacity-60">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="
        px-4 py-2 rounded-lg border
        bg-surface-alt
        text-foreground
        border-(--color-secondary)

        transition-all duration-200

        hover:bg-surface
        hover:-translate-y-0.5
        hover:shadow-sm

        active:translate-y-0

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--color-secondary)
      "
    >
      {label}
    </Link>
  );
}
