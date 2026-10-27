import { ShieldCheck, Award, CheckCircle2, Lock, Flame } from 'lucide-react';

const credentials = [
  {
    title: 'Google Premier Certified',
    subtitle: 'Search, Shopping & Display',
    icon: Award,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
  },
  {
    title: 'Meta Media Certified',
    subtitle: 'Advanced Performance Buying',
    icon: Flame,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
  },
  {
    title: 'Shopify Partner Agency',
    subtitle: 'High-Converting Funnels',
    icon: CheckCircle2,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    title: 'HubSpot Inbound Certified',
    subtitle: 'Automation & Lead Routing',
    icon: ShieldCheck,
    color: 'from-orange-500/20 to-pink-500/20 text-orange-400 border-orange-500/30',
  },
  {
    title: 'Strict NDA & Data Security',
    subtitle: '100% Account Ownership',
    icon: Lock,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
  },
];

const TrustBadges = () => {
  return (
    <div className="py-8 relative border-y border-white/[0.06] bg-slate-950/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 items-center">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div
                key={index}
                className="glass-card-3d flex items-center gap-3 p-3.5 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cred.color} border flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground/95 truncate group-hover:text-primary transition-colors">
                    {cred.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;

