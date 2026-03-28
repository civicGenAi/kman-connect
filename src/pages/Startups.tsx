import { useState } from "react";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { StartupCard } from "@/components/kman/StartupCard";
import { startups } from "@/data/mockData";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const sectors = ["All", "AgriTech", "FinTech", "EdTech", "HealthTech", "Logistics", "FoodTech", "CleanTech"];
const stages = ["All", "Idea", "Pre-seed", "Seed"];

const StartupsPage = () => {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All");
  const [stage, setStage] = useState("All");

  const filtered = startups.filter((s) =>
    (sector === "All" || s.sector === sector) &&
    (stage === "All" || s.stage === stage) &&
    (search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.oneLiner.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PublicLayout>
      <section className="bg-secondary grain-overlay py-16 relative">
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-display font-bold text-secondary-foreground">Startup Directory</h1>
          <p className="text-secondary-foreground/70 mt-2">Discover high-potential ventures across East Africa</p>
        </div>
      </section>

      <section className="py-8 bg-card border-b sticky top-16 z-10">
        <div className="container flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search startups..."
              className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {sectors.map((s) => (
              <button key={s} onClick={() => setSector(s)}
                className={cn("rounded-full px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap",
                  sector === s ? "gradient-gold text-secondary border-transparent" : "border-border text-muted-foreground hover:text-foreground"
                )}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {stages.map((s) => (
              <button key={s} onClick={() => setStage(s)}
                className={cn("rounded-full px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap",
                  stage === s ? "bg-secondary text-secondary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground"
                )}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} startups found</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => <StartupCard key={s.id} startup={s} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No startups match your filters. Try adjusting your search.</p>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default StartupsPage;
