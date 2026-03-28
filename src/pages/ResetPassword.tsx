import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";
import kmanLogo from "@/assets/kman-logo.png";
import { ArrowLeft, Eye, EyeOff, Lock, CheckCircle, XCircle } from "lucide-react";

const requirements = [
  { label: "At least 8 characters", check: (pw: string) => pw.length >= 8 },
  { label: "One uppercase letter", check: (pw: string) => /[A-Z]/.test(pw) },
  { label: "One number", check: (pw: string) => /[0-9]/.test(pw) },
  { label: "One special character", check: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
];

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const allPass = requirements.every((r) => r.check(password));
  const match = password === confirm && confirm.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (allPass && match) setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-md text-center space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gradient-gold">
            <CheckCircle className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-2xl font-display font-bold">Password Reset!</h1>
          <p className="text-muted-foreground">Your password has been updated successfully. You can now log in with your new password.</p>
          <Link to="/login">
            <KmanButton variant="primary" size="lg">Go to Login</KmanButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-secondary grain-overlay relative items-center justify-center p-12">
        <div className="relative z-10 max-w-md">
          <img src={kmanLogo} alt="KMAN" className="h-16 w-auto brightness-0 invert mb-8" />
          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-4">
            Create a New Password
          </h2>
          <p className="text-secondary-foreground/60 text-lg">
            Choose a strong password to keep your account secure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden mb-8">
            <img src={kmanLogo} alt="KMAN" className="h-12 w-auto mb-4" />
          </div>

          <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to login
          </Link>

          <div>
            <h1 className="text-2xl font-display font-bold">Reset Password</h1>
            <p className="text-muted-foreground mt-2">Enter your new password below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-input bg-background pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Strength indicators */}
            <div className="space-y-1.5">
              {requirements.map((r) => (
                <div key={r.label} className="flex items-center gap-2 text-xs">
                  {r.check(password)
                    ? <CheckCircle className="h-3.5 w-3.5 text-success" />
                    : <XCircle className="h-3.5 w-3.5 text-muted-foreground/40" />
                  }
                  <span className={r.check(password) ? "text-success" : "text-muted-foreground/60"}>{r.label}</span>
                </div>
              ))}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-full border border-input bg-background pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {confirm && !match && <p className="text-xs text-destructive mt-1">Passwords don't match</p>}
            </div>

            <KmanButton type="submit" className="w-full" size="lg" disabled={!allPass || !match}>
              Update Password
            </KmanButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
