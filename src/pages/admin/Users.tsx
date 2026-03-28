import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { DataTable, Column } from "@/components/kman/DataTable";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

const users = [
  { name: "James Makonda", email: "investor@kman.co", role: "Investor", status: "Active", joined: "Mar 2023", kyc: "Verified" },
  { name: "Fatuma Nkosi", email: "fatuma@kman.co", role: "Investor", status: "Active", joined: "Jun 2023", kyc: "Verified" },
  { name: "Robert Ochieng", email: "robert@kman.co", role: "Investor", status: "Active", joined: "Sep 2023", kyc: "Verified" },
  { name: "John Mwamba", email: "startup@kman.co", role: "Startup", status: "Active", joined: "Jan 2024", kyc: "Verified" },
  { name: "Dr. Amina Rashidi", email: "mentor@kman.co", role: "Mentor", status: "Active", joined: "Feb 2023", kyc: "Verified" },
  { name: "Samuel Kiprotich", email: "samuel@kman.co", role: "Mentor", status: "Active", joined: "May 2023", kyc: "Verified" },
  { name: "Grace Mwangi", email: "grace@kman.co", role: "Mentor", status: "Inactive", joined: "Jul 2023", kyc: "Verified" },
  { name: "Hassan Juma", email: "hassan@kman.co", role: "Mentor", status: "Active", joined: "Aug 2023", kyc: "Pending" },
  { name: "Peter Waweru", email: "peter@kman.co", role: "Mentor", status: "Active", joined: "Oct 2023", kyc: "Verified" },
  { name: "David Temba", email: "david@kman.co", role: "Startup", status: "Suspended", joined: "Nov 2023", kyc: "Rejected" },
];

const cols: Column<typeof users[0]>[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", render: r => <KmanBadge variant={r.role === "Investor" ? "gold" : r.role === "Startup" ? "green" : "red"}>{r.role}</KmanBadge> },
  { key: "status", label: "Status", render: r => <KmanBadge variant={r.status === "Active" ? "green" : r.status === "Inactive" ? "gold" : "red"}>{r.status}</KmanBadge> },
  { key: "joined", label: "Joined" },
  { key: "kyc", label: "KYC", render: r => <KmanBadge variant={r.kyc === "Verified" ? "green" : r.kyc === "Pending" ? "gold" : "red"}>{r.kyc}</KmanBadge> },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold">Users</h2>
          <KmanButton variant="primary"><UserPlus className="h-4 w-4" /> Add User</KmanButton>
        </div>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <DataTable columns={cols} data={filtered} />
      </div>
    </DashboardLayout>
  );
};

export default AdminUsers;
