import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const rows = [
  { paper: "Se perd, s'abîme ou finit à la poubelle", maaleek: "Toujours dans votre poche, jamais en rupture" },
  { paper: "Obsolète dès que vous changez de poste ou de numéro", maaleek: "Mise à jour une fois, à jour pour tout votre réseau" },
  { paper: "À réimprimer sans cesse, coûteuse et peu écologique", maaleek: "Partagée à l'infini, sans papier ni impression" },
  { paper: "Des dizaines de cartes à ressaisir à la main", maaleek: "Contacts enregistrés automatiquement et classés" },
  { paper: "Aucune idée de qui a gardé vos coordonnées", maaleek: "Vous savez exactement qui a reçu votre carte" },
];

const Comparison = () => (
  <section className="relative pb-24 pt-12 lg:pb-32 lg:pt-16">
    <div className="container-page">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Pourquoi Maaleek</span>
        <h2 className="section-title mt-5">
          La carte papier a fait son temps.
          <br className="hidden sm:block" /> <span className="text-primary">Votre réseau mérite mieux.</span>
        </h2>
        <p className="section-lead mx-auto mt-5 max-w-2xl">
          Chaque rencontre professionnelle est une opportunité. Maaleek s'assure qu'aucune ne
          vous échappe — et que personne n'oublie qui vous êtes.
        </p>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-14 max-w-5xl">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-medium md:grid-cols-2">
          <div className="bg-muted/50 p-6 sm:p-10">
            <p className="font-display text-lg font-bold text-muted-foreground">Carte papier</p>
            <ul className="mt-6 space-y-5">
              {rows.map((r) => (
                <li key={r.paper} className="flex gap-3 text-muted-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3.5 w-3.5 text-destructive" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{r.paper}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative p-6 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="flex items-center gap-2">
              <img src="/images/icon.png" alt="" className="h-7 w-7 rounded-lg" />
              <p className="font-display text-lg font-bold text-foreground">Avec Maaleek</p>
            </div>
            <ul className="mt-6 space-y-5">
              {rows.map((r) => (
                <li key={r.maaleek} className="flex gap-3 font-medium text-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5 text-[hsl(87_55%_32%)]" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{r.maaleek}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Comparison;
