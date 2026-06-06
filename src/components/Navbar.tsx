import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/brandyatra-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Brandयात्रा Logo" className="h-20 sm:h-24 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <ModeToggle />
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden group bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect animate-slide-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                navigate("/blog");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
            >
              Contact
            </button>
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
