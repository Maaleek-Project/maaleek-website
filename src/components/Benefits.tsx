import { CreditCard, Globe, BarChart, Recycle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Partage instantané de vos coordonnées sans contact physique",
      description: "Échangez vos informations professionnelles en un simple geste, sans manipulation de cartes papier."
    },
    {
      icon: Globe,
      title: "Visibilité pro accrue sur tous vos réseaux",
      description: "Maximisez votre présence professionnelle et développez votre influence digitale."
    },
    {
      icon: BarChart,
      title: "Statistiques en temps réel sur vos partages",
      description: "Suivez et analysez l'impact de vos interactions professionnelles en temps réel."
    },
    {
      icon: Recycle,
      title: "Écologique : fini les cartes papier jetées",
      description: "Contribuez à la préservation de l'environnement avec une solution 100% numérique."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Pourquoi utiliser <span className="text-accent">Maaleek</span> ?
          </h2>
        </div>

        {/* Grille des bénéfices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-medium transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;