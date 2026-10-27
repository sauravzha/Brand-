import { Users, Mail, TrendingUp, Target, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState } from "react";

const services = [
  {
    logo: "https://cdn.simpleicons.org/instagram/ffffff",
    title: "Instagram Ads",
    description: "Laser-targeted visual campaigns designed for hyper-engagement and explosive brand reach across stories, reels, and feed.",
    color: "from-pink-500 via-rose-500 to-orange-500",
    glowColor: "rgba(236, 72, 153, 0.35)",
    bentoClass: "md:col-span-2 md:row-span-1"
  },
  {
    logo: "https://cdn.simpleicons.org/facebook/ffffff",
    title: "Facebook Ads",
    description: "Smart audience insights and relentless lead generation through sophisticated targeting and creative optimization.",
    color: "from-blue-600 via-indigo-600 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.35)",
    bentoClass: "md:col-span-1 md:row-span-2"
  },
  {
    logo: "https://cdn.simpleicons.org/google/ffffff",
    title: "Google Search & Display",
    description: "Data-driven PPC architectures built for maximum ROI and absolute search dominance. We make every high-intent click count.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    bentoClass: "md:col-span-2 md:row-span-2"
  },
  {
    logo: "https://cdn.simpleicons.org/youtube/ffffff",
    title: "YouTube Video Ads",
    description: "Cinematic hook-first storytelling for high brand recall and continuous customer acquisition.",
    color: "from-red-600 via-pink-600 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.35)",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic content planning, creative production, and daily audience growth across all social touchpoints.",
    color: "from-purple-600 via-violet-600 to-indigo-600",
    glowColor: "rgba(147, 51, 234, 0.35)",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Organic domination. We boost your ranking until you own the front page of your industry with proven white-hat architecture.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "rgba(249, 115, 22, 0.35)",
    bentoClass: "md:col-span-2 md:row-span-1"
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized workflows, cart recovery sequences, and retention funnels that convert 24/7 on autopilot.",
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.35)",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Target,
    title: "Brand Strategy & Positioning",
    description: "Defining the unique value proposition, voice, and visual identity that turns commoditized products into category leaders.",
    color: "from-pink-500 via-purple-500 to-orange-500",
    glowColor: "rgba(236, 72, 153, 0.35)",
    bentoClass: "md:col-span-1 md:row-span-1"
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLearnMore = (title: string) => {
    setSelectedService(title);
    setDialogOpen(true);
  };

  return (
    <section id="services" className="py-24 sm:py-36 relative overflow-hidden bg-background">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-3d text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Specialized Growth Disciplines
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight leading-[1.1] text-foreground">
              Services engineered for<br />
              <span className="text-gradient">exponential scale</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
              We combine deep platform algorithms, behavioral creative hooks, and full-funnel CRO to scale customer acquisition profitably.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <button 
              onClick={() => {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-all glass-pill-3d px-6 py-3 rounded-full hover:scale-105"
            >
              <span>Explore Custom Package</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

        {/* 3D Glassmorphic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[270px] gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleLearnMore(service.title)}
                className={`group relative overflow-hidden rounded-3xl glass-card-3d cursor-pointer ${service.bentoClass}`}
              >
                {/* 3D Hover glow ambient spotlight */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: service.glowColor }}
                />

                <div className="h-full w-full p-7 sm:p-8 flex flex-col justify-between relative z-10">
                  {/* Top: 3D Gradient Icon Box & Floating Arrow */}
                  <div className="flex justify-between items-start">
                    <div 
                      className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/25`}
                      style={{ boxShadow: `0 10px 25px -5px ${service.glowColor}` }}
                    >
                      {service.logo ? (
                        <img src={service.logo} alt={service.title} className="w-7 h-7 object-contain" />
                      ) : (
                        <Icon className="w-7 h-7 text-white" />
                      )}
                    </div>
                    
                    <div className="w-10 h-10 rounded-full glass-pill-3d flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-foreground/80 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Bottom: Text Content with 3D Depth */}
                  <div className="space-y-2 group-hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-orange-200 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ServiceDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        service={selectedService ? serviceDetails[selectedService] : null}
      />
    </section>
  );
};

export default ServicesSection;
