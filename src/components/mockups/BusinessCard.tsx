import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import QrPattern from "./QrPattern";

interface BusinessCardProps {
  className?: string;
  /** "auto" : se retourne seule en boucle — "hover" : au survol — "back" : verso fixe */
  flip?: "auto" | "hover" | "back";
}

const CardFront = () => (
  <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[hsl(207_70%_40%)] via-[hsl(207_66%_33%)] to-[hsl(216_54%_14%)] p-5 text-white shadow-elegant backface-hidden sm:p-6">
    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
    <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
    <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.12]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d="M30 0 L100 0 L100 100 L60 100 Z" fill="white" />
    </svg>

    <div className="relative flex h-full flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 font-display text-base font-bold ring-1 ring-white/25 backdrop-blur">
          AK
        </div>
        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
          Ivoire Tech
        </span>
      </div>
      <div>
        <p className="font-display text-xl font-bold leading-tight sm:text-2xl">Aïcha Koné</p>
        <p className="mt-0.5 text-sm text-white/75">Directrice commerciale</p>
        <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Avec vous et partout ailleurs.
        </div>
      </div>
    </div>
  </div>
);

const CardBack = () => (
  <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-[1.25rem] bg-white p-5 text-ink shadow-elegant ring-1 ring-border backface-hidden sm:p-6">
    <div className="flex h-full gap-4">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">Coordonnées</p>
          <p className="mt-1 font-display text-base font-bold">Aïcha Koné</p>
        </div>
        <ul className="space-y-1.5 text-[11px] text-muted-foreground sm:text-xs">
          <li className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-primary" /> +225 07 00 00 00 00
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-primary" /> aicha@ivoiretech.ci
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="h-3.5 w-3.5 text-primary" /> /in/aichakone
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Abidjan, Plateau
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="rounded-xl bg-white p-1.5 ring-1 ring-border">
          <QrPattern className="h-20 w-20 text-ink sm:h-24 sm:w-24" />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Scannez-moi</span>
      </div>
    </div>
  </div>
);

const BusinessCard = ({ className, flip = "auto" }: BusinessCardProps) => (
  <div className={cn("group perspective aspect-[1.7/1] w-full", className)}>
    <div
      className={cn(
        "relative h-full w-full preserve-3d",
        flip === "auto" && "animate-card-flip",
        flip === "hover" && "transition-transform duration-700 ease-out group-hover:rotate-y-180",
        flip === "back" && "rotate-y-180",
      )}
    >
      <CardFront />
      <CardBack />
    </div>
  </div>
);

export default BusinessCard;
