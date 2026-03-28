import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { StartupCard } from "@/components/kman/StartupCard";
import { startups, mentors } from "@/data/mockData";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, ArrowRight, Mountain, Star, CheckCircle2, Globe, Building2, Lightbulb } from "lucide-react";
import { useState } from "react";

// Location images
import darImg from "@/assets/locations/dar-es-salaam.jpg";
import nairobiImg from "@/assets/locations/nairobi.jpg";
import kigaliImg from "@/assets/locations/kigali.jpg";
import kampalaImg from "@/assets/locations/kampala.jpg";

const stats = [
  { value: 42, label: "Angel Investors" },
  { value: 67, label: "Startups Supported" },
  { value: 2.4, label: "Capital Deployed", prefix: "$", suffix: "M" },
  { value: 18, label: "Mentors Active" },
];

const locations = [
  { city: "Dar es Salaam", country: "Tanzania", label: "Headquarters", image: darImg },
  { city: "Nairobi", country: "Kenya", label: "Launched 2023", image: nairobiImg },
  { city: "Kigali", country: "Rwanda", label: "Launched 2024", image: kigaliImg },
  { city: "Kampala", country: "Uganda", label: "Expanding", image: kampalaImg },
];

const partners = [
  { name: "Zanzibar Investment Promotion Agency", short: "ZIPA" },
  { name: "Tanzania Private Sector Foundation", short: "TPSF" },
  { name: "East Africa Venture Capital Assoc.", short: "EAVCA" },
  { name: "Seedstars", short: "Seedstars" },
  { name: "Startup Grind Arusha", short: "SG Arusha" },
  { name: "Africa Development Bank", short: "AfDB" },
];

const StatCounter = ({ value, label, prefix = "", suffix = "" }: { value: number; label: string; prefix?: string; suffix?: string }) => {
  const count = useCountUp(value === 2.4 ? 24 : value);
  const display = value === 2.4 ? (count / 10).toFixed(1) : count;
  return (
    <div className="text-center group">
      <div className="h-1 w-12 mx-auto gradient-gold rounded-full mb-4 group-hover:w-20 transition-all duration-500" />
      <p className="text-4xl md:text-5xl font-display font-bold text-foreground">{prefix}{display}{suffix}</p>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  );
};

const MountainSilhouette = () => (
  <svg className="absolute bottom-0 left-0 w-full h-32 md:h-48" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
    <path d="M0 200L120 180C180 170 240 160 360 140C420 130 480 120 540 115C600 110 660 108 720 105C780 100 840 98 900 100C960 102 1020 108 1080 115C1140 122 1200 130 1260 145C1320 160 1380 170 1440 180V200H0Z" fill="hsl(40, 100%, 49%)" fillOpacity="0.1" />
    <path d="M0 200L100 185C200 175 300 170 400 155C500 142 600 130 700 125C800 120 900 122 1000 130C1100 138 1200 150 1300 165C1400 175 1440 185 1440 190V200H0Z" fill="hsl(207, 43%, 19%)" fillOpacity="0.3" />
  </svg>
);

