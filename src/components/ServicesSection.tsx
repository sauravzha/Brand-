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
  Layers,
  Zap,
  ShieldCheck,
  Flame,
  Award,
  Globe2,
  MessageSquare
} from "lucide-react";
import ServiceDetailsDialog from "./ServiceDetailsDialog";
import { serviceDetails } from "@/data/serviceDetails";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryFilter = "all" | "web" | "branding" | "marketing" | "ai";

const categories: { id: CategoryFilter; label: string; count: number; icon: any }[] = [
  { id: "all", label: "All Disciplines", count: 10, icon: Sparkles },
  { id: "web", label: "Web & Full-Stack", count: 2, icon: Code2 },
  { id: "branding", label: "Brand & Creative", count: 2, icon: Palette },
  { id: "marketing", label: "Paid Ads & Social", count: 3, icon: Target },
  { id: "ai", label: "AI & Growth Engine", count: 3, icon: Bot },
];

const servicesList = [
  {
    number: "01",
    category: "web",
    categoryLabel: "Engineering",
    title: "Website Design & Development",
    tagline: "From simple websites to powerful full-stack applications.",
    description: "We design and develop fast, responsive, modern websites that turn visitors into customers and help businesses build an authoritative online presence.",
    icon: Code2,
    gradient: "from-blue-500 via-indigo-600 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    metrics: ">90 PageSpeed • Mobile-First",
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
    category: "branding",
    categoryLabel: "Identity",
    title: "Branding & Brand Identity",
    tagline: "Build a brand people recognize and remember.",
    description: "We help businesses create a distinctive identity that communicates their vision, stands out from competitors and deeply connects with their target audience.",
    icon: Palette,
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    glowColor: "rgba(168, 85, 247, 0.4)",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    metrics: "3D Brand Kit • Vector IP",
    deliverables: [
      "Brand Strategy & Positioning",
      "Logo Design & Visual Identity",
      "Brand Guidelines & Brand Kits",
      "Brand Naming & Taglines",
      "Marketing Collateral Design",
      "Brand Launch & Promotion Strategy"
    ]
  },
  {
    number: "03",
    category: "marketing",
    categoryLabel: "Organic",
    title: "Social Media Marketing & Management",
    tagline: "Turn your social media into a growth channel.",
    description: "We help brands build an active online community, create engaging content and maintain a consistent presence across major social platforms.",
    icon: Share2,
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    glowColor: "rgba(236, 72, 153, 0.4)",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    metrics: "Viral Hooks • Daily Sprints",
    deliverables: [
      "Instagram & Facebook Management",
      "Social Strategy & Content Calendars",
      "Content Creation & Publishing",
      "Reels, Posts & Short-Form Content",
      "Audience Engagement & Community",
      "Social Media Performance Reporting"
    ]
  },
  {
    number: "04",
    category: "marketing",
    categoryLabel: "Influence",
    title: "Influencer Marketing & Brand Collaborations",
    tagline: "Connect your brand with the right creators.",
    description: "We find relevant influencers and content creators based on your brand, audience, budget and campaign objectives to help you increase visibility and build trust.",
    icon: Users2,
    gradient: "from-amber-500 via-orange-500 to-red-400",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    metrics: "Vetted Creators • UGC Rights",
    deliverables: [
      "Influencer & Creator Discovery",
      "Micro, Mid-Tier & Macro Campaigns",
      "Brand Collaborations & Sponsored Content",
      "Influencer Outreach & Negotiation",
      "Campaign Planning & Coordination",
      "Reach & Conversion Tracking"
    ]
  },
  {
    number: "05",
    category: "marketing",
    categoryLabel: "Paid Ads",
    title: "Paid Advertising & Performance Marketing",
    tagline: "Reach the right audience. Generate measurable results.",
    description: "We plan, launch and optimize digital advertising campaigns designed to increase brand awareness, generate qualified leads and drive sales.",
    icon: Target,
    gradient: "from-indigo-600 via-violet-600 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.4)",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    metrics: "3.8x Avg ROAS • CAPI Ready",
    deliverables: [
      "Instagram & Facebook Meta Ads",
      "YouTube Video Advertising",
      "Meta Ads Campaign Management",
      "Lead Generation & Acquisition",
      "E-commerce ROAS Scaling",
      "Retargeting & Ad Creative Testing"
    ]
  },
  {
    number: "06",
    category: "branding",
    categoryLabel: "Creative",
    title: "Graphic Design & Creative Production",
    tagline: "Creative visuals that make your brand stand out.",
    description: "We create visually compelling designs and marketing assets that communicate your message and maintain a consistent brand identity.",
    icon: Sparkles,
    gradient: "from-orange-500 via-pink-500 to-purple-500",
    glowColor: "rgba(249, 115, 22, 0.4)",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    metrics: "High CTR • Motion Graphics",
    deliverables: [
      "Social Media Posts & Carousel Designs",
      "Advertising Creatives & Banners",
      "Posters, Flyers & Brochures",
      "Brand Presentation & Pitch Decks",
      "YouTube Thumbnail Graphics",
      "Video Editing, Reels & Motion"
    ]
  },
  {
    number: "07",
    category: "ai",
    categoryLabel: "Workflows",
    title: "AI Automation & Business Workflow Automation",
    tagline: "Work smarter. Reduce repetitive tasks. Save time.",
    description: "We help businesses automate routine processes, connect their tools and build efficient workflows so teams can focus on work that matters.",
    icon: Bot,
    gradient: "from-cyan-500 via-teal-500 to-emerald-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    metrics: "Save 30+ Hrs/Wk • WhatsApp API",
    deliverables: [
      "Automated Lead Capture & Follow-Ups",
      "WhatsApp & Email Workflow Automation",
      "Automated Notifications & Reminders",
      "CRM & Customer Data Workflows",
      "Form-to-Sheet & CRM Integrations",
      "Appointment Booking & Follow-Up Systems"
    ]
  },
  {
    number: "08",
    category: "ai",
    categoryLabel: "AI Core",
    title: "AI Integration & Intelligent Solutions",
    tagline: "Bring the power of AI into your business.",
    description: "We integrate AI capabilities into websites, applications and business workflows to improve customer support, information access and operational efficiency.",
    icon: Cpu,
    gradient: "from-violet-600 via-indigo-600 to-cyan-500",
    glowColor: "rgba(124, 58, 237, 0.4)",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    metrics: "OpenAI GPT-4o • Custom RAG",
    deliverables: [
      "AI Chatbots for Websites",
      "AI-Powered Customer Support (24/7)",
      "Custom AI Enterprise Assistants",
      "AI Knowledge Bases & Search",
      "AI Content Processing Workflows",
      "API Integration with LLM Models"
    ]
  },
  {
    number: "09",
    category: "web",
    categoryLabel: "Search",
    title: "SEO & Search Visibility",
    tagline: "Help your customers discover you online.",
    description: "We improve your website's search visibility through technical improvements, relevant content and structured search optimization.",
    icon: Search,
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    metrics: "100% White-Hat • Schema Rich",
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
    category: "ai",
    categoryLabel: "Pipeline",
    title: "Lead Generation & Business Growth",
    tagline: "Turn attention into opportunities.",
    description: "We help businesses build a systematic approach to attracting potential customers, capturing leads and improving conversion opportunities.",
    icon: TrendingUp,
    gradient: "from-pink-500 via-purple-600 to-indigo-600",
    glowColor: "rgba(236, 72, 153, 0.4)",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    metrics: "High-Intent Leads • CRM Pipeline",
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

const valuePillars = [
  {
    title: "100% In-House",
    tagline: "Zero Outsourcing",
    detail: "Dedicated Squad • Direct Comms",
    icon: ShieldCheck,
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    glow: "rgba(16, 185, 129, 0.4)",
    border: "hover:border-emerald-500/50",
    beacon: "bg-emerald-400",
    badge: "Verified Squad"
  },
  {
    title: "AI Native Systems",
    tagline: "LLM Workflows",
    detail: "Automated Ops • 24/7 Precision",
    icon: Cpu,
    accent: "from-cyan-400 via-blue-500 to-indigo-500",
    glow: "rgba(6, 182, 212, 0.4)",
    border: "hover:border-cyan-500/50",
    beacon: "bg-cyan-400",
    badge: "Autonomous Ops"
  },
  {
    title: "ROAS Driven",
    tagline: "3.8x+ Avg Return",
    detail: "Profit First Scaling • Zero Fluff",
    icon: Flame,
    accent: "from-orange-400 via-amber-500 to-red-500",
    glow: "rgba(249, 115, 22, 0.4)",
    border: "hover:border-orange-500/50",
    beacon: "bg-orange-400",
    badge: "High-Yield"
  },
  {
    title: "Full IP Ownership",
    tagline: "100% Assets Yours",
    detail: "Complete Code, Vectors & Data",
    icon: Award,
    accent: "from-purple-400 via-pink-500 to-indigo-500",
    glow: "rgba(168, 85, 247, 0.4)",
    border: "hover:border-purple-500/50",
    beacon: "bg-purple-400",
    badge: "Zero Lock-In"
  }
];

const rotatingHighlights = [
  "High-Converting Websites & Web Apps",
  "Data-Backed Meta & Google Ad Campaigns",
  "Intelligent AI Business Automation",
  "Distinctive 3D Brand & Visual Identities",
  "High-Yield Lead Generation Funnels"
];

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % rotatingHighlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

  const filteredServices = selectedCategory === "all"
    ? servicesList
    : servicesList.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 sm:py-36 relative overflow-hidden bg-background">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 -right-32 w-[650px] h-[650px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade In / Fade Out Viewport Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-5 mb-14 sm:mb-20"
        >
          {/* Top Category Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="glass-pill-3d inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>BRANDYATRA — Our Services</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-poppins tracking-tight leading-[1.08] text-foreground"
          >
            We Build Brands. <span className="text-gradient">We Grow Businesses.</span>
          </motion.h2>

          {/* Dynamic Rotating Capability Focus Ticker with Fade In / Fade Out */}
          <div className="h-10 sm:h-11 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={focusIndex}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-3d text-xs sm:text-sm font-semibold border border-primary/30 text-foreground/90 shadow-md backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">Engineered for:</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-indigo-400">
                  {rotatingHighlights[focusIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Core Descriptive Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto pt-1"
          >
            From building high-quality websites to scaling your brand through marketing, creative design and AI-powered automation, we provide everything your business needs to grow in the digital world.
          </motion.p>

          {/* 4 Feature Value Pillars Strip with 3D Glassmorphism & Staggered Viewport Fade In / Fade Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-5">
            {valuePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 26, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`glass-card-3d group relative p-4 rounded-2xl border border-white/10 ${pillar.border} transition-all duration-300 overflow-hidden text-left shadow-lg backdrop-blur-xl`}
                >
                  {/* Top specular glow beam */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accent} opacity-75 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Radial ambient glow on hover */}
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                    style={{ background: pillar.glow }}
                  />

                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${pillar.accent} p-[1px] shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full rounded-[10px] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center">
                        <PillarIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-semibold text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.beacon} animate-pulse`} />
                      <span>{pillar.badge}</span>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-0.5">
                    <h4 className="text-sm font-extrabold font-poppins text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-gradient">
                      {pillar.tagline}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-light leading-snug">
                      {pillar.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 3D Interactive Category Filter Navigation with Fade In / Fade Out */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-12 sm:mb-16"
        >
          <div className="glass-card-3d p-1.5 sm:p-2 rounded-2xl border border-white/15 flex flex-wrap gap-1.5 sm:gap-2 justify-center shadow-2xl backdrop-blur-2xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "btn-3d-gradient text-white shadow-lg scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-primary"}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white/[0.08] text-muted-foreground"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 10 Services 3D Frosted Glass Grid with Smooth Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => handleLearnMore(service.title)}
                  className="glass-card-3d group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-primary/60 transition-all duration-500 overflow-hidden"
                >
                  {/* Top Specular Chromatic Light Beam */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-500 shadow-md`} />

                  {/* 3D Hover glow ambient spotlight */}
                  <div 
                    className="absolute -top-28 -right-28 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ background: service.glowColor }}
                  />

                  <div className="space-y-6 relative z-10">
                    {/* Header Row: 3D Icon Box + Service Tag + Metric Badge + Arrow */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/30 p-[1px]`}
                          style={{ boxShadow: `0 12px 28px -6px ${service.glowColor}` }}
                        >
                          <div className="w-full h-full rounded-[15px] bg-slate-950/50 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${service.badgeColor} tracking-wider uppercase font-poppins`}>
                              {service.number}
                            </span>
                            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                              {service.categoryLabel}
                            </span>
                          </div>
                          <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-emerald-400" />
                            <span>{service.metrics}</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-full glass-pill-3d flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 text-foreground/80 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2 pt-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-foreground group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-gradient font-poppins">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist Chips */}
                    <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-primary" />
                        <span>Core Deliverables:</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                        {service.deliverables.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center gap-2 text-xs text-foreground/85 py-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    <span>View Methodology & Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Closing Callout: Let's Grow Your Brand Together with Fade In / Fade Out */}
        <motion.div 
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-28 max-w-4xl mx-auto"
        >
          <div className="glass-card-3d rounded-3xl p-8 sm:p-12 md:p-14 text-center border border-white/20 relative overflow-hidden shadow-2xl">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/30 to-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-500/20 to-indigo-500/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="glass-pill-3d inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary">
                <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                <span>Everything Under One Roof</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-foreground tracking-tight">
                Let's Grow Your <span className="text-gradient">Brand Together</span>
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Whether you are launching a new business, building your online presence or scaling an established brand, BrandYatra brings websites, marketing, creative solutions and intelligent automation together under one roof.
              </p>

              <div className="p-4 rounded-2xl glass-card-3d max-w-xl mx-auto border border-white/10">
                <p className="text-base sm:text-lg font-bold text-foreground font-poppins">
                  From your first idea to your next stage of growth — we're here to help.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="btn-3d-gradient w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                >
                  <span>Let's Talk About Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const roi = document.getElementById("roi-calculator");
                    if (roi) roi.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-foreground/90 glass-card-3d border border-white/20 hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
                >
                  <span>Calculate Your ROAS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-muted-foreground font-light pt-2">
                ⚡ Initial response within 6 hours • Free initial audit call included
              </p>
            </div>
          </div>
        </motion.div>
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
