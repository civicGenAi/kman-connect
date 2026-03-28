import { useState } from "react";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { StartupCard } from "@/components/kman/StartupCard";
import { startups } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, SlidersHorizontal, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = ["All", "AgriTech", "FinTech", "EdTech", "HealthTech", "Logistics", "FoodTech", "CleanTech"];
const stages = ["All", "Idea", "Pre-seed", "Seed"];

const StartupsPage = () => {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All");
  const [stage, setStage] = useState("All");
  const scrollRef = useScrollReveal();

  const filtered = startups.filter((s) =>
    (sector === "All" || s.sector === sector) &&
    (stage === "All" || s.stage === stage) &&
    (search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.oneLiner.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="bg-secondary grain-overlay py-24 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4 text-primary" />
              <span className="text-sm text-secondary-foreground/70 font-medium">Directory</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4 animate-fade-in-up">Startup Directory</h1>
            <p className="text-secondary-foreground/60 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Discover high-potential ventures across East Africa ready for investment
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-card border-b sticky top-16 z-10">
          <div className="container space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search startups by name or description..."
                className="w-full rounded-full border border-input bg-background pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground mr-1" />
              {sectors.map((s) => (
                <button key={s} onClick={() => setSector(s)}
                  className={cn("rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-200 whitespace-nowrap",
                    sector === s ? "gradient-gold text-secondary border-transparent shadow-md" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  )}>
                  {s}
                </button>
              ))}
              <div className="h-4 w-px bg-border mx-1" />
              {stages.map((s) => (
                <button key={s} onClick={() => setStage(s)}
                  className={cn("rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-200 whitespace-nowrap",
                    stage === s ? "bg-secondary text-secondary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  )}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 bg-background">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-8 font-medium reveal">{filtered.length} startup{filtered.length !== 1 ? "s" : ""} found</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <div key={s.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <StartupCard startup={s} />
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 reveal">
                <p className="text-2xl font-display font-bold text-muted-foreground/50 mb-2">No results</p>
                <p className="text-muted-foreground">Try adjusting your filters to find more startups.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default StartupsPage;
