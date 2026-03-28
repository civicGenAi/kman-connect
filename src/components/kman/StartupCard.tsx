import { cn } from "@/lib/utils";
import { Startup, sectorColors, stageColors } from "@/data/mockData";
import { KmanCard } from "./KmanCard";
import { KmanBadge } from "./KmanBadge";
import { KmanButton } from "./KmanButton";
import { ArrowRight } from "lucide-react";

interface StartupCardProps {
  startup: Startup;
  className?: string;
  onView?: () => void;
}

export const StartupCard = ({ startup, className, onView }: StartupCardProps) => {
  const progress = Math.round((startup.fundingRaised / startup.fundingGoal) * 100);

  return (
    <KmanCard className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-start gap-3">
        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-card", startup.color)}>
          {startup.initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-foreground truncate">{startup.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{startup.oneLiner}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <KmanBadge variant="custom" className={sectorColors[startup.sector]}>{startup.sector}</KmanBadge>
        <KmanBadge variant="custom" className={stageColors[startup.stage]}>{startup.stage}</KmanBadge>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-muted-foreground">Raised</span>
          <span className="font-semibold">${startup.fundingRaised.toLocaleString()} / ${startup.fundingGoal.toLocaleString()}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full gradient-gold transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mt-1">{progress}% funded</p>
      </div>
      <KmanButton variant="ghost" size="sm" className="self-start" onClick={onView}>
        View Deal <ArrowRight className="h-4 w-4" />
      </KmanButton>
    </KmanCard>
  );
};
