import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Apprendre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Apprendre
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les dernières actualités, tendances et conseils pour optimiser votre présence digitale professionnelle.
            </p>
          </div>
        </div>
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Apprendre;