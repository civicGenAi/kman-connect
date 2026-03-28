import { useState } from "react";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { MentorCard } from "@/components/kman/MentorCard";
import { mentors } from "@/data/mockData";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const expertiseFilters = ["All", "FinTech", "AgriTech", "Marketing", "Legal", "Product", "Impact Investing", "Operations", "Finance", "HealthTech"];

const MentorsPage = () => {
  const [search, setSearch] = useState("");
  const [expertise, setExpertise] = useState("All");

  const filtered = mentors.filter((m) =>
    (expertise === "All" || m.expertise.includes(expertise)) &&
    (search === "" || m.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PublicLayout>
      <section className="bg-secondary grain-overlay py-16 relative">
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-display font-bold text-secondary-foreground">Mentor Marketplace</h1>
          <p className="text-secondary-foreground/70 mt-2">Book sessions with industry experts across East Africa</p>
        </div>
      </section>

      <section className="py-8 bg-card border-b sticky top-16 z-10">
        <div className="container flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search mentors..."
              className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {expertiseFilters.map((e) => (
              <button key={e} onClick={() => setExpertise(e)}
                className={cn("rounded-full px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap",
                  expertise === e ? "gradient-gold text-secondary border-transparent" : "border-border text-muted-foreground hover:text-foreground"
                )}>
                {e}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} mentors found</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => <MentorCard key={m.id} mentor={m} />)}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default MentorsPage;
