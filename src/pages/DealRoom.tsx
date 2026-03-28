import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FileText, Upload, Eye, MessageSquare, Check, Clock, AlertCircle } from "lucide-react";

const documents = [
  { name: "Pitch Deck", status: "Approved", icon: FileText, uploaded: true },
  { name: "Financial Model", status: "Approved", icon: FileText, uploaded: true },
  { name: "Business Plan", status: "Approved", icon: FileText, uploaded: true },
  { name: "KYC Documents", status: "Under Review", icon: FileText, uploaded: true },
  { name: "Term Sheet", status: "Required", icon: FileText, uploaded: false },
];

const statusIcon: Record<string, React.ReactNode> = {
  Approved: <Check className="h-4 w-4 text-success" />,
  "Under Review": <Clock className="h-4 w-4 text-primary" />,
  Required: <AlertCircle className="h-4 w-4 text-destructive" />,
};

const accessLog = [
  { investor: "James Makonda", doc: "Pitch Deck", time: "2 hours ago" },
  { investor: "Fatuma Nkosi", doc: "Financial Model", time: "1 day ago" },
  { investor: "Robert Ochieng", doc: "Business Plan", time: "3 days ago" },
];

const discussion = [
  { from: "James Makonda", role: "Investor", text: "The financials look solid. Can you clarify the CAC breakdown on slide 12?", time: "Dec 15" },
  { from: "TanzaFarm", role: "Startup", text: "Sure! CAC is $2.50 per farmer, broken down as: $1.50 field agents + $1.00 digital marketing.", time: "Dec 15" },
  { from: "James Makonda", role: "Investor", text: "That's very efficient. Let's move to term sheet discussion.", time: "Dec 16" },
];

const DealRoomPage = () => {
  const [selectedDoc, setSelectedDoc] = useState(0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-display font-bold">Deal Room</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Documents */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-display font-bold text-sm">Documents</h3>
            {documents.map((doc, i) => (
              <button
                key={doc.name}
                onClick={() => setSelectedDoc(i)}
                className={cn(
                  "w-full flex items-center gap-3 rounded-xl border p-3 text-left transition-colors",
                  selectedDoc === i ? "border-primary bg-primary/5" : "hover:bg-muted"
                )}
              >
                <doc.icon className="h-5 w-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{doc.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {statusIcon[doc.status]}
                    <KmanBadge variant={doc.status === "Approved" ? "green" : doc.status === "Under Review" ? "gold" : "red"} className="text-[10px]">
                      {doc.status}
                    </KmanBadge>
                  </div>
                </div>
              </button>
            ))}
            <KmanButton variant="primary" className="w-full"><Upload className="h-4 w-4" /> Upload Document</KmanButton>
          </div>

          {/* Preview */}
          <KmanCard className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold">{documents[selectedDoc].name}</h3>
              <KmanBadge variant={documents[selectedDoc].status === "Approved" ? "green" : "gold"}>
                {documents[selectedDoc].status}
              </KmanBadge>
            </div>
            <div className="h-64 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <FileText className="h-12 w-12 mx-auto mb-2 opacity-30" />
                <p className="text-sm">Document preview would appear here</p>
              </div>
            </div>
          </KmanCard>
        </div>

        {/* Access Log + Discussion */}
        <div className="grid gap-6 lg:grid-cols-2">
          <KmanCard>
            <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Eye className="h-4 w-4" /> Investor Access Log</h3>
            <div className="space-y-3">
              {accessLog.map((a, i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{a.investor}</p>
                    <p className="text-xs text-muted-foreground">Viewed {a.doc}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </KmanCard>

          <KmanCard>
            <h3 className="font-display font-bold mb-4 flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Discussion</h3>
            <div className="space-y-3">
              {discussion.map((d, i) => (
                <div key={i} className="rounded-lg bg-muted p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{d.from}</span>
                    <KmanBadge variant="slate" className="text-[10px]">{d.role}</KmanBadge>
                    <span className="text-xs text-muted-foreground ml-auto">{d.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.text}</p>
                </div>
              ))}
            </div>
          </KmanCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DealRoomPage;
