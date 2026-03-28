import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { DataTable, Column } from "@/components/kman/DataTable";
import { mentors } from "@/data/mockData";

const data = mentors.map(m => ({
  name: m.name,
  title: m.title,
  company: m.company,
  rating: m.rating,
  sessions: m.sessions,
  hours: m.hoursMentored,
  available: m.available ? "Available" : "Booked",
}));

const cols: Column<typeof data[0]>[] = [
  { key: "name", label: "Mentor" },
  { key: "title", label: "Title" },
  { key: "company", label: "Company" },
  { key: "rating", label: "Rating", render: r => <span>{r.rating} ⭐</span> },
  { key: "sessions", label: "Sessions" },
  { key: "hours", label: "Hours" },
  { key: "available", label: "Status", render: r => <KmanBadge variant={r.available === "Available" ? "green" : "red"}>{r.available}</KmanBadge> },
];

const AdminMentors = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">Mentors</h2>
      <DataTable columns={cols} data={data} />
    </div>
  </DashboardLayout>
);

export default AdminMentors;
