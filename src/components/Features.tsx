import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  QrCode, 
  Palette, 
  Cloud, 
  Shield, 
  Zap, 
  Users,
  Globe,
  BarChart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Code Intelligent",
      description: "Générez automatiquement des QR codes pour partager vos cartes instantanément"
    },
    {
      icon: Palette,
      title: "Design Personnalisable",
      description: "Créez des cartes uniques avec nos modèles professionnels et options de personnalisation"
    },
    {
      icon: Cloud,
      title: "Synchronisation Cloud",
      description: "Vos cartes sont sauvegardées et synchronisées sur tous vos appareils"
    },
    {
      icon: Shield,
      title: "Sécurisé et Privé",
      description: "Vos données sont protégées avec un chiffrement de bout en bout"
    },
    {
      icon: Zap,
      title: "Partage Instantané",
      description: "Partagez vos informations en un tap via NFC, QR code ou lien direct"
    },
    {
      icon: Users,
      title: "Gestion de Contacts",
      description: "Organisez et gérez facilement tous vos contacts professionnels"
    },
    {
      icon: Globe,
      title: "Multi-langues",
      description: "Interface disponible en plusieurs langues pour un usage international"
    },
    {
      icon: BarChart,
      title: "Analytiques",
      description: "Suivez les performances de vos cartes avec des statistiques détaillées"
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Fonctionnalités Avancées
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez toutes les fonctionnalités qui font de Maaleek l'application 
            de référence pour le networking professionnel moderne.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à révolutionner votre networking ?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez des milliers de professionnels qui utilisent déjà Maaleek
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                <div className="text-white/80">Utilisateurs actifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                <div className="text-white/80">Cartes partagées</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">4.9★</div>
                <div className="text-white/80">Note sur les stores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;