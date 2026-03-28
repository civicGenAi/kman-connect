import { cn } from "@/lib/utils";

interface ActivityItem {
  icon: React.ReactNode;
  title: string;
  time: string;
  description?: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
  className?: string;
}

export const ActivityFeed = ({ items, className }: ActivityFeedProps) => (
  <div className={cn("space-y-4", className)}>
    {items.map((item, i) => (
      <div key={i} className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            {item.icon}
          </div>
          {i < items.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
        </div>
        <div className="pb-4">
          <p className="text-sm font-medium">{item.title}</p>
          {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
          <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
        </div>
      </div>
    ))}
  </div>
);
