import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { MessageSquare, Calendar, TrendingUp } from "lucide-react";

const mentees = [
  { name: "TanzaFarm", sector: "AgriTech", sessions: 8, progress: "On Track", focus: "Financial Modeling", nextSession: "Dec 22", initials: "TF", color: "bg-emerald-500" },
  { name: "SwahiliPay", sector: "FinTech", sessions: 12, progress: "Excellent", focus: "Scaling", nextSession: "Dec 18", initials: "SP", color: "bg-blue-500" },
  { name: "NjiaLearn", sector: "EdTech", sessions: 4, progress: "Needs Attention", focus: "Product-Market Fit", nextSession: "Dec 20", initials: "NL", color: "bg-violet-500" },
  { name: "AfyaLink", sector: "HealthTech", sessions: 6, progress: "On Track", focus: "Fundraising", nextSession: "Jan 5", initials: "AL", color: "bg-rose-500" },
  { name: "KiliFood", sector: "FoodTech", sessions: 10, progress: "Excellent", focus: "Operations", nextSession: "Dec 21", initials: "KF", color: "bg-teal-500" },
  { name: "BongoCash", sector: "FinTech", sessions: 3, progress: "Needs Attention", focus: "Compliance", nextSession: "Jan 2", initials: "BC", color: "bg-indigo-500" },
];

const MentorMentees = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">My Mentees</h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mentees.map(m => (
          <KmanCard key={m.name} goldBorder className="space-y-3">
            <div className="flex items-center gap-3">
              <div className={`${m.color} h-12 w-12 rounded-lg flex items-center justify-center text-white text-sm font-bold`}>{m.initials}</div>
              <div>
                <h3 className="font-display font-bold">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.sector} · {m.focus}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <KmanBadge variant={m.progress === "Excellent" ? "green" : m.progress === "On Track" ? "gold" : "red"}>{m.progress}</KmanBadge>
              <span className="text-xs text-muted-foreground">{m.sessions} sessions</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" /> Next: {m.nextSession}
            </div>
            <div className="flex gap-2">
              <KmanButton variant="primary" size="sm" className="flex-1"><Calendar className="h-3 w-3" /> Schedule</KmanButton>
              <KmanButton variant="secondary" size="sm"><MessageSquare className="h-3 w-3" /></KmanButton>
            </div>
          </KmanCard>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default MentorMentees;
