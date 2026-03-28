import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-secondary/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-secondary-foreground/10" : "bg-transparent"
    )}>
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
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/5"
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
                <KmanButton variant="ghost" size="sm" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10">Log In</KmanButton>
              </Link>
              <Link to="/apply">
                <KmanButton variant="primary" size="sm">Get Started</KmanButton>
              </Link>
            </>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-full transition-colors text-secondary-foreground">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300",
        open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="bg-secondary/95 backdrop-blur-xl border-t border-secondary-foreground/10 p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-4 py-2.5 rounded-full text-sm font-semibold transition-all",
                location.pathname === link.path ? "text-primary bg-primary/10" : "text-secondary-foreground/70 hover:bg-secondary-foreground/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-secondary-foreground/10 my-2" />
          <div className="flex gap-2 pt-1">
            <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
              <KmanButton variant="ghost" size="sm" className="w-full text-secondary-foreground/80">Log In</KmanButton>
            </Link>
            <Link to="/apply" className="flex-1" onClick={() => setOpen(false)}>
              <KmanButton variant="primary" size="sm" className="w-full">Get Started</KmanButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
