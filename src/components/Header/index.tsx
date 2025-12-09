"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Container from "../Layout/Container";
import { ThemeToggleButton } from "../Layout/ThemeToggleButton";
import { useState, useEffect } from "react";
import { MobileMenu } from "../Layout/MobileMenu";
import UserMenu from "./UserMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/status", { cache: "no-store" });
        const data = await res.json();
        setAuthenticated(data.authenticated);
      } catch {
        setAuthenticated(false);
      }
    }

    checkAuth();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = scrolled
    ? "text-[var(--header-link)] hover:text-[var(--header-link-hover)] transition-colors duration-300"
    : "text-white dark:text-[var(--header-link)] hover:text-[var(--header-link-hover)] transition-colors duration-300";

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-[background-color,backdrop-filter,box-shadow]
          duration-500 ease-out
          ${
            scrolled
              ? "bg-(--header-bg-scrolled) backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
              : "bg-transparent"
          }
        `}
      >
        <Container className="flex items-center justify-between py-6">
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
          <nav className="hidden md:flex gap-8 text-sm lg:text-base font-medium tracking-wide">
            <Link href="/" className={navLinkClass}>
              Início
            </Link>
            <Link href="/sobre" className={navLinkClass}>
              Sobre
            </Link>
            <Link href="/servicos" className={navLinkClass}>
              Serviços
            </Link>
            <Link href="/contato" className={navLinkClass}>
              Contato
            </Link>

            {authenticated ? (
              <UserMenu />
            ) : (
              <Link href="/login" className={navLinkClass}>
                Entrar
              </Link>
            )}
          </nav>

          {/* CTA + Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/servicos#servicos"
              className="hidden md:inline-block px-5 py-2 bg-button-color text-white backdrop-blur-md border border-white/30 rounded text-sm hover:scale-[1.02] transition-all"
            >
              Agendar
            </Link>

            <ThemeToggleButton />

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

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        authenticated={authenticated}
      />
    </>
  );
}
