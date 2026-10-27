import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, ArrowRight, Mail, MapPin, Clock } from "lucide-react";

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
        description: "We'll get back to you within 24-48 hours"
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Contact
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-tight leading-[1.1]">
                  Let's build<br />
                  something <span className="text-gradient">great</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Tell us about your project and we'll get back to you within 24 hours with a free consultation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Email us</p>
                    <a href="mailto:hello.brandyatra@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      hello.brandyatra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Response time</p>
                    <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Based in</p>
                    <p className="text-sm text-muted-foreground">India — working globally</p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="border border-border/40 rounded-xl p-5 bg-card/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">
                        {['S', 'A', 'R', 'P'][i-1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1">Join 50+ happy clients</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Average response within 6 hours · Free initial consultation
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="border border-border/60 bg-card/30 backdrop-blur-sm p-7 sm:p-10 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={`border-border/50 focus:border-primary bg-background/50 transition-all duration-300 h-11 ${
                          errors.name ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className={`border-border/50 focus:border-primary bg-background/50 transition-all duration-300 h-11 ${
                          errors.email ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="business" className="text-sm font-medium text-foreground">
                      Business / Brand
                    </label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className="border-border/50 focus:border-primary bg-background/50 transition-all duration-300 h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Tell us about your project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="What are you looking to achieve? What's your timeline and budget range?"
                      rows={5}
                      maxLength={500}
                      className={`border-border/50 focus:border-primary bg-background/50 transition-all duration-300 resize-none ${
                        errors.message ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    )}
                    <p className={`text-xs ${formData.message.length > 450 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                      {formData.message.length} / 500
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-base px-8 py-5 rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
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
