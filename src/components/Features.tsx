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
      description: "Générez automatiquement des QR codes pour partager vos cartes instantanément."
    },
    {
      icon: Palette,
      title: "Design Personnalisable", 
      description: "Créez des cartes uniques avec nos modèles professionnels et options de personnalisation."
    },
    {
      icon: Cloud,
      title: "Synchronisation Cloud",
      description: "Vos cartes sont sauvegardées et synchronisées sur tous vos appareils."
    },
    {
      icon: Shield,
      title: "Sécurisé et Privé",
      description: "Vos données sont protégées avec un chiffrement de bout en bout."
    },
    {
      icon: Zap,
      title: "Partage Instantané",
      description: "Partagez vos informations en un tap via NFC, QR code ou lien direct."
    },
    {
      icon: Users,
      title: "Gestion de Contacts",
      description: "Organisez et gérez facilement tous vos contacts professionnels."
    },
    {
      icon: Globe,
      title: "Multi-langues",
      description: "Interface disponible en plusieurs langues pour un usage international."
    },
    {
      icon: BarChart,
      title: "Analytiques",
      description: "Suivez les performances de vos cartes avec des statistiques détaillées."
    }
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section - Style Djamo épuré */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Fonctionnalités
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Tout ce dont vous avez besoin
            <br />
            <span className="text-accent">pour votre networking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez toutes les fonctionnalités qui font de Maaleek 
            l'outil de référence pour le networking professionnel moderne.
          </p>
        </div>

        {/* Grille de fonctionnalités - Style minimaliste */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA - Style Djamo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-12 text-center border border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Prêt à révolutionner votre networking ?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Rejoignez des milliers de professionnels qui utilisent déjà Maaleek 
                pour créer des connexions authentiques et durables.
              </p>
              
              {/* Statistiques */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-bold text-foreground mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Cartes partagées</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Note moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;