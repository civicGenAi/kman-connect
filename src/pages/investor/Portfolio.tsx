import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { StatCard } from "@/components/kman/StatCard";
import { DataTable, Column } from "@/components/kman/DataTable";
import { Briefcase, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const portfolioData = [
  { startup: "TanzaFarm", sector: "AgriTech", invested: "$25,000", date: "Mar 2024", currentValue: "$32,500", roi: "+30%", status: "Active" },
  { startup: "SwahiliPay", sector: "FinTech", invested: "$40,000", date: "Jan 2024", currentValue: "$52,000", roi: "+30%", status: "Active" },
  { startup: "KiliFood", sector: "FoodTech", invested: "$15,000", date: "Jun 2024", currentValue: "$18,750", roi: "+25%", status: "Active" },
  { startup: "AfyaLink", sector: "HealthTech", invested: "$30,000", date: "Sep 2023", currentValue: "$27,000", roi: "-10%", status: "Active" },
  { startup: "BongoCash", sector: "FinTech", invested: "$17,500", date: "Nov 2024", currentValue: "$17,500", roi: "0%", status: "New" },
];

const cols: Column<typeof portfolioData[0]>[] = [
  { key: "startup", label: "Startup" },
  { key: "sector", label: "Sector" },
  { key: "invested", label: "Invested" },
  { key: "date", label: "Date" },
  { key: "currentValue", label: "Current Value" },
  { key: "roi", label: "ROI", render: r => (
    <span className={r.roi.startsWith("+") ? "text-green-600 font-medium" : r.roi.startsWith("-") ? "text-red-500 font-medium" : "text-muted-foreground"}>{r.roi}</span>
  )},
  { key: "status", label: "Status", render: r => <KmanBadge variant={r.status === "Active" ? "green" : "gold"}>{r.status}</KmanBadge> },
];

const growthData = [
  { month: "Jul", value: 80000 }, { month: "Aug", value: 85000 }, { month: "Sep", value: 92000 },
  { month: "Oct", value: 98000 }, { month: "Nov", value: 110000 }, { month: "Dec", value: 127500 },
];

const sectorPie = [
  { name: "AgriTech", value: 25000 }, { name: "FinTech", value: 57500 }, { name: "FoodTech", value: 15000 },
  { name: "HealthTech", value: 30000 },
];
const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(160,60%,45%)", "hsl(350,80%,55%)"];

const Portfolio = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">My Portfolio</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} label="Total Invested" value={127500} prefix="$" />
        <StatCard icon={TrendingUp} label="Current Value" value={147750} prefix="$" />
        <StatCard icon={Briefcase} label="Companies" value={5} />
        <StatCard icon={BarChart3} label="Avg ROI" value={15.9} suffix="%" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <KmanCard className="lg:col-span-2">
          <h3 className="font-display font-bold mb-4">Portfolio Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={v => `$${v / 1000}K`} />
              <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Value"]} />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </KmanCard>
        <KmanCard>
          <h3 className="font-display font-bold mb-4">By Sector</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={sectorPie} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={4}>
                {sectorPie.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2">
            {sectorPie.map((s, i) => (
              <div key={s.name} className="flex items-center gap-1.5 text-xs">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                {s.name}
              </div>
            ))}
          </div>
        </KmanCard>
      </div>

      <div>
        <h3 className="font-display font-bold mb-4">Portfolio Companies</h3>
        <DataTable columns={cols} data={portfolioData} />
      </div>
    </div>
  </DashboardLayout>
);

export default Portfolio;
