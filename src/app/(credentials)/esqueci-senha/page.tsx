import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Mail } from "lucide-react";
import ErrorToastFromParams from "@/src/components/Error/ErrorToastFromParams";
import { handleForgotPassword } from "./actions/forgotAction";
import FormActionButton from "@/src/components/Buttons/FormActionButton";

export const metadata: Metadata = {
  title: "Recuperar sua senha - Raionara Nascimento",
  description:
    "Página para recuperação de senha do site da fisioterapeuta Raionara Nascimento.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <ErrorToastFromParams />

      {/* Left Side - Form */}
      <section className="w-full flex items-center justify-center p-6 sm:p-8 bg-background">
        <article className="w-full max-w-md sm:max-w-lg">
          <header>
            <h1 className="text-4xl sm:text-5xl text-center text-foreground font-medium mb-4">
              Recuperar sua senha
            </h1>
            <p className="mb-6 sm:mb-8 text-center text-muted text-sm sm:text-base">
              Digite seu e-mail cadastrado abaixo e enviaremos um link para
              redefinir sua senha.
            </p>
          </header>

          <form action={handleForgotPassword} className="space-y-4">
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

            {/* Submit Button */}
            <FormActionButton
              text="Enviar link de redefinição"
              loadingText="Enviando..."
              className="w-full py-3 sm:py-4 bg-button-color text-white rounded border border-white/40 hover:opacity-80 hover:bg-primary transition-all font-medium cursor-pointer"
            />
          </form>

          {/* Links */}
          <div className="mt-4 sm:mt-6 text-right text-sm">
            <Link
              href="/login"
              className="font-semibold text-primary hover:opacity-80 transition-colors"
            >
              ← Voltar para o login
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
