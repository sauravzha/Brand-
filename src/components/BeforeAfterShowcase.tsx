import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle2, XCircle, Sparkles, Building2, Calendar, Target } from 'lucide-react';
import { Button } from './ui/button';

interface CaseTransformation {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  summary: string;
  challenge: string;
  solution: string;
  before: {
    label: string;
    metrics: { name: string; value: string; note: string }[];
  };
  after: {
    label: string;
    metrics: { name: string; value: string; note: string }[];
  };
  keyTakeaways: string[];
  founderQuote: {
    text: string;
    author: string;
    title: string;
  };
}

const transformations: CaseTransformation[] = [
  {
    id: 'techstart',
    client: 'TechStart Pro',
    industry: 'B2B SaaS / Productivity',
    timeline: '90-Day Sprint',
    summary: 'Turned a leaking conversion funnel into a predictable pipeline of qualified enterprise leads.',
    challenge: 'High cost per acquisition (₹4,800/lead) on generic Google search ads with low-converting landing pages and minimal brand recall.',
    solution: 'Re-architected intent keywords, implemented personalized interactive demo landing pages, and launched thought-leadership LinkedIn ads.',
    before: {
      label: 'Before BrandYatra',
      metrics: [
        { name: 'Cost Per Lead', value: '₹4,800', note: 'Unviable unit economics' },
        { name: 'Monthly Demos Booked', value: '18', note: 'Low sales pipeline velocity' },
        { name: 'Landing Page CVR', value: '1.8%', note: 'High bounce rate on mobile' },
        { name: 'Organic Brand Traffic', value: '850/mo', note: 'Zero brand search volume' },
      ],
    },
    after: {
      label: 'After BrandYatra (90 Days)',
      metrics: [
        { name: 'Cost Per Lead', value: '₹1,650', note: '65% CAC reduction' },
        { name: 'Monthly Demos Booked', value: '94', note: '5.2x qualified pipeline' },
        { name: 'Landing Page CVR', value: '6.4%', note: '3.5x higher conversion' },
        { name: 'Organic Brand Traffic', value: '12,400/mo', note: '14.5x organic lift' },
      ],
    },
    keyTakeaways: [
      'Engineered interactive product tour that improved lead-to-opportunity by 42%',
      'Consolidated ad spend from 14 unfocused ad sets into 3 hyper-segmented buyer funnels',
      'Automated HubSpot CRM lead routing with personalized nurture sequences',
    ],
    founderQuote: {
      text: 'BrandYatra didn’t just run ads; they fundamentally fixed how we explain our product value. Our sales team has never had a fuller calendar.',
      author: 'Aakash Verma',
      title: 'Founder & CEO, TechStart Pro',
    },
  },
  {
    id: 'ecolife',
    client: 'EcoLife Goods',
    industry: 'DTC Sustainable Lifestyle',
    timeline: '4 Months',
    summary: 'Scaled monthly revenue from ₹6L to ₹38L while maintaining a healthy 3.8x blended ROAS.',
    challenge: 'Relied purely on Meta carousel ads with diminishing returns; average order value was low and repeat purchase rate was under 8%.',
    solution: 'Built a creator-driven UGC creative pipeline, tested 35+ video hook variations weekly, and deployed automated retention flows on WhatsApp & email.',
    before: {
      label: 'Before BrandYatra',
      metrics: [
        { name: 'Monthly Revenue', value: '₹6.2 Lakhs', note: 'Stagnant across Q1' },
        { name: 'Blended ROAS', value: '1.6x', note: 'Barely breaking even' },
        { name: 'Repeat Purchase Rate', value: '7.8%', note: 'No customer retention system' },
        { name: 'Average Order Value', value: '₹680', note: 'Single-item baskets' },
      ],
    },
    after: {
      label: 'After BrandYatra (120 Days)',
      metrics: [
        { name: 'Monthly Revenue', value: '₹38.4 Lakhs', note: '6.1x top-line growth' },
        { name: 'Blended ROAS', value: '3.8x', note: 'Consistently profitable' },
        { name: 'Repeat Purchase Rate', value: '29.4%', note: '3.7x higher repeat orders' },
        { name: 'Average Order Value', value: '₹1,420', note: 'Smart bundles & cross-sells' },
      ],
    },
    keyTakeaways: [
      'Tested 120+ ad creatives to discover 3 breakout UGC hooks that scaled profitably to ₹15L spend',
      'Implemented bundle pricing & checkout upsells, lifting AOV by 108%',
      'Built automated WhatsApp replenishment flows with 48% open rates and 18% CTR',
    ],
    founderQuote: {
      text: 'The difference between BrandYatra and generic marketing agencies is their obsession with unit economics and creative testing speed.',
      author: 'Meera Nambiar',
      title: 'Co-Founder, EcoLife Goods',
    },
  },
  {
    id: 'fitpulse',
    client: 'FitPulse Labs',
    industry: 'Health & Wellness App',
    timeline: '60-Day Scale',
    summary: 'Accelerated app store organic ranking from #42 to #4 in category, generating 85K+ installs.',
    challenge: 'Sub-par App Store Optimization (ASO), heavy reliance on costly Apple Search Ads, and high 7-day install churn.',
    solution: 'Revamped screenshot storytelling, conducted localized keyword sprint, and launched micro-influencer fitness challenge campaigns.',
    before: {
      label: 'Before BrandYatra',
      metrics: [
        { name: 'Cost Per Install', value: '₹145', note: 'Over budget per user' },
        { name: 'Category Rank', value: '#42', note: 'Health & Fitness' },
        { name: 'Monthly Active Users', value: '14,000', note: 'High day-7 churn' },
        { name: 'App Store Rating', value: '3.6 / 5.0', note: 'Negative feedback on UX' },
      ],
    },
    after: {
      label: 'After BrandYatra (60 Days)',
      metrics: [
        { name: 'Cost Per Install', value: '₹42', note: '71% cheaper acquisition' },
        { name: 'Category Rank', value: '#4', note: 'Top 5 organically' },
        { name: 'Monthly Active Users', value: '88,000', note: '6.2x active user base' },
        { name: 'App Store Rating', value: '4.7 / 5.0', note: '5,000+ positive reviews' },
      ],
    },
    keyTakeaways: [
      'ASO refresh with localized Hindi and English keywords doubled organic impressions in 3 weeks',
      'Creator challenge generated 1,400+ user videos and 3.2M organic TikTok/Reels views',
      'Redesigned onboarding sequence improved day-7 retention by 38%',
    ],
    founderQuote: {
      text: 'They treat our budget like it’s their own money. The level of transparency, weekly reporting, and strategic agility is top-notch.',
      author: 'Rohit Sen',
      title: 'Growth Head, FitPulse',
    },
  },
];

