import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { StatCard } from "@/components/kman/StatCard";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { DataTable, StatusBadge, Column } from "@/components/kman/DataTable";
import { ActivityFeed } from "@/components/kman/ActivityFeed";
import { Target, DollarSign, Eye, Brain, Share2, Edit, Star, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const viewsData = [
  { week: "W1", views: 18 }, { week: "W2", views: 24 }, { week: "W3", views: 32 },
  { week: "W4", views: 28 }, { week: "W5", views: 41 }, { week: "W6", views: 35 },
  { week: "W7", views: 38 }, { week: "W8", views: 44 },
];

const investorPipeline = [
  { name: "James Makonda", amount: "$25,000", stage: "Due Diligence", lastContact: "2 days ago", status: "In Conversation" },
  { name: "Fatuma Nkosi", amount: "$15,000", stage: "Initial Interest", lastContact: "1 week ago", status: "Pending KYC" },
  { name: "Robert Ochieng", amount: "$50,000", stage: "Term Sheet", lastContact: "Today", status: "Committed" },
  { name: "Sarah Kibona", amount: "$10,000", stage: "Intro Call", lastContact: "3 days ago", status: "In Conversation" },
  { name: "David Mwamba", amount: "$20,000", stage: "Document Review", lastContact: "5 days ago", status: "Under Review" },
];

const pipelineCols: Column<typeof investorPipeline[0]>[] = [
  { key: "name", label: "Investor Name" },
  { key: "amount", label: "Amount" },
  { key: "stage", label: "Stage" },
  { key: "lastContact", label: "Last Contact" },
  { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

const mentorSessions = [
  { mentor: "Dr. Amina Rashidi", topic: "Financial Modeling", date: "Dec 15, 2024", rating: 5 },
  { mentor: "Samuel Kiprotich", topic: "Go-to-Market Strategy", date: "Dec 8, 2024", rating: 4 },
  { mentor: "Grace Mwangi", topic: "Brand Positioning", date: "Nov 28, 2024", rating: 5 },
];

const healthScores = [
  { label: "Profile Completeness", value: 95 },
  { label: "Pitch Deck", value: 100, check: true },
  { label: "KYC Documents", value: 70 },
  { label: "Response Rate", value: 88 },
];

const StartupDashboard = () => {
  const raised = 67500;
  const goal = 150000;
  const pct = Math.round((raised / goal) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
          <h2 className="text-xl font-display font-bold text-foreground">Good morning, TanzaFarm 🌱</h2>
          <p className="text-muted-foreground text-sm mt-1">Your funding campaign is 45% complete</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Target} label="Funding Goal" value={150000} prefix="$" />
          <StatCard icon={DollarSign} label="Raised So Far" value={67500} prefix="$" trend={{ value: 45, positive: true }} />
          <StatCard icon={Eye} label="Investor Views" value={234} suffix=" this month" />
          <StatCard icon={Brain} label="Mentor Sessions" value={6} suffix=" completed" />
        </div>

        {/* Funding Progress + Chart */}
        <div className="grid gap-6 lg:grid-cols-2">
          <KmanCard className="flex flex-col items-center text-center">
            <h3 className="font-display font-bold mb-6 self-start">Funding Progress</h3>
            <div className="relative">
              <svg width="180" height="180" className="transform -rotate-90">
                <circle cx="90" cy="90" r="75" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                <circle cx="90" cy="90" r="75" fill="none" stroke="url(#goldG)" strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 75} strokeDashoffset={2 * Math.PI * 75 * (1 - pct / 100)}
                  strokeLinecap="round" className="transition-all duration-1000" />
                <defs><linearGradient id="goldG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(40,100%,49%)" /><stop offset="100%" stopColor="hsl(38,88%,43%)" />
                </linearGradient></defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-display font-bold">{pct}%</span>
                <span className="text-xs text-muted-foreground">funded</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium">${raised.toLocaleString()} raised of ${goal.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Campaign ends in 47 days</p>
            <div className="flex gap-3 mt-4">
              <KmanButton variant="primary" size="sm"><Share2 className="h-4 w-4" /> Share Profile</KmanButton>
              <KmanButton variant="ghost" size="sm"><Edit className="h-4 w-4" /> Edit Pitch</KmanButton>
            </div>
          </KmanCard>

          <KmanCard>
            <h3 className="font-display font-bold mb-4">Investor Profile Views</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
                <Tooltip />
                <Bar dataKey="views" fill="hsl(40,100%,49%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </KmanCard>
        </div>

        {/* Investor Pipeline */}
        <div>
          <h3 className="font-display font-bold mb-4">Investor Pipeline</h3>
          <DataTable columns={pipelineCols} data={investorPipeline} />
        </div>

        {/* Mentor Sessions + Health Score */}
        <div className="grid gap-6 lg:grid-cols-2">
          <KmanCard>
            <h3 className="font-display font-bold mb-4">Recent Mentor Sessions</h3>
            <div className="space-y-3">
              {mentorSessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium text-sm">{s.mentor}</p>
                    <p className="text-xs text-muted-foreground">{s.topic} • {s.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: s.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-primary text-primary" />)}
                    </div>
                    <KmanButton variant="ghost" size="sm">Book Again</KmanButton>
                  </div>
                </div>
              ))}
            </div>
          </KmanCard>

          <KmanCard>
            <h3 className="font-display font-bold mb-2">Startup Health Score</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-display font-bold text-primary">78</span>
              <span className="text-sm text-muted-foreground">/100 — <KmanBadge variant="green">Strong</KmanBadge></span>
            </div>
            <div className="space-y-3">
              {healthScores.map((h) => (
                <div key={h.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{h.label}</span>
                    <span className="font-medium">{h.check ? "✓" : `${h.value}%`}</span>
                  </div>
                  {!h.check && (
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full gradient-gold" style={{ width: `${h.value}%` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </KmanCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StartupDashboard;
