import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import FadeIn from "@/components/FadeIn";

// Lazy-loaded components to improve Largest Contentful Paint (LCP) and Time to Interactive (TTI)
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
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
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
