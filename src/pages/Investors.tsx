import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { investors } from "@/data/mockData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, DollarSign, TrendingUp, Users, Globe, CheckCircle, BarChart3, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Curated deal flow from vetted East African startups" },
  { icon: BarChart3, text: "AI-powered matching to your investment thesis" },
  { icon: Shield, text: "Secure deal room with digital term sheets" },
  { icon: Users, text: "Mentor network for portfolio support" },
  { icon: TrendingUp, text: "Real-time portfolio tracking & reporting" },
];

const InvestorsPage = () => {
  const scrollRef = useScrollReveal();

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero — split */}
        <section className="bg-secondary grain-overlay relative overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary/15 blur-[80px]" />
          <div className="container relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-[1.08]">
                  Invest in East Africa's{" "}
                  <span className="shimmer">Future</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-secondary-foreground/60 leading-relaxed max-w-lg">
                  Join 42 angel investors deploying smart capital into the continent's most promising startups. Diversified, curated, high-impact.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/register"><KmanButton variant="primary" size="lg" className="w-full sm:w-auto">Become an Investor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
                  <Link to="/how-it-works"><KmanButton variant="outline" size="lg" className="w-full sm:w-auto border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">How It Works</KmanButton></Link>
                </div>
              </div>
              {/* Dashboard preview */}
              <div className="reveal reveal-delay-2">
                <div className="gradient-navy rounded-3xl p-6 sm:p-8 grain-overlay relative overflow-hidden">
                  <div className="relative z-10 space-y-4 sm:space-y-6">
                    <div className="glass rounded-2xl p-5">
                      <p className="text-xs text-secondary-foreground/50 font-medium mb-1">Portfolio Value</p>
                      <p className="text-2xl sm:text-3xl font-display font-bold text-secondary-foreground">$127,500</p>
                      <p className="text-sm text-success mt-1">↑ 12% this quarter</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="glass rounded-xl p-4">
                        <p className="text-xs text-secondary-foreground/50 font-medium">Active Deals</p>
                        <p className="text-xl sm:text-2xl font-display font-bold text-secondary-foreground">8</p>
                      </div>
                      <div className="glass rounded-xl p-4">
                        <p className="text-xs text-secondary-foreground/50 font-medium">Avg ROI</p>
                        <p className="text-xl sm:text-2xl font-display font-bold text-primary">3.2x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats row */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: DollarSign, val: "$2.4M", label: "Capital Deployed" },
              { icon: TrendingUp, val: "3.2x", label: "Avg. Return" },
              { icon: Users, val: "42", label: "Active Investors" },
              { icon: Globe, val: "4", label: "Countries" },
            ].map((s, i) => (
              <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                <div className="group text-center rounded-2xl border border-border bg-background p-5 sm:p-6 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <s.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl sm:text-3xl font-display font-bold">{s.val}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Invest — modern with icons */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2">Why Invest with KMAN?</h2>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm sm:text-base">Everything you need to invest with confidence in East Africa</p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <b.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed pt-1 sm:pt-2">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 reveal">
              <Link to="/apply"><KmanButton variant="primary" size="lg" className="w-full sm:w-auto">Start Investing <ArrowRight className="h-4 w-4" /></KmanButton></Link>
            </div>
          </div>
        </section>

        {/* Featured Investors */}
        <section className="py-16 md:py-24 bg-secondary grain-overlay">
          <div className="container relative z-10">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Network</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2">Featured Investors</h2>
              <p className="text-secondary-foreground/50 mt-2 max-w-md mx-auto text-sm sm:text-base">Meet some of the angels backing East Africa's best</p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {investors.map((inv, i) => (
                <div key={inv.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="glass rounded-2xl p-5 sm:p-6 hover:gold-glow hover:-translate-y-1 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl gradient-gold text-sm font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{inv.avatar}</div>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-base sm:text-lg text-secondary-foreground truncate">{inv.name}</p>
                        <p className="text-sm text-secondary-foreground/50 truncate">{inv.location}</p>
                      </div>
                    </div>
                    <p className="text-xl sm:text-2xl font-display font-bold text-secondary-foreground">${inv.deployed.toLocaleString()} <span className="text-xs sm:text-sm font-normal text-secondary-foreground/40">deployed</span></p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {inv.sectors.map((s) => (
                        <span key={s} className="rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center reveal px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Ready to Deploy Capital?</h2>
            <p className="text-secondary/70 mb-8 max-w-lg mx-auto text-sm sm:text-base">Join KMAN's investor network and access the most curated deal flow in East Africa.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/register"><KmanButton variant="secondary" size="lg" className="w-full sm:w-auto">Join as Investor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default InvestorsPage;
