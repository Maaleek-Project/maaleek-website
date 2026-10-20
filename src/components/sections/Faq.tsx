import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

const faqs = [
  {
    q: "Maaleek est-elle gratuite ?",
    a: "Oui, le téléchargement de l'application et la création de votre carte de visite digitale sont gratuits. Des offres complémentaires permettent d'aller plus loin, notamment pour les entreprises.",
  },
  {
    q: "Mon interlocuteur doit-il avoir l'application ?",
    a: "Pour échanger vos cartes et les retrouver dans votre carnet, votre interlocuteur doit disposer de Maaleek. L'inscription ne prend qu'une minute, directement depuis son téléphone.",
  },
  {
    q: "Qui peut voir ma carte de visite ?",
    a: "Uniquement les personnes avec qui vous l'avez partagée ou dont vous avez accepté la demande d'échange. Chaque demande vous est notifiée et vous restez libre de la refuser.",
  },
  {
    q: "Que se passe-t-il si je change de poste ou de numéro ?",
    a: "Il vous suffit de mettre à jour votre carte dans l'application. Les personnes de votre réseau consultent toujours la version la plus récente de vos coordonnées.",
  },
  {
    q: "Comment équiper mon entreprise avec Maaleek Business ?",
    a: `Écrivez-nous à ${site.contact.email} : notre équipe vous accompagne pour créer votre espace entreprise, personnaliser vos cartes et y ajouter vos collaborateurs.`,
  },
  {
    q: "L'application est-elle disponible en anglais ?",
    a: "Oui. Maaleek est disponible en français et en anglais, avec un thème clair, sombre ou calé sur celui de votre téléphone.",
  },
];

const Faq = () => (
  <section id="faq" className="bg-muted/50 py-24 lg:py-32">
    <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title mt-5">Questions fréquentes.</h2>
        <p className="section-lead mt-5">
          Vous ne trouvez pas votre réponse ?{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-primary underline-offset-4 hover:underline">
            Écrivez-nous
          </a>
          , nous répondons rapidement.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-white px-6 shadow-soft data-[state=open]:shadow-medium"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default Faq;
