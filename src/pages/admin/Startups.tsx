import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { DataTable, Column } from "@/components/kman/DataTable";
import { startups } from "@/data/mockData";

const data = startups.map(s => ({
  name: s.name,
  sector: s.sector,
  stage: s.stage,
  goal: `$${(s.fundingGoal / 1000).toFixed(0)}K`,
  raised: `$${(s.fundingRaised / 1000).toFixed(0)}K`,
  pct: Math.round((s.fundingRaised / s.fundingGoal) * 100),
  status: s.fundingRaised / s.fundingGoal > 0.7 ? "On Track" : s.fundingRaised / s.fundingGoal > 0.3 ? "Active" : "Early",
}));

const cols: Column<typeof data[0]>[] = [
  { key: "name", label: "Startup" },
  { key: "sector", label: "Sector" },
  { key: "stage", label: "Stage" },
  { key: "goal", label: "Goal" },
  { key: "raised", label: "Raised" },
  { key: "pct", label: "Progress", render: r => (
    <div className="flex items-center gap-2">
      <div className="h-2 w-20 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${r.pct}%` }} /></div>
      <span className="text-xs">{r.pct}%</span>
    </div>
  )},
  { key: "status", label: "Status", render: r => <KmanBadge variant={r.status === "On Track" ? "green" : r.status === "Active" ? "gold" : "red"}>{r.status}</KmanBadge> },
];

const AdminStartups = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Startups</h2>
      <DataTable columns={cols} data={data} />
    </div>
  </DashboardLayout>
);

export default AdminStartups;
