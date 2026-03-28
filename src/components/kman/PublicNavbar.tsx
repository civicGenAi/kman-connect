import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import kmanLogo from "@/assets/kman-logo.png";
import { KmanButton } from "./KmanButton";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Startups", path: "/startups" },
  { label: "Mentors", path: "/mentors" },
  { label: "Investors", path: "/investors" },
];

export const PublicNavbar = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={kmanLogo} alt="KMAN" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <Link to={`/${user?.role}/dashboard`}>
              <KmanButton variant="primary" size="sm">Dashboard →</KmanButton>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <KmanButton variant="ghost" size="sm">Log In</KmanButton>
              </Link>
              <Link to="/apply">
                <KmanButton variant="primary" size="sm">Get Started</KmanButton>
              </Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-card p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-border" />
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
              <KmanButton variant="ghost" size="sm" className="w-full">Log In</KmanButton>
            </Link>
            <Link to="/apply" className="flex-1" onClick={() => setOpen(false)}>
              <KmanButton variant="primary" size="sm" className="w-full">Get Started</KmanButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
