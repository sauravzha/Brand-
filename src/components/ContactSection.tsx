import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, ArrowRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        description: "Check all required fields are filled correctly"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! 🎉", {
        description: "We'll get back to you within 24 hours"
      });
      
      setFormData({ name: "", email: "", business: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly at hello.brandyatra@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Glowing Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[-10%] w-[550px] h-[550px] bg-gradient-to-tr from-pink-600/15 via-orange-600/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-0 right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-foreground/90">Get In Touch</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-tight leading-[1.1]">
                  Let's engineer<br />
                  something <span className="text-gradient">extraordinary</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  Tell us about your brand vision and margins. We'll respond with a free audited growth proposal within 24 hours.
                </p>
              </div>

              {/* 3D Contact Details */}
              <div className="space-y-4 pt-2">
                <div className="glass-card-3d p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Email direct</p>
                    <a href="mailto:hello.brandyatra@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      hello.brandyatra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="glass-card-3d p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 text-pink-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Response SLA</p>
                    <p className="text-sm font-semibold text-foreground">Under 6 hours on business days</p>
                  </div>
                </div>

                <div className="glass-card-3d p-4 rounded-xl flex items-center gap-4 border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Headquarters</p>
                    <p className="text-sm font-semibold text-foreground">India — scaling brands globally</p>
                  </div>
                </div>
              </div>

              {/* 3D Social proof */}
              <div className="glass-card-3d p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white font-extrabold shadow-md">
                        {['S', 'A', 'R', 'P'][i-1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-foreground">Trusted by 50+ Modern Founders</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Average initial call duration 25 mins · Custom performance model included
                </p>
              </div>
            </div>

            {/* Right: 3D Form Card */}
            <div className="lg:col-span-7">
              <div className="glass-card-3d p-7 sm:p-10 rounded-2xl border border-white/10 relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Saurav Jha"
                        className={`border-white/10 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 bg-white/[0.04] backdrop-blur-md transition-all duration-300 h-12 text-sm text-foreground rounded-xl ${
                          errors.name ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="founder@company.com"
                        className={`border-white/10 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 bg-white/[0.04] backdrop-blur-md transition-all duration-300 h-12 text-sm text-foreground rounded-xl ${
                          errors.email ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="business" className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      Brand / Website / Store URL
                    </label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g. yourstore.com or @yourinstagram"
                      className="border-white/10 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 bg-white/[0.04] backdrop-blur-md transition-all duration-300 h-12 text-sm text-foreground rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      Tell us about your targets & current ad spend *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="What is your target revenue, monthly ad spend, or current ROAS bottleneck?"
                      rows={5}
                      maxLength={500}
                      className={`border-white/10 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 bg-white/[0.04] backdrop-blur-md transition-all duration-300 resize-none text-sm text-foreground rounded-xl ${
                        errors.message ? 'border-destructive' : ''
                      }`}
                    />
                    <div className="flex justify-between items-center pt-1">
                      {errors.message ? (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      ) : <span />}
                      <p className={`text-xs ${formData.message.length > 450 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                        {formData.message.length} / 500
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="btn-3d-gradient w-full sm:w-auto text-sm font-semibold px-9 py-5 rounded-xl text-white group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <span>Submit Growth Inquiry</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
