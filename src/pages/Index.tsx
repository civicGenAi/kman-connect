import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanCard } from "@/components/kman/KmanCard";
import { StartupCard } from "@/components/kman/StartupCard";
import { MentorCard } from "@/components/kman/MentorCard";
import { startups, mentors } from "@/data/mockData";
import { useCountUp } from "@/hooks/useCountUp";
import { ChevronDown, Rocket, Handshake, DollarSign, ArrowRight } from "lucide-react";

const stats = [
  { value: 42, label: "Angel Investors" },
  { value: 67, label: "Startups Supported" },
  { value: 2.4, label: "Capital Deployed", prefix: "$", suffix: "M" },
  { value: 18, label: "Mentors Active" },
];

const steps = [
  { icon: Rocket, title: "Apply & Get Vetted", desc: "Startups submit profiles, our team reviews and approves promising ventures." },
  { icon: Handshake, title: "Match & Connect", desc: "AI matching links you to relevant investors and mentors in the network." },
  { icon: DollarSign, title: "Close Deals", desc: "Negotiate, sign, and track your investment all in one place." },
];

const partners = ["Zanzibar Investment Promotion Agency", "Tanzania Private Sector Foundation", "East Africa Venture Capital Association", "Seedstars", "Startup Grind Arusha"];

const StatCounter = ({ value, label, prefix = "", suffix = "" }: { value: number; label: string; prefix?: string; suffix?: string }) => {
  const count = useCountUp(value === 2.4 ? 24 : value);
  const display = value === 2.4 ? (count / 10).toFixed(1) : count;
  return (
    <div className="text-center border-t-2 border-primary pt-4">
      <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{prefix}{display}{suffix}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

// Mountain silhouette SVG
const MountainSilhouette = () => (
  <svg className="absolute bottom-0 left-0 w-full h-32 md:h-48" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
    <path d="M0 200L120 180C180 170 240 160 360 140C420 130 480 120 540 115C600 110 660 108 720 105C780 100 840 98 900 100C960 102 1020 108 1080 115C1140 122 1200 130 1260 145C1320 160 1380 170 1440 180V200H0Z" fill="hsl(40, 100%, 49%)" fillOpacity="0.1" />
    <path d="M0 200L100 185C200 175 300 170 400 155C500 142 600 130 700 125C800 120 900 122 1000 130C1100 138 1200 150 1300 165C1400 175 1440 185 1440 190V200H0Z" fill="hsl(207, 43%, 19%)" fillOpacity="0.3" />
  </svg>
);

const LandingPage = () => {
  const featuredStartups = startups.slice(0, 6);
  const featuredMentors = mentors.slice(0, 3);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary grain-overlay overflow-hidden">
        {/* Golden orb */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full bg-primary/30 blur-[60px]" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-foreground leading-[1.1] animate-fade-in-up">
              Where East African Startups Meet{" "}
              <span className="text-gradient-gold">Smart Capital</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-secondary-foreground/70 max-w-xl animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              KMAN connects visionary founders with angel investors and mentors across the Kilimanjaro region and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Link to="/apply"><KmanButton variant="primary" size="lg">Apply for Funding <ArrowRight className="h-4 w-4" /></KmanButton></Link>
              <Link to="/investors"><KmanButton variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">Become an Investor</KmanButton></Link>
            </div>
          </div>

          {/* Floating stat badges */}
          <div className="hidden lg:block absolute top-20 right-20 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <KmanCard glass className="px-4 py-3 border-secondary-foreground/10">
              <p className="text-2xl font-display font-bold text-secondary-foreground">42</p>
              <p className="text-xs text-secondary-foreground/60">Angel Investors</p>
            </KmanCard>
          </div>
          <div className="hidden lg:block absolute top-48 right-8 animate-fade-in-up" style={{ animationDelay: "650ms" }}>
            <KmanCard glass className="px-4 py-3 border-secondary-foreground/10">
              <p className="text-2xl font-display font-bold text-primary">$2.4M</p>
              <p className="text-xs text-secondary-foreground/60">Deployed</p>
            </KmanCard>
          </div>
          <div className="hidden lg:block absolute bottom-40 right-32 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <KmanCard glass className="px-4 py-3 border-secondary-foreground/10">
              <p className="text-2xl font-display font-bold text-secondary-foreground">67</p>
              <p className="text-xs text-secondary-foreground/60">Startups</p>
            </KmanCard>
          </div>
        </div>

        <MountainSilhouette />

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-secondary-foreground/40 animate-bounce-down">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Startups Making Moves</h2>
              <p className="text-muted-foreground mt-2">Discover high-potential ventures across East Africa</p>
            </div>
            <Link to="/startups" className="hidden md:inline-flex">
              <KmanButton variant="ghost">View All <ArrowRight className="h-4 w-4" /></KmanButton>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredStartups.map((s) => <StartupCard key={s.id} startup={s} />)}
          </div>
          <div className="md:hidden mt-6 text-center">
            <Link to="/startups"><KmanButton variant="ghost">View All Startups <ArrowRight className="h-4 w-4" /></KmanButton></Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary grain-overlay">
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-gold mb-6">
                  <step.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-foreground mb-3">{step.title}</h3>
                <p className="text-secondary-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Spotlight */}
      <section className="py-20 bg-kman-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Learn from the Best</h2>
            <p className="text-muted-foreground mt-2">World-class mentors from across the East African ecosystem</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredMentors.map((m) => <MentorCard key={m.id} mentor={m} />)}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-20 bg-secondary grain-overlay relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">KMAN's Growing Network Across East Africa</h2>
          <p className="text-secondary-foreground/70 mb-12">Tanzania • Kenya • Rwanda • Uganda</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Tanzania", "Kenya", "Rwanda", "Uganda"].map((country) => (
              <div key={country} className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full gradient-gold animate-pulse" />
                <span className="text-secondary-foreground font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-card">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">Our Partners & Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <div key={p} className="px-6 py-3 rounded-lg bg-muted text-sm text-muted-foreground font-medium">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-gold">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Ready to Join the Network?</h2>
          <p className="text-secondary/70 mb-8 max-w-xl mx-auto">Whether you're a founder seeking funding or an investor looking for the next big opportunity, KMAN is your gateway.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply"><KmanButton variant="secondary" size="lg">Apply as Startup</KmanButton></Link>
            <Link to="/register"><KmanButton variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">Join as Investor</KmanButton></Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default LandingPage;
