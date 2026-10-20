import { Check, ShieldCheck, UserPlus } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import BusinessCard from "@/components/mockups/BusinessCard";

const highlights = ["Gratuit au téléchargement", "Échange en un scan", "Français & anglais"];

const Hero = () => (
  <section className="relative overflow-hidden pt-[72px]">
    {/* Fond */}
    <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    <div className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
    <div className="absolute -right-32 top-60 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl" />

    <div className="container-page relative grid items-center gap-16 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-20 lg:pt-20">
      {/* Texte */}
      <div className="max-w-2xl">
        <div className="eyebrow animate-slide-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Conçue à Abidjan, pensée pour l'Afrique
        </div>

        <h1
          className="mt-6 animate-slide-up font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
          style={{ animationDelay: "80ms" }}
        >
          Votre carte de visite,{" "}
          <span className="text-gradient">toujours avec vous.</span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-slide-up text-lg leading-relaxed text-muted-foreground sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Créez votre carte de visite digitale, échangez-la d'un simple scan de QR code et
          retrouvez tout votre réseau professionnel au même endroit. Fini les cartes papier
          oubliées au fond d'un tiroir.
        </p>

        <div className="mt-9 animate-slide-up" style={{ animationDelay: "240ms" }}>
          <StoreButtons />
        </div>

        <ul
          className="mt-8 flex animate-slide-up flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                <Check className="h-3 w-3 text-[hsl(87_55%_32%)]" strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Visuel */}
      <div className="relative mx-auto w-full max-w-[560px] animate-slide-up" style={{ animationDelay: "200ms" }}>
        <div className="absolute inset-x-10 bottom-0 top-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-primary/5 to-accent/25 blur-2xl" />

        <PhoneMockup className="relative" />

        {/* Carte recto / verso */}
        <div className="absolute -left-2 bottom-4 hidden w-[290px] animate-float sm:block lg:-left-10">
          <BusinessCard flip="auto" />
        </div>

        {/* Notification d'échange */}
        <div
          className="absolute -right-2 top-16 hidden w-[250px] animate-float rounded-2xl bg-white/95 p-3.5 shadow-large ring-1 ring-border backdrop-blur sm:block lg:-right-10"
          style={{ animationDelay: "-3s" }}
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <UserPlus className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-foreground">Demande d'échange</p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                Yao Kouassi souhaite accéder à votre carte.
              </p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-semibold">
            <span className="rounded-lg bg-muted py-1.5 text-center text-muted-foreground">Refuser</span>
            <span className="rounded-lg bg-primary py-1.5 text-center text-white">Accepter</span>
          </div>
        </div>

        {/* Badge sécurité */}
        <div className="absolute -right-1 top-[46%] hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white shadow-large sm:flex lg:-right-6">
          <ShieldCheck className="h-4 w-4 text-accent" />
          Rien ne se partage sans votre accord
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
