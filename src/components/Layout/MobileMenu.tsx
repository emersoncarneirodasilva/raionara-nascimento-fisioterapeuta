"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Fundo escuro */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 
          bg-surface text-foreground
          z-50 shadow-xl p-6 border-l border-(--color-secondary)/25
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={onClose}
          className="
            mb-6 text-foreground hover:text-primary transition-colors
          "
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col gap-5 text-lg font-medium">
          <Link
            href="/"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            Início
          </Link>

          <Link
            href="/sobre"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            Sobre
          </Link>

          <Link
            href="/servicos"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            Serviços
          </Link>

          <Link
            href="/contato"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            Contato
          </Link>

          <Link
            href="/"
            onClick={onClose}
            className="hover:text-primary transition-colors"
          >
            Entrar
          </Link>
        </nav>
      </aside>
    </>
  );
}
