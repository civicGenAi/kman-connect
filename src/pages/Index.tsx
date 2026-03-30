import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/kman/PublicLayout";
import { KmanButton } from "@/components/kman/KmanButton";
import { StartupCard } from "@/components/kman/StartupCard";
import { startups, mentors } from "@/data/mockData";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Star, Globe, Building2, Lightbulb, Handshake, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

import darImg from "@/assets/locations/dar-es-salaam.jpg";
import nairobiImg from "@/assets/locations/nairobi.jpg";
import kigaliImg from "@/assets/locations/kigali.jpg";
import kampalaImg from "@/assets/locations/kampala.jpg";

const stats = [
  { value: 42, label: "Angel Investors", icon: Users },
  { value: 67, label: "Startups Supported", icon: Zap },
  { value: 2.4, label: "Capital Deployed", prefix: "$", suffix: "M", icon: TrendingUp },
  { value: 18, label: "Mentors Active", icon: Lightbulb },
];

const locations = [
  { city: "Dar es Salaam", country: "Tanzania", label: "Headquarters", image: darImg },
  { city: "Nairobi", country: "Kenya", label: "Launched 2023", image: nairobiImg },
  { city: "Kigali", country: "Rwanda", label: "Launched 2024", image: kigaliImg },
  { city: "Kampala", country: "Uganda", label: "Expanding", image: kampalaImg },
];

const partners = [
  { name: "Zanzibar Investment Promotion Agency", short: "ZIPA", type: "Government" },
  { name: "Tanzania Private Sector Foundation", short: "TPSF", type: "Industry Body" },
  { name: "East Africa Venture Capital Assoc.", short: "EAVCA", type: "Network" },
  { name: "Seedstars", short: "Seedstars", type: "Accelerator" },
  { name: "Startup Grind Arusha", short: "SG Arusha", type: "Community" },
  { name: "Africa Development Bank", short: "AfDB", type: "Development Finance" },
];

const StatCounter = ({ value, label, prefix = "", suffix = "", icon: Icon, delay }: { value: number; label: string; prefix?: string; suffix?: string; icon: any; delay: number }) => {
  const count = useCountUp(value === 2.4 ? 24 : value);
  const display = value === 2.4 ? (count / 10).toFixed(1) : count;
  return (
    <div
      className="text-center group animate-fade-in-up"
      style={{ animationDelay: `${1.5 + delay * 0.15}s` }}
    >
      <div className="flex items-center justify-center mb-3">
        <Icon className="h-5 w-5 text-primary/60" />
      </div>
      <p className="text-3xl md:text-4xl font-mono font-medium text-primary group-hover:drop-shadow-[0_0_12px_rgba(240,168,0,0.4)] transition-all duration-300">
        {prefix}{display}{suffix}
      </p>
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mt-2 font-medium">{label}</p>
    </div>
  );
};

