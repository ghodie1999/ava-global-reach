import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/home/HeroSection";
import { TrustBarSection } from "../components/home/TrustBarSection";
import { WhyAvaSection } from "../components/home/WhyAvaSection";
import { GlobalNetworkSection } from "../components/home/GlobalNetworkSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { ResultsSection } from "../components/home/ResultsSection";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { CaseStudiesSection } from "../components/home/CaseStudiesSection";
import { AboutPreviewSection } from "../components/home/AboutPreviewSection";
import { CTASection } from "../components/home/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AVA Logistics | Global Trade Made Predictable" },
      { name: "description", content: "AVA Logistics provides end-to-end global sourcing, warehousing, inspection, and international logistics services. Partner with us for predictable global trade." },
      { property: "og:title", content: "AVA Logistics | Global Trade Made Predictable" },
      { property: "og:description", content: "End-to-end sourcing, warehousing, inspection and international logistics managed through one accountable partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <WhyAvaSection />
      <GlobalNetworkSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <AboutPreviewSection />
      <CTASection />
    </>
  );
}
