import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";
import Container from "../Layout/Container";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative bg-white/20 rounded-sm backdrop-blur-sm overflow-hidden">
              <Image
                src="/images/logo.jpeg"
                alt="Logo Raionara Nascimento"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="text-primary">
              <h3 className="font-bold leading-none">Raionara Nascimento</h3>{" "}
              <p className="text-xs text-muted font-light opacity-80">
                Fisioterapeuta
              </p>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-4 text-xs font-medium text-muted uppercase tracking-wider md:flex-row md:gap-8">
            <Link
              href="/"
              className=" hover:underline transition-colors underline-offset-4"
            >
              Início
            </Link>
            <Link href="/sobre" className=" hover:underline transition-colors">
              Sobre
            </Link>
            <Link
              href="/servicos"
              className=" hover:underline transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className=" hover:underline transition-colors"
            >
              Contato
            </Link>
            <Link href="#" className=" hover:underline transition-colors">
              Entrar
            </Link>
          </nav>
        </div>

        <div className="border-t border-gray-100 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted text-center">
          <div className="flex gap-4">
            <Instagram className="w-4 h-4 hover:scale-[1.1] cursor-pointer transition-all duration-300" />
            <Facebook className="w-4 h-4 hover:scale-[1.1] cursor-pointer transition-all duration-300" />
            <Mail className="w-4 h-4 hover:scale-[1.1] cursor-pointer transition-all duration-300" />
          </div>

          <p>
            &copy; Copyright {new Date().getFullYear()} | Todos os direitos
            reservados
          </p>
        </div>
      </Container>
    </footer>
  );
}
