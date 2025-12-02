import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/brandyatra-logo.png";
import TrendChart3D from "./3d/TrendChart3D";
import RotatingRings3D from "./3d/RotatingRings3D";
import GrowthSphere3D from "./3d/GrowthSphere3D";
import ParticleNetwork3D from "./3d/ParticleNetwork3D";
import FloatingIcons3D from "./3d/FloatingIcons3D";

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3D Components */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-[400px] pointer-events-none opacity-40">
        <TrendChart3D />
      </div>
      <div className="absolute left-0 top-10 w-full md:w-1/2 h-[400px] pointer-events-none opacity-30">
        <RotatingRings3D />
      </div>
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-[500px] pointer-events-none opacity-40">
        <FloatingIcons3D />
      </div>
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <ParticleNetwork3D />
      </div>
      <div className="absolute left-0 bottom-20 w-full md:w-1/3 h-[300px] pointer-events-none opacity-20">
        <GrowthSphere3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-slide-in">
          {/* Logo Icon */}
          <div className="inline-flex items-center justify-center">
            <img src={logo} alt="Brandयात्रा Logo" className="h-40 sm:h-52 w-40 sm:w-52 rounded-full object-cover" />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight">
              Transforming Brands into
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight text-gradient">
              Digital Journeys
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We elevate startups with creative marketing, automation, and storytelling — combining data, design, and strategy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
            >
              🚀 Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              💡 Get Free Consultation
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 max-w-4xl mx-auto">
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient font-poppins">
                <AnimatedCounter end={50} />+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">Campaigns Launched</div>
            </div>
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient font-poppins">
                <AnimatedCounter end={2} />M+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">Audience Reach</div>
            </div>
            <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient font-poppins">
                <AnimatedCounter end={90} />%
              </div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
