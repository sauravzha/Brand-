import { TrendingUp, Target, Award } from "lucide-react";
import TrendChart3D from "./3d/TrendChart3D";
import { useEffect, useState } from "react";

const portfolioItems = [
  {
    brand: "TechStart Pro",
    category: "SaaS Startup",
    metrics: {
      impressions: "2.5M+",
      clicks: "125K+",
      engagement: "+340%"
    },
    description: "Complete digital transformation with Instagram, Google Ads, and SEO strategy"
  },
  {
    brand: "EcoLife Store",
    category: "E-commerce",
    metrics: {
      impressions: "1.8M+",
      clicks: "95K+",
      engagement: "+280%"
    },
    description: "Facebook Ads campaign driving sustainable product sales"
  },
  {
    brand: "FitFusion App",
    category: "Health & Fitness",
    metrics: {
      impressions: "3.2M+",
      clicks: "180K+",
      engagement: "+420%"
    },
    description: "Multi-platform campaign with YouTube Ads and influencer partnerships"
  }
];

const PortfolioSection = () => {
  const [sectionOffset, setSectionOffset] = useState(0);

  useEffect(() => {
    const section = document.getElementById('portfolio');
    if (section) {
      setSectionOffset(section.offsetTop);
    }
  }, []);

  return (
    <section id="portfolio" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Trend Chart */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-[400px] pointer-events-none">
        <TrendChart3D triggerScroll={sectionOffset} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real brands we've helped grow
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-poppins group-hover:text-gradient transition-all">
                    {item.brand}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-t border-border/50">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Impressions
                  </span>
                  <span className="text-lg font-bold text-gradient">{item.metrics.impressions}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-border/50">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Target className="w-4 h-4" /> Clicks
                  </span>
                  <span className="text-lg font-bold text-gradient">{item.metrics.clicks}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-border/50">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Award className="w-4 h-4" /> Engagement
                  </span>
                  <span className="text-lg font-bold text-gradient">{item.metrics.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by Innovation Brands */}
        <div className="text-center glass-effect p-8 sm:p-12 rounded-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-poppins mb-4">
            Trusted by <span className="text-gradient">Innovation Brands</span>
          </h3>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-lg font-semibold text-gradient">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
