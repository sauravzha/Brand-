import { TrendingUp, Target, Award, ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    brand: "TechStart Pro",
    category: "SaaS Startup",
    metrics: {
      impressions: "2.5M+",
      clicks: "125K+",
      engagement: "+340%"
    },
    description: "Complete digital transformation with Instagram, Google Ads, and SEO strategy",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-500/20"
  },
  {
    brand: "EcoLife Store",
    category: "E-commerce",
    metrics: {
      impressions: "1.8M+",
      clicks: "95K+",
      engagement: "+280%"
    },
    description: "Facebook Ads campaign driving sustainable product sales",
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "hover:border-green-500/20"
  },
  {
    brand: "FitFusion App",
    category: "Health & Fitness",
    metrics: {
      impressions: "3.2M+",
      clicks: "180K+",
      engagement: "+420%"
    },
    description: "Multi-platform campaign with YouTube Ads and influencer partnerships",
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-500/20"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Our work
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              Results that<br />
              <span className="text-gradient">speak for themselves</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed md:text-right">
            Real metrics from real campaigns — not vanity numbers, actual business impact.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group border border-border/60 bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${item.borderColor}`}
            >
              {/* Top gradient accent bar */}
              <div className={`h-1 bg-gradient-to-r ${item.color.replace('/10', '')}`} />
              
              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins mb-1">
                      {item.brand}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground/50" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5" /> Impressions
                    </span>
                    <span className="text-base font-bold text-foreground">{item.metrics.impressions}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <Target className="w-3.5 h-3.5" /> Clicks
                    </span>
                    <span className="text-base font-bold text-foreground">{item.metrics.clicks}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5" /> Engagement
                    </span>
                    <span className="text-base font-bold text-gradient">{item.metrics.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — replacing generic "Coming Soon" */}
        <div className="text-center border border-border/40 bg-card/20 p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm mb-4">
            Want to see your brand here? Let's create your success story.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm group"
          >
            Start your project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
