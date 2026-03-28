import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Bell, Search, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, string> = {
  "/investor/dashboard": "Dashboard",
  "/investor/deals": "Deal Flow",
  "/investor/portfolio": "My Portfolio",
  "/investor/messages": "Messages",
  "/investor/settings": "Settings",
  "/startup/dashboard": "Dashboard",
  "/startup/profile": "My Profile",
  "/startup/investors": "Investors",
  "/startup/deal-room": "Deal Room",
  "/startup/messages": "Messages",
  "/startup/settings": "Settings",
  "/mentor/dashboard": "Dashboard",
  "/mentor/sessions": "My Sessions",
  "/mentor/mentees": "Mentees",
  "/mentor/messages": "Messages",
  "/mentor/settings": "Settings",
  "/admin/dashboard": "Overview",
  "/admin/users": "Users",
  "/admin/kyc": "KYC Queue",
};

const mockNotifications = [
  { id: 1, text: "TanzaFarm sent a new pitch deck", time: "2 min ago" },
  { id: 2, text: "Session reminder with Dr. Amina at 2pm", time: "1 hour ago" },
  { id: 3, text: "SwahiliPay reached 72% funding goal", time: "3 hours ago" },
];

export const KmanNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  if (!user) return null;

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-card px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-display font-bold md:ml-0 ml-12">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors">
          <Search className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <Bell className={cn("h-4 w-4 text-muted-foreground", showNotifs && "animate-bell-wobble")} />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full gradient-gold text-[9px] font-bold text-secondary">
              3
            </span>
          </button>
          {showNotifs && (
            <div className="absolute right-0 top-12 w-80 rounded-xl border bg-card shadow-lg p-2 space-y-1">
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Notifications</p>
              {mockNotifications.map((n) => (
                <div key={n.id} className="rounded-lg px-3 py-2 hover:bg-muted transition-colors cursor-pointer">
                  <p className="text-sm">{n.text}</p>
                  <p className="text-xs text-muted-foreground">{n.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-gold text-xs font-bold text-secondary">
              {user.avatar}
            </div>
            <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </button>
          {showProfile && (
            <div className="absolute right-0 top-12 w-48 rounded-xl border bg-card shadow-lg p-1">
              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors">
                <User className="h-4 w-4" /> My Profile
              </button>
              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <hr className="my-1 border-border" />
              <button
                onClick={() => { logout(); navigate("/"); }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
