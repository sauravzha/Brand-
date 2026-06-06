import { Zap, Heart, TrendingUp, Users, Rocket } from "lucide-react";
import DataNetwork3D from "./3d/DataNetwork3D";
import SparkleGrid3D from "./3d/SparkleGrid3D";
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
    description: "Started with a vision. Brandयात्रा was founded by Saurav Jha and Shruti Choudhary with a simple yet powerful vision: to help startups and modern businesses transform their ideas into impactful digital journeys."
  },
  {
    icon: Users,
    year: "2024",
    title: "First Clients",
    description: "Built our core team and started combining creative storytelling with data-driven strategies to deliver marketing solutions that perform."
  },
  {
    icon: TrendingUp,
    year: "2024",
    title: "Growing Fast",
    description: "50+ campaigns delivered. From social media campaigns to SEO optimization, we handle every aspect of your digital presence with precision and passion."
  },
  {
    icon: Heart,
    year: "2025",
    title: "Scaling Up",
    description: "Expanding our impact and cementing our position as growth partners committed to understanding your vision and amplifying it."
  },
  {
    icon: Rocket,
    year: "2026",
    title: "The Future",
    description: "Dominating digital growth. Let's grow together and build the next big thing."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Who We <span className="text-gradient">Are</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
            Born from <span className="text-primary font-semibold">Creativity</span>, Driven by{" "}
            <span className="text-accent font-semibold">Data</span>, Designed for{" "}
            <span className="text-gradient font-semibold">Growth</span>
          </p>
        </div>

        {/* Slide Deck Presentation */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2">
                    <div className="h-full">
                      <div className="h-full glass-effect p-8 sm:p-10 rounded-3xl space-y-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-white/10 relative overflow-hidden group">
                        
                        {/* Slide Deck Numbering */}
                        <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                          0{index + 1}
                        </div>

                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-primary font-bold tracking-wider text-sm uppercase">
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-poppins">
                            {milestone.title}
                          </h3>
                        </div>

                        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-light">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="position-static transform-none" />
              <CarouselNext className="position-static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
