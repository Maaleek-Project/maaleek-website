import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que Maaleek ?",
      answer: "Maaleek est une application mobile qui permet de créer et partager des cartes de visite digitales. Plus besoin de cartes papier, partagez vos informations professionnelles en un clic via NFC, QR code ou lien direct."
    },
    {
      question: "Comment fonctionne le partage NFC ?",
      answer: "Le partage NFC permet de transférer vos informations de contact en approchant simplement votre téléphone de celui de votre interlocuteur. Cette technologie sans contact est rapide, sécurisée et fonctionne sur la plupart des smartphones modernes."
    },
    {
      question: "Puis-je personnaliser ma carte de visite ?",
      answer: "Absolument ! Maaleek offre de nombreuses options de personnalisation : choix des couleurs, ajout de votre logo, sélection des informations à afficher, et même création de plusieurs cartes pour différents contextes professionnels."
    },
    {
      question: "L'application est-elle gratuite ?",
      answer: "Maaleek propose une version gratuite avec les fonctionnalités essentielles. Des forfaits premium sont disponibles pour accéder à des fonctionnalités avancées comme l'analytics détaillé, plus de templates et le stockage illimité."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "La sécurité de vos données est notre priorité. Toutes les informations sont chiffrées et stockées selon les standards de sécurité les plus élevés. Vous gardez le contrôle total sur qui peut voir vos informations."
    },
    {
      question: "Puis-je voir qui a consulté ma carte ?",
      answer: "Oui, avec Maaleek vous pouvez suivre les interactions avec votre carte de visite : nombre de vues, clics sur vos liens, et bien plus. Ces analytics vous aident à mesurer l'efficacité de votre networking."
    },
    {
      question: "L'application fonctionne-t-elle hors ligne ?",
      answer: "Votre carte de visite reste accessible même sans connexion internet. Les fonctionnalités de partage NFC fonctionnent hors ligne, et vos informations sont synchronisées dès que vous retrouvez une connexion."
    },
    {
      question: "Comment puis-je contacter le support ?",
      answer: "Notre équipe support est disponible via l'application, par email à support@maaleek.com, ou sur nos réseaux sociaux. Nous nous engageons à répondre à toutes vos questions dans les 24h."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Questions Fréquentes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur Maaleek et ses fonctionnalités.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;