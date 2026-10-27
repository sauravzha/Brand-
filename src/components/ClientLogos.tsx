import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const clientLogos = [
  { 
    name: 'TechStart Pro', 
    logo: 'https://cdn.simpleicons.org/google/ffffff',
    website: '#' 
  },
  { 
    name: 'EcoLife Store', 
    logo: 'https://cdn.simpleicons.org/amazon/ffffff',
    website: '#' 
  },
  { 
    name: 'FitFusion App', 
    logo: 'https://cdn.simpleicons.org/microsoft/ffffff',
    website: '#' 
  },
  { 
    name: 'Digital Solutions', 
    logo: 'https://cdn.simpleicons.org/meta/ffffff',
    website: '#' 
  },
  { 
    name: 'Creative Agency', 
    logo: 'https://cdn.simpleicons.org/adobe/ffffff',
    website: '#' 
  },
  { 
    name: 'Innovation Hub', 
    logo: 'https://cdn.simpleicons.org/shopify/ffffff',
    website: '#' 
  },
];

const ClientLogos = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="client-logos" className="py-16 sm:py-20 relative overflow-hidden border-y border-white/[0.06] bg-slate-950/30 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-foreground/80">Trusted by 50+ Modern High-Growth Ventures Across India</span>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex w-[300%] sm:w-[200%] md:w-[150%] animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((client, index) => (
            <div
              key={index}
              className="flex-1 flex items-center justify-center px-4 sm:px-6 group transition-all duration-300"
            >
              <div className="glass-card-3d flex items-center justify-center w-36 h-18 sm:w-44 sm:h-22 rounded-2xl border border-white/10 hover:border-primary/50 group-hover:scale-105 transition-all duration-300 px-4">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full h-7 sm:h-9 w-auto object-contain opacity-40 group-hover:opacity-95 transition-all duration-500 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=8b5cf6&color=fff&size=128&bold=true`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

