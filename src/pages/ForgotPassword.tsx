import { useState } from "react";
import { Link } from "react-router-dom";
import { KmanButton } from "@/components/kman/KmanButton";
import kmanLogo from "@/assets/kman-logo.png";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary grain-overlay relative items-center justify-center p-12">
        <div className="relative z-10 max-w-md">
          <img src={kmanLogo} alt="KMAN" className="h-16 w-auto brightness-0 invert mb-8" />
          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-4">
            Secure Your Account
          </h2>
          <p className="text-secondary-foreground/60 text-lg">
            We'll send you a reset link so you can get back to building the future of East African entrepreneurship.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden mb-8">
            <img src={kmanLogo} alt="KMAN" className="h-12 w-auto mb-4" />
          </div>

          <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to login
          </Link>

          {!submitted ? (
            <>
              <div>
                <h1 className="text-2xl font-display font-bold">Forgot Password?</h1>
                <p className="text-muted-foreground mt-2">Enter your email and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-full border border-input bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <KmanButton type="submit" className="w-full" size="lg">
                  Send Reset Link
                </KmanButton>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-gold mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-xl font-display font-bold mb-2">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to <strong className="text-foreground">{email}</strong>. Check your inbox and follow the instructions.
              </p>
              <p className="text-sm text-muted-foreground">
                Didn't receive it?{" "}
                <button onClick={() => setSubmitted(false)} className="text-primary font-medium hover:underline">
                  Try again
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
