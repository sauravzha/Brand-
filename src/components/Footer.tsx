import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/brandyatra-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 sm:py-16">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={logo} alt="Brandयात्रा Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
              <h3 className="text-xl sm:text-2xl font-bold font-poppins">
                <span className="text-gradient">Brand</span>
                <span className="text-foreground">यात्रा</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Grow with Us
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming brands into digital journeys through creative marketing, automation, and strategic storytelling.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/brand_yatraa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © 2025 Brandयात्रा — <span className="text-gradient">Grow with Us</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
