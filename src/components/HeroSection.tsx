import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import logo from "@/assets/brandyatra-logo.png";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
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
  }, [end, duration, hasStarted]);

  return <div ref={ref}><span>{count.toLocaleString()}</span>{suffix}</div>;
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesClick = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-60 animate-float"
          style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)' }}
        />
        <div 
          className="absolute top-1/4 -right-24 w-[650px] h-[650px] rounded-full blur-[150px] opacity-50 animate-float"
          style={{ background: 'radial-gradient(circle, rgba(255, 120, 31, 0.35), transparent 70%)', animationDelay: '2.5s' }}
        />
        <div 
          className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] rounded-full blur-[130px] opacity-40 animate-float"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)', animationDelay: '4s' }}
        />
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content — 7 cols */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* 3D Glass Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill-3d border border-white/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-orange-500 to-pink-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground/90">
                Performance Marketing & Brand Architecture
              </span>
            </div>

            {/* Headline with 3D gradient text */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-poppins tracking-tight leading-[1.08] text-foreground">
                We build brands
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-poppins tracking-tight leading-[1.08] text-foreground">
                that people
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-poppins tracking-tight leading-[1.08] text-gradient">
                actually remember.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Brandयात्रा crafts high-converting digital acquisition pipelines, thumb-stopping creative campaigns, and sustainable unit economics for ambitious startups.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="btn-3d-gradient text-white text-base sm:text-lg font-bold px-8 py-6 rounded-2xl border border-white/30 group"
              >
                <span>Schedule Growth Audit</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button
                onClick={handleServicesClick}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-card-3d text-foreground/90 hover:text-foreground transition-all duration-300 group text-sm sm:text-base font-semibold"
              >
                <span className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Play className="w-3.5 h-3.5 ml-0.5 text-primary" />
                </span>
                <span>Explore Capabilities</span>
              </button>
            </div>

            {/* Trust Micro-Row */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Meta & Google Certified
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-orange-400" /> ₹10Cr+ Ad Spend Managed
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" /> 100% Data Confidentiality
              </span>
            </div>
          </div>

          {/* Right Side — 5 cols: 3D Glassmorphic Showcase */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Floating Orbiting 3D Badge (Top Right) */}
              <div className="absolute -top-10 -right-6 z-30 animate-float hidden sm:block">
                <div className="glass-card-3d p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 shadow-[0_15px_35px_-5px_rgba(255,120,31,0.3)]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Average ROAS</p>
                    <p className="text-base font-extrabold text-foreground">3.8x Blended</p>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting 3D Badge (Bottom Left) */}
              <div className="absolute -bottom-8 -left-8 z-30 animate-float hidden sm:block" style={{ animationDelay: '3s' }}>
                <div className="glass-card-3d p-3.5 rounded-2xl border border-white/25 flex items-center gap-3 shadow-[0_15px_35px_-5px_rgba(99,102,241,0.3)]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Client Retention</p>
                    <p className="text-base font-extrabold text-foreground">94% Over 6 Mo</p>
                  </div>
                </div>
              </div>

              {/* Main 3D Frosted Glass Dashboard Card */}
              <div className="glass-card-3d rounded-3xl p-8 sm:p-9 space-y-7 relative overflow-hidden border border-white/20">
                {/* Glowing Top Bevel Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 opacity-80" />
                
                {/* Header with 3D Logo & Live Status */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/15 p-1 flex items-center justify-center shadow-inner">
                      <img 
                        src={logo} 
                        alt="Brandयात्रा Logo" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground font-poppins">Brandयात्रा Operations</h4>
                      <p className="text-[11px] text-muted-foreground">Live Performance Dashboard</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Primary Growth Metric */}
                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Audience Reached
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-poppins text-gradient">
                    <AnimatedCounter end={50} suffix="M+" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Targeted impressions across Meta, Google Search, YouTube & Reels
                  </p>
                </div>

                {/* Secondary Metrics 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-muted-foreground font-medium">Growth Campaigns</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                      <AnimatedCounter end={120} suffix="+" />
                    </div>
                    <span className="text-[11px] text-emerald-400 mt-0.5 block">↑ Scaling actively</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-muted-foreground font-medium">Client Rating</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                      <AnimatedCounter end={4} suffix=".9/5" />
                    </div>
                    <span className="text-[11px] text-amber-400 mt-0.5 block">★ Verified reviews</span>
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <button
                  onClick={handleContactClick}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary/20 via-pink-500/20 to-orange-500/20 hover:from-primary/30 hover:to-orange-500/30 border border-white/15 text-xs font-bold text-foreground flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Full Case Studies & Deck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-10">
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5 backdrop-blur-md bg-white/5">
          <div className="w-1 h-2.5 bg-gradient-to-b from-primary to-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
