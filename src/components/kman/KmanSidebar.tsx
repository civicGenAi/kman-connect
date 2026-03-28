import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import kmanLogo from "@/assets/kman-logo.png";
import {
  BarChart3, Search, Briefcase, Users, MessageSquare, FileText, Settings,
  User, Wallet, Brain, Calendar, BookOpen, Shield, CheckCircle, CreditCard,
  Menu, X, ChevronDown, LucideIcon
} from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

const navConfig: Record<string, NavItem[]> = {
  investor: [
    { label: "Dashboard", path: "/investor/dashboard", icon: BarChart3 },
    { label: "Deal Flow", path: "/investor/deals", icon: Search },
    { label: "My Portfolio", path: "/investor/portfolio", icon: Briefcase },
    { label: "Network", path: "/investor/network", icon: Users },
    { label: "Messages", path: "/investor/messages", icon: MessageSquare, badge: 2 },
    { label: "Reports", path: "/investor/reports", icon: FileText },
    { label: "Settings", path: "/investor/settings", icon: Settings },
  ],
  startup: [
    { label: "Dashboard", path: "/startup/dashboard", icon: BarChart3 },
    { label: "My Profile", path: "/startup/profile", icon: User },
    { label: "Investors", path: "/startup/investors", icon: Wallet },
    { label: "Deal Room", path: "/startup/deal-room", icon: Briefcase },
    { label: "Find Mentor", path: "/startup/mentors", icon: Brain },
    { label: "Messages", path: "/startup/messages", icon: MessageSquare },
    { label: "Settings", path: "/startup/settings", icon: Settings },
  ],
  mentor: [
    { label: "Dashboard", path: "/mentor/dashboard", icon: BarChart3 },
    { label: "My Profile", path: "/mentor/profile", icon: User },
    { label: "My Sessions", path: "/mentor/sessions", icon: Calendar },
    { label: "Mentees", path: "/mentor/mentees", icon: Users },
    { label: "Resources", path: "/mentor/resources", icon: BookOpen },
    { label: "Messages", path: "/mentor/messages", icon: MessageSquare },
    { label: "Settings", path: "/mentor/settings", icon: Settings },
  ],
  admin: [
    { label: "Overview", path: "/admin/dashboard", icon: BarChart3 },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Startups", path: "/admin/startups", icon: Briefcase },
    { label: "Investors", path: "/admin/investors", icon: Wallet },
    { label: "Mentors", path: "/admin/mentors", icon: Brain },
    { label: "Deals", path: "/admin/deals", icon: FileText },
    { label: "KYC Queue", path: "/admin/kyc", icon: CheckCircle },
    { label: "Payments", path: "/admin/payments", icon: CreditCard },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ],
};

export const KmanSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!user) return null;
  const items = navConfig[user.role] || [];

  const sidebar = (
    <aside className={cn(
      "flex h-screen w-64 flex-col bg-secondary text-secondary-foreground",
      "fixed left-0 top-0 z-40"
    )}>
      <div className="flex items-center gap-2 px-5 py-5 border-b border-sidebar-border">
        <img src={kmanLogo} alt="KMAN" className="h-8 w-auto brightness-0 invert" />
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-secondary-foreground/70 hover:bg-primary/20 hover:text-secondary-foreground"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
              {item.badge && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {user.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium truncate">{user.name}</p>
            <p className="text-xs text-secondary-foreground/60 capitalize">{user.role}</p>
          </div>
          <button onClick={() => { logout(); navigate("/"); }} className="text-secondary-foreground/60 hover:text-secondary-foreground">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground md:hidden shadow-lg"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-30 bg-foreground/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar - desktop always visible, mobile conditional */}
      <div className={cn("hidden md:block", open && "!block")}>
        {sidebar}
      </div>
    </>
  );
};
