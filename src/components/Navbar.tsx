import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/brandyatra-logo.png";

const navLinks = [
  { label: "Home", id: "hero", type: "scroll" },
  { label: "Services", id: "services", type: "scroll" },
  { label: "About", id: "about", type: "scroll" },
  { label: "Work", id: "portfolio", type: "scroll" },
  { label: "Blog", path: "/blog", type: "route" },
  { label: "Resources", path: "/resources", type: "route" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section for visual indicator
      if (isHomePage) {
        const sections = ["contact", "portfolio", "about", "services", "hero"];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.type === "route" && link.path) {
      navigate(link.path);
      setIsMobileMenuOpen(false);
    } else if (link.id) {
      scrollToSection(link.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex-shrink-0 flex items-center gap-2.5 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md scale-95 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={logo} alt="Brandयात्रा Logo" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-lg font-bold font-poppins tracking-tight block">
                <span className="text-gradient">Brand</span>
                <span className="text-foreground">यात्रा</span>
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = link.type === "scroll" 
                ? isHomePage && activeSection === link.id
                : location.pathname === link.path;
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-white bg-gradient-to-r from-primary/30 via-pink-500/20 to-orange-500/20 border border-white/20 shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="btn-3d-gradient text-white font-semibold text-xs rounded-full px-5 py-2.5 border border-white/20"
            >
              <span className="flex items-center gap-1.5">
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground relative w-10 h-10"
            >
              <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                <X size={22} />
              </span>
              <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={22} />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Full screen overlay */}
      <div className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`relative z-10 flex flex-col h-full pt-24 pb-8 px-6 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
        }`}>
          <div className="space-y-1 flex-1">
            {navLinks.map((link, index) => {
              const isActive = link.type === "scroll"
                ? isHomePage && activeSection === link.id
                : location.pathname === link.path;
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-left px-4 py-4 text-2xl font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-4 text-2xl font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all duration-300"
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              Contact
            </button>
          </div>
          
          <div className="pt-6 border-t border-border/30">
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/30 py-6 text-lg rounded-xl"
            >
              Start a project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
