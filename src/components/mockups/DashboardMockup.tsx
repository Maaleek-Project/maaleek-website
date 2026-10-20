import { Eye, LayoutDashboard, Megaphone, Settings, Users, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// Aperçu illustratif de l'espace Maaleek Business (valeurs fictives).

const kpis = [
  { label: "Vues totales", value: "12,4k", trend: "+18 %" },
  { label: "Personnes uniques", value: "3 870", trend: "+9 %" },
  { label: "Collaborateurs", value: "46", trend: "+4" },
];

const bars = [38, 52, 44, 61, 58, 72, 66, 80, 74, 88, 82, 95];

const nav = [
  { icon: LayoutDashboard, active: true },
  { icon: Users, active: false },
  { icon: Megaphone, active: false },
  { icon: Settings, active: false },
];

const DashboardMockup = ({ className }: { className?: string }) => (
  <div className={cn("overflow-hidden rounded-2xl bg-white text-ink shadow-elegant ring-1 ring-white/10", className)}>
    {/* Barre de fenêtre */}
    <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-[10px] text-muted-foreground ring-1 ring-border">
        Maaleek Business · Tableau de bord
      </span>
    </div>

    <div className="flex">
      <aside className="hidden flex-col items-center gap-3 border-r border-border bg-muted/30 px-3 py-4 sm:flex">
        <img src="/images/icon.png" alt="" className="h-8 w-8 rounded-lg" />
        {nav.map(({ icon: Icon, active }, i) => (
          <span
            key={i}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              active ? "bg-primary text-white" : "text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </aside>

      <div className="min-w-0 flex-1 space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Ivoire Tech</p>
            <p className="font-display text-sm font-bold sm:text-base">Tableau de bord</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold text-[hsl(87_55%_30%)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> En direct
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-border p-2.5 sm:p-3">
              <p className="truncate text-[9px] text-muted-foreground sm:text-[10px]">{k.label}</p>
              <p className="mt-1 font-display text-base font-bold sm:text-lg">{k.value}</p>
              <p className="text-[9px] font-semibold text-[hsl(87_55%_35%)] sm:text-[10px]">{k.trend}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-semibold">Vues des publicités</p>
            <p className="text-[10px] text-muted-foreground">30 derniers jours</p>
          </div>
          <div className="flex h-24 items-end gap-1.5 sm:h-28">
            {bars.map((h, i) => (
              <div
                key={i}
                className={cn("flex-1 rounded-t-md", i === bars.length - 1 ? "bg-primary" : "bg-primary/20")}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-muted/60 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
            <Video className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-semibold">Meilleure publicité · « Lancement Offre Pro »</p>
            <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Eye className="h-3 w-3" /> 4 218 vues · vidéo 10 s
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardMockup;
