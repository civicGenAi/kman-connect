import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { FundingProgress } from "@/components/kman/FundingProgress";
import { Save, Upload, Globe, MapPin, Users, Calendar } from "lucide-react";

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const StartupProfile = () => (
  <DashboardLayout>
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold">Startup Profile</h2>
        <KmanButton variant="primary"><Save className="h-4 w-4" /> Save Changes</KmanButton>
      </div>

      {/* Profile Header */}
      <KmanCard goldBorder className="flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-emerald-500 h-20 w-20 rounded-xl flex items-center justify-center text-white text-2xl font-bold shrink-0">TF</div>
        <div className="flex-1 space-y-4 w-full">
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="text-sm font-medium mb-1.5 block">Startup Name</label><input defaultValue="TanzaFarm" className={inputCls} /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Sector</label><select defaultValue="AgriTech" className={inputCls}><option>AgriTech</option><option>FinTech</option><option>EdTech</option><option>HealthTech</option></select></div>
          </div>
          <div><label className="text-sm font-medium mb-1.5 block">One-Liner</label><input defaultValue="Smart farming solutions for Tanzanian smallholders" className={inputCls} /></div>
          <div><label className="text-sm font-medium mb-1.5 block">Description</label><textarea rows={3} defaultValue="TanzaFarm provides IoT-powered soil monitoring and weather prediction tools to help smallholder farmers in Tanzania increase yields by up to 40%. Our platform connects farmers directly with buyers, eliminating middlemen." className={inputCls} /></div>
        </div>
      </KmanCard>

      <div className="grid gap-6 md:grid-cols-2">
        <KmanCard>
          <h3 className="font-display font-bold mb-4">Company Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /> Dar es Salaam, Tanzania</div>
            <div className="flex items-center gap-2 text-sm"><Globe className="h-4 w-4 text-muted-foreground" /> tanzafarm.co.tz</div>
            <div className="flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-muted-foreground" /> 12 team members</div>
            <div className="flex items-center gap-2 text-sm"><Calendar className="h-4 w-4 text-muted-foreground" /> Founded Jan 2023</div>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            <KmanBadge variant="green">AgriTech</KmanBadge>
            <KmanBadge variant="gold">Seed</KmanBadge>
            <KmanBadge variant="green">B2B</KmanBadge>
          </div>
        </KmanCard>

        <KmanCard>
          <h3 className="font-display font-bold mb-4">Funding Status</h3>
          <div className="flex justify-center py-4">
            <FundingProgress raised={67500} goal={150000} />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div><span className="text-muted-foreground">Goal:</span> <span className="font-medium">$150,000</span></div>
            <div><span className="text-muted-foreground">Raised:</span> <span className="font-medium">$67,500</span></div>
            <div><span className="text-muted-foreground">Stage:</span> <span className="font-medium">Seed</span></div>
            <div><span className="text-muted-foreground">Deadline:</span> <span className="font-medium">47 days</span></div>
          </div>
        </KmanCard>
      </div>

      {/* Team */}
      <KmanCard>
        <h3 className="font-display font-bold mb-4">Team Members</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { name: "John Mwamba", role: "CEO & Founder", initials: "JM" },
            { name: "Sarah Kimaro", role: "CTO", initials: "SK" },
            { name: "David Temba", role: "Head of Operations", initials: "DT" },
          ].map(m => (
            <div key={m.name} className="flex items-center gap-3 p-3 rounded-lg border border-border">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{m.initials}</div>
              <div><p className="text-sm font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.role}</p></div>
            </div>
          ))}
        </div>
      </KmanCard>

      {/* Pitch Deck */}
      <KmanCard>
        <h3 className="font-display font-bold mb-4">Pitch Deck</h3>
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">Drag & drop your pitch deck or click to upload</p>
          <p className="text-xs text-muted-foreground mt-1">PDF, max 25MB</p>
          <KmanButton variant="secondary" size="sm" className="mt-3">Upload Deck</KmanButton>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-muted flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm"><span>📄</span> TanzaFarm_PitchDeck_v3.pdf</div>
          <KmanBadge variant="green">Uploaded</KmanBadge>
        </div>
      </KmanCard>
    </div>
  </DashboardLayout>
);

export default StartupProfile;
