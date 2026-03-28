import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { StatCard } from "@/components/kman/StatCard";
import { DataTable, Column } from "@/components/kman/DataTable";
import { DollarSign, TrendingUp, CreditCard, ArrowUpDown } from "lucide-react";

const payments = [
  { id: "PAY-001", from: "James Makonda", to: "TanzaFarm", amount: "$25,000", type: "Investment", date: "Dec 15, 2024", status: "Completed" },
  { id: "PAY-002", from: "Fatuma Nkosi", to: "SwahiliPay", amount: "$40,000", type: "Investment", date: "Nov 20, 2024", status: "Completed" },
  { id: "PAY-003", from: "Robert Ochieng", to: "AfyaLink", amount: "$30,000", type: "Investment", date: "Dec 1, 2024", status: "Processing" },
  { id: "PAY-004", from: "BongoCash", to: "KMAN Platform", amount: "$500", type: "Platform Fee", date: "Dec 10, 2024", status: "Completed" },
  { id: "PAY-005", from: "TanzaFarm", to: "Dr. Amina Rashidi", amount: "$0", type: "Mentor Session", date: "Dec 15, 2024", status: "Pro Bono" },
  { id: "PAY-006", from: "KiliFood", to: "Samuel Kiprotich", amount: "$150", type: "Mentor Session", date: "Dec 14, 2024", status: "Completed" },
];

const cols: Column<typeof payments[0]>[] = [
  { key: "id", label: "ID" },
  { key: "from", label: "From" },
  { key: "to", label: "To" },
  { key: "amount", label: "Amount" },
  { key: "type", label: "Type", render: r => <KmanBadge variant={r.type === "Investment" ? "gold" : r.type === "Platform Fee" ? "green" : "red"}>{r.type}</KmanBadge> },
  { key: "date", label: "Date" },
  { key: "status", label: "Status", render: r => <KmanBadge variant={r.status === "Completed" ? "green" : r.status === "Processing" ? "gold" : "red"}>{r.status}</KmanBadge> },
];

const AdminPayments = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Payments</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} label="Total Volume" value={95650} prefix="$" />
        <StatCard icon={TrendingUp} label="Platform Revenue" value={48200} prefix="$" />
        <StatCard icon={CreditCard} label="Transactions" value={156} />
        <StatCard icon={ArrowUpDown} label="Pending" value={3} />
      </div>

      <DataTable columns={cols} data={payments} />
    </div>
  </DashboardLayout>
);

export default AdminPayments;
