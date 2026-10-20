import { Bell, ChevronRight, QrCode, Search, Send, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Reproduction fidèle de l'écran d'accueil de l'application mobile Maaleek.

const stories = [
  { initials: "IT", name: "Ivoire Tech", color: "bg-[#2577BA]", seen: false },
  { initials: "LC", name: "Lagune", color: "bg-[#10B981]", seen: false },
  { initials: "BS", name: "Baobab", color: "bg-[#F59E0B]", seen: true },
  { initials: "AF", name: "Akwaba", color: "bg-[#EC4899]", seen: true },
];

const contacts = [
  { initials: "YK", name: "Yao Kouassi", job: "Architecte · Lagune Conseil", color: "bg-[#6366F1]", fav: true },
  { initials: "MT", name: "Mariam Traoré", job: "Avocate d'affaires", color: "bg-[#06B6D4]", fav: false },
  { initials: "SD", name: "Serge Diabaté", job: "CTO · Baobab Studio", color: "bg-[#8B5CF6]", fav: false },
];

const PhoneMockup = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative mx-auto w-[290px] rounded-[3rem] bg-ink p-[11px] shadow-elegant ring-1 ring-black/10 sm:w-[310px]",
      className,
    )}
  >
    {/* Boutons latéraux */}
    <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-ink" />
    <span className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-r bg-ink" />

    <div className="relative h-[600px] overflow-hidden rounded-[2.4rem] bg-[#F1F4F8] sm:h-[630px]">
      {/* Barre de statut */}
      <div className="flex items-center justify-between px-7 pt-3.5 text-[11px] font-semibold text-ink">
        <span>9:41</span>
        <span className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <span className="flex items-center gap-1">
          <span className="flex items-end gap-[2px]">
            {[4, 6, 8, 10].map((h) => (
              <span key={h} className="w-[3px] rounded-sm bg-ink" style={{ height: h }} />
            ))}
          </span>
          <span className="ml-1 h-[10px] w-5 rounded-[3px] border border-ink/70 p-[1px]">
            <span className="block h-full w-3/4 rounded-[1px] bg-ink" />
          </span>
        </span>
      </div>

      <div className="space-y-3.5 px-4 pt-5">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(207_66%_30%)] text-xs font-bold text-white">
              AK
            </div>
            <div className="leading-tight">
              <p className="text-[10px] text-muted-foreground">Bonjour,</p>
              <p className="text-[13px] font-bold text-ink">Aïcha Koné</p>
            </div>
          </div>
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft">
            <Bell className="h-4 w-4 text-ink" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent ring-2 ring-white" />
          </div>
        </div>

        <p className="font-display text-[17px] font-bold leading-snug text-ink">
          Cartes de visite <span className="text-primary">numérique.</span>
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-primary p-3 text-white">
            <p className="text-[10px] text-white/75">Cartes en stock</p>
            <p className="mt-0.5 font-display text-xl font-bold">48</p>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-soft">
            <p className="text-[10px] text-muted-foreground">Mon réseau</p>
            <p className="mt-0.5 font-display text-xl font-bold text-ink">312</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex items-center justify-center gap-1.5 rounded-xl bg-ink py-2.5 text-[11px] font-semibold text-white">
            <Send className="h-3.5 w-3.5" /> Partager ma carte
          </div>
          <div className="flex items-center justify-center gap-1.5 rounded-xl border border-ink/15 bg-white py-2.5 text-[11px] font-semibold text-ink">
            <QrCode className="h-3.5 w-3.5" /> Scanner
          </div>
        </div>

        {/* Stories des entreprises */}
        <div className="flex gap-3 pt-0.5">
          {stories.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "rounded-full p-[2px]",
                  s.seen ? "bg-border" : "bg-gradient-to-tr from-accent via-[hsl(197_80%_48%)] to-primary",
                )}
              >
                <div className="rounded-full bg-[#F1F4F8] p-[2px]">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-white", s.color)}>
                    {s.initials}
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground">{s.name}</span>
            </div>
          ))}
        </div>

        {/* Onglets */}
        <div className="flex rounded-xl bg-white p-1 text-[11px] font-semibold shadow-soft">
          <span className="flex-1 rounded-lg bg-primary/10 py-1.5 text-center text-primary">Mes cartes</span>
          <span className="flex-1 py-1.5 text-center text-muted-foreground">Entreprises</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[10px] text-muted-foreground shadow-soft">
          <Search className="h-3.5 w-3.5" /> Rechercher une carte…
        </div>

        {/* Liste de contacts */}
        <div className="space-y-2">
          {contacts.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-soft">
              <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white", c.color)}>
                {c.initials}
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[11px] font-bold text-ink">{c.name}</p>
                <p className="truncate text-[9px] text-muted-foreground">{c.job}</p>
              </div>
              {c.fav ? (
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F1F4F8] to-transparent" />
      <span className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink/80" />
    </div>
  </div>
);

export default PhoneMockup;
