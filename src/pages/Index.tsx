import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanCard } from "@/components/kman/KmanCard";
import { StartupCard } from "@/components/kman/StartupCard";
import { MentorCard } from "@/components/kman/MentorCard";
import { startups, mentors } from "@/data/mockData";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, Rocket, Handshake, DollarSign, ArrowRight, Mountain } from "lucide-react";

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
  const featuredMentors = mentors.slice(0, 3);
  const scrollRef = useScrollReveal();

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

        {/* Featured Startups */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="reveal flex items-end justify-between mb-12">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Startups Making Moves</h2>
                <p className="text-muted-foreground mt-2 max-w-md">Discover high-potential ventures across East Africa</p>
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

        {/* How It Works */}
        <section className="py-24 bg-secondary grain-overlay">
          <div className="container relative z-10">
            <div className="reveal text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} text-center`}>
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl gradient-gold mb-8 gold-glow">
                    <step.icon className="h-8 w-8 text-secondary" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary-foreground mb-3">{step.title}</h3>
                  <p className="text-secondary-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Spotlight */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="reveal text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mentorship</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Learn from the Best</h2>
              <p className="text-muted-foreground mt-2">World-class mentors from across the East African ecosystem</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredMentors.map((m, i) => (
                <div key={m.id} className={`reveal reveal-delay-${i + 1}`}>
                  <MentorCard mentor={m} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Map */}
        <section className="py-24 bg-secondary grain-overlay relative overflow-hidden">
          <div className="container relative z-10 text-center">
            <div className="reveal">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Reach</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2 mb-4">Growing Network Across East Africa</h2>
              <p className="text-secondary-foreground/60 mb-12">Connecting innovation hubs in four countries and expanding</p>
            </div>
            <div className="reveal flex justify-center gap-8 md:gap-12 flex-wrap">
              {["Tanzania", "Kenya", "Rwanda", "Uganda"].map((country, i) => (
                <div key={country} className={`reveal reveal-delay-${i + 1} flex flex-col items-center gap-3`}>
                  <div className="h-16 w-16 rounded-2xl gradient-gold flex items-center justify-center pulse-gold">
                    <span className="text-2xl font-display font-bold text-secondary">{country[0]}</span>
                  </div>
                  <span className="text-secondary-foreground font-semibold text-sm">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="reveal">
              <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold mb-10">Our Partners & Ecosystem</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {partners.map((p) => (
                  <div key={p} className="px-6 py-3 rounded-full bg-muted text-sm text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default">{p}</div>
                ))}
              </div>
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
