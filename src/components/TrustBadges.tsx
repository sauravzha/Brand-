import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const certifications = [
  {
    name: 'Google Ads Certified',
    icon: Award,
    description: 'Certified Google Ads professionals',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Instagram Certified',
    icon: Star,
    description: 'Instagram Marketing Partners',
    color: 'from-pink-500 to-purple-500'
  },
  {
    name: 'Facebook Blueprint',
    icon: Shield,
    description: 'Facebook Marketing Certified',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Verified Agency',
    icon: CheckCircle,
    description: 'Verified digital marketing agency',
    color: 'from-primary to-accent'
  }
];

const TrustBadges = () => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-bold font-poppins mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

