import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const services = [
  {
    name: 'Instagram Ads',
    starter: true,
    growth: true,
    enterprise: true,
    features: {
      'Campaign Management': { starter: 'Basic', growth: 'Advanced', enterprise: 'Full Suite' },
      'Creative Design': { starter: 'Limited', growth: 'Standard', enterprise: 'Premium' },
      'A/B Testing': { starter: false, growth: true, enterprise: true },
      'Influencer Integration': { starter: false, growth: false, enterprise: true }
    }
  },
  {
    name: 'Facebook Ads',
    starter: false,
    growth: true,
    enterprise: true,
    features: {
      'Campaign Management': { starter: false, growth: 'Advanced', enterprise: 'Full Suite' },
      'Audience Targeting': { starter: false, growth: 'Standard', enterprise: 'Advanced' },
      'Pixel Setup': { starter: false, growth: true, enterprise: true },
      'Dynamic Ads': { starter: false, growth: false, enterprise: true }
    }
  },
  {
    name: 'Google Ads',
    starter: false,
    growth: true,
    enterprise: true,
    features: {
      'Search Campaigns': { starter: false, growth: true, enterprise: true },
      'Display Network': { starter: false, growth: false, enterprise: true },
      'Shopping Ads': { starter: false, growth: false, enterprise: true },
      'Conversion Tracking': { starter: false, growth: true, enterprise: true }
    }
  },
  {
    name: 'SEO Optimization',
    starter: false,
    growth: 'Add-on',
    enterprise: true,
    features: {
      'On-page SEO': { starter: false, growth: 'Add-on', enterprise: true },
      'Technical SEO': { starter: false, growth: false, enterprise: true },
      'Link Building': { starter: false, growth: false, enterprise: true },
      'Monthly Reports': { starter: false, growth: 'Add-on', enterprise: true }
    }
  },
  {
    name: 'Email Marketing',
    starter: false,
    growth: true,
    enterprise: true,
    features: {
      'Email Campaigns': { starter: false, growth: '2/month', enterprise: 'Unlimited' },
      'Automation': { starter: false, growth: 'Basic', enterprise: 'Advanced' },
      'A/B Testing': { starter: false, growth: false, enterprise: true },
      'CRM Integration': { starter: false, growth: false, enterprise: true }
    }
  }
];

const ServiceComparison = () => {
  return (
    <section id="service-comparison" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            Service <span className="text-gradient">Comparison</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare what's included in each package to find the perfect fit for your business
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/50">
                  <TableHead className="w-[200px] font-bold">Service</TableHead>
                  <TableHead className="text-center font-bold">Starter</TableHead>
                  <TableHead className="text-center font-bold text-primary">Growth</TableHead>
                  <TableHead className="text-center font-bold text-accent">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-border/30 hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-semibold py-4">
                      {service.name}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {service.starter === true ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : service.starter === false ? (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">{service.starter}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {service.growth === true ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : service.growth === false ? (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        <span className="text-sm text-primary font-medium">{service.growth}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {service.enterprise === true ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <span className="text-sm text-accent font-medium">{service.enterprise}</span>
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 px-8 py-6 text-base"
          >
            View Full Pricing Details
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;

