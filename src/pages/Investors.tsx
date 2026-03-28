import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { investors } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, DollarSign, TrendingUp, Users, Globe, Mountain, CheckCircle } from "lucide-react";

const benefits = [
  "Curated deal flow from vetted East African startups",
  "AI-powered matching to your investment thesis",
  "Secure deal room with digital term sheets",
  "Mentor network for portfolio support",
  "Real-time portfolio tracking & reporting",
];

const InvestorsPage = () => {
  const scrollRef = useScrollReveal();

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="bg-secondary grain-overlay py-28 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary/15 blur-[80px]" />
          <div className="container relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4 text-primary" />
              <span className="text-sm text-secondary-foreground/70 font-medium">Angel Investing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-foreground mb-6 leading-tight animate-fade-in-up">
              Invest in East Africa's{" "}
              <span className="shimmer">Future</span>
            </h1>
            <p className="text-lg text-secondary-foreground/60 mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "100ms" }}>
              Join 42 angel investors deploying smart capital into the continent's most promising startups.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Link to="/register"><KmanButton variant="primary" size="lg">Become an Investor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-card">
          <div className="container grid gap-6 md:grid-cols-4">
            {[
              { icon: DollarSign, val: "$2.4M", label: "Capital Deployed" },
              { icon: TrendingUp, val: "3.2x", label: "Avg. Return" },
              { icon: Users, val: "42", label: "Active Investors" },
              { icon: Globe, val: "4", label: "Countries" },
            ].map((s, i) => (
              <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                <KmanCard goldBorder className="text-center group">
                  <s.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-3xl font-display font-bold">{s.val}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </KmanCard>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Why Invest with KMAN?</h2>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/apply"><KmanButton variant="primary" size="lg">Start Investing <ArrowRight className="h-4 w-4" /></KmanButton></Link>
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="gradient-navy rounded-3xl p-8 grain-overlay relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <div className="glass rounded-2xl p-5">
                      <p className="text-xs text-secondary-foreground/50 font-medium mb-1">Portfolio Value</p>
                      <p className="text-3xl font-display font-bold text-secondary-foreground">$127,500</p>
                      <p className="text-sm text-success mt-1">↑ 12% this quarter</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass rounded-xl p-4">
                        <p className="text-xs text-secondary-foreground/50 font-medium">Active Deals</p>
                        <p className="text-2xl font-display font-bold text-secondary-foreground">8</p>
                      </div>
                      <div className="glass rounded-xl p-4">
                        <p className="text-xs text-secondary-foreground/50 font-medium">Avg ROI</p>
                        <p className="text-2xl font-display font-bold text-primary">3.2x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Investors */}
        <section className="py-24 bg-card">
          <div className="container">
            <div className="reveal text-center mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Network</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Featured Investors</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {investors.map((inv, i) => (
                <div key={inv.id} className={`reveal reveal-delay-${i + 1}`}>
                  <KmanCard className="group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-sm font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{inv.avatar}</div>
                      <div>
                        <p className="font-display font-bold text-lg">{inv.name}</p>
                        <p className="text-sm text-muted-foreground">{inv.location}</p>
                      </div>
                    </div>
                    <p className="text-2xl font-display font-bold">${inv.deployed.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">deployed</span></p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {inv.sectors.map((s) => <KmanBadge key={s} variant="gold">{s}</KmanBadge>)}
                    </div>
                  </KmanCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default InvestorsPage;
