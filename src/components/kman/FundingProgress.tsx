import { cn } from "@/lib/utils";

interface FundingProgressProps {
  raised: number;
  goal: number;
  size?: "sm" | "lg";
  className?: string;
}

export const FundingProgress = ({ raised, goal, size = "lg", className }: FundingProgressProps) => {
  const pct = Math.min(Math.round((raised / goal) * 100), 100);
  const r = size === "lg" ? 70 : 40;
  const stroke = size === "lg" ? 10 : 6;
  const circ = 2 * Math.PI * r;
  const dim = (r + stroke) * 2;

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <svg width={dim} height={dim} className="transform -rotate-90">
        <circle cx={r + stroke} cy={r + stroke} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth={stroke} />
        <circle
          cx={r + stroke} cy={r + stroke} r={r} fill="none"
          stroke="url(#goldGrad)" strokeWidth={stroke}
          strokeDasharray={circ} strokeDashoffset={circ - (circ * pct) / 100}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(40, 100%, 49%)" />
            <stop offset="100%" stopColor="hsl(38, 88%, 43%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center" style={{ marginTop: size === "lg" ? 45 : 25 }}>
        <span className={cn("font-display font-bold", size === "lg" ? "text-2xl" : "text-lg")}>{pct}%</span>
        <span className="text-xs text-muted-foreground">funded</span>
      </div>
    </div>
  );
};
