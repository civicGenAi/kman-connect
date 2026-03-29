import { useState } from "react";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { MentorCard } from "@/components/kman/MentorCard";
import { mentors } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, SlidersHorizontal, ArrowRight, UserSearch, Star, Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";

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
        <section className="bg-secondary grain-overlay relative overflow-hidden">
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-primary/15 blur-[80px]" />
          <div className="container relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground leading-[1.08]">
                  Learn from East Africa's{" "}
                  <span className="shimmer">Best Minds</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-secondary-foreground/60 leading-relaxed max-w-lg">
                  Book 1-on-1 sessions with seasoned entrepreneurs, executives, and industry experts shaping the ecosystem.
                </p>
                <div className="mt-8">
                  <Link to="/apply"><KmanButton variant="primary" size="lg" className="w-full sm:w-auto">Become a Mentor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
                </div>
              </div>
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Star, val: "4.9", label: "Avg. Rating" },
                  { icon: Clock, val: "500+", label: "Sessions Held" },
                  { icon: Globe, val: "4", label: "Countries" },
                  { icon: UserSearch, val: `${mentors.length}`, label: "Expert Mentors" },
                ].map((s, i) => (
                  <div key={s.label} className={`reveal reveal-delay-${i + 1} glass rounded-2xl p-5 sm:p-6 text-center hover:gold-glow transition-all duration-300`}>
                    <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl sm:text-3xl font-display font-bold text-secondary-foreground">{s.val}</p>
                    <p className="text-xs sm:text-sm text-secondary-foreground/50 mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 sm:py-6 bg-card border-b sticky top-16 z-10">
          <div className="container space-y-3 sm:space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search mentors by name..."
                className="w-full rounded-full border border-input bg-background pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground mr-1 hidden sm:block" />
              {expertiseFilters.map((e) => (
                <button key={e} onClick={() => setExpertise(e)}
                  className={cn("rounded-full px-3 sm:px-4 py-1.5 text-xs font-semibold border transition-all duration-200 whitespace-nowrap",
                    expertise === e ? "gradient-gold text-secondary border-transparent shadow-md" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  )}>
                  {e}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-6 sm:mb-8 font-medium reveal">{filtered.length} mentor{filtered.length !== 1 ? "s" : ""} available</p>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <div key={m.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <MentorCard mentor={m} />
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 sm:py-20 reveal">
                <UserSearch className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-xl font-display font-bold text-muted-foreground/50 mb-2">No mentors found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters to find the right mentor.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center reveal px-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-3">Want to Share Your Expertise?</h2>
            <p className="text-secondary/70 mb-8 max-w-md mx-auto text-sm sm:text-base">Join our network of mentors and help the next generation of East African founders succeed.</p>
            <Link to="/apply"><KmanButton variant="secondary" size="lg" className="w-full sm:w-auto">Apply as Mentor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default MentorsPage;
