import { Users, Mail, TrendingUp, Target } from "lucide-react";
import { Button } from "./ui/button";
import ParticleNetwork3D from "./3d/ParticleNetwork3D";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState } from "react";
import SparkleGrid3D from "./3d/SparkleGrid3D";

const services = [
  {
    logo: "https://cdn.simpleicons.org/instagram/E4405F",
    title: "Instagram Ads Management",
    description: "Targeted campaigns for engagement and reach.",
    color: "from-pink-500 to-purple-500"
  },
  {
    logo: "https://cdn.simpleicons.org/facebook/1877F2",
    title: "Facebook Ads Management",
    description: "Smart audience insights and lead generation.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    logo: "https://cdn.simpleicons.org/youtube/FF0000",
    title: "YouTube Ads",
    description: "Video storytelling for brand growth.",
    color: "from-red-500 to-pink-500"
  },
  {
    logo: "https://cdn.simpleicons.org/google/4285F4",
    title: "Google Ads (Search & Display)",
    description: "Data-driven PPC for higher ROI.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic planning and growth tracking.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Boost ranking and visibility organically.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description: "Personalized campaigns for conversions.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Target,
    title: "Brand Strategy & Consulting",
    description: "Helping startups define their voice and vision.",
    color: "from-pink-500 to-orange-500"
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
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* 3D Particle Network */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-[500px] pointer-events-none opacity-30">
        <ParticleNetwork3D />
      </div>
      
      {/* 3D Sparkle Grid */}
      <div className="absolute left-0 bottom-0 w-full md:w-1/3 h-[400px] pointer-events-none opacity-15">
        <SparkleGrid3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-slide-in perspective-1000"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-y-12 transition-all duration-500 shadow-lg transform-gpu`}>
                  {service.logo ? (
                    <img src={service.logo} alt={service.title} className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-poppins mb-2 sm:mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn More
                  <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
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
