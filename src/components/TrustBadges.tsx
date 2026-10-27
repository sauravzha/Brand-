import { ShieldCheck, Award, CheckCircle2, Lock, Flame } from 'lucide-react';

const credentials = [
  {
    title: 'Google Premier Certified',
    subtitle: 'Search, Shopping & Display',
    icon: Award,
  },
  {
    title: 'Meta Media Certified',
    subtitle: 'Advanced Performance Buying',
    icon: Flame,
  },
  {
    title: 'Shopify Partner Agency',
    subtitle: 'High-Converting Checkout Funnels',
    icon: CheckCircle2,
  },
  {
    title: 'HubSpot Inbound Certified',
    subtitle: 'Automation & Lead Routing',
    icon: ShieldCheck,
  },
  {
    title: 'Strict NDA & Data Security',
    subtitle: '100% Account Ownership',
    icon: Lock,
  },
];

const TrustBadges = () => {
  return (
    <div className="py-8 border-y border-border/60 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card/60 transition-colors hover:border-primary/30"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">
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
