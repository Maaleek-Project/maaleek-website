import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
            alt="Maaleek Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#fonctionnalites" className="text-foreground hover:text-primary transition-colors">
            Fonctionnalités
          </a>
          <a href="#telechargement" className="text-foreground hover:text-primary transition-colors">
            Télécharger
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="hero" size="sm">
          Télécharger l'app
        </Button>
      </div>
    </header>
  );
};

export default Header;