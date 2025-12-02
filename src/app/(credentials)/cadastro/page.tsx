import Image from "next/image";
import { Mail, Lock, User, Phone } from "lucide-react";
import { Metadata } from "next";
import ErrorToastFromParams from "@/src/components/Error/ErrorToastFromParams";
import Link from "next/link";
import { registerUser } from "./actions/registerAction";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Cadastro",
  description:
    "Página de cadastro do site da fisioterapeuta Raionara Nascimento.",
};

export default async function RegisterPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <ErrorToastFromParams />

      {/* Left Side - Cadastro Form */}
      <section className="w-full flex items-center justify-center p-6 sm:p-8 bg-background">
        <article className="w-full max-w-md sm:max-w-lg">
          <header>
            <h1 className="text-4xl sm:text-5xl text-center text-foreground font-medium mb-4">
              CADASTRO
            </h1>
            <p className="mb-6 sm:mb-8 text-center text-muted text-sm sm:text-base">
              Para agendar suas sessões, crie sua conta preenchendo os campos
              abaixo
            </p>
          </header>

          <form action={registerUser} className="space-y-4">
            {/* Nome Completo */}
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Nome completo
              </label>
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <User size={20} />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome completo"
                required
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* E-mail */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <Mail size={20} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Telefone */}
            <div className="relative">
              <label htmlFor="phone" className="sr-only">
                Telefone
              </label>
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefone"
                required
                pattern="\d*"
                inputMode="numeric"
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Senha */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <Lock size={20} />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                required
                minLength={6}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-button-color text-white rounded border border-white/40 hover:opacity-80 hover:bg-primary hover:text-white transition-all font-medium cursor-pointer"
            >
              Criar Conta
            </button>
          </form>

          {/* Links fora do form */}
          <div className="mt-4 sm:mt-6 text-center text-sm text-muted">
            Já possui uma conta?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:opacity-80 transition-colors"
            >
              Faça login aqui
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <Link
              href="/"
              className="text-muted text-sm font-medium hover:opacity-80 transition-colors"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </article>
      </section>

      {/* Right Side - Image */}
      <aside className="relative w-full h-64 sm:h-96 md:h-[600px] lg:h-screen hidden lg:block">
        <Image
          src="/images/register.jpg"
          alt="A cada sessão, um passo real em direção ao seu melhor"
          fill
          className="object-cover"
          priority
        />
      </aside>
    </main>
  );
}
