import { motion } from 'framer-motion';

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
    <section id="client-logos" className="py-16 sm:py-20 relative overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]"
        >
          Trusted by growing brands across India
        </motion.p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-20" />

        <div className="flex w-[300%] sm:w-[200%] md:w-[150%] animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-8 sm:px-12 group transition-all duration-300"
            >
              <div className="flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 rounded-xl border border-transparent hover:border-border/30 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full h-8 sm:h-10 w-auto object-contain opacity-30 group-hover:opacity-70 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=8b5cf6&color=fff&size=128&bold=true`;
                    target.className = target.className.replace('grayscale', '');
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
