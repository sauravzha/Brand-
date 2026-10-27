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
          ? "glass-effect shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex-shrink-0 flex items-center gap-2 group"
          >
            <img src={logo} alt="Brandयात्रा Logo" className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold font-poppins">
                <span className="text-gradient">Brand</span>
                <span className="text-foreground">यात्रा</span>
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.type === "scroll" 
                ? isHomePage && activeSection === link.id
                : location.pathname === link.path;
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                  )}
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
              className="relative overflow-hidden group bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 rounded-lg px-5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
