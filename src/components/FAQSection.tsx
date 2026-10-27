import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Brandयात्रा offer?",
    answer: "We offer comprehensive digital marketing services including Instagram & Facebook Ads Management, YouTube Ads, Google Ads (Search & Display), Social Media Management, SEO Optimization, Email Marketing & Automation, and Brand Strategy & Consulting. Each service is tailored to help startups and modern businesses scale their customer acquisition."
  },
  {
    question: "How much do your services cost?",
    answer: "We offer three flexible tiers: Essential (₹20,000/month) perfect for early-stage startups, Growth (₹50,000/month) for rapidly scaling brands, and Enterprise (Custom pricing) for established organizations with complex omnichannel funnels. Transparent pricing, zero hidden agency fees."
  },
  {
    question: "How long does it take to see results?",
    answer: "Typically, you'll start seeing initial ad engagement and conversion velocity within 2-3 weeks, with significant ROAS improvements by 2-3 months. We provide live real-time dashboard tracking and bi-weekly strategic sprint reviews so you monitor every rupee."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We specialize in working with startups, DTC founders, and ambitious modern businesses! Whether you're launching your first product or looking to scale beyond ₹10L/month GMV, our playbooks are engineered for your stage of growth."
  },
  {
    question: "What makes Brandयात्रा different from traditional agencies?",
    answer: "Traditional agencies sell generic vanity metrics and hand off work to junior interns. Brandयात्रा combines founder-level strategic involvement, custom 3D creative production, and data-backed performance buying that directly moves revenue."
  },
  {
    question: "Can I customize a package for my specific needs?",
    answer: "Absolutely! Every business model has unique friction points. We can customize any package or architect a dedicated omnichannel roadmap tailored to your specific margins and timeline."
  },
  {
    question: "Do you provide transparent reports and live analytics?",
    answer: "Yes! All packages include dedicated monthly analytics dossiers, conversion tracking audits, and bi-weekly growth sprint syncs. Growth and Enterprise clients receive 24/7 Slack channel access and live dashboard integration."
  },
  {
    question: "What if I'm not satisfied with the performance?",
    answer: "Your business growth is our only metric. We offer agile sprint reviews and strategy pivots to ensure we hit your target ROAS. Our 98% client retention rate reflects our commitment to continuous optimization."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Glowing Ambient Light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-[-5%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-pink-500/15 via-orange-500/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Header (sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-4">
              <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground/90">Common Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight leading-[1.1]">
                Questions?<br />
                <span className="text-gradient">We've got answers.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                Everything you need to know about partnering with our growth team.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Have a unique scenario?</p>
                <a
                  href="mailto:hello.brandyatra@gmail.com"
                  className="btn-3d-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white group"
                >
                  <span>Talk to our founders</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: 3D Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card-3d rounded-2xl px-6 sm:px-8 border border-white/10 data-[state=open]:border-primary/60 data-[state=open]:shadow-[0_10px_35px_-5px_rgba(99,102,241,0.25)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary transition-colors py-6 hover:no-underline [&[data-state=open]]:text-primary font-poppins">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-6 pt-1 font-light border-t border-white/[0.06]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