const StartupMarquee = () => {
  const items = [...startups, ...startups];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[hsl(230,60%,5%)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[hsl(230,60%,5%)] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
        {items.map((s, i) => (
          <div key={`${s.id}-${i}`} className="w-[300px] md:w-[340px] flex-shrink-0">
            <StartupCard startup={s} />
          </div>
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const featuredMentors = mentors.slice(0, 6);
  const scrollRef = useScrollReveal();
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Dark overlay on canvas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,8,20,0.85)] via-[rgba(10,12,30,0.75)] to-[rgba(5,8,20,0.9)] z-[1]" />

          <div className="container relative z-[3] py-20">
            <div className="max-w-3xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm px-4 py-1.5 mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-xs font-medium text-primary/80">🌍 East Africa's Premier Investment Network</span>
              </div>

              {/* Headline */}
              <h1 className="text-[52px] sm:text-[72px] md:text-[96px] font-display font-bold leading-[1] tracking-[-2px]">
                <span className="block text-white animate-fade-in-up" style={{ animationDelay: "0.6s" }}>Connect.</span>
                <span className="block text-gradient-gold animate-fade-in-up" style={{ animationDelay: "0.75s" }}>Invest.</span>
                <span className="block text-white animate-fade-in-up" style={{ animationDelay: "0.9s" }}>Elevate.</span>
              </h1>

              {/* Subheading */}
              <p
                className="mt-6 text-lg md:text-xl text-white/55 max-w-[500px] leading-relaxed font-light animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                Where African Founders Meet Global Capital
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up"
                style={{ animationDelay: "1.2s" }}
              >
                <Link to="/apply">
                  <KmanButton variant="primary" size="lg" className="w-full sm:w-auto rounded-full px-8 py-4 text-base">
                    Join the Network <ArrowRight className="h-4 w-4" />
                  </KmanButton>
                </Link>
                <Link to="/startups">
                  <KmanButton variant="ghost" size="lg" className="w-full sm:w-auto rounded-full px-8 py-4 text-base border border-primary/30 text-white hover:bg-primary/10">
                    Explore Opportunities
                  </KmanButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] text-white/20 animate-bounce-down hidden sm:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative z-[2] -mt-8 px-4">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                {stats.map((s, i) => (
                  <StatCounter key={s.label} {...s} delay={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Startups Marquee */}
        <section className="py-20 md:py-28 relative">
          <div className="container mb-8 md:mb-12">
            <div className="reveal-up flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Portfolio</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 text-white">Startups Making Moves</h2>
                <p className="text-white/40 mt-2 max-w-md text-sm sm:text-base font-light">High-potential ventures across East Africa ready for investment</p>
              </div>
              <Link to="/startups">
                <KmanButton variant="ghost" className="text-primary hover:bg-primary/10">View All <ArrowRight className="h-4 w-4" /></KmanButton>
              </Link>
            </div>
          </div>
          <StartupMarquee />
        </section>

        {/* Mentor Network */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-[150px]" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — Network visualization */}
              <div className="reveal-left relative hidden lg:block h-[420px]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420">
                  <line x1="150" y1="80" x2="300" y2="180" stroke="rgba(240,168,0,0.15)" strokeWidth="1" />
                  <line x1="300" y1="180" x2="400" y2="100" stroke="rgba(240,168,0,0.1)" strokeWidth="1" />
                  <line x1="300" y1="180" x2="120" y2="280" stroke="rgba(240,168,0,0.15)" strokeWidth="1" />
                  <line x1="300" y1="180" x2="380" y2="320" stroke="rgba(240,168,0,0.1)" strokeWidth="1" />
                  <line x1="120" y1="280" x2="250" y2="370" stroke="rgba(240,168,0,0.08)" strokeWidth="1" />
                  <line x1="150" y1="80" x2="60" y2="180" stroke="rgba(240,168,0,0.08)" strokeWidth="1" />
                  <line x1="60" y1="180" x2="120" y2="280" stroke="rgba(240,168,0,0.1)" strokeWidth="1" />
                </svg>

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

                  return (
                    <div key={m.id} className="absolute float group/mentor" style={{ ...positions[i], animationDelay: `${i * -1.5}s` }}>
                      <div
                        className="rounded-full border border-primary/20 bg-[hsl(230,60%,5%)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover/mentor:border-primary/60 group-hover/mentor:scale-110 group-hover/mentor:shadow-lg group-hover/mentor:shadow-primary/20"
                        style={{ width: sizes[i], height: sizes[i] }}
                      >
                        <div className={`w-full h-full flex items-center justify-center text-lg font-bold text-white ${m.color}`}>
                          {m.initials}
                        </div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/mentor:opacity-100 transition-opacity duration-200">
                        <span className="text-xs font-semibold text-white bg-secondary/80 backdrop-blur-sm px-2 py-1 rounded-full">{m.name.split(" ")[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right — Content */}
              <div className="reveal-right">
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Mentorship</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-6">Learn from the Best</h2>
                <p className="text-white/50 leading-relaxed mb-8 text-base sm:text-lg font-light">
                  World-class mentors from across the East African ecosystem. Connect with industry leaders who've been where you want to go.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Lightbulb, text: "Expert guidance from seasoned entrepreneurs & executives" },
                    { icon: Globe, text: "Network spanning Tanzania, Kenya, Rwanda & Uganda" },
                    { icon: Building2, text: "Industry leaders from top companies across East Africa" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Mini mentor cards */}
                <div className="space-y-3 mb-8">
                  {featuredMentors.slice(0, 3).map((m) => (
                    <div key={m.id} className="flex items-center gap-3 cosmic-card rounded-xl px-4 py-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${m.color}`}>
                        {m.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white truncate">{m.name}</p>
                        <p className="text-xs text-white/40 truncate">{m.title} — {m.company}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                        <span className="text-sm font-semibold text-white">{m.rating}</span>
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

        {/* Network Locations */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="reveal-up flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-12 gap-4">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Reach</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 text-white">Our East African Footprint</h2>
                <p className="text-white/40 mt-2 max-w-lg text-sm sm:text-base font-light">
                  Connecting innovation ecosystems across East Africa, bringing together founders and capital across borders.
                </p>
              </div>
              <Link to="/about">
                <KmanButton variant="ghost" className="border border-primary/20 text-primary hover:bg-primary/10">Learn More</KmanButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {locations.map((loc, i) => (
                <div
                  key={loc.city}
                  className="reveal-scale group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{ height: 320, transitionDelay: `${i * 0.1}s` }}
                  onMouseEnter={() => setHoveredLocation(i)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <img src={loc.image} alt={loc.city} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/90 border border-white/15">{loc.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white">{loc.city}</h3>
                        <p className="text-sm text-white/50">{loc.country}</p>
                      </div>
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${hoveredLocation === i ? "bg-primary border-primary" : "bg-white/10 backdrop-blur-sm border border-white/15"}`}>
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
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />
          <div className="container relative z-10">
            <div className="reveal-up text-center mb-10 md:mb-16">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Ecosystem</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mt-2">Our Partners & Ecosystem</h2>
              <p className="text-white/40 mt-3 max-w-lg mx-auto text-sm sm:text-base font-light">Backed by leading institutions powering East Africa's innovation economy</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {partners.map((p, i) => (
                <div
                  key={p.name}
                  className="reveal-scale cosmic-card rounded-2xl p-6 sm:p-8 cursor-pointer group"
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
                      <span className="text-xl font-display font-bold text-primary">{p.short[0]}{p.short[1]}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-white group-hover:text-primary transition-colors text-sm sm:text-base">{p.name}</p>
                      <span className="inline-block mt-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.15em] bg-white/5 rounded-full px-3 py-1">{p.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/about">
                <KmanButton variant="ghost" className="border border-primary/20 text-primary hover:bg-primary/10">
                  Explore Our Ecosystem <ArrowRight className="h-4 w-4" />
                </KmanButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 gradient-gold opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center px-4 z-10">
            <div className="reveal-up">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-secondary mb-4">Ready to Join the Network?</h2>
              <p className="text-secondary/70 mb-8 md:mb-10 max-w-xl mx-auto text-base sm:text-lg">Whether you're a founder seeking funding or an investor looking for the next big opportunity, KMAN is your gateway.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/apply"><KmanButton variant="secondary" size="lg" className="w-full sm:w-auto">Apply as Startup</KmanButton></Link>
                <Link to="/register"><KmanButton variant="outline" size="lg" className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white">Join as Investor</KmanButton></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default LandingPage;
