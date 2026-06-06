import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ROICalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [results, setResults] = useState<{
    reachRange: string;
    leadsRange: string;
    roi: string;
  } | null>(null);

  const calculateROI = () => {
    const budget = parseFloat(monthlyBudget);
    if (!budget) return;

    // Based on user request: 50k gives 1 Lakh to 2 Lakh engagement
    // So multiplier is 2x to 4x for engagement (reach)
    const reachMin = budget * 2;
    const reachMax = budget * 4;

    // Let's assume 1-2% of engagement converts to leads
    const leadsMin = Math.round(reachMin * 0.01);
    const leadsMax = Math.round(reachMax * 0.02);

    setResults({
      reachRange: `${reachMin.toLocaleString('en-IN')} - ${reachMax.toLocaleString('en-IN')}`,
      leadsRange: `${leadsMin.toLocaleString('en-IN')} - ${leadsMax.toLocaleString('en-IN')}`,
      roi: '250% - 400%' // typical healthy agency ROI metric
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
            Calculate Your <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See the exact engagement and leads you can expect from your digital marketing budget.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle>Enter Your Budget</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base">Monthly Ad Budget (₹)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="e.g., 50000"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                    className="h-14 text-lg bg-background/50"
                  />
                  <p className="text-sm text-muted-foreground pt-2">
                    Enter amount in INR (₹)
                  </p>
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 h-14 text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all"
                  disabled={!monthlyBudget}
                >
                  Calculate Results
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle>Estimated Monthly Results</CardTitle>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      
                      <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-primary">Expected Engagement</span>
                        </div>
                        <p className="text-3xl font-bold text-white">
                          {results.reachRange}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Likes, Comments, Shares, & Views</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-accent/10 border border-accent/20 hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-accent" />
                          <span className="text-sm font-medium text-accent">Qualified Leads</span>
                        </div>
                        <p className="text-3xl font-bold text-white">
                          {results.leadsRange}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Potential customers reaching out</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-medium text-orange-500">Estimated ROI</span>
                        </div>
                        <p className="text-3xl font-bold text-white">
                          {results.roi}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Return on ad spend</p>
                      </div>

                    </div>

                    <div className="pt-2">
                      <Button
                        onClick={() => {
                          window.location.href = "mailto:jhasaurav562@gmail.com";
                        }}
                        className="w-full bg-white text-black hover:bg-gray-200 h-12"
                      >
                        Start Growing Now
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center px-4">
                    <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4 animate-pulse" />
                    <p className="text-lg text-muted-foreground">
                      Enter your budget to unlock your brand's true potential.
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
