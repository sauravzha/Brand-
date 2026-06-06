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
  // We duplicate the logos array so that the marquee scrolls seamlessly
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="client-logos" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      
      {/* Premium Glow effect behind the logos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-2">
            Trusted by <span className="text-gradient">Growing Brands</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We're proud to partner with innovative startups and businesses
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Gradient fades on the left and right edges for a premium "disappearing" effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

        <div className="flex w-[300%] sm:w-[200%] md:w-[150%] animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-8 sm:px-12 group transition-all duration-300"
            >
              <div className="glass-effect p-6 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center w-40 h-24 hover:border-primary/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
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
