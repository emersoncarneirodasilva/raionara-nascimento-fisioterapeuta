import { Metadata } from "next";
import HeroSection from "@/src/components/Services/HeroSection";
import ServicesSection from "@/src/components/Services/ServicesSection";
import CtaSection from "@/src/components/Services/CtaSection";
import ScrollToHash from "@/src/utils/ScrollToHash";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Serviços",
  description:
    "Página de serviços oferecidos pela fisioterapeuta Raionara Nascimento.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollToHash />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </>
  );
}
