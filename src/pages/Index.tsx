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

import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FadeIn direction="up" delay={0.2}>
          <ServicesSection />
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
          <ROISection />
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
    </div>
  );
};

export default Index;
