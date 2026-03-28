import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { StatCard } from "@/components/kman/StatCard";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { DataTable, Column } from "@/components/kman/DataTable";
import { Calendar, Users, Star, Clock, Video } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sessionData = [
  { month: "Jul", sessions: 5 }, { month: "Aug", sessions: 7 }, { month: "Sep", sessions: 8 },
  { month: "Oct", sessions: 9 }, { month: "Nov", sessions: 10 }, { month: "Dec", sessions: 8 },
];

const upcomingSessions = [
  { day: "Mon", startup: "TanzaFarm", topic: "Financial Modeling", time: "10:00 AM" },
  { day: "Wed", startup: "SwahiliPay", topic: "Scale Strategy", time: "2:00 PM" },
  { day: "Fri", startup: "NjiaLearn", topic: "Pitch Review", time: "11:00 AM" },
];

const menteeData = [
  { startup: "TanzaFarm", sector: "AgriTech", sessions: 8, lastSession: "Dec 15", nextSession: "Dec 22", progress: "On Track" },
  { startup: "SwahiliPay", sector: "FinTech", sessions: 12, lastSession: "Dec 12", nextSession: "Dec 18", progress: "Excellent" },
  { startup: "NjiaLearn", sector: "EdTech", sessions: 4, lastSession: "Dec 10", nextSession: "Dec 20", progress: "Needs Attention" },
  { startup: "AfyaLink", sector: "HealthTech", sessions: 6, lastSession: "Dec 8", nextSession: "Jan 5", progress: "On Track" },
  { startup: "KiliFood", sector: "FoodTech", sessions: 10, lastSession: "Dec 14", nextSession: "Dec 21", progress: "Excellent" },
  { startup: "BongoCash", sector: "FinTech", sessions: 3, lastSession: "Dec 5", nextSession: "Jan 2", progress: "Needs Attention" },
];

const menteeCols: Column<typeof menteeData[0]>[] = [
  { key: "startup", label: "Startup" },
  { key: "sector", label: "Sector" },
  { key: "sessions", label: "Sessions" },
  { key: "lastSession", label: "Last Session" },
  { key: "nextSession", label: "Next Session" },
  { key: "progress", label: "Progress", render: (r) => (
    <KmanBadge variant={r.progress === "Excellent" ? "green" : r.progress === "On Track" ? "gold" : "red"}>
      {r.progress}
    </KmanBadge>
  )},
];

const feedback = [
  { startup: "TanzaFarm", rating: 5, quote: "Dr. Amina helped us completely rethink our unit economics. Invaluable.", date: "Dec 15" },
  { startup: "SwahiliPay", rating: 5, quote: "Her insights on scaling mobile payments in Tanzania were game-changing.", date: "Dec 12" },
  { startup: "KiliFood", rating: 4, quote: "Great session on pricing strategy. Would love a follow-up on distribution.", date: "Dec 10" },
];

const MentorDashboard = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="rounded-xl bg-violet-50 border border-violet-200 p-5">
        <h2 className="text-xl font-display font-bold text-foreground">Welcome, Dr. Amina Rashidi 🧠</h2>
        <p className="text-muted-foreground text-sm mt-1">You have 3 sessions scheduled this week</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Calendar} label="Total Sessions" value={47} />
        <StatCard icon={Users} label="Active Mentees" value={8} />
        <StatCard icon={Star} label="Avg. Rating" value={4.9} suffix=" ⭐" />
        <StatCard icon={Clock} label="Hours Mentored" value={94} suffix="h" />
      </div>

      {/* Upcoming sessions */}
      <div>
        <h3 className="font-display font-bold mb-4">Upcoming Sessions This Week</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingSessions.map((s) => (
            <KmanCard key={s.day} goldBorder className="flex flex-col gap-3">
              <KmanBadge variant="gold">{s.day}</KmanBadge>
              <p className="font-display font-bold">{s.startup}</p>
              <p className="text-sm text-muted-foreground">{s.topic}</p>
              <p className="text-sm font-medium">{s.time}</p>
              <KmanButton variant="primary" size="sm"><Video className="h-4 w-4" /> Join</KmanButton>
            </KmanCard>
          ))}
        </div>
      </div>

      {/* Session chart */}
      <KmanCard>
        <h3 className="font-display font-bold mb-4">Session History</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={sessionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
            <Tooltip />
            <Area type="monotone" dataKey="sessions" fill="hsl(40,100%,49%)" fillOpacity={0.2} stroke="hsl(40,100%,49%)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </KmanCard>

      {/* Mentees */}
      <div>
        <h3 className="font-display font-bold mb-4">Mentee Overview</h3>
        <DataTable columns={menteeCols} data={menteeData} />
      </div>

      {/* Feedback */}
      <div>
        <h3 className="font-display font-bold mb-4">Recent Feedback</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {feedback.map((f, i) => (
            <KmanCard key={i}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display font-bold text-sm">{f.startup}</span>
                <div className="flex">{Array.from({ length: f.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-primary text-primary" />)}</div>
              </div>
              <p className="text-sm text-muted-foreground italic">"{f.quote}"</p>
              <p className="text-xs text-muted-foreground mt-2">{f.date}</p>
            </KmanCard>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default MentorDashboard;
