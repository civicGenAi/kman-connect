import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { MentorCard } from "@/components/kman/MentorCard";
import { mentors } from "@/data/mockData";
import { Search } from "lucide-react";
import { useState } from "react";

const FindMentor = () => {
  const [search, setSearch] = useState("");
  const filtered = mentors.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.expertise.some(e => e.toLowerCase().includes(search.toLowerCase())));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-display font-bold">Find a Mentor</h2>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or expertise..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(m => <MentorCard key={m.id} mentor={m} />)}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindMentor;
