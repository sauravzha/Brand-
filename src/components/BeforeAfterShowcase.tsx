import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Eye } from 'lucide-react';
import { Button } from './ui/button';

const caseStudies = [
  {
    client: 'TechStart Pro',
    industry: 'SaaS',
    period: '3 Months',
    before: {
      impressions: '50K',
      engagement: '2.5%',
      followers: '1.2K',
      websiteTraffic: '800/month'
    },
    after: {
      impressions: '2.5M',
      engagement: '8.4%',
      followers: '15K',
      websiteTraffic: '12K/month'
    },
    improvements: [
      { metric: 'Impressions', change: '+4900%', icon: Eye },
      { metric: 'Engagement Rate', change: '+236%', icon: TrendingUp },
      { metric: 'Followers', change: '+1150%', icon: Users },
      { metric: 'Website Traffic', change: '+1400%', icon: ArrowRight }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    client: 'EcoLife Store',
    industry: 'E-commerce',
    period: '4 Months',
    before: {
      impressions: '80K',
      engagement: '1.8%',
      followers: '2.5K',
      websiteTraffic: '1.5K/month'
    },
    after: {
      impressions: '1.8M',
      engagement: '6.2%',
      followers: '28K',
      websiteTraffic: '18K/month'
    },
    improvements: [
      { metric: 'Impressions', change: '+2150%', icon: Eye },
      { metric: 'Engagement Rate', change: '+244%', icon: TrendingUp },
      { metric: 'Followers', change: '+1020%', icon: Users },
      { metric: 'Website Traffic', change: '+1100%', icon: ArrowRight }
    ],
    color: 'from-green-500 to-emerald-500'
  }
];

const BeforeAfterShowcase = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  return (
    <section id="before-after" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Real <span className="text-gradient">Results</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation our clients experience with our digital marketing strategies
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Case Study Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {caseStudies.map((study, index) => (
              <Button
                key={index}
                onClick={() => setSelectedCase(index)}
                variant={selectedCase === index ? 'default' : 'outline'}
                className={selectedCase === index ? 'bg-gradient-to-r from-primary via-pink-500 to-orange-500' : ''}
              >
                {study.client}
              </Button>
            ))}
          </div>

          {/* Before/After Comparison */}
          {caseStudies.map((study, index) => {
            if (index !== selectedCase) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="glass-effect p-6 sm:p-8 rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold font-poppins mb-1">{study.client}</h3>
                      <p className="text-sm text-muted-foreground">{study.industry} • {study.period}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Before */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-muted-foreground">Before</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Impressions</span>
                          <span className="font-bold">{study.before.impressions}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Engagement Rate</span>
                          <span className="font-bold">{study.before.engagement}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Followers</span>
                          <span className="font-bold">{study.before.followers}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                          <span className="text-sm">Website Traffic</span>
                          <span className="font-bold">{study.before.websiteTraffic}</span>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gradient">After</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm">Impressions</span>
                          <span className="font-bold text-primary">{study.after.impressions}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm">Engagement Rate</span>
                          <span className="font-bold text-primary">{study.after.engagement}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm">Followers</span>
                          <span className="font-bold text-primary">{study.after.followers}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <span className="text-sm">Website Traffic</span>
                          <span className="font-bold text-primary">{study.after.websiteTraffic}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t">
                    {study.improvements.map((improvement, impIndex) => {
                      const Icon = improvement.icon;
                      return (
                        <div key={impIndex} className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                          <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">{improvement.metric}</p>
                          <p className="text-lg font-bold text-gradient">{improvement.change}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => {
                const element = document.getElementById('portfolio');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary via-pink-500 to-orange-500"
            >
              View More Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;

