import { useState } from "react";
import { Link } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanCard } from "@/components/kman/KmanCard";
import kmanLogo from "@/assets/kman-logo.png";
import { Building2, Wallet, Brain, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  { id: "startup", label: "I'm a Startup", icon: Building2, desc: "Looking for funding and mentorship" },
  { id: "investor", label: "I'm an Investor", icon: Wallet, desc: "Ready to invest in African startups" },
  { id: "mentor", label: "I'm a Mentor", icon: Brain, desc: "Want to share expertise and guide founders" },
];

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-lg space-y-6">
        <Link to="/" className="inline-block">
          <img src={kmanLogo} alt="KMAN" className="h-10 w-auto" />
        </Link>

        {/* Progress */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors shrink-0",
                s <= step ? "gradient-gold text-secondary" : "bg-muted text-muted-foreground"
              )}>
                {s < step ? <Check className="h-4 w-4" /> : s}
              </div>
              {s < 3 && <div className={cn("h-0.5 flex-1 rounded-full", s < step ? "gradient-gold" : "bg-muted")} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-display font-bold">Join KMAN</h1>
            <p className="text-muted-foreground">Choose your role to get started</p>
            <div className="space-y-3">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={cn(
                    "w-full flex items-center gap-4 rounded-xl border-2 p-5 text-left transition-all",
                    role === r.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  )}
                >
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", role === r.id ? "gradient-gold text-secondary" : "bg-muted text-muted-foreground")}>
                    <r.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display font-bold">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            <KmanButton onClick={() => role && setStep(2)} disabled={!role} className="w-full" size="lg">
              Continue <ArrowRight className="h-4 w-4" />
            </KmanButton>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h1 className="text-2xl font-display font-bold">Your Details</h1>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-1.5 block">{role === "startup" ? "Startup Name" : "Full Name"}</label>
                <input className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Password</label>
                <input type="password" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              {role === "startup" && (
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Sector</label>
                  <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>AgriTech</option><option>FinTech</option><option>EdTech</option><option>HealthTech</option><option>Logistics</option><option>FoodTech</option>
                  </select>
                </div>
              )}
              {role === "investor" && (
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Investment Range</label>
                  <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>$5,000 - $25,000</option><option>$25,000 - $100,000</option><option>$100,000+</option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <KmanButton variant="ghost" onClick={() => setStep(1)} className="flex-1" size="lg">
                <ArrowLeft className="h-4 w-4" /> Back
              </KmanButton>
              <KmanButton onClick={() => setStep(3)} className="flex-1" size="lg">
                Continue <ArrowRight className="h-4 w-4" />
              </KmanButton>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-gold">
              <Check className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-2xl font-display font-bold">Application Submitted!</h1>
            <p className="text-muted-foreground">We'll review your profile and get back to you within 48 hours. In the meantime, explore the platform.</p>
            <Link to="/login"><KmanButton size="lg" className="w-full">Go to Login</KmanButton></Link>
          </div>
        )}

        <p className="text-sm text-center text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in →</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
