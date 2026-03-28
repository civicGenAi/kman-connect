import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { investors } from "@/data/mockData";
import { ArrowRight, DollarSign, TrendingUp, Users, Globe } from "lucide-react";

const InvestorsPage = () => (
  <PublicLayout>
    <section className="bg-secondary grain-overlay py-24 relative">
      <div className="container relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
          Invest in East Africa's Future
        </h1>
        <p className="text-lg text-secondary-foreground/70 mb-8">
          Join 42 angel investors deploying smart capital into the continent's most promising startups.
        </p>
        <Link to="/register"><KmanButton variant="primary" size="lg">Become an Investor <ArrowRight className="h-4 w-4" /></KmanButton></Link>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container grid gap-6 md:grid-cols-4 text-center">
        {[
          { icon: DollarSign, val: "$2.4M", label: "Capital Deployed" },
          { icon: TrendingUp, val: "3.2x", label: "Avg. Return" },
          { icon: Users, val: "42", label: "Active Investors" },
          { icon: Globe, val: "4", label: "Countries" },
        ].map((s) => (
          <KmanCard key={s.label} goldBorder>
            <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-display font-bold">{s.val}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </KmanCard>
        ))}
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-display font-bold mb-8">Featured Investors</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {investors.map((inv) => (
            <KmanCard key={inv.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-sm font-bold text-secondary">{inv.avatar}</div>
                <div>
                  <p className="font-display font-bold">{inv.name}</p>
                  <p className="text-sm text-muted-foreground">{inv.location}</p>
                </div>
              </div>
              <p className="text-lg font-bold">${inv.deployed.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">deployed</span></p>
              <div className="flex gap-2 mt-3">
                {inv.sectors.map((s) => <KmanBadge key={s} variant="gold">{s}</KmanBadge>)}
              </div>
            </KmanCard>
          ))}
        </div>
      </div>
    </section>
  </PublicLayout>
);

export default InvestorsPage;
