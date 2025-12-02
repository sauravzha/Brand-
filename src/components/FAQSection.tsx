import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SparkleGrid3D from "./3d/SparkleGrid3D";

const faqs = [
  {
    question: "What services does Brandयात्रा offer?",
    answer: "We offer comprehensive digital marketing services including Instagram & Facebook Ads Management, YouTube Ads, Google Ads (Search & Display), Social Media Management, SEO Optimization, Email Marketing & Automation, and Brand Strategy & Consulting. Each service is tailored to help startups and modern businesses grow their online presence."
  },
  {
    question: "How much do your services cost?",
    answer: "We offer three flexible packages: Starter (₹8000/month) perfect for small businesses, Growth (₹17,999/month) for expanding brands, and Enterprise (Custom pricing) for established businesses. Each package includes different features and support levels to match your needs and budget."
  },
  {
    question: "How long does it take to see results?",
    answer: "Typically, you'll start seeing initial results within 2-4 weeks, with significant improvements by 2-3 months. However, the timeline varies based on your industry, competition, current online presence, and chosen services. We provide regular reports so you can track progress every step of the way."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We specialize in working with startups and modern businesses of all sizes! Whether you're just launching or looking to scale, we have packages and strategies designed for your stage of growth. Our Starter package is specifically designed for new businesses with limited budgets."
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
    <section id="faq" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Sparkle Grid */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[600px] h-[400px] pointer-events-none opacity-20">
        <SparkleGrid3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services and how we can help grow your brand
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-effect rounded-2xl border-none px-6 sm:px-8 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in touch with us
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
