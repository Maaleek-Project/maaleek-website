import { TrendingUp, Users, Globe, Zap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Utilisateurs actifs",
      description: "Professionnels connectés"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Pays couverts",
      description: "En Afrique de l'Ouest"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taux de satisfaction",
      description: "Utilisateurs satisfaits"
    },
    {
      icon: Zap,
      number: "2M+",
      label: "Cartes partagées",
      description: "Échanges réalisés"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;