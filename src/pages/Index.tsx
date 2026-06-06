import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ROICalculator from "@/components/ROICalculator";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import ClientLogos from "@/components/ClientLogos";

import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Navbar />
      <main>
        <HeroSection />
        <FadeIn direction="up" delay={0.2}>
          <ServicesSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ClientLogos />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <AboutSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <PortfolioSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <PricingSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ROICalculator />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <FAQSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <TestimonialsSection />
        </FadeIn>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
