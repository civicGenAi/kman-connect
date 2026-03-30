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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-[2] bg-[rgba(5,8,20,0.97)] text-white border-t border-white/[0.06]">
      {/* Newsletter CTA */}
      <div className="border-b border-white/[0.06]">
        <div className="container py-10 md:py-12 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold text-white">Stay in the Loop</h3>
              <p className="text-sm text-white/40 mt-1 font-light">Get the latest on East African startups, investment opportunities, and KMAN updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-72 rounded-full bg-white/[0.06] border border-white/[0.08] px-5 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="gradient-gold rounded-full px-5 sm:px-6 py-2.5 text-sm font-semibold text-secondary flex items-center gap-2 hover:brightness-110 transition-all whitespace-nowrap">
                Subscribe <ArrowRight className="h-4 w-4 hidden sm:inline" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16 px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link to="/" className="inline-block">
              <img src={kmanLogo} alt="KMAN" className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-sm text-white/35 max-w-sm leading-relaxed font-light">
              Kilimanjaro Angel & Mentor Network — connecting East African startups with angel investors and world-class mentors to fuel the continent's innovation engine.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/35">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Arusha, Tanzania — Serving East Africa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/35">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>hello@kman.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/35">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+255 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-bold mb-5 text-[11px] uppercase tracking-[0.15em] text-white/50">Platform</h4>
            <div className="space-y-3">
              {platformLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-white/35 hover:text-primary transition-colors duration-200 font-light">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-5 text-[11px] uppercase tracking-[0.15em] text-white/50">Company</h4>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-white/35 hover:text-primary transition-colors duration-200 font-light">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold mb-5 text-[11px] uppercase tracking-[0.15em] text-white/50">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-white/35 hover:text-primary transition-colors duration-200 font-light">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="border-t border-white/[0.06]">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-6 gap-4 px-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-4 w-4 text-primary" />
            <p className="text-xs text-white/25 font-light">© {currentYear} Kilimanjaro Angel & Mentor Network. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/30 hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/25 font-light">Built for East Africa 🏔️</p>
        </div>
      </div>
    </footer>
  );
};
