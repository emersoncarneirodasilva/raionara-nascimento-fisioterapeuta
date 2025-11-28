import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Serviços",
  description: "Página de serviços da fisioterapeuta Raionara Nascimento.",
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Serviços</h1>
    </main>
  );
}
