import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Comment le networking digital révolutionne les échanges professionnels",
      excerpt: "Découvrez comment les cartes de visite numériques transforment la façon dont nous créons et entretenons nos réseaux professionnels.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600",
      author: "Sarah Koné",
      date: "15 Mars 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "5 conseils pour maximiser l'impact de votre carte de visite digitale",
      excerpt: "Optimisez votre présence professionnelle avec ces astuces simples mais efficaces pour créer une carte de visite mémorable.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&h=600",
      author: "Amadou Traoré",
      date: "12 Mars 2024",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "L'avenir du networking en Afrique de l'Ouest",
      excerpt: "Comment les technologies numériques redéfinissent les opportunités d'affaires et les collaborations dans notre région.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600",
      author: "Fatou Diallo",
      date: "10 Mars 2024",
      readTime: "7 min"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Actualités & <span className="text-accent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informé des dernières tendances du networking digital et découvrez comment optimiser vos connexions professionnelles.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-0 bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.readTime}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-accent hover:text-accent/80">
                  Lire la suite
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton voir tous les articles */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
            Voir tous les articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;