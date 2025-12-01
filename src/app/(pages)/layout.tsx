import "../globals.css";
import type { Metadata } from "next";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta",
  description: "Site oficial da fisioterapeuta Raionara Nascimento.",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
