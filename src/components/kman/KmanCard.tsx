import { cn } from "@/lib/utils";

interface KmanCardProps {
  children: React.ReactNode;
  className?: string;
  goldBorder?: boolean;
  hover?: boolean;
  glass?: boolean;
}

export const KmanCard = ({ children, className, goldBorder, hover = true, glass }: KmanCardProps) => (
  <div
    className={cn(
      "rounded-xl border bg-card p-6",
      goldBorder && "border-t-2 border-t-primary",
      hover && "card-hover",
      glass && "bg-card/60 backdrop-blur-lg border-white/10",
      className
    )}
  >
    {children}
  </div>
);
