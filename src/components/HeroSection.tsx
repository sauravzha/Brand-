import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Ambient Background — reduced from 3 blobs to 2, more organic placement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-[120px] animate-float opacity-60"
          style={{ background: 'radial-gradient(circle, hsl(258 90% 66% / 0.25), transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] animate-float opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(187 100% 50% / 0.2), transparent 70%)', animationDelay: '3s' }}
        />
        {/* Subtle dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content — 7 cols */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary tracking-wide">Now accepting new clients for 2026</span>
            </div>

            {/* Headline — editorial style, not the generic "Transforming X into Y" */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight leading-[1.1]">
                We build brands
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight leading-[1.1]">
                that people
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight leading-[1.1] text-gradient">
                actually remember.
              </h1>
            </div>

            {/* Sub-headline — conversational, not corporate */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Brandयात्रा is a creative marketing studio that helps startups cut through the noise with strategy, design, and storytelling that converts.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 text-base sm:text-lg px-8 py-6 rounded-xl group"
              >
                Start a project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
              <button
                onClick={handleServicesClick}
                className="inline-flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors duration-300 group text-base sm:text-lg"
              >
                <span className="w-12 h-12 rounded-full border-2 border-foreground/20 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <Play className="w-4 h-4 ml-0.5 text-foreground/50 group-hover:text-primary transition-colors" />
                </span>
                See what we do
              </button>
            </div>
          </div>

          {/* Right Side — 5 cols: logo + metrics card */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Floating logo with glow */}
              <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:-top-16 lg:right-8 z-20">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
                  <img 
                    src={logo} 
                    alt="Brandयात्रा Logo" 
                    className="h-28 w-28 sm:h-36 sm:w-36 object-contain relative z-10 p-1" 
                    style={{ filter: 'drop-shadow(0 10px 25px hsl(var(--primary) / 0.35))' }}
                  />
                </div>
              </div>

              {/* Metrics card — modern glassmorphic dashboard feel */}
              <div className="glass-effect rounded-3xl p-8 space-y-6 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[4rem]" />
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Live Results</span>
                </div>

                <div className="space-y-6">
                  <div className="group cursor-default">
                    <div className="text-4xl sm:text-5xl font-bold text-gradient font-poppins">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">Campaigns launched & counting</div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="group cursor-default">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient font-poppins">
                        <AnimatedCounter end={2} suffix="M+" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">Audience reached</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient font-poppins">
                        <AnimatedCounter end={98} suffix="%" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">Client satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
