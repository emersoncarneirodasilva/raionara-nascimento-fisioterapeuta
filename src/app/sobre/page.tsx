import { Metadata } from "next";
import AboutMeSection from "@/src/components/About/AboutMeSection";
import CarePathSection from "@/src/components/About/CarePathSection";
import DifferencesSection from "@/src/components/About/DifferencesSection";
import ExpertiseSection from "@/src/components/About/ExpertiseSection";
import HighlightBlockSection from "@/src/components/About/HighlightBlockSection";
import HowItWorksSection from "@/src/components/About/HowItWorksSection";
import ServiceModalitiesSection from "@/src/components/About/ServiceModalitiesSection";
import ScrollToHash from "@/src/components/Layout/ScrollToHash";

export const metadata: Metadata = {
  title: "Raionara Nascimento - Fisioterapeuta - Sobre",
  description: "Página sobre a fisioterapeuta Raionara Nascimento.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollToHash />
      <main className="flex flex-col min-h-screen">
        <AboutMeSection />
        <DifferencesSection />
        <CarePathSection />
        <ServiceModalitiesSection />
        <HowItWorksSection />
        <ExpertiseSection />
        <HighlightBlockSection />
      </main>
    </>
  );
}
