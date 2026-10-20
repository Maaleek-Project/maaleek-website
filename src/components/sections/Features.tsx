import {
  AtSign,
  Bell,
  Building2,
  Globe2,
  Link2,
  Moon,
  Phone,
  PhoneCall,
  QrCode,
  Search,
  Star,
  UserCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import BusinessCard from "@/components/mockups/BusinessCard";
import QrPattern from "@/components/mockups/QrPattern";
import { cn } from "@/lib/utils";

const Tile = ({
  className,
  icon: Icon,
  title,
  text,
  children,
  delay = 0,
}: {
  className?: string;
  icon: typeof QrCode;
  title: string;
  text: string;
  children?: React.ReactNode;
  delay?: number;
}) => (
  <Reveal
    delay={delay}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-large sm:p-8",
      className,
    )}
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
    {children}
  </Reveal>
);

const Features = () => (
  <section id="fonctionnalites" className="relative bg-muted/50 py-24 lg:py-32">
    <div className="container-page">
      <Reveal className="max-w-3xl">
        <span className="eyebrow">Fonctionnalités</span>
        <h2 className="section-title mt-5">
          Tout votre networking,
          <br /> dans une seule application.
        </h2>
        <p className="section-lead mt-5 max-w-2xl">
          De la première poignée de main au suivi de vos contacts, Maaleek simplifie chaque étape
          de votre vie professionnelle.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Carte recto/verso */}
        <Tile
          className="lg:col-span-2"
          icon={Star}
          title="Une carte recto-verso qui vous ressemble"
          text="Nom, fonction, entreprise, téléphone, e-mail, réseaux sociaux : configurez votre carte une fois, elle vous suit partout. Touchez-la pour la retourner."
        >
          <div className="mt-8 flex flex-1 items-end justify-center">
            <div className="w-full max-w-sm">
              <BusinessCard flip="hover" />
              <p className="mt-3 text-center text-xs text-muted-foreground">Survolez la carte pour la retourner</p>
            </div>
          </div>
        </Tile>

        {/* QR code */}
        <Tile
          delay={80}
          icon={QrCode}
          title="Échange par QR code"
          text="Scannez le QR code Maaleek de votre interlocuteur : sa carte rejoint votre réseau en une seconde."
        >
          <div className="relative mx-auto mt-8 w-40">
            <div className="relative overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-border">
              <QrPattern seed={3} className="h-full w-full text-ink" />
              <span className="absolute inset-x-3 h-0.5 animate-scan rounded-full bg-accent shadow-[0_0_12px_2px_hsl(var(--accent))]" />
            </div>
            {["-left-2 -top-2 border-l-4 border-t-4", "-right-2 -top-2 border-r-4 border-t-4", "-bottom-2 -left-2 border-b-4 border-l-4", "-bottom-2 -right-2 border-b-4 border-r-4"].map((pos) => (
              <span key={pos} className={cn("absolute h-6 w-6 rounded-md border-primary", pos)} />
            ))}
          </div>
        </Tile>

        {/* Consentement */}
        <Tile
          delay={0}
          icon={UserCheck}
          title="Rien ne se partage sans votre accord"
          text="Chaque demande d'accès à votre carte doit être approuvée. Vous acceptez ou refusez, en toute simplicité."
        >
          <div className="mt-8 space-y-2.5">
            {[
              { name: "Mariam Traoré", state: "Acceptée", tone: "bg-accent/20 text-[hsl(87_55%_30%)]" },
              { name: "Serge Diabaté", state: "En attente", tone: "bg-amber-100 text-amber-700" },
            ].map((r) => (
              <div key={r.name} className="flex items-center justify-between rounded-xl bg-muted/70 px-4 py-3">
                <span className="text-sm font-semibold text-foreground">{r.name}</span>
                <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", r.tone)}>{r.state}</span>
              </div>
            ))}
          </div>
        </Tile>

        {/* Partage par mail / numéro */}
        <Tile
          delay={80}
          icon={AtSign}
          title="Partage à distance"
          text="Pas de rencontre physique ? Envoyez votre carte en un clic à partir d'une adresse e-mail ou d'un numéro de téléphone."
        >
          <div className="mt-8 grid grid-cols-2 gap-2 rounded-2xl bg-muted/70 p-1.5 text-sm font-semibold">
            <span className="flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-primary shadow-soft">
              <AtSign className="h-4 w-4" /> E-mail
            </span>
            <span className="flex items-center justify-center gap-2 py-2.5 text-muted-foreground">
              <Phone className="h-4 w-4" /> Numéro
            </span>
          </div>
        </Tile>

        {/* Notifications */}
        <Tile
          delay={160}
          icon={Bell}
          title="Notifications en temps réel"
          text="Nouvelle demande, carte acceptée, message d'une entreprise : vous êtes prévenu à l'instant."
        >
          <div className="relative mt-8 flex justify-center">
            <span className="absolute h-14 w-14 animate-pulse-ring rounded-full bg-primary/30" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-large">
              <Bell className="h-6 w-6" />
            </span>
          </div>
        </Tile>

        {/* Carnet organisé */}
        <Tile
          className="lg:col-span-2"
          icon={Search}
          title="Un carnet d'adresses enfin organisé"
          text="Recherchez par nom, fonction, e-mail ou numéro. Ajoutez vos contacts clés en favoris et retrouvez-les automatiquement classés par entreprise."
        >
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "Favoris", icon: Star, active: true },
              { label: "Ivoire Tech · 12", icon: Building2 },
              { label: "Lagune Conseil · 8", icon: Building2 },
              { label: "Baobab Studio · 5", icon: Building2 },
              { label: "Sans entreprise · 21", icon: Building2 },
            ].map(({ label, icon: Icon, active }) => (
              <span
                key={label}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
                  active ? "border-primary bg-primary text-white" : "border-border bg-white text-foreground",
                )}
              >
                <Icon className={cn("h-4 w-4", active && "fill-white")} /> {label}
              </span>
            ))}
          </div>
        </Tile>

        {/* Réseaux & liens */}
        <Tile
          delay={80}
          icon={Link2}
          title="Réseaux sociaux & liens"
          text="LinkedIn, site web, portfolio… Rassemblez toute votre présence en ligne sur une seule carte."
        />

        <Tile
          delay={0}
          icon={PhoneCall}
          title="Appel ou e-mail en un geste"
          text="Joignez un contact directement depuis sa carte, sans rien ressaisir dans votre téléphone."
        />

        {/* Confort */}
        <Tile
          delay={80}
          icon={Moon}
          title="Thème clair ou sombre"
          text="Une interface soignée qui s'adapte à vos préférences et à celles de votre téléphone."
        />

        <Tile
          delay={160}
          icon={Globe2}
          title="En français et en anglais"
          text="Choisissez votre langue et faites du networking au-delà des frontières."
        />
      </div>
    </div>
  </section>
);

export default Features;
