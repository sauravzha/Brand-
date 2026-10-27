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
    <section id="pricing" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight">
            Transparent pricing,<br />
            <span className="text-gradient">real results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Choose the plan that fits your stage. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-2xl transition-all duration-500 ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl shadow-primary/10 bg-card scale-[1.02] lg:scale-105'
                    : 'border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full text-white text-xs font-semibold shadow-lg tracking-wide">
                    Most Popular
                  </div>
                )}

                <div className="p-7 sm:p-8">
                  {/* Icon + Plan Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold font-poppins text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-base">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="text-sm text-foreground/70 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={handleContactClick}
                    className={`w-full py-5 rounded-xl transition-all duration-300 group/btn ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 text-white'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-border/50'
                    }`}
                    variant={plan.popular ? "default" : "ghost"}
                  >
                    <span className="flex items-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
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
