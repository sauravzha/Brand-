import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import testimonialMan1 from "@/assets/testimonial-man-1.jpg";
import testimonialWoman1 from "@/assets/testimonial-woman-1.jpg";
import testimonialMan2 from "@/assets/testimonial-man-2.jpg";
import testimonialWoman2 from "@/assets/testimonial-woman-2.jpg";
import testimonialMan3 from "@/assets/testimonial-man-3.jpg";
import FloatingIcons3D from "./3d/FloatingIcons3D";
import { Button } from "./ui/button";
import RotatingRings3D from "./3d/RotatingRings3D";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Founder, Urban Spice Kitchen",
    image: testimonialMan1,
    rating: 5,
    text: "हमारा सपना था कि हमारी family recipe पूरे भारत में पहुंचे। Brandयात्रा ने हमारी Instagram presence को इतना मजबूत बनाया कि अब हमारे पास 3 शहरों में orders आते हैं। They truly understood our desi brand story!"
  },
  {
    name: "Ananya Krishnan",
    role: "Co-founder, EduKids Academy",
    image: testimonialWoman1,
    rating: 5,
    text: "Starting a new online education platform was scary. But Brandयात्रा's team helped us create amazing social campaigns that resonated with Indian parents. Our student enrollments grew 5x in just 4 months!"
  },
  {
    name: "Arjun Malhotra",
    role: "CEO, FitIndia Studio",
    image: testimonialMan2,
    rating: 5,
    text: "मैं बहुत nervous था digital marketing के बारे में। But this team made everything so simple and effective. Their YouTube ads strategy brought real customers to my gym. Best decision ever!"
  },
  {
    name: "Priya Sharma",
    role: "Founder, Ethnic Essence",
    image: testimonialWoman2,
    rating: 5,
    text: "हमारे traditional sarees को modern market में launch करना चुनौतीपूर्ण था। Brandयात्रा की team ने Facebook और Instagram campaigns से हमें 10,000+ genuine customers दिलाए। They understand Indian culture perfectly!"
  },
  {
    name: "Vikram Singh",
    role: "CEO, TechSolutions India",
    image: testimonialMan3,
    rating: 5,
    text: "As a B2B startup, हमें proper LinkedIn strategy की जरूरत थी। Brandयात्रा ने न सिर्फ हमारी brand visibility बढ़ाई बल्कि qualified leads भी generate किए। ROI exceeded expectations by 250%!"
  },
  {
    name: "Meera Reddy",
    role: "Owner, Homemade Delights",
    image: testimonialWoman1,
    rating: 5,
    text: "छोटे business के लिए marketing budget limited होता है। Brandयात्रा ने हमारे ₹50,000 के budget से ₹5 lakh का business generate कराया through smart Google Ads campaigns. Truly value for money!"
  },
  {
    name: "Karthik Iyer",
    role: "Founder, Learn & Grow",
    image: testimonialMan2,
    rating: 5,
    text: "Online coaching platform के लिए right students तक पहुंचना मुश्किल था। Their YouTube ads strategy और SEO optimization से हमारे course enrollments में 400% growth हुई। Professional team with great results!"
  }
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* 3D Floating Icons */}
      <div className="absolute right-0 top-10 w-full md:w-1/2 h-[450px] pointer-events-none opacity-35">
        <FloatingIcons3D />
      </div>
      
      {/* Additional 3D Rings */}
      <div className="absolute left-0 bottom-0 w-full md:w-1/3 h-[350px] pointer-events-none opacity-20">
        <RotatingRings3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our partners have to say about their growth journey
          </p>
        </div>

        {/* Testimonials Scrollable Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 sm:gap-8 px-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-slide-in flex-shrink-0 w-[350px] sm:w-[400px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-foreground/90 mb-6 sm:mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-primary/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ← Scroll horizontally to see more stories →
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default TestimonialsSection;
