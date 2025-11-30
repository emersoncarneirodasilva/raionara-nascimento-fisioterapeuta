import { Metadata } from "next";
import HeroSection from "@/src/components/Home/HeroSection";
import ServicesSection from "@/src/components/Home/SericesSection";
import PersonalizedSection from "@/src/components/Home/PersonalizedSection";
import CtaSection from "@/src/components/Home/CtaSection";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Home",
  description: "Site oficial da fisioterapeuta Raionara Nascimento.",
};

export default async function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PersonalizedSection />
      <CtaSection />
    </main>
  );
}
