import { buildQuery } from "@/src/utils/buildQuery";
import { PaginationButton } from "./PaginationButton";

interface PaginationProps {
  page: number;
  totalPages: number;
  limit: number;
  search?: string;
  isRead?: boolean;
}

export default function Pagination({
  page,
  totalPages,
  limit,
  search,
  isRead,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <PaginationButton
        href={buildQuery({ page: page - 1, limit, search, isRead })}
        disabled={page === 1}
        direction="prev"
      />

      <span className="text-sm px-4 py-2 rounded-lg border bg-surface-alt text-foreground border-(--color-secondary)">
        Página {page} de {totalPages}
      </span>

      <PaginationButton
        href={buildQuery({ page: page + 1, limit, search, isRead })}
        disabled={page === totalPages}
        direction="next"
      />
    </div>
  );
}
