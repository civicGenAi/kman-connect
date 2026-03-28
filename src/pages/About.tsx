import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Users, Target, Heart, Lightbulb, ArrowRight, Mountain } from "lucide-react";
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

const AboutPage = () => {
  const scrollRef = useScrollReveal();

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="bg-secondary grain-overlay py-28 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
          <div className="container relative z-10 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4 text-primary" />
              <span className="text-sm text-secondary-foreground/70 font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-foreground mb-6 leading-tight animate-fade-in-up">
              Powering East Africa's Next Generation of{" "}
              <span className="shimmer">Startups</span>
            </h1>
            <p className="text-lg text-secondary-foreground/60 animate-fade-in-up leading-relaxed" style={{ animationDelay: "150ms" }}>
              Connecting visionary founders with smart capital and world-class mentorship since 2022
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-card">
          <div className="container max-w-3xl reveal">
            <blockquote className="text-xl md:text-2xl font-display font-bold text-foreground leading-relaxed text-center relative">
              <span className="text-6xl text-primary/20 font-display absolute -top-8 -left-4">"</span>
              Our mission is to democratize access to angel investment and mentorship for East African entrepreneurs, building a thriving ecosystem from the foothills of Kilimanjaro to the shores of Lake Victoria.
              <span className="text-6xl text-primary/20 font-display absolute -bottom-12 right-0">"</span>
            </blockquote>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="reveal text-center mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Our Team</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i + 1}`}>
                  <KmanCard className="text-center group">
                    <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${t.color} text-xl font-bold text-card mb-5 group-hover:scale-110 transition-transform duration-300`}>{t.initials}</div>
                    <h3 className="font-display font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-primary font-semibold">{t.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
                  </KmanCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-secondary grain-overlay">
          <div className="container relative z-10">
            <div className="reveal text-center mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Milestones</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mt-2">Our Journey</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <div key={t.year} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="glass rounded-2xl p-6 h-full hover:gold-glow transition-all duration-300">
                    <span className="text-4xl font-display font-bold text-primary">{t.year}</span>
                    <h3 className="font-display font-bold text-secondary-foreground mt-3">{t.title}</h3>
                    <p className="text-sm text-secondary-foreground/60 mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card">
          <div className="container">
            <div className="reveal text-center mb-14">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Principles</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Our Values</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div key={v.title} className={`reveal reveal-delay-${i + 1}`}>
                  <KmanCard className="text-center group">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-gold mb-5 group-hover:scale-110 transition-transform duration-300 gold-glow">
                      <v.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="font-display font-bold text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
                  </KmanCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Be Part of the Story</h2>
            <p className="text-secondary/70 mb-8 max-w-lg mx-auto">Join the growing KMAN community and help shape the future of East African entrepreneurship.</p>
            <Link to="/apply"><KmanButton variant="secondary" size="lg">Get Started <ArrowRight className="h-4 w-4" /></KmanButton></Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default AboutPage;
