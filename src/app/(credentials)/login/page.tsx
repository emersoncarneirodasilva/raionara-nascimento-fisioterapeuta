import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { Metadata } from "next";
import { handleLogin } from "./actions/loginAction";
import ErrorToastFromParams from "@/src/components/Error/ErrorToastFromParams";
import Link from "next/link";
import SuccessToastAutoRedirect from "@/src/components/Success/SuccessToastAutoRedirect";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Login",
  description: "Página de login do site da fisioterapeuta Raionara Nascimento.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <ErrorToastFromParams />
      <SuccessToastAutoRedirect />

      {/* Left Side - Login Form */}
      <section className="w-full flex items-center justify-center p-6 sm:p-8 bg-background">
        <article className="w-full max-w-md sm:max-w-lg">
          <header>
            <h1 className="text-4xl sm:text-5xl text-center text-foreground font-medium mb-4">
              LOGIN
            </h1>
            <p className="mb-6 sm:mb-8 text-center text-muted text-sm sm:text-base">
              Para poder fazer o seu agendamento, por favor entre com seu e-mail
              e senha
            </p>
          </header>

          <form action={handleLogin} className="space-y-4">
            {/* Email Input */}
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

            {/* Password Input */}
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
              Entrar
            </button>
          </form>

          {/* Links fora do form */}
          <div className="mt-4 sm:mt-6 text-right text-sm">
            <Link
              href="/redefinir-senha"
              className="font-semibold text-primary hover:opacity-80 transition-colors"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <div className="mt-4 sm:mt-6 text-center text-sm text-muted">
            Não possui uma conta?{" "}
            <Link
              href="/cadastro"
              className="font-semibold text-primary hover:opacity-80 transition-colors"
            >
              Crie uma agora aqui
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
          src="/images/login.jpg"
          alt="A cada sessão, um passo real em direção ao seu melhor"
          fill
          className="object-cover"
          priority
        />
      </aside>
    </main>
  );
}
