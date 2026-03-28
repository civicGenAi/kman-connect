import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { DataTable, Column } from "@/components/kman/DataTable";
import { investors } from "@/data/mockData";

const data = investors.map(i => ({
  name: i.name,
  location: i.location,
  deployed: `$${(i.deployed / 1000).toFixed(1)}K`,
  sectors: i.sectors.join(", "),
  deals: Math.floor(Math.random() * 8 + 2),
  status: "Active" as const,
}));

const cols: Column<typeof data[0]>[] = [
  { key: "name", label: "Investor" },
  { key: "location", label: "Location" },
  { key: "deployed", label: "Deployed" },
  { key: "sectors", label: "Sectors" },
  { key: "deals", label: "Deals" },
  { key: "status", label: "Status", render: () => <KmanBadge variant="green">Active</KmanBadge> },
];

const AdminInvestors = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Investors</h2>
      <DataTable columns={cols} data={data} />
    </div>
  </DashboardLayout>
);

export default AdminInvestors;