const BeforeAfterShowcase = () => {
  const [selectedCase, setSelectedCase] = useState<string>('techstart');
  const [comparisonMode, setComparisonMode] = useState<'split' | 'after-only'>('split');

  const currentCase = transformations.find((c) => c.id === selectedCase) || transformations[0];

  return (
    <section id="before-after" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-10 -right-40 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none animate-float" style={{ animationDelay: '3.5s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-3d text-xs font-semibold text-primary mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Proof of Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins tracking-tight text-foreground">
            Measurable transformations,<br />
            <span className="text-gradient">not vanity metrics</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every brand that partners with BrandYatra has unique bottlenecks. Here is the audited data on what happened before our intervention—and where they scale today.
          </p>
        </div>

        {/* Client Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/10">
          {transformations.map((item) => {
            const isActive = item.id === selectedCase;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(item.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'btn-3d-gradient text-white border border-white/30 shadow-lg'
                    : 'glass-pill-3d text-foreground/70 hover:text-foreground hover:scale-105'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{item.client}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-muted-foreground'
                  }`}
                >
                  {item.industry.split('/')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Transformation Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl glass-card-3d border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Case Overview Bar */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-primary" /> {currentCase.industry}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" /> {currentCase.timeline}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-poppins">
                  {currentCase.summary}
                </h3>
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 p-1 rounded-full glass-pill-3d text-xs font-semibold">
                <button
                  onClick={() => setComparisonMode('split')}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    comparisonMode === 'split' ? 'bg-white/20 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Side-by-Side
                </button>
                <button
                  onClick={() => setComparisonMode('after-only')}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    comparisonMode === 'after-only' ? 'bg-white/20 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Results Only
                </button>
              </div>
            </div>

            {/* Metrics Comparison Grid */}
            <div className="p-6 sm:p-8">
              <div className={`grid gap-6 ${comparisonMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                {/* BEFORE PANEL */}
                {comparisonMode === 'split' && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5 backdrop-blur-md">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {currentCase.before.label}
                        </span>
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
                        Initial Baseline
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {currentCase.before.metrics.map((metric, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                          <p className="text-[11px] text-muted-foreground font-medium mb-1">{metric.name}</p>
                          <p className="text-xl sm:text-2xl font-bold text-foreground/70 line-through decoration-rose-500/60">
                            {metric.value}
                          </p>
                          <p className="text-[11px] text-muted-foreground/80 mt-1">{metric.note}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-xs text-muted-foreground border-t border-white/10">
                      <strong className="text-foreground/90 font-semibold">The Bottleneck: </strong>
                      {currentCase.challenge}
                    </div>
                  </div>
                )}

                {/* AFTER PANEL */}
                <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-pink-500/5 to-orange-500/10 p-6 space-y-5 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {currentCase.after.label}
                      </span>
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                      Verified Growth
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {currentCase.after.metrics.map((metric, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/[0.05] border border-primary/30 shadow-md">
                        <p className="text-[11px] text-muted-foreground font-medium mb-1">{metric.name}</p>
                        <p className="text-xl sm:text-2xl font-black text-gradient font-poppins">
                          {metric.value}
                        </p>
                        <p className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 inline" /> {metric.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-muted-foreground border-t border-white/10">
                    <strong className="text-foreground/90 font-semibold">Strategic Execution: </strong>
                    {currentCase.solution}
                  </div>
                </div>
              </div>

              {/* What We Executed */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentCase.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-snug">{takeaway}</p>
                  </div>
                ))}
              </div>

              {/* Founder Quote */}
              <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm italic text-foreground/90 font-medium">
                    "{currentCase.founderQuote.text}"
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    <span className="font-bold text-foreground">{currentCase.founderQuote.author}</span> — {currentCase.founderQuote.title}
                  </p>
                </div>
                <Button
                  onClick={() => {
                    const contact = document.getElementById('contact');
                    contact?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-3d-gradient text-white text-xs font-bold flex-shrink-0 rounded-xl px-5 py-2.5"
                >
                  <span>Request Similar Results</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
