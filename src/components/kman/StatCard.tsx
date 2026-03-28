import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { KmanCard } from "./KmanCard";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend?: { value: number; positive: boolean };
  className?: string;
}

export const StatCard = ({ icon: Icon, label, value, prefix = "", suffix = "", trend, className }: StatCardProps) => {
  const count = useCountUp(value);

  return (
    <KmanCard goldBorder className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {trend && (
          <span className={cn("flex items-center gap-1 text-xs font-medium", trend.positive ? "text-success" : "text-destructive")}>
            {trend.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {trend.value}%
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold font-display text-foreground">
          {prefix}{count.toLocaleString()}{suffix}
        </p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </KmanCard>
  );
};
