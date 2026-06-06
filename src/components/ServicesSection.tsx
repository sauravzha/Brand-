import { Users, Mail, TrendingUp, Target, ArrowRight } from "lucide-react";
import ParticleNetwork3D from "./3d/ParticleNetwork3D";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState } from "react";
import SparkleGrid3D from "./3d/SparkleGrid3D";

const services = [
  {
    logo: "https://cdn.simpleicons.org/instagram/ffffff",
    title: "Instagram Ads",
    description: "Laser-targeted visual campaigns designed for hyper-engagement and explosive brand reach.",
    color: "from-pink-500 to-purple-500",
    bentoClass: "md:col-span-2 md:row-span-1" // Wide
  },
  {
    logo: "https://cdn.simpleicons.org/facebook/ffffff",
    title: "Facebook Ads",
    description: "Smart audience insights and relentless lead generation.",
    color: "from-blue-600 to-cyan-500",
    bentoClass: "md:col-span-1 md:row-span-2" // Tall
  },
  {
    logo: "https://cdn.simpleicons.org/google/ffffff",
    title: "Google Search & Display",
    description: "Data-driven PPC architectures built for maximum ROI and absolute search dominance.",
    color: "from-green-500 to-teal-500",
    bentoClass: "md:col-span-2 md:row-span-2" // Huge Hero
  },
  {
    logo: "https://cdn.simpleicons.org/youtube/ffffff",
    title: "YouTube Video Ads",
    description: "Cinematic storytelling for brand growth.",
    color: "from-red-600 to-pink-600",
    bentoClass: "md:col-span-1 md:row-span-1" // Small
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic content planning and daily audience growth.",
    color: "from-purple-600 to-indigo-600",
    bentoClass: "md:col-span-1 md:row-span-1" // Small
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Organic domination. We boost your ranking until you own the front page of your industry.",
    color: "from-orange-500 to-amber-500",
    bentoClass: "md:col-span-2 md:row-span-1" // Wide
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized workflows that convert silently in the background.",
    color: "from-cyan-600 to-blue-600",
    bentoClass: "md:col-span-1 md:row-span-1" // Small
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Defining the unique voice and vision that separates you from the noise.",
    color: "from-pink-600 to-orange-500",
    bentoClass: "md:col-span-1 md:row-span-1" // Small
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
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* 3D Elements */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-[500px] pointer-events-none opacity-20">
        <ParticleNetwork3D />
      </div>
      <div className="absolute left-0 bottom-0 w-full md:w-1/3 h-[400px] pointer-events-none opacity-10">
        <SparkleGrid3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight">
              Our <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              We don't just run ads. We architect digital dominance through a symphony of strategy, creative, and code.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <button 
              onClick={() => window.location.href = "mailto:jhasaurav562@gmail.com"}
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
            >
              Discuss your project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6 grid-flow-row-dense">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleLearnMore(service.title)}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl cursor-pointer hover:border-white/20 transition-all duration-500 ${service.bentoClass}`}
              >
                {/* Dynamic Gradient Background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="h-full w-full p-8 flex flex-col relative z-10">
                  {/* Top: Icon & Arrow */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform-gpu group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {service.logo ? (
                        <img src={service.logo} alt={service.title} className="w-7 h-7 sm:w-8 sm:h-8" />
                      ) : (
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-white/5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-poppins mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed max-w-[90%] opacity-80 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
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
