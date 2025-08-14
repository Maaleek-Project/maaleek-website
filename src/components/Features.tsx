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
      description: "1 scan = 1 impression durable. Crée un lien instantané avec ton interlocuteur."
    },
    {
      icon: Palette,
      title: "Design personnalisable", 
      description: "Montre ta personnalité. Sois professionnel, stylé ou créatif mais surtout, sois unique."
    },
    {
      icon: Cloud,
      title: "Synchronisation Cloud",
      description: "Ta carte, toujours à jour, toujours disponible, sur tous tes appareils."
    },
    {
      icon: Shield,
      title: "Sécurisé et Privé",
      description: "Tes données t'appartiennent. Elles sont cryptées et protégées par défaut."
    },
    {
      icon: Zap,
      title: "Partage instantané",
      description: "Envoie ta carte comme un éclair via QR ou lien direct. Pas besoin que l'autre ait l'app."
    },
    {
      icon: Users,
      title: "Gestion des contacts intelligentes",
      description: "Fini les contacts oubliés. Organise, classe, retrouve tout ton réseau sans effort."
    },
    {
      icon: Globe,
      title: "Interface Multi-langues",
      description: "Tu voyages ? Tu bosses à l'international ? Ton image pro voyage avec toi."
    },
    {
      icon: BarChart,
      title: "Statistiques et Analytiques",
      description: "Qui a vu ta carte ? Combien de fois ? Quand ? Tu sais tout. Et tu agis mieux."
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
            <span className="text-accent">Swipe, scan, connecte.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Avec Maaleek, ton réseau grandit à la vitesse de ton ambition avec les fonctionnalités essentielles pour créer, gérer et maximiser vos connexions professionnelles.
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
                Et si votre prochaine opportunité dépendait d'un scan ?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Rejoignez des milliers de professionnels qui ont déjà choisi Maaleek pour réseauter sans effort, sans papier, sans perdre une seule rencontre.
              </p>
              
              {/* Statistiques */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Testeurs</div>
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