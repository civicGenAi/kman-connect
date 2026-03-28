import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanButton } from "@/components/kman/KmanButton";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { useAuth } from "@/contexts/AuthContext";
import { Save, Shield, Bell, Eye, Lock, Globe, Trash2, Download, CreditCard } from "lucide-react";
import { useState } from "react";

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const SettingsPage = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: Eye },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Lock },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "advanced", label: "Advanced", icon: Globe },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-display font-bold">Settings</h2>

        {/* Tab Navigation */}
        <div className="flex gap-1 overflow-x-auto pb-2 border-b border-border">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl">
          {/* Profile */}
          {tab === "profile" && (
            <div className="space-y-6">
              <KmanCard>
                <h3 className="font-display font-bold mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {user?.avatar || "U"}
                    </div>
                    <div>
                      <KmanButton variant="secondary" size="sm">Change Avatar</KmanButton>
                      <p className="text-xs text-muted-foreground mt-1">JPG or PNG, max 2MB</p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div><label className="text-sm font-medium mb-1.5 block">Display Name</label><input defaultValue={user?.name || ""} className={inputCls} /></div>
                    <div><label className="text-sm font-medium mb-1.5 block">Email</label><input defaultValue={user?.email || ""} className={inputCls} /></div>
                    <div><label className="text-sm font-medium mb-1.5 block">Phone</label><input defaultValue="+255 712 345 678" className={inputCls} /></div>
                    <div><label className="text-sm font-medium mb-1.5 block">Location</label><input defaultValue="Dar es Salaam, Tanzania" className={inputCls} /></div>
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Bio</label><textarea rows={3} defaultValue="Experienced professional in the East African ecosystem." className={inputCls} /></div>
                  <div><label className="text-sm font-medium mb-1.5 block">LinkedIn URL</label><input defaultValue="https://linkedin.com/in/" className={inputCls} /></div>
                </div>
                <KmanButton variant="primary" className="mt-4"><Save className="h-4 w-4" /> Save Profile</KmanButton>
              </KmanCard>
            </div>
          )}

          {/* Security */}
          {tab === "security" && (
            <div className="space-y-6">
              <KmanCard>
                <h3 className="font-display font-bold mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div><label className="text-sm font-medium mb-1.5 block">Current Password</label><input type="password" className={inputCls} /></div>
                  <div><label className="text-sm font-medium mb-1.5 block">New Password</label><input type="password" className={inputCls} /></div>
                  <div><label className="text-sm font-medium mb-1.5 block">Confirm New Password</label><input type="password" className={inputCls} /></div>
                </div>
                <KmanButton variant="primary" className="mt-4"><Lock className="h-4 w-4" /> Update Password</KmanButton>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Add an extra layer of security</p>
                    <p className="text-xs text-muted-foreground mt-1">Use an authenticator app or SMS</p>
                  </div>
                  <KmanButton variant="secondary" size="sm">Enable 2FA</KmanButton>
                </div>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  {[
                    { device: "Chrome on MacOS", location: "Dar es Salaam", time: "Active now", current: true },
                    { device: "Safari on iPhone", location: "Dar es Salaam", time: "2 hours ago", current: false },
                    { device: "Firefox on Windows", location: "Nairobi", time: "3 days ago", current: false },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div>
                        <p className="text-sm font-medium">{s.device} {s.current && <KmanBadge variant="green">Current</KmanBadge>}</p>
                        <p className="text-xs text-muted-foreground">{s.location} · {s.time}</p>
                      </div>
                      {!s.current && <KmanButton variant="ghost" size="sm" className="text-destructive">Revoke</KmanButton>}
                    </div>
                  ))}
                </div>
              </KmanCard>
            </div>
          )}

          {/* Notifications */}
          {tab === "notifications" && (
            <KmanCard>
              <h3 className="font-display font-bold mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { cat: "Email Notifications", items: ["New investment opportunities", "Deal status updates", "Weekly portfolio digest", "Platform announcements"] },
                  { cat: "Push Notifications", items: ["New messages", "Session reminders", "KYC status changes", "Funding milestones"] },
                  { cat: "SMS Notifications", items: ["Critical security alerts", "Deal closing reminders"] },
                ].map(cat => (
                  <div key={cat.cat}>
                    <h4 className="font-medium text-sm mb-3">{cat.cat}</h4>
                    <div className="space-y-2.5 pl-1">
                      {cat.items.map(item => (
                        <label key={item} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{item}</span>
                          <input type="checkbox" defaultChecked className="rounded border-input h-4 w-4 accent-primary" />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <KmanButton variant="primary" className="mt-6"><Save className="h-4 w-4" /> Save Preferences</KmanButton>
            </KmanCard>
          )}

          {/* Privacy */}
          {tab === "privacy" && (
            <div className="space-y-6">
              <KmanCard>
                <h3 className="font-display font-bold mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: "Show my profile in public directory", desc: "Other users can find you in the network", on: true },
                    { label: "Show investment activity", desc: "Your deals are visible to connected users", on: true },
                    { label: "Allow profile indexing", desc: "Search engines can index your public profile", on: false },
                    { label: "Show online status", desc: "Other users can see when you're active", on: true },
                  ].map(p => (
                    <div key={p.label} className="flex items-center justify-between py-2">
                      <div><p className="text-sm font-medium">{p.label}</p><p className="text-xs text-muted-foreground">{p.desc}</p></div>
                      <input type="checkbox" defaultChecked={p.on} className="rounded border-input h-4 w-4 accent-primary" />
                    </div>
                  ))}
                </div>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">Data Management</h3>
                <div className="space-y-3">
                  <KmanButton variant="secondary"><Download className="h-4 w-4" /> Export My Data</KmanButton>
                  <p className="text-xs text-muted-foreground">Download a copy of all your data in JSON format</p>
                </div>
              </KmanCard>
            </div>
          )}

          {/* Billing */}
          {tab === "billing" && (
            <div className="space-y-6">
              <KmanCard>
                <h3 className="font-display font-bold mb-4">Current Plan</h3>
                <div className="flex items-center justify-between p-4 rounded-lg border-2 border-primary bg-primary/5">
                  <div>
                    <p className="font-display font-bold text-lg">Professional Plan</p>
                    <p className="text-sm text-muted-foreground">$29/month · Billed annually</p>
                  </div>
                  <KmanBadge variant="gold">Active</KmanBadge>
                </div>
                <div className="grid gap-3 md:grid-cols-3 mt-4">
                  {[
                    { plan: "Free", price: "$0/mo", features: ["Basic dashboard", "2 deals/month", "Community access"] },
                    { plan: "Professional", price: "$29/mo", features: ["Full dashboard", "Unlimited deals", "Priority matching", "Reports"] },
                    { plan: "Enterprise", price: "$99/mo", features: ["Everything in Pro", "API access", "Dedicated support", "Custom analytics"] },
                  ].map(p => (
                    <div key={p.plan} className={`p-4 rounded-lg border ${p.plan === "Professional" ? "border-primary border-2" : "border-border"}`}>
                      <p className="font-bold">{p.plan}</p>
                      <p className="text-lg font-bold mt-1">{p.price}</p>
                      <ul className="mt-3 space-y-1">{p.features.map(f => <li key={f} className="text-xs text-muted-foreground">✓ {f}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">Payment Method</h3>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div><p className="text-sm font-medium">Visa ending in 4242</p><p className="text-xs text-muted-foreground">Expires 12/2026</p></div>
                  <KmanButton variant="ghost" size="sm" className="ml-auto">Change</KmanButton>
                </div>
              </KmanCard>
            </div>
          )}

          {/* Advanced */}
          {tab === "advanced" && (
            <div className="space-y-6">
              <KmanCard>
                <h3 className="font-display font-bold mb-4">Language & Region</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div><label className="text-sm font-medium mb-1.5 block">Language</label>
                    <select defaultValue="en" className={inputCls}><option value="en">English</option><option value="sw">Swahili</option><option value="fr">French</option></select>
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Timezone</label>
                    <select defaultValue="eat" className={inputCls}><option value="eat">East Africa Time (UTC+3)</option><option value="cat">Central Africa Time (UTC+2)</option></select>
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Currency</label>
                    <select defaultValue="usd" className={inputCls}><option value="usd">USD ($)</option><option value="tzs">TZS (TSh)</option><option value="kes">KES (KSh)</option></select>
                  </div>
                  <div><label className="text-sm font-medium mb-1.5 block">Date Format</label>
                    <select defaultValue="dmy" className={inputCls}><option value="dmy">DD/MM/YYYY</option><option value="mdy">MM/DD/YYYY</option><option value="ymd">YYYY-MM-DD</option></select>
                  </div>
                </div>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">API Access</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">API Key</label>
                    <div className="flex gap-2">
                      <input value="kman_sk_••••••••••••••••••••" readOnly className={inputCls + " font-mono"} />
                      <KmanButton variant="secondary" size="sm">Copy</KmanButton>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Use this key to access the KMAN API</p>
                  </div>
                  <KmanButton variant="secondary" size="sm">Regenerate Key</KmanButton>
                </div>
              </KmanCard>

              <KmanCard>
                <h3 className="font-display font-bold mb-4">Integrations</h3>
                <div className="space-y-3">
                  {[
                    { name: "Google Calendar", status: "Connected", desc: "Sync mentor sessions" },
                    { name: "Slack", status: "Not Connected", desc: "Get deal notifications" },
                    { name: "WhatsApp Business", status: "Connected", desc: "Send investor updates" },
                  ].map(int => (
                    <div key={int.name} className="flex items-center justify-between p-3 rounded-lg border border-border">
                      <div><p className="text-sm font-medium">{int.name}</p><p className="text-xs text-muted-foreground">{int.desc}</p></div>
                      {int.status === "Connected" ? (
                        <KmanBadge variant="green">Connected</KmanBadge>
                      ) : (
                        <KmanButton variant="secondary" size="sm">Connect</KmanButton>
                      )}
                    </div>
                  ))}
                </div>
              </KmanCard>

              <KmanCard className="border-destructive/30">
                <h3 className="font-display font-bold mb-4 text-destructive">Danger Zone</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div><p className="text-sm font-medium">Deactivate Account</p><p className="text-xs text-muted-foreground">Temporarily disable your account</p></div>
                    <KmanButton variant="ghost" size="sm" className="text-destructive hover:text-destructive">Deactivate</KmanButton>
                  </div>
                  <div className="flex items-center justify-between">
                    <div><p className="text-sm font-medium">Delete Account</p><p className="text-xs text-muted-foreground">Permanently delete your account and all data</p></div>
                    <KmanButton variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 className="h-3 w-3" /> Delete</KmanButton>
                  </div>
                </div>
              </KmanCard>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
