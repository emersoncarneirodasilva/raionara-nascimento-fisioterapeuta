import HeroSection from "@/components/Home/Hero/HeroSection";
import ServicesSection from "@/components/Home/Services/SericesSection";
import PersonalizedSection from "@/components/Home/Personalized/PersonalizedSection";
import CtaSection from "@/components/Home/CTA/CtaSection";
import { Metadata } from "next";

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
