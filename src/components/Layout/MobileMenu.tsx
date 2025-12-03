"use client";

import Link from "next/link";
import { X, User, Home, Info, Briefcase, Phone, LogIn } from "lucide-react";
import { useState, useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  authenticated: boolean | null;
}

export function MobileMenu({ open, onClose, authenticated }: MobileMenuProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    if (!open) setUserMenuOpen(false);
  }, [open]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  }

  return (
    <>
      {/* Fundo */}
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
        <button onClick={onClose} className="mb-6 hover:text-primary">
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col gap-5 text-lg font-medium">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-primary"
          >
            <Home className="w-5 h-5" /> Início
          </Link>

          <Link
            href="/sobre"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-primary"
          >
            <Info className="w-5 h-5" /> Sobre
          </Link>

          <Link
            href="/servicos"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-primary"
          >
            <Briefcase className="w-5 h-5" /> Serviços
          </Link>

          <Link
            href="/contato"
            onClick={onClose}
            className="flex items-center gap-2 hover:text-primary"
          >
            <Phone className="w-5 h-5" /> Contato
          </Link>

          {!authenticated && (
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center gap-2 hover:text-primary"
            >
              <LogIn className="w-5 h-5" /> Entrar
            </Link>
          )}

          {authenticated && (
            <>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 hover:text-primary"
              >
                <User className="w-5 h-5" /> Perfil
              </button>

              {userMenuOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-3 text-base">
                  <Link
                    href="/perfil"
                    onClick={onClose}
                    className="hover:text-primary"
                  >
                    Meu Perfil
                  </Link>

                  <Link
                    href="/notificacoes"
                    onClick={onClose}
                    className="hover:text-primary"
                  >
                    Notificações
                  </Link>

                  <Link
                    href="/agendamentos"
                    onClick={onClose}
                    className="hover:text-primary"
                  >
                    Agendamentos
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      onClose();
                    }}
                    className="text-left text-(--color-error) hover:bg-(--color-error)/10"
                  >
                    Sair
                  </button>
                </div>
              )}
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
