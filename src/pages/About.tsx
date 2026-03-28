import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { useCountUp } from "@/hooks/useCountUp";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

const team = [
  { name: "Dr. Joseph Moshi", role: "Founder & CEO", bio: "Former investment banker with 15 years in East African private equity", initials: "JM", color: "bg-kman-gold" },
  { name: "Sophia Kimaro", role: "Head of Investments", bio: "Led $50M+ in angel investments across the region", initials: "SK", color: "bg-blue-500" },
  { name: "Emmanuel Osei", role: "CTO", bio: "Built fintech platforms serving 2M+ users in Africa", initials: "EO", color: "bg-emerald-500" },
  { name: "Amina Hassan", role: "Head of Mentorship", bio: "Designed accelerator programs for 200+ startups", initials: "AH", color: "bg-violet-500" },
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

const AboutPage = () => (
  <PublicLayout>
    <section className="bg-secondary grain-overlay py-24 relative">
      <div className="container relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
          Powering East Africa's Next Generation of Startups
        </h1>
        <p className="text-lg text-secondary-foreground/70">Connecting visionary founders with smart capital and world-class mentorship since 2022</p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <blockquote className="text-2xl md:text-3xl font-display font-bold text-foreground leading-relaxed text-center border-l-4 border-primary pl-6">
          "Our mission is to democratize access to angel investment and mentorship for East African entrepreneurs, building a thriving ecosystem from the foothills of Kilimanjaro to the shores of Lake Victoria."
        </blockquote>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <KmanCard key={t.name} className="text-center">
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${t.color} text-lg font-bold text-card mb-4`}>{t.initials}</div>
              <h3 className="font-display font-bold">{t.name}</h3>
              <p className="text-sm text-primary font-medium">{t.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{t.bio}</p>
            </KmanCard>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-kman-off-white">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Our Journey</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
          {timeline.map((t) => (
            <KmanCard key={t.year} goldBorder className="min-w-[280px] snap-start">
              <span className="text-3xl font-display font-bold text-primary">{t.year}</span>
              <h3 className="font-display font-bold mt-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
            </KmanCard>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <KmanCard key={v.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold mb-4">
                <v.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </KmanCard>
          ))}
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default AboutPage;
