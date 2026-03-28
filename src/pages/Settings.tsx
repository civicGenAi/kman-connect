import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";

const SettingsPage = () => (
  <DashboardLayout>
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-display font-bold">Settings</h2>
      <KmanCard>
        <h3 className="font-display font-bold mb-4">Profile Information</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Display Name</label>
            <input defaultValue="James Makonda" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input defaultValue="investor@kman.co" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Location</label>
            <input defaultValue="Dar es Salaam, Tanzania" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
      </KmanCard>
      <KmanCard>
        <h3 className="font-display font-bold mb-4">Notifications</h3>
        <div className="space-y-3">
          {["Email notifications", "Deal updates", "Mentor session reminders", "Weekly digest"].map((n) => (
            <label key={n} className="flex items-center justify-between">
              <span className="text-sm">{n}</span>
              <input type="checkbox" defaultChecked className="rounded border-input" />
            </label>
          ))}
        </div>
      </KmanCard>
    </div>
  </DashboardLayout>
);

export default SettingsPage;
