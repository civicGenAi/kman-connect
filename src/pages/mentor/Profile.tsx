import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { Save, Star, Clock, Users, Calendar } from "lucide-react";

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const MentorProfile = () => (
  <DashboardLayout>
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold">My Profile</h2>
        <KmanButton variant="primary"><Save className="h-4 w-4" /> Save Changes</KmanButton>
      </div>

      <KmanCard goldBorder className="flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-primary h-20 w-20 rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0">AR</div>
        <div className="flex-1 space-y-4 w-full">
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="text-sm font-medium mb-1.5 block">Full Name</label><input defaultValue="Dr. Amina Rashidi" className={inputCls} /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Title</label><input defaultValue="FinTech Expert" className={inputCls} /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Company</label><input defaultValue="M-Pesa Foundation" className={inputCls} /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Location</label><input defaultValue="Dar es Salaam, Tanzania" className={inputCls} /></div>
          </div>
          <div><label className="text-sm font-medium mb-1.5 block">Bio</label><textarea rows={3} defaultValue="Experienced FinTech professional with 15+ years in mobile payments across East Africa. Passionate about helping startups scale their financial products." className={inputCls} /></div>
          <div className="flex gap-2 flex-wrap">
            {["FinTech", "Scale-ups", "East Africa", "Mobile Payments"].map(t => <KmanBadge key={t} variant="gold">{t}</KmanBadge>)}
          </div>
        </div>
      </KmanCard>

      <div className="grid gap-4 md:grid-cols-4">
        <KmanCard className="text-center"><Star className="h-5 w-5 mx-auto text-primary mb-1" /><p className="text-2xl font-bold">4.9</p><p className="text-xs text-muted-foreground">Rating</p></KmanCard>
        <KmanCard className="text-center"><Clock className="h-5 w-5 mx-auto text-primary mb-1" /><p className="text-2xl font-bold">94h</p><p className="text-xs text-muted-foreground">Mentored</p></KmanCard>
        <KmanCard className="text-center"><Users className="h-5 w-5 mx-auto text-primary mb-1" /><p className="text-2xl font-bold">8</p><p className="text-xs text-muted-foreground">Mentees</p></KmanCard>
        <KmanCard className="text-center"><Calendar className="h-5 w-5 mx-auto text-primary mb-1" /><p className="text-2xl font-bold">47</p><p className="text-xs text-muted-foreground">Sessions</p></KmanCard>
      </div>

      <KmanCard>
        <h3 className="font-display font-bold mb-4">Availability</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {["Monday", "Wednesday", "Friday"].map(d => (
            <div key={d} className="p-3 rounded-lg border border-border">
              <p className="font-medium text-sm">{d}</p>
              <p className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</p>
              <KmanBadge variant="green" className="mt-2">Available</KmanBadge>
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-3 mt-3">
          {["Tuesday", "Thursday"].map(d => (
            <div key={d} className="p-3 rounded-lg border border-border">
              <p className="font-medium text-sm">{d}</p>
              <p className="text-xs text-muted-foreground">Limited slots</p>
              <KmanBadge variant="gold" className="mt-2">Limited</KmanBadge>
            </div>
          ))}
        </div>
      </KmanCard>
    </div>
  </DashboardLayout>
);

export default MentorProfile;
