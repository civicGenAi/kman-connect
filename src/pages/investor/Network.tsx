import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { Search, MessageSquare, UserPlus } from "lucide-react";
import { useState } from "react";

const connections = [
  { name: "Fatuma Nkosi", role: "Investor", location: "Nairobi", initials: "FN", color: "bg-violet-500", mutual: 5, connected: true },
  { name: "Robert Ochieng", role: "Investor", location: "Kampala", initials: "RO", color: "bg-blue-500", mutual: 3, connected: true },
  { name: "Dr. Amina Rashidi", role: "Mentor", location: "Dar es Salaam", initials: "AR", color: "bg-primary", mutual: 8, connected: true },
  { name: "Samuel Kiprotich", role: "Mentor", location: "Nairobi", initials: "SK", color: "bg-emerald-500", mutual: 2, connected: true },
  { name: "Grace Mwangi", role: "Mentor", location: "Nairobi", initials: "GM", color: "bg-rose-500", mutual: 4, connected: false },
  { name: "Hassan Juma", role: "Mentor", location: "Arusha", initials: "HJ", color: "bg-indigo-500", mutual: 1, connected: false },
  { name: "Peter Waweru", role: "Mentor", location: "Kigali", initials: "PW", color: "bg-amber-600", mutual: 6, connected: false },
  { name: "Esther Okello", role: "Mentor", location: "Kampala", initials: "EO", color: "bg-teal-500", mutual: 3, connected: false },
];

const Network = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "connected">("all");

  const filtered = connections.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (tab === "all" || c.connected)
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-display font-bold">Network</h2>
          <p className="text-muted-foreground text-sm">Connect with investors, mentors, and founders</p>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search network..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="flex rounded-lg border border-input overflow-hidden">
            <button onClick={() => setTab("all")} className={`px-4 py-2 text-sm font-medium ${tab === "all" ? "bg-primary text-primary-foreground" : "bg-background"}`}>All</button>
            <button onClick={() => setTab("connected")} className={`px-4 py-2 text-sm font-medium ${tab === "connected" ? "bg-primary text-primary-foreground" : "bg-background"}`}>Connected</button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(c => (
            <KmanCard key={c.name} className="flex items-start gap-4">
              <div className={`${c.color} h-12 w-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>{c.initials}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-sm">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <KmanBadge variant={c.role === "Investor" ? "gold" : "green"}>{c.role}</KmanBadge>
                  <span className="text-xs text-muted-foreground">{c.mutual} mutual</span>
                </div>
                <div className="flex gap-2 mt-3">
                  {c.connected ? (
                    <KmanButton variant="secondary" size="sm"><MessageSquare className="h-3 w-3" /> Message</KmanButton>
                  ) : (
                    <KmanButton variant="primary" size="sm"><UserPlus className="h-3 w-3" /> Connect</KmanButton>
                  )}
                </div>
              </div>
            </KmanCard>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Network;
