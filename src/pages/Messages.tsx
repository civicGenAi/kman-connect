import { useState } from "react";
import { DashboardLayout } from "@/components/kman/DashboardLayout";
import { KmanCard } from "@/components/kman/KmanCard";
import { KmanBadge } from "@/components/kman/KmanBadge";
import { KmanButton } from "@/components/kman/KmanButton";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const contacts = [
  { id: "1", name: "James Makonda", role: "Investor", lastMsg: "Looking forward to the pitch deck review", unread: 2, avatar: "JM", color: "bg-blue-500" },
  { id: "2", name: "Dr. Amina Rashidi", role: "Mentor", lastMsg: "Let's schedule our next session", unread: 0, avatar: "AR", color: "bg-kman-gold" },
  { id: "3", name: "SwahiliPay", role: "Startup", lastMsg: "Thanks for the feedback on our financials", unread: 1, avatar: "SP", color: "bg-emerald-500" },
];

const conversations: Record<string, { from: string; text: string; time: string; mine: boolean }[]> = {
  "1": [
    { from: "James", text: "Hi, I reviewed your pitch deck. Very impressive traction!", time: "10:30 AM", mine: false },
    { from: "You", text: "Thank you James! We've grown 40% MoM in the last quarter.", time: "10:35 AM", mine: true },
    { from: "James", text: "That's great. Can we schedule a call to discuss terms?", time: "10:40 AM", mine: false },
    { from: "You", text: "Absolutely! How about Thursday at 2pm?", time: "10:45 AM", mine: true },
    { from: "James", text: "Looking forward to the pitch deck review", time: "11:00 AM", mine: false },
  ],
  "2": [
    { from: "Dr. Amina", text: "Great progress on the financial model!", time: "Yesterday", mine: false },
    { from: "You", text: "Thanks! Your feedback was really helpful.", time: "Yesterday", mine: true },
    { from: "Dr. Amina", text: "Let's schedule our next session", time: "Today", mine: false },
  ],
  "3": [
    { from: "SwahiliPay", text: "We just hit 10,000 active users!", time: "Dec 12", mine: false },
    { from: "You", text: "Congratulations! That's a great milestone.", time: "Dec 12", mine: true },
    { from: "SwahiliPay", text: "Thanks for the feedback on our financials", time: "Dec 13", mine: false },
  ],
};

const MessagesPage = () => {
  const [activeContact, setActiveContact] = useState("1");
  const [newMsg, setNewMsg] = useState("");
  const msgs = conversations[activeContact] || [];
  const contact = contacts.find((c) => c.id === activeContact);

  return (
    <DashboardLayout>
      <div className="flex gap-4 h-[calc(100vh-8rem)]">
        {/* Contact list */}
        <div className="w-72 shrink-0 overflow-y-auto border rounded-xl bg-card hidden md:block">
          <div className="p-4 border-b">
            <h3 className="font-display font-bold">Messages</h3>
          </div>
          {contacts.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveContact(c.id)}
              className={cn("w-full flex items-start gap-3 p-3 text-left hover:bg-muted transition-colors border-b",
                activeContact === c.id && "bg-muted"
              )}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${c.color} text-xs font-bold text-card`}>{c.avatar}</div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium truncate">{c.name}</p>
                  {c.unread > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-[10px] font-bold text-secondary">{c.unread}</span>
                  )}
                </div>
                <KmanBadge variant="slate" className="text-[10px] mb-1">{c.role}</KmanBadge>
                <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Conversation */}
        <div className="flex-1 flex flex-col border rounded-xl bg-card overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${contact?.color} text-xs font-bold text-card`}>{contact?.avatar}</div>
            <div>
              <p className="font-medium text-sm">{contact?.name}</p>
              <KmanBadge variant="slate" className="text-[10px]">{contact?.role}</KmanBadge>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={cn("flex", m.mine ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[75%] rounded-2xl px-4 py-2.5", m.mine ? "gradient-gold text-secondary" : "bg-muted")}>
                  <p className="text-sm">{m.text}</p>
                  <p className={cn("text-[10px] mt-1", m.mine ? "text-secondary/60" : "text-muted-foreground")}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={newMsg} onChange={(e) => setNewMsg(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <KmanButton variant="primary" size="md"><Send className="h-4 w-4" /></KmanButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
