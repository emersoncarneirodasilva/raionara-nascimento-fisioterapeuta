import { Metadata } from "next";
import AboutMeSection from "@/components/About/AboutMeSection";
import CarePathSection from "@/components/About/CarePathSection";
import DifferencesSection from "@/components/About/DifferencesSection";
import ExpertiseSection from "@/components/About/ExpertiseSection";
import HighlightBlockSection from "@/components/About/HighlightBlockSection";
import HowItWorksSection from "@/components/About/HowItWorksSection";
import ServiceModalitiesSection from "@/components/About/ServiceModalitiesSection";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Sobre",
  description: "Página sobre a fisioterapeuta Raionara Nascimento.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutMeSection />
      <DifferencesSection />
      <CarePathSection />
      <ServiceModalitiesSection />
      <HowItWorksSection />
      <ExpertiseSection />
      <HighlightBlockSection />
    </main>
  );
}
