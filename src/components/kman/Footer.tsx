import { Link } from "react-router-dom";
import kmanLogo from "@/assets/kman-logo.png";
import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-16">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <img src={kmanLogo} alt="KMAN" className="h-10 w-auto brightness-0 invert mb-4" />
          <p className="text-sm text-secondary-foreground/70">
            Connecting East African startups with angel investors and mentors across the region.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Platform</h4>
          <div className="space-y-2">
            <Link to="/startups" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Startups</Link>
            <Link to="/mentors" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Mentors</Link>
            <Link to="/investors" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Investors</Link>
            <Link to="/apply" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Apply</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Company</h4>
          <div className="space-y-2">
            <Link to="/about" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">About KMAN</Link>
            <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Careers</a>
            <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Blog</a>
            <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 gap-2">
        <p className="text-xs text-secondary-foreground/50">© 2025 Kilimanjaro Angel & Mentor Network. All rights reserved.</p>
        <p className="text-xs text-secondary-foreground/50">Built for East Africa 🏔️</p>
      </div>
    </div>
  </footer>
);
