import { PublicLayout } from "@/components/kman/PublicLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Handshake, DollarSign, ShieldCheck, Users, BarChart3, Mountain, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";

const steps = [
  {
    icon: Rocket,
    title: "Apply & Get Vetted",
    desc: "Submit your startup profile with pitch deck, financials, and team details. Our expert committee reviews every application within 5 business days.",
    details: ["Complete online application", "Upload pitch deck & financials", "Team background review", "Committee assessment within 5 days"],
  },
  {
    icon: ShieldCheck,
    title: "KYC & Due Diligence",
    desc: "Approved startups go through our streamlined KYC and due diligence process to build trust with our investor network.",
    details: ["Identity verification", "Business registration check", "Financial audit review", "Legal compliance assessment"],
  },
  {
    icon: Users,
    title: "Match & Connect",
    desc: "Our smart matching algorithm connects you with the most relevant investors and mentors based on sector, stage, and goals.",
    details: ["AI-powered investor matching", "Mentor pairing by expertise", "Warm introductions", "Network event invitations"],
  },
  {
    icon: Handshake,
    title: "Negotiate & Structure",
    desc: "Use our deal room to negotiate terms, share documents securely, and structure your investment with legal support.",
    details: ["Secure deal room", "Term sheet templates", "Legal document sharing", "Real-time negotiation tools"],
  },
  {
    icon: DollarSign,
    title: "Close & Fund",
    desc: "Finalize the deal with our integrated payment and escrow system. Funds are released based on agreed milestones.",
    details: ["Secure escrow payments", "Milestone-based releases", "Digital contract signing", "Automated compliance"],
  },
  {
    icon: BarChart3,
    title: "Grow & Report",
    desc: "Post-investment, track portfolio performance, receive mentorship, and share progress reports with your investor base.",
    details: ["Quarterly reporting dashboard", "Mentor session scheduling", "Portfolio analytics", "Follow-on funding support"],
  },
];

const HowItWorksPage = () => {
  const scrollRef = useScrollReveal();

  return (
    <PublicLayout>
      <div ref={scrollRef}>
        {/* Hero */}
        <section className="bg-secondary grain-overlay py-24 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4 text-primary" />
              <span className="text-sm text-secondary-foreground/70 font-medium">Process</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4 animate-fade-in-up">How KMAN Works</h1>
            <p className="text-secondary-foreground/60 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              From application to funding — a transparent, streamlined journey to connect startups with the capital and mentorship they need.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-background">
          <div className="container max-w-4xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-16">
                {steps.map((step, i) => (
                  <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} relative flex gap-8`}>
                    {/* Step number */}
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl gradient-gold gold-glow">
                        <step.icon className="h-7 w-7 text-secondary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl border border-border bg-card p-8 card-hover">
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold">
                          <step.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {i + 1}</span>
                      </div>
                      <span className="hidden md:inline-block text-xs font-bold text-primary uppercase tracking-wider mb-2">Step {i + 1}</span>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="container relative text-center reveal">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary mb-4">Ready to Get Started?</h2>
            <p className="text-secondary/70 mb-10 max-w-xl mx-auto text-lg">Join East Africa's most trusted angel investment network.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply"><KmanButton variant="secondary" size="lg">Apply as Startup</KmanButton></Link>
              <Link to="/register"><KmanButton variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">Join as Investor</KmanButton></Link>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default HowItWorksPage;
