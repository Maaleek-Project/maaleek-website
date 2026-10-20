import { Contact, QrCode, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: Smartphone,
    title: "Inscrivez-vous en une minute",
    text: "Téléchargez Maaleek, choisissez votre pays et validez votre compte grâce au code reçu par SMS ou e-mail.",
  },
  {
    icon: Contact,
    title: "Configurez votre carte",
    text: "Ajoutez votre photo, votre fonction, vos coordonnées et vos réseaux. Votre carte digitale est prête.",
  },
  {
    icon: QrCode,
    title: "Échangez et développez votre réseau",
    text: "Montrez votre QR code ou scannez celui des autres. Chaque carte reçue est rangée automatiquement.",
  },
];

const HowItWorks = () => (
  <section id="comment-ca-marche" className="py-24 lg:py-32">
    <div className="container-page">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Comment ça marche</span>
        <h2 className="section-title mt-5">Prêt en trois étapes.</h2>
        <p className="section-lead mx-auto mt-5 max-w-xl">
          Pas besoin de tutoriel : Maaleek a été pensée pour être simple dès la première ouverture.
        </p>
      </Reveal>

      <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        <div className="absolute left-[16%] right-[16%] top-10 hidden h-px border-t-2 border-dashed border-primary/25 md:block" />
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 120} className="relative text-center">
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-large ring-1 ring-border">
              <step.icon className="h-8 w-8 text-primary" />
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-ink ring-4 ring-white">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-7 font-display text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
