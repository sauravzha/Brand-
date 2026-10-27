import { ShieldCheck, Award, CheckCircle2, Lock, Flame, TrendingUp, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const impactStats = [
  {
    metric: '₹10Cr+',
    label: 'Profitable Ad Spend Managed',
    sub: 'Meta, Google & YouTube Performance Ads',
    icon: Flame,
    color: 'from-orange-500 via-amber-500 to-red-500',
    glow: 'rgba(249, 115, 22, 0.35)',
    badge: 'Proven Scale',
    beacon: 'bg-orange-400'
  },
  {
    metric: '3.8x',
    label: 'Average Blended ROAS',
    sub: 'Performance marketing with strict unit economics',
    icon: TrendingUp,
    color: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'rgba(16, 185, 129, 0.35)',
    badge: 'High-Yield',
    beacon: 'bg-emerald-400'
  },
  {
    metric: '150+',
    label: 'High-Growth Brands Scaled',
    sub: 'Websites, Digital Funnels & Automation',
    icon: Rocket,
    color: 'from-purple-500 via-pink-500 to-indigo-500',
    glow: 'rgba(168, 85, 247, 0.35)',
    badge: 'Global Scale',
    beacon: 'bg-purple-400'
  },
  {
    metric: '98%',
    label: 'Client Sprint Retention',
    sub: 'Agile sprints & dedicated in-house engineering squad',
    icon: ShieldCheck,
    color: 'from-cyan-400 via-blue-500 to-indigo-500',
    glow: 'rgba(6, 182, 212, 0.35)',
    badge: 'Long-Term',
    beacon: 'bg-cyan-400'
  }
];

const credentials = [
  {
    title: 'Google Premier Certified',
    subtitle: 'Search, Shopping & YouTube Ads',
    icon: Award,
    badgeColor: 'border-amber-500/30 text-amber-400'
  },
  {
    title: 'Meta Media Certified',
    subtitle: 'Advanced Performance Buying & CAPI',
    icon: Flame,
    badgeColor: 'border-blue-500/30 text-blue-400'
  },
  {
    title: 'Shopify Partner Agency',
    subtitle: 'High-Converting E-Commerce Funnels',
    icon: CheckCircle2,
    badgeColor: 'border-emerald-500/30 text-emerald-400'
  },
  {
    title: 'HubSpot & AI Workflows',
    subtitle: 'Automated CRM & WhatsApp Ops',
    icon: ShieldCheck,
    badgeColor: 'border-orange-500/30 text-orange-400'
  },
  {
    title: '100% IP & Source Ownership',
    subtitle: 'Zero Vendor Lock-In Guarantee',
    icon: Lock,
    badgeColor: 'border-purple-500/30 text-purple-400'
  }
];

const TrustBadges = () => {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-b from-background/90 via-card/40 to-background/90 border-y border-white/[0.08]">
      {/* Background Luminous Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="clay-badge inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>3D Proven Performance Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins tracking-tight text-foreground">
            Numbers That Speak. <span className="text-gradient">Results That Scale.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-xl mx-auto">
            We don't do vanity metrics. Every rupee and hour invested is tracked directly to conversion velocity, ROAS, and enterprise valuation.
          </p>
        </div>

        {/* 4 Puffy 3D Claymorphic Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12 sm:mb-16">
          {impactStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="clay-stat-card p-6 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top specular glow line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                {/* Radial ambient spotlight */}
                <div 
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: item.glow }}
                />

                <div className="space-y-4">
                  {/* Card Header: 3D Clay Icon Bubble + Clay Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`clay-icon-bubble w-12 h-12 bg-gradient-to-br ${item.color} p-[1px] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="w-full h-full rounded-[19px] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]" />
                      </div>
                    </div>

                    <div className="clay-badge px-2.5 py-1 text-[10px] font-bold text-muted-foreground flex items-center gap-1.5 border border-white/10">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.beacon} animate-ping`} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Big 3D Metric Typography */}
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-black font-poppins text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {item.metric}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-gradient">
                      {item.label}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accredited Partner Horizontal Strip with Puffy Clay Badges */}
        <div className="glass-card-3d p-4 sm:p-5 rounded-2xl border border-white/10 max-w-5xl mx-auto shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group cursor-default"
                >
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.06] border ${cred.badgeColor} flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground/90 truncate group-hover:text-primary transition-colors">
                      {cred.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {cred.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBadges;
