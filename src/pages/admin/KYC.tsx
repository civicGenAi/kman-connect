import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { CheckCircle, XCircle, FileText, Eye } from "lucide-react";

const queue = [
  { name: "Hassan Juma", role: "Mentor", submitted: "Dec 16, 2024", docs: 3, email: "hassan@kman.co" },
  { name: "MaziwaFresh Ltd", role: "Startup", submitted: "Dec 14, 2024", docs: 5, email: "info@maziwafresh.co" },
  { name: "Angel Fund EAC", role: "Investor", submitted: "Dec 12, 2024", docs: 4, email: "kyc@angelfund.co" },
  { name: "DawaBot Health", role: "Startup", submitted: "Dec 10, 2024", docs: 3, email: "hello@dawabot.co" },
  { name: "TransAfrica Logistics", role: "Startup", submitted: "Dec 8, 2024", docs: 6, email: "admin@transafrica.co" },
];

const AdminKYC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-display font-bold">KYC Approval Queue</h2>
        <p className="text-muted-foreground text-sm">{queue.length} pending applications</p>
      </div>

      <div className="space-y-3">
        {queue.map((q, i) => (
          <KmanCard key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {q.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h3 className="font-medium text-sm">{q.name}</h3>
                <p className="text-xs text-muted-foreground">{q.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <KmanBadge variant={q.role === "Investor" ? "gold" : q.role === "Startup" ? "green" : "red"}>{q.role}</KmanBadge>
              <span className="text-xs text-muted-foreground">{q.submitted}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><FileText className="h-3 w-3" /> {q.docs} docs</span>
            </div>
            <div className="flex gap-2">
              <KmanButton variant="secondary" size="sm"><Eye className="h-3 w-3" /> Review</KmanButton>
              <KmanButton variant="primary" size="sm"><CheckCircle className="h-3 w-3" /> Approve</KmanButton>
              <KmanButton variant="ghost" size="sm" className="text-destructive hover:text-destructive"><XCircle className="h-3 w-3" /> Reject</KmanButton>
            </div>
          </KmanCard>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default AdminKYC;
