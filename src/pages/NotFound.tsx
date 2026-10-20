import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-[72px]">
    <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
    <div className="container-page relative text-center">
      <p className="font-display text-8xl font-extrabold text-gradient sm:text-9xl">404</p>
      <h1 className="mt-6 font-display text-2xl font-bold text-foreground sm:text-3xl">
        Cette page s'est perdue comme une carte papier.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
      </Link>
    </div>
  </section>
);

export default NotFound;
