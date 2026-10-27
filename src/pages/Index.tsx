import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";

// Lazy-loaded components for optimal performance
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const TrustBadges = lazy(() => import("@/components/TrustBadges"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const BeforeAfterShowcase = lazy(() => import("@/components/BeforeAfterShowcase"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const SocialMediaFeed = lazy(() => import("@/components/SocialMediaFeed"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionSpinner = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <StructuredData />
      <Navbar />
      <main>
        {/* 1. Hero with asymmetric layout and real metrics */}
        <HeroSection />

        <Suspense fallback={<SectionSpinner />}>
          {/* 2. Immediate Social Proof marquee */}
          <ClientLogos />

          {/* 3. Industry Accreditations Strip (Meta, Google, Shopify, HubSpot) */}
          <TrustBadges />

          {/* 4. Core Services & Specializations */}
          <ServicesSection />

          {/* 5. Before vs After Client Transformations */}
          <BeforeAfterShowcase />

          {/* 6. Execution Methodology (Discovery to Scale) */}
          <ProcessSection />

          {/* 7. Featured Client Case Studies */}
          <PortfolioSection />

          {/* 8. Interactive Growth & ROI Engine */}
          <ROICalculator />

          {/* 9. Verified Client Testimonials */}
          <TestimonialsSection />

          {/* 10. Brand Story, Philosophy & Milestones */}
          <AboutSection />

          {/* 11. Transparent Pricing Tiers */}
          <PricingSection />

          {/* 12. Questions & Objections Answered */}
          <FAQSection />

          {/* 13. Behind The Scenes & Live Experiments */}
          <SocialMediaFeed />

          {/* 14. Final High-Intent Audit Booking */}
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
