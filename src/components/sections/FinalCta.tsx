import Reveal from "@/components/Reveal";
import StoreButtons from "@/components/StoreButtons";
import BusinessCard from "@/components/mockups/BusinessCard";
import { site } from "@/config/site";

const FinalCta = () => (
  <section id="telecharger" className="py-24 lg:py-32">
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[hsl(207_70%_42%)] via-[hsl(207_66%_34%)] to-[hsl(216_54%_14%)] px-6 py-16 text-white shadow-elegant sm:px-12 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-light [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Votre prochaine opportunité
              <br className="hidden sm:block" /> commence par un scan.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
              Téléchargez Maaleek gratuitement et créez votre carte de visite digitale dès aujourd'hui.{" "}
              <span className="font-semibold text-accent">{site.tagline}</span>
            </p>
            <StoreButtons variant="light" className="mt-9" />
          </div>

          <div className="mx-auto hidden w-full max-w-sm -rotate-6 lg:block">
            <BusinessCard flip="back" />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
