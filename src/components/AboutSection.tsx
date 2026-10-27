import { Zap, Heart, TrendingUp, Users, Rocket, ArrowRight } from "lucide-react";
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
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    year: "2024",
    title: "First Clients",
    description: "Built our core team and started combining creative storytelling with data-driven strategies to deliver marketing solutions that perform.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    year: "2024",
    title: "Growing Fast",
    description: "50+ campaigns delivered. From social media campaigns to SEO optimization, we handle every aspect of your digital presence with precision and passion.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    year: "2025",
    title: "Scaling Up",
    description: "Expanding our impact and cementing our position as growth partners committed to understanding your vision and amplifying it.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Rocket,
    year: "2026",
    title: "The Future",
    description: "Dominating digital growth. Let's grow together and build the next big thing.",
    color: "from-primary to-accent"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Background Elements — minimal, organic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent/[0.06] rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 right-0 w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — left-aligned, editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Our story
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              Born from creativity,<br />
              driven by <span className="text-gradient">data</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              We started Brandयात्रा because we believe every startup deserves world-class marketing. 
              Not templates — real strategy that moves the needle.
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
                      <div className="h-full border border-border/60 bg-card/30 backdrop-blur-sm p-8 sm:p-10 rounded-2xl space-y-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden group">
                        
                        {/* Slide number watermark */}
                        <div className="absolute top-6 right-8 text-7xl font-black text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-500 select-none font-poppins">
                          0{index + 1}
                        </div>

                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${milestone.color} shadow-lg`}>
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        
                        {/* Year + Title */}
                        <div className="space-y-1.5">
                          <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-poppins">
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
              <CarouselPrevious className="position-static transform-none border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary" />
              <CarouselNext className="position-static transform-none border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
