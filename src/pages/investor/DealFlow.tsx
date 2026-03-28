import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { startups, sectorColors, stageColors } from "@/data/mockData";
import { Search, Filter, SlidersHorizontal, Eye, Star, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const DealFlow = () => {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All");
  const [stage, setStage] = useState("All");
  const sectors = ["All", "AgriTech", "FinTech", "EdTech", "HealthTech", "Logistics", "FoodTech", "CleanTech"];
  const stages = ["All", "Idea", "Pre-seed", "Seed"];

  const filtered = startups.filter(s =>
    (sector === "All" || s.sector === sector) &&
    (stage === "All" || s.stage === stage) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.oneLiner.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-display font-bold">Deal Flow</h2>
          <p className="text-muted-foreground text-sm">Browse and evaluate investment opportunities</p>
        </div>

        {/* Filters */}
        <KmanCard className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search startups..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <select value={sector} onChange={e => setSector(e.target.value)} className="rounded-lg border border-input bg-background px-3 py-2 text-sm">
            {sectors.map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={stage} onChange={e => setStage(e.target.value)} className="rounded-lg border border-input bg-background px-3 py-2 text-sm">
            {stages.map(s => <option key={s}>{s}</option>)}
          </select>
        </KmanCard>

        {/* Results */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(s => {
            const pct = Math.round((s.fundingRaised / s.fundingGoal) * 100);
            return (
              <KmanCard key={s.id} goldBorder className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`${s.color} h-10 w-10 rounded-lg flex items-center justify-center text-white text-xs font-bold`}>{s.initials}</div>
                    <div>
                      <h3 className="font-display font-bold text-sm">{s.name}</h3>
                      <p className="text-xs text-muted-foreground">{s.oneLiner}</p>
                    </div>
                  </div>
                  <KmanBadge variant="gold">{Math.floor(Math.random() * 15 + 80)}% match</KmanBadge>
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${sectorColors[s.sector] || ""}`}>{s.sector}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${stageColors[s.stage] || ""}`}>{s.stage}</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Raised ${(s.fundingRaised / 1000).toFixed(0)}K of ${(s.fundingGoal / 1000).toFixed(0)}K</span>
                    <span className="font-medium">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  <KmanButton variant="primary" size="sm" className="flex-1"><Eye className="h-3 w-3" /> View Deal</KmanButton>
                  <KmanButton variant="secondary" size="sm"><Star className="h-3 w-3" /></KmanButton>
                </div>
              </KmanCard>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DealFlow;
