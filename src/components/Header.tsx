import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#fonctionnalites", label: "Fonctionnalités" },
    { href: "#telechargement", label: "Télécharger" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-elegant" 
        : "bg-white/90 backdrop-blur-md border-b border-border/50"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
                alt="Maaleek Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                maaleek
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Digital Business Cards
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10 font-medium">{item.label}</span>
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* Dropdown pour plus d'options */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-foreground/80 hover:text-foreground transition-all duration-300">
                <span className="font-medium">Plus</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-md transition-colors">
                    Support
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-md transition-colors">
                    Blog
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-md transition-colors">
                    À propos
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button variant="hero" className="hidden md:flex items-center space-x-2 px-6">
              <Download className="h-4 w-4" />
              <span>Télécharger</span>
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-border/50">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-border/30">
              <Button variant="hero" className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>
                <Download className="h-4 w-4 mr-2" />
                Télécharger l'app
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;