import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Rocket, BarChart3, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your brand, goals, target audience, and current digital presence through detailed consultations and market research.',
    icon: Search,
    color: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'rgba(99, 102, 241, 0.35)',
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
    color: 'from-pink-500 via-rose-500 to-orange-500',
    glow: 'rgba(236, 72, 153, 0.35)',
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
    color: 'from-orange-500 via-amber-500 to-yellow-500',
    glow: 'rgba(249, 115, 22, 0.35)',
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
    color: 'from-cyan-500 via-teal-500 to-indigo-500',
    glow: 'rgba(6, 182, 212, 0.35)',
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
    <section id="process" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Glowing Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-pink-600/15 via-orange-600/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16 sm:mb-24"
        >
          <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-foreground/90">Our Proven Execution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight">
            Four steps to<br />
            <span className="text-gradient">exponential growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Our data-engineered methodology guarantees measurable customer acquisition and real business scale.
          </p>
        </motion.div>

        {/* Process Steps — alternating layout with glowing neon 3D beam */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical 3D neon connecting beam */}
          <div className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-pink-500 to-cyan-500 hidden md:block rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] opacity-80" />

          <div className="space-y-10 sm:space-y-16">
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
                  {/* Step number 3D glowing sphere on the center beam */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                    <div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} p-[2px] shadow-xl`}
                      style={{ boxShadow: `0 0 25px ${step.glow}` }}
                    >
                      <div className="w-full h-full rounded-full bg-slate-950/90 backdrop-blur-md flex items-center justify-center text-white text-base font-extrabold font-poppins border border-white/30">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Icon Block with 3D Float */}
                  <div className="flex-shrink-0 w-full md:w-[calc(50%-3.5rem)]">
                    <div className={`flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="relative group">
                        {/* Ambient glow behind icon */}
                        <div 
                          className="absolute -inset-2 rounded-3xl opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${step.glow}, transparent)` }}
                        />
                        <div 
                          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] relative shadow-2xl group-hover:scale-105 transition-transform duration-500`}
                        >
                          <div className="w-full h-full rounded-[23px] bg-slate-950/60 backdrop-blur-xl flex items-center justify-center border border-white/20">
                            <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]" />
                          </div>
                        </div>
                        {/* Mobile step number */}
                        <div className="md:hidden absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white shadow-lg border border-white/40">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content — 3D Glass Card */}
                  <div className="flex-shrink-0 w-full md:w-[calc(50%-3.5rem)]">
                    <div className="glass-card-3d p-7 sm:p-9 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-500 group">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl sm:text-2xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-muted-foreground">
                          Phase {step.number}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/[0.08]">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/40">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-foreground/80 font-medium">{detail}</span>
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

        {/* 3D CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 sm:mt-24"
        >
          <a
            href="#contact"
            className="btn-3d-gradient inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-semibold text-white group"
          >
            <span>Start Your 4-Step Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

