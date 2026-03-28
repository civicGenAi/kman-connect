import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, demoAccounts, roleRouteMap } from "@/contexts/AuthContext";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanCard } from "@/components/kman/KmanCard";
import kmanLogo from "@/assets/kman-logo.png";
import { Eye, EyeOff, Mail, Lock, Mountain } from "lucide-react";

const demoList = [
  { label: "Investor", email: "investor@kman.co", pw: "demo1234", color: "bg-accent" },
  { label: "Startup", email: "startup@kman.co", pw: "demo1234", color: "bg-success" },
  { label: "Mentor", email: "mentor@kman.co", pw: "demo1234", color: "bg-primary" },
  { label: "Admin", email: "admin@kman.co", pw: "admin1234", color: "bg-destructive" },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(email, password);
    if (success) {
      const account = demoAccounts[email];
      if (account) navigate(roleRouteMap[account.role]);
    } else {
      setError("Invalid credentials. Try a demo account below.");
    }
  };

  const quickLogin = (em: string, pw: string) => {
    setEmail(em);
    setPassword(pw);
    const success = login(em, pw);
    if (success) {
      const account = demoAccounts[em];
      if (account) navigate(roleRouteMap[account.role]);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary grain-overlay relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="relative z-10 max-w-md">
          <img src={kmanLogo} alt="KMAN" className="h-16 w-auto brightness-0 invert mb-8" />
          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-4 leading-tight">
            Empowering East Africa's Next Generation of Entrepreneurs
          </h2>
          <p className="text-secondary-foreground/50 text-lg leading-relaxed">
            "The best time to invest in Africa was 20 years ago. The second best time is now."
          </p>
          <div className="mt-8 flex gap-3">
            <div className="glass rounded-xl px-4 py-3">
              <p className="text-xl font-display font-bold text-secondary-foreground">42</p>
              <p className="text-[10px] text-secondary-foreground/50 font-medium">Investors</p>
            </div>
            <div className="glass rounded-xl px-4 py-3">
              <p className="text-xl font-display font-bold text-primary">$2.4M</p>
              <p className="text-[10px] text-secondary-foreground/50 font-medium">Deployed</p>
            </div>
            <div className="glass rounded-xl px-4 py-3">
              <p className="text-xl font-display font-bold text-secondary-foreground">67</p>
              <p className="text-[10px] text-secondary-foreground/50 font-medium">Startups</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden mb-8 flex items-center gap-3">
            <img src={kmanLogo} alt="KMAN" className="h-10 w-auto" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-1">Sign in to your KMAN account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-input bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-input bg-background pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-input accent-primary" /> <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-primary font-medium hover:underline">Forgot password?</Link>
            </div>
            <KmanButton type="submit" className="w-full" size="lg">Sign In</KmanButton>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account? <Link to="/register" className="text-primary font-semibold hover:underline">Register →</Link>
          </p>

          {/* Demo Accounts */}
          <KmanCard goldBorder className="space-y-3">
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4 text-primary" />
              <h3 className="font-display font-bold text-sm">Demo Accounts</h3>
            </div>
            <p className="text-xs text-muted-foreground">Click to quick-login as any role:</p>
            <div className="grid grid-cols-2 gap-2">
              {demoList.map((d) => (
                <button
                  key={d.email}
                  onClick={() => quickLogin(d.email, d.pw)}
                  className="flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted hover:border-primary/30 transition-all duration-200 text-left"
                >
                  <div className={`h-7 w-7 rounded-full ${d.color} flex items-center justify-center text-[10px] font-bold text-card`}>
                    {d.label[0]}
                  </div>
                  {d.label}
                </button>
              ))}
            </div>
          </KmanCard>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
