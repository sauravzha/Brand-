import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3, CheckCircle2 } from 'lucide-react';
import DataNetwork3D from './3d/DataNetwork3D';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your brand, goals, target audience, and current digital presence through detailed consultations and market research.',
    icon: Search,
    color: 'from-primary to-pink-500',
    details: [
      'Brand audit and analysis',
      'Target audience research',
      'Competitor analysis',
      'Goal setting and KPIs'
    ]
  },
  {
    number: '02',
    title: 'Custom Plan Development',
    description: 'Based on our discovery, we create a tailored marketing strategy aligned with your business objectives and budget.',
    icon: Target,
    color: 'from-pink-500 to-orange-500',
    details: [
      'Customized strategy roadmap',
      'Channel selection',
      'Budget allocation',
      'Timeline planning'
    ]
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description: 'Our team executes campaigns while continuously monitoring performance and optimizing for best results in real-time.',
    icon: Rocket,
    color: 'from-orange-500 to-accent',
    details: [
      'Campaign launch',
      'Content creation',
      'Real-time monitoring',
      'Performance optimization'
    ]
  },
  {
    number: '04',
    title: 'Reporting & Growth',
    description: 'Regular performance reports and strategy sessions ensure we\'re always moving toward your goals and scaling success.',
    icon: BarChart3,
    color: 'from-accent to-primary',
    details: [
      'Monthly performance reports',
      'Strategy review sessions',
      'Growth recommendations',
      'Continuous improvement'
    ]
  }
];

const ProcessSection = () => {
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

    const element = document.getElementById('process');
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
    <section id="process" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Background */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-[500px] pointer-events-none opacity-20">
        <DataNetwork3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures your brand gets the results it deserves
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 items-center`}
              >
                {/* Icon & Number */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <div className="relative">
                    <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/30 mx-auto`}>
                      <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                      <span className="text-4xl sm:text-6xl font-bold text-gradient opacity-20 font-poppins">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full md:w-2/3">
                  <div className="glass-effect p-6 sm:p-8 rounded-2xl space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your digital journey?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

