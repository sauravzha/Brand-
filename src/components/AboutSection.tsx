import { Zap, Heart, TrendingUp, Users, Rocket, ArrowRight, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const milestones = [
  {
    icon: Zap,
    year: "2024",
    title: "Founded",
    description: "Started with a vision. Brandयात्रा was founded by Saurav Jha and Shruti Choudhary with a simple yet powerful vision: to help startups and modern businesses transform their ideas into impactful digital journeys.",
    color: "from-amber-500 via-orange-500 to-red-500",
    glow: "rgba(245, 158, 11, 0.35)"
  },
  {
    icon: Users,
    year: "2024",
    title: "First Clients",
    description: "Built our core team and started combining creative storytelling with data-driven strategies to deliver marketing solutions that perform.",
    color: "from-blue-500 via-indigo-500 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.35)"
  },
  {
    icon: TrendingUp,
    year: "2024",
    title: "Growing Fast",
    description: "50+ campaigns delivered. From social media campaigns to SEO optimization, we handle every aspect of your digital presence with precision and passion.",
    color: "from-emerald-500 via-teal-500 to-green-400",
    glow: "rgba(16, 185, 129, 0.35)"
  },
  {
    icon: Heart,
    year: "2025",
    title: "Scaling Up",
    description: "Expanding our impact and cementing our position as growth partners committed to understanding your vision and amplifying it.",
    color: "from-pink-500 via-rose-500 to-purple-500",
    glow: "rgba(236, 72, 153, 0.35)"
  },
  {
    icon: Rocket,
    year: "2026",
    title: "The Future",
    description: "Dominating digital growth across India and worldwide. Let's grow together and build the next big thing.",
    color: "from-primary via-purple-500 to-accent",
    glow: "rgba(99, 102, 241, 0.35)"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/15 via-orange-600/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          <div className="space-y-4">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground/90">Our Journey & Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              Born from creativity,<br />
              driven by <span className="text-gradient">data</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              We founded Brandयात्रा because we believe high-ambition startups deserve world-class marketing. 
              No recycled templates — bespoke 3D brand positioning that moves the needle.
            </p>
          </div>
        </div>

        {/* Milestone Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                    <div className="h-full">
                      <div className="glass-card-3d h-full p-8 sm:p-10 rounded-2xl space-y-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
                        
                        {/* Slide number watermark */}
                        <div className="absolute top-6 right-8 text-7xl font-black text-foreground/[0.04] group-hover:text-primary/[0.1] transition-colors duration-500 select-none font-poppins">
                          0{index + 1}
                        </div>

                        {/* 3D Icon Box */}
                        <div 
                          className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${milestone.color} shadow-lg group-hover:scale-105 transition-transform duration-300 p-[1px]`}
                          style={{ boxShadow: `0 8px 25px ${milestone.glow}` }}
                        >
                          <div className="w-full h-full rounded-[15px] bg-slate-950/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]" />
                          </div>
                        </div>
                        
                        {/* Year + Title */}
                        <div className="space-y-1.5">
                          <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                            {milestone.title}
                          </h3>
                        </div>

                        <p className="text-base text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-10">
              <CarouselPrevious className="position-static transform-none glass-card-3d border-white/20 hover:bg-primary/20 hover:border-primary/50 hover:text-primary" />
              <CarouselNext className="position-static transform-none glass-card-3d border-white/20 hover:bg-primary/20 hover:border-primary/50 hover:text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
