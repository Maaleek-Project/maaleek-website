import { ArrowRight, BarChart3, Megaphone, Palette, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import { site } from "@/config/site";

const points = [
  {
    icon: Palette,
    title: "Des cartes à vos couleurs",
    text: "Logo, couleurs du recto et du verso, slogan : chaque collaborateur porte l'identité de votre marque.",
  },
  {
    icon: Users,
    title: "Gestion des collaborateurs",
    text: "Ajoutez un employé avec son numéro, suivez les arrivées et les départs, gardez un historique clair.",
  },
  {
    icon: Megaphone,
    title: "Stories & publicités",
    text: "Publiez textes, images ou vidéos de 10 secondes, affichés en stories auprès de vos abonnés.",
  },
  {
    icon: BarChart3,
    title: "Statistiques détaillées",
    text: "Vues totales, personnes uniques, meilleures campagnes : mesurez l'impact de chaque publication.",
  },
];

const Business = () => (
  <section id="entreprises" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
    <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
    <div className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-3xl" />
    <div className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-3xl" />

    <div className="container-page relative grid items-center gap-16 lg:grid-cols-2">
      <div>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Maaleek Business
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            L'identité de votre entreprise, dans la poche de chaque collaborateur.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            Équipez vos équipes de cartes de visite digitales homogènes, communiquez directement
            avec votre communauté et suivez vos résultats depuis un espace dédié.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Maaleek Business — demande d'information")}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Équiper mon entreprise
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
          >
            En savoir plus
          </a>
        </Reveal>
      </div>

      <Reveal delay={150} className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/20 opacity-60 blur-2xl" />
        <DashboardMockup className="relative" />
      </Reveal>
    </div>
  </section>
);

export default Business;
