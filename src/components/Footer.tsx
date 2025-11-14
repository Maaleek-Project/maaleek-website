import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";
import ContactModal from "./ContactModal";
import Map from "./Map";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo et description */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/69e1a16f-f967-49a5-b575-9a421cd49172.png" 
              alt="Maaleek" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed text-sm">
              Maaleek La première super application de networking professionnel avec des solutions simples, sécurisées et 100% numériques. Si vous souhaitez en savoir plus sur l'équipe Maaleek qui vous accompagne ou si vous avez la moindre question, contactez-nous directement via le chat intégré dans l'application Maaleek ou par email à l'adresse support@maaleek.com
              Maaleek est édité conjointement par SAUSH SARL.
              Votre carte de visite digitale Maaleek est propulsée SAUSH SARL pour garantir fiabilité et sécurité.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10 h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10 h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10 h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Produit</h3>
            <ul className="space-y-3">
              {[
                { label: "Fonctionnalités", href: "#fonctionnalites" },
                { label: "Télécharger", href: "#telechargement" },
                { label: "Support", href: "#" },
                { label: "Documentation", href: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIETE */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">SOCIETE</h3>
            <ul className="space-y-3">
              {[
                { label: "À propos", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Carrières", href: "#" },
                { label: "Partenaires", href: "#" },
                { label: "Politique de confidentialité", href: "/politique-confidentialite" },
                { label: "Conditions générales d'utilisation", href: "/conditions-generales" },
                { label: "Mentions légales", href: "/mentions-legales" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESSOURCES */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">RESSOURCES</h3>
            <ul className="space-y-3">
              {[
                { label: "Apprendre", href: "/apprendre" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/70" />
                <span className="text-sm text-background/70">maaleekapp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/70" />
                <span className="text-sm text-background/70">+(225) 0777002625 | 0779312475</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/70" />
                <span className="text-sm text-background/70">Abidjan, Côte D'Ivoire</span>
              </div>
            </div>
            <Button 
              variant="accent" 
              size="sm" 
              className="mt-4"
              onClick={() => setIsContactModalOpen(true)}
            >
              Nous contacter
            </Button>
            
            {/* Carte interactive */}
            <div className="mt-6">
              <Map />
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 Saush Technologies. Tous droits réservés
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
