import { Zap, Heart, TrendingUp, Users } from "lucide-react";
import DataNetwork3D from "./3d/DataNetwork3D";
import SparkleGrid3D from "./3d/SparkleGrid3D";

const milestones = [
  {
    icon: Zap,
    year: "2024",
    title: "Founded",
    description: "Started with a vision"
  },
  {
    icon: Users,
    year: "2024",
    title: "First Clients",
    description: "Built our core team"
  },
  {
    icon: TrendingUp,
    year: "2024",
    title: "Growing Fast",
    description: "50+ campaigns delivered"
  },
  {
    icon: Heart,
    year: "2025",
    title: "Scaling Up",
    description: "Expanding our impact"
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

      {/* 3D Data Network */}
      <div className="absolute right-0 top-10 w-full md:w-1/2 h-[450px] pointer-events-none opacity-25">
        <DataNetwork3D />
      </div>
      
      {/* 3D Sparkle Grid */}
      <div className="absolute left-0 bottom-0 w-full md:w-1/3 h-[350px] pointer-events-none opacity-15">
        <SparkleGrid3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Who We <span className="text-gradient">Are</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
            Born from <span className="text-primary font-semibold">Creativity</span>, Driven by{" "}
            <span className="text-accent font-semibold">Data</span>, Designed for{" "}
            <span className="text-gradient font-semibold">Growth</span>
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 mb-16 sm:mb-24">
          <div className="glass-effect p-6 sm:p-10 rounded-2xl space-y-4 sm:space-y-6 animate-slide-in">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Brandयात्रा was founded by <span className="text-gradient font-semibold">Saurav Jha</span> (Founder) and <span className="text-gradient font-semibold">Shruti Choudhary</span> (Co-Founder) with a simple yet powerful vision: to help startups and modern businesses transform their ideas into impactful digital journeys. We believe every brand has a unique story waiting to be told.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Our team combines creative storytelling with data-driven strategies to deliver marketing solutions that don't just look good — they perform. From social media campaigns to SEO optimization, we handle every aspect of your digital presence with precision and passion.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              We're not just another agency. We're your growth partners, committed to understanding your vision and amplifying it across every digital channel. Let's grow together.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="glass-effect p-6 sm:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient font-poppins mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold mb-2">
                    {milestone.title}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {milestone.description}
                  </div>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
