import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const ROICalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [industry, setIndustry] = useState('');
  const [service, setService] = useState('');
  const [results, setResults] = useState<{
    estimatedReach: number;
    estimatedLeads: number;
    estimatedROI: number;
    costPerLead: number;
  } | null>(null);

  const calculateROI = () => {
    const budget = parseFloat(monthlyBudget);
    if (!budget || !industry || !service) return;

    // Industry multipliers
    const industryMultipliers: Record<string, number> = {
      'ecommerce': 1.5,
      'saas': 1.3,
      'healthcare': 1.2,
      'education': 1.1,
      'real-estate': 1.4,
      'other': 1.0
    };

    // Service multipliers
    const serviceMultipliers: Record<string, { reach: number; conversion: number }> = {
      'instagram': { reach: 2.5, conversion: 0.03 },
      'facebook': { reach: 3.0, conversion: 0.025 },
      'google': { reach: 1.8, conversion: 0.05 },
      'youtube': { reach: 2.2, conversion: 0.02 },
      'seo': { reach: 1.5, conversion: 0.04 },
      'email': { reach: 1.2, conversion: 0.08 }
    };

    const industryMult = industryMultipliers[industry] || 1.0;
    const serviceData = serviceMultipliers[service] || { reach: 2.0, conversion: 0.03 };

    const estimatedReach = Math.round(budget * serviceData.reach * industryMult * 100);
    const estimatedLeads = Math.round(estimatedReach * serviceData.conversion);
    const costPerLead = budget / estimatedLeads;
    const estimatedROI = Math.round((estimatedLeads * 50 - budget) / budget * 100); // Assuming average lead value of ₹50

    setResults({
      estimatedReach,
      estimatedLeads,
      estimatedROI,
      costPerLead: Math.round(costPerLead)
    });
  };

  return (
    <section id="roi-calculator" className="py-20 sm:py-32 relative overflow-hidden">
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Calculate Your <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much your business could grow with our digital marketing services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Monthly Marketing Budget (₹)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="e.g., 50000"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry" className="h-12">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS / Tech</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Primary Service</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram Ads</SelectItem>
                      <SelectItem value="facebook">Facebook Ads</SelectItem>
                      <SelectItem value="google">Google Ads</SelectItem>
                      <SelectItem value="youtube">YouTube Ads</SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="email">Email Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 h-12 text-base"
                  disabled={!monthlyBudget || !industry || !service}
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Estimated Results</CardTitle>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-sm text-muted-foreground">Estimated Reach</span>
                        </div>
                        <p className="text-2xl font-bold text-gradient">
                          {results.estimatedReach.toLocaleString()}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          <span className="text-sm text-muted-foreground">Estimated Leads</span>
                        </div>
                        <p className="text-2xl font-bold text-gradient">
                          {results.estimatedLeads.toLocaleString()}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-pink-500" />
                          <span className="text-sm text-muted-foreground">Cost Per Lead</span>
                        </div>
                        <p className="text-2xl font-bold text-gradient">
                          ₹{results.costPerLead}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-500" />
                          <span className="text-sm text-muted-foreground">Estimated ROI</span>
                        </div>
                        <p className="text-2xl font-bold text-gradient">
                          {results.estimatedROI}%
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-4">
                        * These are estimated results based on industry averages. Actual results may vary.
                      </p>
                      <Button
                        onClick={() => {
                          const element = document.getElementById('contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500"
                      >
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                    <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">
                      Fill in the form to see your estimated ROI
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;

