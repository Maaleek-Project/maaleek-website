import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
}

const legalPages = [
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/politique-confidentialite", label: "Politique de confidentialité" },
  { to: "/conditions-generales", label: "Conditions générales" },
];

const slug = (i: number) => `section-${i + 1}`;

const LegalLayout = ({ title, intro, sections }: LegalLayoutProps) => {
  useEffect(() => {
    document.title = `${title} | Maaleek`;
    return () => {
      document.title = "Maaleek | La carte de visite digitale";
    };
  }, [title]);

  return (
    <div className="pt-[72px]">
      <header className="relative overflow-hidden border-b border-border bg-muted/50">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container-page relative py-16 lg:py-20">
          <nav className="flex flex-wrap gap-2">
            {legalPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  p.label === title ? "bg-ink text-white" : "bg-white text-muted-foreground ring-1 ring-border hover:text-foreground",
                )}
              >
                {p.label}
              </Link>
            ))}
          </nav>
          <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : {site.legalUpdatedAt}</p>
        </div>
      </header>

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[240px_1fr] lg:py-20">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1 border-l border-border">
            {sections.map((s, i) => (
              <a
                key={s.title}
                href={`#${slug(i)}`}
                className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl space-y-12 text-base leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a:hover]:underline [&_li]:pl-1 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          <div className="text-lg text-foreground/80">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.title} id={slug(i)} className="scroll-mt-28 space-y-4">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                <span className="mr-2 text-primary">{i + 1}.</span>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default LegalLayout;
