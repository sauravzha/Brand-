import { Button } from "./ui/button";
import { Check, Sparkles, TrendingUp, Zap, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Essential",
    price: "₹20,000",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    features: [
      "Social Media Management (1 Platform)",
      "12 Posts per month",
      "Basic SEO Optimization",
      "Content Creation & Copywriting",
      "Monthly Performance Report",
      "Email Support",
    ],
    cta: "Start growing",
    popular: false
  },
  {
    name: "Growth",
    price: "₹50,000",
    period: "/month",
    description: "Ideal for growing brands ready to aggressively scale",
    icon: TrendingUp,
    color: "from-primary to-accent",
    features: [
      "Social Media Management (3 Platforms)",
      "20 Posts per month + Stories/Reels",
      "Paid Ads Management (Meta & Google)",
      "Advanced SEO Strategy",
      "Influencer Outreach",
      "Funnel Building & Optimization",
      "Bi-weekly Strategy Calls",
      "Priority Support"
    ],
    cta: "Scale your brand",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Comprehensive solutions for established businesses",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    features: [
      "All Social Platforms Management",
      "Unlimited Content & Video Production",
      "Full-Funnel Ad Campaigns",
      "Custom Web Development",
      "Weekly Strategy Sessions",
      "Dedicated Account Manager",
      "Brand Strategy Consulting",
      "Custom Integrations"
    ],
    cta: "Contact us",
    popular: false
  }
];

const PricingSection = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 sm:py-36 relative overflow-hidden bg-background">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[150px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-3d text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Transparent Investment Tiers
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight text-foreground">
            Clear, ROI-backed pricing,<br />
            <span className="text-gradient">zero hidden surprises</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Choose the engagement tier calibrated for your growth stage. Scale up or pause anytime with full transparency.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-3xl glass-card-3d transition-all duration-500 flex flex-col justify-between ${
                  plan.popular
                    ? 'border-2 border-primary/60 shadow-[0_0_50px_rgba(139,92,246,0.35)] scale-[1.02] lg:scale-105 z-20 bg-gradient-to-b from-white/[0.08] to-white/[0.02]'
                    : 'border border-white/15 hover:border-primary/40'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 btn-3d-gradient rounded-full text-white text-xs font-extrabold shadow-lg tracking-wider uppercase border border-white/40">
                    ★ Most Selected
                  </div>
                )}

                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon + Plan Name */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-poppins text-foreground">
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl sm:text-5xl font-black font-poppins text-gradient">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm font-semibold">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                          <span className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleContactClick}
                    className={`w-full py-6 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 group/btn shadow-md ${
                      plan.popular
                        ? 'btn-3d-gradient text-white border border-white/30 hover:scale-[1.02]'
                        : 'glass-pill-3d text-foreground hover:text-primary hover:border-primary/50'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            Need something custom? Let's talk about what would work for your business.
          </p>
          <button
            onClick={handleContactClick}
            className="text-primary hover:text-primary/80 transition-colors font-medium text-sm underline underline-offset-4"
          >
            Get a custom quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
