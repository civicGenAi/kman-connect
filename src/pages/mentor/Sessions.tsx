import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { DataTable, Column } from "@/components/kman/DataTable";
import { Video, Calendar, Clock } from "lucide-react";

const upcoming = [
  { startup: "TanzaFarm", topic: "Financial Modeling", date: "Dec 22", time: "10:00 AM", duration: "60 min" },
  { startup: "SwahiliPay", topic: "Scale Strategy", date: "Dec 18", time: "2:00 PM", duration: "45 min" },
  { startup: "NjiaLearn", topic: "Pitch Review", date: "Dec 20", time: "11:00 AM", duration: "30 min" },
];

const past = [
  { startup: "TanzaFarm", topic: "Unit Economics", date: "Dec 15", rating: 5, notes: "Covered cost structure and margins" },
  { startup: "SwahiliPay", topic: "Market Expansion", date: "Dec 12", rating: 5, notes: "Discussed Kenya entry strategy" },
  { startup: "KiliFood", topic: "Pricing Strategy", date: "Dec 10", rating: 4, notes: "Reviewed pricing tiers for B2B segment" },
  { startup: "AfyaLink", topic: "Fundraising Prep", date: "Dec 8", rating: 4, notes: "Refined pitch for Series A" },
  { startup: "BongoCash", topic: "Regulatory Compliance", date: "Dec 5", rating: 3, notes: "Reviewed licensing requirements" },
];

const pastCols: Column<typeof past[0]>[] = [
  { key: "startup", label: "Startup" },
  { key: "topic", label: "Topic" },
  { key: "date", label: "Date" },
  { key: "rating", label: "Rating", render: r => <span>{"⭐".repeat(r.rating)}</span> },
  { key: "notes", label: "Notes" },
];

const MentorSessions = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">My Sessions</h2>

      <div>
        <h3 className="font-display font-bold mb-4">Upcoming Sessions</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {upcoming.map(s => (
            <KmanCard key={s.startup + s.date} goldBorder className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-display font-bold">{s.startup}</p>
                <KmanBadge variant="gold"><Calendar className="h-3 w-3" /> {s.date}</KmanBadge>
              </div>
              <p className="text-sm text-muted-foreground">{s.topic}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {s.time}</span>
                <span>{s.duration}</span>
              </div>
              <KmanButton variant="primary" size="sm" className="w-full"><Video className="h-4 w-4" /> Join Session</KmanButton>
            </KmanCard>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold mb-4">Past Sessions</h3>
        <DataTable columns={pastCols} data={past} />
      </div>
    </div>
  </DashboardLayout>
);

export default MentorSessions;
