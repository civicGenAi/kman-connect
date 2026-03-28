import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, demoAccounts, roleRouteMap } from "@/contexts/AuthContext";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanCard } from "@/components/kman/KmanCard";
import kmanLogo from "@/assets/kman-logo.png";
import { Eye, EyeOff } from "lucide-react";

const demoList = [
  { label: "Investor", email: "investor@kman.co", pw: "demo1234", color: "bg-blue-500" },
  { label: "Startup", email: "startup@kman.co", pw: "demo1234", color: "bg-emerald-500" },
  { label: "Mentor", email: "mentor@kman.co", pw: "demo1234", color: "bg-violet-500" },
  { label: "Admin", email: "admin@kman.co", pw: "admin1234", color: "bg-rose-500" },
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
      <div className="hidden lg:flex lg:w-1/2 bg-secondary grain-overlay relative items-center justify-center p-12">
        <div className="relative z-10 max-w-md">
          <img src={kmanLogo} alt="KMAN" className="h-16 w-auto brightness-0 invert mb-8" />
          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-4">
            Empowering East Africa's Next Generation of Entrepreneurs
          </h2>
          <p className="text-secondary-foreground/60 text-lg">
            "The best time to invest in Africa was 20 years ago. The second best time is now."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden mb-8">
            <img src={kmanLogo} alt="KMAN" className="h-12 w-auto mb-4" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-1">Sign in to your KMAN account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring pr-10"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-input" /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
            <KmanButton type="submit" className="w-full" size="lg">Sign In</KmanButton>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account? <Link to="/register" className="text-primary font-medium hover:underline">Register →</Link>
          </p>

          {/* Demo Accounts */}
          <KmanCard goldBorder className="space-y-3">
            <h3 className="font-display font-bold text-sm">🔑 Demo Accounts</h3>
            <p className="text-xs text-muted-foreground">Click to quick-login as any role:</p>
            <div className="grid grid-cols-2 gap-2">
              {demoList.map((d) => (
                <button
                  key={d.email}
                  onClick={() => quickLogin(d.email, d.pw)}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted transition-colors text-left"
                >
                  <div className={`h-6 w-6 rounded-full ${d.color} flex items-center justify-center text-[10px] font-bold text-card`}>
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
