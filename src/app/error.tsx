"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ErrorProps } from "../interfaces";

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Erro inesperado:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-surface text-foreground transition-colors duration-300">
      <h1 className="text-[10rem] md:text-[12rem] font-bold text-primary mb-4 select-none">
        ⚠️
      </h1>

      <h2 className="text-3xl md:text-4xl font-fredoka-sans font-semibold mb-4 text-center px-2">
        Oops! Algo deu errado
      </h2>

      <p className="text-lg md:text-xl text-muted text-center max-w-md mb-8 px-2">
        Ocorreu um erro inesperado. Tente novamente ou volte para a página
        inicial.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-button-color text-white rounded-md font-medium hover:opacity-80 hover:text-primary transition-all cursor-pointer"
        >
          Tentar Novamente
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-surface-alt text-foreground border border-secondary rounded-md font-medium hover:bg-surface hover:text-primary transition-all cursor-pointer"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
