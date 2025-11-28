import { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/SericesSection";
import PersonalizedSection from "@/components/Home/PersonalizedSection";
import CtaSection from "@/components/Home/CtaSection";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Home",
  description: "Site oficial da fisioterapeuta Raionara Nascimento.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PersonalizedSection />
      <CtaSection />
    </main>
  );
}
