import { Users, Mail, TrendingUp, Target, ArrowRight, ArrowUpRight } from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState } from "react";

const services = [
  {
    logo: "https://cdn.simpleicons.org/instagram/ffffff",
    title: "Instagram Ads",
    description: "Laser-targeted visual campaigns designed for hyper-engagement and explosive brand reach across stories, reels, and feed.",
    color: "from-pink-500 to-purple-500",
    accent: "pink",
    bentoClass: "md:col-span-2 md:row-span-1"
  },
  {
    logo: "https://cdn.simpleicons.org/facebook/ffffff",
    title: "Facebook Ads",
    description: "Smart audience insights and relentless lead generation through sophisticated targeting and creative optimization.",
    color: "from-blue-600 to-cyan-500",
    accent: "blue",
    bentoClass: "md:col-span-1 md:row-span-2"
  },
  {
    logo: "https://cdn.simpleicons.org/google/ffffff",
    title: "Google Search & Display",
    description: "Data-driven PPC architectures built for maximum ROI and absolute search dominance. We make every click count.",
    color: "from-green-500 to-teal-500",
    accent: "green",
    bentoClass: "md:col-span-2 md:row-span-2"
  },
  {
    logo: "https://cdn.simpleicons.org/youtube/ffffff",
    title: "YouTube Video Ads",
    description: "Cinematic storytelling for brand growth and audience retention.",
    color: "from-red-600 to-pink-600",
    accent: "red",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic content planning and daily audience growth across all platforms.",
    color: "from-purple-600 to-indigo-600",
    accent: "purple",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Organic domination. We boost your ranking until you own the front page of your industry with proven white-hat techniques.",
    color: "from-orange-500 to-amber-500",
    accent: "orange",
    bentoClass: "md:col-span-2 md:row-span-1"
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized workflows that convert silently in the background, 24/7.",
    color: "from-cyan-600 to-blue-600",
    accent: "cyan",
    bentoClass: "md:col-span-1 md:row-span-1"
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Defining the unique voice and vision that separates you from the noise.",
    color: "from-pink-600 to-orange-500",
    accent: "pink",
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
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — asymmetric, editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              What we offer
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              Services that<br />
              <span className="text-gradient">drive results</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              We don't just run ads — we architect growth through strategy, creative, and relentless optimization.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <button 
              onClick={() => window.location.href = "mailto:jhasaurav562@gmail.com"}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-primary transition-colors group border border-border hover:border-primary/30 rounded-full px-5 py-2.5"
            >
              Discuss your project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[260px] gap-4 md:gap-5 grid-flow-row-dense">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleLearnMore(service.title)}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${service.bentoClass}`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                
                <div className="h-full w-full p-7 sm:p-8 flex flex-col relative z-10">
                  {/* Top: Icon & Arrow */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform-gpu group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                      {service.logo ? (
                        <img src={service.logo} alt={service.title} className="w-6 h-6 sm:w-7 sm:h-7" />
                      ) : (
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      )}
                    </div>
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-3.5 h-3.5 text-foreground/50" />
                    </div>
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%] line-clamp-3">
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
