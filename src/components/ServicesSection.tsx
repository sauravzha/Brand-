import { 
  Code2, 
  Palette, 
  Share2, 
  Users2, 
  Target, 
  Sparkles, 
  Bot, 
  Cpu, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2,
  Layers
} from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState } from "react";

const servicesList = [
  {
    number: "01",
    title: "Website Design & Development",
    tagline: "From simple websites to powerful full-stack applications.",
    description: "We design and develop fast, responsive, modern websites that turn visitors into customers and help businesses build a strong online presence.",
    icon: Code2,
    color: "from-blue-500 via-indigo-600 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.35)",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    deliverables: [
      "Business & Company Websites",
      "Landing Pages & Lead Gen Funnels",
      "E-commerce Websites & Stores",
      "Custom Full-Stack Web Apps",
      "Web App & Dashboard Systems",
      "Redesign, Maintenance & Speed"
    ]
  },
  {
    number: "02",
    title: "Branding & Brand Identity",
    tagline: "Build a brand people recognize and remember.",
    description: "We help businesses create a distinctive identity that communicates their vision, stands out from competitors and connects with their target audience.",
    icon: Palette,
    color: "from-purple-500 via-pink-500 to-rose-400",
    glowColor: "rgba(168, 85, 247, 0.35)",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    deliverables: [
      "Brand Strategy & Positioning",
      "Logo Design & Visual Identity",
      "Brand Guidelines & Brand Kits",
      "Brand Naming & Taglines",
      "Marketing Collateral Design",
      "Brand Launch & Promotion"
    ]
  },
  {
    number: "03",
    title: "Social Media Marketing & Management",
    tagline: "Turn your social media into a growth channel.",
    description: "We help brands build an active online community, create engaging content and maintain a consistent presence across major social platforms.",
    icon: Share2,
    color: "from-pink-500 via-rose-500 to-orange-400",
    glowColor: "rgba(236, 72, 153, 0.35)",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    deliverables: [
      "Instagram & Facebook Management",
      "Social Strategy & Content Calendars",
      "Content Creation & Publishing",
      "Reels, Posts & Short-Form Content",
      "Audience Engagement & Community",
      "Performance Analytics & Reporting"
    ]
  },
  {
    number: "04",
    title: "Influencer Marketing & Collaborations",
    tagline: "Connect your brand with the right creators.",
    description: "We find relevant influencers and content creators based on your brand, audience, budget and campaign objectives to increase visibility and trust.",
    icon: Users2,
    color: "from-amber-500 via-orange-500 to-red-400",
    glowColor: "rgba(245, 158, 11, 0.35)",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    deliverables: [
      "Influencer & Creator Discovery",
      "Micro, Mid-Tier & Macro Campaigns",
      "Brand Collaborations & Sponsored Ads",
      "Influencer Outreach & Negotiation",
      "Campaign Planning & Coordination",
      "Reach & Conversion Tracking"
    ]
  },
  {
    number: "05",
    title: "Paid Advertising & Performance Marketing",
    tagline: "Reach the right audience. Generate measurable results.",
    description: "We plan, launch and optimize digital advertising campaigns designed to increase brand awareness, generate qualified leads and drive sales.",
    icon: Target,
    color: "from-indigo-600 via-violet-600 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.35)",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    deliverables: [
      "Instagram & Facebook Meta Ads",
      "YouTube Video Advertising",
      "Lead Generation & Acquisition",
      "E-commerce ROAS Scaling",
      "Retargeting & Audience Remarketing",
      "Ad Creative Testing & Reporting"
    ]
  },
  {
    number: "06",
    title: "Graphic Design & Creative Production",
    tagline: "Creative visuals that make your brand stand out.",
    description: "We create visually compelling designs and marketing assets that communicate your message and maintain a consistent brand identity.",
    icon: Sparkles,
    color: "from-orange-500 via-pink-500 to-purple-500",
    glowColor: "rgba(249, 115, 22, 0.35)",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    deliverables: [
      "Social Posts & Carousel Designs",
      "Advertising Creatives & Banners",
      "Posters, Flyers & Brochures",
      "Brand Presentation & Pitch Decks",
      "YouTube Thumbnail Graphics",
      "Video Editing, Reels & Motion"
    ]
  },
  {
    number: "07",
    title: "AI Automation & Business Workflow",
    tagline: "Work smarter. Reduce repetitive tasks. Save time.",
    description: "We help businesses automate routine processes, connect their tools and build efficient workflows so teams can focus on work that matters.",
    icon: Bot,
    color: "from-cyan-500 via-teal-500 to-emerald-400",
    glowColor: "rgba(6, 182, 212, 0.35)",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    deliverables: [
      "Automated Lead Capture & Follow-Ups",
      "WhatsApp & Email Automation",
      "Automated Notifications & Reminders",
      "CRM & Customer Data Workflows",
      "Form-to-Sheet & CRM Integrations",
      "Appointment Booking Systems"
    ]
  },
  {
    number: "08",
    title: "AI Integration & Intelligent Solutions",
    tagline: "Bring the power of AI into your business.",
    description: "We integrate AI capabilities into websites, applications and business workflows to improve customer support, information access and operational efficiency.",
    icon: Cpu,
    color: "from-violet-600 via-indigo-600 to-cyan-500",
    glowColor: "rgba(124, 58, 237, 0.35)",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    deliverables: [
      "AI Chatbots for Websites",
      "AI-Powered Customer Support",
      "Custom AI Enterprise Assistants",
      "AI Knowledge Bases & Search",
      "AI Content Processing Workflows",
      "API Integration with LLM Models"
    ]
  },
  {
    number: "09",
    title: "SEO & Search Visibility",
    tagline: "Help your customers discover you online.",
    description: "We improve your website's search visibility through technical improvements, relevant content and structured search optimization.",
    icon: Search,
    color: "from-emerald-500 via-teal-500 to-blue-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    deliverables: [
      "Technical SEO & Website Audits",
      "Keyword Research & Competitor Intel",
      "On-Page SEO & Content Optimization",
      "SEO Landing Pages & Copywriting",
      "Local SEO & Google Business Profile",
      "Performance Tracking & Reporting"
    ]
  },
  {
    number: "10",
    title: "Lead Generation & Business Growth",
    tagline: "Turn attention into opportunities.",
    description: "We help businesses build a systematic approach to attracting potential customers, capturing leads and improving conversion opportunities.",
    icon: TrendingUp,
    color: "from-pink-500 via-purple-600 to-indigo-600",
    glowColor: "rgba(236, 72, 153, 0.35)",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    deliverables: [
      "Lead Generation Strategy",
      "Landing Pages & Conversion Funnels",
      "High-Converting Lead Forms",
      "CRM Setup & Pipeline Organization",
      "Automated Lead Follow-Ups",
      "Campaign Tracking & Optimization"
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLearnMore = (title: string) => {
    setSelectedService(title);
    setDialogOpen(true);
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-36 relative overflow-hidden bg-background">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 -right-32 w-[650px] h-[650px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>BRANDYATRA — Our Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight leading-[1.1] text-foreground">
            We Build Brands. <span className="text-gradient">We Grow Businesses.</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto pt-2">
            From building high-quality websites to scaling your brand through marketing, creative design and AI-powered automation, we provide everything your business needs to grow in the digital world.
          </p>
        </div>

        {/* 10 Services 3D Frosted Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleLearnMore(service.title)}
                className="glass-card-3d group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-500"
              >
                {/* 3D Hover glow ambient spotlight */}
                <div 
                  className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: service.glowColor }}
                />

                <div className="space-y-5 relative z-10">
                  {/* Top: Icon + Number Badge + Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/25 p-[1px]`}
                        style={{ boxShadow: `0 12px 28px -6px ${service.glowColor}` }}
                      >
                        <div className="w-full h-full rounded-[15px] bg-slate-950/40 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]" />
                        </div>
                      </div>

                      <div>
                        <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${service.badgeColor} tracking-wider uppercase inline-block font-poppins`}>
                          Service {service.number}
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full glass-pill-3d flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-foreground/80 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-gradient">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist Chips */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      <span>Key Capabilities:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.deliverables.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>View Full Deliverables & Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Callout: Let's Grow Your Brand Together */}
        <div className="mt-20 sm:mt-28 max-w-4xl mx-auto">
          <div className="glass-card-3d rounded-3xl p-8 sm:p-12 md:p-14 text-center border border-white/20 relative overflow-hidden">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-primary/30 to-orange-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-pink-500/20 to-indigo-500/30 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span>Everything Under One Roof</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-foreground tracking-tight">
                Let's Grow Your <span className="text-gradient">Brand Together</span>
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Whether you are launching a new business, building your online presence or scaling an established brand, BrandYatra brings websites, marketing, creative solutions and intelligent automation together under one roof.
              </p>

              <p className="text-base sm:text-lg font-semibold text-foreground/90 font-poppins pt-1">
                From your first idea to your next stage of growth — we're here to help.
              </p>

              <div className="pt-4">
                <button
                  onClick={scrollToContact}
                  className="btn-3d-gradient inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                >
                  <span>Let's Talk About Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-dive dialog for service */}
      <ServiceDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        service={selectedService ? serviceDetails[selectedService] : null}
      />
    </section>
  );
};

export default ServicesSection;
