import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Client logos configuration
// To add your own client logos:
// 1. Add logo images to src/assets/clients/ folder (e.g., client1.png, client2.png)
// 2. Import them: import client1Logo from '@/assets/clients/client1.png'
// 3. Replace the logo URLs below with your imported images or external URLs

// Example with local imports (uncomment and use when you have actual logos):
// import client1Logo from '@/assets/clients/client1.png';
// import client2Logo from '@/assets/clients/client2.png';

const clientLogos = [
  { 
    name: 'TechStart Pro', 
    logo: 'https://cdn.simpleicons.org/google/4285F4',
    website: '#' 
  },
  { 
    name: 'EcoLife Store', 
    logo: 'https://cdn.simpleicons.org/amazon/AWS/FF9900',
    website: '#' 
  },
  { 
    name: 'FitFusion App', 
    logo: 'https://cdn.simpleicons.org/microsoft/00A4EF',
    website: '#' 
  },
  { 
    name: 'Digital Solutions', 
    logo: 'https://cdn.simpleicons.org/meta/0081FB',
    website: '#' 
  },
  { 
    name: 'Creative Agency', 
    logo: 'https://cdn.simpleicons.org/adobe/FF0000',
    website: '#' 
  },
  { 
    name: 'Innovation Hub', 
    logo: 'https://cdn.simpleicons.org/shopify/96BF48',
    website: '#' 
  },
];

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('client-logos');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="client-logos" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-2">
            Trusted by <span className="text-gradient">Growing Brands</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We're proud to partner with innovative startups and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {clientLogos.map((client, index) => (
            <motion.a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 sm:p-6 glass-effect rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full h-12 sm:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image fails to load - creates a colored initial avatar
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=8b5cf6&color=fff&size=128&bold=true`;
                  target.className = target.className.replace('grayscale', '');
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
