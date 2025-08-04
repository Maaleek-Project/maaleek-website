import { Download, Scan, Share, Network } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Téléchargez l'app",
      description: "Installez Maaleek gratuitement sur iOS ou Android et créez votre profil professionnel en quelques minutes.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Scan,
      title: "Scannez ou partagez",
      description: "Utilisez votre QR code personnel ou scannez celui de vos contacts pour échanger vos informations instantanément.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Share,
      title: "Gérez vos contacts",
      description: "Organisez, catégorisez et restez en contact avec votre réseau professionnel de manière intelligente.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Network,
      title: "Développez votre réseau",
      description: "Créez des opportunités d'affaires et développez votre influence grâce à un networking efficace.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Comment ça <span className="text-accent">fonctionne</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre étapes simples pour révolutionner votre façon de faire du networking et développer votre réseau professionnel.
          </p>
        </div>

        {/* Étapes */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Contenu */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-elegant"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;