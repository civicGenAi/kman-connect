import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Users, Target, Heart, Lightbulb, ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";

const team = [
  { name: "Dr. Joseph Moshi", role: "Founder & CEO", bio: "Former investment banker with 15 years in East African private equity", initials: "JM", color: "bg-primary" },
  { name: "Sophia Kimaro", role: "Head of Investments", bio: "Led $50M+ in angel investments across the region", initials: "SK", color: "bg-accent" },
  { name: "Emmanuel Osei", role: "CTO", bio: "Built fintech platforms serving 2M+ users in Africa", initials: "EO", color: "bg-success" },
  { name: "Amina Hassan", role: "Head of Mentorship", bio: "Designed accelerator programs for 200+ startups", initials: "AH", color: "bg-destructive" },
];

const timeline = [
  { year: "2022", title: "Founded in Arusha", desc: "KMAN launches with 5 angel investors and a vision to transform East African startup funding" },
  { year: "2023", title: "First $1M Deployed", desc: "Reached 30 startups supported and expanded to Kenya and Uganda" },
  { year: "2024", title: "Mentor Network Launch", desc: "Added mentorship marketplace with 15+ industry experts" },
  { year: "2025", title: "Regional Expansion", desc: "42 investors, 67 startups, $2.4M deployed across 4 countries" },
];

const values = [
  { icon: Heart, title: "Integrity", desc: "Transparent dealings and honest partnerships drive everything we do" },
  { icon: Users, title: "Community", desc: "Building Africa's strongest entrepreneurial network, together" },
  { icon: Lightbulb, title: "Innovation", desc: "Backing bold ideas that solve real problems for real people" },
  { icon: Target, title: "Growth", desc: "Relentlessly focused on creating value and scaling impact" },
];

const impactStats = [
  { value: 67, label: "Startups Funded", suffix: "+" },
  { value: 42, label: "Angel Investors" },
  { value: 4, label: "Countries" },
  { value: 200, label: "Jobs Created", suffix: "+" },
];

const AboutPage = () => {
  const scrollRef = useScrollReveal();

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero — split layout */}
        <section className="bg-secondary grain-overlay relative overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary/15 blur-[80px]" />
          <div className="container relative z-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-[1.08]">
                  Powering East Africa's Next Generation of{" "}
                  <span className="shimmer">Startups</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-secondary-foreground/60 leading-relaxed max-w-lg">
                  Since 2022, KMAN has connected visionary founders with smart capital and world-class mentorship from the foothills of Kilimanjaro.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/apply"><KmanButton variant="primary" size="lg" className="w-full sm:w-auto">Join the Network <ArrowRight className="h-4 w-4" /></KmanButton></Link>
                  <Link to="/how-it-works"><KmanButton variant="outline" size="lg" className="w-full sm:w-auto border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">How It Works</KmanButton></Link>
                </div>
              </div>
              {/* Impact numbers grid */}
              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((s, i) => (
                  <div key={s.label} className={`reveal reveal-delay-${i + 1} glass rounded-2xl p-6 text-center hover:gold-glow transition-all duration-300`}>
                    <p className="text-3xl md:text-4xl font-display font-bold text-primary">{s.value}{s.suffix || ""}</p>
                    <p className="text-xs sm:text-sm text-secondary-foreground/50 mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission — full-width quote */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-3xl reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-2 text-7xl md:text-8xl text-primary/15 font-display font-bold leading-none select-none">"</div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed text-center px-4 md:px-8 relative z-10">
                Our mission is to democratize access to angel investment and mentorship for East African entrepreneurs, building a thriving ecosystem from the foothills of Kilimanjaro to the shores of Lake Victoria.
              </blockquote>
              <div className="absolute -bottom-10 right-0 text-7xl md:text-8xl text-primary/15 font-display font-bold leading-none select-none">"</div>
            </div>
            <div className="flex items-center justify-center mt-10 gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-secondary font-bold text-sm">JM</div>
              <div>
                <p className="text-sm font-semibold text-foreground">Dr. Joseph Moshi</p>
                <p className="text-xs text-muted-foreground">Founder & CEO, KMAN</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team — modern card layout */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2">The People Behind KMAN</h2>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm sm:text-base">A passionate team of operators, investors, and ecosystem builders</p>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                    <div className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl ${t.color} text-lg sm:text-xl font-bold text-card mb-5 group-hover:scale-110 transition-transform duration-300`}>{t.initials}</div>
                    <h3 className="font-display font-bold text-base sm:text-lg">{t.name}</h3>
                    <p className="text-sm text-primary font-semibold mt-0.5">{t.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
                    {/* Subtle accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-6 h-6 bg-primary/5 rounded-bl-2xl group-hover:bg-primary/10 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline — vertical on mobile, horizontal on desktop */}
        <section className="py-16 md:py-24 bg-secondary grain-overlay">
          <div className="container relative z-10">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Milestones</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2">Our Journey</h2>
            </div>
            {/* Desktop */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-px bg-secondary-foreground/10" />
                <div className="grid md:grid-cols-4 gap-6">
                  {timeline.map((t, i) => (
                    <div key={t.year} className={`reveal reveal-delay-${i + 1} relative`}>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-secondary z-10" />
                      <div className="glass rounded-2xl p-6 mt-14 hover:gold-glow transition-all duration-300">
                        <span className="text-3xl font-display font-bold text-primary">{t.year}</span>
                        <h3 className="font-display font-bold text-secondary-foreground mt-3">{t.title}</h3>
                        <p className="text-sm text-secondary-foreground/60 mt-2 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-4">
              {timeline.map((t, i) => (
                <div key={t.year} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="glass rounded-2xl p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-display font-bold text-primary">{t.year}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary-foreground text-sm">{t.title}</h3>
                      <p className="text-xs text-secondary-foreground/60 mt-1 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="reveal text-center mb-10 md:mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Principles</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2">What We Stand For</h2>
            </div>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div key={v.title} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="group text-center rounded-2xl border border-border bg-background p-6 sm:p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                    <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl gradient-gold mb-5 group-hover:scale-110 transition-transform duration-300 gold-glow">
                      <v.icon className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center reveal px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Be Part of the Story</h2>
            <p className="text-secondary/70 mb-8 max-w-lg mx-auto text-sm sm:text-base">Join the growing KMAN community and help shape the future of East African entrepreneurship.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/apply"><KmanButton variant="secondary" size="lg" className="w-full sm:w-auto">Get Started <ArrowRight className="h-4 w-4" /></KmanButton></Link>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default AboutPage;
