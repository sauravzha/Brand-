import { Instagram, Linkedin, Youtube, Facebook, Mail, ArrowUpRight, Heart } from "lucide-react";
import logo from "@/assets/brandyatra-logo.png";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Instagram Ads", href: "#services" },
    { label: "Facebook Ads", href: "#services" },
    { label: "Google Ads", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Brand Strategy", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
  ],
  resources: [
    { label: "Free Resources", to: "/resources" },
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
  },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/30 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 sm:py-20">
          {/* Brand Column — wider */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Brandयात्रा Logo" className="h-10 w-10 object-contain" />
              <h3 className="text-xl font-bold font-poppins">
                <span className="text-gradient">Brand</span>
                <span className="text-foreground">यात्रा</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A creative marketing studio helping startups and modern businesses 
              transform their digital presence through strategy, design, and storytelling.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 text-muted-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              <a
                href="mailto:hello@brandyatra.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300 text-muted-foreground"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.href && scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.href && scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => link.href && scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Email */}
            <div className="mt-6 pt-4 border-t border-border/30">
              <a 
                href="mailto:hello.brandyatra@gmail.com" 
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                hello.brandyatra@gmail.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brandयात्रा. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
