import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Témoignages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos utilisateurs pensent de Maaleek et comment notre solution a transformé leur networking professionnel.
            </p>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;