import { useState } from "react";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { MentorCard } from "@/components/kman/MentorCard";
import { mentors } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, SlidersHorizontal, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

const expertiseFilters = ["All", "FinTech", "AgriTech", "Marketing", "Legal", "Product", "Impact Investing", "Operations", "Finance", "HealthTech"];

const MentorsPage = () => {
  const [search, setSearch] = useState("");
  const [expertise, setExpertise] = useState("All");
  const scrollRef = useScrollReveal();

  const filtered = mentors.filter((m) =>
    (expertise === "All" || m.expertise.includes(expertise)) &&
    (search === "" || m.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="bg-secondary grain-overlay py-24 relative overflow-hidden">
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4 text-primary" />
              <span className="text-sm text-secondary-foreground/70 font-medium">Marketplace</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4 animate-fade-in-up">Mentor Marketplace</h1>
            <p className="text-secondary-foreground/60 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Book sessions with industry experts shaping the East African ecosystem
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-card border-b sticky top-16 z-10">
          <div className="container space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search mentors..."
                className="w-full rounded-full border border-input bg-background pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground mr-1" />
              {expertiseFilters.map((e) => (
                <button key={e} onClick={() => setExpertise(e)}
                  className={cn("rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-200 whitespace-nowrap",
                    expertise === e ? "gradient-gold text-secondary border-transparent shadow-md" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  )}>
                  {e}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 bg-background">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-8 font-medium reveal">{filtered.length} mentor{filtered.length !== 1 ? "s" : ""} found</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <div key={m.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <MentorCard mentor={m} />
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 reveal">
                <p className="text-2xl font-display font-bold text-muted-foreground/50 mb-2">No results</p>
                <p className="text-muted-foreground">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default MentorsPage;
