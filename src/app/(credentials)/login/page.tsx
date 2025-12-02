import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { Metadata } from "next";
import { handleLogin } from "./actions/loginAction";
import ErrorToastFromParams from "@/src/components/Error/ErrorToastFromParams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Login",
  description: "Página de login do site da fisioterapeuta Raionara Nascimento.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <ErrorToastFromParams />
      {/* Left Side - Login Form */}
      <section className="w-full h-full flex items-center justify-center p-8 bg-background">
        <article className="w-full max-w-lg">
          <header>
            <h1 className="text-5xl text-center text-foreground font-medium mb-4">
              LOGIN
            </h1>
            <p className="mb-8 text-center text-muted">
              Para poder fazer o seu agendamento, por favor entre com seu e-mail
              e senha
            </p>
          </header>

          <form className="space-y-4" action={handleLogin}>
            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full pl-12 pr-4 py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 text-muted -translate-y-1/2">
                <Lock size={20} />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
                minLength={6}
                className="w-full pl-12 pr-4 py-4 bg-surface text-foreground placeholder-text-muted border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link href="/redefinir-senha">
                <button
                  type="button"
                  className="text-sm font-semibold text-primary hover:opacity-80 transition-colors cursor-pointer"
                >
                  Esqueceu a senha?
                </button>
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-button-color text-white rounded border border-white/40 hover:opacity-80 hover:bg-primary hover:text-white transition-all font-medium cursor-pointer"
            >
              Entrar
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm mt-6 text-muted">
              Não possui uma conta?{" "}
              <Link href="/cadastro">
                <button
                  type="button"
                  className="font-semibold text-primary hover:opacity-80 transition-colors cursor-pointer"
                >
                  Crie uma agora aqui
                </button>
              </Link>
              .
            </p>
            <div className="text-center mt-8">
              <Link
                href="/"
                className="text-muted text-sm font-medium hover:opacity-80 transition-colors"
              >
                ← Voltar para a página inicial
              </Link>
            </div>
          </form>
        </article>
      </section>

      {/* Right Side - Image */}
      <aside className="relative w-full h-screen hidden lg:block">
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
