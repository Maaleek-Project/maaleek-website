import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Star, CheckCircle, Smartphone } from "lucide-react";

const Download = () => {
  return (
    <section id="telechargement" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* En-tête de section - Style Djamo */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Téléchargez <span className="text-accent">Maaleek</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Disponible gratuitement sur toutes les plateformes. 
            Commencez votre networking moderne dès aujourd'hui.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Card principale de téléchargement */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Informations */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">Application Mobile</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    L'expérience complète de networking
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toutes les fonctionnalités optimisées pour une utilisation mobile intuitive et performante.
                  </p>
                </div>
                
                {/* Boutons de téléchargement */}
                <div className="space-y-4">
                  <Button variant="default" size="lg" className="w-full justify-center text-base h-14">
                    <DownloadIcon className="h-5 w-5 mr-3" />
                    Télécharger sur App Store
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-center text-base h-14">
                    <DownloadIcon className="h-5 w-5 mr-3" />
                    Télécharger sur Google Play
                  </Button>
                </div>
                
                {/* Avantages */}
                <div className="space-y-3 pt-4">
                  {[
                    "Gratuit à télécharger et utiliser",
                    "Aucune limite sur les cartes créées", 
                    "Synchronisation automatique",
                    "Support client 24/7"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup/Visuel */}
              <div className="relative">
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-8 text-center">
                  <img 
                    src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
                    alt="Maaleek App" 
                    className="h-16 w-auto mx-auto mb-6 animate-float"
                  />
                  <div className="space-y-4 text-center">
                    <h4 className="text-lg font-semibold text-foreground">Interface Moderne</h4>
                    <p className="text-sm text-muted-foreground">
                      Design épuré et fonctionnalités intuitives
                    </p>
                    
                    {/* Compatibilité */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold text-foreground">iOS 14+</div>
                        <div className="text-xs text-muted-foreground">iPhone & iPad</div>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold text-foreground">Android 8+</div>
                        <div className="text-xs text-muted-foreground">Tous appareils</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section évaluations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft">
              <div className="text-2xl font-bold text-foreground mb-2">+50K</div>
              <div className="text-sm text-muted-foreground">Téléchargements</div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">4.9</span>
              </div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft">
              <div className="text-2xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;