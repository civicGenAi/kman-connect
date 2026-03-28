import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { DataTable, Column } from "@/components/kman/DataTable";
import { StatCard } from "@/components/kman/StatCard";
import { Eye, Users, MessageSquare, Handshake } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const viewsData = [
  { week: "W1", views: 28 }, { week: "W2", views: 35 }, { week: "W3", views: 42 },
  { week: "W4", views: 31 }, { week: "W5", views: 55 }, { week: "W6", views: 48 },
  { week: "W7", views: 62 }, { week: "W8", views: 58 },
];

const pipeline = [
  { investor: "James Makonda", amount: "$25,000", stage: "Committed", lastContact: "Dec 15", status: "Committed" },
  { investor: "Fatuma Nkosi", amount: "$20,000", stage: "In Conversation", lastContact: "Dec 12", status: "In Conversation" },
  { investor: "Robert Ochieng", amount: "$15,000", stage: "KYC Pending", lastContact: "Dec 8", status: "KYC Pending" },
  { investor: "Angel Fund EAC", amount: "$50,000", stage: "Interest Shown", lastContact: "Dec 5", status: "Interest Shown" },
  { investor: "Kilimanjaro VC", amount: "$30,000", stage: "In Conversation", lastContact: "Dec 1", status: "In Conversation" },
];

const cols: Column<typeof pipeline[0]>[] = [
  { key: "investor", label: "Investor" },
  { key: "amount", label: "Interest Amount" },
  { key: "lastContact", label: "Last Contact" },
  { key: "status", label: "Status", render: r => (
    <KmanBadge variant={r.status === "Committed" ? "green" : r.status === "KYC Pending" ? "red" : "gold"}>{r.status}</KmanBadge>
  )},
];

const StartupInvestors = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Investor Interest</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} label="Profile Views" value={234} />
        <StatCard icon={Users} label="Interested Investors" value={5} />
        <StatCard icon={Handshake} label="Committed" value={1} />
        <StatCard icon={MessageSquare} label="Active Conversations" value={3} />
      </div>

      <KmanCard>
        <h3 className="font-display font-bold mb-4">Weekly Profile Views</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={viewsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </KmanCard>

      <div>
        <h3 className="font-display font-bold mb-4">Investor Pipeline</h3>
        <DataTable columns={cols} data={pipeline} />
      </div>
    </div>
  </DashboardLayout>
);

export default StartupInvestors;
