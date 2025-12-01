"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Container from "../Layout/Container";
import { ThemeToggleButton } from "../Layout/ThemeToggleButton";
import { useState } from "react";
import { MobileMenu } from "../Layout/MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-6 bg-transparent">
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative bg-white/20 rounded-sm backdrop-blur-sm overflow-hidden">
                <Image
                  src="/images/logo.jpeg"
                  alt="Logo Raionara Nascimento"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div className="leading-tight text-primary font-bold">
                Raionara Nascimento
                <span className="block text-xs font-light opacity-80">
                  Fisioterapeuta
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden text-(--text-black) md:flex gap-8 text-sm lg:text-base font-medium tracking-wide">
            <Link href="/" className="hover:text-(--color-secondary-hover)">
              Início
            </Link>
            <Link
              href="/sobre"
              className="hover:text-(--color-secondary-hover)"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="hover:text-(--color-secondary-hover)"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="hover:text-(--color-secondary-hover)"
            >
              Contato
            </Link>
            <Link href="#" className="hover:text-(--color-secondary-hover)">
              Entrar
            </Link>
          </nav>

          {/* CTA + Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/servicos#servicos"
              className="hidden md:inline-block px-5 py-2 bg-button-color text-white backdrop-blur-md border border-white/30 rounded text-sm hover:bg-(--bg-button-color)/90 hover:scale-[1.02] transition-all duration-300"
            >
              Agendar
            </Link>

            <ThemeToggleButton />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
