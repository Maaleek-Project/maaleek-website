import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Download as DownloadIcon, Star, CheckCircle } from "lucide-react";

const Download = () => {
  return (
    <section id="telechargement" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Téléchargez Maaleek
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Disponible gratuitement sur iOS et Android. Commencez votre expérience 
            de networking moderne dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informations et téléchargement */}
          <div className="space-y-8">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Smartphone className="h-8 w-8 text-primary" />
                  Application Mobile
                </CardTitle>
                <CardDescription className="text-lg">
                  L'expérience complète de Maaleek optimisée pour mobile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    App Store
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    Google Play
                  </Button>
                </div>
                
                {/* Avantages */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Gratuit à télécharger et utiliser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Aucune limite sur les cartes créées</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Synchronisation automatique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Support client 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Évaluations */}
            <div className="bg-gradient-accent rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Évaluations Excellentes</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-white text-white" />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-white/80 text-sm">App Store</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-white/80 text-sm">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup de l'application */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <img 
                  src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
                  alt="Maaleek App Preview" 
                  className="h-24 w-auto mx-auto mb-6 animate-float"
                />
                <div className="text-white space-y-4">
                  <h4 className="text-xl font-semibold">Interface Intuitive</h4>
                  <p className="text-white/90">
                    Design moderne et simple pour une utilisation sans effort
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold mb-2">iOS 14+</div>
                  <div className="text-white/80">Compatible iPhone & iPad</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold mb-2">Android 8+</div>
                  <div className="text-white/80">Tous appareils Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/10 rounded-full px-8 py-4">
            <span className="text-foreground font-medium">Plus de 50 000 professionnels nous font confiance</span>
            <Button variant="download" size="sm">
              Rejoignez-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;