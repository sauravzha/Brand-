import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Users, Target, ShieldCheck, Sparkles, PieChart } from 'lucide-react';
import { Button } from './ui/button';

interface IndustryProfile {
  id: string;
  label: string;
  cpc: number; // Cost per click in INR
  ctr: number; // Click through rate %
  cvr: number; // Conversion rate %
  aov: number; // Average order or deal value in INR
  roasRange: string;
  primaryChannels: string;
}

const industries: Record<string, IndustryProfile> = {
  dtc: {
    id: 'dtc',
    label: 'D2C & E-Commerce',
    cpc: 8,
    ctr: 2.2,
    cvr: 3.2,
    aov: 1400,
    roasRange: '3.2x - 4.5x',
    primaryChannels: 'Meta Ads (60%), Google Shopping (25%), Creator UGC (15%)',
  },
  b2b: {
    id: 'b2b',
    label: 'B2B & SaaS',
    cpc: 35,
    ctr: 3.5,
    cvr: 4.8,
    aov: 25000,
    roasRange: '4.0x - 6.5x',
    primaryChannels: 'Google Search (50%), LinkedIn Ads (35%), Retargeting (15%)',
  },
  services: {
    id: 'services',
    label: 'Consulting & Agencies',
    cpc: 22,
    ctr: 2.8,
    cvr: 5.5,
    aov: 35000,
    roasRange: '3.5x - 5.0x',
    primaryChannels: 'Google Search (45%), Meta Lead Ads (35%), Cold Email/Outreach (20%)',
  },
  local: {
    id: 'local',
    label: 'Healthcare & Local',
    cpc: 14,
    ctr: 3.8,
    cvr: 6.2,
    aov: 4500,
    roasRange: '3.0x - 4.2x',
    primaryChannels: 'Google Maps / Local Search (50%), Meta Geotargeting (50%)',
  },
};

const budgetPresets = [30000, 75000, 150000, 300000, 500000];

const formatINR = (val: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
};

const ROICalculator = () => {
  const [budget, setBudget] = useState<number>(75000);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('dtc');

  const industry = industries[selectedIndustry] || industries.dtc;

  const calculations = useMemo(() => {
    // Estimated clicks based on industry CPC
    const estimatedClicks = Math.round(budget / industry.cpc);
    // Estimated impressions based on CTR
    const estimatedImpressions = Math.round((estimatedClicks / (industry.ctr / 100)));
    // Conversions (leads or transactions) based on CVR
    const conversions = Math.round(estimatedClicks * (industry.cvr / 100));
    // Estimated Pipeline or Gross Revenue
    const estimatedRevenue = conversions * industry.aov;
    // Estimated ROAS
    const calculatedRoas = (estimatedRevenue / budget).toFixed(1);

    return {
      impressions: estimatedImpressions.toLocaleString('en-IN'),
      clicks: estimatedClicks.toLocaleString('en-IN'),
      conversions: conversions.toLocaleString('en-IN'),
      revenue: formatINR(estimatedRevenue),
      roas: `${calculatedRoas}x`,
    };
  }, [budget, industry]);

  return (
    <section id="roi-calculator" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Projection Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight text-foreground">
            Forecast your return before spending a single Rupee.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Calibrated with real campaign benchmarks across 120+ client accounts. Select your vertical and adjust your planned monthly spend.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-7 shadow-xs">
            {/* Step 1: Industry */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                <span>1. Select Industry Model</span>
                <span className="text-primary font-medium normal-case">Benchmark active</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.values(industries).map((item) => {
                  const isSelected = item.id === selectedIndustry;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedIndustry(item.id)}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-primary font-semibold shadow-xs'
                          : 'border-border/80 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/70'
                      }`}
                    >
                      <div className="truncate">{item.label}</div>
                      <div className="text-[11px] opacity-70 mt-0.5">ROAS ~ {item.roasRange}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Budget Slider */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  2. Planned Monthly Ad Spend
                </label>
                <span className="text-xl sm:text-2xl font-bold font-poppins text-foreground">
                  {formatINR(budget)}
                </span>
              </div>

              <input
                type="range"
                min={20000}
                max={1000000}
                step={5000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {budgetPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setBudget(preset)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      budget === preset
                        ? 'bg-foreground text-background font-semibold'
                        : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {preset >= 100000 ? `₹${preset / 100000} Lakh` : `₹${preset / 1000}k`}
                  </button>
                ))}
              </div>
            </div>

            {/* Channel Mix Insight */}
            <div className="p-4 rounded-xl bg-muted/30 border border-border/70 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-foreground">
                <PieChart className="w-3.5 h-3.5 text-primary" />
                Recommended Channel Split:
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {industry.primaryChannels}
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Projected 30-Day Outcomes
                </span>
                <h3 className="text-lg font-bold text-foreground mt-0.5">
                  Expected Growth Metrics
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Live Model
              </span>
            </div>

            {/* Big Headline Metric: Estimated Revenue / Pipeline */}
            <div className="p-5 rounded-xl bg-primary/[0.04] dark:bg-primary/[0.08] border border-primary/20 space-y-1">
              <span className="text-xs font-medium text-muted-foreground">
                Estimated Gross Value / Pipeline Generated
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-poppins text-primary">
                {calculations.revenue}
              </div>
              <p className="text-xs text-muted-foreground pt-1">
                Based on benchmark average order/contract value of {formatINR(industry.aov)}
              </p>
            </div>

            {/* Secondary Metrics 2x2 */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/70">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span>Est. Impressions</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {calculations.impressions}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Target audience reach</div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/70">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Target className="w-3.5 h-3.5 text-primary" />
                  <span>Qualified Visitors</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {calculations.clicks}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">High-intent landing clicks</div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/70">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-primary" />
                  <span>Estimated Orders/Leads</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {calculations.conversions}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">At ~{industry.cvr}% conversion rate</div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/70">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span>Estimated Blended ROAS</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-primary">
                  {calculations.roas}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Net return on ad spend</div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Button
                onClick={() => {
                  const contact = document.getElementById('contact');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full h-12 text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get a Custom Media Plan for {formatINR(budget)}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero obligations • Includes competitive keyword breakdown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
