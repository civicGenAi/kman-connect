import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { StatCard } from "@/components/kman/StatCard";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { StartupCard } from "@/components/kman/StartupCard";
import { ActivityFeed } from "@/components/kman/ActivityFeed";
import { DataTable, StatusBadge, Column } from "@/components/kman/DataTable";
import { startups } from "@/data/mockData";
import { DollarSign, TrendingUp, Briefcase, Target, FileText, Handshake, CheckCircle, UserPlus } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const portfolioData = [
  { month: "Jan", value: 80000 }, { month: "Feb", value: 82000 }, { month: "Mar", value: 85000 },
  { month: "Apr", value: 89000 }, { month: "May", value: 94000 }, { month: "Jun", value: 98000 },
  { month: "Jul", value: 103000 }, { month: "Aug", value: 108000 }, { month: "Sep", value: 112000 },
  { month: "Oct", value: 118000 }, { month: "Nov", value: 123000 }, { month: "Dec", value: 127500 },
];

const sectorData = [
  { name: "AgriTech", value: 35 }, { name: "FinTech", value: 28 },
  { name: "EdTech", value: 20 }, { name: "HealthTech", value: 17 },
];
const COLORS = ["hsl(40,100%,49%)", "hsl(207,43%,19%)", "hsl(200,45%,20%)", "hsl(215,16%,47%)"];

const pipeline = [
  { startup: "TanzaFarm", sector: "AgriTech", stage: "Seed", amount: "$25,000", status: "Active" },
  { startup: "SwahiliPay", sector: "FinTech", stage: "Pre-seed", amount: "$50,000", status: "Under Review" },
  { startup: "NjiaLearn", sector: "EdTech", stage: "Seed", amount: "$15,000", status: "Pending KYC" },
  { startup: "AfyaLink", sector: "HealthTech", stage: "Seed", amount: "$30,000", status: "Active" },
  { startup: "KiliFood", sector: "FoodTech", stage: "Seed", amount: "$7,500", status: "Closed" },
  { startup: "SolarJua", sector: "CleanTech", stage: "Seed", amount: "$20,000", status: "Under Review" },
];

const pipelineCols: Column<typeof pipeline[0]>[] = [
  { key: "startup", label: "Startup" },
  { key: "sector", label: "Sector" },
  { key: "stage", label: "Stage" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

const activityItems = [
  { icon: <FileText className="h-4 w-4" />, title: "Deal signed with TanzaFarm", time: "2 hours ago" },
  { icon: <Handshake className="h-4 w-4" />, title: "Mentor session completed", time: "1 day ago" },
  { icon: <UserPlus className="h-4 w-4" />, title: "New startup match: SolarJua", time: "2 days ago" },
  { icon: <CheckCircle className="h-4 w-4" />, title: "KYC documents approved", time: "3 days ago" },
];

const InvestorDashboard = () => (
  <DashboardLayout>
    <div className="space-y-6">
      {/* Welcome */}
      <div className="rounded-xl gradient-gold p-5">
        <h2 className="text-xl font-display font-bold text-secondary">Welcome back, James Makonda 👋</h2>
        <p className="text-secondary/70 text-sm mt-1">Here's your portfolio overview for today</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} label="Total Invested" value={127500} prefix="$" trend={{ value: 12, positive: true }} />
        <StatCard icon={TrendingUp} label="Active Deals" value={8} />
        <StatCard icon={Briefcase} label="Portfolio Companies" value={5} />
        <StatCard icon={Target} label="Avg. Deal Size" value={25500} prefix="$" />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <KmanCard className="lg:col-span-2">
          <h3 className="font-display font-bold mb-4">Portfolio Performance</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Value"]} />
              <Line type="monotone" dataKey="value" stroke="hsl(40,100%,49%)" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </KmanCard>

        <KmanCard>
          <h3 className="font-display font-bold mb-4">Deal Flow by Sector</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={sectorData} cx="50%" cy="45%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                {sectorData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </KmanCard>
      </div>

      {/* Recommended + Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="font-display font-bold mb-4">Recommended Startups</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {startups.slice(0, 3).map((s) => (
              <KmanCard key={s.id} className="p-4">
                <div className={`h-10 w-10 rounded-lg ${s.color} flex items-center justify-center text-xs font-bold text-card mb-3`}>{s.initials}</div>
                <p className="font-display font-bold text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.sector}</p>
                <KmanBadge variant="gold" className="mt-2">94% match</KmanBadge>
              </KmanCard>
            ))}
          </div>
        </div>
        <KmanCard>
          <h3 className="font-display font-bold mb-4">Recent Activity</h3>
          <ActivityFeed items={activityItems} />
        </KmanCard>
      </div>

      {/* Pipeline */}
      <div>
        <h3 className="font-display font-bold mb-4">Investment Pipeline</h3>
        <DataTable columns={pipelineCols} data={pipeline} />
      </div>
    </div>
  </DashboardLayout>
);

export default InvestorDashboard;
