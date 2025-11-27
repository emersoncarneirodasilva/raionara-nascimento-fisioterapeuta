import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "../Layout/Container";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 bg-transparent">
      <Container className="flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <nav className="hidden text-(--text-black) md:flex gap-8 font-medium tracking-wide">
          <Link
            href="/"
            className="hover:text-(--color-secondary-hover) transition-colors"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="hover:text-(--color-secondary-hover) transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#servicos"
            className="hover:text-(--color-secondary-hover) transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#contato"
            className="hover:text-(--color-secondary-hover) transition-colors"
          >
            Contato
          </Link>
          <Link
            href="#"
            className="hover:text-(--color-secondary-hover) transition-colors"
          >
            Entrar
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="#agendar"
            className="hidden md:inline-block px-5 py-2 bg-button-color text-white backdrop-blur-md border border-white/30 rounded text-sm hover:bg-(--bg-button-color)/90 hover:scale-[1.02] transition-all duration-300"
          >
            Agendar
          </Link>

          {/* Botão para ativar o menu */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </header>
  );
}
