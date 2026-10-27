import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Brandयात्रा offer?",
    answer: "We offer comprehensive digital marketing services including Instagram & Facebook Ads Management, YouTube Ads, Google Ads (Search & Display), Social Media Management, SEO Optimization, Email Marketing & Automation, and Brand Strategy & Consulting. Each service is tailored to help startups and modern businesses grow their online presence."
  },
  {
    question: "How much do your services cost?",
    answer: "We offer three flexible packages: Essential (₹20,000/month) perfect for small businesses, Growth (₹50,000/month) for expanding brands, and Enterprise (Custom pricing) for established businesses. Each package includes different features and support levels to match your needs and budget."
  },
  {
    question: "How long does it take to see results?",
    answer: "Typically, you'll start seeing initial results within 2-4 weeks, with significant improvements by 2-3 months. However, the timeline varies based on your industry, competition, current online presence, and chosen services. We provide regular reports so you can track progress every step of the way."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We specialize in working with startups and modern businesses of all sizes! Whether you're just launching or looking to scale, we have packages and strategies designed for your stage of growth. Our Essential package is specifically designed for new businesses with limited budgets."
  },
  {
    question: "What makes Brandयात्रा different from other agencies?",
    answer: "We combine creative storytelling with data-driven strategies, understand both Indian and global markets, offer transparent pricing with no hidden costs, and provide dedicated support throughout your journey. We're not just an agency – we're your growth partners who genuinely care about your success."
  },
  {
    question: "Can I customize a package for my specific needs?",
    answer: "Absolutely! While we have standard packages, we understand every business is unique. We can customize any package or create a completely tailored solution for your specific requirements. Contact us to discuss your needs and we'll create the perfect plan for you."
  },
  {
    question: "Do you provide reports and analytics?",
    answer: "Yes! All our packages include detailed monthly reports with key metrics, performance insights, and recommendations. Growth and Enterprise packages also include bi-weekly check-ins and real-time dashboard access so you're always informed about your campaigns' performance."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "Your satisfaction is our priority. We offer regular strategy reviews and adjustments to ensure we're meeting your goals. If you're not happy with the progress, we'll work closely with you to understand concerns and modify our approach. Our 98% success rate speaks to our commitment to delivering results."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-36 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Header (sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background text-xs font-medium text-muted-foreground uppercase tracking-widest">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight leading-[1.1]">
                Questions?<br />
                <span className="text-gradient">We've got answers.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything you need to know about working with us.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Still have questions?</p>
                <a
                  href="mailto:jhasaurav562@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm group"
                >
                  Get in touch
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/60 bg-card/30 backdrop-blur-sm rounded-xl px-6 sm:px-7 data-[state=open]:border-primary/20 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-5 hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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
