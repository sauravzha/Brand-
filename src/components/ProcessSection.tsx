import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

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
    color: 'from-orange-500 to-amber-500',
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
    <section id="process" className="py-24 sm:py-36 relative overflow-hidden bg-muted/30">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px]" />
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Our process
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight">
            Four steps to<br />
            <span className="text-gradient">your growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Our proven methodology ensures your brand gets measurable results, not just vanity metrics.
          </p>
        </motion.div>

        {/* Process Steps — alternating layout with connected line */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden md:block" />

          <div className="space-y-8 sm:space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-10 items-center relative`}
                >
                  {/* Step number dot on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-lg z-10`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon Block */}
                  <div className="flex-shrink-0 w-full md:w-[calc(50%-3rem)]">
                    <div className={`flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="relative">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        {/* Mobile step number */}
                        <div className="md:hidden absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center text-xs font-bold text-foreground">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-shrink-0 w-full md:w-[calc(50%-3rem)]">
                    <div className="border border-border/60 bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl space-y-4 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold font-poppins">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 sm:mt-24"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            Get started today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
