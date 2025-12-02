import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import MessageBubbles3D from "./3d/MessageBubbles3D";
import GrowthSphere3D from "./3d/GrowthSphere3D";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent! We'll get back to you soon.", {
      description: "Thank you for reaching out to Brandयात्रा"
    });
    setFormData({ name: "", email: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 3D Message Bubbles */}
      <div className="absolute left-0 top-20 w-full md:w-1/2 h-[450px] pointer-events-none opacity-30">
        <MessageBubbles3D />
      </div>
      
      {/* 3D Growth Sphere */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/3 h-[350px] pointer-events-none opacity-20">
        <GrowthSphere3D />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
              Let's <span className="text-gradient">Grow Together</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear your brand story and explore how we can help you achieve your goals
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-6 sm:p-10 lg:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
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
                    className="glass-effect border-primary/30 focus:border-primary transition-all duration-300 h-12"
                  />
                </div>
                <div className="space-y-2">
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
                    placeholder="your@email.com"
                    className="glass-effect border-primary/30 focus:border-primary transition-all duration-300 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="business" className="text-sm font-medium text-foreground">
                  Business / Brand
                </label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="glass-effect border-primary/30 focus:border-primary transition-all duration-300 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project and goals..."
                  rows={6}
                  className="glass-effect border-primary/30 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 text-base sm:text-lg px-8 py-6 group"
              >
                Send Message
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 sm:mt-16">
            <div className="glass-effect p-6 sm:p-8 rounded-2xl">
              <p className="text-muted-foreground text-center mb-6">Or reach us directly at:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <a
                  href="mailto:hello.brandyatra@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello.brandyatra@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/brand_yatraa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @brand_yatraa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