const LandingPage = () => {
  const featuredStartups = startups.slice(0, 6);
  const featuredMentors = mentors.slice(0, 6);
  const scrollRef = useScrollReveal();
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="relative min-h-[92vh] flex items-center bg-secondary grain-overlay overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary/15 blur-[120px] float" />
          <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-primary/25 blur-[80px] float float-delay-1" />
          <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-primary/10 blur-[60px] float float-delay-2" />

          <div className="container relative z-10 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <Mountain className="h-4 w-4 text-primary" />
                <span className="text-sm text-secondary-foreground/80 font-medium">East Africa's #1 Angel Investment Platform</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-foreground leading-[1.05] animate-fade-in-up">
                Where East African Startups Meet{" "}
                <span className="shimmer">Smart Capital</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-secondary-foreground/60 max-w-xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "150ms" }}>
                KMAN connects visionary founders with angel investors and mentors across the Kilimanjaro region and beyond.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <Link to="/apply"><KmanButton variant="primary" size="lg">Apply for Funding <ArrowRight className="h-4 w-4" /></KmanButton></Link>
                <Link to="/investors"><KmanButton variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">Become an Investor</KmanButton></Link>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="hidden lg:block absolute top-16 right-16 float" style={{ animationDelay: "-1s" }}>
              <div className="glass rounded-2xl px-5 py-4 pulse-gold">
                <p className="text-2xl font-display font-bold text-secondary-foreground">42</p>
                <p className="text-xs text-secondary-foreground/50 font-medium">Angel Investors</p>
              </div>
            </div>
            <div className="hidden lg:block absolute top-48 right-4 float float-delay-1">
              <div className="glass rounded-2xl px-5 py-4">
                <p className="text-2xl font-display font-bold text-primary">$2.4M</p>
                <p className="text-xs text-secondary-foreground/50 font-medium">Deployed</p>
              </div>
            </div>
            <div className="hidden lg:block absolute bottom-36 right-28 float float-delay-2">
              <div className="glass rounded-2xl px-5 py-4">
                <p className="text-2xl font-display font-bold text-secondary-foreground">67</p>
                <p className="text-xs text-secondary-foreground/50 font-medium">Startups</p>
              </div>
            </div>
          </div>

          <MountainSilhouette />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-secondary-foreground/30 animate-bounce-down">
            <ChevronDown className="h-6 w-6" />
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-card">
          <div className="container">
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                  <StatCounter {...s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Startups — with images */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="reveal flex items-end justify-between mb-12">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Startups Making Moves</h2>
                <p className="text-muted-foreground mt-2 max-w-md">Discover high-potential ventures across East Africa ready for investment</p>
              </div>
              <Link to="/startups" className="hidden md:inline-flex">
                <KmanButton variant="ghost">View All <ArrowRight className="h-4 w-4" /></KmanButton>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredStartups.map((s, i) => (
                <div key={s.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <StartupCard startup={s} />
                </div>
              ))}
            </div>
            <div className="md:hidden mt-8 text-center reveal">
              <Link to="/startups"><KmanButton variant="ghost">View All Startups <ArrowRight className="h-4 w-4" /></KmanButton></Link>
            </div>
          </div>
        </section>

        {/* Mentor Network — creative connected graph style */}
        <section className="py-24 bg-secondary grain-overlay relative overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/8 blur-[150px]" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — Network visualization */}
              <div className="reveal relative h-[420px]">
                {/* Connection lines — SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420">
                  <line x1="150" y1="80" x2="300" y2="180" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="300" y1="180" x2="400" y2="100" stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" />
                  <line x1="300" y1="180" x2="120" y2="280" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="300" y1="180" x2="380" y2="320" stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" />
                  <line x1="120" y1="280" x2="250" y2="370" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="150" y1="80" x2="60" y2="180" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1" />
                  <line x1="60" y1="180" x2="120" y2="280" stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1" />
                  {/* Dots */}
                  <circle cx="200" cy="130" r="3" fill="hsl(var(--primary))" opacity="0.3" />
                  <circle cx="350" cy="250" r="2" fill="hsl(var(--primary))" opacity="0.2" />
                  <circle cx="180" cy="340" r="2.5" fill="hsl(var(--primary))" opacity="0.25" />
                  <circle cx="440" cy="200" r="2" fill="hsl(var(--primary))" opacity="0.15" />
                </svg>

                {/* Mentor avatars positioned */}
                {featuredMentors.slice(0, 6).map((m, i) => {
                  const positions = [
                    { top: "8%", left: "25%" },
                    { top: "30%", left: "50%" },
                    { top: "15%", left: "72%" },
                    { top: "50%", left: "12%" },
                    { top: "65%", left: "65%" },
                    { top: "75%", left: "38%" },
                  ];
                  const sizes = [72, 88, 68, 64, 72, 76];
                  const pos = positions[i];
                  const size = sizes[i];

                  return (
                    <div
                      key={m.id}
                      className="absolute float group/mentor"
                      style={{ ...pos, animationDelay: `${i * -1.5}s` }}
                    >
                      <div
                        className="rounded-full border-2 border-primary/20 bg-secondary flex items-center justify-center overflow-hidden transition-all duration-300 group-hover/mentor:border-primary group-hover/mentor:scale-110 group-hover/mentor:shadow-lg group-hover/mentor:shadow-primary/20"
                        style={{ width: size, height: size }}
                      >
                        <div className={`w-full h-full flex items-center justify-center text-lg font-bold text-card ${m.color}`}>
                          {m.initials}
                        </div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/mentor:opacity-100 transition-opacity duration-200">
                        <span className="text-xs font-semibold text-secondary-foreground bg-secondary/80 backdrop-blur-sm px-2 py-1 rounded-full">{m.name.split(" ")[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right — Content */}
              <div className="reveal">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mentorship</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2 mb-6">Learn from the Best</h2>
                <p className="text-secondary-foreground/60 leading-relaxed mb-8 text-lg">
                  World-class mentors from across the East African ecosystem. Connect with industry leaders who've been where you want to go.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Lightbulb, text: "Expert guidance from seasoned entrepreneurs & executives" },
                    { icon: Globe, text: "Network spanning Tanzania, Kenya, Rwanda & Uganda" },
                    { icon: Building2, text: "Industry leaders from top companies across East Africa" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-secondary-foreground/70 text-sm leading-relaxed pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Mini mentor cards */}
                <div className="space-y-3 mb-8">
                  {featuredMentors.slice(0, 3).map((m) => (
                    <div key={m.id} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-card ${m.color}`}>
                        {m.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-secondary-foreground truncate">{m.name}</p>
                        <p className="text-xs text-secondary-foreground/50">{m.title} — {m.company}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                        <span className="text-sm font-semibold text-secondary-foreground">{m.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/mentors">
                  <KmanButton variant="primary">
                    Browse All Mentors <ArrowRight className="h-4 w-4" />
                  </KmanButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Network Locations — card carousel like screenshot 2 */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="reveal flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reach</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Our East African Footprint</h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  Our presence connects innovation ecosystems across East Africa, bringing together founders and capital across borders.
                </p>
              </div>
              <Link to="/about">
                <KmanButton variant="outline">Learn More</KmanButton>
              </Link>
            </div>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, i) => (
                <div
                  key={loc.city}
                  className={`reveal reveal-delay-${i + 1} group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500`}
                  style={{ height: 400 }}
                  onMouseEnter={() => setHoveredLocation(i)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <img
                    src={loc.image}
                    alt={loc.city}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/90 border border-white/20">
                      {loc.label}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">{loc.city}</h3>
                        <p className="text-sm text-white/60">{loc.country}</p>
                      </div>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${hoveredLocation === i ? "bg-primary border-primary" : ""}`}>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container">
            <div className="reveal text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ecosystem</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mt-2">Our Partners & Ecosystem</h2>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">Backed by leading institutions across East Africa</p>
            </div>
            <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                    <span className="text-lg font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">{p.short[0]}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium leading-tight group-hover:text-foreground transition-colors">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">Ready to Join the Network?</h2>
              <p className="text-secondary/70 mb-10 max-w-xl mx-auto text-lg">Whether you're a founder seeking funding or an investor looking for the next big opportunity, KMAN is your gateway.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/apply"><KmanButton variant="secondary" size="lg">Apply as Startup</KmanButton></Link>
                <Link to="/register"><KmanButton variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">Join as Investor</KmanButton></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default LandingPage;
