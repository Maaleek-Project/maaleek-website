import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Kouakou",
      position: "CEO, Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a9?w=80&h=80&fit=crop&crop=face&auto=format",
      content: "Maaleek a révolutionné notre networking d'entreprise. Plus besoin de cartes papier, tout est digitalisé et professionnel.",
      rating: 5
    },
    {
      name: "Ahmed Diallo",
      position: "Directeur Commercial, StartupCI",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      content: "L'application est intuitive et élégante. Mes contacts sont toujours impressionnés par ma carte digitale Maaleek.",
      rating: 5
    },
    {
      name: "Fatou Traoré",
      position: "Consultante Marketing",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      content: "Gain de temps énorme lors des événements networking. Je partage ma carte en un clic et je reçois les contacts instantanément.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ✨ Ils ont vécu ce que vous <span className="text-accent">recherchez</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Autonomie, visibilité, connexions vraies. Ce que Maaleek a changé pour eux, et ce que ça peut changer pour vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;