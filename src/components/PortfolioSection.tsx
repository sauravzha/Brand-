import { TrendingUp, Target, Award, ArrowUpRight, Sparkles } from "lucide-react";

const portfolioItems = [
  {
    brand: "TechStart Pro",
    category: "SaaS Startup",
    metrics: {
      impressions: "2.5M+",
      clicks: "125K+",
      engagement: "+340%"
    },
    description: "Complete digital transformation with Instagram, Google Ads, and high-conversion SEO strategy.",
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.25)",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    brand: "EcoLife Store",
    category: "E-commerce & DTC",
    metrics: {
      impressions: "1.8M+",
      clicks: "95K+",
      engagement: "+280%"
    },
    description: "Facebook & Instagram Ads campaign driving hyper-profitable sustainable product sales.",
    gradient: "from-emerald-500 via-teal-500 to-green-400",
    glow: "rgba(16, 185, 129, 0.25)",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    brand: "FitFusion App",
    category: "Health & Fitness Tech",
    metrics: {
      impressions: "3.2M+",
      clicks: "180K+",
      engagement: "+420%"
    },
    description: "Omnichannel growth blitz with YouTube video ads, influencer campaigns, and funnel automation.",
    gradient: "from-orange-500 via-pink-500 to-amber-400",
    glow: "rgba(249, 115, 22, 0.25)",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-pink-500/15 via-orange-500/10 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-xl">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground/90">Client Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              Results that<br />
              <span className="text-gradient">speak for themselves</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed md:text-right font-light">
            Real metrics from live campaigns — not vanity numbers, actual audited business impact.
          </p>
        </div>

        {/* Portfolio 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass-card-3d group rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col justify-between relative"
            >
              {/* Top Chromatic 3D Bevel Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient} shadow-md`} />
              
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full border mb-2 ${item.tagColor}`}>
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                        {item.brand}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-foreground/70 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Impressions
                    </span>
                    <span className="text-base font-bold text-foreground">{item.metrics.impressions}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-white/[0.06]">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <Target className="w-3.5 h-3.5 text-emerald-400" /> Total Clicks
                    </span>
                    <span className="text-base font-bold text-foreground">{item.metrics.clicks}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-white/[0.06]">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-primary" /> Engagement Surge
                    </span>
                    <span className="text-base font-extrabold text-gradient">{item.metrics.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3D Glass CTA Card */}
        <div className="glass-card-3d p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto text-center relative border border-white/10">
          <p className="text-foreground/90 font-medium text-base mb-2">
            Want to see your brand become our next flagship case study?
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Schedule a high-intent marketing sprint review with our founders.
          </p>
          <a
            href="#contact"
            className="btn-3d-gradient inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white group"
          >
            <span>Start Your Growth Journey</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
