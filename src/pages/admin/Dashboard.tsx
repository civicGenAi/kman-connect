import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { StatCard } from "@/components/kman/StatCard";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { DataTable, Column } from "@/components/kman/DataTable";
import { ActivityFeed } from "@/components/kman/ActivityFeed";
import { Users, Building2, Wallet, Brain, Briefcase, DollarSign, Check, X, FileText, UserPlus, ShieldCheck } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const userGrowth = [
  { month: "Jan", investors: 20, startups: 30, mentors: 8 },
  { month: "Feb", investors: 22, startups: 34, mentors: 9 },
  { month: "Mar", investors: 25, startups: 38, mentors: 10 },
  { month: "Apr", investors: 28, startups: 42, mentors: 11 },
  { month: "May", investors: 30, startups: 46, mentors: 12 },
  { month: "Jun", investors: 32, startups: 50, mentors: 13 },
  { month: "Jul", investors: 34, startups: 53, mentors: 14 },
  { month: "Aug", investors: 35, startups: 56, mentors: 15 },
  { month: "Sep", investors: 37, startups: 59, mentors: 16 },
  { month: "Oct", investors: 39, startups: 62, mentors: 17 },
  { month: "Nov", investors: 40, startups: 65, mentors: 17 },
  { month: "Dec", investors: 42, startups: 67, mentors: 18 },
];

const dealVolume = [
  { month: "Jul", deals: 3, value: 85 }, { month: "Aug", deals: 4, value: 120 },
  { month: "Sep", deals: 5, value: 145 }, { month: "Oct", deals: 3, value: 95 },
  { month: "Nov", deals: 6, value: 180 }, { month: "Dec", deals: 4, value: 110 },
];

const kycQueue = [
  { name: "John Mbeki", role: "Investor", submitted: "Dec 14", docs: 3 },
  { name: "AgroTech Ltd", role: "Startup", submitted: "Dec 13", docs: 5 },
  { name: "Mary Odhiambo", role: "Mentor", submitted: "Dec 12", docs: 2 },
  { name: "KenyaPay Inc", role: "Startup", submitted: "Dec 11", docs: 4 },
  { name: "Peter Karanja", role: "Investor", submitted: "Dec 10", docs: 3 },
];

const kycCols: Column<typeof kycQueue[0]>[] = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "submitted", label: "Submitted" },
  { key: "docs", label: "Documents", render: (r) => <span className="font-medium">{r.docs} files</span> },
  { key: "actions", label: "Actions", render: () => (
    <div className="flex gap-2">
      <KmanButton variant="primary" size="sm"><Check className="h-3 w-3" /> Approve</KmanButton>
      <KmanButton variant="danger" size="sm"><X className="h-3 w-3" /> Reject</KmanButton>
    </div>
  )},
];

const activityItems = [
  { icon: <UserPlus className="h-4 w-4" />, title: "New investor registered: Peter Karanja", time: "1 hour ago" },
  { icon: <ShieldCheck className="h-4 w-4" />, title: "KYC approved for AgroTech Ltd", time: "3 hours ago" },
  { icon: <FileText className="h-4 w-4" />, title: "New deal created: SwahiliPay Series A", time: "5 hours ago" },
  { icon: <Users className="h-4 w-4" />, title: "Mentor session completed: Dr. Amina + TanzaFarm", time: "1 day ago" },
];

const AdminDashboard = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Platform Overview</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={Users} label="Total Users" value={312} trend={{ value: 8, positive: true }} />
        <StatCard icon={Building2} label="Startups" value={67} />
        <StatCard icon={Wallet} label="Investors" value={42} />
        <StatCard icon={Brain} label="Mentors" value={18} />
        <StatCard icon={Briefcase} label="Deals Active" value={24} />
        <StatCard icon={DollarSign} label="Revenue" value={48200} prefix="$" trend={{ value: 15, positive: true }} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <KmanCard>
          <h3 className="font-display font-bold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investors" stroke="hsl(40,100%,49%)" strokeWidth={2} dot={false} name="Investors" />
              <Line type="monotone" dataKey="startups" stroke="hsl(207,43%,19%)" strokeWidth={2} dot={false} name="Startups" />
              <Line type="monotone" dataKey="mentors" stroke="hsl(200,45%,20%)" strokeWidth={2} dot={false} name="Mentors" />
            </LineChart>
          </ResponsiveContainer>
        </KmanCard>

        <KmanCard>
          <h3 className="font-display font-bold mb-4">Deal Volume by Month</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dealVolume}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
              <Tooltip />
              <Bar dataKey="deals" fill="hsl(40,100%,49%)" radius={[4, 4, 0, 0]} name="Deals" />
            </BarChart>
          </ResponsiveContainer>
        </KmanCard>
      </div>

      <div>
        <h3 className="font-display font-bold mb-4">KYC Approval Queue</h3>
        <DataTable columns={kycCols} data={kycQueue} />
      </div>

      <KmanCard>
        <h3 className="font-display font-bold mb-4">Recent Platform Activity</h3>
        <ActivityFeed items={activityItems} />
      </KmanCard>
    </div>
  </DashboardLayout>
);

export default AdminDashboard;
