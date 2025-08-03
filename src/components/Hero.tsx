import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Users, Share2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Logo principal */}
        <div className="mb-8 animate-float">
          <img 
            src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
            alt="Maaleek Logo" 
            className="h-32 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Partagez vos cartes
          </span>
          <br />
          <span className="text-white">de visite numériques</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Maaleek révolutionne le networking professionnel. Créez, personnalisez et partagez 
          vos cartes de visite numériques en un seul tap.
        </p>

        {/* Statistiques rapides */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-white font-medium">Networking instantané</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Share2 className="h-5 w-5 text-accent" />
            <span className="text-white font-medium">Partage facile</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Smartphone className="h-5 w-5 text-accent" />
            <span className="text-white font-medium">100% mobile</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="download" size="lg" className="text-lg px-8 py-6">
            Télécharger maintenant
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
            Voir la démo
          </Button>
        </div>

        {/* Badge de téléchargement */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">Disponible sur toutes les plateformes</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-white font-medium">iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;