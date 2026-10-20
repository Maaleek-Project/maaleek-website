import { KeyRound, ScanLine, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Consentement à chaque échange",
    text: "Personne n'accède à votre carte sans que vous l'ayez accepté.",
  },
  {
    icon: KeyRound,
    title: "Compte vérifié",
    text: "Chaque inscription est confirmée par un code à usage unique.",
  },
  {
    icon: ScanLine,
    title: "QR codes authentifiés",
    text: "Seuls les QR codes Maaleek sont reconnus par l'application.",
  },
  {
    icon: SlidersHorizontal,
    title: "Vous gardez la main",
    text: "Modifiez vos informations et vos préférences à tout moment.",
  },
];

const Privacy = () => (
  <section id="confidentialite" className="py-24 lg:py-32">
    <div className="container-page">
      <div className="grid gap-12 rounded-[2rem] bg-gradient-to-br from-primary/[0.07] via-white to-accent/[0.08] p-8 ring-1 ring-border sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
        <Reveal>
          <span className="eyebrow">Confiance & sécurité</span>
          <h2 className="section-title mt-5">Vos informations, vos règles.</h2>
          <p className="section-lead mt-5">
            Votre carte de visite contient des données personnelles. Nous avons conçu Maaleek pour
            que vous décidiez toujours de qui les reçoit.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Privacy;
