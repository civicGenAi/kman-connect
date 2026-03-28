import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { FileText, Video, BookOpen, Upload, Download, ExternalLink } from "lucide-react";

const resources = [
  { title: "Financial Modeling Template", type: "Template", format: "Excel", icon: FileText, downloads: 24 },
  { title: "How to Pitch to East African VCs", type: "Guide", format: "PDF", icon: BookOpen, downloads: 56 },
  { title: "Scale-up Playbook: Mobile Payments", type: "Guide", format: "PDF", icon: BookOpen, downloads: 38 },
  { title: "Investor Due Diligence Checklist", type: "Template", format: "PDF", icon: FileText, downloads: 45 },
  { title: "Mentor Session Recording: Unit Economics", type: "Recording", format: "Video", icon: Video, downloads: 12 },
  { title: "Go-to-Market Strategy Framework", type: "Template", format: "PDF", icon: FileText, downloads: 31 },
];

const MentorResources = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-display font-bold">Resources</h2>
          <p className="text-muted-foreground text-sm">Share templates, guides, and recordings with your mentees</p>
        </div>
        <KmanButton variant="primary"><Upload className="h-4 w-4" /> Upload Resource</KmanButton>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((r, i) => (
          <KmanCard key={i} className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-sm">{r.title}</h3>
                <div className="flex gap-2 mt-1">
                  <KmanBadge variant={r.type === "Template" ? "gold" : r.type === "Guide" ? "green" : "red"}>{r.type}</KmanBadge>
                  <span className="text-xs text-muted-foreground">{r.format}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{r.downloads} downloads</span>
              <KmanButton variant="secondary" size="sm"><Download className="h-3 w-3" /> Download</KmanButton>
            </div>
          </KmanCard>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default MentorResources;
