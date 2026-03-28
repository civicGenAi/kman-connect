import { cn } from "@/lib/utils";

interface KmanBadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "green" | "red" | "slate" | "custom";
  className?: string;
}

const variantClasses: Record<string, string> = {
  gold: "bg-primary/15 text-primary border-primary/20",
  navy: "bg-secondary/15 text-secondary border-secondary/20",
  green: "bg-success/15 text-success border-success/20",
  red: "bg-destructive/15 text-destructive border-destructive/20",
  slate: "bg-muted text-muted-foreground border-border",
  custom: "",
};

export const KmanBadge = ({ children, variant = "gold", className }: KmanBadgeProps) => (
  <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border", variantClasses[variant], className)}>
    {children}
  </span>
);
