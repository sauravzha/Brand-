import { Instagram, Linkedin, Youtube, Facebook, Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import logo from "@/assets/brandyatra-logo.png";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Instagram & Meta Ads", href: "#services" },
    { label: "Google & YouTube Ads", href: "#services" },
    { label: "SEO & Growth Engine", href: "#services" },
    { label: "Creative Teardowns", href: "#portfolio" },
    { label: "Brand Strategy & Positioning", href: "#services" },
  ],
  company: [
    { label: "Our Story", href: "#about" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Pricing Architecture", href: "#pricing" },
    { label: "Blog & Notes", to: "/blog" },
    { label: "Careers", to: "/careers" },
  ],
  resources: [
    { label: "Free SOPs & Playbooks", href: "#resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95",
    label: "Instagram",
    color: "hover:text-pink-400 hover:border-pink-500/40",
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com", 
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-500/40",
  },
  { 
    icon: Youtube, 
    href: "https://youtube.com", 
    label: "YouTube",
    color: "hover:text-red-400 hover:border-red-500/40",
  },
  { 
    icon: Facebook, 
    href: "https://facebook.com", 
    label: "Facebook",
    color: "hover:text-indigo-400 hover:border-indigo-500/40",
  },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      {/* 3D Atmospheric Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 sm:py-20">
          {/* Brand Column — wider */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-accent opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />
                <img src={logo} alt="Brandयात्रा Logo" className="relative h-11 w-11 object-contain drop-shadow-[0_4px_12px_rgba(99,102,241,0.5)]" />
              </div>
              <h3 className="text-2xl font-black font-poppins tracking-tight">
                <span className="text-gradient">Brand</span>
                <span className="text-white drop-shadow-md">यात्रा</span>
              </h3>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-light">
              A high-precision creative marketing studio engineering exponential customer acquisition for ambitious startups and modern brands.
            </p>
            
            {/* 3D Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`glass-card-3d w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 active:scale-95 ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <a
                href="mailto:hello.brandyatra@gmail.com"
                aria-label="Email"
                className="glass-card-3d w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5">
              Growth Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.href && scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5">
              Brandयात्रा
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.href && scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left font-light"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5">
              Knowledge Base
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.href && scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 text-left font-light"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Direct Email */}
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <a 
                href="mailto:hello.brandyatra@gmail.com" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/90 hover:text-primary transition-colors group"
              >
                <span>hello.brandyatra@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Brandयात्रा. Crafted with precision for high-growth ventures.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-light">
              Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> in India
            </p>
            <span className="text-white/20">•</span>
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
