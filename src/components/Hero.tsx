import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";
import { ArrowRight, Download, Star } from "lucide-react";

const Hero = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-16">
      {/* Background pattern subtil inspiré de Djamo */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30"></div>
      
      {/* Éléments décoratifs minimalistes */}
      <div className="absolute top-32 left-20 w-2 h-16 bg-accent rounded-full opacity-60 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-64 right-32 w-3 h-3 bg-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-1 h-8 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Logo avec style Djamo */}
        <div className="mb-12 animate-scale-in">
          <img 
            src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
            alt="Maaleek" 
            className="h-20 w-auto mx-auto mb-6"
          />
        </div>

        {/* Titre principal - Style Djamo moderne */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
            <span className="text-accent">Partagez</span> vos cartes de visite
            <br />
            dans une application unique
          </h1>
        </div>

        {/* Sous-titre élégant */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Nous bâtissons la première super application de networking professionnel 
            avec des solutions simples, sécurisées et 100% numériques.
          </p>
        </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto font-semibold shadow-elegant rounded-full"
                onClick={() => setIsRegistrationOpen(true)}
              >
                <Download className="h-5 w-5 mr-3" />
                Rejoingnez-nous maintenant
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-lg px-8 py-6 h-auto font-medium rounded-full"
              >
                Voir une démo
              </Button>
            </div>

        {/* Section de validation sociale - Style Djamo */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-foreground mb-2">+50 000 téléchargements</div>
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">4.9</span>
              </div>
            </div>
            
            {/* Badges de disponibilité */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-3 bg-muted rounded-xl px-6 py-4">
                <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">iOS</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">App Store</div>
                  <div className="text-xs text-muted-foreground">Disponible</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 bg-muted rounded-xl px-6 py-4">
                <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AND</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Google Play</div>
                  <div className="text-xs text-muted-foreground">Disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </section>
  );
};

export default Hero;
