import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { FileText, Download, Calendar } from "lucide-react";

const reports = [
  { name: "Q4 2024 Portfolio Summary", type: "Quarterly", date: "Dec 31, 2024", status: "Ready" },
  { name: "TanzaFarm Due Diligence Report", type: "Deal", date: "Dec 15, 2024", status: "Ready" },
  { name: "Q3 2024 Portfolio Summary", type: "Quarterly", date: "Sep 30, 2024", status: "Ready" },
  { name: "SwahiliPay Investment Memo", type: "Deal", date: "Aug 20, 2024", status: "Ready" },
  { name: "Annual Tax Summary 2024", type: "Tax", date: "Jan 15, 2025", status: "Processing" },
  { name: "Impact Report 2024", type: "Impact", date: "Feb 1, 2025", status: "Processing" },
];

const Reports = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-display font-bold">Reports</h2>
          <p className="text-muted-foreground text-sm">Download and manage your investment reports</p>
        </div>
        <KmanButton variant="primary"><FileText className="h-4 w-4" /> Generate Report</KmanButton>
      </div>

      <div className="space-y-3">
        {reports.map((r, i) => (
          <KmanCard key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{r.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <KmanBadge variant={r.type === "Quarterly" ? "gold" : r.type === "Deal" ? "green" : "red"}>{r.type}</KmanBadge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {r.date}</span>
                </div>
              </div>
            </div>
            {r.status === "Ready" ? (
              <KmanButton variant="secondary" size="sm"><Download className="h-3 w-3" /> Download</KmanButton>
            ) : (
              <KmanBadge variant="gold">Processing</KmanBadge>
            )}
          </KmanCard>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Reports;
