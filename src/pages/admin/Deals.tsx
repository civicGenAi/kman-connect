import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { DataTable, Column } from "@/components/kman/DataTable";

const deals = [
  { id: "D-001", startup: "TanzaFarm", investor: "James Makonda", amount: "$25,000", stage: "Closed", date: "Dec 15, 2024" },
  { id: "D-002", startup: "SwahiliPay", investor: "Fatuma Nkosi", amount: "$40,000", stage: "Active", date: "Nov 20, 2024" },
  { id: "D-003", startup: "KiliFood", investor: "James Makonda", amount: "$15,000", stage: "Active", date: "Oct 10, 2024" },
  { id: "D-004", startup: "AfyaLink", investor: "Robert Ochieng", amount: "$30,000", stage: "Under Review", date: "Dec 1, 2024" },
  { id: "D-005", startup: "BongoCash", investor: "Fatuma Nkosi", amount: "$20,000", stage: "KYC Pending", date: "Dec 10, 2024" },
  { id: "D-006", startup: "NjiaLearn", investor: "Robert Ochieng", amount: "$10,000", stage: "Active", date: "Sep 5, 2024" },
  { id: "D-007", startup: "SafariLogix", investor: "James Makonda", amount: "$35,000", stage: "Under Review", date: "Dec 18, 2024" },
];

const cols: Column<typeof deals[0]>[] = [
  { key: "id", label: "Deal ID" },
  { key: "startup", label: "Startup" },
  { key: "investor", label: "Investor" },
  { key: "amount", label: "Amount" },
  { key: "date", label: "Date" },
  { key: "stage", label: "Status", render: r => (
    <KmanBadge variant={r.stage === "Closed" ? "green" : r.stage === "Active" ? "gold" : r.stage === "KYC Pending" ? "red" : "gold"}>{r.stage}</KmanBadge>
  )},
];

const AdminDeals = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Deals</h2>
      <DataTable columns={cols} data={deals} />
    </div>
  </DashboardLayout>
);

export default AdminDeals;
