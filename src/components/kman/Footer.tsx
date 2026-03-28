import { Link } from "react-router-dom";
import kmanLogo from "@/assets/kman-logo.png";
import { Linkedin, Twitter, Instagram, MessageCircle, Mail, MapPin, Phone, ArrowRight, Mountain } from "lucide-react";
import { useState } from "react";

const platformLinks = [
  { label: "Startup Directory", path: "/startups" },
  { label: "Mentor Marketplace", path: "/mentors" },
  { label: "Investor Network", path: "/investors" },
  { label: "Apply for Funding", path: "/apply" },
  { label: "Deal Room", path: "/login" },
];

const companyLinks = [
  { label: "About KMAN", path: "/about" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Blog & Insights", path: "#" },
  { label: "Press Kit", path: "#" },
  { label: "Contact Us", path: "#" },
];

const resourceLinks = [
  { label: "Help Center", path: "#" },
  { label: "API Documentation", path: "#" },
  { label: "Privacy Policy", path: "#" },
  { label: "Terms of Service", path: "#" },
  { label: "Cookie Policy", path: "#" },
];

const socialLinks = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "X / Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter CTA */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold">Stay in the Loop</h3>
              <p className="text-sm text-secondary-foreground/60 mt-1">Get the latest on East African startups, investment opportunities, and KMAN updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-72 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/15 px-5 py-2.5 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="gradient-gold rounded-full px-6 py-2.5 text-sm font-semibold text-secondary flex items-center gap-2 hover:brightness-110 transition-all">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img src={kmanLogo} alt="KMAN" className="h-10 w-auto brightness-0 invert mb-4" />
            </Link>
            <p className="text-sm text-secondary-foreground/60 max-w-sm leading-relaxed">
              Kilimanjaro Angel & Mentor Network — connecting East African startups with angel investors and world-class mentors to fuel the continent's innovation engine.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Arusha, Tanzania — Serving East Africa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>hello@kman.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+255 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/80">Platform</h4>
            <div className="space-y-3">
              {platformLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/80">Company</h4>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/80">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-4 w-4 text-primary" />
            <p className="text-xs text-secondary-foreground/50">© 2025 Kilimanjaro Angel & Mentor Network. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-secondary-foreground/50 hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-secondary-foreground/50">Built for East Africa 🏔️</p>
        </div>
      </div>
    </footer>
  );
};
