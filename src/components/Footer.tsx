import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site, telHref } from "@/config/site";

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "/#fonctionnalites" },
      { label: "Comment ça marche", href: "/#comment-ca-marche" },
      { label: "Maaleek Business", href: "/#entreprises" },
      { label: "Télécharger", href: "/#telecharger" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Questions fréquentes", href: "/#faq" },
      { label: "Confidentialité & sécurité", href: "/#confidentialite" },
      { label: "Nous écrire", href: `mailto:${site.contact.email}` },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
      { label: "Conditions générales", href: "/conditions-generales" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: site.socials.facebook, label: "Facebook" },
].filter((s) => s.href);

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  const className = "text-sm text-white/60 transition-colors hover:text-white";
  return href.startsWith("/") && !href.startsWith("/#") ? (
    <Link to={href} className={className}>
      {label}
    </Link>
  ) : (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

const Footer = () => (
  <footer id="contact" className="relative overflow-hidden bg-ink text-white">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

    <div className="container-page relative py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/icon.png" alt="" className="h-11 w-11 rounded-xl" />
            <span className="font-display text-2xl font-bold">Maaleek</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            La carte de visite digitale qui garde votre réseau professionnel à portée de main.
            Conçue à Abidjan, pensée pour l'Afrique.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-accent" /> {site.contact.email}
              </a>
            </li>
            {site.contact.phones.map((phone) => (
              <li key={phone}>
                <a href={telHref(phone)} className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 text-accent" /> {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" /> {site.contact.city}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Maaleek — une solution {site.publisher.company}. Tous droits réservés.
        </p>
        {socials.length > 0 && (
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
