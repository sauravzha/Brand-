import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ROISection from "@/components/ROISection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NewsletterSection from "@/components/NewsletterSection";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import ClientLogos from "@/components/ClientLogos";
import ProcessSection from "@/components/ProcessSection";
import TrustBadges from "@/components/TrustBadges";
import ROICalculator from "@/components/ROICalculator";
import FreeResources from "@/components/FreeResources";
import ServiceComparison from "@/components/ServiceComparison";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";

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
          <ProcessSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <TrustBadges />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <PortfolioSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <BeforeAfterShowcase />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <PricingSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ServiceComparison />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ROISection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ROICalculator />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <CaseStudiesSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <TestimonialsSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <FAQSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <FreeResources />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <ContactSection />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <SocialMediaFeed />
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <NewsletterSection />
        </FadeIn>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
