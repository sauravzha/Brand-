import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import testimonialMan1 from "@/assets/testimonial-man-1.jpg";
import testimonialWoman1 from "@/assets/testimonial-woman-1.jpg";
import testimonialMan2 from "@/assets/testimonial-man-2.jpg";
import testimonialWoman2 from "@/assets/testimonial-woman-2.jpg";
import testimonialMan3 from "@/assets/testimonial-man-3.jpg";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Founder, Urban Spice Kitchen",
    image: testimonialMan1,
    rating: 5,
    tag: "DTC Growth",
    text: "हमारा सपना था कि हमारी family recipe पूरे भारत में पहुंचे। Brandयात्रा ने हमारी Instagram presence को इतना मजबूत बनाया कि अब हमारे पास 3 शहरों में orders आते हैं। They truly understood our desi brand story!"
  },
  {
    name: "Ananya Krishnan",
    role: "Co-founder, EduKids Academy",
    image: testimonialWoman1,
    rating: 5,
    tag: "EdTech 5x",
    text: "Starting a new online education platform was scary. But Brandयात्रा's team helped us create amazing social campaigns that resonated with Indian parents. Our student enrollments grew 5x in just 4 months!"
  },
  {
    name: "Arjun Malhotra",
    role: "CEO, FitIndia Studio",
    image: testimonialMan2,
    rating: 5,
    tag: "Local Performance",
    text: "मैं बहुत nervous था digital marketing के बारे में। But this team made everything so simple and effective. Their YouTube ads strategy brought real customers to my gym. Best decision ever!"
  },
  {
    name: "Priya Sharma",
    role: "Founder, Ethnic Essence",
    image: testimonialWoman2,
    rating: 5,
    tag: "E-Commerce",
    text: "हमारे traditional sarees को modern market में launch करना चुनौतीपूर्ण था। Brandयात्रा की team ने Facebook और Instagram campaigns से हमें 10,000+ genuine customers दिलाए। They understand Indian culture perfectly!"
  },
  {
    name: "Vikram Singh",
    role: "CEO, TechSolutions India",
    image: testimonialMan3,
    rating: 5,
    tag: "B2B SaaS 250% ROI",
    text: "As a B2B startup, हमें proper LinkedIn strategy की जरूरत थी। Brandयात्रा ने न सिर्फ हमारी brand visibility बढ़ाई बल्कि qualified leads भी generate किए। ROI exceeded expectations by 250%!"
  },
  {
    name: "Meera Reddy",
    role: "Owner, Homemade Delights",
    image: testimonialWoman1,
    rating: 5,
    tag: "10x Revenue",
    text: "छोटे business के लिए marketing budget limited होता है। Brandयात्रा ने हमारे ₹50,000 के budget से ₹5 lakh का business generate कराया through smart Google Ads campaigns. Truly value for money!"
  },
  {
    name: "Karthik Iyer",
    role: "Founder, Learn & Grow",
    image: testimonialMan2,
    rating: 5,
    tag: "400% Enrollment",
    text: "Online coaching platform के लिए right students तक पहुंचना मुश्किल था। Their YouTube ads strategy और SEO optimization से हमारे course enrollments में 400% growth हुई। Professional team with great results!"
  }
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Glowing Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-pink-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground/90">Verified Feedback</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight leading-[1.1]">
              What our partners<br />
              <span className="text-gradient">say about Brandयात्रा</span>
            </h2>
          </div>
          
          {/* 3D Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll testimonials left"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? 'glass-card-3d border-white/20 hover:border-primary/50 text-foreground cursor-pointer hover:scale-105 active:scale-95'
                  : 'border-white/5 bg-white/[0.02] text-foreground/20 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll testimonials right"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'glass-card-3d border-white/20 hover:border-primary/50 text-foreground cursor-pointer hover:scale-105 active:scale-95'
                  : 'border-white/5 bg-white/[0.02] text-foreground/20 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Scrollable Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4"
          >
            <div className="flex gap-5 sm:gap-6" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card-3d p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 flex-shrink-0 w-[340px] sm:w-[410px] flex flex-col justify-between group"
                >
                  <div>
                    {/* Quote + Rating row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-muted-foreground border border-white/10 ml-2">
                          {testimonial.tag}
                        </span>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm sm:text-base text-foreground/85 mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08]">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40 shadow-lg group-hover:ring-primary transition-all">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-xs" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
