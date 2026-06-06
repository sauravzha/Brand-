import { Button } from "./ui/button";
import { Check, Sparkles, TrendingUp, Zap } from "lucide-react";
import RotatingRings3D from "./3d/RotatingRings3D";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹8000",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    features: [
      "1 Social Media Platforms Management",
      "5 Posts per week",
      "Basic Ad Campaign (Instagram/Facebook)",
      "Monthly Performance Report",
      "Email Support",
      "Content Calendar",
    ],
    cta: "Start Growing",
    popular: false
  },
  {
    name: "Growth",
    price: "₹17,999",
    period: "/month",
    description: "Ideal for growing brands ready to scale their presence",
    icon: TrendingUp,
    color: "from-primary to-accent",
    features: [
      "3 Social Media Platforms Management",
      "8 Posts per week + Stories",
      "Multi-Platform Ad Campaigns",
      "Bi-weekly Strategy Calls",
      "Email Marketing (2 campaigns/month)",
      "Advanced Analytics & Reporting",
      "Priority Support",
      "Competitor Analysis"
    ],
    cta: "Scale Your Brand",
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
      "Unlimited Content Creation",
      "Full-Funnel Ad Campaigns",
      "YouTube Ads + Video Production",
      "Weekly Strategy Sessions",
      "Advanced SEO & SEM",
      "Email Automation Workflows",
      "Real-time Dashboard Access",
      "Dedicated Account Manager",
      "Brand Strategy Consulting",
      "Influencer Partnerships",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Rotating Rings */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full max-w-[500px] h-[400px] pointer-events-none opacity-30">
        <RotatingRings3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business growth. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group glass-effect rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-primary shadow-2xl shadow-primary/20 scale-105 lg:scale-110'
                    : 'hover:scale-105 hover:shadow-xl hover:shadow-primary/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-gradient font-poppins">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full mb-8 text-base py-6 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/50'
                      : 'bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 sm:mt-16 glass-effect p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We can tailor a package specifically for your business needs.
          </p>
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            Contact Us for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
