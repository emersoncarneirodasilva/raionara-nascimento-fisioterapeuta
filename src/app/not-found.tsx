"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-surface text-foreground transition-colors duration-300">
      <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] font-bold text-primary mb-4 select-none leading-none text-center">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka-sans font-semibold mb-4 text-center px-2">
        Página não encontrada
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-muted text-center max-w-md mb-8 px-2">
        A página que você está procurando não existe ou foi removida.
      </p>

      <Link
        href="/"
        className="px-6 sm:px-8 py-2 sm:py-3 bg-button-color backdrop-blur-md border border-white/40 text-white rounded hover:opacity-80 hover:text-primary transition-all font-medium cursor-pointer"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
